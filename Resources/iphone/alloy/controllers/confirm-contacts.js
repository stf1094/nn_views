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
    this.__controllerPath = "confirm-contacts";
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
        id: "Window_1",
        backgroundColor: "#193441"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId9 = Ti.UI.createView(function() {
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
            id: "__alloyId9"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        top: "20%",
        left: "10%",
        width: "80%",
        text: "If you start today, you'll have to contact x people per day. Is this correct?",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createButton({
        height: "90px",
        left: "10%",
        selectedColor: "#193341",
        width: "80%",
        backgroundColor: "#ffffff",
        borderColor: "#193341",
        borderRadius: "10",
        borderWidth: "2",
        color: "#193341",
        title: "Yes, lets go with this!",
        top: 20,
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createButton({
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
        title: "No, choose more contacts",
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
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
        title: "Set a different start date",
        id: "__alloyId13"
    });
    $.__views.__alloyId9.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createImageView(function() {
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
            id: "__alloyId14"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId14);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;