from flask import Flask,redirect,url_for
from flask import render_template
from flask import Response, request, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here a
    return render_template("home.html")

@app.route('/learn/theory')
def learn_theory():  # put application's code here
    return render_template("learn_theory.html")

@app.route('/learn/scales')
def learn_scales():  # put application's code here
    return render_template("learn_scales.html")

@app.route('/quiz/theory')
def quiz_theory():  # put application's code here
    return render_template("quiz_theory.html")

@app.route('/quiz/scales/1')
def quiz_scale():  # put application's code here
    return render_template("quiz_scales.html")

@app.route('/quiz/scales/2')
def quiz_scale_2():  # put application's code here
    return render_template("quiz_scales_major.html")

@app.route('/quiz/scales/3')
def quiz_scale_3():  # put application's code here
    return render_template("quiz_scales_identify.html")

@app.route('/quiz/scales/4')
def quiz_scale_4():  # put application's code here
    return render_template("quiz_scales_2.html")

@app.route('/practice')
def practice():  # put application's code here
    return render_template("practice.html")


if __name__ == '__main__':
    app.run()
