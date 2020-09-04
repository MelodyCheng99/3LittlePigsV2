from server import app, socket

from flask import request
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

    if gameResult != None:
        for player in gameResult.values():
            boardsResult.remove(player['board'])
            for card in player['cards']:
                cardsResult.remove(card)

    board = random.sample(boardsResult, 1)[0]
    cards = random.sample(cardsResult, 7)

    stats = {
        'Coins': 3,
        'Bricks': 0,
        'Sticks': 0,
        'Mud': 0,
        'Stones': 0,
        'Wolves': 0,
        'Pots': 0,
        'Spoons': 0,
        'Apples': 0,
        'Flowers': 0,
        'Glass': 0,
        'Water': 0,
        'Victory Points': 0
    }

    result = {
        'board': board,
        'cards': cards,
        'stats': stats
    }

    if gameResult != None:
        db.reference('games').child(gameCode).update({ username: result })
    else:
        db.reference('games').child(gameCode).set({ username: result })

    return result

# TODO: Modify to join game instead of just connect
@socket.on('connect')
def on_connect():
    print('user connected')
    emit('retrieve_active_users', broadcast=True)