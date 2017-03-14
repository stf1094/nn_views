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
    this.__controllerPath = "create-tasks";
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
        title: "Add Tasks",
        backgroundColor: "#193341",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.View_1 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            left: "5%",
            right: "5%",
            top: "8%",
            height: "65%",
            width: "90%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "5%",
            right: "5%",
            top: "8%",
            height: "40%",
            width: "90%"
        });
        Alloy.deepExtend(true, o, {
            backgroundColor: "#ffffff",
            center: "100%",
            height: "59%",
            left: "5.07%",
            top: "8.19%",
            width: "90.00%",
            borderRadius: "10",
            id: "View_1"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.View_1);
    $.__views.ImageView_3 = Ti.UI.createImageView({
        left: "11.51%",
        top: "70.88%",
        image: "/images/iphone/plus-green.png",
        height: "5%",
        width: "6%",
        id: "ImageView_3"
    });
    $.__views.View_1.add($.__views.ImageView_3);
    $.__views.Label_3 = Ti.UI.createLabel({
        text: "Add another task",
        left: "19.07%",
        top: "71.22%",
        font: {
            fontSize: "3.5%",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#444444",
        id: "Label_3"
    });
    $.__views.View_1.add($.__views.Label_3);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "81.19%",
        height: "11.98%",
        borderRadius: "10",
        borderColor: "#ECECEC",
        borderWidth: "1",
        left: "9.78%",
        top: "39.67%",
        color: "#444444",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.View_1.add($.__views.TextField_1);
    $.__views.TextField_2 = Ti.UI.createTextField({
        width: "81.48%",
        height: "11.98%",
        borderRadius: "10",
        borderColor: "#ECECEC",
        borderWidth: "1",
        left: "9.78%",
        top: "54.41%",
        color: "#444444",
        backgroundColor: "#ececec",
        id: "TextField_2"
    });
    $.__views.View_1.add($.__views.TextField_2);
    $.__views.Label_2 = Ti.UI.createLabel({
        text: "What are your tasks for this project?",
        left: "9.93%",
        top: "30.99%",
        font: {
            fontSize: "3.5%",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        highlightedColor: "#000000",
        color: "#444444",
        id: "Label_2"
    });
    $.__views.View_1.add($.__views.Label_2);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        left: "10%",
        top: "17.91%",
        height: "11%",
        width: "50%",
        id: "ImageView_2",
        image: "/images/iphone/addtasks.png"
    });
    $.__views.View_1.add($.__views.ImageView_2);
    $.__views.__alloyId33 = Ti.UI.createButton({
        height: "90px",
        width: "39%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        selectedBackgroundColor: "#e5790e",
        title: "BACK",
        left: "10%",
        top: "83%",
        id: "__alloyId33"
    });
    $.__views.View_1.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createButton({
        height: "90px",
        width: "39%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        selectedBackgroundColor: "#e5790e",
        title: "NEXT",
        right: "10%",
        top: "83%",
        id: "__alloyId34"
    });
    $.__views.View_1.add($.__views.__alloyId34);
    $.__views.ImageView_1 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            left: "41%",
            top: "1.5%",
            height: "150px",
            width: "150px",
            image: "/images/iphone/project-shuriken.png"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "43%",
            top: "2.25%",
            height: "200px",
            width: "200px",
            image: "/images/iphone/project-shuriken.png"
        });
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/project-shuriken.png",
            layout: "absolute",
            visible: "true",
            height: "12%",
            left: "40%",
            top: "2.25%",
            width: "21%",
            id: "ImageView_1"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.ImageView_1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;