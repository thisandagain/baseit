var vows    = require('vows'),
    assert  = require('assert'),
    basex   = require('../lib/basex.js');

/**
 * Setup
 */
var suite   = vows.describe('BaseX');

/**
 * Test
 */
suite.addBatch({

    'Encode 1296 to Base24': {

        topic: function() {
            basex.encode(1296, 24, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "000100");
        }

    },

    'Encode 1296 to Base36': {

        topic: function() {
            basex.encode(1296, 36, {min:6}, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "000100");
        }

    },
    
    'Encode "1296" to Base36': {

        topic: function() {
            basex.encode("1296", 36, {min:6}, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "000100");
        }

    },
    
    'Encode 2771328 to Base36': {

        topic: function() {
            basex.encode(2771328, 36, {min:6}, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "01nedc");
        }

    },
    
    'Encode "2771328" to Base36': {

        topic: function() {
            basex.encode("2771328", 36, {min:6}, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "01nedc");
        }

    },
    
    'Encode 2176782335 to Base36': {

        topic: function() {
            basex.encode(2176782335, 36, {min:6}, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "zzzzzz");
        }

    },
    
    'Encode "2176782335" to Base36': {

        topic: function() {
            basex.encode("2176782335", 36, {min:6}, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "zzzzzz");
        }

    },
    
    //
    
    'Decode "01nedc" to Base10': {

        topic: function() {
            basex.decode("01nedc", 36, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isNumber(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, 2771328);
        }

    },
    
    'Decode "zzzzzz" to Base10': {

        topic: function() {
            basex.decode("zzzzzz", 36, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isNumber(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, 2176782335);
        }

    },
    
    //
    
    'Encode "z3991z1" to Base36 (Invalid Base10 String)': {

        topic: function() {
            basex.encode("z3991z1", 36, {min:6}, this.callback);
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