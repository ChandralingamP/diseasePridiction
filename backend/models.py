import pickle
import json
import matplotlib.pyplot as plt
import numpy as np
from pie import getFinalResult
# from main import getDisease
__model = None
__data_columns = None

def get_predicted_value(features, disease):
    global __data_columns
    global __model
    print("predicting bro wait")
    path = f'./artifacts/models/{disease}.pkl'
    if __model is None:
        with open(path, 'rb') as f:
            __model = pickle.load(f)
    arr = np.array(features)
    print(features)
    predicted = __model.predict([arr])[0]
    result = getFinalResult(predicted)
    return result


def load_saved_artifacts():
    global __data_columns
    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['diabetes']
    print("loading saved artifacts...done")

if __name__ == '__main__':
    print("pridicting")

    # {
    #     "features": [2, 146.0, 72.405184, 29.15342, 155.548223, 27.5, 0.240, 28.0],
    #     "disease": "diabetes"
    # }
# {
#     "features": [64.0, 1, 0.9, 0.3, 310.0, 61.0, 58.0, 7.0, 3.4, 0.90],
#     "disease": "liver"
# }

# liver = ['Age of the patient', 'Gender of the patient', 'Total Bilirubin',
#        'Direct Bilirubin', ' Alkphos Alkaline Phosphotase',
#        ' Sgpt Alamine Aminotransferase', 'Sgot Aspartate Aminotransferase',
#        'Total Protiens', ' ALB Albumin',
#        'A/G Ratio Albumin and Globulin Ratio']

# {
#     "features": [48.0,80.0,1.020,1.0,0.0,1,1,0,0,121.0,36.0,1.2,136.0,4.9,15.4,44.0,7800.0,5.2,1,1,0,0,0,0],
#     "disease": "kidney"
# }

# kidney = ['age', 'blood_pressure', 'specific_gravity', 'albumin', 'sugar',
#        'red_blood_cells', 'pus_cell', 'pus_cell_clumps', 'bacteria',
#        'blood_glucose_random', 'blood_urea', 'serum_creatinine', 'sodium',
#        'potassium', 'haemoglobin', 'packed_cell_volume',
#        'white_blood_cell_count', 'red_blood_cell_count', 'hypertension',
#        'diabetes_mellitus', 'coronary_artery_disease', 'appetite',
#        'peda_edema', 'aanemia', 'class']


#    [48.0,80.0,1.020,1.0,0.0,1,1,0,0,121.0,36.0,1.2,136.0,4.9,15.4,44.0,7800.0,5.2,1,1,0,0,0,0]


# {
#     "features": [17.99,10.38,122.80,1001.0,0.11840,0.27760,0.30010,0.14710,0.2419,0.07871,1.0950,0.9053,8.589,153.40,0.006399,0.04904,0.05373,0.01587,0.03003,0.006193,25.380,17.33,184.60,2019.0,0.16220,0.66560,0.7119,0.2654,0.4601,0.11890],
#     "disease": "cancer"
# }

# cancer
# data = ['radius_mean', 'texture_mean', 'perimeter_mean',
#        'area_mean', 'smoothness_mean', 'compactness_mean', 'concavity_mean',
#        'concave points_mean', 'symmetry_mean', 'fractal_dimension_mean',
#        'radius_se', 'texture_se', 'perimeter_se', 'area_se', 'smoothness_se',
#        'compactness_se', 'concavity_se', 'concave points_se', 'symmetry_se',
#        'fractal_dimension_se', 'radius_worst', 'texture_worst',
#        'perimeter_worst', 'area_worst', 'smoothness_worst',
#        'compactness_worst', 'concavity_worst', 'concave points_worst',
#        'symmetry_worst', 'fractal_dimension_worst']
#    [17.99,10.38,122.80,1001.0,0.11840,0.27760,0.30010,0.14710,0.2419,0.07871,1.0950,0.9053,8.589,153.40,0.006399,0.04904,0.05373,0.01587,0.03003,0.006193,25.380,17.33,184.60,2019.0,0.16220,0.66560,0.7119,0.2654,0.4601,0.11890]

# 
#
#
#

# heart = ['age', 'sex', 'cp', 'trtbps', 'chol', 'fbs', 'restecg', 'thalachh', 'exng', 'oldpeak', 'slp', 'caa', 'thall']

# {
#     "features": [	63,1,3,145,233,1,0,150,0,2.3,0,0,1],
#     "disease": "heart"
# }



# 
# [	63,1,3,145,233,1,0,150,0,2.3,0,0,1]
# 
# 