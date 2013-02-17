/**
 * A Node.js API for Minecraft: Pi Edition.
 *
 * @package minecraft-pi
 * @author Zachary Bruggeman <talkto@zachbruggeman.me>
 */

/**
 * Dependencies
 */
var net    = require('net');
var os     = require('os');
var Blocks = require('./blocks.json');

/**
 * Constructor
 */
function Minecraft (host, port) {
    var self = this;

    this.connection = net.connect({port: port, host: host}, function () {
        console.log('Connected to server!');
        self.chat('Hello from Node.js! Commanding from '  + os.hostname());
    });

    this.connection.on('end', function() {
        console.log('Server disconnected.');
    });
};

Minecraft.prototype.blocks = Blocks;

Minecraft.prototype.send = function (command) {
    this.connection.write(command + '\n');
};

Minecraft.prototype.sendReceive = function (command, callback) {
    var self = this;
    var defaultCallback = function (data) {
        console.log(data.toString());
        self.connection.end();
    };
    var callback = callback ? callback : defaultCallback;

    this.connection.write(command + '\n');
    this.connection.on('data', callback);
};

/**
 * Commands
 */

/**
 * World commands
 */
Minecraft.prototype.getBlock = function (x, y, z, callback) {
    this.sendReceive('world.getBlock(' + x + ',' + y + ',' + z + ')', callback);
};

Minecraft.prototype.setBlock = function (x, y, z, id) {
    this.send('world.setBlock(' + x + ',' + y + ',' + z + ',' + id + ')');
};

Minecraft.prototype.getHeight = function (x, z, callback) {
    this.sendReceive('world.getHeight(' + x + ',' + z + ')', callback);
};

Minecraft.prototype.saveCheckpoint = function () {
    this.send('world.checkpoint.save()');
};

Minecraft.prototype.restoreCheckpoint = function () {
    this.send('world.checkpoint.restore()');
};

Minecraft.prototype.setting = function (key, value) {
    this.send('world.setting(' + key + ',' + value + ')');
};

Minecraft.prototype.chat = function (message) {
    this.send('chat.post(' + message + ')');
};

/**
 * Camera commands
 */
Minecraft.prototype.setCameraMode = function (mode) {
    var self = this;
    // I've consolidated three commands into one for ease of use.
    switch (mode) {
        case 'normal':
        self.send('camera.mode.setNormal()');
        break;
        case 'thirdPerson':
        self.send('camera.mode.setThirdPerson()');
        break;
        case 'fixed':
        self.send('camera.mode.setFixed()');
        break;
    };
};

Minecraft.prototype.setCameraPosition = function (x, y, z) {
    this.send('camera.mode.setPos(' + x + ',' + y + ',' + z + ')');
};

/**
 * Player commands
 */
Minecraft.prototype.getTile = function (callback) {
    this.sendReceive('player.getTile()', callback);
};

Minecraft.prototype.setTile = function (x, y, z) {
    this.send('player.setTile(' + x + ',' + y + ',' + z + ')');
};

Minecraft.prototype.getPos = function (callback) {
    this.sendReceive('player.getPos()', callback);
};

Minecraft.prototype.setPos = function (x, y, z) {
    this.send('player.setPos(' + x + ',' + y + ',' + z + ')');
};

/**
 * Event commands
 */
Minecraft.prototype.eventsBlockHits = function(callback) {
    this.sendReceive('events.block.hits()', callback);
};

Minecraft.prototype.eventsClear = function() {
    this.send('events.clear()');
};

/**
 * Exports
 */
module.exports = Minecraft;