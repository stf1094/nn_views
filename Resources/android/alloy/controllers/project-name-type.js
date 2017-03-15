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
    $.__views.__alloyId275 = Ti.UI.createView({
        borderRadius: "10",
        left: "5%",
        right: "5%",
        top: "8%",
        height: "50%",
        width: "90%",
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId275"
    });
    $.__views.Window_1.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        top: "15%",
        left: "25",
        text: "Create a Project",
        id: "__alloyId276"
    });
    $.__views.__alloyId275.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        left: "25",
        text: "What would you like to name your project?",
        top: 5,
        id: "__alloyId277"
    });
    $.__views.__alloyId275.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        left: "25",
        text: "Ex: Achieve Your Next Rank",
        top: 5,
        id: "__alloyId278"
    });
    $.__views.__alloyId275.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createTextField({
        width: "600px",
        height: "100px",
        backgroundColor: "#ececec",
        borderRadius: "10",
        top: 15,
        id: "__alloyId279"
    });
    $.__views.__alloyId275.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createView({
        layout: "horizontal",
        left: "20",
        top: 35,
        id: "__alloyId280"
    });
    $.__views.__alloyId275.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId281"
    });
    $.__views.__alloyId280.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createButton({
        height: "90px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId282"
    });
    $.__views.__alloyId280.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createImageView({
        left: "41%",
        top: "1.5%",
        height: "150px",
        width: "150px",
        image: "/images/iphone/project-shuriken.png",
        id: "__alloyId283"
    });
    $.__views.Window_1.add($.__views.__alloyId283);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;