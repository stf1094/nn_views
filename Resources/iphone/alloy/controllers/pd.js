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
    this.__controllerPath = "pd";
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
        id: "Window_1",
        title: "Project Dashboard"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        image: "/images/iphone/project-db-cover.png",
        left: "0.00%",
        top: "0.00%",
        id: "__alloyId54"
    });
    $.__views.Window_1.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel(function() {
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
            color: "white",
            text: "Project Name",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: "5%",
            id: "__alloyId55"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createButton({
        height: "8%",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Contacts",
        left: "5%",
        top: "19%",
        id: "__alloyId56"
    });
    $.__views.Window_1.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createButton({
        height: "8%",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Hot List",
        right: "5%",
        top: "19%",
        id: "__alloyId57"
    });
    $.__views.Window_1.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: "8%",
        top: "30%",
        width: "100%",
        backgroundColor: "#ececec",
        id: "__alloyId58"
    });
    $.__views.Window_1.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "TASKS",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: "8%",
        top: "65%",
        width: "100%",
        backgroundColor: "#ececec",
        id: "__alloyId60"
    });
    $.__views.Window_1.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "GOALS",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;