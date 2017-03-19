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
    $.__views.__alloyId344 = Ti.UI.createView(function() {
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
            id: "__alloyId344"
        });
        return o;
    }());
    $.__views.start.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: 30
            },
            top: "15%",
            left: "25"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            top: "25%",
            left: "7%"
        });
        Alloy.deepExtend(true, o, {
            text: "When would you like to start?",
            width: "85%",
            id: "__alloyId345"
        });
        return o;
    }());
    $.__views.__alloyId344.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: "85%",
        top: 20,
        id: "__alloyId346"
    });
    $.__views.__alloyId344.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Start Date",
        id: "__alloyId347"
    });
    $.__views.__alloyId346.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createImageView({
        height: "90px",
        width: "90px",
        left: "15",
        image: "/images/iphone/calendar-icon.png",
        id: "__alloyId348"
    });
    $.__views.__alloyId346.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createTextField({
        height: "90px",
        width: "300px",
        backgroundColor: "#ececec",
        id: "__alloyId349"
    });
    $.__views.__alloyId346.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createView(function() {
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
            id: "__alloyId350"
        });
        return o;
    }());
    $.__views.__alloyId344.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId351"
    });
    $.__views.__alloyId350.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId352"
    });
    $.__views.__alloyId350.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createImageView(function() {
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
            id: "__alloyId353"
        });
        return o;
    }());
    $.__views.start.add($.__views.__alloyId353);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;