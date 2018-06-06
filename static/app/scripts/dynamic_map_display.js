$(document).ready(function(){
    function getData(){
        var data=[]
        var data_dist_agegroup=[]
        var i=0
        var tableRow=$('#example tr:not(:first)')
        var tableRow_dist_agegroup=$('#district-agegroup-table tr:not(:first)')
        //checking which district population data is selected
        $('#selection-district-pop').on('change',function(){
            var dist_value=$(this).val()
            if (dist_value=='dist_pop'){
                $('input[type="checkbox"][name="filter"]').each(function () {
                    //$(this).on('change',function(){
                    if ($(this).is(':checked')) {
                        var val = $(this).val();
                        tableRow.each(function () {
                            var tr = $(this)
                            var td = tr.find('td:nth-child(2)');
                            if (td.text()===val){
                                var tbl_data = tr.find('td')
                                if (tbl_data.length >= 1) {
                                //var data_values=[]
                                data[i++] = {
                                    id: tbl_data[0].textContent,
                                    District: tbl_data[1].textContent,
                                    Capital: tbl_data[2].textContent,
                                    Total: parseInt(tbl_data[3].textContent),
                                    Male: parseInt(tbl_data[4].textContent),
                                    Female: parseInt(tbl_data[5].textContent),
                                    Region: tbl_data[6].textContent
                                }

                            }
                        }
                    })
                }
                    //})
                })

                var options=['Wall','wingo','lingo']
                var select=document.getElementById("dynamicSelection")
                for (var i = 0; i < options.length; i++){
                    var opt=options[i]
                    var el=document.createElement("option")
                    el.textContent=opt
                    el.value=opt
                    select.appendChild(el)
                }


                //$("#dynamicSelection").empty()
                //$.each(options,function(i,p){
                //    $("#dynamicSelection").append($('<option></option>').val(p).html(p))
                //})
                console.log(Object.keys(data))
                console.log(data)
                }

            else if (dist_value=='dist_pop_age_group'){
                $('input[type="checkbox"][name="agegroup"]').each(function () {
                //$(this).on('change',function(){
                if ($(this).is(':checked')) {
                    var val = $(this).val();
                    tableRow_dist_agegroup.each(function () {
                        var tr = $(this)
                        var td = tr.find('td:nth-child(2)');
                        if (td.text()===val){
                            var tbl_data = tr.find('td')
                              if (tbl_data.length >= 1) {
                            //var data_values=[]
                            data_dist_agegroup[i++]={
                                    id:tbl_data[0].textContent,
                                    District:tbl_data[1].textContent,
                                    Total:tbl_data[2].textContent,
                                    Male:tbl_data[3].textContent,
                                    Female:tbl_data[4].textContent,
                                    Ages_0_14_Total:tbl_data[5].textContent,
                                    Ages_0_14_Male:tbl_data[6].textContent,
                                    Ages_0_14_Female:tbl_data[7].textContent,
                                    Ages_15_64_Total:tbl_data[8].textContent,
                                    Ages_15_64_Male:tbl_data[9].textContent,
                                    Ages_15_64_Female:tbl_data[10].textContent,
                                    Ages_65_abv_Total:tbl_data[11].textContent,
                                    Ages_65_abv_Male:tbl_data[12].textContent,
                                    Ages_65_abv_Female:tbl_data[13].textContent,
                                    Region:tbl_data[14].textContent
                                }
                        }
                        }
                    })
                }
                //})
                })
                console.log(data_dist_agegroup)
            }
            else{

            }
        })
    }
    $('input[type="checkbox"][name="filter"]').on('change', getData)
    $('input[type="checkbox"][name="agegroup"]').on('change', getData)
    getData()
})



//Ages_0_14_Total
//Ages_0_14_Male
//Ages_0_14_Female
//Ages_15_64_Total
//Ages_15_64_Male
//Ages_15_64_Female
//Ages_65_abv_Total
//Ages_65_abv_Male
//Ages_65_abv_Female
//Region


