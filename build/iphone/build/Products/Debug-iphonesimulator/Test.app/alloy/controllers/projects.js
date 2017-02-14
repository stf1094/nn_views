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
    this.__controllerPath = "projects";
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
        title: "Projects",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.ImageView_1 = Ti.UI.createImageView({
        left: "0.00%",
        top: "0.00%",
        height: "23.25%",
        width: "100%",
        id: "ImageView_1",
        image: "/images/iphone/ui-projects-cover.png"
    });
    $.__views.Window_1.add($.__views.ImageView_1);
    $.__views.View_1 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        center: "100%",
        height: "76.95%",
        left: "0.00%",
        top: "23.05%",
        width: "100.00%",
        borderRadius: "0",
        id: "View_1"
    });
    $.__views.Window_1.add($.__views.View_1);
    $.__views.Button_1 = Ti.UI.createButton({
        left: "6.67%",
        top: "1.15%",
        backgroundColor: "#f7941d",
        borderWidth: "0",
        color: "#ffffff",
        height: "9%",
        width: "86.53%",
        title: "Create a Project",
        id: "Button_1"
    });
    $.__views.View_1.add($.__views.Button_1);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        left: "6.67%",
        top: "15%",
        width: "40%",
        height: "25%",
        id: "ImageView_2",
        image: "images/iphone/project-holder-image.png"
    });
    $.__views.View_1.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView({
        top: "15%",
        left: "53.20%",
        width: "40%",
        height: "25%",
        id: "ImageView_3",
        image: "images/iphone/project-holder-image.png"
    });
    $.__views.View_1.add($.__views.ImageView_3);
    $.__views.Label_1 = Ti.UI.createLabel({
        color: "#000000",
        font: {
            fontSize: "3.5%",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        height: "5.95%",
        left: "6.67%",
        top: "39.67%",
        width: "40%",
        text: "Project Name",
        id: "Label_1",
        textAlign: "center"
    });
    $.__views.View_1.add($.__views.Label_1);
    $.__views.Label_2 = Ti.UI.createLabel({
        text: "Project Name",
        left: "53.20%",
        top: "39.67%",
        color: "#000000",
        font: {
            fontSize: "3.5%",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        height: "5.95%",
        width: "40%",
        id: "Label_2",
        textAlign: "center"
    });
    $.__views.View_1.add($.__views.Label_2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;