Ti.include('config.js');

win = Ti.UI.currentWindow;

var url = SITE_PATH + '/services/json';

var view = new Object;
view.method = 'views.get';
view.view_name = 'teams';

var xhr = Titanium.Network.createHTTPClient();
xhr.open("POST",url);

// sending xhr call for view
xhr.send({data: JSON.stringify(view)});

xhr.onload = function() {
  
  Ti.API.info(this.responseText);
  
  var data = JSON.parse(this.responseText);


  var mapview = Titanium.Map.createView({
  	mapType: Titanium.Map.STANDARD_TYPE,
  	region: {latitude:49.666904, longitude:-112.805321, latitudeDelta:10, longitudeDelta:10},
  	animate:true,
  	regionFit:true,
  	userLocation:true
  });

  // custom drupal call stuff ends
  var table_data = [];
  var current_division = '';
  for (var c=0;c<data.length;c++) {
    
    mapview.addAnnotation(Ti.Map.createAnnotation({
      latitude:data[c].node_data_field_logo_field_latitude_value,
      longitude:data[c].node_data_field_logo_field_longitude_value,
      title:data[c].node_title,
      subtitle: data[c].node_data_field_logo_field_arena_value,
    	animate:false,
    	image:'whl_logo.png'
    }));
    
  }

  win.add(mapview);
  
}