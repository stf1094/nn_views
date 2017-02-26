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
    this.__controllerPath = "newmessage";
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
    $.__views.newmessage = Ti.UI.createWindow({
        title: "New Message",
        id: "newmessage"
    });
    $.__views.newmessage && $.addTopLevelView($.__views.newmessage);
    $.__views.__alloyId75 = Ti.UI.createView({
        backgroundColor: "#f9f9f9",
        height: "300px",
        top: "0%",
        width: "100%",
        id: "__alloyId75"
    });
    $.__views.newmessage.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "#444444",
        left: "5%",
        text: "To:",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "#444444",
        left: "5%",
        text: "Send Via",
        top: "76%",
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        fontWeight: "bold",
        text: "New Message",
        top: "10%",
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
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
        id: "__alloyId79"
    });
    $.__views.__alloyId75.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "#f7941d",
        right: "5%",
        text: "Send",
        top: "10%",
        id: "__alloyId80"
    });
    $.__views.__alloyId75.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createTextField({
        hintText: "Name, Email, or Topic",
        backgroundColor: "#f9f9f9",
        color: "#444444",
        height: "90px",
        left: "15%",
        top: "35%",
        width: "600px",
        id: "__alloyId81"
    });
    $.__views.__alloyId75.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "33%",
        width: Titanium.UI.FILL,
        id: "__alloyId82"
    });
    $.__views.__alloyId75.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "66%",
        width: Titanium.UI.FILL,
        id: "__alloyId83"
    });
    $.__views.__alloyId75.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "99%",
        width: Titanium.UI.FILL,
        id: "__alloyId84"
    });
    $.__views.__alloyId75.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createTextArea({
        height: "30%",
        top: "27%",
        width: "90%",
        id: "__alloyId85"
    });
    $.__views.newmessage.add($.__views.__alloyId85);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;