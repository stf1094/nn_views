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
    this.__controllerPath = "project-name-type";
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
        title: "Create Project",
        backgroundColor: "#193341",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId268 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            borderRadius: "10",
            left: "5%",
            right: "5%",
            top: "8%",
            height: "50%",
            width: "90%",
            layout: "vertical",
            backgroundColor: "white"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "5%",
            right: "5%",
            top: "8%",
            height: "35%",
            width: "90%"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId268"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: 30
            },
            top: "15%",
            left: "25"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            top: "22%",
            left: "7%"
        });
        Alloy.deepExtend(true, o, {
            text: "Create a Project",
            id: "__alloyId269"
        });
        return o;
    }());
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel(function() {
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
            text: "What would you like to name your project?",
            top: 5,
            id: "__alloyId270"
        });
        return o;
    }());
    $.__views.__alloyId268.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createLabel(function() {
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
            text: "Ex: Achieve Your Next Rank",
            top: 5,
            id: "__alloyId271"
        });
        return o;
    }());
    $.__views.__alloyId268.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createTextField(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
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
            top: 15,
            id: "__alloyId272"
        });
        return o;
    }());
    $.__views.__alloyId268.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createView(function() {
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
            id: "__alloyId273"
        });
        return o;
    }());
    $.__views.__alloyId268.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId274"
    });
    $.__views.__alloyId273.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId275"
    });
    $.__views.__alloyId273.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createImageView(function() {
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
            id: "__alloyId276"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId276);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;