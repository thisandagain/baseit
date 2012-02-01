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

	console.log(a);		// "2KLC"
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

	console.log(a);		// "0001N6"
});

## Parameters
####input (Required)
Integer or string to be converted

####to (Required)
Target encoding integer. Example for Base24: { to: 24 }.

####from (Optional)
Input encoding integer. If not specified, "from" will default to 10. Example for Base8: { from: 8 }.

####digits (Optional)
Minimum number of digits to return. Will append leading "zeros" to meet digit requirement. Example: { digits: 6 }

## Testing
	vows test/*