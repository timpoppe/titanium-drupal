// Include our configuration settings
Ti.include('config.js');

win = Ti.UI.currentWindow;

// URL of the web service endpoint
var url = SITE_PATH + '/services/json';

var view = new Object;
view.method = 'views.get';
view.view_name = 'teams';

// Add an on-focus event listener so that we can reload data on the fly
win.addEventListener('focus', function() {
  var xhr = Titanium.Network.createHTTPClient();
  xhr.open("POST",url);

  // sending xhr call for view
  xhr.send({data: JSON.stringify(view)});

  // Once the data is loaded, we can do stuff with it
  xhr.onload = function() {

    // Parse JSON response into an object
    var data = JSON.parse(this.responseText);

    // custom drupal call stuff ends
    var table_data = [];
    var current_division = '';
    for (var c=0;c<data.length;c++) {
      // The data we care about: node title (team name), and node id
      table_data[c] = {title:data[c].node_title, nid:data[c].nid, hasChild:true};
      
      // And setting headers for what each division
      if(data[c].term_data_name != current_division) {
        table_data[c].header = data[c].term_data_name;
        current_division = data[c].term_data_name;
      }
    }

    // create table view
    var tableview = Titanium.UI.createTableView({
      data:table_data
    });
    
    // Add an event listener for taps on the row items
    tableview.addEventListener('click',function(e) { 
      var teamWindow = Titanium.UI.createWindow({
        url:'team.js',
        backgroundColor:'#fff',
        title:e.rowData.title,
        nid:e.rowData.nid
      });
      Titanium.UI.currentTab.open(teamWindow,{animated:true});
    });

    // add table view to the window
    win.add(tableview);
  }
});