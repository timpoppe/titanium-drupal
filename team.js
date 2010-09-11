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

  win.add(teamName);
  win.add(arena);

}