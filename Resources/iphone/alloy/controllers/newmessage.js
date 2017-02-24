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
        text: "To:",
        left: "5%",
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
        text: "Send Via",
        top: "76%",
        left: "5%",
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        text: "New Message",
        fontWeight: "bold",
        top: "10%",
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        text: "Cancel",
        color: "#444444",
        top: "10%",
        right: "5%",
        id: "__alloyId79"
    });
    $.__views.__alloyId75.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createTextField({
        width: "600px",
        left: "15%",
        top: "35%",
        color: "#444444",
        backgroundColor: "#f9f9f9",
        height: "90px",
        id: "__alloyId80"
    });
    $.__views.__alloyId75.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "33%",
        width: Titanium.UI.FILL,
        id: "__alloyId81"
    });
    $.__views.__alloyId75.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        width: Titanium.UI.FILL,
        top: "66%",
        id: "__alloyId82"
    });
    $.__views.__alloyId75.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        width: Titanium.UI.FILL,
        top: "299px",
        id: "__alloyId83"
    });
    $.__views.__alloyId75.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createTextArea({
        value: "Compose Message",
        top: "27%",
        width: "90%",
        height: "30%",
        id: "__alloyId84"
    });
    $.__views.newmessage.add($.__views.__alloyId84);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;