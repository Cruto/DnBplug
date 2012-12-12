//Room
function addGlobalStyle(css){
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if(!head){
		return;
	}
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

//
//addGlobalStyle('#audience-canvas {background-image: ;)');
//
//addGlobalStyle('#map-canvas {background-image: url("") ;}');
//
//addGlobalStyle('#audience {background-image: url("") ;}');
//
//addGlobalStyle('#meta-frame {background-image: url("") ;}');
//
//addGlobalStyle('#frame-background {background-image: url("") ;}');
//
//addGlobalStyle('#button-lobby {background-image: max-height:0px;max-width:0px;}');
//
//addGlobalStyle('#button-vote-positive {background-image: url("http://cloud.github.com/downloads/Punkred/DnBplug/ButtonVotePositive.png") ;}');
//
//addGlobalStyle('#button-vote-negative {background-image: url("http://cloud.github.com/downloads/Punkred/DnBplug/ButtonVoteNegative.png")!important ;}');
//
//addGlobalStyle('#logo {background-image: url("");min-height:33px;min-width:131px;}');
//
//addGlobalStyle('#create-room-button {background-image: url("");min-height:33px;min-width:131px;}');
//
addGlobalStyle('#room-wheel {background-image: max-height:0px;max-width:0px;}');
//
//addGlobalStyle('#user-points {background-image: url("");maxheight:25px;background-size: 100% 100%;max-width:25px;}');
//
//addGlobalStyle('#user-fans {background-image: url("");maxheight:25px;max-width:25px;}');
//
addGlobalStyle('html{background: url("http://image-upload.de/image/2rhlyf/86c3dcaa92.jpg") no-repeat scroll center top #000000;');
//
//addGlobalStyle('#button-dj-play.button-dj {background-image: url("")!important;}');
//
//addGlobalStyle('#button-dj-quit.button-dj {background-image: url("")!important;}');
//
//addGlobalStyle('#button-dj-waitlist-join.button-dj {background-image: url("")!important;}');
//
//addGlobalStyle('#button-dj-waitlist-leave.button-dj {background-image: url("")!important;}');

//if you want to change the font, uncomment this part and edit with the font you want, google "font css" or something like that for the codes.
//addGlobalStyle("* {" + "font-family:Cambria,'Times New Roman','Nimbus Roman No9 L','Freeserif',Times,serif; !important;" + "}"); //for font changing

//to change the DJ console, uncomment this and add your own custom URL. I've got no good ideas atm, but feel free to try stuff out :)
//addGlobalStyle('#dj-console, #dj-console {background-image: url("http://i.imgur.com/oW6ir.png");min-height:33px;min-width:131px;}'); //change create room button

//trying to figure out how to change the avatar image, not working atm.
//addGlobalStyle('#user-image, #user-image {background-image: url("http://th09.deviantart.net/fs70/PRE/i/2012/115/f/c/shining_armor_cutie_mark_by_noxwyll-d4xjdre.png");min-height:33px;background-size: 100% 100%;min-width:131px;}');

//THE WORD REPLACEMENT CODE BELOW IS NOT MINE, IT BELONGS TO JOE SIMMONS


/*var words = {
// Syntax: 'Search word' : 'Replace word',
"Points" : "Points",
"Now Playing" : "Now Playing",
"Time Remaining" : "Time Remaining",
"Volume" : "Volume",
"Current DJ" : "Current DJ",
"Crowd Response" : "Crowd Response",
"Fans":"Fans"};

String.prototype.prepareRegex = function() {
return this.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, "\\$1");
};

function isOkTag(tag) {
return (",pre,blockquote,code,input,button,textarea".indexOf(","+tag) == -1);
}*/

//var regexs=new Array(),
//	replacements=new Array();
//for(var word in words) {
//if(word != "") {
//regexs.push(new RegExp("\\b"+word.prepareRegex().replace(/\*/g,'[^ ]*')+"\\b", 'gi'));
//replacements.push(words[word]);
//}
//}

/*var texts = document.evaluate(".//text()[normalize-space(.)!='']",document.body,null,6,null), text="";
for(var i=0,l=texts.snapshotLength; (this_text=texts.snapshotItem(i)); i++) {
	if(isOkTag(this_text.parentNode.tagName.toLowerCase()) && (text=this_text.textContent)) {
	for(var x=0,l=regexs.length; x<l; x++) {
	text = text.replace(regexs[x], replacements[x]);
	this_text.textContent = text;
	}
	}
}*/

//PLUGBOT

/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * TERMS OF REPRODUCTION USE
 *
 * 1. Provide a link back to the original repository (this repository), as
 * 		in, https://github.com/ConnerGDavis/Plugbot, that is well-visible
 * 		wherever the source is being reproduced.  For example, should you 
 * 		display it on a website, you should provide a link above/below that
 *		which the users use, titled something such as "ORIGINAL AUTHOR".  
 *
 * 2. Retain these three comments:  the GNU GPL license statement, this comment,
 * 		and that below it, that details the author and purpose.
 */
 
/**
 * NOTE:  This is all procedural as hell because prototypes and any 
 * 			OOP techniques in Javascript are stupid and confusing.
 * 
 * @author 	Conner Davis ([VIP] ?Logïç®) 
 * 			Harrison Schneidman ([VIDJ] EX?)
 */

/**
 * Whether the user has currently enabled auto-woot. 
 */
//var autowoot = false;
/**
 * Whether the user has currently enabled auto-queueing. 
 */
//var autoqueue = false;
/**
 * Whether or not the user has enabled hiding this video. 
 */
//var hideVideo = false;
/**
 * Whether or not the user has enabled the userlist. 
 */
//var userList = false;
/**
 * Strings that trigger strobe mode
 */
//var strobeOn = /on/;
//var strobeOff = /off/;
/**
 * Strobe status
 */
//var strobeState = false;
/**
 * Whenever a user chooses to apply custom username FX to a
 * user, their username and chosen colour and saved here. 
 */
//var customUsernames = new Array();

// TODO:  DJ battle-related.
//var points = 0;
//var highScore = 0;

/**
 * Initialise all of the Plug.dj API listeners which we use
 * to asynchronously intercept specific events and the data
 * attached with them. 
 */
function initAPIListeners() 
{
	/**
	 * This listens in for whenever a new DJ starts playing. 
	 */
	API.addEventListener(API.DJ_ADVANCE, djAdvanced);

	/**
	 * This listens for whenever a user in the room either WOOT!s
	 * or Mehs the current song. 
	 */
	API.addEventListener(API.VOTE_UPDATE, function(obj) {
		if (userList)
			populateUserlist();
	});

	/**
	 * Whenever a user joins, this listener is called. 
	 */
	API.addEventListener(API.USER_JOIN, function(user) {
		if (userList)
			populateUserlist();
        });
/*
                if (isBoris())
        API.sendChat("@" + user.username + ", Hi & Welcome, enjoy your time in our DnB world :)) ");
*/

	/**
	 * Called upon a user exiting the room. 
	 */
	API.addEventListener(API.USER_LEAVE, function(user) {
		if (userList)
			populateUserlist();
	});
	
	API.addEventListener(API.CHAT, checkChat);
}


function checkChat()
{
	checkCustomUsernames();
	checkStrobeString();
}

/**
 * Periodically check the chat history to see if any of the messages
 * match that of the user's chosen custom username FX.  If so, then we
 * need to stylise every instance of those. 
 */
function checkCustomUsernames() 
{
	$('span[class*="chat-from"]').each(function() 
	{
		for (var custom in customUsernames) 
		{
			var check = customUsernames[custom].split(":");
			if (check[0] == $(this).text()) 
			{
				$(this).css({ color: "#" + check[1]});
				break;
			}
		}
	});
}
/**
 * Cheat mode strobe
 */
 
var strobeID = null;
function strobe()
{
	$(RoomUser.audience.canvas).toggle();
	$(RoomUser.audience.imageMap).toggle();
}

function strobeSwap()
{
	if(strobeID) clearTimeout(strobeID);
	if (strobeState) strobeID = setInterval(strobe, 140);
}

function checkStrobeString()
{
	var oldState = strobeState;
	$('div[class*="chat-emote"]>span[class*="chat-text"]').each(function() 
	{
		if ($(this).text().match(strobeOn)) strobeState = true;
		if ($(this).text().match(strobeOff)) strobeState = false;
	});
	
	if (oldState != strobeState) strobeSwap();
}

/**
 * Renders all of the Plug.bot "UI" that is visible beneath the video
 * player. 
 */





///////////////////////////////////////////////////////////
////////// EVERYTHING FROM HERE ON OUT IS INIT ////////////
///////////////////////////////////////////////////////////

/*
 * Clear the old code so we can properly update everything.
 */
$('#plugbot-css').remove();
$('#plugbot-js').remove();

/*
 * Write the CSS rules that are used for components of the 
 * Plug.bot UI.
 */
$('body').prepend('<style type="text/css" id="plugbot-css">' 
	+ '#plugbot-ui { position: absolute; margin-left: 349px; }'
	+ '#plugbot-ui p { background-color: #0b0b0b; height: 25px; width: 98px; padding: 8px 0 0 12px; cursor: pointer; font-variant: small-caps; font-size: 14px; margin: 0; }'
	+ '#plugbot-ui h2 { background-color: #0b0b0b; height: 71px; width: 164px; padding: 8px 0 0 12px; color: #fff; font-variant: small-caps; font-size: 13px; margin: 0; }'
//    + '#plugbot-userlist { border: 6px solid rgba(10, 10, 10, 0.8); border-left: 0 !important; background-color: #000000; padding: 8px 0px 20px 0px; width: 12%; }'
//    + '#plugbot-userlist p { margin: 0; padding-top: 2px; text-indent: 24px; font-size: 10px; }'
//    + '#plugbot-userlist p:first-child { padding-top: 0px !important; }'
    + '#plugbot-queuespot { color: #42A5DC; text-align: left; font-size: 15px; margin-left: 8px }');

/*
 * Hit the woot button, since auto-woot is enabled by default.
 */
$("#button-vote-positive").click();

/*
 * Call all init-related functions to start the software up.
 */
initAPIListeners();
populateUserlist();
displayUI();
initUIListeners();

//autochat
/*
function isBoris() { return API.getSelf().username == "d(-_-)b Tom"; }

if (isBoris())
{
    window.setInterval(function() {
    API.sendChat("Check out our Room's Custom Background Script @ http://userscripts.org/scripts/show/140077 and Facebook Group @ http://tinyurl.com/c7dbewy :) ");
    }, (1000 * 60 * 60));
}
*/

//elements removal
 setTimeout(function(){	
 RoomUser.audience.roomElements = []; RoomUser.redraw();
 },2000);
