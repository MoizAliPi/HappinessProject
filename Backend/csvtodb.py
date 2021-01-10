import sqlite3, pandas as pd, numpy as numpy

dbName = 'HappinessReport'
conn = sqlite3.connect(dbName + '.sqlite')
cur = conn.cursor()

chunksize = 10
for chunk in pd.read_csv('2019.csv', chunksize=chunksize):
    chunk.columns = chunk.columns.str.replace(' ','_')
    # replacing spaces with underscores for column names
    chunk.to_sql(name='Countries', con=conn, if_exists='append')

cur.execute('SELECT * FROM Countries')

countries = list(map(lambda x: x[0], cur.description))
# Returns the column names
print(countries)
for row in cur:
    print(row)

cur.close()