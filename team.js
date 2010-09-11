win = Ti.UI.currentWindow;

var teamName = Ti.UI.createLabel({
	text: win.title,
	color:'#000'
});

win.add(teamName);