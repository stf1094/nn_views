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
    this.__controllerPath = "project-complete";
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
        backgroundColor: "#193341",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.View_1 = Ti.UI.createView({
        left: "5.33%",
        right: "5%",
        top: "8.27%",
        height: "52.37%",
        width: "90.00%",
        backgroundColor: "#ffffff",
        center: "100%",
        borderRadius: "10",
        id: "View_1"
    });
    $.__views.Window_1.add($.__views.View_1);
    $.__views.Label_2 = Ti.UI.createLabel({
        text: "You've just created a project and are one step closer to becoming a Network Ninja!",
        left: "9.05%",
        top: "34.66%",
        color: "#444444",
        font: {
            fontSize: "3.5%",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        height: "18.40%",
        width: "81.16%",
        id: "Label_2"
    });
    $.__views.View_1.add($.__views.Label_2);
    $.__views.Button_1 = Ti.UI.createButton({
        left: "8.75%",
        width: "81.48%",
        height: "12%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        top: "59.66%",
        font: {
            fontSize: "20",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        title: "Go to my Project",
        id: "Button_1"
    });
    $.__views.View_1.add($.__views.Button_1);
    $.__views.Button_2 = Ti.UI.createButton({
        height: "11.99%",
        left: "8.90%",
        selectedColor: "#193341",
        width: "81.33%",
        font: {
            fontSize: "20",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "bold"
        },
        backgroundColor: "#ffffff",
        borderColor: "#193341",
        borderRadius: "10",
        borderWidth: "2",
        color: "#193341",
        title: "Back to Dashboard",
        top: "75.00%",
        id: "Button_2"
    });
    $.__views.View_1.add($.__views.Button_2);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        left: "10.37%",
        top: "23.39%",
        height: "11.5%",
        width: "80%",
        id: "ImageView_2",
        image: "/images/iphone/congratulations.png"
    });
    $.__views.View_1.add($.__views.ImageView_2);
    $.__views.ImageView_1 = Ti.UI.createImageView({
        left: "40%",
        top: "2.25%",
        height: "12%",
        width: "21%",
        id: "ImageView_1",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.Window_1.add($.__views.ImageView_1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;