import pickle
import json
import matplotlib.pyplot as plt
import numpy as np
from pie import getFinalResult

__model = None
__data_columns = None

def get_predicted_value(features):
    global __data_columns
    global __model
    if __model is None:
        with open('./artifacts/diabetes_pickle_with.pkl', 'rb') as f:
            __model = pickle.load(f)
    arr = np.array(features)
    print(features)
    arr = np.zeros(len(features))
    arr[0] = features["Pregnancies"]
    arr[1] = features["Glucose"]
    arr[2] = features["BloodPressure"]
    arr[3] = features["SkinThickness"]
    arr[4] = features["Insulin"]
    arr[5] = features["BMI"]
    arr[6] = features["DiabetesPedigreeFunction"]
    arr[7] = features["Age"]
    predicted = __model.predict([arr])[0]
    result = getFinalResult(predicted)
    return result

def load_saved_artifacts():
    global __model
    
    global __data_columns
    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
    
    print("loading saved artifacts...done")


if __name__ == '__main__':
    load_saved_artifacts()

    print(get_predicted_value([2,146.0,72.405184,29.15342,155.548223,27.5,0.240,28.0]))