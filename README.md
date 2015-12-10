Load javascript file into context

it can be used as a javascript include, because sometimes my files get bigger and i don't want to code in module exports just to split them.

**usage**
```javascript
var include=require("simple-loader")(global);
include("test/resources/included.js");
```
this differs from *require* as the included script can modify local environment.
so, use it just to split your own long files.

simple-loader injects *console* and *require* to the included script.
