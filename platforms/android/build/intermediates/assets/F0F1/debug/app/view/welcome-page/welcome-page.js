var frameModule = require("ui/frame");

function onNavigatingTo(args) {
    console.log("Main page started");
}

function onTap() {
    frameModule.topmost().navigate("view/stock-list-page/stock-list-page");
}

exports.onTap = onTap;
exports.onNavigatingTo = onNavigatingTo;