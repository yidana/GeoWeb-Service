"""
Definition of models.
"""

from django.db import models
from django.contrib.gis.db import models
from django.core.validators import FileExtensionValidator

class DistrictPopulation(models.Model):
    District=models.CharField(max_length=100)
    Capital=models.CharField(max_length=100)
    Total_Population=models.IntegerField()
    Male=models.IntegerField()
    Female=models.IntegerField()
    Region=models.CharField(max_length=100)

    def __str__(self):
        return self.District

class DistrictByAgeGroup(models.Model):
    Districts=models.CharField("District",max_length=150)
    Capital=models.CharField(max_length=138)
    Total_Population=models.IntegerField()
    Male=models.IntegerField()
    Female=models.IntegerField()
    Ages_0_14_total=models.IntegerField("Ages 0-14 Total")
    Ages_0_14_male=models.IntegerField("Ages 0-14 Male")
    Ages_0_14_female=models.IntegerField("Ages 0-14 Female")
    Ages_15_64_total=models.IntegerField("Ages 15-64 Total")
    Ages_15_64_male=models.IntegerField("Ages 15-64 Male")
    Ages_15_64_female=models.IntegerField("Ages 15-64 Female")
    Ages_65_abv_total=models.IntegerField("Ages 65+ Total")
    Ages_65_abv_male=models.IntegerField("Ages 65+ Male")
    Ages_65_abv_female=models.IntegerField("Ages 65+ Female")
    Region=models.CharField(max_length=150)


    def __str__(self):
        return self.Districts


class RegionalPopulation(models.Model):
    Region=models.CharField(max_length=128)
    Capital=models.CharField(max_length=128)
    Total=models.IntegerField()
    Male=models.IntegerField()
    Female=models.IntegerField()

    def __str__(self):
        return self.Region

class RegionalPopulationByAgeGroup(models.Model):
    Region=models.CharField(max_length=128)
    Capital=models.CharField(max_length=128)
    Total=models.IntegerField()
    Male=models.IntegerField()
    Female=models.IntegerField()
    Ages_0_14=models.IntegerField("Ages 0-14")
    Ages_15_60=models.IntegerField("Ages 15-65")
    Ages_65_abv=models.IntegerField("Ages 65+")
    

    def __str__(self):
        return self.Region

class RegionalPopulationByEthnicity(models.Model):
    REGION=models.CharField('Region',max_length=125)
    Capital=models.CharField(max_length=125)
    Total=models.IntegerField()
    Akan=models.FloatField('% Akan')
    Ga_Dangme=models.FloatField('% Ga-Dangme')
    Ewe=models.FloatField('% Ewe')
    Guan=models.FloatField('% Guan')
    Gurma=models.FloatField('% Gurma')
    Mole_Dagbani=models.FloatField('% Mole Dagbani')
    Grusi=models.FloatField('% Grusi')
    Mande=models.FloatField('% Mande')
    Other=models.FloatField('% Other')
    Akan_population=models.IntegerField('Akan')
    Ga_Dangme_population=models.IntegerField('Ga-Dangbe')
    pop_Ewe=models.IntegerField('Ewe')
    Guan_population=models.IntegerField('Guan')
    Gurma_population=models.IntegerField('Gurma')
    Mole_Dagbani_population=models.IntegerField('Mole Dagbani')
    Grusi_population=models.IntegerField('Grusi')
    Mande_population=models.IntegerField('Mande')
    Other_population=models.IntegerField('Other')
    


    def __str__(self):
        return self.REGION


