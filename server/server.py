from flask import Flask, request

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

@app.route('/create-player', methods=['POST'])
def create_player():
    gameCode = request.form.get('game_code')
    username = request.form.get('username')

    boardsResult = firebase.get('/boards', None)
    boardsResult.pop(0)
    board = random.sample(boardsResult, 1)[0]

    cardsResult = firebase.get('/cards', None)
    cardsResult.pop(0)
    cards = random.sample(cardsResult, 7)

    result = {
        'board': board,
        'cards': cards
    }
    firebase.post(
        '/games', 
        { 
            gameCode: {
                username: result
            }
        }
    )
    return result

    
    