from flask import Flask, jsonify
from flask import request
from flask import render_template
import datetime
application = Flask(__name__)

@application.route("/", methods=['POST','GET'])
def root():
  return render_template('/index.html')

@application.route('/get_message', methods = ['GET'])
def get_message():
  msg = request.args.get('message', 0, type=str)
  res = dict({
    'original': msg,
    'inverted': msg[::-1],
    'serverDate': str(datetime.datetime.now())
    })
  return jsonify(res)

if __name__ == "__main__":
  application.run(host='0.0.0.0', debug=True)