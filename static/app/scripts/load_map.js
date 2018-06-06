// Create map
var mapboxAccessToken = { accessToken: "pk.eyJ1IjoiaXlrZXMiLCJhIjoiY2piZGZlaXRzMWxtbDJxcnR1YzFiZm1uZiJ9.UQOZviVIotV5oVWmSBBSXA" };
var corner1 = L.latLng( 14.309603,  -9.823868),
corner2 = L.latLng(  1.046713,   7.353628),
bounds = L.latLngBounds(corner1, corner2);
var map = L.map("mymap",{
                center:[7.9465, -1.0232],
                zoom:6,
                maxBounds:bounds
    })
////var map = L.map("mymap").setView([7.9465, -1.0232], 6);
//map.fitBounds([
//    [11.694012, -3.796150],
//    [6.593608, 2.165681]
//]);

//var corner1 = L.latLng(11.694012, -3.796150),
//corner2 = L.latLng(6.593608, 2.165681),
//bounds = L.latLngBounds(corner1, corner2);


// create mapbox tile and add to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken.accessToken, {
    id: 'mapbox.light'
}).addTo(map);

// create a function for color ranges of population data
function getColor(d) {
    return d > 1730249 ? '#800026' :
        d > 142829 ? '#BD0026' :
        d > 118189 ? '#E31A1C' :
        d > 106136 ? '#FC4E2A' :
        d > 89943 ? '#FD8D3C' :
        d > 78069 ? '#FEB24C' :
        d > 60934 ? '#FED976' :
                    '#FFEDA0';
};

//create another function for fill
function densityStyle(feature) {
    return {
        fillColor: getColor(feature.properties.Pop_Total),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 1
    };
}

// load geojson and add color with values
var geojson;
//function for mouseover
//*********** Highlight *****************
//*********** Highlight *****************
//*********** Highlight *****************
//*********** Highlight *****************
//*********** Highlight *****************
function highlight(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<p style='font-size: 16px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana District Population" + "<br style='font-size:0px;'/>" + "<span style='font-size: 13px; margin-top:-20px;'>District: " + layer.feature.properties.DISTRICT + "<br style='font-size:0px;'/>" + "Population: " + layer.feature.properties.Pop_Total + " people" + "</span>" + "</p>");
    
    disp.appendTo("#mymap");
}

//*********** Highlight Regional and ethnicity*****************
//*********** Highlight Regional and ethnicity*****************
//*********** Highlight Regional and ethnicity*****************
//*********** Highlight Regional and ethnicity*****************
//*********** Highlight Regional and ethnicity*****************
function highlightRegAndEthnicity(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<p style='font-size: 16px; font-weight: bold; margin-bottom: 0px; line-height:1.15;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<span style='font-size: 13px; margin-top:-20px;'>Region: " + layer.feature.properties.REGION + "<br style='font-size:0px;'/>" + "Capital: " + layer.feature.properties.Capital + "<br style='font-size::0px;'/>" + "Population: " + layer.feature.properties.pop_total + " people" + "</span>" + "</p>");
    
    disp.appendTo("#mymap");
}

//*********** Highlight Nationality*****************
//*********** Highlight Nationality*****************
//*********** Highlight Nationality*****************
//*********** Highlight Nationality*****************
//*********** Highlight Nationality*****************
function highlight_nationality(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<p style='font-size: 16px; font-weight: bold; margin-bottom: 0px; line-height:1.15;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<span style='font-size: 13px; margin-top:-20px;'>Region: " + layer.feature.properties.REGION + "<br style='font-size:0px;'/>" + "Capital: " + layer.feature.properties.Capital + "<br style='font-size::0px;'/>" + "Population: " + layer.feature.properties.pop_tot + " people" + "</span>" + "</p>");
    
    disp.appendTo("#mymap");
}

//*********** Highlight Religious Affiliatio*****************
//*********** Highlight Religious Affiliatio*****************
//*********** Highlight Religious Affiliatio*****************
//*********** Highlight Religious Affiliatio*****************
//*********** Highlight Religious Affiliatio*****************
function highlight_reg_regAffiliation(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<p style='font-size: 16px; font-weight: bold; margin-bottom: 0px; line-height:1.15;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<span style='font-size: 13px; margin-top:-20px;'>Region: " + layer.feature.properties.Regions + "<br style='font-size:0px;'/>" + "Capital: " + layer.feature.properties.Capital + "<br style='font-size::0px;'/>" + "Population: " + layer.feature.properties.pop_total + " people" + "</span>" + "</p>");
    
    disp.appendTo("#mymap");
}
//*********** Highlight *****************
//*********** Highlight *****************
//*********** Highlight *****************
//*********** Highlight *****************
//*********** Highlight *****************

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<h4 style='margin-bottom: 0px;font-weight: bold;'>Ghana District Population</h4>" + "<br>" + "<p style='font-weight: bold; font-size: 15px; margin-top: 0px;'>hover over a district</p>");
    disp.appendTo("#mymap");
}

