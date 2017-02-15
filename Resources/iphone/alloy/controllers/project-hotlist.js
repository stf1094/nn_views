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
    $.__views.__alloyId43 = Ti.UI.createImageView({
        image: "/images/iphone/ui-hotlist-cover.png",
        top: "0%",
        id: "__alloyId43"
    });
    $.__views.Window_1.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        height: "7%",
        top: "25%",
        id: "__alloyId44"
    });
    $.__views.Window_1.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel(function() {
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
            id: "__alloyId45"
        });
        return o;
    }());
    $.__views.__alloyId44.add($.__views.__alloyId45);
    var __alloyId49 = [];
    $.__views.__alloyId50 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId50"
        }
    };
    __alloyId49.push($.__views.__alloyId50);
    $.__views.__alloyId51 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId51"
        }
    };
    __alloyId49.push($.__views.__alloyId51);
    $.__views.__alloyId52 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId52"
        }
    };
    __alloyId49.push($.__views.__alloyId52);
    $.__views.__alloyId53 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId53"
        }
    };
    __alloyId49.push($.__views.__alloyId53);
    $.__views.__alloyId54 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId54"
        }
    };
    __alloyId49.push($.__views.__alloyId54);
    $.__views.__alloyId55 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId55"
        }
    };
    __alloyId49.push($.__views.__alloyId55);
    $.__views.__alloyId56 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId56"
        }
    };
    __alloyId49.push($.__views.__alloyId56);
    $.__views.__alloyId57 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId57"
        }
    };
    __alloyId49.push($.__views.__alloyId57);
    $.__views.__alloyId47 = Ti.UI.createListSection({
        id: "__alloyId47"
    });
    $.__views.__alloyId47.items = __alloyId49;
    var __alloyId58 = [];
    __alloyId58.push($.__views.__alloyId47);
    $.__views.__alloyId46 = Ti.UI.createListView({
        sections: __alloyId58,
        top: "32%",
        id: "__alloyId46"
    });
    $.__views.Window_1.add($.__views.__alloyId46);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;