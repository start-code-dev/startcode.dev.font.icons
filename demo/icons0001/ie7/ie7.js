/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icons0001\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-Abuse': '&#xe900;',
		'icon-Arrowleft': '&#xe901;',
		'icon-Arrowright': '&#xe902;',
		'icon-Arrow': '&#xe903;',
		'icon-AvatarGroup': '&#xe904;',
		'icon-back': '&#xe905;',
		'icon-Checkboxempty': '&#xe906;',
		'icon-Checkbox': '&#xe907;',
		'icon-Checkmarkfull': '&#xe908;',
		'icon-cog': '&#xe909;',
		'icon-comments-o': '&#xe90a;',
		'icon-comments': '&#xe90b;',
		'icon-Crop': '&#xe90c;',
		'icon-Delete': '&#xe90d;',
		'icon-Download': '&#xe90e;',
		'icon-Editprofile': '&#xe90f;',
		'icon-Errorfull': '&#xe910;',
		'icon-Expand': '&#xe911;',
		'icon-eye': '&#xe912;',
		'icon-f': '&#xe913;',
		'icon-female': '&#xe914;',
		'icon-Filter': '&#xe915;',
		'icon-Goto': '&#xe916;',
		'icon-heart-o': '&#xe917;',
		'icon-hearth': '&#xe918;',
		'icon-Home': '&#xe919;',
		'icon-Hoockup': '&#xe91a;',
		'icon-Image': '&#xe91b;',
		'icon-Images': '&#xe91c;',
		'icon-Largeview': '&#xe91d;',
		'icon-Left2': '&#xe91e;',
		'icon-Left': '&#xe91f;',
		'icon-Link': '&#xe920;',
		'icon-Lock': '&#xe921;',
		'icon-m': '&#xe922;',
		'icon-Mail': '&#xe923;',
		'icon-male': '&#xe924;',
		'icon-Match': '&#xe925;',
		'icon-Menu': '&#xe926;',
		'icon-Minus': '&#xe927;',
		'icon-Notifications': '&#xe928;',
		'icon-ok': '&#xe929;',
		'icon-Onlinemembers': '&#xe92a;',
		'icon-Online': '&#xe92b;',
		'icon-picture': '&#xe92c;',
		'icon-PinEmpty': '&#xe92d;',
		'icon-PinFull': '&#xe92e;',
		'icon-Plane': '&#xe92f;',
		'icon-Plus': '&#xe930;',
		'icon-power-off': '&#xe931;',
		'icon-Premium1': '&#xe932;',
		'icon-Premium2': '&#xe933;',
		'icon-Premium3': '&#xe934;',
		'icon-question': '&#xe935;',
		'icon-Radiobutton1': '&#xe936;',
		'icon-Radiobutton2': '&#xe937;',
		'icon-Radiobuttonempty': '&#xe938;',
		'icon-Redoleft': '&#xe939;',
		'icon-Redoright': '&#xe93a;',
		'icon-remove': '&#xe93b;',
		'icon-Replayleft': '&#xe93c;',
		'icon-Replayright': '&#xe93d;',
		'icon-Report': '&#xe93e;',
		'icon-RibbonUp': '&#xe93f;',
		'icon-Ribonleft': '&#xe940;',
		'icon-Ribonright': '&#xe941;',
		'icon-Right2': '&#xe942;',
		'icon-Right': '&#xe943;',
		'icon-Search': '&#xe944;',
		'icon-Smallview': '&#xe945;',
		'icon-Smileyempty2': '&#xe946;',
		'icon-Smileyempty': '&#xe947;',
		'icon-Smileyfull2': '&#xe948;',
		'icon-Smileyfull': '&#xe949;',
		'icon-star-o': '&#xe94a;',
		'icon-star': '&#xe94b;',
		'icon-time-full': '&#xe94c;',
		'icon-time': '&#xe94d;',
		'icon-Unlock': '&#xe94e;',
		'icon-Upload': '&#xe94f;',
		'icon-webcam': '&#xe950;',
		'icon-ZoomMax': '&#xe951;',
		'icon-ZoomMin': '&#xe952;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
