import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'GeoWebService.settings')
import django
django.setup()
from app.models import RegionalPopulationReligiousAffiliation
import csv

def populate():
    data=csv.reader(open(r'E:\My Stuff\Project Work Test\GeoWebService\app\static\app\csv\Population_by_religious_affiliation.csv'),delimiter=',')
    for row in data:
        if row[0] != 'Region':
            religious_affiliation=RegionalPopulationReligiousAffiliation()
            religious_affiliation.Region=row[0]
            religious_affiliation.Total=row[1]
            religious_affiliation.per_No_Religion=row[2]
            religious_affiliation.per_Catholic=row[3]
            religious_affiliation.per_Protestant=row[4]
            religious_affiliation.per_Pentecostal_Charismatic=row[5]
            religious_affiliation.per_Other_Christian=row[6]
            religious_affiliation.per_Islam=row[7]
            religious_affiliation.per_Traditionalist=row[8]
            religious_affiliation.per_Other=row[9]
            religious_affiliation.pop_No_Religion=row[10]
            religious_affiliation.pop_Catholic=row[11]
            religious_affiliation.pop_Protestant=row[12]
            religious_affiliation.pop_Pentecostal_Charismatic=row[13]
            religious_affiliation.pop_Other_Christian=row[14]
            religious_affiliation.pop_Islam=row[15]
            religious_affiliation.pop_Traditionalist=row[16]
            religious_affiliation.pop_Other=row[17]
            religious_affiliation.save()

if __name__=='__main__':
    print("Loading Regional Data.........\nPlease wait.........")
    populate()