//       function myPopup(feature,layer) {
//            layer.bindPopup(feature.properties.District_I);
//    //map.fitBounds(e.target.getBounds());
//}

function onEachFeature(feature, layer) {

    var content = '<div class="custom-popup" id="map-popup">' + '<table border="1" style="border-collapse:collapse;" cellpadding="5">' +
        '<tr>' + '<th>District: </th>' + '<td><b>' + feature.properties.District_C + '</b></td>' + '</tr>' +
        '<tr>' + '<th>Region: </th>' + '<td>' + feature.properties.REGION + '</td>' + '</tr>' +
        '<tr>' + '<th>Total Population: </th>' + '<td>' + feature.properties.Pop_Total + '</td>' + '</tr>' +
        '<tr>' + '<th>Male: </th>' + '<td>' + feature.properties.Male + '</td>' + '</tr>' +
        '<tr>' + '<th>Female: </th>' + '<td>' + feature.properties.Female + '</td>' + '</tr>' +
        '<table>' + '</div>';
    var customOptions =
        {
            'className': 'custom'
        }

    layer.on({

        mouseover: highlight,
        mouseout: resetHighlight,
        click: layer.bindPopup("<h4>Basic Info</h4>" + content, customOptions)
    });
}
//showing properties on hover

var info = L.control();
//
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'infoMat'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    //this._div.innerHTML = '<h4>Ghana Districts Population</h4>' + (props ?
    //    '<b>' + props.DISTRICT + '</b><br />' + props.Pop_Total + ' people '
    //    : 'Hover over a district');
};

info.addTo(map);

// Load district geojson file
geojson = L.geoJson(districts_layer_1, {
    style: densityStyle,
    onEachFeature: onEachFeature
}).addTo(map);


// function to load geojson
//function load_geojson(geojson_file) {
//    var geojson_variable = L.geoJson(geojson_file, {
//        style: densityStyle,
//        onEachFeature: onEachFeature
//    });
//};
//Load geojson and store in variable
//var pop_agegroup;
//pop_agegroup = L.geoJson(geojson_district);

var district_agegroup_json;
district_agegroup_json = L.geoJson(pop_agegroup_final,{
    style: densityStyle,
    onEachFeature: onEachFeature_agegroup
});


// Deal with regional information
//**********************Regional Stuff******************************
// function to set regional population color
var regional_geojson;
 function get_regional_color(d) {
    return d > 4780380 ? '#800026' :
        d >    2908534 ? '#BD0026' :
        d >    2417397 ? '#E31A1C' :
        d >    2267335 ? '#FC4E2A' :
        d >    1903911 ? '#FD8D3C' :
                      '#FEB24C';
}
// fill shapefile with colors depending on population value
function set_regional_style(feature) {
    return {
        fillColor: get_regional_color(feature.properties.pop_total),
        opacity: 1,
        color: 'white',
        fillOpacity: 1
    };
}
function regional_resetHighlight(e) {
    regional_geojson.resetStyle(e.target);
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<p style='font-size: 17px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<br />" + "<span style='font-size: 15px; margin-top:-20px; font-weight: bold;'>" + "Hover over a region" + "</span>" + "</p>");
    
    disp.appendTo("#mymap");
}

function onEachFeature_region(feature, layer) {

    var content = '<div class="custom-popup" id="map-popup">' + '<table border="1" style="border-collapse:collapse;" cellpadding="5">' +
        '<tr>' + '<th>Region: </th>' + '<td><b>' + feature.properties.REGION + '</b></td>' + '</tr>' +
        '<tr>' + '<th>Capital: </th>' + '<td>' + feature.properties.Capital + '</td>' + '</tr>' +
        '<tr>' + '<th>Total Population: </th>' + '<td>' + feature.properties.pop_total + '</td>' + '</tr>' +
        '<tr>' + '<th>Male: </th>' + '<td>' + feature.properties.pop_males + '</td>' + '</tr>' +
        '<tr>' + '<th>Female: </th>' + '<td>' + feature.properties.pop_female + '</td>' + '</tr>' +
        '<table>' + '</div>';
    var customOptions =
        {
            'className': 'custom'
        }
    
    layer.on({

        mouseover: highlightRegAndEthnicity,
        mouseout: regional_resetHighlight,
        click: layer.bindPopup("<h4>Regional Info</h4>" + content, customOptions)
    });
}
// Load Regional geojson file
regional_geojson = L.geoJson(regional_pop_final,{
    style:set_regional_style,
    onEachFeature:onEachFeature_region
});
// End of regional

// Regional population by nationality
//*********** Regional population by nationality *****************
//*********** Regional population by nationality *****************
//*********** Regional population by nationality *****************
//*********** Regional population by nationality *****************
//*********** Regional population by nationality *****************
var geojson_nationality;
// fill shapefile with colors depending on population value
function set_regional_style_nationality(feature) {
    return {
        fillColor: get_regional_color(feature.properties.pop_tot),
        opacity: 1,
        color: 'white',
        fillOpacity: 1
    };
}
// Reset Highlight
function regional_nationality_resetHighlight(e) {
    geojson_nationality.resetStyle(e.target);
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<p style='font-size: 17px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<br />" + "<span style='font-size: 15px; margin-top:-20px; font-weight: bold;'>" + "Hover over a region" + "</span>" + "</p>");
    disp.appendTo("#mymap");
}

