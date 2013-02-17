/**
 * minecraft-pi tests.
 *
 * @package minecraft-pi
 * @author Zachary Bruggeman <talkto@zachbruggeman.me>
 */

/**
 * Dependencies
 */
var test = require('tap').test;
var async = require('async');
var Minecraft = require('./../lib/minecraft.js');
var client, receivedData; 

async.auto({
	connect: function (callback) {
		client = new Minecraft('192.168.1.89', callback); // To test for yourself, please edit this to point to your local pi server.
	},

	data: ['connect', function (callback) {
		client.getBlock(99999, 99999, 99999, function(data) {
			receivedData = data.toString();
			client.end();
			callback();
		});
	}],

	test: ['connect', 'data', function (callback) {
		test('Client connection', function(t) {
			t.type(client.connection, 'object', 'The connection should be an object.');
			t.end();
		});

		test('Receiving data', function(t) {
			t.type(receivedData, 'string', 'A string of data should be returned.')
			t.equals(receivedData, '0\n', 'Expected result.')
			t.end();
		});
	}]
}, function(err, obj) {
	test('Catch errors', function(t) {
		t.equal(err, null, 'Errors should be null.');
		t.end();
	});
});