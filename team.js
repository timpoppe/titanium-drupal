Ti.include('config.js');

var win = Ti.UI.currentWindow;

var url = SITE_PATH + '/services/json';

var node = new Object;
node.method = 'node.get';
node.nid = win.nid;

var xhr = Titanium.Network.createHTTPClient();
xhr.open("POST",url);

// sending xhr call for view
xhr.send({data: JSON.stringify(node)});

xhr.onload = function() {
  
  Ti.API.info(this.responseText);
  
  var data = JSON.parse(this.responseText);


  var teamName = Ti.UI.createLabel({
  	text: data.title,
  	color:'#000',
  	textAlign:'left',
  	font:{fontSize:16, fontWeight:'bold'},
  	top:32,
  	left:100,
  	height:18
  });
	
	var arena = Ti.UI.createLabel({
		text: data.field_arena[0].value,
		color:'#000',
		textAlign:'left',
		font:{fontSize:14, fontWeight:'normal'},
		top:51,
		left:100,
		height:16
	});
	
	var imageView = Titanium.UI.createImageView({
  	image:SITE_PATH + '/sites/services/files/imagecache/80px_icon/' + data.field_logo[0].filename,
  	top:10,
  	left:10,
  	width:80,
  	height:80
  });
  
  var mapView = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:data.field_latitude[0].value, longitude:data.field_longitude[0].value, latitudeDelta:0.022, longitudeDelta:0.022},
    animate:true,
    regionFit:true,
    userLocation:true,
    top:100
  });
  
  mapView.addAnnotation(Ti.Map.createAnnotation({
    latitude:data.field_latitude[0].value,
    longitude:data.field_longitude[0].value,
    title:data.title,
    subtitle: data.field_arena[0].value,
    animate:false
  }));

  win.add(teamName);
  win.add(arena);
  win.add(imageView);
  win.add(mapView);
  
}