function onEachFeature_region_nationality(feature, layer) {
    var byBirth = (((feature.properties.pop_nat) / feature.properties.pop_tot) * 100).toFixed(2)
    var nonGhanaian = (((feature.properties.pop_non) / feature.properties.pop_tot) * 100).toFixed(2)
    var byNaturalisation = ((((((feature.properties.pop_nat_pe) / 100) * (feature.properties.pop_tot))) / feature.properties.pop_tot) * 100).toFixed(2)
    var content = '<div class="custom-popup" id="map-popup">' + '<table border="1" style="border-collapse:collapse;" cellpadding="5">' +
        '<tr>' + '<th>Region: </th>' + '<td><b>' + feature.properties.REGION + '</b></td>' + '</tr>' +
        '<tr>' + '<th>Capital: </th>' + '<td>' + feature.properties.Capital + '</td>' + '</tr>' +
        '<tr>' + '<th>Total Population: </th>' + '<td>' + feature.properties.pop_tot + '</td>' + '</tr>' +
        '<tr>' + '<th>By birth: </th>' + '<td>' + feature.properties.pop_nat + ' ('+ feature.properties.pop_na_per +' %)'+ '</td>' + '</tr>' +
        '<tr>' + '<th>Non Ghanaians: </th>' + '<td>' + feature.properties.pop_non + ' (' + feature.properties.pop_non_gh + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>By naturalisation: </th>' + '<td>' + (((feature.properties.pop_nat_pe) / 100) * (feature.properties.pop_tot)).toFixed(0) + ' (' + feature.properties.pop_nat_pe + ' %)' + '</td>' + '</tr>' +
        '<table>' + '</div>';
    var customOptions =
        {
            'className': 'custom'
        }

    layer.on({

        mouseover: highlight_nationality,
        mouseout: regional_nationality_resetHighlight,
        click: layer.bindPopup("<h4>Regional Info by nationality</h4>" + content, customOptions)
    });
}

geojson_nationality = L.geoJson(regional_nationality, {
    style: set_regional_style_nationality,
    onEachFeature:onEachFeature_region_nationality
    })

//*********** Regional population by nationality *****************
//*********** Regional population by nationality *****************
//*********** Regional population by nationality *****************
//*********** Regional population by nationality *****************
//*********** Regional population by nationality *****************



//*********** Regional population by ethnicity *****************
//*********** Regional population by ethnicity *****************
//*********** Regional population by ethnicity *****************
//*********** Regional population by ethnicity *****************
//*********** Regional population by ethnicity *****************
var geojson_ethnicity;
function regional_ethnicity_resetHighlight(e) {
    geojson_ethnicity.resetStyle(e.target);
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<p style='font-size: 17px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<br />" + "<span style='font-size: 15px; margin-top:-20px; font-weight: bold;'>" + "Hover over a region" + "</span>" + "</p>");
    disp.appendTo("#mymap");
}

