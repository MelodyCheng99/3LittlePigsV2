from server import app, socket

from flask import request
from flask_socketio import emit, join_room
from firebase_admin import db

import random
import string

@app.route('/create-game')
def create_game():
    # TODO: Ensure gameCode doesn't already exist in database
    return {
        'gameCode': ''.join((random.choice(string.ascii_letters + string.digits) for i in range(5)))
    }

@app.route('/create-player', methods=['POST'])
def create_player():
    gameCode = request.form.get('game_code')
    username = request.form.get('username')

    gameResult = db.reference('games/' + gameCode).get()

    boardsResult = db.reference('boards').get()
    boardsResult.pop(0)

    cardsResult = db.reference('cards').get()
    cardsResult.pop(0)

    stats = {
        'coins': 3,
        'bricks': 0,
        'sticks': 0,
        'mud': 0,
        'stones': 0,
        'wolves': 0,
        'pots': 0,
        'spoons': 0,
        'apples': 0,
        'flowers': 0,
        'glass': 0,
        'water': 0,
        'victory points': 0
    }

    opponents = []
    if gameResult != None:
        for player in gameResult:
            opponents.append(
                {
                    'username': player,
                    'board': gameResult[player]['board'],
                    'cards': gameResult[player]['cards'],
                    'stats': stats
                }
            )
            boardsResult.remove(gameResult[player]['board'])
            for card in gameResult[player]['cards']:
                cardsResult.remove(card)

    board = random.sample(boardsResult, 1)[0]
    cards = random.sample(cardsResult, 7)

    result = {
        'board': board,
        'cards': cards,
        'stats': stats
    }

    if gameResult != None:
        db.reference('games').child(gameCode).update({ username: result })
    else:
        db.reference('games').child(gameCode).set({ username: result })

    result['opponents'] = opponents
    return result

@socket.on('join_game')
def on_join_game(data):
    join_room(data['gameCode'])
    opponentResult = db.reference('games/' + data['gameCode']).get()[data['username']]
    opponentResult['username'] = data['username']
    emit('opponent_joined_game', opponentResult, room=data['gameCode'], broadcast=True)
