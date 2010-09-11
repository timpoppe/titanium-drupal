// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'WHL Teams',
    backgroundColor:'#fff',
    url:'teams_view.js'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Team List',
    window:win1
});


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'League Map',
    backgroundColor:'#fff',
    url:'league_map.js'
});
var tab2 = Titanium.UI.createTab({  
    icon:'103-map.png',
    title:'league Map',
    window:win2
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
