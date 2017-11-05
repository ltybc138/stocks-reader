var Observable = require("data/observable").Observable;
var ObservableArray = require("data-observable-array").ObservableArray;

var page;
var items = new ObservableArray([]);
var pageData = new Observable();

function onNavigatingTo(args) {
    console.log("Stock list page started");
}

exports.onNavigatingTo = onNavigatingTo;

exports.pageLoaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
    items.push(
        {
            itemName: "Apple",
            itemDesc: "Apple stocks",
            itemImage: "~/images/apple.jpg"
        },
        {
            itemName: "Tesla",
            itemDesc: "Tesla stocks",
            itemImage: "~/images/tesla.png"
        },
        {
            itemName: "SpaceX",
            itemDesc: "SpaceX stocks",
            itemImage: "~/images/spacex.jpg"
        },
        {
            itemName: "Microsoft",
            itemDesc: "Microsoft stocks",
            itemImage: "~/images/microsoft.png"
        }
    );
    pageData.set("items", items);
};