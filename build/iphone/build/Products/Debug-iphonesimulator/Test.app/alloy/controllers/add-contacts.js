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
    this.__controllerPath = "add-contacts";
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
        title: "Add Contacts",
        backgroundColor: "#193341",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.View_1 = Ti.UI.createView({
        left: "5.07%",
        right: "5%",
        top: "8.43%",
        height: "89.00%",
        width: "90.00%",
        backgroundColor: "#ffffff",
        center: "100%",
        borderRadius: "10",
        id: "View_1"
    });
    $.__views.Window_1.add($.__views.View_1);
    $.__views.Label_2 = Ti.UI.createLabel({
        text: "Who would you like to add to this project?",
        left: "9.19%",
        top: "18.53%",
        height: "8.30%",
        width: "75.85%",
        color: "#444444",
        id: "Label_2"
    });
    $.__views.View_1.add($.__views.Label_2);
    $.__views.Button_1 = Ti.UI.createButton({
        height: "8%",
        width: "39%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        selectedBackgroundColor: "#e5790e",
        left: "9.19%",
        top: "86.58%",
        font: {
            fontSize: "20",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "bold"
        },
        borderWidth: "0",
        title: "BACK",
        id: "Button_1"
    });
    $.__views.View_1.add($.__views.Button_1);
    $.__views.Button_2 = Ti.UI.createButton({
        height: "8%",
        width: "39%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        selectedBackgroundColor: "#e5790e",
        title: "NEXT",
        left: "51.85%",
        top: "86.55%",
        font: {
            fontSize: "20",
            fontFamily: "",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        borderWidth: "0",
        id: "Button_2"
    });
    $.__views.View_1.add($.__views.Button_2);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        left: "9.19%",
        top: "11.28%",
        height: "7.25%",
        width: "65%",
        id: "ImageView_2",
        image: "/images/iphone/addcontacts.png"
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