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
    this.__controllerPath = "project-complete";
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
        backgroundColor: "#193341",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId253 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            borderRadius: "10",
            left: "5%",
            right: "5%",
            top: "8%",
            height: "65%",
            width: "90%",
            layout: "vertical",
            backgroundColor: "white"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "5%",
            right: "5%",
            top: "8%",
            height: "40%",
            width: "90%"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId253"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createLabel({
        font: {
            fontSize: 36
        },
        text: "Congratulations",
        left: 25,
        top: "15%",
        id: "__alloyId254"
    });
    $.__views.__alloyId253.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 14
        },
        text: "You've just created a project and are one step closer to achieving your goal of:",
        left: 25,
        width: "80%",
        id: "__alloyId255"
    });
    $.__views.__alloyId253.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "Place goal here",
        top: 20,
        width: "80%",
        id: "__alloyId256"
    });
    $.__views.__alloyId253.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createButton({
        left: "9.78%",
        width: "80%",
        height: "90px",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "Go to my Project",
        top: 35,
        id: "__alloyId257"
    });
    $.__views.__alloyId253.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createButton({
        top: 10,
        height: "90px",
        left: "10%",
        selectedColor: "#193341",
        width: "80%",
        backgroundColor: "#ffffff",
        borderColor: "#193341",
        borderRadius: "10",
        borderWidth: "2",
        color: "#193341",
        title: "Back to Dashboard",
        id: "__alloyId258"
    });
    $.__views.__alloyId253.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            left: "41%",
            top: "1.5%",
            height: "150px",
            width: "150px",
            image: "/images/iphone/project-shuriken.png"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "43%",
            top: "2.25%",
            height: "200px",
            width: "200px",
            image: "/images/iphone/project-shuriken.png"
        });
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/project-shuriken.png",
            id: "__alloyId259"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId259);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;