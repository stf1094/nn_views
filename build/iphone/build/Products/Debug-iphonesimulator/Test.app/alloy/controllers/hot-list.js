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
    this.__controllerPath = "hot-list";
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
    $.__views.__alloyId16 = Ti.UI.createImageView({
        left: "0.00%",
        top: "0.00%",
        image: "/images/iphone/ui-hotlist-cover.png",
        height: "23.25%",
        width: "100%",
        id: "__alloyId16"
    });
    $.__views.win.add($.__views.__alloyId16);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "20%",
        left: "0.00%",
        top: "21.00%",
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
    $.__views.ImageView_1 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "1.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "1.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_1",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_1);
    $.__views.ImageView_2 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "7.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "13.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_2",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "13.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "25.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_3",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_3);
    $.__views.ImageView_4 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "19.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "37.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_4",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_4);
    $.__views.ImageView_5 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "25.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "49.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_5",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_5);
    $.__views.ImageView_6 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "31.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "61.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_6",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_6);
    $.__views.ImageView_7 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "37.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "73.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_7",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_7);
    $.__views.ImageView_8 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "43.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "85.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_8",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_8);
    var __alloyId17 = [];
    $.__views.view1 = Ti.UI.createView({
        backgroundColor: "#f79d41",
        id: "view1"
    });
    __alloyId17.push($.__views.view1);
    var __alloyId20 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId20.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId20.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId20.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId20.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId20.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId20.push($.__views.ListItem_6);
    $.__views.__alloyId18 = Ti.UI.createListSection({
        title: "Project 1",
        text: "TEXT",
        id: "__alloyId18"
    });
    $.__views.__alloyId18.items = __alloyId20;
    var __alloyId21 = [];
    __alloyId21.push($.__views.__alloyId18);
    $.__views.ListView_1 = Ti.UI.createListView({
        sections: __alloyId21,
        id: "ListView_1",
        title: "Project 1"
    });
    $.__views.view1.add($.__views.ListView_1);
    $.__views.view2 = Ti.UI.createView({
        backgroundColor: "#246",
        id: "view2"
    });
    __alloyId17.push($.__views.view2);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        text: "View 2",
        id: "__alloyId22"
    });
    $.__views.view2.add($.__views.__alloyId22);
    var __alloyId25 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId25.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId25.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId25.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId25.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId25.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId25.push($.__views.ListItem_6);
    $.__views.__alloyId23 = Ti.UI.createListSection({
        title: "Project 2",
        id: "__alloyId23"
    });
    $.__views.__alloyId23.items = __alloyId25;
    var __alloyId26 = [];
    __alloyId26.push($.__views.__alloyId23);
    $.__views.ListView_2 = Ti.UI.createListView({
        sections: __alloyId26,
        id: "ListView_2",
        title: "Project 2"
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
    __alloyId17.push($.__views.view3);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        text: "View 3",
        id: "__alloyId27"
    });
    $.__views.view3.add($.__views.__alloyId27);
    var __alloyId30 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId30.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId30.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId30.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId30.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId30.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId30.push($.__views.ListItem_6);
    $.__views.__alloyId28 = Ti.UI.createListSection({
        title: "Project 3",
        id: "__alloyId28"
    });
    $.__views.__alloyId28.items = __alloyId30;
    var __alloyId31 = [];
    __alloyId31.push($.__views.__alloyId28);
    $.__views.ListView_3 = Ti.UI.createListView({
        sections: __alloyId31,
        id: "ListView_3",
        title: "Project 3"
    });
    $.__views.view3.add($.__views.ListView_3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        height: "50%",
        left: "0.00%",
        top: "40.00%",
        width: "100.00%",
        views: __alloyId17,
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