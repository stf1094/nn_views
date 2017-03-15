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
    $.__views.__alloyId340 = Ti.UI.createView({
        borderRadius: "10",
        left: "5%",
        right: "5%",
        top: "8%",
        height: "50%",
        width: "90%",
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId340"
    });
    $.__views.start.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        top: "15%",
        left: "25",
        text: "When would you like to start?",
        width: "85%",
        id: "__alloyId341"
    });
    $.__views.__alloyId340.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: "85%",
        top: 20,
        id: "__alloyId342"
    });
    $.__views.__alloyId340.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Start Date",
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createImageView({
        height: "90px",
        image: "/images/iphone/calendar-icon.png",
        left: 15,
        width: "90px",
        id: "__alloyId344"
    });
    $.__views.__alloyId342.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        height: "90px",
        width: "300px",
        id: "__alloyId345"
    });
    $.__views.__alloyId342.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createView({
        layout: "horizontal",
        left: "20",
        top: 35,
        id: "__alloyId346"
    });
    $.__views.__alloyId340.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId347"
    });
    $.__views.__alloyId346.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId348"
    });
    $.__views.__alloyId346.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createImageView({
        left: "41%",
        top: "1.5%",
        height: "150px",
        width: "150px",
        image: "/images/iphone/project-shuriken.png",
        id: "__alloyId349"
    });
    $.__views.start.add($.__views.__alloyId349);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;