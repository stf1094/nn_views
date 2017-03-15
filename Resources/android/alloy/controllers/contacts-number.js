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
    this.__controllerPath = "contacts-number";
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
    $.__views.__alloyId15 = Ti.UI.createView({
        borderRadius: "10",
        left: "5%",
        right: "5%",
        top: "8%",
        height: "50%",
        width: "90%",
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId15"
    });
    $.__views.Window_1.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        top: "15%",
        left: 25,
        text: "How many contacts?",
        width: "85%",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        left: 25,
        text: "How many people are you going to contact to reach this goal?",
        top: 5,
        width: "80%",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createTextField({
        width: "600px",
        height: "100px",
        backgroundColor: "#ececec",
        left: "6%",
        borderRadius: "10",
        hintText: "Enter a number",
        top: 20,
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "horizontal",
        left: "20",
        top: 35,
        id: "__alloyId19"
    });
    $.__views.__alloyId15.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        left: "41%",
        top: "1.5%",
        height: "150px",
        width: "150px",
        image: "/images/iphone/project-shuriken.png",
        id: "__alloyId22"
    });
    $.__views.Window_1.add($.__views.__alloyId22);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;