function onEachFeature_region_ethnicity(feature, layer) {
    var perAkan = ((feature.properties.Pop_Akan) / feature.properties.pop_total) * 100;
    var perGaDangbe = ((feature.properties.Pop_Ga_Dan) / feature.properties.pop_total) * 100;
    var perEwe = ((feature.properties.Pop_Ewe) / feature.properties.pop_total) * 100;
    var perGuan = ((feature.properties.Pop_Guan) / feature.properties.pop_total) * 100;
    var perGurma = ((feature.properties.Pop_Gurma) / feature.properties.pop_total) * 100;
    var perMoleDagbani = ((feature.properties.Pop_Mole_D) / feature.properties.pop_total) * 100;
    var perGrusi = ((feature.properties.Pop_Grusi) / feature.properties.pop_total) * 100;
    var perMande = ((feature.properties.Pop_Mande) / feature.properties.pop_total) * 100;
    var perothers = ((feature.properties.Pop_Others) / feature.properties.pop_total) * 100;

    var content = '<div class="custom-popup" id="map-popup">' + '<table border="1" style="border-collapse:collapse;" cellpadding="5">' +
        '<tr>' + '<th>Region: </th>' + '<td><b>' + feature.properties.REGION + '</b></td>' + '</tr>' +
        '<tr>' + '<th>Capital: </th>' + '<td>' + feature.properties.Capital + '</td>' + '</tr>' +
        '<tr>' + '<th>Total Population: </th>' + '<td>' + feature.properties.pop_total + '</td>' + '</tr>' +
        '<tr>' + '<th>Akan: </th>' + '<td>' + feature.properties.Pop_Akan + ' (' + perAkan.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Ga Adangbe: </th>' + '<td>' + feature.properties.Pop_Ga_Dan + ' (' + perGaDangbe.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Ewe: </th>' + '<td>' + feature.properties.Pop_Ewe + ' (' + perEwe.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Guan: </th>' + '<td>' + feature.properties.Pop_Guan + ' (' + perGuan.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Gurma: </th>' + '<td>' + feature.properties.Pop_Gurma + ' (' + perGurma.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Mole Dagbani: </th>' + '<td>' + feature.properties.Pop_Mole_D + ' (' + perMoleDagbani.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Grusi: </th>' + '<td>' + feature.properties.Pop_Grusi + ' (' + perGrusi.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Mande: </th>' + '<td>' + feature.properties.Pop_Mande + ' (' + perMande.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Others: </th>' + '<td>' + feature.properties.Pop_Others + ' (' + perothers.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<table>' + '</div>';
    var customOptions =
        {
            'className': 'custom'
        }

    layer.on({

        mouseover: highlightRegAndEthnicity,
        mouseout: regional_ethnicity_resetHighlight,
        click: layer.bindPopup("<h4>Regional Info by nationality</h4>" + content, customOptions)
    });
}
geojson_ethnicity = L.geoJson(regional_ethnicity, {
    style: set_regional_style,
    onEachFeature:onEachFeature_region_ethnicity

})

//*********** Regional population by ethnicity *****************
//*********** Regional population by ethnicity *****************
//*********** Regional population by ethnicity *****************
//*********** Regional population by ethnicity *****************
//*********** Regional population by ethnicity *****************


//*********** Regional population by Religious affiliation *****************
//*********** Regional population by Religious affiliation *****************
//*********** Regional population by Religious affiliation *****************
//*********** Regional population by Religious affiliation *****************
//*********** Regional population by Religious affiliation *****************
var geojson_religiousAffiliation;
function regional_religiousAffiliatio_resetHighlight(e) {
    geojson_religiousAffiliation.resetStyle(e.target);
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
        }
    }).append("<p style='font-size: 17px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<br />" + "<span style='font-size: 15px; margin-top:-20px; font-weight: bold;'>" + "Hover over a region" + "</span>" + "</p>");
    disp.appendTo("#mymap");
}

function onEachFeature_region_religiousAffiliation(feature, layer) {
    var perNoReligion = ((feature.properties.Pop_No_Rel) / feature.properties.pop_total) * 100;
    var perCatholic = ((feature.properties.Pop_Cathol) / feature.properties.pop_total) * 100;
    var perProtestant = ((feature.properties.Pop_Protes) / feature.properties.pop_total) * 100;
    var perPenticost = ((feature.properties.Pop_Pen_Ch) / feature.properties.pop_total) * 100;
    var perOthChrt = ((feature.properties.Pop_Other) / feature.properties.pop_total) * 100;
    var perIslam = ((feature.properties.Pop_Islam) / feature.properties.pop_total) * 100;
    var perTraditionalist = ((feature.properties.Pop_Tradit) / feature.properties.pop_total) * 100;
    var perOthers = ((feature.properties.Pop_Othe_1) / feature.properties.pop_total) * 100;
    

    var content = '<div class="custom-popup" id="map-popup">' + '<table border="1" style="border-collapse:collapse;" cellpadding="5">' +
        '<tr>' + '<th>Region: </th>' + '<td><b>' + feature.properties.Regions + '</b></td>' + '</tr>' +
        '<tr>' + '<th>Capital: </th>' + '<td>' + feature.properties.Capital + '</td>' + '</tr>' +
        '<tr>' + '<th>Total Population: </th>' + '<td>' + feature.properties.pop_total + '</td>' + '</tr>' +
        '<tr>' + '<th>No Religion: </th>' + '<td>' + feature.properties.Pop_No_Rel + ' (' + perNoReligion.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Catholic: </th>' + '<td>' + feature.properties.Pop_Cathol + ' (' + perCatholic.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Protestant: </th>' + '<td>' + feature.properties.Pop_Protes + ' (' + perProtestant.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Penticost: </th>' + '<td>' + feature.properties.Pop_Pen_Ch + ' (' + perPenticost.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Othodox charismatic: </th>' + '<td>' + feature.properties.Pop_Other + ' (' +  perOthChrt.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Islam: </th>' + '<td>' + feature.properties.Pop_Islam + ' (' +  perIslam.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Traditionalist: </th>' + '<td>' + feature.properties.Pop_Tradit + ' (' + perTraditionalist.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        '<tr>' + '<th>Others: </th>' + '<td>' + feature.properties.Pop_Othe_1 + ' (' + perOthers.toFixed(2) + ' %)' + '</td>' + '</tr>' +
        
        
        '<table>' + '</div>';
    var customOptions =
        {
            'className': 'custom'
        }

    layer.on({

        mouseover: highlight_reg_regAffiliation,
        mouseout: regional_religiousAffiliatio_resetHighlight,
        click: layer.bindPopup("<h4>Regional Info by religious affiliation</h4>" + content, customOptions)
    });
}

geojson_religiousAffiliation = L.geoJson(regional_religious_affiliation, {
    style: set_regional_style,
    onEachFeature: onEachFeature_region_religiousAffiliation
})

// **** Search control for district **** 
// **** Search control for district ****
// **** Search control for district ****
// **** Search control for district ****
var searchControl = new L.Control.Search({
    layer: geojson,
    propertyName: 'District_C',
    marker: false,
    moveToLocation: function (latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
    }
});
searchControl.on('search:locationfound', function (e) {
    e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });
    if (e.layer._popup)
        e.layer.openPopup();

}).on('search:collapsed', function (e) {

    featuresLayer.eachLayer(function (layer) {	//restore feature color
        featuresLayer.resetStyle(layer);
    });
});

//searchControl_reg_pop.hide()
//searchControl_reg_pop_nationality.hide()
//searchControl_reg_pop_relAffiliation.hide()
////searchControl.hide()
//searchControl_reg_pop_ethnicity.hide()
//searchControl_dist_agegroup.hide()

// **** Search control for district **** 
// **** Search control for district ****
// **** Search control for district ****
// **** Search control for district ****


// *** Search control for population by age group ***
// *** Search control for population by age group ***
// *** Search control for population by age group ***
var searchControl_dist_agegroup = new L.Control.Search({
    layer: district_agegroup_json,
    propertyName: 'District_C',
    marker: false,
    moveToLocation: function (latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
    }
});
searchControl_dist_agegroup.on('search:locationfound', function (e) {
    e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });
    if (e.layer._popup)
        e.layer.openPopup();

}).on('search:collapsed', function (e) {

    featuresLayer.eachLayer(function (layer) {	//restore feature color
        featuresLayer.resetStyle(layer);
    });
});


