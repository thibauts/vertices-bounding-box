vertices-bounding-box
=====================
### Computes the bounding box of a set of vertices

Works with vertices of arbitrary dimension.

Install
-------

```bash
$ npm install vertices-bounding-box
```

Usage
-----

```javascript
var boundingBox = require('vertices-bounding-box');

var positions = [ 
  [-1,  0,  0],
  [ 1,  0, -1],
  [ 0, -1,  0],
  [ 0,  1,  1] 
];

var bb = boundingBox(positions);

console.log(bb);
/*
[
  [ -1, -1, -1 ], 
  [  1,  1,  1 ] 
]
*/
```
