from flask import Flask, request,jsonify,send_file
from flask_restx import Api, Resource, fields
from models import get_predicted_value
from flask_cors import CORS
app = Flask(__name__)
api = Api(app, doc='/docs')
CORS(app)
s = "C:/Users/Chandralingam/Desktop/diseasePridiction/backend/cache/image.jpeg"
@api.route('/image')
class HelloResource(Resource):
    def get(sef):
        return send_file(s)
__features = []
__disease = ''

def getDisease():
    return __disease
@api.route('/predict')
class RecipesResource(Resource):
    def get(self):
        global __features
        """ Get Predicted Result"""
        res = get_predicted_value(__features,__disease)
        respone = jsonify(features = __features,result = str(res[0]), image = str(res[1]),value=str(round(res[2],2)))
        # respone = jsonify(features = __features,result = str(res[0]),value=str(round(res[1],2)))
        respone.headers.add("Access-Control-Allow-Origin","*")
        return respone
    def post(self):
        """get features"""
        global __features
        global __disease
        disease = request.args
        print(disease)
        req = request.get_json()
        print(req)
        __features = req["features"]
        __features = [ float(x) for x in __features]
        __disease = req["disease"]
        print(__features)
        print(__disease)
        return "recived successfully"


if __name__ == "__main__":
    app.run(debug=True)