// *** Search control for population by age group ***
// *** Search control for population by age group ***
// *** Search control for population by age group ***

//*** Search control for regional population ***
//*** Search control for regional population ***
//*** Search control for regional population ***
var searchControl_reg_pop = new L.Control.Search({
    layer: regional_geojson,
    propertyName: 'REGION',
    marker: false,
    moveToLocation: function (latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
    }
});
searchControl_reg_pop.on('search:locationfound', function (e) {
    e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });
    if (e.layer._popup)
        e.layer.openPopup();

}).on('search:collapsed', function (e) {

    featuresLayer.eachLayer(function (layer) {	//restore feature color
        featuresLayer.resetStyle(layer);
    });
});
//map.addControl(searchControl_reg_pop);
////searchControl_reg_pop.hide()
//searchControl_reg_pop_nationality.hide()
//searchControl_reg_pop_relAffiliation.hide()
//searchControl.hide()
//searchControl_reg_pop_ethnicity.hide()
//searchControl_dist_agegroup.hide()

//*** Search control for regional population ***
//*** Search control for regional population ***
//*** Search control for regional population ***


//*** Search control for regional population by nationality ***
//*** Search control for regional population by nationality ***
//*** Search control for regional population by nationality ***
var searchControl_reg_pop_nationality = new L.Control.Search({
    layer: geojson_nationality,
    propertyName: 'REGION',
    marker: false,
    moveToLocation: function (latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
    }
});
searchControl_reg_pop_nationality.on('search:locationfound', function (e) {
    e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });
    if (e.layer._popup)
        e.layer.openPopup();

}).on('search:collapsed', function (e) {

    featuresLayer.eachLayer(function (layer) {	//restore feature color
        featuresLayer.resetStyle(layer);
    });
});

//*** Search control for regional population by nationality ***
//*** Search control for regional population by nationality ***
//*** Search control for regional population by nationality ***


//*** Search control for regional population by Ethnicity ***
//*** Search control for regional population by Ethnicity ***
//*** Search control for regional population by Ethnicity ***
var searchControl_reg_pop_ethnicity = new L.Control.Search({
    layer: geojson_ethnicity,
    propertyName: 'REGION',
    marker: false,
    moveToLocation: function (latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
    }
});
searchControl_reg_pop_ethnicity.on('search:locationfound', function (e) {
    e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });
    if (e.layer._popup)
        e.layer.openPopup();

}).on('search:collapsed', function (e) {

    featuresLayer.eachLayer(function (layer) {	//restore feature color
        featuresLayer.resetStyle(layer);
    });
});

//*** Search control for regional population by Ethnicity ***
//*** Search control for regional population by Ethnicity ***
//*** Search control for regional population by Ethnicity ***


//*** Search control for regional population by religious affiliation ***
//*** Search control for regional population by religious affiliation ***
//*** Search control for regional population by religious affiliation ***
var searchControl_reg_pop_relAffiliation = new L.Control.Search({
    layer: geojson_religiousAffiliation,
    propertyName: 'Regions',
    marker: false,
    moveToLocation: function (latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
    }
});
searchControl_reg_pop_relAffiliation.on('search:locationfound', function (e) {
    e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });
    if (e.layer._popup)
        e.layer.openPopup();

}).on('search:collapsed', function (e) {

    featuresLayer.eachLayer(function (layer) {	//restore feature color
        featuresLayer.resetStyle(layer);
    });
});

