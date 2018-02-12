/*
* Sprite3D.js - v2.0.2
* https://github.com/boblemarin/Sprite3D.js
*
* Copyright (c) 2010 boblemarin emeric@minimal.be http://www.minimal.be
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/********* [PRIVATE STATIC] library's global properties ***********/
let isInit = false;
let supported = false;
let browserPrefix = 'webkit';
let transformProperty = 'webkitTransform';

/********* [PUBLIC STATIC] prefix() ***********/
export function prefix(cssPropertyName) {
	return browserPrefix + cssPropertyName;
}

export default function Sprite3D(element) {
	this.el = element;
	this.tileWidth = 0;
	this.tileHeight = 0;
}

/////////////////////////////////////////////
//////////// Position / absolute ////////////
/////////////////////////////////////////////
Sprite3D.prototype.x = function(px) {
	if (arguments.length) {
		this.string[this.positions[0]] = px - this.ox;
		return this;
	}
	return this.string[this.positions[0]] + this.ox;
};
Sprite3D.prototype.y = function(py) {
	if (arguments.length) {
		this.string[this.positions[1]] = py - this.oy;
		return this;
	}
	return this.string[this.positions[1]] + this.oy;
};
Sprite3D.prototype.z = function(pz) {
	if (arguments.length) {
		this.string[this.positions[2]] = pz - this.oz;
		return this;
	}
	return this.string[this.positions[2]] + this.oz;
};
Sprite3D.prototype.position = function(px, py, pz) {
	this.string[this.positions[0]] = px - this.ox;
	this.string[this.positions[1]] = py - this.oy;
	if (arguments.length >= 3) this.string[this.positions[2]] = pz - this.oz;
	return this;
};

/////////////////////////////////////////////
//////////// Position / relative ////////////
/////////////////////////////////////////////
Sprite3D.prototype.move = function(px, py, pz) {
	this.string[this.positions[0]] += px;
	this.string[this.positions[1]] += py;
	if (arguments.length >= 3) this.string[this.positions[2]] += pz;
	return this;
};

/////////////////////////////////////////////
//////////// Rotation / absolute ////////////
/////////////////////////////////////////////
Sprite3D.prototype.rotationX = function(rx) {
	if (arguments.length) {
		this.string[this.positions[3]] = rx;
		return this;
	}
	return this.string[this.positions[3]];
};
Sprite3D.prototype.rotationY = function(ry) {
	if (arguments.length) {
		this.string[this.positions[4]] = ry;
		return this;
	}
	return this.string[this.positions[4]];
};
Sprite3D.prototype.rotationZ = function(rz) {
	if (arguments.length) {
		this.string[this.positions[5]] = rz;
		return this;
	}
	return this.string[this.positions[5]];
};
Sprite3D.prototype.rotation = function(rx, ry, rz) {
	this.string[this.positions[3]] = rx;
	this.string[this.positions[4]] = ry;
	this.string[this.positions[5]] = rz;
	return this;
};

/////////////////////////////////////////////
//////////// Rotation / relative ////////////
/////////////////////////////////////////////
Sprite3D.prototype.rotate = function(rx, ry, rz) {
	this.string[this.positions[3]] += rx;
	this.string[this.positions[4]] += ry;
	this.string[this.positions[5]] += rz;
	return this;
};

/////////////////////////////////////////////
/////////////////   Scale  //////////////////
/////////////////////////////////////////////
Sprite3D.prototype.scaleX = function(sx) {
	if (arguments.length) {
		this.string[this.positions[6]] = sx;
		return this;
	}
	return this.string[this.positions[6]];
};
Sprite3D.prototype.scaleY = function(sy) {
	if (arguments.length) {
		this.string[this.positions[7]] = sy;
		return this;
	}
	return this.string[this.positions[7]];
};
Sprite3D.prototype.scaleZ = function(sz) {
	if (arguments.length) {
		this.string[this.positions[8]] = sz;
		return this;
	}
	return this.string[this.positions[8]];
};
Sprite3D.prototype.scale = function(sx, sy, sz) {
	switch (arguments.length) {
		case 0:
			return this.string[this.positions[6]];
		case 1:
			this.string[this.positions[6]] = sx;
			this.string[this.positions[7]] = sx;
			this.string[this.positions[8]] = sx;
			return this;
		case 2:
			this.string[this.positions[6]] = sx;
			this.string[this.positions[7]] = sy;
			//this.string[this.positions[8]] = 1;
			return this;
		case 3:
			this.string[this.positions[6]] = sx;
			this.string[this.positions[7]] = sy;
			this.string[this.positions[8]] = sz;
			return this;
	}
	return this;
};

