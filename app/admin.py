from app.models import *
from django.contrib.gis.db import models
from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin

class DistrictAdmin(admin.ModelAdmin):
    list_display = ('District','Capital','Total_Population','Male','Female','Region')
    search_fields=('District','Capital')

class Agegroup(admin.ModelAdmin):
    list_display = ('Districts','Capital','Total_Population','Male','Female','Ages_0_14_total','Ages_0_14_male','Ages_0_14_female'
                    ,'Ages_15_64_total','Ages_15_64_male','Ages_15_64_female','Ages_65_abv_total','Ages_65_abv_male','Ages_65_abv_female','Region')

class RegionalAdmin(admin.ModelAdmin):
    list_display = ('Region','Capital','Total','Male','Female')

class RegionalByAgegroupAdmin(admin.ModelAdmin):
    list_display = ('Region','Capital','Total','Male','Female','Ages_0_14','Ages_15_60','Ages_65_abv')

class RegionalEthnicityAdmin(admin.ModelAdmin):
    list_display = ('REGION','Capital','Total','Akan','Ga_Dangme','Ewe','Guan','Gurma','Mole_Dagbani','Grusi','Mande','Other',
                    'Akan_population','Ga_Dangme_population','pop_Ewe','Guan_population','Gurma_population','Mole_Dagbani_population','Grusi_population','Mande_population','Other_population')


class RegionalReligiousAffiliationAdmin(admin.ModelAdmin):
    list_display = ('Region','Total','per_No_Religion','per_Catholic','per_Protestant','per_Pentecostal_Charismatic','per_Other_Christian',
                    'per_Islam','per_Traditionalist','per_Other','pop_No_Religion','pop_Catholic','pop_Protestant','pop_Pentecostal_Charismatic',
                    'pop_Other_Christian','pop_Islam','pop_Traditionalist','pop_Other')
class RegionalNationalityAdmin(admin.ModelAdmin):
    list_display = ('Region','Capital','Total','by_birth','by_naturalisation','non_Ghanaian','by_birth_population',
                    'by_Naturalisation_population','Non_Ghanaian_population')

class CsvAdmin(admin.ModelAdmin):
    list_display=('File_Name','Upload_Date','File')

class PdfAdmin(admin.ModelAdmin):
    list_display=('File_Name','Upload_Date','File')

class ImageAdmin(admin.ModelAdmin):
    list_display=('File_Name','Upload_Date','File')

class FeatureAdmin(LeafletGeoAdmin):
    list_display = ('name',)

admin.site.register(DistrictPopulation,DistrictAdmin)
admin.site.register(DistrictByAgeGroup,Agegroup)
admin.site.register(RegionalPopulationByAgeGroup,RegionalByAgegroupAdmin)
admin.site.register(RegionalPopulation,RegionalAdmin)
admin.site.register(RegionalPopulationByEthnicity,RegionalEthnicityAdmin)
admin.site.register(RegionalPopulationReligiousAffiliation,RegionalReligiousAffiliationAdmin)
admin.site.register(RegionalPopulationByNationality,RegionalNationalityAdmin)
admin.site.register(CsvFiles,CsvAdmin)
admin.site.register(PdfFiles,PdfAdmin)
admin.site.register(ImageFiles,ImageAdmin)
admin.site.register(Feature,FeatureAdmin)



