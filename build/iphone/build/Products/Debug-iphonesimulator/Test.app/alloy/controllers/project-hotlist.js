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
    $.__views.__alloyId56 = Ti.UI.createImageView({
        image: "/images/iphone/ui-hotlist-cover.png",
        top: "0%",
        id: "__alloyId56"
    });
    $.__views.Window_1.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        height: "7%",
        top: "25%",
        id: "__alloyId57"
    });
    $.__views.Window_1.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel(function() {
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
            id: "__alloyId58"
        });
        return o;
    }());
    $.__views.__alloyId57.add($.__views.__alloyId58);
    var __alloyId62 = [];
    $.__views.__alloyId63 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId63"
        }
    };
    __alloyId62.push($.__views.__alloyId63);
    $.__views.__alloyId64 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId64"
        }
    };
    __alloyId62.push($.__views.__alloyId64);
    $.__views.__alloyId65 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId65"
        }
    };
    __alloyId62.push($.__views.__alloyId65);
    $.__views.__alloyId66 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId66"
        }
    };
    __alloyId62.push($.__views.__alloyId66);
    $.__views.__alloyId67 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId67"
        }
    };
    __alloyId62.push($.__views.__alloyId67);
    $.__views.__alloyId68 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId68"
        }
    };
    __alloyId62.push($.__views.__alloyId68);
    $.__views.__alloyId69 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId69"
        }
    };
    __alloyId62.push($.__views.__alloyId69);
    $.__views.__alloyId70 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId70"
        }
    };
    __alloyId62.push($.__views.__alloyId70);
    $.__views.__alloyId60 = Ti.UI.createListSection({
        id: "__alloyId60"
    });
    $.__views.__alloyId60.items = __alloyId62;
    var __alloyId71 = [];
    __alloyId71.push($.__views.__alloyId60);
    $.__views.__alloyId59 = Ti.UI.createListView({
        sections: __alloyId71,
        top: "32%",
        id: "__alloyId59"
    });
    $.__views.Window_1.add($.__views.__alloyId59);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;