/////////////////////////////////////////////
/////////////////  Origin  //////////////////
/////////////////////////////////////////////
Sprite3D.prototype.origin = function(ox, oy, oz) {
	// failed attempt at auto-centering the registration point of the object
	if (typeof ox === 'string') {

		/*
		switch(ox){
			case "center":
				this.string[this.positions[0]] = -this.offsetWidth>>1;
				this.string[this.positions[1]] = -this.offsetHeight>>1;
				debugger
				console.log("centering");
				break;
		}
		*/
		let cs = window.getComputedStyle(this.getEl(), null);
		console.log(cs);
		console.log('w:' + cs.getPropertyValue('width') + ' || h: ' + cs.height);
	}
	else {
		if (arguments.length < 3) oz = 0;
		this.string[this.positions[0]] += this.ox - ox;
		this.string[this.positions[1]] += this.oy - oy;
		this.string[this.positions[2]] += this.oz - oz;
		this.ox = ox;
		this.oy = oy;
		this.oz = oz;
	}
	return this;
};

/////////////////////////////////////////////
////////////  Transform Origin  /////////////
/////////////////////////////////////////////
Sprite3D.prototype.transformOrigin = function(tx, ty) {
	this.getEl().style[Sprite3D.browserPrefix + 'TransformOrigin'] =
		(Number(tx) ? tx + 'px' : tx) + ' ' + (Number(ty) ? ty + 'px' : ty);
	return this;
};

/////////////////////////////////////////////
////////////  Transform String  /////////////
/////////////////////////////////////////////
Sprite3D.prototype.transformString = function(s) {
	let parts = s.toLowerCase().split(' ');
	const numParts = parts.length;
	const strings = [];
	const positions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	let n = 0;

	for (let i = 0; i < numParts; ++i) {
		switch (parts[i]) {
			case 'p':
			case 'position':
			case 'translate':
				// todo: use rx ry rz (regPoint) when re-defining transform order
				n = strings.push(
					'translate3d(',
					this.string[this.positions[0]],
					'px,',
					this.string[this.positions[1]],
					'px,',
					this.string[this.positions[2]],
					'px) '
				);
				positions[0] = n - 6;
				positions[1] = n - 4;
				positions[2] = n - 2;
				break;
			case 'rx':
			case 'rotatex':
			case 'rotationx':
				n = strings.push('rotateX(', this.string[this.positions[3]], 'deg) ');
				positions[3] = n - 2;
				break;
			case 'ry':
			case 'rotatey':
			case 'rotationy':
				n = strings.push('rotateY(', this.string[this.positions[4]], 'deg) ');
				positions[4] = n - 2;
				break;
			case 'rz':
			case 'rotatez':
			case 'rotationz':
				n = strings.push('rotateZ(', this.string[this.positions[5]], 'deg) ');
				positions[5] = n - 2;
				break;
			case 's':
			case 'scale':
				n = strings.push(
					'scale3d(',
					this.string[this.positions[6]],
					',',
					this.string[this.positions[7]],
					',',
					this.string[this.positions[8]],
					') '
				);
				positions[6] = n - 6;
				positions[7] = n - 4;
				positions[8] = n - 2;
				break;
		}
	}
	this.string = strings;
	this.positions = positions;

	return this;
};

/////////////////////////////////////////////
/////////////////  Update  //////////////////
/////////////////////////////////////////////
Sprite3D.prototype.updateJoin = function() {
	this.getEl().style[Sprite3D.transformProperty] = this.string.join('');
	return this;
};

Sprite3D.prototype.update = function() {
	let s = '';
	this.string.every(value => {
		s += value;
		return true;
	});
	this.getEl().style[Sprite3D.transformProperty] = s;
	return this;
};

/////////////////////////////////////////////
////////////  Helper Functions //////////////
/////////////////////////////////////////////

//////////// Perspective helper function ////////////
Sprite3D.prototype.perspective = function(value) {
	switch (arguments.length) {
		case 0:
			return this.getEl().style[Sprite3D.browserPrefix + 'Perspective'];

		case 1:
			this.getEl().style[Sprite3D.browserPrefix + 'Perspective'] =
				typeof value === 'string' ? value : value + 'px';
			return this;
	}
};

//////////// CSS helper function ////////////
Sprite3D.prototype.css = function(name, value) {
	switch (arguments.length) {
		case 0:
			return this.getEl().style;
		case 1:
			return this.getEl().style[name];
		case 2:
			this.getEl().style[name] = value;
			return this;
		case 3:
			this.getEl().style[Sprite3D.browserPrefix + name] = value;
			return this;
	}
};

//////////// Class names helper functions ////////////
Sprite3D.prototype.addClass = function(name) {
	this.getEl().classList.add(name);
	return this;
};

