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
    $.__views.__alloyId72 = Ti.UI.createImageView({
        image: "/images/iphone/ui-hotlist-cover.png",
        top: "0%",
        id: "__alloyId72"
    });
    $.__views.Window_1.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        height: "7%",
        top: "25%",
        id: "__alloyId73"
    });
    $.__views.Window_1.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel(function() {
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
            id: "__alloyId74"
        });
        return o;
    }());
    $.__views.__alloyId73.add($.__views.__alloyId74);
    var __alloyId78 = [];
    $.__views.__alloyId79 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId79"
        }
    };
    __alloyId78.push($.__views.__alloyId79);
    $.__views.__alloyId80 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId80"
        }
    };
    __alloyId78.push($.__views.__alloyId80);
    $.__views.__alloyId81 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId81"
        }
    };
    __alloyId78.push($.__views.__alloyId81);
    $.__views.__alloyId82 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId82"
        }
    };
    __alloyId78.push($.__views.__alloyId82);
    $.__views.__alloyId83 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId83"
        }
    };
    __alloyId78.push($.__views.__alloyId83);
    $.__views.__alloyId84 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId84"
        }
    };
    __alloyId78.push($.__views.__alloyId84);
    $.__views.__alloyId85 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId85"
        }
    };
    __alloyId78.push($.__views.__alloyId85);
    $.__views.__alloyId86 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId86"
        }
    };
    __alloyId78.push($.__views.__alloyId86);
    $.__views.__alloyId76 = Ti.UI.createListSection({
        id: "__alloyId76"
    });
    $.__views.__alloyId76.items = __alloyId78;
    var __alloyId87 = [];
    __alloyId87.push($.__views.__alloyId76);
    $.__views.__alloyId75 = Ti.UI.createListView({
        sections: __alloyId87,
        top: "32%",
        id: "__alloyId75"
    });
    $.__views.Window_1.add($.__views.__alloyId75);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;