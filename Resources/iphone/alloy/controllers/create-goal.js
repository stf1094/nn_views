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
    this.__controllerPath = "create-goal";
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
        backgroundColor: "#193441",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId23 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            borderRadius: "10",
            left: "5%",
            right: "5%",
            top: "8%",
            height: "55%",
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
            id: "__alloyId23"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: 36
            },
            top: "15%",
            left: "25"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            top: "20%",
            left: "7%"
        });
        Alloy.deepExtend(true, o, {
            text: "Set a Goal",
            id: "__alloyId24"
        });
        return o;
    }());
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: 14
            },
            left: "25"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "7%"
        });
        Alloy.deepExtend(true, o, {
            text: "What would you like to achieve?",
            top: 5,
            id: "__alloyId25"
        });
        return o;
    }());
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 14
        },
        text: "Ex: Get 15 Customers or",
        left: 50,
        id: "__alloyId26"
    });
    $.__views.__alloyId23.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Recruit 10 New Associates",
        left: 73,
        id: "__alloyId27"
    });
    $.__views.__alloyId23.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTextField(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            top: 10,
            font: {
                fontSize: 14
            },
            width: "600px",
            height: "100px",
            backgroundColor: "#ececec",
            borderRadius: "10"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "84%",
            height: "100px",
            backgroundColor: "#ececec",
            borderRadius: "10",
            left: "7%"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId28"
        });
        return o;
    }());
    $.__views.__alloyId23.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "horizontal",
            left: "20"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "50"
        });
        Alloy.deepExtend(true, o, {
            top: 35,
            id: "__alloyId29"
        });
        return o;
    }());
    $.__views.__alloyId23.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 15,
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createImageView(function() {
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
            id: "__alloyId32"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId32);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;