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
    this.__controllerPath = "edit-task";
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
        id: "Window_1",
        title: "Edit Task"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId76 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId76"
    });
    $.__views.Window_1.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        top: 0,
        backgroundColor: "f9f9f9",
        height: "150px",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        fontWeight: "bold",
        text: "Edit Task",
        top: "10%",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#444444",
        left: "5%",
        text: "Delete Task",
        top: "10%",
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#f7941d",
        right: "5%",
        text: "Done",
        top: "10%",
        id: "__alloyId80"
    });
    $.__views.__alloyId77.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        height: "70px",
        id: "__alloyId81"
    });
    $.__views.__alloyId76.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Task",
        width: "90%",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        height: "90px",
        id: "__alloyId83"
    });
    $.__views.__alloyId76.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        color: "#444444",
        height: "90px",
        left: "5%",
        top: 5,
        value: "Whatever the task is currently",
        width: "650px",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: Ti.UI.SIZE,
        top: 20,
        id: "__alloyId85"
    });
    $.__views.__alloyId76.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        text: "Start Date",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createImageView({
        height: "90px",
        image: "/images/iphone/calendar-icon.png",
        left: 15,
        width: "90px",
        id: "__alloyId87"
    });
    $.__views.__alloyId85.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        height: "90px",
        width: "300px",
        id: "__alloyId88"
    });
    $.__views.__alloyId85.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId89"
    });
    $.__views.__alloyId76.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        text: "End Date",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createImageView({
        height: "90px",
        image: "/images/iphone/calendar-icon.png",
        left: 20,
        width: "90px",
        id: "__alloyId91"
    });
    $.__views.__alloyId89.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        height: "90px",
        width: "300px",
        id: "__alloyId92"
    });
    $.__views.__alloyId89.add($.__views.__alloyId92);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;