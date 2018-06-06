"""
Definition of views.
"""

from django.shortcuts import render, render_to_response
from django.http import HttpRequest
from django.template import RequestContext
from datetime import datetime
from app.models import *

def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def contact(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/contact.html',
        {
            'title':'Contact',
            'message':'Your contact page.',
            'year':datetime.now().year,
        }
    )

def about(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
            'message':'Your application description page.',
            'year':datetime.now().year,
        }
    )
def geoweb(request):
    #Get district names and display in checkbox section
    district_data_checkbox=DistrictPopulation.objects.all().order_by('District')
    district_data_fields=DistrictPopulation._meta.local_fields
    district_data_fields_name=[f.name for f in district_data_fields]
    tableHeader=['No.','District','Capital','Total','Male','Female','Region']
    districtData=DistrictPopulation.objects.all().order_by('District')

    #Get district names for age groups and display in checkbox section
    district_data_agegroup_checkbox=DistrictByAgeGroup.objects.all().order_by('Districts')
    district_data_agegroup_fields=DistrictByAgeGroup._meta.local_fields
    district_data_fields_agegroup_name=[f.name for f in district_data_agegroup_fields]
    district_data_by_agegroup=DistrictByAgeGroup.objects.all().order_by('Districts')
    tableDistrictAgegroupHeader=["No.","District","Capital","Total","Male","Female","Ages_0-14_Total","Ages_0-14_Male","Ages_0-14_Female","Ages_15-64_Total","Ages_15-64_Male","Ages_15-64_Female","Ages_65+_Total","Ages_65+_Male","Ages_65+_Female","Region"]

    # Get regions from regional data
    # Get regions from regional data
    # Get regions from regional data
    regional_data_chekbox=RegionalPopulation.objects.all()
    regional_data_chekbox_fields=RegionalPopulation._meta.local_fields
    regional_data_chekbox_fields_names=[f.name for f in regional_data_chekbox_fields]
    regional_data=RegionalPopulation.objects.all()
    regionalTableHeader=["No.","Region","Capital","Total","Male","Female"]
    

    # Get regions from regional data by age group
    regional_data_agegroup_chekbox=RegionalPopulationByAgeGroup.objects.all()
    regional_data_agegroup_chekbox_fields=RegionalPopulationByAgeGroup._meta.local_fields
    regional_data_agegroup_chekbox_fields_names=["No.","Region","Capital","Total","Male","Female","Ages_0-14","Ages_15-65","Ages_65+"]
    regional_agegroup_data=RegionalPopulationByAgeGroup.objects.all()


    # Get regions from regional data by nationality
    regional_data_nationality_chekbox=RegionalPopulationByNationality.objects.all()
    regional_data_nationality_chekbox_fields=RegionalPopulationByNationality._meta.local_fields
    regional_data_nationality_chekbox_fields_names=["No.","Region","Capital","Total","%_By_Birth","%_By_Naturalisation","%_Non_Ghanaian","By_Birth","By_Naturalisation","Non_Ghanaian"]
    regional_nationality_data=RegionalPopulationByNationality.objects.all()


    # Get regions from regional data by religious_affiliation
    regional_data_religious_affiliation_chekbox=RegionalPopulationReligiousAffiliation.objects.all()
    regional_data_religious_affiliation_chekbox_fields=RegionalPopulationReligiousAffiliation._meta.local_fields
    regional_data_religious_affiliation_chekbox_fields_names=['No.','Region','Total','%_No_Religion','%_Catholic','%_Protestant','%_Pentecostal_/_Charismatic','%_Other_Christian','%_Islam','%_Traditionalist','%_Other','No_Religion','Catholic','Protestant','Pentecostal_/_Charismatic','Other_Christian','Islam','Traditionalist','Other']
    regional_religious_affiliation_data=RegionalPopulationReligiousAffiliation.objects.all()


    # Get regions from regional data by ethnicity
    regional_data_ethnicity_chekbox=RegionalPopulationByEthnicity.objects.all()
    regional_data_ethnicity_chekbox_fields=RegionalPopulationByEthnicity._meta.local_fields
    regional_data_ethnicity_chekbox_fields_names=['No.','Region','Capital','Total','% Akan','% Ga-Dangme','% Ewe','% Guan','% Gurma','% Mole Dagbani','% Grusi','% Mande','% Other','Akan','Ga-Dangbe','Ewe','Guan','Gurma','Mole Dagbani','Grusi','Mande','Other']
    regional_ethnicity_data=RegionalPopulationByEthnicity.objects.all()





    context_dict={'District_data_checkbox':district_data_checkbox,'district_data_fields_name':district_data_fields_name,'district_data_agegroup_checkbox':district_data_agegroup_checkbox,
                  'district_data_fields_agegroup_name':district_data_fields_agegroup_name,'regional_data_chekbox':regional_data_chekbox,'regional_data_chekbox_fields_names':regional_data_chekbox_fields_names,
                  'regional_data_chekbox':regional_data_chekbox,'regional_data_chekbox_fields_names':regional_data_chekbox_fields_names,
                  'regional_data_agegroup_chekbox':regional_data_agegroup_chekbox,'regional_data_agegroup_chekbox_fields_names':regional_data_agegroup_chekbox_fields_names,
                  'regional_data_nationality_chekbox':regional_data_nationality_chekbox,'regional_data_nationality_chekbox_fields_names':regional_data_nationality_chekbox_fields_names,
                  'regional_data_religious_affiliation_chekbox':regional_data_religious_affiliation_chekbox,'regional_data_religious_affiliation_chekbox_fields_names':regional_data_religious_affiliation_chekbox_fields_names,
                  'regional_data_ethnicity_chekbox':regional_data_ethnicity_chekbox,'regional_data_ethnicity_chekbox_fields_names':regional_data_ethnicity_chekbox_fields_names,
                  'tableHeader':tableHeader,
                  'districtData':districtData,
                  'district_data_by_agegroup':district_data_by_agegroup,
                  'regional_data':regional_data,
                  'regional_agegroup_data':regional_agegroup_data,
                  'regional_nationality_data':regional_nationality_data,
                  'regional_religious_affiliation_data':regional_religious_affiliation_data,
                  'regional_ethnicity_data':regional_ethnicity_data,
                  'tableDistrictAgegroupHeader':tableDistrictAgegroupHeader,
                  'regionalTableHeader':regionalTableHeader}

    return render_to_response('app/geoweb.html',context_dict)

def mail(request):
    assert isinstance(request, HttpRequest)
    return render(request, 'app/mail.html')

def single(request):
    assert isinstance(request,HttpRequest)
    return render(request,'app/single.html')

def downloadcenter(request):
    return render_to_response('app/dowloadcenter.html')
    
