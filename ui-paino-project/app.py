from flask import Flask,redirect,url_for
from flask import render_template
from flask import Response, request, jsonify

app = Flask(__name__)

quiz_results={
    'theory':[],
    'scales':[],
    'scales_major':[],
    'scales_id':[],
    'scales_2':[]
}
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

@app.route('/results')
def results():  # put application's code here
    return render_template("results.html",quiz_results=quiz_results)

@app.route('/practice')
def practice():  # put application's code here
    return render_template("practice.html")

@app.route('/submit-your-answer-theory', methods=['POST'])
def submit_answer_theory():
    print("I am clicked")
    selected_scale = request.form.get('scales')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    quiz_results['theory'].append(selected_scale)
    print(quiz_results)
    return '',204
@app.route('/submit-your-answer', methods=['POST'])
def submit_answer():
    print("I am clicked")
    selected_scale = request.form.get('scales')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    quiz_results['scales'].append(selected_scale)
    print(quiz_results)
    return '',204

@app.route('/submit-your-answer-2', methods=['POST'])
def submit_answer_2():
    print("I am clicked")
    selected_scale = request.form.get('scales')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    quiz_results['scales_major'].append(selected_scale)
    print(quiz_results)
    return '',204

@app.route('/submit-your-answer-3', methods=['POST'])
def submit_answer_3():
    print("I am clicked")
    selected_scale = request.form.get('scales3')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    quiz_results['scales_id'].append(selected_scale)
    print(quiz_results)
    return '',204


@app.route('/submit-your-answer-4', methods=['POST'])
def submit_answer_4():
    print("I am clicked")
    selected_scale = request.form.get('scales4')
    # You can add code to check the answer, save to a database, etc.
    print(selected_scale)
    quiz_results['scales_2'].append(selected_scale)
    print(quiz_results)
    return '',204


if __name__ == '__main__':
    app.run(debug=True)
