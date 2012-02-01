var vows    = require('vows'),
    assert  = require('assert'),
    baseit  = require('../lib/baseit.js');

/**
 * Setup
 */
var suite   = vows.describe('BaseIt');

/**
 * Test
 */
suite.addBatch({

    'Base10 "1296" to Base8': {

        topic: function() {
            baseit({
                input:  1296, 
                to:     8,
            }, this.callback);
        },

        'is a string': function (err, obj) {
            assert.isString(obj);
        },
        
        'expected result': function (err, obj) {
            assert.strictEqual(obj, "2420");
        }

    },

    'Base10 "1296" to Base36': {

        topic: function() {
            baseit({
                input:  "1296", 
                to:     36,
            }, this.callback);
        },

        'is a string': function (err, obj) {
            assert.isString(obj);
        },
        
        'expected result': function (err, obj) {
            assert.strictEqual(obj, "100");
        }

    },

    'Base12 "1000" to Base36 w/ padding': {

        topic: function() {
            baseit({
                input:  "1000", 
                from:   12,
                to:     36,
                digits: 6
            }, this.callback);
        },

        'is a string': function (err, obj) {
            assert.isString(obj);
        },
        
        'expected result': function (err, obj) {
            assert.strictEqual(obj, "0001c0");
        }

    },

    'Base36 "zzzz" to Base10': {

        topic: function() {
            baseit({
                input:  "zzzz", 
                from:   36
            }, this.callback);
        },

        'is a string': function (err, obj) {
            assert.isString(obj);
        },
        
        'expected result': function (err, obj) {
            assert.strictEqual(obj, "1679615");
        }

    },
    
    //
    
    'Encode "z3991z1" to Base36 (Invalid Base10 String)': {

        topic: function() {
            baseit({
                input:  "z3991z1",
                to:     36,
            }, this.callback);
        },
        
        'returns error': function (err, obj) {
            assert.isNotNull(err);
        }

    },

    'Encode "1000" to Base36 (Invalid Base10 String)': {

        topic: function() {
            baseit({
                input:  "1000",
                to:     64,
            }, this.callback);
        },
        
        'returns error': function (err, obj) {
            assert.isNotNull(err);
        }

    },

})

/**
 * Export
 */
.export(module);