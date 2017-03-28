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
    this.__controllerPath = "project-complete";
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
        backgroundColor: "#193341",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId243 = Ti.UI.createView({
        borderRadius: "10",
        left: "5%",
        right: "5%",
        top: "8%",
        height: "65%",
        width: "90%",
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId243"
    });
    $.__views.Window_1.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        font: {
            fontSize: 36
        },
        color: "black",
        text: "Congratulations",
        left: 25,
        top: "15%",
        id: "__alloyId244"
    });
    $.__views.__alloyId243.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 14
        },
        color: "black",
        text: "You've just created a project and are one step closer to achieving your goal of:",
        left: 25,
        width: "80%",
        id: "__alloyId245"
    });
    $.__views.__alloyId243.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        color: "black",
        text: "Place goal here",
        top: 20,
        width: "80%",
        id: "__alloyId246"
    });
    $.__views.__alloyId243.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createButton({
        left: "9.78%",
        width: "80%",
        height: "150px",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "Go to my Project",
        top: 35,
        id: "__alloyId247"
    });
    $.__views.__alloyId243.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createButton({
        top: 10,
        height: "150px",
        left: "10%",
        selectedColor: "#193341",
        width: "80%",
        backgroundColor: "#ffffff",
        borderColor: "#193341",
        borderRadius: "10",
        borderWidth: "2",
        color: "#193341",
        title: "Back to Dashboard",
        id: "__alloyId248"
    });
    $.__views.__alloyId243.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createImageView({
        left: "43%",
        top: "3.5%",
        height: "200px",
        width: "200px",
        image: "/images/iphone/project-shuriken.png",
        id: "__alloyId249"
    });
    $.__views.Window_1.add($.__views.__alloyId249);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;