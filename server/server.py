from flask import Flask, request

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

import random
import string

app = Flask(__name__)

cred = credentials.Certificate('../threelittlepigsv2-b4ec708c9fff.json')
firebase_admin.initialize_app(
    cred,
    {
        'databaseURL': 'https://threelittlepigsv2.firebaseio.com'
    }
)

@app.route('/create-game')
def create_game():
    return {
        'gameCode': ''.join((random.choice(string.ascii_letters + string.digits) for i in range(5)))
    }

@app.route('/create-player', methods=['POST'])
def create_player():
    gameCode = request.form.get('game_code')
    username = request.form.get('username')

    # boardsResult = db.reference('/boards').get()
    # Check if gameCode already exists
    gamesResult = firebase.get('/games', None)
    existingGame = None
    for gameId in gamesResult.keys():
        if gameCode in gamesResult[gameId]:
            existingGame = gamesResult[gameId][gameCode]
            break

    boardsResult = firebase.get('/boards', None)
    boardsResult.pop(0)

    cardsResult = db.reference('/cards').get()
    cardsResult.pop(0)

    # Remove boards & cards that have already been assigned
    if existingGame != None:
        for player in existingGame.values():
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
    
    db.reference('games').child(gameCode).set({ username: result })
    return result
