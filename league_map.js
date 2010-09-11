win = Ti.UI.currentWindow;

var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {latitude:49.666904, longitude:-112.805321, latitudeDelta:10, longitudeDelta:10},
	animate:true,
	regionFit:true,
	userLocation:true
});

win.add(mapview);