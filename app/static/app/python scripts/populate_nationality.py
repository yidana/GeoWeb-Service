import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'GeoWebService.settings')
import django
django.setup()
from app.models import RegionalPopulationByNationality
import csv

def populate():
    data=csv.reader(open(r'E:\My Stuff\Project Work Test\GeoWebService\app\static\app\csv\NATIONALITY_REGION.csv'),delimiter=',')
    for row in data:
        if row[0] != 'Region':
            nationality=RegionalPopulationByNationality()
            nationality.Region=row[0]
            nationality.Capital=row[1]
            nationality.Total=row[2]
            nationality.by_birth=row[3]
            nationality.by_naturalisation=row[4]
            nationality.non_Ghanaian=row[5]
            nationality.by_birth_population=row[6]
            nationality.by_Naturalisation_population=row[7]
            nationality.Non_Ghanaian_population=row[8]

            nationality.save()

if __name__=='__main__':
    print("Loading Regional Data.........\nPlease wait.........")
    populate()