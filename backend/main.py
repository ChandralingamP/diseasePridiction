from flask import Flask, request,jsonify,send_file
from flask_restx import Api, Resource, fields
from models import get_predicted_value
from flask_cors import CORS
app = Flask(__name__)
api = Api(app, doc='/docs')
CORS(app)

# s = "C:/Users/Chandralingam/Desktop/diseasePridiction/backend/cache/cached1.png"
s = "C:/Users/Chandralingam/Desktop/diseasePridiction/backend/cache/image.jpeg"
@api.route('/image')
class HelloResource(Resource):
    def get(sef):
        return send_file(s)

__features = None

diabetes_model = api.model(
    "Diabetes",
    {
        "Pregnancies" : fields.Float(),
        "Glucose" : fields.Float(),	
        "BloodPressure" : fields.Float(),
        "SkinThickness" : fields.Float(),	
        "Insulin" : fields.Float(),
        "BMI" : fields.Float(),	
        "DiabetesPedigreeFunction" : fields.Float(),
        "Age" : fields.Float()
    }
)
@api.route('/api/diabetes')
class RecipesResource(Resource):
    # @api.marshal_with(result_model)
    def get(self):
        global __features
        """ Get Predicted Result"""
        res = get_predicted_value(__features)
        respone = jsonify(features = __features,result = str(res[0]), image = str(res[1]),value=str(round(res[2],2)))
        respone.headers.add("Access-Control-Allow-Origin","*")
        return respone

    @api.marshal_with(diabetes_model)
    def post(self):
        global __features
        """get features"""
        __features = request.get_json()
        print(__features)
        return __features, 201


if __name__ == "__main__":
    app.run(debug=True)
