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
    this.__controllerPath = "start";
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
    $.__views.start = Ti.UI.createWindow({
        backgroundColor: "#193441",
        id: "start"
    });
    $.__views.start && $.addTopLevelView($.__views.start);
    $.__views.__alloyId334 = Ti.UI.createView(function() {
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
            id: "__alloyId334"
        });
        return o;
    }());
    $.__views.start.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: 30
            },
            top: "15%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            top: "25%"
        });
        Alloy.deepExtend(true, o, {
            text: "When would you like to start?",
            left: 35,
            width: "85%",
            id: "__alloyId335"
        });
        return o;
    }());
    $.__views.__alloyId334.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: "85%",
        top: 20,
        id: "__alloyId336"
    });
    $.__views.__alloyId334.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Start Date",
        id: "__alloyId337"
    });
    $.__views.__alloyId336.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createImageView({
        height: "90px",
        image: "/images/iphone/calendar-icon.png",
        left: 15,
        width: "90px",
        id: "__alloyId338"
    });
    $.__views.__alloyId336.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        height: "90px",
        width: "300px",
        id: "__alloyId339"
    });
    $.__views.__alloyId336.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createView(function() {
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
            id: "__alloyId340"
        });
        return o;
    }());
    $.__views.__alloyId334.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId341"
    });
    $.__views.__alloyId340.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId342"
    });
    $.__views.__alloyId340.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createImageView(function() {
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
            id: "__alloyId343"
        });
        return o;
    }());
    $.__views.start.add($.__views.__alloyId343);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;