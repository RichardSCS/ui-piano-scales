from flask import Flask,redirect,url_for
from flask import render_template
from flask import Response, request, jsonify
import time

app = Flask(__name__)

quiz_results={
    'theory'        : False,
    'scales'        : False,
    'scales_major'  : False,
    'scales_id'     : False,
    'scales_2'      : False
}

quiz_results_time = {
    'theory'        : 0,
    'scales'        : 0,
    'scales_major'  : 0,
    'scales_id'     : 0,
    'scales_2'      : 0
}

quiz_lock = {
    'theory'       : False,
    'scales'       : False,
    'scales_major' : False,
    'scales_id'    : False,
    'scales_2'     : False
}

quiz_time = {
    'theory'       : [0,0],
    'scales'       : [0,0],
    'scales_major' : [0,0],
    'scales_id'    : [0,0],
    'scales_2'     : [0,0]
}

total_correct = 0

def CalcCorrect():
    global total_correct
    correct = 0
    for answer in quiz_results:
        if quiz_results[answer] == True:
            correct += 1
        totalTime = quiz_time[answer][1] - quiz_time[answer][0]
        quiz_results_time[answer] = totalTime
    total_correct = correct

@app.route('/')
def hello_world():  # put application's code here a
    return render_template("home.html")

@app.route('/learn-theory')
def learn_theory():  # put application's code here
	id = request.args.get('id')
	# You can now pass this ID to your template
	return render_template("learn_theory.html", id=id)
	#return render_template("learn_theory.html")

@app.route('/learn-scales')
def learn_scales():  # put application's code here
    id = request.args.get('id')
    return render_template("learn_scales.html", id=id)

@app.route('/quiz/theory')
def quiz_theory():  # put application's code here
    if not(quiz_lock['theory']):
        quiz_time['theory'][0] = time.time()
    return render_template("quiz_theory.html")

@app.route('/quiz/scales/1')
def quiz_scale():  # put application's code here
    if not(quiz_lock['scales']):
        quiz_time['scales'][0] = time.time()
    return render_template("quiz_scales.html", lock=quiz_lock['scales'])

@app.route('/quiz/scales/2')
def quiz_scale_2():  # put application's code here
    if not(quiz_lock['scales_major']):
        quiz_time['scales_major'][0] = time.time()
    return render_template("quiz_scales_major.html", lock=quiz_lock['scales_major'])

@app.route('/quiz/scales/3')
def quiz_scale_3():  # put application's code here
    if not(quiz_lock['scales_id']):
        quiz_time['scales_id'] = time.time()
    return render_template("quiz_scales_identify.html", lock=quiz_lock['scales_id'])

@app.route('/quiz/scales/4')
def quiz_scale_4():  # put application's code here
    if not(quiz_lock['scales_2']):
        quiz_time['scales_2'] = time.time()
    return render_template("quiz_scales_2.html", lock=quiz_lock['scales_2'])

@app.route('/results')
def results():  # put application's code here
    return render_template("results.html",quiz_results=quiz_results, quiz_results_time=quiz_results_time, total_correct=total_correct)

@app.route('/practice')
def practice():  # put application's code here
    return render_template("practice.html")

@app.route('/restart')
def restart():
    for item in quiz_lock:
        quiz_lock[item] = False
    for item in quiz_results:
        quiz_results[item] = False
    return render_template('quiz_theory.html')

@app.route('/submit-your-answer-theory', methods=['POST'])
def submit_answer_theory():
    #print("I am clicked 1")
    selected_scale = request.form.get('scales')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    if selected_scale == "C4":
        quiz_results['theory'] = True
        print("True")
    else:
        quiz_results['theory'] = False
        print("False")
    #print(quiz_results)
    quiz_time['theory'][1] = time.time()
    CalcCorrect()
    return '',204
@app.route('/submit-your-answer', methods=['POST'])
def submit_answer():
    #print("I am clicked 2")
    selected_scale = request.form.get('scales')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    quiz_lock['scales'] = True
    if selected_scale == 'A major':
        quiz_results['scales'] = True
    else:
        quiz_results['scales'] = False
    #print(quiz_results)
    quiz_time['scales'][1] = time.time()
    CalcCorrect()
    return '',204

@app.route('/submit-your-answer-2', methods=['POST'])
def submit_answer_2():
    #print("I am clicked 3")
    selected_scale = request.form.get('scales')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    if selected_scale == "B major":
        quiz_results['scales_major'] = True
    else:
        quiz_results['scales_major'] = False
    #print(quiz_results)
    quiz_time['scales_major'][1] = time.time()
    CalcCorrect()
    return '',204

@app.route('/submit-your-answer-3', methods=['POST'])
def submit_answer_3():
    #print("I am clicked 4")
    selected_scale = request.form.get('scales3')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    if selected_scale == 'D flat major':
        quiz_results['scales_id'] = True
    else:
        quiz_results['scales_id'] = False
    #print(quiz_results)
    quiz_time['scales_id'][1] = time.time()
    CalcCorrect()
    return '',204


@app.route('/submit-your-answer-4', methods=['POST'])
def submit_answer_4():
    #print("I am clicked 5")
    selected_scale = request.form.get('scales4')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    if selected_scale == 'G':
        quiz_results['scales_2'] = True
    else:
        quiz_results['scales_2'] = False
    #print(quiz_results)
    quiz_time['scales_2'][1] = time.time()
    CalcCorrect()
    return '',204


if __name__ == '__main__':
    app.run(debug=True)
