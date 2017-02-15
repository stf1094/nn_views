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
    this.__controllerPath = "project-hot-list";
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
    $.__views.project - hot - list = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: true,
        fullscreen: false,
        title: "Project Hot List",
        id: "project-hot-list"
    });
    $.__views.project - hot - list && $.addTopLevelView($.__views.project - hot - list);
    $.__views.__alloyId43 = Ti.UI.createImageView({
        left: "0.00%",
        top: "0.00%",
        image: "/images/iphone/ui-hotlist-cover.png",
        height: "23.25%",
        width: "100%",
        id: "__alloyId43"
    });
    $.__views.project - hot - list.add($.__views.__alloyId43);
    var __alloyId44 = [];
    $.__views.__alloyId45 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId45"
    });
    __alloyId44.push($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        text: "View 1",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    var __alloyId50 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId50.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId50.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId50.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId50.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId50.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId50.push($.__views.ListItem_6);
    $.__views.__alloyId48 = Ti.UI.createListSection({
        title: "Project 1",
        id: "__alloyId48"
    });
    $.__views.__alloyId48.items = __alloyId50;
    var __alloyId51 = [];
    __alloyId51.push($.__views.__alloyId48);
    $.__views.__alloyId47 = Ti.UI.createListView({
        sections: __alloyId51,
        title: "Project Title",
        id: "__alloyId47"
    });
    $.__views.__alloyId45.add($.__views.__alloyId47);
    $.__views.__alloyId52 = Ti.UI.createView({
        id: "__alloyId52"
    });
    __alloyId44.push($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        text: "View 2",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    var __alloyId57 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId57.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId57.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId57.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId57.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId57.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId57.push($.__views.ListItem_6);
    $.__views.__alloyId55 = Ti.UI.createListSection({
        title: "Project 2",
        id: "__alloyId55"
    });
    $.__views.__alloyId55.items = __alloyId57;
    var __alloyId58 = [];
    __alloyId58.push($.__views.__alloyId55);
    $.__views.__alloyId54 = Ti.UI.createListView({
        sections: __alloyId58,
        title: "Project 2",
        id: "__alloyId54"
    });
    $.__views.__alloyId52.add($.__views.__alloyId54);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        top: "21%",
        views: __alloyId44,
        id: "scrollableView",
        showPagingControl: true
    });
    $.__views.project - hot - list.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;