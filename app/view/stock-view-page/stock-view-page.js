var stackItem;
function onNavigatingTo(args) {
    console.log(JSON.stringify(args.context));
    console.log("Stock view page started");
}

exports.onNavigatingTo = onNavigatingTo;