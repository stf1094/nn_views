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
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "#f3f3f3",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId182 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId182"
    });
    $.__views.login.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/android/the-networkninjas-logo-lg.png",
            top: "30",
            width: "55%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            image: "/images/android/the-networkninjas-logo-lg.png",
            top: "30",
            width: "40%"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId183"
        });
        return o;
    }());
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: 30
            },
            color: "black",
            top: "20"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            color: "black"
        });
        Alloy.deepExtend(true, o, {
            text: "Log In",
            id: "__alloyId184"
        });
        return o;
    }());
    $.__views.__alloyId182.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "vertical",
            top: 10,
            backgroundColor: "white",
            height: "700px",
            width: "750px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "700px",
            width: "850px"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId185"
        });
        return o;
    }());
    $.__views.__alloyId182.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createTextField(function() {
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
            top: 40,
            hintText: "Username or Email",
            id: "__alloyId186"
        });
        return o;
    }());
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createTextField(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            top: 10,
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
            hintText: "Password",
            id: "__alloyId187"
        });
        return o;
    }());
    $.__views.__alloyId185.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createButton({
        top: 10,
        left: "9.78%",
        width: "80%",
        height: "90px",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "Log In",
        id: "__alloyId188"
    });
    $.__views.__alloyId185.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        top: 30,
        text: "Don't have an account?",
        id: "__alloyId189"
    });
    $.__views.__alloyId185.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createButton({
        top: 10,
        left: "9.78%",
        width: "80%",
        height: "90px",
        backgroundColor: "#8dc63f",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "Sign Up",
        id: "__alloyId190"
    });
    $.__views.__alloyId185.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        top: 25,
        text: "Forgot Password?",
        id: "__alloyId191"
    });
    $.__views.__alloyId182.add($.__views.__alloyId191);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;