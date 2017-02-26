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
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId18"
    });
    $.__views.Window_1.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        top: 0,
        backgroundColor: "f9f9f9",
        height: "150px",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        fontWeight: "bold",
        text: "Edit Goal",
        top: "10%",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "#444444",
        left: "5%",
        text: "Cancel",
        top: "10%",
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "#f7941d",
        right: "5%",
        text: "Done",
        top: "10%",
        id: "__alloyId22"
    });
    $.__views.__alloyId19.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        height: "70px",
        id: "__alloyId23"
    });
    $.__views.__alloyId18.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Goal",
        width: "90%",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        height: "90px",
        id: "__alloyId25"
    });
    $.__views.__alloyId18.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTextField({
        backgroundColor: "#f9f9f9",
        color: "#444444",
        height: "90px",
        left: "5%",
        top: 5,
        width: "650px",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: Ti.UI.SIZE,
        top: 20,
        id: "__alloyId27"
    });
    $.__views.__alloyId18.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        text: "Start Date",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTextField({
        left: 10,
        borderColor: "#444444",
        height: "90px",
        width: "300px",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        width: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId30"
    });
    $.__views.__alloyId18.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        text: "End Date",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTextField({
        left: 15,
        borderColor: "#444444",
        height: "90px",
        width: "300px",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;