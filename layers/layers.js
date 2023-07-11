ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:22186").setExtent([6405056.253860, 6597504.154169, 6405690.549271, 6597923.714154]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_CHAJARI_160523CHAJARI_16_1 = new ol.format.GeoJSON();
var features_CHAJARI_160523CHAJARI_16_1 = format_CHAJARI_160523CHAJARI_16_1.readFeatures(json_CHAJARI_160523CHAJARI_16_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22186'});
var jsonSource_CHAJARI_160523CHAJARI_16_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAJARI_160523CHAJARI_16_1.addFeatures(features_CHAJARI_160523CHAJARI_16_1);
var lyr_CHAJARI_160523CHAJARI_16_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHAJARI_160523CHAJARI_16_1, 
                style: style_CHAJARI_160523CHAJARI_16_1,
                interactive: true,
                title: '<img src="styles/legend/CHAJARI_160523CHAJARI_16_1.png" /> CHAJARI_16.05.23 — CHAJARI_16'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_CHAJARI_160523CHAJARI_16_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CHAJARI_160523CHAJARI_16_1];
lyr_CHAJARI_160523CHAJARI_16_1.set('fieldAliases', {'qc_id': 'qc_id', 'layer': 'layer', 'paperspace': 'paperspace', 'subclasses': 'subclasses', 'linetype': 'linetype', 'entityhand': 'entityhand', 'text': 'text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_CHAJARI_160523CHAJARI_16_1.set('fieldImages', {'qc_id': 'Range', 'layer': 'TextEdit', 'paperspace': 'TextEdit', 'subclasses': 'TextEdit', 'linetype': 'TextEdit', 'entityhand': 'TextEdit', 'text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'TextEdit', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'TextEdit', 'bold': 'TextEdit', 'italic': 'TextEdit', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', });
lyr_CHAJARI_160523CHAJARI_16_1.set('fieldLabels', {'qc_id': 'no label', 'layer': 'inline label', 'paperspace': 'no label', 'subclasses': 'no label', 'linetype': 'no label', 'entityhand': 'no label', 'text': 'inline label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'inline label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'inline label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'inline label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'inline label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_CHAJARI_160523CHAJARI_16_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});