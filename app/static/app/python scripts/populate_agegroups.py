import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'GeoWebService.settings')
import django
django.setup()
from app.models import DistrictByAgeGroup
import csv

def populate():
    data=csv.reader(open(r"E:\Final Year Project work\Data collection\CSV_files\District\AGE_DISTRICT_final.csv"),delimiter=',')
    for row in data:
        if row[0] !='DISTRICT':
            district_age=DistrictByAgeGroup()
            district_age.Districts=row[0]
            district_age.Capital=row[1]
            district_age.Total_Population=row[2]
            district_age.Male=row[3]
            district_age.Female=row[4]
            district_age.Ages_0_14_total=row[5]
            district_age.Ages_0_14_male=row[6]
            district_age.Ages_0_14_female=row[7]
            district_age.Ages_15_64_total=row[8]
            district_age.Ages_15_64_male=row[9]
            district_age.Ages_15_64_female=row[10]
            district_age.Ages_65_abv_total=row[11]
            district_age.Ages_65_abv_male=row[12]
            district_age.Ages_65_abv_female=row[13]
            district_age.Region=row[14]
            district_age.save()

if __name__=='__main__':
    print("Loading districts by age group....... \n Please wait.........")
    populate()