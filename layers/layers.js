var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TingkatKerawananTsunami_1 = new ol.format.GeoJSON();
var features_TingkatKerawananTsunami_1 = format_TingkatKerawananTsunami_1.readFeatures(json_TingkatKerawananTsunami_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TingkatKerawananTsunami_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TingkatKerawananTsunami_1.addFeatures(features_TingkatKerawananTsunami_1);
var lyr_TingkatKerawananTsunami_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TingkatKerawananTsunami_1, 
                style: style_TingkatKerawananTsunami_1,
                popuplayertitle: "Tingkat Kerawanan Tsunami",
                interactive: true,
    title: 'Tingkat Kerawanan Tsunami<br />\
    <img src="styles/legend/TingkatKerawananTsunami_1_0.png" /> Sangat Tinggi<br />\
    <img src="styles/legend/TingkatKerawananTsunami_1_1.png" /> Tinggi<br />\
    <img src="styles/legend/TingkatKerawananTsunami_1_2.png" /> Sedang<br />\
    <img src="styles/legend/TingkatKerawananTsunami_1_3.png" /> Rendah<br />\
    <img src="styles/legend/TingkatKerawananTsunami_1_4.png" /> Sangat Rendah<br />'
        });
var format_BatasAdministrasiKecamatan_2 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_2 = format_BatasAdministrasiKecamatan_2.readFeatures(json_BatasAdministrasiKecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_2.addFeatures(features_BatasAdministrasiKecamatan_2);
var lyr_BatasAdministrasiKecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_2, 
                style: style_BatasAdministrasiKecamatan_2,
                popuplayertitle: "Batas Administrasi Kecamatan",
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_2.png" /> Batas Administrasi Kecamatan'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_TingkatKerawananTsunami_1.setVisible(true);lyr_BatasAdministrasiKecamatan_2.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_TingkatKerawananTsunami_1,lyr_BatasAdministrasiKecamatan_2];
lyr_TingkatKerawananTsunami_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kerawanan': 'Kerawanan', 'Luas': 'Luas (km^2)', });
lyr_BatasAdministrasiKecamatan_2.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_TingkatKerawananTsunami_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kerawanan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_2.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_TingkatKerawananTsunami_1.set('fieldLabels', {'Kecamatan': 'inline label - visible with data', 'Kerawanan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_BatasAdministrasiKecamatan_2.set('fieldLabels', {'LEFT_FID': 'inline label - always visible', 'RIGHT_FID': 'inline label - always visible', });
lyr_BatasAdministrasiKecamatan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});