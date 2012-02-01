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

    'Encode 1296 to Base8': {

        topic: function() {
            baseit.encode({
                input: 1296, 
                base: 8,
            }, this.callback);
        },

        'is a string': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "260"': function (err, obj) {
            assert.strictEqual(obj, "2420");
        }

    },

    'Decode 2420 to Base10': {

        topic: function() {
            baseit.decode({
                input: "2420", 
                base: 8, 
            }, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isNumber(obj);
        },
        
        'is equal to 1296': function (err, obj) {
            assert.strictEqual(obj, 1296);
        }

    },

    //

    'Encode 1296 to Base24': {

        topic: function() {
            baseit.encode({
                input: 1296, 
                base: 24,
                digits: 6,
            }, this.callback);
        },

        'is a string': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "000260"': function (err, obj) {
            assert.strictEqual(obj, "000260");
        }

    },

    'Decode 260 to Base10': {

        topic: function() {
            baseit.decode({
                input: "000260", 
                base: 24,
            }, this.callback);
        },

        'is a number': function (err, obj) {
            assert.isNumber(obj);
        },
        
        'is equal to 1296': function (err, obj) {
            assert.strictEqual(obj, 1296);
        }

    },

    //
    
    'Encode 2176782335 to Base36': {

        topic: function() {
            baseit.encode({
                input: 2176782335,
                base: 36,
            }, this.callback);
        },

        'is a string': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "zzzzzz");
        }

    },
    
    'Encode "2176782335" to Base36': {

        topic: function() {
            baseit.encode({
                input: "2176782335",
                base: 36,
            }, this.callback);
        },

        'is a string': function (err, obj) {
            assert.isString(obj);
        },
        
        'is equal to "100"': function (err, obj) {
            assert.strictEqual(obj, "zzzzzz");
        }

    },
    
    //
    
    'Encode "z3991z1" to Base36 (Invalid Base10 String)': {

        topic: function() {
            baseit.encode({
                input: "z3991z1",
                base: 36,
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