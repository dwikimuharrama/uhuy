var wms_layers = [];

        var lyr_GoogleImagery_0 = new ol.layer.Tile({
            'title': 'Google Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_JALAN_LN_25K_1 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_1 = format_JALAN_LN_25K_1.readFeatures(json_JALAN_LN_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JALAN_LN_25K_1.addFeatures(features_JALAN_LN_25K_1);var lyr_JALAN_LN_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_25K_1, 
                style: style_JALAN_LN_25K_1,
    title: 'JALAN_LN_25K<br />\
    <img src="styles/legend/JALAN_LN_25K_1_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_25K_1_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_25K_1_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JALAN_LN_25K_1_3.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/JALAN_LN_25K_1_4.png" /> Jalan Setapak<br />'
        });var format_SUNGAI_AR_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_2 = format_SUNGAI_AR_25K_2.readFeatures(json_SUNGAI_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SUNGAI_AR_25K_2.addFeatures(features_SUNGAI_AR_25K_2);var lyr_SUNGAI_AR_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_AR_25K_2, 
                style: style_SUNGAI_AR_25K_2,
                title: '<img src="styles/legend/SUNGAI_AR_25K_2.png" /> SUNGAI_AR_25K'
            });var format_ADMINISTRASI_LN_25K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_3 = format_ADMINISTRASI_LN_25K_3.readFeatures(json_ADMINISTRASI_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ADMINISTRASI_LN_25K_3.addFeatures(features_ADMINISTRASI_LN_25K_3);var lyr_ADMINISTRASI_LN_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_25K_3, 
                style: style_ADMINISTRASI_LN_25K_3,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_3.png" /> ADMINISTRASI_LN_25K'
            });var format_industri_kudus_4 = new ol.format.GeoJSON();
var features_industri_kudus_4 = format_industri_kudus_4.readFeatures(json_industri_kudus_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industri_kudus_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_industri_kudus_4.addFeatures(features_industri_kudus_4);var lyr_industri_kudus_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_industri_kudus_4, 
                style: style_industri_kudus_4,
                title: '<img src="styles/legend/industri_kudus_4.png" /> industri_kudus'
            });

lyr_GoogleImagery_0.setVisible(true);lyr_JALAN_LN_25K_1.setVisible(true);lyr_SUNGAI_AR_25K_2.setVisible(true);lyr_ADMINISTRASI_LN_25K_3.setVisible(true);lyr_industri_kudus_4.setVisible(true);
var layersList = [lyr_GoogleImagery_0,lyr_JALAN_LN_25K_1,lyr_SUNGAI_AR_25K_2,lyr_ADMINISTRASI_LN_25K_3,lyr_industri_kudus_4];
lyr_JALAN_LN_25K_1.set('fieldAliases', {'NAMRJL': 'Jalan', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_AR_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_industri_kudus_4.set('fieldAliases', {'Ket': 'Ket', });
lyr_JALAN_LN_25K_1.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_SUNGAI_AR_25K_2.set('fieldImages', {'NAMOBJ': 'Hidden', 'JNSSNG': 'Hidden', 'KLSSNG': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'NAMWS': 'Hidden', 'NAMDAS': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldImages', {'KARKTR': 'Hidden', 'STSBTS': 'Hidden', 'FCODE': 'Hidden', 'KELAS': 'Hidden', 'UUPP': 'Hidden', 'LOKASI': 'Hidden', 'REMARK': 'TextEdit', 'NAMOBJ': 'Hidden', 'ADMIN1': 'Hidden', 'ADMIN2': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'WAKLD1': 'Hidden', 'WAKLD2': 'Hidden', 'WADKC1': 'Hidden', 'WADKC2': 'Hidden', 'WAKBK1': 'Hidden', 'WAKBK2': 'Hidden', 'WAPRO1': 'Hidden', 'WAPRO2': 'Hidden', 'TIPTBT': 'Hidden', 'PJGBTS': 'Hidden', 'KLBADM': 'Hidden', 'TIPLOK': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_industri_kudus_4.set('fieldImages', {'Ket': 'TextEdit', });
lyr_JALAN_LN_25K_1.set('fieldLabels', {'NAMRJL': 'no label', });
lyr_SUNGAI_AR_25K_2.set('fieldLabels', {'REMARK': 'no label', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldLabels', {'REMARK': 'no label', });
lyr_industri_kudus_4.set('fieldLabels', {'Ket': 'no label', });
lyr_industri_kudus_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});