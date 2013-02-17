## ![minecraft-pi](https://raw.github.com/remixz/minecraft-pi/master/minecraft-pi.png)

minecraft-pi allows you to control a [Minecraft: Pi Edition](http://pi.minecraft.net/) server from Node.js. This module is designed to be easy to expand on, and can be used as a lower-level module to make awesome creations! As well, the commands are simple enough to play with as-is for quick experimentation.

### Usage

```js
var Minecraft = require('minecraft-pi');
var client = new Minecraft('localhost', function() {
	// Use the client variable to play with the server!
	client.chat('Yo dawg, I heard you like Node.js, so I put some Node.js in your Pi so you can Node.js while you Pi.');
	client.setBlock(3, 14, 15, client.blocks['DIAMOND_BLOCK']);
});
```

### Documentation

You can find the documentation [here](http://zachbruggeman.me/minecraft-pi/).

To generate:
```bash
make docs
open docs/minecraft.html
```

### Tests

To have your tests pass, you will need to edit `test/index.js` with your own hostname. Once you have done that:

```bash
make test
```