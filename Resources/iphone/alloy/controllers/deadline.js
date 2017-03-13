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
    $.__views.__alloyId42 = Ti.UI.createView(function() {
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
            id: "__alloyId42"
        });
        return o;
    }());
    $.__views.deadline.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        left: 25,
        text: "When is your deadline?",
        top: "15%",
        width: "80%",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: "80%",
        top: 20,
        id: "__alloyId44"
    });
    $.__views.__alloyId42.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "End Date",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createImageView({
        height: "90px",
        image: "/images/iphone/calendar-icon.png",
        left: 15,
        width: "90px",
        id: "__alloyId46"
    });
    $.__views.__alloyId44.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        height: "90px",
        width: "300px",
        id: "__alloyId47"
    });
    $.__views.__alloyId44.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "horizontal",
            left: "20"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "50"
        });
        Alloy.deepExtend(true, o, {
            left: 20,
            top: 35,
            id: "__alloyId48"
        });
        return o;
    }());
    $.__views.__alloyId42.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createImageView(function() {
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
            id: "__alloyId51"
        });
        return o;
    }());
    $.__views.deadline.add($.__views.__alloyId51);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;