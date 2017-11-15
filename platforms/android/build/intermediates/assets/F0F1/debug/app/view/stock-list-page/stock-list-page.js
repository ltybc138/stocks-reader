var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var frameModule = require("ui/frame");

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
    if (items.length === 0) {
        items.push(
            {
                itemName: "Apple",
                itemDesc: "Apple stocks",
                itemImage: "res://apple"
            },
            {
                itemName: "Tesla",
                itemDesc: "Tesla stocks",
                itemImage: "res://tesla"
            },
            {
                itemName: "SpaceX",
                itemDesc: "SpaceX stocks",
                itemImage: "res://spacex"
            },
            {
                itemName: "Microsoft",
                itemDesc: "Microsoft stocks",
                itemImage: "res://microsoft"
            }
        );
    }
    pageData.set("items", items);
};

exports.openStockItemView = function() {
    frameModule.topmost().navigate("view/stock-view-page/stock-view-page");
};