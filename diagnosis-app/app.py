from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
import joblib
model = joblib.load("illness_model.pkl")
features = ["fever", "cough", "headache", "nausea"]

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    input_vector = [1 if symptom in data["symptoms"] else 0 for symptom in features]
    result = model.predict([input_vector])[0]
    return jsonify({"diagnosis": result})

if __name__ == "__main__":
    app.run(debug=True)