//*** Search control for regional population by religious affiliation ***
//*** Search control for regional population by religious affiliation ***
//*** Search control for regional population by religious affiliation ***

$(document).ready(function () {
    var disp = $('<div></div>', {
        id: "infoDisplay",
        css: {
            position: "absolute",
            zIndex: 1002,
            backgroundColor: " #80dfff",
            padding: "8px",
            border: "1px solid #ccc",
            width: "250px",
            height: "95px",
            float: "right",
            left: "648px",
            color: "#222",
           
        }
    }).append("<h4 style='margin-bottom: 0px;font-weight: bold;'>Ghana District Population</h4>" + "<br>" + "<p style='font-weight: bold; font-size: 15px; margin-top: 0px;'>hover over a district</p>");
    disp.appendTo("#mymap");
    $("#accordianmenu p").click(function () {
        $("#district-panel").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
    });
    $("#regional-accordium p").click(function () {
        $("#Regional-panel").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
    });

    //("#select-map").val() = "selection";
    $("#reg_leg_par").hide();
    $("#Regional-panel").hide();

    //Add district search control
    map.addControl(searchControl);
    map.removeControl(searchControl_reg_pop);
    map.removeControl(searchControl_reg_pop_nationality);
    map.removeControl(searchControl_reg_pop_relAffiliation);
    map.removeControl(searchControl_reg_pop_ethnicity);
    map.removeControl(searchControl_dist_agegroup);
    $("#select-map").change(function() {
        var selected = $(this).val(); // get selected options value.
        // Display basic district map
      if (selected == "basic-pop") {
          var disp = $('<div></div>', {
              id: "infoDisplay",
              css: {
                  position: "absolute",
                  zIndex: 1002,
                  backgroundColor: " #80dfff",
                  padding: "8px",
                  border: "1px solid #ccc",
                  width: "250px",
                  height: "95px",
                  float: "right",
                  left: "648px",
                  color: "#222",

              }
          }).append("<h4 style='margin-bottom: 0px;font-weight: bold;'>Ghana District Population</h4>" + "<br>" + "<p style='font-weight: bold; font-size: 15px; margin-top: 0px;'>hover over a district</p>");
          disp.appendTo("#mymap");
        map.addLayer(geojson);
        map.removeLayer(regional_geojson);
        map.removeLayer(district_agegroup_json);
        map.removeLayer(geojson_nationality);
        map.removeLayer(geojson_ethnicity);
        map.removeLayer(geojson_religiousAffiliation);
        $("#dist_leg_par").show();
        $("#reg_leg_par").hide();
        $("#Regional-panel").hide();

        //Add district search control
        map.addControl(searchControl);
        map.removeControl(searchControl_reg_pop);
        map.removeControl(searchControl_reg_pop_nationality);
        map.removeControl(searchControl_reg_pop_relAffiliation);
        map.removeControl(searchControl_reg_pop_ethnicity);
        map.removeControl(searchControl_dist_agegroup);
        
        //$("#collapseOne").fadeIn();
      }   
      else if (selected == "pop-age-group") {
          var disp = $('<div></div>', {
              id: "infoDisplay",
              css: {
                  position: "absolute",
                  zIndex: 1002,
                  backgroundColor: " #80dfff",
                  padding: "8px",
                  border: "1px solid #ccc",
                  width: "250px",
                  height: "95px",
                  float: "right",
                  left: "648px",
                  color: "#222",

              }
          }).append("<h4 style='margin-bottom: 0px;font-weight: bold;'>Ghana District Population</h4>" + "<br>" + "<p style='font-weight: bold; font-size: 15px; margin-top: 0px;'>hover over a district</p>");
          disp.appendTo("#mymap");
        map.addLayer(district_agegroup_json);
        map.removeLayer(regional_geojson);
        map.removeLayer(geojson);
        map.removeLayer(geojson_nationality);
        map.removeLayer(geojson_ethnicity);
        map.removeLayer(geojson_religiousAffiliation);
        $("#dist_leg_par").show();
        $("#reg_leg_par").hide();
        $("#Regional-panel").hide();
        //$("#collapseOne").fadeIn();

          //Add search control
        map.addControl(searchControl_dist_agegroup);
        map.removeControl(searchControl_reg_pop);
        map.removeControl(searchControl_reg_pop_nationality);
        map.removeControl(searchControl_reg_pop_relAffiliation);
        map.removeControl(searchControl);
        map.removeControl(searchControl_reg_pop_ethnicity);

          
    }
      else if (selected == "pop-regional") {
          // $("#headingOne").fadeOut();
          var disp = $('<div></div>', {
              id: "infoDisplay",
              css: {
                  position: "absolute",
                  zIndex: 1002,
                  backgroundColor: " #80dfff",
                  padding: "8px",
                  border: "1px solid #ccc",
                  width: "250px",
                  height: "95px",
                  float: "right",
                  left: "648px",
                  color: "#222",
              }
          }).append("<p style='font-size: 17px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<br />" + "<span style='font-size: 15px; margin-top:-20px; font-weight: bold;'>" + "Hover over a region" + "</span>" + "</p>");
          disp.appendTo("#mymap");
        map.addLayer(regional_geojson);
        map.removeLayer(district_agegroup_json);
        map.removeLayer(geojson);
        map.removeLayer(geojson_nationality);
        map.removeLayer(geojson_ethnicity);
        map.removeLayer(geojson_religiousAffiliation);
        $("#dist_leg_par").hide();
        $("#district-panel").hide();
        $("#reg_leg_par").show();

        map.addControl(searchControl_reg_pop);
        map.removeControl(searchControl_reg_pop_nationality);
        map.removeControl(searchControl_reg_pop_relAffiliation);
        map.removeControl(searchControl_dist_agegroup);
        map.removeControl(searchControl);
        map.removeControl(searchControl_reg_pop_ethnicity);
        

      }
      else if (selected == "pop-rgional-nationality") {
          //$("#headingOne").fadeOut();
          var disp = $('<div></div>', {
              id: "infoDisplay",
              css: {
                  position: "absolute",
                  zIndex: 1002,
                  backgroundColor: " #80dfff",
                  padding: "8px",
                  border: "1px solid #ccc",
                  width: "250px",
                  height: "95px",
                  float: "right",
                  left: "648px",
                  color: "#222",
              }
          }).append("<p style='font-size: 17px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<br />" + "<span style='font-size: 15px; margin-top:-20px; font-weight: bold;'>" + "Hover over a region" + "</span>" + "</p>");
          disp.appendTo("#mymap");
          map.addLayer(geojson_nationality);
          map.removeLayer(district_agegroup_json);
          map.removeLayer(geojson);
          map.removeLayer(regional_geojson);
          map.removeLayer(geojson_ethnicity);
          map.removeLayer(geojson_religiousAffiliation);
          $("#dist_leg_par").hide();
          $("#district-panel").hide();
          $("#reg_leg_par").show();

          //Add seaech control
          map.addControl(searchControl_reg_pop_nationality);
          map.removeControl(searchControl_reg_pop_relAffiliation);
          map.removeControl(searchControl_dist_agegroup);
          map.removeControl(searchControl);
          map.removeControl(searchControl_reg_pop);
          map.removeControl(searchControl_reg_pop_ethnicity);

          
      }
      else if (selected == "pop-regional-ethnicity") {
          //$("#headingOne").fadeOut();
          var disp = $('<div></div>', {
              id: "infoDisplay",
              css: {
                  position: "absolute",
                  zIndex: 1002,
                  backgroundColor: " #80dfff",
                  padding: "8px",
                  border: "1px solid #ccc",
                  width: "250px",
                  height: "95px",
                  float: "right",
                  left: "648px",
                  color: "#222",
              }
          }).append("<p style='font-size: 17px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<br />" + "<span style='font-size: 15px; margin-top:-20px; font-weight: bold;'>" + "Hover over a region" + "</span>" + "</p>");
          disp.appendTo("#mymap");
          map.addLayer(geojson_ethnicity);
          map.removeLayer(district_agegroup_json);
          map.removeLayer(geojson);
          map.removeLayer(regional_geojson);
          map.removeLayer(geojson_nationality);
          map.removeLayer(geojson_religiousAffiliation);
          $("#dist_leg_par").hide();
          $("#district-panel").hide();
          $("#reg_leg_par").show();

          // Add search control
          map.addControl(searchControl_reg_pop_ethnicity);
          map.removeControl(searchControl_dist_agegroup);
          map.removeControl(searchControl);
          map.removeControl(searchControl_reg_pop);
          map.removeControl(searchControl_reg_pop_nationality);
          map.removeControl(searchControl_reg_pop_relAffiliation);

          
          
      }
      else if (selected == "pop-regional-rel-affil") {
          //$("#headingOne").fadeOut();
          var disp = $('<div></div>', {
              id: "infoDisplay",
              css: {
                  position: "absolute",
                  zIndex: 1002,
                  backgroundColor: " #80dfff",
                  padding: "8px",
                  border: "1px solid #ccc",
                  width: "250px",
                  height: "95px",
                  float: "right",
                  left: "648px",
                  color: "#222",
              }
          }).append("<p style='font-size: 17px; font-weight: bold; margin-bottom: 0px; line-height:1.3;'> Ghana Regional Population" + "<br style='font-size:0px;'/>" + "<br />" + "<span style='font-size: 15px; margin-top:-20px; font-weight: bold;'>" + "Hover over a region" + "</span>" + "</p>");
          disp.appendTo("#mymap");
          map.addLayer(geojson_religiousAffiliation);
          map.removeLayer(district_agegroup_json);
          map.removeLayer(geojson);
          map.removeLayer(regional_geojson);
          map.removeLayer(geojson_nationality);
          map.removeLayer(geojson_ethnicity)
          $("#dist_leg_par").hide();
          $("#district-panel").hide();
          $("#reg_leg_par").show();
          //Add search control
          map.addControl(searchControl_reg_pop_relAffiliation);
          map.removeControl(searchControl_dist_agegroup);
          map.removeControl(searchControl);
          map.removeControl(searchControl_reg_pop);
          map.removeControl(searchControl_reg_pop_nationality);
          map.removeControl(searchControl_reg_pop_ethnicity);

          
      }
      else {
          var disp = $('<div></div>', {
              id: "infoDisplay",
              css: {
                  position: "absolute",
                  zIndex: 1002,
                  backgroundColor: " #80dfff",
                  padding: "8px",
                  border: "1px solid #ccc",
                  width: "250px",
                  height: "95px",
                  float: "right",
                  left: "648px",
                  color: "#222",

              }
          }).append("<h4 style='margin-bottom: 0px;font-weight: bold;'>Ghana District Population</h4>" + "<br>" + "<p style='font-weight: bold; font-size: 15px; margin-top: 0px;'>hover over a district</p>");
          disp.appendTo("#mymap");
          map.addLayer(geojson);
          map.removeLayer(regional_geojson);
          map.removeLayer(district_agegroup_json);
          map.removeLayer(geojson_nationality);
          map.removeLayer(geojson_ethnicity);
          map.removeLayer(geojson_religiousAffiliation);
          //$("#headingOne").fadeIn();
          $("#dist_leg_par").show();
          $("#reg_leg_par").hide();
          $("#Regional-panel").hide();

          
      }
    });
 
});




