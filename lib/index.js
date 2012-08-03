/**
 * BaseIt encoder / decoder.
 *
 * @package  baseit
 * @author  Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Converts a Base(x) value into a different Base(x) value.
 *
 * @param  Object  Parameters (input, from, to, digits)
 *
 * @returns  String
 */

var baseit = module.exports = function () {

    var convert = function (params) {
        var a = parseInt(params.input, params.from || 10).toString(params.to || 10);
        
        return a;
    };

    var format = function (a, params) {
        if (typeof params.digits !== 'undefined') {
            for (var i = a.length; i < params.digits; i++) {
                a = '0' + a;
            }
        }

        return a;
    }

    var module = function (params, callback) {
        if (typeof params.input === 'undefined') {
            return callback('Method parameters must include an "input".');
        }

        if ((typeof params.from !== 'undefined' && typeof params.from !== 'number') || (typeof params.to !== 'undefined' && typeof params.to !== 'number')) {
            return callback('"from" and "to" parameters must be numbers. For example, if you wanted to encode to "Base36", you would pass 36 as the target encoding parameter ("to").');
        }

        try {
           var a = convert(params); 
        } catch(err) {
            return callback('Invalid radix value. Baseit supports between 2 and 36.');
        }
        

        // Not a number
        if (a === 'NaN') {
            return callback('Input was not a valid number. Check to make sure that non-Base10 values are passed as strings.');
        }

        // Apply digits param (optional)
        a = format(a, params);
        
        callback(null, a);
    };

    module.sync = function (params) {
        var a = convert(params);
        a = format(a, params);

        return a;
    };

    // -----------------

    return module;

}();