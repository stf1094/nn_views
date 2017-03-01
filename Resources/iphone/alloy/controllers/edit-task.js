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
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId35"
    });
    $.__views.Window_1.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        top: 0,
        backgroundColor: "f9f9f9",
        height: "150px",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        fontWeight: "bold",
        text: "Edit Task",
        top: "10%",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#444444",
        left: "5%",
        text: "Delete Task",
        top: "10%",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#f7941d",
        right: "5%",
        text: "Done",
        top: "10%",
        id: "__alloyId39"
    });
    $.__views.__alloyId36.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        height: "70px",
        id: "__alloyId40"
    });
    $.__views.__alloyId35.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Task",
        width: "90%",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        height: "90px",
        id: "__alloyId42"
    });
    $.__views.__alloyId35.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        color: "#444444",
        height: "90px",
        left: "5%",
        top: 5,
        value: "Whatever the task is currently",
        width: "650px",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: Ti.UI.SIZE,
        top: 20,
        id: "__alloyId44"
    });
    $.__views.__alloyId35.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        text: "Start Date",
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
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId48"
    });
    $.__views.__alloyId35.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        text: "End Date",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createImageView({
        height: "90px",
        image: "/images/iphone/calendar-icon.png",
        left: 20,
        width: "90px",
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        height: "90px",
        width: "300px",
        id: "__alloyId51"
    });
    $.__views.__alloyId48.add($.__views.__alloyId51);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;