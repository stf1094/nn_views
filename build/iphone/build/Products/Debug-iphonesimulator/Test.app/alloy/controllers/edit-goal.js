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
    this.__controllerPath = "edit-goal";
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
        title: "Edit Goal"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId59 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId59"
    });
    $.__views.Window_1.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        top: 0,
        backgroundColor: "f9f9f9",
        height: "150px",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        fontWeight: "bold",
        text: "Edit Goal",
        top: "10%",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#444444",
        left: "5%",
        text: "Delete Goal",
        top: "10%",
        id: "__alloyId62"
    });
    $.__views.__alloyId60.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#f7941d",
        right: "5%",
        text: "Done",
        top: "10%",
        id: "__alloyId63"
    });
    $.__views.__alloyId60.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: "70px",
        id: "__alloyId64"
    });
    $.__views.__alloyId59.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Goal",
        width: "90%",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        height: "90px",
        id: "__alloyId66"
    });
    $.__views.__alloyId59.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        color: "#444444",
        height: "90px",
        left: "5%",
        top: 5,
        value: "Whatever the goal is currently",
        width: "650px",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: Ti.UI.SIZE,
        top: 20,
        id: "__alloyId68"
    });
    $.__views.__alloyId59.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        text: "Start Date",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createImageView({
        height: "90px",
        image: "/images/iphone/calendar-icon.png",
        left: 15,
        width: "90px",
        id: "__alloyId70"
    });
    $.__views.__alloyId68.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        height: "90px",
        width: "300px",
        id: "__alloyId71"
    });
    $.__views.__alloyId68.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId72"
    });
    $.__views.__alloyId59.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        text: "End Date",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createImageView({
        height: "90px",
        image: "/images/iphone/calendar-icon.png",
        left: 20,
        width: "90px",
        id: "__alloyId74"
    });
    $.__views.__alloyId72.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createTextField({
        backgroundColor: "#ececec",
        height: "90px",
        width: "300px",
        id: "__alloyId75"
    });
    $.__views.__alloyId72.add($.__views.__alloyId75);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;