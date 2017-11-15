function onNavigatingTo(args) {
    console.log(args.context.info);
    console.log("Stock view page started");
}

exports.onNavigatingTo = onNavigatingTo;