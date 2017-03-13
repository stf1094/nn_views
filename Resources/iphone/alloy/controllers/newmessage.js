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
    $.__views.__alloyId180 = Ti.UI.createView({
        top: 0,
        backgroundColor: "#f9f9f9",
        height: "300px",
        width: "100%",
        id: "__alloyId180"
    });
    $.__views.newmessage.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#444444",
        left: "5%",
        text: "To:",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#444444",
        left: "5%",
        text: "Send Via",
        top: "76%",
        id: "__alloyId182"
    });
    $.__views.__alloyId180.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
        fontWeight: "bold",
        text: "New Message",
        top: "10%",
        id: "__alloyId183"
    });
    $.__views.__alloyId180.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#444444",
        left: "5%",
        text: "Cancel",
        top: "10%",
        id: "__alloyId184"
    });
    $.__views.__alloyId180.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "#f7941d",
        right: "5%",
        text: "Send",
        top: "10%",
        id: "__alloyId185"
    });
    $.__views.__alloyId180.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createTextField(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "600px",
            height: "90px",
            left: "15%",
            top: "35%",
            hintText: "Name or Email",
            color: "#444444",
            backgroundColor: "f9f9f9"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "700px",
            height: "90px",
            left: "10%",
            top: "35%",
            hintText: "Name or Email",
            color: "#444444",
            backgroundColor: "f9f9f9"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId186"
        });
        return o;
    }());
    $.__views.__alloyId180.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createTextField(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            top: "67%",
            left: "25%",
            width: "600px",
            height: "90px",
            hintText: "Message, Email, or Facebook",
            color: "#444444",
            backgroundColor: "f9f9f9"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            top: "67%",
            left: "15%",
            width: "700px",
            height: "90px",
            hintText: "Message, Email, or Facebook",
            color: "#444444",
            backgroundColor: "f9f9f9"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId187"
        });
        return o;
    }());
    $.__views.__alloyId180.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "33%",
        width: Titanium.UI.FILL,
        id: "__alloyId188"
    });
    $.__views.__alloyId180.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "66%",
        width: Titanium.UI.FILL,
        id: "__alloyId189"
    });
    $.__views.__alloyId180.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createImageView({
        image: "/images/iphone/divider-line-grey.png",
        top: "99%",
        width: Titanium.UI.FILL,
        id: "__alloyId190"
    });
    $.__views.__alloyId180.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createTextArea(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: 14
            },
            width: "90%",
            height: "30%",
            top: "27%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "90%",
            height: "30%",
            top: "18%"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId191"
        });
        return o;
    }());
    $.__views.newmessage.add($.__views.__alloyId191);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;