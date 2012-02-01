/**
 * BaseIt encoder / decoder.
 *
 * @package  baseit
 * @author  Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Encodes a Base10 integer into Base(X) string.
 *
 * @param  Object  Parameters (input, base, digits)
 *
 * @returns  String
 */
var encode = function (params, callback) {
    if (typeof params.input === 'undefined' || typeof params.base === 'undefined') {
        return callback('Encode method parameters must include both "input" and "base".');
    }

    if (typeof params.base !== 'number') {
        return callback('Target encoding must be a number. For example, if you wanted to encode to "Base36", you would pass 36 as the target encoding parameter ("base").');
    }

    // Encode
    a = parseInt(params.input, 10).toString(params.base);
    
    // Catch "Not A Number"
    if (a === 'NaN') {
        return callback('Input is not a valid Base10 number.');
    }

    // Apply digits param (optional)
    if (typeof params.digits !== 'undefined') {
        for (var i = a.length; i < params.digits; i++) {
            a = '0' + a;
        }
    }
    
    return callback(null, a);
};

/**
 * Decodes a Base(x) string into a Base10 integer.
 *
 * @param  Object  Parameters (input, base)
 *
 * @returns  int
 */
var decode = function (params, callback) {
    if (typeof params.input === 'undefined' || typeof params.base === 'undefined') {
        return callback('Decode method parameters must include both "input" and "base".');
    }

    if (typeof params.base !== 'number') {
        return callback('Target encoding must be a number. For example, if you wanted to encode to "Base36", you would pass 36 as the target encoding parameter.');
    }

    return callback(null, parseInt(params.input, params.base));
};

/**
 * Exports
 */
exports.encode = encode;
exports.decode = decode;