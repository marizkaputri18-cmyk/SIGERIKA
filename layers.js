var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_admin_Kab_Jateng_1 = new ol.format.GeoJSON();
var features_Batas_admin_Kab_Jateng_1 = format_Batas_admin_Kab_Jateng_1.readFeatures(json_Batas_admin_Kab_Jateng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_admin_Kab_Jateng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_admin_Kab_Jateng_1.addFeatures(features_Batas_admin_Kab_Jateng_1);
var lyr_Batas_admin_Kab_Jateng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_admin_Kab_Jateng_1, 
                style: style_Batas_admin_Kab_Jateng_1,
                popuplayertitle: 'Batas_admin_Kab_Jateng',
                interactive: true,
                title: '<img src="styles/legend/Batas_admin_Kab_Jateng_1.png" /> Batas_admin_Kab_Jateng'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_admin_Kab_Jateng_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_admin_Kab_Jateng_1];
lyr_Batas_admin_Kab_Jateng_1.set('fieldAliases', {'fid_batas_': 'fid_batas_', 'a1code': 'a1code', 'a2code': 'a2code', 'a2name': 'a2name', 'a1name': 'a1name', 'kode_bps': 'kode_bps', 'fid_dakkab': 'fid_dakkab', 'dak_kprov': 'dak_kprov', 'dak_nprov': 'dak_nprov', 'dak_kkab': 'dak_kkab', 'dak_nkab': 'dak_nkab', 'dakk': 'dakk', 'kode_dagri': 'kode_dagri', 'coba': 'coba', 'zona': 'zona', });
lyr_Batas_admin_Kab_Jateng_1.set('fieldImages', {'fid_batas_': '', 'a1code': '', 'a2code': '', 'a2name': '', 'a1name': '', 'kode_bps': '', 'fid_dakkab': '', 'dak_kprov': '', 'dak_nprov': '', 'dak_kkab': '', 'dak_nkab': '', 'dakk': '', 'kode_dagri': '', 'coba': '', 'zona': '', });
lyr_Batas_admin_Kab_Jateng_1.set('fieldLabels', {'fid_batas_': 'no label', 'a1code': 'no label', 'a2code': 'no label', 'a2name': 'inline label - visible with data', 'a1name': 'inline label - visible with data', 'kode_bps': 'no label', 'fid_dakkab': 'no label', 'dak_kprov': 'no label', 'dak_nprov': 'no label', 'dak_kkab': 'no label', 'dak_nkab': 'no label', 'dakk': 'no label', 'kode_dagri': 'no label', 'coba': 'no label', 'zona': 'no label', });
lyr_Batas_admin_Kab_Jateng_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});