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
    this.__controllerPath = "add-contacts";
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
        title: "Add Contacts",
        backgroundColor: "#193341",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId0 = Ti.UI.createView({
        borderRadius: "10",
        left: "5%",
        right: "5%",
        top: "8%",
        height: "90%",
        width: "90%",
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId0"
    });
    $.__views.Window_1.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        top: "9%",
        left: "25",
        text: "Add Your Contacts",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 14
        },
        text: "Who are you going to contact to achieve this goal?",
        left: "7%",
        width: "80%",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 14
        },
        text: "You've selected x/100 contacts",
        left: "7%",
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "white",
        height: "54%",
        id: "__alloyId4"
    });
    $.__views.__alloyId0.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "horizontal",
        left: "20",
        top: 35,
        id: "__alloyId5"
    });
    $.__views.__alloyId0.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createImageView({
        left: "41%",
        top: "1.5%",
        height: "150px",
        width: "150px",
        image: "/images/iphone/project-shuriken.png",
        id: "__alloyId8"
    });
    $.__views.Window_1.add($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;