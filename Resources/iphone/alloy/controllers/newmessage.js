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
    $.__views.__alloyId54 = Ti.UI.createView({
        backgroundColor: "#f9f9f9",
        height: "300px",
        top: "0%",
        width: "100%",
        id: "__alloyId54"
    });
    $.__views.newmessage.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "#444444",
        text: "To:",
        left: "5%",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
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
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        text: "New Message",
        fontWeight: "bold",
        top: "10%",
        id: "__alloyId57"
    });
    $.__views.__alloyId54.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        text: "Cancel",
        color: "#444444",
        top: "10%",
        right: "5%",
        id: "__alloyId58"
    });
    $.__views.__alloyId54.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createTextField({
        width: "600px",
        left: "15%",
        top: "35%",
        color: "#444444",
        backgroundColor: "#f9f9f9",
        height: "90px",
        id: "__alloyId59"
    });
    $.__views.__alloyId54.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "33%",
        width: Titanium.UI.FILL,
        id: "__alloyId60"
    });
    $.__views.__alloyId54.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        width: Titanium.UI.FILL,
        top: "66%",
        id: "__alloyId61"
    });
    $.__views.__alloyId54.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        width: Titanium.UI.FILL,
        top: "299px",
        id: "__alloyId62"
    });
    $.__views.__alloyId54.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTextArea({
        value: "Compose Message",
        top: "27%",
        width: "90%",
        height: "30%",
        id: "__alloyId63"
    });
    $.__views.newmessage.add($.__views.__alloyId63);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;