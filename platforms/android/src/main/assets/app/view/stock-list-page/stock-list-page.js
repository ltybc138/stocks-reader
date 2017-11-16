var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var frameModule = require("ui/frame");

var page;
var items = new ObservableArray([]);
var pageData = new Observable();

/**
 * Executes when program just navigated to
 * this page(first method)
 * @param args represents page
 */
function onNavigatingTo(args) {
    console.log("Stock list page started");
}

/**
 * Executes when page(UI and logic) completely
 * loaded
 * @param args represents page
 */
function pageLoaded(args) {
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
}

/**
 * This method is for refreshing RedListView by
 * pulling it naturally(native pull-to-refresh)
 * @param args is ListViewEventData
 */
function onPullToRefreshInitiated(args) {
    setTimeout(function() {
        var listView = args.object;
        listView.notifyPullToRefreshFinished();
        console.log("Pulled");
    }, 1000);
}

/**
 * This is tap event logic
 * @param args is specific item from RadListView
 */
function onStackItemTap(args) {
    const tappedStackItem = args.view.bindingContext;
    var navigationEntry = {
        moduleName: "view/stock-view-page/stock-view-page",
        context: tappedStackItem,
        animated: false
    };
    frameModule.topmost().navigate(navigationEntry);
}

/**
 * Method for realization navigation between
 * this page and login page
 */
function onLogin() {
    var navigationEntry = {
        moduleName: "view/login-page/login-page",
        context: {info: "from stocks list"},
        animated: false
    };
    frameModule.topmost().navigate(navigationEntry);
}

exports.onNavigatingTo = onNavigatingTo;
exports.pageLoaded = pageLoaded;
exports.onPullToRefreshInitiated = onPullToRefreshInitiated;
exports.onStackItemTap = onStackItemTap;
exports.onLogin = onLogin;
// exports.openStockItemView = function() {
//     var navigationEntry = {
//         moduleName: "view/stock-view-page/stock-view-page",
//         context: {info: "from stocks list"},
//         animated: false
//     };
//     frameModule.topmost().navigate(navigationEntry);
// };

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