Sprite3D.prototype.removeClass = function(name) {
	this.getEl().classList.remove(name);
	return this;
};

//////////// HTML helper function ////////////
Sprite3D.prototype.html = function(value) {
	if (arguments.length) {
		this.getEl().innerHTML = value;
		return this;
	}
	return this.getEl().innerHTML;
};

//////////// SIZE helper function ////////////
Sprite3D.prototype.size = function(width, height) {
	this.getEl().style.width = Number(width) ? width + 'px' : width;
	this.getEl().style.height = Number(height) ? height + 'px' : height;
	return this;
};

//////////// BIND helper function ////////////
Sprite3D.prototype.bind = function(events) {
	if (typeof events === 'object') {
		for (let i of events) {
			this.getEl().addEventListener(i, events[i], false);
		}
	}
	else if (arguments.length === 2) {
		this.getEl().addEventListener(arguments[0], arguments[1], false);
	}
	else if (arguments.length === 3) {
		this.getEl().addEventListener(arguments[0], arguments[1], arguments[2]);
	}
	return this;
};

//////////// UNBIND helper function ////////////
Sprite3D.prototype.unbind = function(events) {
	if (typeof events === 'object') {
		for (let i of events) {
			this.getEl().removeEventListener(i, events[i], false);
		}
	}
	else if (arguments.length === 2) {
		this.getEl().removeEventListener(arguments[0], arguments[1], false);
	}
	return this;
};

//////////// Spritesheet helper functions ////////////
Sprite3D.prototype.tileSize = function(width, height) {
	this.tileWidth = width;
	this.tileHeight = height;
	return this;
};
Sprite3D.prototype.tilePosition = function(tilePosX, tilePosY) {
	this.getEl().style.backgroundPosition =
		'-' +
		tilePosX * this.tileWidth +
		'px -' +
		tilePosY * this.tileHeight +
		'px';
	return this;
};

//////////// Generic setter for chaining ////////////
Sprite3D.prototype.set = function(name, value) {
	this[name] = value;
	return this;
};

Sprite3D.prototype.id = function(name) {
	this.getEl().id = name;
	return this;
};

Sprite3D.prototype.className = function(name) {
	this.getEl().className = name;
	return this;
};

Sprite3D.prototype.getEl = function() {
	return this.el;
};

/********* [PRIVATE STATIC] init() ***********/
function init() {
	let el = document.createElement('div');
	const prefixes = ['', 'webkit', 'Moz', 'O', 'ms'];
	const len = prefixes.length;

	isInit = true;
	// check for 3D transforms
	for (let i = 0; i < len; ++i) {
		if (`${prefixes[i]}Perspective` in el.style) {
			transformProperty = prefixes[i] + 'Transform';
			supported = true;
			browserPrefix = prefixes[i];
			if (i === 2) Sprite3D.prototype.update = Sprite3D.prototype.updateJoin;
			//console.log( "Sprite3D found support for 3D transforms using prefix: " + prefixes[i] );
			return true;
		}
	}
	// no transform support
	console.log('Sorry, but your browser does not support CSS 3D transfroms.');
	return false;
}

/********* [PUBLIC STATIC] supported() ***********/
/*
returns: Boolean
This method is automatically called when we create the first element,
but you can call it earlier if you want to provide an alternative content
to unsupported browsers.
*/
export function isSupported() {
	if (!isInit) init();
	return supported;
}

/********* [PUBLIC STATIC] stage() ***********/
/*
Creates a root container for your 3D content.

Usage 1 :
	Sprite3D.stage()

Creates and returns a new <div> element that is added to the page.
The stage is centered, so the position (0,0,0) is in the center of the window.
This is the easiest and most common way to start a project

Usage 2 :
	Sprite3D.stage( document.querySelector("#myContainer") )

Uses an existing HTML element as root container. The element is only tweaked a bit,
adjusting a few transform-related CSS properties, as well as setting the CSS "position"
property to "relative" if it is "static".
This method gives you more freedom, but more responsabilities :)

*/
export function stage(element) {
	// init if needed
	if (!isInit) init();
	// tweak or create root element
	let el;
	let style;
	if (element) {
		el = element;
		style = element.style;
		if (style.position === 'static') style.position = 'relative';
	}
	else {
		el = document.createElement('div');
		style = el.style;
		style[browserPrefix + 'PerspectiveOrigin'] = '0 0';
		style[browserPrefix + 'TransformOrigin'] = '0 0';
		style.position = 'absolute';
		style.top = '50%';
		style.left = '50%';
		style.margin = '0px';
		style.padding = '0px';
		document.body.appendChild(el);
	}
	style[browserPrefix + 'Perspective'] = '800px';
	style[browserPrefix + 'Transform'] = 'translateZ(0px)';
	el = create(el);
	// fix for the glitch problems under Safari6 / Mountain Lion
	// (root container must NOT have its transform-style property set to "preserve-3d")
	style[browserPrefix + 'TransformStyle'] = 'flat';
	// end fix
	return el;
}

