var wms_layers = [];


        var lyr_SatelliteImagery_0 = new ol.layer.Tile({
            'title': 'Satellite Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_ElevationModel_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Elevation Model',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ElevationModel_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531329.429144, 6505226.932351, -12529951.852318, 6507776.643251]
                            })
                        });
var lyr_June242024SatelliteImagery_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'June 24,  2024 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/June242024SatelliteImagery_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_May102024SatelliteImagery_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'May 10,  2024 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/May102024SatelliteImagery_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_June222023SatelliteImagery_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'June 22,  2023 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/June222023SatelliteImagery_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_April112023SatelliteImagery_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'April 11,  2023 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/April112023SatelliteImagery_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_June222022SatelliteImagery_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'June 22,  2022 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/June222022SatelliteImagery_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_July102020SatelliteImagery_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'July 10,  2020 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/July102020SatelliteImagery_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_April82020SatelliteImagery_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'April 8,  2020 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/April82020SatelliteImagery_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_August52019SatelliteImagery_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'August 5,  2019 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/August52019SatelliteImagery_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_April222019SatelliteImagery_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'April 22,  2019 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/April222019SatelliteImagery_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_September62018SatelliteImagery_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'September 6,  2018 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/September62018SatelliteImagery_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_July232018SatelliteImagery_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'July 23,  2018 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/July232018SatelliteImagery_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var lyr_June82018SatelliteImagery_13 = new ol.layer.Image({
                            opacity: 1,
                            title: 'June 8,  2018 Satellite Imagery',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/June82018SatelliteImagery_13.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12531554.565537, 6505020.482197, -12529667.588849, 6508359.742651]
                            })
                        });
var format_ProblemArea_14 = new ol.format.GeoJSON();
var features_ProblemArea_14 = format_ProblemArea_14.readFeatures(json_ProblemArea_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProblemArea_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProblemArea_14.addFeatures(features_ProblemArea_14);
var lyr_ProblemArea_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProblemArea_14, 
                style: style_ProblemArea_14,
                popuplayertitle: 'Problem Area',
                interactive: false,
                title: '<img src="styles/legend/ProblemArea_14.png" /> Problem Area'
            });
var format_TilesLines_15 = new ol.format.GeoJSON();
var features_TilesLines_15 = format_TilesLines_15.readFeatures(json_TilesLines_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TilesLines_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TilesLines_15.addFeatures(features_TilesLines_15);
var lyr_TilesLines_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TilesLines_15, 
                style: style_TilesLines_15,
                popuplayertitle: 'Tiles Lines',
                interactive: true,
                title: 'Tiles Lines'
            });
var format_SurfaceDrainFromRoadDitch_16 = new ol.format.GeoJSON();
var features_SurfaceDrainFromRoadDitch_16 = format_SurfaceDrainFromRoadDitch_16.readFeatures(json_SurfaceDrainFromRoadDitch_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfaceDrainFromRoadDitch_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceDrainFromRoadDitch_16.addFeatures(features_SurfaceDrainFromRoadDitch_16);
var lyr_SurfaceDrainFromRoadDitch_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurfaceDrainFromRoadDitch_16, 
                style: style_SurfaceDrainFromRoadDitch_16,
                popuplayertitle: 'Surface Drain From Road Ditch',
                interactive: false,
                title: '<img src="styles/legend/SurfaceDrainFromRoadDitch_16.png" /> Surface Drain From Road Ditch'
            });
var format_OutletPoint_17 = new ol.format.GeoJSON();
var features_OutletPoint_17 = format_OutletPoint_17.readFeatures(json_OutletPoint_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutletPoint_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutletPoint_17.addFeatures(features_OutletPoint_17);
var lyr_OutletPoint_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutletPoint_17, 
                style: style_OutletPoint_17,
                popuplayertitle: 'Outlet Point',
                interactive: true,
                title: '<img src="styles/legend/OutletPoint_17.png" /> Outlet Point'
            });
var format_Lift_Station_18 = new ol.format.GeoJSON();
var features_Lift_Station_18 = format_Lift_Station_18.readFeatures(json_Lift_Station_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lift_Station_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lift_Station_18.addFeatures(features_Lift_Station_18);
var lyr_Lift_Station_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lift_Station_18, 
                style: style_Lift_Station_18,
                popuplayertitle: 'Lift_Station',
                interactive: false,
                title: '<img src="styles/legend/Lift_Station_18.png" /> Lift_Station'
            });
