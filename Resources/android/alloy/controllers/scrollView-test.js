function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scrollView-test";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: true,
        fullscreen: false,
        id: "win",
        title: "ScrollView Demo"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId322 = Ti.UI.createImageView({
        image: "/images/iphone/hot-list-cover.png",
        id: "__alloyId322"
    });
    $.__views.win.add($.__views.__alloyId322);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "20%",
        left: "0.00%",
        top: "20%",
        width: "100%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.view = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: "100%",
        id: "view",
        width: 1200
    });
    $.__views.scrollView.add($.__views.view);
    $.__views.ImageView_1 = Ti.UI.createImageView({
        height: "125px",
        left: "1.5%",
        top: "25%",
        width: "125px",
        id: "ImageView_1",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.view.add($.__views.ImageView_1);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        height: "125px",
        left: "7.5%",
        top: "25%",
        width: "125px",
        id: "ImageView_2",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.view.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "13.5%",
        top: "25%",
        id: "ImageView_3",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.view.add($.__views.ImageView_3);
    $.__views.ImageView_4 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "19.5%",
        top: "25%",
        id: "ImageView_4",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.view.add($.__views.ImageView_4);
    $.__views.ImageView_5 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "25.5%",
        top: "25%",
        id: "ImageView_5",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.view.add($.__views.ImageView_5);
    $.__views.ImageView_6 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "31.5%",
        top: "25%",
        id: "ImageView_6",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.view.add($.__views.ImageView_6);
    $.__views.ImageView_7 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "37.5%",
        top: "25%",
        id: "ImageView_7",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.view.add($.__views.ImageView_7);
    $.__views.ImageView_8 = Ti.UI.createImageView({
        height: "125px",
        left: "43.5%",
        top: "25%",
        width: "125px",
        id: "ImageView_8",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.view.add($.__views.ImageView_8);
    $.__views.__alloyId323 = Ti.UI.createView({
        backgroundColor: "red",
        height: "100px",
        width: "100px",
        id: "__alloyId323"
    });
    $.__views.view.add($.__views.__alloyId323);
    var __alloyId324 = [];
    $.__views.view1 = Ti.UI.createView({
        backgroundColor: "#123",
        id: "view1"
    });
    __alloyId324.push($.__views.view1);
    $.__views.__alloyId325 = Ti.UI.createLabel({
        text: "View 1",
        id: "__alloyId325"
    });
    $.__views.view1.add($.__views.__alloyId325);
    var __alloyId328 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId328.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId328.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId328.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId328.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId328.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId328.push($.__views.ListItem_6);
    $.__views.__alloyId326 = Ti.UI.createListSection({
        title: "Section",
        id: "__alloyId326"
    });
    $.__views.__alloyId326.items = __alloyId328;
    var __alloyId329 = [];
    __alloyId329.push($.__views.__alloyId326);
    $.__views.ListView_1 = Ti.UI.createListView({
        sections: __alloyId329,
        id: "ListView_1"
    });
    $.__views.view1.add($.__views.ListView_1);
    $.__views.view2 = Ti.UI.createView({
        backgroundColor: "#246",
        id: "view2"
    });
    __alloyId324.push($.__views.view2);
    $.__views.__alloyId330 = Ti.UI.createLabel({
        text: "View 2",
        id: "__alloyId330"
    });
    $.__views.view2.add($.__views.__alloyId330);
    var __alloyId333 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId333.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId333.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId333.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId333.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId333.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId333.push($.__views.ListItem_6);
    $.__views.__alloyId331 = Ti.UI.createListSection({
        title: "Section",
        id: "__alloyId331"
    });
    $.__views.__alloyId331.items = __alloyId333;
    var __alloyId334 = [];
    __alloyId334.push($.__views.__alloyId331);
    $.__views.ListView_2 = Ti.UI.createListView({
        sections: __alloyId334,
        id: "ListView_2"
    });
    $.__views.view2.add($.__views.ListView_2);
    $.__views.view3 = Ti.UI.createView({
        height: "160.13%",
        left: "0.00%",
        top: "0.00%",
        width: "100.00%",
        backgroundColor: "#48b",
        id: "view3"
    });
    __alloyId324.push($.__views.view3);
    $.__views.__alloyId335 = Ti.UI.createLabel({
        text: "View 3",
        id: "__alloyId335"
    });
    $.__views.view3.add($.__views.__alloyId335);
    var __alloyId338 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId338.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId338.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId338.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId338.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId338.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId338.push($.__views.ListItem_6);
    $.__views.__alloyId336 = Ti.UI.createListSection({
        title: "Section",
        id: "__alloyId336"
    });
    $.__views.__alloyId336.items = __alloyId338;
    var __alloyId339 = [];
    __alloyId339.push($.__views.__alloyId336);
    $.__views.ListView_3 = Ti.UI.createListView({
        sections: __alloyId339,
        id: "ListView_3"
    });
    $.__views.view3.add($.__views.ListView_3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        height: "50%",
        left: "0.00%",
        top: "40%",
        width: "100.00%",
        views: __alloyId324,
        id: "scrollableView",
        showPagingControl: true
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;