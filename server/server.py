from flask import Flask
import random
import string

app = Flask(__name__)

@app.route('/create-game')
def create_game():
    return {
        'gameCode': ''.join((random.choice(string.ascii_letters + string.digits) for i in range(5)))
    }

@app.route('/create-player')
def create_player():
    pass
    