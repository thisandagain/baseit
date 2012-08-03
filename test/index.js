/**
 * Unit test suite.
 *
 * @package API
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var async       = require('async'),
    test        = require('tap').test,

    baseit      = require('../lib/index.js');

/**
 * Suite
 */
async.auto({

    from10to8:  function (callback) {
        baseit({
            input:  1296, 
            to:     8,
        }, callback);
    },

    from10to36: function (callback) {
        baseit({
            input:  "1296", 
            to:     36,
        }, callback);
    },

    from12to36: function (callback) {
        baseit({
            input:  "1000", 
            from:   12,
            to:     36,
            digits: 6
        }, callback);
    },

    invalid: function (callback) {
        baseit({
            input:  "z3991z1",
            to:     36,
        }, function (err, obj) {
            callback(null, err);
        });
    },

    test:   ['from10to8', 'from10to36', 'from12to36', 'invalid', function (callback, obj) {
        test("Component definition", function (t) {
            t.type(baseit, "function", "Component should be an object");
            t.type(baseit.sync, "function", "Method should be a function");
            t.end();
        });

        test("Confirm conversions", function (t) {
            t.equal(obj.from10to8, "2420", "Should be equal");
            t.equal(obj.from10to36, "100", "Should be equal");
            t.equal(obj.from12to36, "0001c0", "Should be equal");
            t.end();
        });

        test("Confirm error handling", function (t) {
            t.type(obj.invalid, "string", "Should be a string");
            t.end();
        });

        callback();
    }]

}, function (err, obj) {
    test("Catch errors", function (t) {
        t.equal(err, null, "Errors should be null");
        t.end();
    });
});