/**
 * Created by Iykes on 2/28/2018.
 */
$(document).ready(function(){
    function getData(){
        var data_regional=[]
        var data_regionalAgegroup=[]
        var data_regionalNationality=[]
        var data_regionalEthnicity=[]
        var data_relAffiliation=[]
        var i=0
        var tableRows_regional = $('#regional-table tr:not(:first)');
        var tableRows_regionalAgegroup = $('#regional-agegroup-table tr:not(:first)');
        var tableRows_regionalEthnicity = $('#regional-ethnicity-table tr:not(:first)');
        var tableRows_regionalNationality = $('#regional-nationality-table tr:not(:first)');
        var tableRows_regional_relAffiliation = $('#regional-religiousAffiliation-table tr:not(:first)');


            // Checking which regional population table is selected
        $('#selection-regional-pop').change(function(){
            var regional_value=$(this).val()
            if(regional_value=='regional_pop_dpd'){
                $('input[type="checkbox"][name="regional"]').each(function () {if ($(this).is(':checked')) {
                    var val = $(this).val();
                    tableRows_regional.each(function () {
                        var tr = $(this)
                        var td = tr.find('td:nth-child(2)');
                        if (td.text()===val){
                            var tbl_data = tr.find('td')
                            if (tbl_data.length > 1) {//var data_values=[]
                             data_regional[i++]={
                                 id:tbl_data[0].textContent,
                                 Region:tbl_data[1].textContent,
                                 Capital:tbl_data[2].textContent,
                                 Total:tbl_data[3].textContent,
                                 Male:tbl_data[4].textContent,
                                 Female:tbl_data[5].textContent,
                            }
                        }
                    }
                })
                }
            })
            console.log(data_regional)
        }
            else if(regional_value=='regional_pop_dpd_agegrp'){
                $('input[type="checkbox"][name="regionalAgegroup"]').each(function () {
                    if ($(this).is(':checked')) {
                        var val = $(this).val();
                        tableRows_regionalAgegroup.each(function () {
                            var tr = $(this)
                            var td = tr.find('td:nth-child(2)');
                            if (td.text()===val){
                                var tbl_data = tr.find('td')
                                if (tbl_data.length > 1) {//var data_values=[]
                                 data_regionalAgegroup[i++]={
                                     id:tbl_data[0].textContent,
                                     Region:tbl_data[1].textContent,
                                     Capital:tbl_data[2].textContent,
                                     Total:tbl_data[3].textContent,
                                     Male:tbl_data[4].textContent,
                                     Female:tbl_data[5].textContent,
                                     Ages_0_14:tbl_data[6].textContent,
                                     Ages_15_64:tbl_data[7].textContent,
                                     Ages_65_abv:tbl_data[8].textContent
                                }
                            }
                        }
                    })
                }
            })
            console.log(data_regionalAgegroup)
        }
            else if(regional_value=='regional_pop_dpd_nationality'){
            $('input[type="checkbox"][name="regionalNationality"]').each(function () {
                if ($(this).is(':checked')) {
                    var val = $(this).val();
                    tableRows_regionalNationality.each(function () {
                        var tr = $(this)
                        var td = tr.find('td:nth-child(2)');
                        if (td.text()===val){
                            var tbl_data = tr.find('td')
                            if (tbl_data.length > 1) {
                                //var data_values=[]
                                data_regionalNationality[i++]={
                                    id:tbl_data[0].textContent,
                                    Region:tbl_data[1].textContent,
                                    Capital:tbl_data[2].textContent,
                                    Total:tbl_data[3].textContent,
                                    per_by_birth:tbl_data[4].textContent,
                                    per_by_naturalisation:tbl_data[5].textContent,
                                    per_by_non_ghn:tbl_data[6].textContent,
                                    By_Birth:tbl_data[7].textContent,
                                    By_Naturalisation:tbl_data[8].textContent,
                                    Non_Ghanaian:tbl_data[9].textContent
                                }
                            }
                        }
                    })
                }
            })
            console.log(data_regionalNationality)
        }
            else if(regional_value=='regional_pop_dpd_rel_aff'){
            $('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function () {
                if ($(this).is(':checked')) {
                    var val = $(this).val();
                    tableRows_regional_relAffiliation.each(function () {
                        var tr = $(this)
                        var td = tr.find('td:nth-child(2)');
                        if (td.text()===val){
                            var tbl_data = tr.find('td')
                            if (tbl_data.length > 1) {
                                //var data_values=[]
                                data_relAffiliation[i++]={
                                    id:tbl_data[0].textContent,
                                    Region:tbl_data[1].textContent,
                                    Total:tbl_data[2].textContent,
                                    per_no_religion:tbl_data[3].textContent,
                                    per_catholic:tbl_data[4].textContent,
                                    per_protestine:tbl_data[5].textContent,
                                    per_pent_or_charistmat:tbl_data[6].textContent,
                                    per_other_christian:tbl_data[7].textContent,
                                    per_islam:tbl_data[8].textContent,
                                    per_traditionalist:tbl_data[9].textContent,
                                    per_other:tbl_data[10].textContent,
                                    pop_no_religion:tbl_data[11].textContent,
                                    pop_catholic:tbl_data[12].textContent,
                                    pop_protestine:tbl_data[13].textContent,
                                    pop_pent_or_charistmat:tbl_data[14].textContent,
                                    pop_other_christian:tbl_data[15].textContent,
                                    pop_islam:tbl_data[16].textContent,
                                    pop_traditionalist:tbl_data[17].textContent,
                                    pop_other:tbl_data[18].textContent
                                }
                            }
                        }
                    })
                }
            })
            console.log(data_relAffiliation)
        }
            else if(regional_value=='regional_pop_dpd_ethnicity'){
            $('input[type="checkbox"][name="regionalEthnicity"]').each(function () {
                if ($(this).is(':checked')) {
                    var val = $(this).val();
                    tableRows_regionalEthnicity.each(function () {
                        var tr = $(this)
                        var td = tr.find('td:nth-child(2)');
                        if (td.text()===val){
                            var tbl_data = tr.find('td')
                            if (tbl_data.length > 1) {
                                //var data_values=[]
                                data_regionalEthnicity[i++]={
                                    id:tbl_data[0].textContent,
                                    Region:tbl_data[1].textContent,
                                    Total:tbl_data[2].textContent,
                                    per_akan:tbl_data[3].textContent,
                                    per_ga_dangme:tbl_data[4].textContent,
                                    per_ewe:tbl_data[5].textContent,
                                    per_guan:tbl_data[6].textContent,
                                    per_gurma:tbl_data[7].textContent,
                                    per_mole_dagbani:tbl_data[8].textContent,
                                    per_grusi:tbl_data[9].textContent,
                                    per_mande:tbl_data[10].textContent,
                                    per_other:tbl_data[11].textContent,
                                    pop_akan:tbl_data[12].textContent,
                                    pop_ga_dangme:tbl_data[13].textContent,
                                    pop_ewe:tbl_data[14].textContent,
                                    pop_guan:tbl_data[15].textContent,
                                    pop_gurma:tbl_data[16].textContent,
                                    pop_mole_dagbani:tbl_data[17].textContent,
                                    pop_grusi:tbl_data[18].textContent,
                                    pop_mande:tbl_data[19].textContent,
                                    pop_other:tbl_data[20].textContent
                                }
                            }
                        }
                    })
                }
            })
            console.log(data_regionalEthnicity)
        }
            else{
        }
})
}
        $('input[type="checkbox"][name="regional"]').on('change', getData)
        $('input[type="checkbox"][name="regionalAgegroup"]').on('change', getData)
        $('input[type="checkbox"][name="regionalNationality"]').on('change', getData)
        $('input[type="checkbox"][name="regionalReligiousAfilliation"]').on('change', getData)
        $('input[type="checkbox"][name="regionalEthnicity"]').on('change', getData)
        getData()
});