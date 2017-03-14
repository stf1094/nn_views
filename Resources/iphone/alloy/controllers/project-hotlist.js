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
    $.__views.__alloyId260 = Ti.UI.createImageView({
        top: 0,
        image: "/images/iphone/project-hotlist-cover.png",
        id: "__alloyId260"
    });
    $.__views.Window_1.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createView({
        height: 60,
        id: "__alloyId261"
    });
    $.__views.Window_1.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 30
        },
        text: "Project Name",
        id: "__alloyId262"
    });
    $.__views.__alloyId261.add($.__views.__alloyId262);
    var __alloyId266 = [];
    $.__views.__alloyId267 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId267"
        }
    };
    __alloyId266.push($.__views.__alloyId267);
    $.__views.__alloyId268 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId268"
        }
    };
    __alloyId266.push($.__views.__alloyId268);
    $.__views.__alloyId269 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId269"
        }
    };
    __alloyId266.push($.__views.__alloyId269);
    $.__views.__alloyId270 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId270"
        }
    };
    __alloyId266.push($.__views.__alloyId270);
    $.__views.__alloyId271 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId271"
        }
    };
    __alloyId266.push($.__views.__alloyId271);
    $.__views.__alloyId272 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId272"
        }
    };
    __alloyId266.push($.__views.__alloyId272);
    $.__views.__alloyId273 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId273"
        }
    };
    __alloyId266.push($.__views.__alloyId273);
    $.__views.__alloyId274 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId274"
        }
    };
    __alloyId266.push($.__views.__alloyId274);
    $.__views.__alloyId264 = Ti.UI.createListSection({
        id: "__alloyId264"
    });
    $.__views.__alloyId264.items = __alloyId266;
    var __alloyId275 = [];
    __alloyId275.push($.__views.__alloyId264);
    $.__views.__alloyId263 = Ti.UI.createListView({
        sections: __alloyId275,
        id: "__alloyId263"
    });
    $.__views.Window_1.add($.__views.__alloyId263);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;