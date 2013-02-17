# minecraft-pi

*Work in progress.*

*TODO:*

* Write tests
* Better documentation

## Usage

```js
var Minecraft = require('minecraft-pi');
var client = new Minecraft('localhost', 4711);

// Use the client variable to play with the server!
client.chat('Yo dawg, I heard you like Node.js, so I put some Node.js in your Pi so you can Node.js while you Pi.');
client.setBlock(3, 14, 15, client.blocks['DIAMOND_BLOCK']);
```