from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS

import firebase_admin
from firebase_admin import credentials

app = Flask(__name__)

cred = credentials.Certificate('./threelittlepigsv2-b4ec708c9fff.json')
firebase_admin.initialize_app(
    cred,
    {
        'databaseURL': 'https://threelittlepigsv2.firebaseio.com'
    }
)

socket = SocketIO(app)
CORS(app)

import registration
