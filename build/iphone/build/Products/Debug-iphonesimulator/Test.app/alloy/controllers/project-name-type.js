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
    this.__controllerPath = "project-name-type";
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
        title: "Create Project",
        backgroundColor: "#193341",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.View_1 = Ti.UI.createView({
        left: "5.07%",
        right: "5%",
        top: "8.11%",
        height: "72.53%",
        width: "90.00%",
        backgroundColor: "#ffffff",
        center: "100%",
        borderRadius: "10",
        id: "View_1"
    });
    $.__views.Window_1.add($.__views.View_1);
    $.__views.Label_2 = Ti.UI.createLabel({
        text: "What would you like to name your project?",
        left: "10%",
        top: "23.73%",
        height: "7.47%",
        width: "76.74%",
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#444444",
        id: "Label_2"
    });
    $.__views.View_1.add($.__views.Label_2);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "80%",
        height: "10%",
        borderRadius: "10",
        borderColor: "#E5E5E5",
        borderWidth: "0",
        left: "9.93%",
        top: "33.26%",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.View_1.add($.__views.TextField_1);
    $.__views.Label_3 = Ti.UI.createLabel({
        text: "Is it a personal or professional project?",
        left: "10%",
        top: "46%",
        "class": "text1",
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        height: "7.32%",
        width: "78.52%",
        color: "#444444",
        id: "Label_3"
    });
    $.__views.View_1.add($.__views.Label_3);
    $.__views.__alloyId72 = Ti.UI.createButton({
        height: "8%",
        left: "10%",
        selectedColor: "#193341",
        width: "80%",
        font: {
            fontSize: "20",
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        backgroundColor: "#ffffff",
        borderColor: "#193341",
        borderRadius: "10",
        borderWidth: "2",
        color: "#193341",
        title: "Personal",
        top: "57%",
        id: "__alloyId72"
    });
    $.__views.View_1.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createButton({
        height: "8%",
        left: "10%",
        selectedColor: "#193341",
        width: "80%",
        font: {
            fontSize: "20",
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        backgroundColor: "#ffffff",
        borderColor: "#193341",
        borderRadius: "10",
        borderWidth: "2",
        color: "#193341",
        title: "Professional",
        top: "68%",
        id: "__alloyId73"
    });
    $.__views.View_1.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createButton({
        height: "10%",
        width: "39%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        selectedBackgroundColor: "#e5790e",
        title: "NEXT",
        left: "52%",
        top: "83%",
        id: "__alloyId74"
    });
    $.__views.View_1.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createButton({
        height: "10%",
        width: "39%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        selectedBackgroundColor: "#e5790e",
        title: "BACK",
        left: "10%",
        top: "83%",
        id: "__alloyId75"
    });
    $.__views.View_1.add($.__views.__alloyId75);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        left: "9.48%",
        top: "13.30%",
        height: "9%",
        width: "75%",
        id: "ImageView_2",
        image: "images/iphone/create-project.png"
    });
    $.__views.View_1.add($.__views.ImageView_2);
    $.__views.ImageView_1 = Ti.UI.createImageView({
        left: "40%",
        top: "2.5%",
        height: "12%",
        width: "21%",
        image: "/images/iphone/project-shuriken.png",
        id: "ImageView_1"
    });
    $.__views.Window_1.add($.__views.ImageView_1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;