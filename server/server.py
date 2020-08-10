from flask import Flask

import random
import string

from firebase import firebase

app = Flask(__name__)

firebase = firebase.FirebaseApplication('https://threelittlepigsv2.firebaseio.com', None)

@app.route('/create-game')
def create_game():
    return {
        'gameCode': ''.join((random.choice(string.ascii_letters + string.digits) for i in range(5)))
    }

@app.route('/create-player')
def create_player():
    boardsResult = firebase.get('/boards', None)
    boardsResult.pop(0)
    board = boardsResult[int(random.uniform(0, len(boardsResult) - 1))]

    cardsResult = firebase.get('/cards', None)
    cardsResult.pop(0)
    cards = random.sample(cardsResult, 7)

    return {
        'board': board,
        'cards': cards
    }
    