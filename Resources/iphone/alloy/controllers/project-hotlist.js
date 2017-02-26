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
    this.__controllerPath = "project-hotlist";
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
    $.__views.Window_1 = Ti.UI.createWindow({
        layout: "vertical",
        title: "Window",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId127 = Ti.UI.createImageView({
        top: 0,
        image: "/images/iphone/project-hotlist-cover.png",
        id: "__alloyId127"
    });
    $.__views.Window_1.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
        height: 60,
        id: "__alloyId128"
    });
    $.__views.Window_1.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 30
        },
        text: "Project Name",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    var __alloyId133 = [];
    $.__views.__alloyId134 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId134"
        }
    };
    __alloyId133.push($.__views.__alloyId134);
    $.__views.__alloyId135 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId135"
        }
    };
    __alloyId133.push($.__views.__alloyId135);
    $.__views.__alloyId136 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId136"
        }
    };
    __alloyId133.push($.__views.__alloyId136);
    $.__views.__alloyId137 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId137"
        }
    };
    __alloyId133.push($.__views.__alloyId137);
    $.__views.__alloyId138 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId138"
        }
    };
    __alloyId133.push($.__views.__alloyId138);
    $.__views.__alloyId139 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId139"
        }
    };
    __alloyId133.push($.__views.__alloyId139);
    $.__views.__alloyId140 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId140"
        }
    };
    __alloyId133.push($.__views.__alloyId140);
    $.__views.__alloyId141 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId141"
        }
    };
    __alloyId133.push($.__views.__alloyId141);
    $.__views.__alloyId131 = Ti.UI.createListSection({
        id: "__alloyId131"
    });
    $.__views.__alloyId131.items = __alloyId133;
    var __alloyId142 = [];
    __alloyId142.push($.__views.__alloyId131);
    $.__views.__alloyId130 = Ti.UI.createListView({
        sections: __alloyId142,
        id: "__alloyId130"
    });
    $.__views.Window_1.add($.__views.__alloyId130);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;