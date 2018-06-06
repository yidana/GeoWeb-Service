import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'GeoWebService.settings')
import django
django.setup()
from app.models import RegionalPopulation,RegionalPopulationByAgeGroup
import csv

def populate():
    data=csv.reader(open(r'D:\My Stuff\Python\Django\projects\GeoWebService\app\static\app\csv\POPULATION_REGION.csv'),delimiter=',')
    for row in data:
        if row[0] !='Region':
            regional=RegionalPopulation()
            regional_agegroup=RegionalPopulationByAgeGroup()
            regional.Region=row[0]
            regional.Capital=row[1]
            regional.Total=row[2]
            regional.Male=row[3]
            regional.Female=row[4]

            regional_agegroup.Region=row[0]
            regional_agegroup.Capital=row[1]
            regional_agegroup.Total=row[2]
            regional_agegroup.Male=row[3]
            regional_agegroup.Female=row[4]
            regional_agegroup.Ages_0_14=row[5]
            regional_agegroup.Ages_15_60=row[6]
            regional_agegroup.Ages_65_abv=row[7]
            regional.save()
            regional_agegroup.save()

if __name__=='__main__':
    print("Loading Regional Data.........\nPlease wait.........")
    populate()