#class RegionalPopulationByReligiousAffiliation(models.Model):
#    Region=models.CharField(max_length=128, unique=True)
#    #Capital=models.CharField(max_length=128)
#    Total=models.IntegerField()
#    per_No_Religion=models.FloatField('% No Religion')
#    per_Catholic=models.FloatField('% Catholic')
#    per_Protestant=models.FloatField('% Protestant')
#    per_Pentecostal_Charismatic=models.FloatField('% Pentecostal/Charismatic')
#    per_Other_Christian=models.FloatField('% Other Christian')
#    per_Islam=models.FloatField('% Islam')
#    per_Traditionalist=models.FloatField('% Traditionalist')
#    per_Other=models.FloatField('% Other')
#    pop_No_Religion=models.IntegerField('No Religion')
#    pop_Catholic=models.IntegerField('Catholic')
#    pop_Protestant=models.IntegerField('Protestant')
#    pop_Pentecostal_Charismatic=models.IntegerField('Pentecostal/Charismatic')
#    pop_Other_Christian=models.IntegerField('Other Christian')
#    pop_Islam=models.IntegerField('Islam')
#    pop_Traditionalist=models.IntegerField('Traditionalist')
#    pop_Other=models.IntegerField('Other')
#
#
#
#    def __str__(self):
#        return self.Region
#    class Meta:
#        verbose_name_plural=('Regional Population By Religious Affiliation')

class RegionalPopulationReligiousAffiliation(models.Model):
    Region=models.CharField(max_length=128, unique=True)
    #Capital=models.CharField(max_length=128)
    Total=models.IntegerField()
    per_No_Religion=models.FloatField('% No Religion')
    per_Catholic=models.FloatField('% Catholic')
    per_Protestant=models.FloatField('% Protestant')
    per_Pentecostal_Charismatic=models.FloatField('% Pentecostal/Charismatic')
    per_Other_Christian=models.FloatField('% Other Christian')
    per_Islam=models.FloatField('% Islam')
    per_Traditionalist=models.FloatField('% Traditionalist')
    per_Other=models.FloatField('% Other')
    pop_No_Religion=models.IntegerField('No Religion')
    pop_Catholic=models.IntegerField('Catholic')
    pop_Protestant=models.IntegerField('Protestant')
    pop_Pentecostal_Charismatic=models.IntegerField('Pentecostal/Charismatic')
    pop_Other_Christian=models.IntegerField('Other Christian')
    pop_Islam=models.IntegerField('Islam')
    pop_Traditionalist=models.IntegerField('Traditionalist')
    pop_Other=models.IntegerField('Other')

    def __str__(self):
        return self.Region
    class Meta:
        verbose_name_plural=('Regional Population By Religious Affiliation')

class RegionalPopulationByNationality(models.Model):
    Region=models.CharField(max_length=125)
    Capital=models.CharField(max_length=125)
    Total=models.IntegerField()
    by_birth=models.FloatField("% By Birth")
    by_naturalisation=models.FloatField("% By Naturalisation")
    non_Ghanaian=models.FloatField("% Non Ghanaian")
    by_birth_population=models.IntegerField("By Birth")
    by_Naturalisation_population=models.IntegerField("By Naturalisation")
    Non_Ghanaian_population=models.IntegerField("Non Ghanaian")

    

    def __str__(self):
        return self.Region
    class Meta:
        verbose_name_plural=('Regional Population By Nationality')

class CsvFiles(models.Model):
    File_Name=models.CharField('File Name',max_length=120,null=False,blank=False)
    Upload_Date=models.DateField()
    File=models.FileField(upload_to='foo/', validators=[FileExtensionValidator(allowed_extensions=['csv'])])

    def __str__(self):
        return self.File_Name
    class Meta:
        verbose_name_plural=('CSV Files')

class PdfFiles(models.Model):
    File_Name=models.CharField('File Name',max_length=120,null=False,blank=False)
    Upload_Date=models.DateField()
    File=models.FileField(upload_to='foo/', validators=[FileExtensionValidator(allowed_extensions=['pdf'])])

    def __str__(self):
        return self.File_Name
    class Meta:
        verbose_name_plural=('Pdf Files')

class ImageFiles(models.Model):
    File_Name=models.CharField('File Name',max_length=120,null=False,blank=False)
    Upload_Date=models.DateField()
    File=models.ImageField()

    def __str__(self):
        return self.File_Name
    class Meta:
        verbose_name_plural=('Image Files')
class Feature(models.Model):
    name=models.CharField(max_length=120)
    geometryCollection=models.GeometryCollectionField(srid=4326,blank=True, null=True)
    #object=models.GeoManager()

    class Meta:
        verbose_name_plural=('Shape Files')


