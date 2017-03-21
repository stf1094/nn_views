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
    $.__views.__alloyId265 = Ti.UI.createImageView({
        top: 0,
        image: "/images/iphone/project-hotlist-cover.png",
        id: "__alloyId265"
    });
    $.__views.Window_1.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createView({
        height: 60,
        id: "__alloyId266"
    });
    $.__views.Window_1.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 30
        },
        text: "Project Name",
        id: "__alloyId267"
    });
    $.__views.__alloyId266.add($.__views.__alloyId267);
    var __alloyId271 = [];
    $.__views.__alloyId272 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId272"
        }
    };
    __alloyId271.push($.__views.__alloyId272);
    $.__views.__alloyId273 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId273"
        }
    };
    __alloyId271.push($.__views.__alloyId273);
    $.__views.__alloyId274 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId274"
        }
    };
    __alloyId271.push($.__views.__alloyId274);
    $.__views.__alloyId275 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId275"
        }
    };
    __alloyId271.push($.__views.__alloyId275);
    $.__views.__alloyId276 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId276"
        }
    };
    __alloyId271.push($.__views.__alloyId276);
    $.__views.__alloyId277 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId277"
        }
    };
    __alloyId271.push($.__views.__alloyId277);
    $.__views.__alloyId278 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId278"
        }
    };
    __alloyId271.push($.__views.__alloyId278);
    $.__views.__alloyId279 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId279"
        }
    };
    __alloyId271.push($.__views.__alloyId279);
    $.__views.__alloyId269 = Ti.UI.createListSection({
        id: "__alloyId269"
    });
    $.__views.__alloyId269.items = __alloyId271;
    var __alloyId280 = [];
    __alloyId280.push($.__views.__alloyId269);
    $.__views.__alloyId268 = Ti.UI.createListView({
        sections: __alloyId280,
        id: "__alloyId268"
    });
    $.__views.Window_1.add($.__views.__alloyId268);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;