import numpy as np
import pandas as pd
from flask import Flask, request , jsonify
from flask_cors import CORS, cross_origin


# init app
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

#testing call
@app.route('/', methods=['GET'])
@cross_origin(origin='*', headers=['Content-Type'])
def get_data():
    return "<h1>Hey, so happy to see you!</h1"


# Get a country data
@app.route('/country', methods=['GET'])
@cross_origin(origin='*', headers=['Content-Type'])
def get_country():
    countryName = request.args.get('name')
    happDf = pd.read_csv("Data/2020.csv")
    rsltDf = happDf[happDf["CountryName"] == countryName]
    idxx = rsltDf.iloc[0]["Rank"]-1
    rsltDf = rsltDf.rename(index={idxx: 'data'})
    print(rsltDf)
    return rsltDf.to_json()



# run server
if __name__ == '__main__':
    app.run(debug=True)