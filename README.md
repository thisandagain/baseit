# Baseit
#### Base(x) In --> Base(x) Out

## Install
	npm install baseit

## Basic Use
```javascript
var baseit = require('baseit');

baseit({
	input: 	120000,
	to: 	36,
}, function (err, a) {
	if (err) throw err;

	console.log(a);		// "2klc"
});
````

## Slightly Less Basic Use
```javascript
var baseit = require('baseit');

baseit({
	input: 	1296,
	from: 	12,
	to: 	36,
	digits: 6
}, function (err, a) {
	if (err) throw err;

	console.log(a);		// "0001n6"
});
````

## Parameters
####input (Required)
Integer or string to be converted.

####to (Optional)
Target encoding integer. If not specified, "to" will default to 10. Example for Base24: { to: 24 }.

####from (Optional)
Input encoding integer. If not specified, "from" will default to 10. Example for Base8: { from: 8 }.

####digits (Optional)
Minimum number of digits to return. Will append leading "zeros" to meet digit requirement. Example: { digits: 6 }

## Why u no Base64!?
Node.js already has a good way of [handling Base64 encoding](http://nodejs.org/docs/v0.3.1/api/buffers.html#new_Buffer).

## Testing
	vows test/*