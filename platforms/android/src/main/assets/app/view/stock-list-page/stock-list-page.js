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
                itemPrice: (Math.random() * 100).toFixed(2),
                itemChange: "0.26",
                itemImage: "res://apple"
            },
            {
                itemName: "Tesla",
                itemDesc: "Tesla stocks",
                itemPrice: (Math.random() * 100).toFixed(2),
                itemChange: "0.8",
                itemImage: "res://tesla"
            },
            {
                itemName: "SpaceX",
                itemDesc: "SpaceX stocks",
                itemPrice: (Math.random() * 100).toFixed(2),
                itemChange: "-1.56",
                itemImage: "res://spacex"
            },
            {
                itemName: "Microsoft",
                itemDesc: "Microsoft stocks",
                itemPrice: (Math.random() * 100).toFixed(2),
                itemChange: "0.001",
                itemImage: "res://microsoft"
            }
        );
    }
    pageData.set("items", items);
};

exports.onPullToRefreshInitiated = function(args) {
    setTimeout(function() {
        var listView = args.object;
        listView.notifyPullToRefreshFinished();
        console.log("Pulled");
    }, 1000);
};

exports.openStockItemView = function() {
    var navigationEntry = {
        moduleName: "view/stock-view-page/stock-view-page",
        context: {info: "from stocks list"},
        animated: false
    };
    frameModule.topmost().navigate(navigationEntry);
};

exports.onLogin = function() {
    var navigationEntry = {
        moduleName: "view/login-page/login-page",
        context: {info: "from stocks list"},
        animated: false
    };
    frameModule.topmost().navigate(navigationEntry);
};

/*exports.onItemSelected = function (args) {
    var listview  = args.object;
    var selectedItems = listview.getSelectedItems();
    var selectedTitles = "Selected items: ";
    for (var i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i].name;

        if (i < selectedItems.length - 1) {
            selectedItems += ", ";
        }
    }
    console.log(selectedTitles);
};*/