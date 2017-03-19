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
    this.__controllerPath = "deadline";
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
    $.__views.deadline = Ti.UI.createWindow({
        backgroundColor: "#193441",
        id: "deadline"
    });
    $.__views.deadline && $.addTopLevelView($.__views.deadline);
    $.__views.__alloyId51 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
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
            borderRadius: 10,
            id: "__alloyId51"
        });
        return o;
    }());
    $.__views.deadline.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: 24
            },
            top: "15%",
            left: "25"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            top: "22%",
            left: "8%"
        });
        Alloy.deepExtend(true, o, {
            text: "Set a Deadline to Complete your Project",
            width: "80%",
            id: "__alloyId52"
        });
        return o;
    }());
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: "80%",
        top: 20,
        id: "__alloyId53"
    });
    $.__views.__alloyId51.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "End Date",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createImageView({
        height: "90px",
        width: "90px",
        left: 15,
        image: "/images/iphone/calendar-icon.png",
        id: "__alloyId55"
    });
    $.__views.__alloyId53.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createTextField({
        height: "90px",
        width: "300px",
        backgroundColor: "#ececec",
        id: "__alloyId56"
    });
    $.__views.__alloyId53.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView(function() {
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
            id: "__alloyId57"
        });
        return o;
    }());
    $.__views.__alloyId51.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId59"
    });
    $.__views.__alloyId57.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createImageView(function() {
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
            id: "__alloyId60"
        });
        return o;
    }());
    $.__views.deadline.add($.__views.__alloyId60);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;