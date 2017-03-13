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
    $.__views.__alloyId155 = Ti.UI.createImageView({
        left: "0.00%",
        top: "0.00%",
        image: "/images/iphone/ui-hotlist-cover.png",
        height: "23.25%",
        width: "100%",
        id: "__alloyId155"
    });
    $.__views.win.add($.__views.__alloyId155);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "15%",
        left: "0.00%",
        top: "22.00%",
        width: "100%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.view = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "750"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "1050"
        });
        Alloy.deepExtend(true, o, {
            backgroundColor: "#ffffff",
            height: "100%",
            id: "view"
        });
        return o;
    }());
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
            height: "175px",
            left: "1.5%",
            top: "25%",
            width: "175px"
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
            left: "11%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "11%",
            top: "25%",
            width: "175px"
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
            left: "20.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "20.5%",
            top: "25%",
            width: "175px"
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
            left: "30%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "30%",
            top: "25%",
            width: "175px"
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
            left: "39.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "39.5%",
            top: "25%",
            width: "175px"
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
            left: "49%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "49%",
            top: "25%",
            width: "175px"
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
            left: "58.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "58.5%",
            top: "25%",
            width: "175px"
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
            left: "68%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "68%",
            top: "25%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_8",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_8);
    $.__views.ImageView_9 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "77.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "77.5%",
            top: "25%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_9",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_9);
    $.__views.ImageView_10 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "87%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "87%",
            top: "25%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_10",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_10);
    var __alloyId156 = [];
    $.__views.view1 = Ti.UI.createView({
        backgroundColor: "#f79d41",
        id: "view1"
    });
    __alloyId156.push($.__views.view1);
    var __alloyId159 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId159.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId159.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId159.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId159.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId159.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId159.push($.__views.ListItem_6);
    $.__views.__alloyId157 = Ti.UI.createListSection({
        text: "TEXT",
        title: "Project 1",
        id: "__alloyId157"
    });
    $.__views.__alloyId157.items = __alloyId159;
    var __alloyId160 = [];
    __alloyId160.push($.__views.__alloyId157);
    $.__views.ListView_1 = Ti.UI.createListView({
        sections: __alloyId160,
        id: "ListView_1",
        title: "Project 1"
    });
    $.__views.view1.add($.__views.ListView_1);
    $.__views.view2 = Ti.UI.createView({
        backgroundColor: "#246",
        id: "view2"
    });
    __alloyId156.push($.__views.view2);
    $.__views.__alloyId161 = Ti.UI.createLabel({
        text: "View 2",
        id: "__alloyId161"
    });
    $.__views.view2.add($.__views.__alloyId161);
    var __alloyId164 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId164.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId164.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId164.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId164.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId164.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId164.push($.__views.ListItem_6);
    $.__views.__alloyId162 = Ti.UI.createListSection({
        title: "Project 2",
        id: "__alloyId162"
    });
    $.__views.__alloyId162.items = __alloyId164;
    var __alloyId165 = [];
    __alloyId165.push($.__views.__alloyId162);
    $.__views.ListView_2 = Ti.UI.createListView({
        sections: __alloyId165,
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
    __alloyId156.push($.__views.view3);
    $.__views.__alloyId166 = Ti.UI.createLabel({
        text: "View 3",
        id: "__alloyId166"
    });
    $.__views.view3.add($.__views.__alloyId166);
    var __alloyId169 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId169.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId169.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId169.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId169.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId169.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId169.push($.__views.ListItem_6);
    $.__views.__alloyId167 = Ti.UI.createListSection({
        title: "Project 3",
        id: "__alloyId167"
    });
    $.__views.__alloyId167.items = __alloyId169;
    var __alloyId170 = [];
    __alloyId170.push($.__views.__alloyId167);
    $.__views.ListView_3 = Ti.UI.createListView({
        sections: __alloyId170,
        id: "ListView_3",
        title: "Project 3"
    });
    $.__views.view3.add($.__views.ListView_3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        height: "50%",
        left: "0.00%",
        top: "40.00%",
        width: "100.00%",
        views: __alloyId156,
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