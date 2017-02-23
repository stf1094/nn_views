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
        title: "Window",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId62 = Ti.UI.createImageView({
        image: "/images/iphone/ui-hotlist-cover.png",
        top: "0%",
        id: "__alloyId62"
    });
    $.__views.Window_1.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        height: "7%",
        top: "25%",
        id: "__alloyId63"
    });
    $.__views.Window_1.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: "30",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "35",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.deepExtend(true, o, {
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            text: "Project Name",
            top: "0%",
            id: "__alloyId64"
        });
        return o;
    }());
    $.__views.__alloyId63.add($.__views.__alloyId64);
    var __alloyId68 = [];
    $.__views.__alloyId69 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId69"
        }
    };
    __alloyId68.push($.__views.__alloyId69);
    $.__views.__alloyId70 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId70"
        }
    };
    __alloyId68.push($.__views.__alloyId70);
    $.__views.__alloyId71 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId71"
        }
    };
    __alloyId68.push($.__views.__alloyId71);
    $.__views.__alloyId72 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId72"
        }
    };
    __alloyId68.push($.__views.__alloyId72);
    $.__views.__alloyId73 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId73"
        }
    };
    __alloyId68.push($.__views.__alloyId73);
    $.__views.__alloyId74 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId74"
        }
    };
    __alloyId68.push($.__views.__alloyId74);
    $.__views.__alloyId75 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId75"
        }
    };
    __alloyId68.push($.__views.__alloyId75);
    $.__views.__alloyId76 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId76"
        }
    };
    __alloyId68.push($.__views.__alloyId76);
    $.__views.__alloyId66 = Ti.UI.createListSection({
        id: "__alloyId66"
    });
    $.__views.__alloyId66.items = __alloyId68;
    var __alloyId77 = [];
    __alloyId77.push($.__views.__alloyId66);
    $.__views.__alloyId65 = Ti.UI.createListView({
        sections: __alloyId77,
        top: "32%",
        id: "__alloyId65"
    });
    $.__views.Window_1.add($.__views.__alloyId65);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;