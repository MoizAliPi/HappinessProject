# getting flask and marshmallow and sqlAlchemy  
from numpy import genfromtxt
from flask import Flask, request , jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import Column, Integer, Float, Date, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os

# init app
app = Flask(__name__)

#init db
db = SQLAlchemy(app)
#init ma
ma = Marshmallow(app)

def Load_Data(file_name):
    data = genfromtxt(file_name, delimiter=',', skip_header=1, converters={0: lambda s: str(s)})
    return data.tolist()

Base = declarative_base()

#Countries Class/Model
class Countries(Base):
    __tablename__ = 'Countries'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), unique=True)
    score = Column(Float)
    gdp_per_capita = Column(Float)
    soc_support = Column(Float)
    life_expec = Column(Float)
    freedom_choice = Column(Float)
    generosity = Column(Float)
    percep_corrupt = Column(Float)

# Product Schema
class CountrySchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'score', 'gdp_per_capita', 'soc_support', 'life_expec', 'freedom_choice', 'generosity', 'percep_corrupt')


#init schema
country_schema = CountrySchema()
countries_schema = CountrySchema(many=True)

# Get all data for the countries
@app.route('/countries', methods=['GET'])
def get_countries():
    all_countries = Countries
    result = country_schema(all_countries)
    return jsonify(result.data)


# Run Server
if __name__ == '__main__':
   #Create the database
    engine = create_engine('sqlite:///HappinessProj.db')
    Base.metadata.create_all(engine)

    #Create the session
    session = sessionmaker()
    session.configure(bind=engine)
    s = session()

    try:
        file_name = "2019.csv" #sample CSV file used:  http://www.google.com/finance/historical?q=NYSE%3AT&ei=W4ikVam8LYWjmAGjhoHACw&output=csv
        data = Load_Data(file_name) 
        x = 0

        for i in data:
            record = Countries(**{
                'id': x,
                'name' : i[1],
                'score' : i[2],
                'gdp_per_capita' : i[3],
                'soc_support' : i[4],
                'life_expec' : i[5],
                'freedom_choice': i[6],
                'generosity': i[7],
                'percep_corrupt': i[8]
            })
            s.add(record) #Add all the records

        s.commit() #Attempt to commit all the records
    except:
        s.rollback() #Rollback the changes on error
    finally:
        s.close() #Close the connection  
    app.run(debug=True)