from flask import Flask
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())
mydb = mysql.connector.connect(host=os.getenv('db_host'), user=os.getenv('db_user'), password=os.getenv('db_password'),
                               database=os.getenv('db_name'))

app = Flask(__name__)
CORS(app)

from app import routes
