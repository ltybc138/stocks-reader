var frameModule = require("ui/frame");

function onNavigatingTo(args) {
    console.log("Register page started");
}

exports.onNavigatingTo = onNavigatingTo;

exports.onLogin = function() {
    var navigationEntry = {
        moduleName: "view/login-page/login-page",
        context: {info: "from register list"},
        animated: false
    };
    frameModule.topmost().navigate(navigationEntry);
};
