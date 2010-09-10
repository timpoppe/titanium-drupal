win = Ti.UI.currentWindow;

var tableview = Titanium.UI.createTableView({
  data:[{title:'Item 1'}, {title:'Item 2'}, {title:'Item 3'}]
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