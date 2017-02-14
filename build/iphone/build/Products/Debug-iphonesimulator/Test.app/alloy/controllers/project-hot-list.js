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
    $.__views.__alloyId39 = Ti.UI.createImageView({
        left: "0.00%",
        top: "0.00%",
        image: "/images/iphone/ui-hotlist-cover.png",
        height: "23.25%",
        width: "100%",
        id: "__alloyId39"
    });
    $.__views.project - hot - list.add($.__views.__alloyId39);
    var __alloyId40 = [];
    $.__views.__alloyId41 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId41"
    });
    __alloyId40.push($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        text: "View 1",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    var __alloyId46 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId46.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId46.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId46.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId46.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId46.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId46.push($.__views.ListItem_6);
    $.__views.__alloyId44 = Ti.UI.createListSection({
        title: "Project 1",
        id: "__alloyId44"
    });
    $.__views.__alloyId44.items = __alloyId46;
    var __alloyId47 = [];
    __alloyId47.push($.__views.__alloyId44);
    $.__views.__alloyId43 = Ti.UI.createListView({
        sections: __alloyId47,
        title: "Project Title",
        id: "__alloyId43"
    });
    $.__views.__alloyId41.add($.__views.__alloyId43);
    $.__views.__alloyId48 = Ti.UI.createView({
        id: "__alloyId48"
    });
    __alloyId40.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        text: "View 2",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    var __alloyId53 = [];
    $.__views.ListItem_1 = {
        properties: {
            id: "ListItem_1",
            title: "Name 1"
        }
    };
    __alloyId53.push($.__views.ListItem_1);
    $.__views.ListItem_2 = {
        properties: {
            id: "ListItem_2",
            title: "Name 2"
        }
    };
    __alloyId53.push($.__views.ListItem_2);
    $.__views.ListItem_3 = {
        properties: {
            id: "ListItem_3",
            title: "Name 3"
        }
    };
    __alloyId53.push($.__views.ListItem_3);
    $.__views.ListItem_4 = {
        properties: {
            id: "ListItem_4",
            title: "Name 4"
        }
    };
    __alloyId53.push($.__views.ListItem_4);
    $.__views.ListItem_5 = {
        properties: {
            id: "ListItem_5",
            title: "Name 5"
        }
    };
    __alloyId53.push($.__views.ListItem_5);
    $.__views.ListItem_6 = {
        properties: {
            id: "ListItem_6",
            title: "Name 6"
        }
    };
    __alloyId53.push($.__views.ListItem_6);
    $.__views.__alloyId51 = Ti.UI.createListSection({
        title: "Project 2",
        id: "__alloyId51"
    });
    $.__views.__alloyId51.items = __alloyId53;
    var __alloyId54 = [];
    __alloyId54.push($.__views.__alloyId51);
    $.__views.__alloyId50 = Ti.UI.createListView({
        sections: __alloyId54,
        title: "Project 2",
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        top: "21%",
        views: __alloyId40,
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