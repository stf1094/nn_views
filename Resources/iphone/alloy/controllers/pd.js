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
    $.__views.contactInfo = Ti.UI.createScrollView({
        layout: "vertical",
        top: 0,
        id: "contactInfo"
    });
    $.__views.Window_1.add($.__views.contactInfo);
    $.__views.__alloyId85 = Ti.UI.createImageView({
        image: "/images/iphone/project-db-cover.png",
        left: "0.00%",
        top: "0.00%",
        id: "__alloyId85"
    });
    $.__views.contactInfo.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel(function() {
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
            color: "white",
            text: "Project Name",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: "5%",
            id: "__alloyId86"
        });
        return o;
    }());
    $.__views.contactInfo.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createButton({
        height: "8%",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Contacts",
        left: "5%",
        top: "19%",
        id: "__alloyId87"
    });
    $.__views.contactInfo.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createButton({
        height: "8%",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Hot List",
        right: "5%",
        top: "19%",
        id: "__alloyId88"
    });
    $.__views.contactInfo.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        height: "8%",
        top: "30%",
        width: "100%",
        backgroundColor: "#ececec",
        id: "__alloyId89"
    });
    $.__views.contactInfo.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "TASKS",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        height: "8%",
        top: "65%",
        width: "100%",
        backgroundColor: "#ececec",
        id: "__alloyId91"
    });
    $.__views.contactInfo.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "GOALS",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;