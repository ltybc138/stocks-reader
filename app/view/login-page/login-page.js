var frameModule = require("ui/frame");

function onNavigatingTo(args) {
    console.log("Login page started");
}

exports.onNavigatingTo = onNavigatingTo;

exports.onRegister = function () {
    var navigationEntry = {
        moduleName: "view/register-page/register-page",
        context: {info: "from login page"},
        animated: false
    };
    frameModule.topmost().navigate(navigationEntry);
};