var group_WetYearsSatelliteImagery = new ol.layer.Group({
                                layers: [lyr_June242024SatelliteImagery_2,lyr_May102024SatelliteImagery_3,lyr_June222023SatelliteImagery_4,lyr_April112023SatelliteImagery_5,lyr_June222022SatelliteImagery_6,lyr_July102020SatelliteImagery_7,lyr_April82020SatelliteImagery_8,lyr_August52019SatelliteImagery_9,lyr_April222019SatelliteImagery_10,lyr_September62018SatelliteImagery_11,lyr_July232018SatelliteImagery_12,lyr_June82018SatelliteImagery_13,],
                                fold: "open",
                                title: 'Wet Years Satellite Imagery'});

lyr_SatelliteImagery_0.setVisible(true);lyr_ElevationModel_1.setVisible(true);lyr_June242024SatelliteImagery_2.setVisible(false);lyr_May102024SatelliteImagery_3.setVisible(false);lyr_June222023SatelliteImagery_4.setVisible(false);lyr_April112023SatelliteImagery_5.setVisible(false);lyr_June222022SatelliteImagery_6.setVisible(false);lyr_July102020SatelliteImagery_7.setVisible(false);lyr_April82020SatelliteImagery_8.setVisible(false);lyr_August52019SatelliteImagery_9.setVisible(false);lyr_April222019SatelliteImagery_10.setVisible(false);lyr_September62018SatelliteImagery_11.setVisible(false);lyr_July232018SatelliteImagery_12.setVisible(false);lyr_June82018SatelliteImagery_13.setVisible(false);lyr_ProblemArea_14.setVisible(true);lyr_TilesLines_15.setVisible(true);lyr_SurfaceDrainFromRoadDitch_16.setVisible(true);lyr_OutletPoint_17.setVisible(true);lyr_Lift_Station_18.setVisible(true);
var layersList = [lyr_SatelliteImagery_0,lyr_ElevationModel_1,group_WetYearsSatelliteImagery,lyr_ProblemArea_14,lyr_TilesLines_15,lyr_SurfaceDrainFromRoadDitch_16,lyr_OutletPoint_17,lyr_Lift_Station_18];
lyr_ProblemArea_14.set('fieldAliases', {'id': 'id', 'area sq m': 'area sq m', 'area acres': 'area acres', });
lyr_TilesLines_15.set('fieldAliases', {'LineID': 'LineID', 'TempLineID': 'TempLineID', 'PtSpace': 'PtSpace', 'LineSpace': 'LineSpace', 'MinSlp': 'MinSlp', 'MaxSlp': 'MaxSlp', 'TgtDep': 'TgtDep', 'MinDep': 'MinDep', 'MaxDep': 'MaxDep', 'OutDep': 'OutDep', 'OutDepElev': 'OutDepElev', 'LineRise': 'LineRise', 'LineLength': 'LineLength', 'LineAvgSlp': 'LineAvgSlp', 'LineAngle': 'LineAngle', 'LineMinDep': 'LineMinDep', 'LineMaxDep': 'LineMaxDep', 'LineAvgDep': 'LineAvgDep', 'LineArea': 'LineArea', 'UpSlpArea': 'UpSlpArea', 'ParentID': 'ParentID', 'ChildIDs': 'ChildIDs', 'SharedJunc': 'SharedJunc', });
lyr_SurfaceDrainFromRoadDitch_16.set('fieldAliases', {'id': 'id', });
lyr_OutletPoint_17.set('fieldAliases', {'MainID': 'MainID', 'PointID': 'PointID', 'PtSpace': 'PtSpace', 'MainOutDep': 'MainOutDep', 'MainMinSlp': 'MainMinSlp', 'MainMaxSlp': 'MainMaxSlp', 'MainMinDep': 'MainMinDep', 'MainMaxDep': 'MainMaxDep', 'MainTgtDep': 'MainTgtDep', 'MainAvgDep': 'MainAvgDep', 'MainAvgSlp': 'MainAvgSlp', 'MainRise': 'MainRise', 'MainLength': 'MainLength', 'CurrAvgSlp': 'CurrAvgSlp', 'CurrRise': 'CurrRise', 'CurrDist': 'CurrDist', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'PtDepth': 'PtDepth', 'SurfElev': 'SurfElev', 'MinDepElev': 'MinDepElev', 'MaxDepElev': 'MaxDepElev', 'TgtDepElev': 'TgtDepElev', 'OutDepElev': 'OutDepElev', 'CurrAngle': 'CurrAngle', });
lyr_Lift_Station_18.set('fieldAliases', {'id': 'id', });
lyr_ProblemArea_14.set('fieldImages', {'id': 'TextEdit', 'area sq m': 'TextEdit', 'area acres': 'TextEdit', });
lyr_TilesLines_15.set('fieldImages', {'LineID': 'TextEdit', 'TempLineID': 'TextEdit', 'PtSpace': 'TextEdit', 'LineSpace': 'TextEdit', 'MinSlp': 'TextEdit', 'MaxSlp': 'TextEdit', 'TgtDep': 'TextEdit', 'MinDep': 'TextEdit', 'MaxDep': 'TextEdit', 'OutDep': 'TextEdit', 'OutDepElev': 'TextEdit', 'LineRise': 'TextEdit', 'LineLength': 'TextEdit', 'LineAvgSlp': 'TextEdit', 'LineAngle': 'TextEdit', 'LineMinDep': 'TextEdit', 'LineMaxDep': 'TextEdit', 'LineAvgDep': 'TextEdit', 'LineArea': 'TextEdit', 'UpSlpArea': 'TextEdit', 'ParentID': 'TextEdit', 'ChildIDs': 'TextEdit', 'SharedJunc': 'TextEdit', });
lyr_SurfaceDrainFromRoadDitch_16.set('fieldImages', {'id': 'TextEdit', });
lyr_OutletPoint_17.set('fieldImages', {'MainID': 'TextEdit', 'PointID': 'TextEdit', 'PtSpace': 'TextEdit', 'MainOutDep': 'TextEdit', 'MainMinSlp': 'TextEdit', 'MainMaxSlp': 'TextEdit', 'MainMinDep': 'TextEdit', 'MainMaxDep': 'TextEdit', 'MainTgtDep': 'TextEdit', 'MainAvgDep': 'TextEdit', 'MainAvgSlp': 'TextEdit', 'MainRise': 'TextEdit', 'MainLength': 'TextEdit', 'CurrAvgSlp': 'TextEdit', 'CurrRise': 'TextEdit', 'CurrDist': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'PtDepth': 'TextEdit', 'SurfElev': 'TextEdit', 'MinDepElev': 'TextEdit', 'MaxDepElev': 'TextEdit', 'TgtDepElev': 'TextEdit', 'OutDepElev': 'TextEdit', 'CurrAngle': 'TextEdit', });
lyr_Lift_Station_18.set('fieldImages', {'id': 'TextEdit', });
lyr_ProblemArea_14.set('fieldLabels', {'id': 'no label', 'area sq m': 'no label', 'area acres': 'no label', });
lyr_TilesLines_15.set('fieldLabels', {'LineID': 'inline label - visible with data', 'TempLineID': 'hidden field', 'PtSpace': 'hidden field', 'LineSpace': 'inline label - visible with data', 'MinSlp': 'hidden field', 'MaxSlp': 'hidden field', 'TgtDep': 'hidden field', 'MinDep': 'hidden field', 'MaxDep': 'hidden field', 'OutDep': 'hidden field', 'OutDepElev': 'hidden field', 'LineRise': 'inline label - visible with data', 'LineLength': 'inline label - visible with data', 'LineAvgSlp': 'inline label - visible with data', 'LineAngle': 'inline label - visible with data', 'LineMinDep': 'hidden field', 'LineMaxDep': 'hidden field', 'LineAvgDep': 'inline label - visible with data', 'LineArea': 'inline label - visible with data', 'UpSlpArea': 'inline label - visible with data', 'ParentID': 'hidden field', 'ChildIDs': 'hidden field', 'SharedJunc': 'hidden field', });
lyr_SurfaceDrainFromRoadDitch_16.set('fieldLabels', {'id': 'no label', });
lyr_OutletPoint_17.set('fieldLabels', {'MainID': 'hidden field', 'PointID': 'hidden field', 'PtSpace': 'hidden field', 'MainOutDep': 'hidden field', 'MainMinSlp': 'hidden field', 'MainMaxSlp': 'hidden field', 'MainMinDep': 'hidden field', 'MainMaxDep': 'hidden field', 'MainTgtDep': 'hidden field', 'MainAvgDep': 'hidden field', 'MainAvgSlp': 'hidden field', 'MainRise': 'hidden field', 'MainLength': 'hidden field', 'CurrAvgSlp': 'hidden field', 'CurrRise': 'hidden field', 'CurrDist': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', 'PtDepth': 'hidden field', 'SurfElev': 'hidden field', 'MinDepElev': 'hidden field', 'MaxDepElev': 'hidden field', 'TgtDepElev': 'hidden field', 'OutDepElev': 'inline label - visible with data', 'CurrAngle': 'hidden field', });
lyr_Lift_Station_18.set('fieldLabels', {'id': 'no label', });
lyr_Lift_Station_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});