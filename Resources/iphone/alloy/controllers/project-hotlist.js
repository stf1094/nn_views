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
    $.__views.__alloyId93 = Ti.UI.createImageView({
        image: "/images/iphone/ui-hotlist-cover.png",
        top: "0%",
        id: "__alloyId93"
    });
    $.__views.Window_1.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        height: "7%",
        top: "25%",
        id: "__alloyId94"
    });
    $.__views.Window_1.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel(function() {
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
                fontSize: "45",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.deepExtend(true, o, {
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            text: "Project Name",
            top: "0%",
            id: "__alloyId95"
        });
        return o;
    }());
    $.__views.__alloyId94.add($.__views.__alloyId95);
    var __alloyId99 = [];
    $.__views.__alloyId100 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId100"
        }
    };
    __alloyId99.push($.__views.__alloyId100);
    $.__views.__alloyId101 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId101"
        }
    };
    __alloyId99.push($.__views.__alloyId101);
    $.__views.__alloyId102 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId102"
        }
    };
    __alloyId99.push($.__views.__alloyId102);
    $.__views.__alloyId103 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId103"
        }
    };
    __alloyId99.push($.__views.__alloyId103);
    $.__views.__alloyId104 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId104"
        }
    };
    __alloyId99.push($.__views.__alloyId104);
    $.__views.__alloyId105 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId105"
        }
    };
    __alloyId99.push($.__views.__alloyId105);
    $.__views.__alloyId106 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId106"
        }
    };
    __alloyId99.push($.__views.__alloyId106);
    $.__views.__alloyId107 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId107"
        }
    };
    __alloyId99.push($.__views.__alloyId107);
    $.__views.__alloyId97 = Ti.UI.createListSection({
        id: "__alloyId97"
    });
    $.__views.__alloyId97.items = __alloyId99;
    var __alloyId108 = [];
    __alloyId108.push($.__views.__alloyId97);
    $.__views.__alloyId96 = Ti.UI.createListView({
        sections: __alloyId108,
        top: "32%",
        id: "__alloyId96"
    });
    $.__views.Window_1.add($.__views.__alloyId96);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;