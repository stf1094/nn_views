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
    this.__controllerPath = "login";
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
        title: "Window",
        id: "Window_1",
        backgroundColor: "#f3f3f3"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId172 = Ti.UI.createImageView({
        image: "/images/thenetworkninjas-logo.png",
        top: 30,
        id: "__alloyId172"
    });
    $.__views.Window_1.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: "30",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "45",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.deepExtend(true, o, {
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            text: "Log In",
            top: "24%",
            width: "100%",
            id: "__alloyId173"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "700px",
            width: "750px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "700px",
            width: "850px"
        });
        Alloy.deepExtend(true, o, {
            top: "30%",
            backgroundColor: "white",
            borderColor: "#e1e1e1",
            id: "__alloyId174"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createTextField(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "600px",
            height: "100px",
            backgroundColor: "#ececec",
            left: "10%",
            borderRadius: "10"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "80%",
            height: "100px",
            backgroundColor: "#ececec",
            borderRadius: "10"
        });
        Alloy.deepExtend(true, o, {
            top: "14%",
            id: "__alloyId175"
        });
        return o;
    }());
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createTextField(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "600px",
            height: "100px",
            backgroundColor: "#ececec",
            left: "10%",
            borderRadius: "10"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "80%",
            height: "100px",
            backgroundColor: "#ececec",
            borderRadius: "10"
        });
        Alloy.deepExtend(true, o, {
            top: "31%",
            id: "__alloyId176"
        });
        return o;
    }());
    $.__views.__alloyId174.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createButton({
        left: "9.78%",
        width: "80%",
        height: "106px",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "LOG IN",
        top: "50%",
        id: "__alloyId177"
    });
    $.__views.__alloyId174.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createButton({
        left: "9.78%",
        width: "80%",
        height: "106px",
        backgroundColor: "#8dc63f",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "SIGN UP",
        top: "68%",
        id: "__alloyId178"
    });
    $.__views.__alloyId174.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Forgot Password?",
        top: "90%",
        id: "__alloyId179"
    });
    $.__views.__alloyId174.add($.__views.__alloyId179);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;