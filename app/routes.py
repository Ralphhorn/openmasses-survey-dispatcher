from flask import render_template, request, redirect, url_for
from flask import escape
from app import app, mydb
from dotenv import load_dotenv, find_dotenv
import os
import random


@app.route('/')
@app.route('/index')
def hello_world():
    return render_template('survey.html', title='OpenMasses Survey', user=None)


def new_user(user_id):
    survey_nr = random.randint(1, 15)

    query = f"INSERT INTO survey (googleid,surveynr) VALUES('{user_id}','{survey_nr}')"
    cursor = mydb.cursor()
    cursor.execute(query)

    mydb.commit()

    cursor.close()

    return survey_nr


@app.route('/get_survey', methods=['GET', 'POST'])
def get_survey():
    user_id = request.args['googleid']
    cursor = mydb.cursor(buffered=True)

    cursor.execute(f"SELECT surveynr FROM survey WHERE googleid='{user_id}'")
    result = cursor.fetchall()

    if result:
        survey_nr = result[0][0]
    else:
        survey_nr = new_user(user_id)

    cursor.close()
    return f"{survey_nr}"


if __name__ == '__main__':
    app.run()
