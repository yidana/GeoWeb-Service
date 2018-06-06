import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'GeoWebService.settings')
import django
django.setup()
from app.models import RegionalPopulationByEthnicity
import csv

def populate():
    data=csv.reader(open(r'E:\My Stuff\Project Work Test\GeoWebService\app\static\app\csv\ETHNICITY_REGION.csv'),delimiter=',')
    for row in data:
        if row[0] !='REGION':
            regional_ethnicity=RegionalPopulationByEthnicity()
            regional_ethnicity.REGION=row[0]
            regional_ethnicity.Capital=row[1]
            regional_ethnicity.Total=row[2]
            regional_ethnicity.Akan=row[3]
            regional_ethnicity.Ga_Dangme=row[4]
            regional_ethnicity.Ewe=row[5]
            regional_ethnicity.Guan=row[6]
            regional_ethnicity.Gurma=row[7]
            regional_ethnicity.Mole_Dagbani=row[8]
            regional_ethnicity.Grusi=row[9]
            regional_ethnicity.Mande=row[10]
            regional_ethnicity.Other=row[11]
            regional_ethnicity.Akan_population=row[12]
            regional_ethnicity.Ga_Dangme_population=row[13]
            regional_ethnicity.pop_Ewe=row[14]
            regional_ethnicity.Guan_population=row[15]
            regional_ethnicity.Gurma_population=row[16]
            regional_ethnicity.Mole_Dagbani_population=row[17]
            regional_ethnicity.Grusi_population=row[18]
            regional_ethnicity.Mande_population=row[19]
            regional_ethnicity.Other_population=row[20]

            regional_ethnicity.save()

if __name__=='__main__':
    print("Loading Regional Data.........\nPlease wait.........")
    populate()



















