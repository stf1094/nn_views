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
    $.__views.__alloyId44 = Ti.UI.createView({
        backgroundColor: "#f9f9f9",
        height: "300px",
        top: "0%",
        width: "100%",
        id: "__alloyId44"
    });
    $.__views.newmessage.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "#444444",
        text: "To:",
        left: "5%",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
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
        id: "__alloyId46"
    });
    $.__views.__alloyId44.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "New Message",
        fontWeight: "bold",
        top: "10%",
        id: "__alloyId47"
    });
    $.__views.__alloyId44.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        text: "Cancel",
        color: "#444444",
        top: "10%",
        right: "5%",
        id: "__alloyId48"
    });
    $.__views.__alloyId44.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createTextField({
        width: "600px",
        left: "15%",
        top: "35%",
        color: "#444444",
        backgroundColor: "#f9f9f9",
        height: "90px",
        id: "__alloyId49"
    });
    $.__views.__alloyId44.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "33%",
        width: Titanium.UI.FILL,
        id: "__alloyId50"
    });
    $.__views.__alloyId44.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        width: Titanium.UI.FILL,
        top: "66%",
        id: "__alloyId51"
    });
    $.__views.__alloyId44.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        width: Titanium.UI.FILL,
        top: "299px",
        id: "__alloyId52"
    });
    $.__views.__alloyId44.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createTextArea({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        value: "Compose Message",
        top: "27%",
        width: "90%",
        height: "30%",
        id: "__alloyId53"
    });
    $.__views.newmessage.add($.__views.__alloyId53);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;