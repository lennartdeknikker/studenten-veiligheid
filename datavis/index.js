var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: 'green',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffedbd',
                fillOpacity: 1
              });
            }
        }
        var map = L.map('map', {
            zoomControl:true, maxZoom:15, minZoom:11
        })
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
            if (bounds_group.getLayers().length) {
                map.fitBounds(bounds_group.getBounds());
            }
            map.setMaxBounds(map.getBounds());
        }
        var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            opacity: 1.0,
            attribution: '',
            minZoom: 11,
            maxZoom: 15,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_OpenStreetMap_0;
        map.addLayer(layer_OpenStreetMap_0);
        function pop_gebieden_1(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"> <span class="attribute-label">Buurt:</span> ' + (feature.properties['Buurtcombinatie'] !== null ? Autolinker.link(feature.properties['Buurtcombinatie'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"> <span class="attribute-label">Veiligheidsindex (0-200):</span> ' + (feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] !== null ? Autolinker.link(feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_gebieden_1_0(feature) {
            if (feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] >= 0.000000 && feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] <= 75.000000 ) {
                return {
                pane: 'pane_gebieden_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,245,240,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] >= 75.000000 && feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] <= 100.000000 ) {
                return {
                pane: 'pane_gebieden_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,214,213,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] >= 100.000000 && feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] <= 125.000000 ) {
                return {
                pane: 'pane_gebieden_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,140,140,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] >= 125.000000 && feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] <= 150.000000 ) {
                return {
                pane: 'pane_gebieden_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(232,63,63,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] >= 150.000000 && feature.properties['veiligheidsindex 2017 en 2018_totale veiligheidsindex 2018'] <= 200.000000 ) {
                return {
                pane: 'pane_gebieden_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,0,0,1.0)',
                interactive: true,
            }
            }
        }
        map.createPane('pane_gebieden_1');
        map.getPane('pane_gebieden_1').style.zIndex = 401;
        map.getPane('pane_gebieden_1').style['mix-blend-mode'] = 'normal';
        var layer_gebieden_1 = new L.geoJson(json_gebieden_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_gebieden_1',
            layerName: 'layer_gebieden_1',
            pane: 'pane_gebieden_1',
            onEachFeature: pop_gebieden_1,
            style: style_gebieden_1_0,
        });
        bounds_group.addLayer(layer_gebieden_1);
        map.addLayer(layer_gebieden_1);
        function pop_JONGERENSTUDENTENHUISVESTING_2(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><span class="attribute-label">Naam:</span> ' + (feature.properties['Naam'] !== null ? Autolinker.link(feature.properties['Naam'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"> <span class="attribute-label">Locatie:</span> ' + (feature.properties['Straatnaam'] !== null ? Autolinker.link(feature.properties['Straatnaam'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"> <span class="attribute-label">Doelgroep (jongeren/studenten):</span> ' + (feature.properties['Doelgroep'] !== null ? Autolinker.link(feature.properties['Doelgroep'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"> <span class="attribute-label">Aantal woningen:</span> ' + (feature.properties['Aantal_woningen'] !== null ? Autolinker.link(feature.properties['Aantal_woningen'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"> <span class="attribute-label">Status:</span> ' + (feature.properties['Status'] !== null ? Autolinker.link(feature.properties['Status'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"> <span class="attribute-label">Beheerder:</span> ' + (feature.properties['Eigenaar_beheerder'] !== null ? Autolinker.link(feature.properties['Eigenaar_beheerder'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_JONGERENSTUDENTENHUISVESTING_2_0(feature) {
            switch(String(feature.properties['Status'])) {
                case 'Bestaand':
                    return {
                pane: 'pane_JONGERENSTUDENTENHUISVESTING_2',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(72,123,182,1.0)',
                interactive: true,
            }
                    break;
                case 'Plan in ontwikkeling':
                    return {
                pane: 'pane_JONGERENSTUDENTENHUISVESTING_2',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(72,123,182,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,252,252,1.0)',
                interactive: true,
            }
                    break;
                default:
                    return {
                pane: 'pane_JONGERENSTUDENTENHUISVESTING_2',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(200,122,39,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_JONGERENSTUDENTENHUISVESTING_2');
        map.getPane('pane_JONGERENSTUDENTENHUISVESTING_2').style.zIndex = 402;
        map.getPane('pane_JONGERENSTUDENTENHUISVESTING_2').style['mix-blend-mode'] = 'normal';
        var layer_JONGERENSTUDENTENHUISVESTING_2 = new L.geoJson(json_JONGERENSTUDENTENHUISVESTING_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_JONGERENSTUDENTENHUISVESTING_2',
            layerName: 'layer_JONGERENSTUDENTENHUISVESTING_2',
            pane: 'pane_JONGERENSTUDENTENHUISVESTING_2',
            onEachFeature: pop_JONGERENSTUDENTENHUISVESTING_2,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_JONGERENSTUDENTENHUISVESTING_2_0(feature));
            },
        });
        bounds_group.addLayer(layer_JONGERENSTUDENTENHUISVESTING_2);
        map.addLayer(layer_JONGERENSTUDENTENHUISVESTING_2);
        setBounds();
        resetLabels([layer_gebieden_1]);
        map.on("zoomend", function(){
            resetLabels([layer_gebieden_1]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_gebieden_1]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_gebieden_1]);
        });