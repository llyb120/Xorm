"use strict";
var FuseBox = require("fuse-box").FuseBox;
var fuse = FuseBox.init({
    homeDir: "../src",
    output: "../bundle/$name.js",
    cache: true,
});
fuse.bundle("bundle")
    .watch('src/**')
    .instructions("[**/*.ts] + [**/*.js]")
    .completed(function (proc) { return proc.start(); });
fuse.run();
