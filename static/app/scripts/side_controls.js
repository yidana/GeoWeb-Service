/**
 * Created by Iykes on 1/23/2018.
 */
$(document).ready(function () {
    $("#container-district-pop").hide();
    $("#container-regional-pop").hide();
    $("#district-data").hide();
    $("#district-data-age-group").hide();
    $("#regional-data").hide()
    $("#regional-data-age-group").hide()
    $("#regional-data-nationality").hide()
    $("#regional-data-religious-affiliation").hide()
    $("#regional-data-ethnicity").hide()
    $('input:radio[name=admi][value=district]').click();
    $("#container-district-pop").show();
    $("#selection-district-pop").val('selection-district')
    $("#selection-regional-pop").val('selection-regional')

    // Dispaly Tables
    $("#district-data-table").show()
    $("#district-data-agegroup-table").hide()
    $("#regional-data-table").hide()
    $("#regional-data-agegroup-table").hide()
    $("#regional-data-nationality-table").hide()
    $("#regional-data-religiousAffiliation-table").hide()
    $("#regional-data-ethnicity-table").hide()

    $("input[value=district]").click(function () {
        $("#container-district-pop").show();
        $("#container-regional-pop").hide()

        //Show district table and hide the rest
        $("#district-data-table").show()
        $("#district-data-agegroup-table").hide()
        $("#regional-data-table").hide()
        $("#regional-data-agegroup-table").hide()
        $("#regional-data-nationality-table").hide()
        $("#regional-data-religiousAffiliation-table").hide()
        $("#regional-data-ethnicity-table").hide()

        //hide any data selection window
        $("#district-data").hide();
        $("#district-data-age-group").hide();
        $("#regional-data").hide()
        $("#regional-data-age-group").hide()
        $("#regional-data-nationality").hide()
        $("#regional-data-religious-affiliation").hide()
        $("#regional-data-ethnicity").hide()

        //select the first element for the district dropdown
        $("#selection-district-pop").val('selection-district')
    });
    $("input[value=regional]").click(function () {
        $("#container-district-pop").hide();
        $("#container-regional-pop").show();
        $("#district-data-age-group").hide()
        $("#district-data").hide()

        //Show regional table and hide the rest
        $("#district-data-table").hide()
        $("#district-data-agegroup-table").hide()
        $("#regional-data-table").show()
        $("#regional-data-agegroup-table").hide()
        $("#regional-data-nationality-table").hide()
        $("#regional-data-religiousAffiliation-table").hide()
        $("#regional-data-ethnicity-table").hide()

        //hide any data selection window
        $("#district-data").hide();
        $("#district-data-age-group").hide();
        $("#regional-data").hide()
        $("#regional-data-age-group").hide()
        $("#regional-data-nationality").hide()
        $("#regional-data-religious-affiliation").hide()
        $("#regional-data-ethnicity").hide()

        //select the first element for the regional dropdown
        $("#selection-regional-pop").val('selection-regional')
    })

    // District dropdowns
    $("#selection-district-pop").change(function () {
        var selected = $(this).val()
        if (selected == 'dist_pop') {
            $("#district-data").show()
            $("#district-data-age-group").hide()

            $("#district-data-table").show()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()
        }
        else if (selected == 'dist_pop_age_group') {
            $("#district-data-age-group").show()
            $("#district-data").hide()

            //show district table by agegroup and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").show()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()
        }
        else {
            $("#district-data-age-group").hide()
            $("#district-data").hide()

            // Just show district table if non is selected
            $("#district-data-table").show()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()
        }
    })

    //Regional Dropdown
    $("#selection-regional-pop").change(function () {
        var selected = $(this).val()
        if (selected == 'regional_pop_dpd') {
            $("#regional-data").show()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").hide()

            //show regional population table and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").show()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()


        }
        else if (selected == 'regional_pop_dpd_agegrp') {
            $("#regional-data").hide()
            $("#regional-data-age-group").show()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").hide()

            //show region population table by agegroup and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").show()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()
        }
        else if (selected == 'regional_pop_dpd_nationality') {
            $("#regional-data").hide()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").show()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").hide()

            //show region population table by nationality and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").show()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()
        }
        else if (selected == 'regional_pop_dpd_rel_aff') {
            $("#regional-data").hide()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").show()
            $("#regional-data-ethnicity").hide()

            //show region population table by religious affiliation and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").show()
            $("#regional-data-ethnicity-table").hide()
        }
        else if (selected == 'regional_pop_dpd_ethnicity') {
            $("#regional-data").hide()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").show()

            //show region population table by ethnicity and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").show()
        }
        else {
            $("#regional-data").hide()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").hide()

            // Just show region population table hide the rest if non is selected
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").show()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()
        }
    })
});
