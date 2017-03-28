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
    $.__views.__alloyId252 = Ti.UI.createImageView({
        top: 0,
        image: "/images/iphone/project-hotlist-cover.png",
        id: "__alloyId252"
    });
    $.__views.Window_1.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createView({
        height: 60,
        id: "__alloyId253"
    });
    $.__views.Window_1.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 30
        },
        text: "Project Name",
        id: "__alloyId254"
    });
    $.__views.__alloyId253.add($.__views.__alloyId254);
    var __alloyId258 = [];
    $.__views.__alloyId259 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId259"
        }
    };
    __alloyId258.push($.__views.__alloyId259);
    $.__views.__alloyId260 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId260"
        }
    };
    __alloyId258.push($.__views.__alloyId260);
    $.__views.__alloyId261 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId261"
        }
    };
    __alloyId258.push($.__views.__alloyId261);
    $.__views.__alloyId262 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId262"
        }
    };
    __alloyId258.push($.__views.__alloyId262);
    $.__views.__alloyId263 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId263"
        }
    };
    __alloyId258.push($.__views.__alloyId263);
    $.__views.__alloyId264 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId264"
        }
    };
    __alloyId258.push($.__views.__alloyId264);
    $.__views.__alloyId265 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId265"
        }
    };
    __alloyId258.push($.__views.__alloyId265);
    $.__views.__alloyId266 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId266"
        }
    };
    __alloyId258.push($.__views.__alloyId266);
    $.__views.__alloyId256 = Ti.UI.createListSection({
        id: "__alloyId256"
    });
    $.__views.__alloyId256.items = __alloyId258;
    var __alloyId267 = [];
    __alloyId267.push($.__views.__alloyId256);
    $.__views.__alloyId255 = Ti.UI.createListView({
        sections: __alloyId267,
        id: "__alloyId255"
    });
    $.__views.Window_1.add($.__views.__alloyId255);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;