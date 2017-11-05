var view = require("ui/core/view");

function onNavigatingTo(args) {
    console.log("Stock list page started");
}

exports.pageLoaded = function(args) {
    var items = [];
    items.push(
        {
            itemName: "Apple",
            itemDesc: "Apple stocks"
        },
        {
            itemName: "Tesla",
            itemDesc: "Tesla stocks"
        },
        {
            itemName: "SpaceX",
            itemDesc: "SpaceX stocks"
        },
        {
            itemName: "Microsoft",
            itemDesc: "Microsoft stocks"
        }
    );
    var page = args.object;
    var listview = view.getViewById(page, "listview");
    listview.items = items;
};

exports.onNavigatingTo = onNavigatingTo;