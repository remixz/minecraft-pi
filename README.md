## ![minecraft-pi](https://raw.github.com/remixz/minecraft-pi/master/minecraft-pi.png)

minecraft-pi allows you to control a [Minecraft: Pi Edition](http://pi.minecraft.net/) server from Node.js. This is intended as a lower-level module, and is meant to be extended on for bigger projects. However, the commands are simple enough to play with as-is.

### Usage

```js
var Minecraft = require('minecraft-pi');
var client = new Minecraft('localhost', 4711, function() {
	// Use the client variable to play with the server!
	client.chat('Yo dawg, I heard you like Node.js, so I put some Node.js in your Pi so you can Node.js while you Pi.');
	client.setBlock(3, 14, 15, client.blocks['DIAMOND_BLOCK']);
});
```

### Documentation

```bash
[sudo] npm install -g docco
docco lib/minecraft.js
open docs/minecraft.html
```