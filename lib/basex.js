/**
 * BaseX encoder / decoder.
 *
 * @package  basex
 * @author  Andrew Sliwinski <andrew@diy.org>
 */
    
/**
 * Encodes a Base10 integer into Base(X) string.
 *
 * @param  int  Base10 input
 * @param  int  Target encoding
 * @param  Object  Options
 *
 * @returns  String
 */
var encode = function (input, x, options, callback) {
    // Validate target encoding
    if (typeof x !== 'number') {
        return callback('Target encoding must be a number. For example, if you wanted to encode to "Base36", you would pass 36 as the target encoding parameter.');
    }

    // Encode
    a = parseInt(input, 10).toString(36);
    
    // Validate input
    if (a === 'NaN') {
        return callback('Input is not a valid Base10 number.');
    }
    
    // Append leading 'zeros' to strings shorter than six characters
    if (options !== null && options.min) {
        for (var i = a.length; i < options.min; i++) {
            a = '0' + a;
        }   
    }
    
    return callback(null, a);
};

/**
 * Decodes a Base(x) string into a Base10 integer.
 *
 * @param  String  Base X input
 * @param  String  Input encoding
 *
 * @returns  int
 */
var decode = function (input, x, callback) {
    // Validate input encoding
    if (typeof x !== 'number') {
        return callback('Target encoding must be a number. For example, if you wanted to encode to "Base36", you would pass 36 as the target encoding parameter.');
    }

    return callback(null, parseInt(input, x));
};

/**
 * Exports
 */
exports.encode = encode;
exports.decode = decode;