//var basemaps = {
//    "District information": geojson,
//    "District population by age group": district_agegroup_json,
//    "Regional Population": regional_geojson
//}
//L.control.layers(basemaps).addTo(map);



// Load district population by age group
function onEachFeature_agegroup(feature, layer) {

    var content = '<div class="custom-popup" id="map-popup">' + '<table border="1" style="border-collapse:collapse;" cellpadding="5">' +
        '<tr>' + '<th>District: </th>' + '<td><b>' + feature.properties.DISTRICT + '</b></td>' + '</tr>' +
        '<tr>' + '<th>Region: </th>' + '<td>' + feature.properties.REGION + '</td>' + '</tr>' +
        '<tr>' + '<th style="background-color:#4d4dff">Total Population: </th>' + '<td style="background-color:#4d4dff">' + feature.properties.Pop_Total + '</td>' + '</tr>' +
        '<tr>' + '<th>Male: </th>' + '<td>' + feature.properties.Male + '</td>' + '</tr>' +
        '<tr>' + '<th>Female: </th>' + '<td>' + feature.properties.Female + '</td>' + '</tr>' +
        '<tr>' + '<th style="background-color:#4d4dff">age (0-14) Total: </th>' + '<td style="background-color:#4d4dff">' + feature.properties.pop_0_14_y + '</td>' + '</tr>' +
        '<tr>' + '<th>age (0-14) male: </th>' + '<td>' + feature.properties.pop_0_14_1 + '</td>' + '</tr>' +
        '<tr>' + '<th>age (0-14) female: </th>' + '<td>' + feature.properties.pop_0_14_2 + '</td>' + '</tr>' +
        '<tr>' + '<th style="background-color:#4d4dff">age (15-64) Total: </th>' + '<td style="background-color:#4d4dff">' + feature.properties.pop_15_64_ + '</td>' + '</tr>' +
        '<tr>' + '<th>age (15-64) male: </th>' + '<td>' + feature.properties.pop_15_6_1 + '</td>' + '</tr>' +
        '<tr>' + '<th>age (15-64) female: </th>' + '<td>' + feature.properties.pop_15_6_2 + '</td>' + '</tr>' +
        '<tr>' + '<th style="background-color:#4d4dff">age (65 +) Total: </th>' + '<td style="background-color:#4d4dff">' + feature.properties.pop_65_yea + '</td>' + '</tr>' +
        '<tr>' + '<th>age (65 +) male: </th>' + '<td>' + feature.properties.pop_65_y_1 + '</td>' + '</tr>' +
        '<tr>' + '<th>age (65 +) female: </th>' + '<td>' + feature.properties.pop_65_y_2 + '</td>' + '</tr>' +

        '<table>' + '</div>';
    var customOptions =
        {
            'className': 'custom'
        }

    layer.on({

        mouseover: highlight,
        mouseout: resetHighlight,
        click: layer.bindPopup("<h4>District by</h4><br><h4>age group</h4>" + content, customOptions)
    })
}






    //geojson=L.geoJson(districts,{style: densityStyle}).addTo(map);

    //var legend = L.control({position: 'bottomright' });
    //
    //legend.onAdd = function (map) {
    //
    //    var div = L.DomUtil.create('div', 'info legend'),
    //        grades = [60934, 78069, 89943, 106136, 118189, 142829, 1730249],
    //                            labels = [];
    //    div.innerHTML+='<h4 class="legHead">Legend</h4>'
    //
    //    // loop through our density intervals and generate a label with a colored square for each interval
    //    for (var i = 0; i < grades.length; i++) {
    //        div.innerHTML +=
    //        '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
    //        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>'+'<br>' : '+');
    //    }
    //
    //    return div;
    //};
    //                          
    //legend.addTo(map);















