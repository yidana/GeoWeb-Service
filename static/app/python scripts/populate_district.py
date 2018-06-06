import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'GeoWebService.settings')
import django
django.setup()
from app.models import DistrictPopulation
import csv
def populate():
    data=csv.reader(open(r'D:\My Stuff\Python\Django\projects\GeoWebService\app\static\app\csv\District_Population.csv'),delimiter=',')
    for row in data:
        if row[0] !='District':
            district=DistrictPopulation()
            district.District=row[0]
            district.Capital=row[1]
            district.Total_Population=row[2]
            district.Male=row[3]
            district.Female=row[4]
            district.Region=row[5]
            district.save()



if __name__=='__main__':
    print('setting up to populate districts.....')
    populate()