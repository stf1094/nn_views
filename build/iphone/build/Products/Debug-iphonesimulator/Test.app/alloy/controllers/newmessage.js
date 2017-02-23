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
        height: "20%",
        top: "0%",
        width: "100%",
        id: "__alloyId44"
    });
    $.__views.newmessage.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "Label",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "50%",
        width: Titanium.UI.FILL,
        id: "__alloyId46"
    });
    $.__views.newmessage.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        width: Titanium.UI.FILL,
        top: "75%",
        id: "__alloyId47"
    });
    $.__views.newmessage.add($.__views.__alloyId47);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;