/********* [PUBLIC STATIC] create() ***********/
/*
Creates a new Sprite3D element

Usage 1 :
	Sprite3D.create()

	Creates a <div> element and turn it into a

Usage 2 :
	Sprite3D.create( document.querySelector("#myElement") )

Usage 3 :
	Sprite3D.create( "#id" )
	Sprite3D.create( "id" )

Usage 4 :
	Sprite3D.create( ".class" )
	Sprite3D.create( ".class1 class2" )

*/
export function create(element) {
	// init Sprite3D if needed
	if (!isInit) init();

	// create or tweak html element
	if (arguments.length === 0) {
		element = document.createElement('div');
		element.style.margin = '0px';
		element.style.padding = '0px';
		element.style.position = 'absolute';
	}
	else if (typeof element === 'string') {
		let str = element;
		element = document.createElement('div');
		element.style.margin = '0px';
		element.style.padding = '0px';
		element.style.position = 'absolute';
		handleStringArgument(element, str);
	}
	else if (element.style.position === 'static') {
		element.style.position = 'relative';
	}
	element.style[browserPrefix + 'TransformStyle'] = 'preserve-3d';
	element.style[transformProperty] = 'translateZ(0px)';

	const el3d = new Sprite3D(element);
	// extend element with 3D methods
	// for (let prop in props) {
	// 	if (props.hasOwnProperty(prop)) {
	// 		element[prop] = props[prop];
	// 	}
	// }

	// add private properties
	el3d.string = [
		'translate3d(',
		0,
		'px,',
		0,
		'px,',
		0,
		'px) ',
		'rotateX(',
		0,
		'deg) ',
		'rotateY(',
		0,
		'deg) ',
		'rotateZ(',
		0,
		'deg) ',
		'scale3d(',
		1,
		', ',
		1,
		', ',
		1,
		') '
	];
	el3d.positions = [
		1,
		3,
		5, // x, y, z
		8,
		11,
		14, // rotationX, rotationY, rotationZ
		17,
		19,
		21 // scaleX, scaleY, scaleZ
	];
	el3d.ox = 0;
	el3d.oy = 0;
	el3d.oz = 0;

	// return
	return el3d;
}

/********* [PRIVATE STATIC] handleStringArgument() ***********/
function handleStringArgument(element, str) {
	switch (str[0]) {
		case '.':
			element.className = str.substr(1);
			break;
		case '#':
			element.id = str.substr(1);
			break;
		default:
			element.id = str;
			break;
	}
}

/********* [PUBLIC STATIC] box() ***********/
export function box(width, height, depth, idOrClassName) {
	// init if needed
	if (!isInit) init();

	// create container element
	let newBox = create();

	if (arguments.length === 1) {
		height = width;
		depth = width;
	}
	else if (arguments.length === 2 && typeof arguments[1] === 'string') {
		handleStringArgument(newBox.getEl(), arguments[1]);
		height = width;
		depth = width;
	}
	else if (idOrClassName && typeof idOrClassName === 'string') {
		handleStringArgument(newBox.getEl(), idOrClassName);
	}

	// add faces
	const hwidth = width * 0.5;
	const hheight = height * 0.5;
	const hdepth = depth * 0.5;

	newBox.getEl().appendChild(
		create('.front')
			.position(-hwidth, -hheight, hdepth)
			.size(width, height)
			.update()
	);
	newBox.getEl().appendChild(
		create('.back')
			.position(-hwidth, -hheight, -hdepth)
			.size(width, height)
			.rotationY(180)
			.update()
	);
	newBox.getEl().appendChild(
		create('.left')
			.position(-hwidth - hdepth, -hheight, 0)
			.size(depth, height)
			.rotationY(-90)
			.update()
	);
	newBox.getEl().appendChild(
		create('.right')
			.position(hwidth - hdepth, -hheight, 0)
			.size(depth, height)
			.rotationY(90)
			.update()
	);
	newBox.getEl().appendChild(
		create('.bottom')
			.position(-hwidth, hheight - hdepth, 0)
			.size(width, depth)
			.rotationX(-90)
			.update()
	);
	newBox.getEl().appendChild(
		create('.top')
			.position(-hwidth, -hheight - hdepth, 0)
			.size(width, depth)
			.rotationX(90)
			.update()
	);
	return newBox;
}
