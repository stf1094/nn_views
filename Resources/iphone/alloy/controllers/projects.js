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
    $.__views.__alloyId82 = Ti.UI.createButton({
        left: "5%",
        width: "90%",
        height: "10%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "Create a Project",
        top: "1%",
        id: "__alloyId82"
    });
    $.__views.View_1.add($.__views.__alloyId82);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        left: "7.5%",
        top: "15%",
        width: "40%",
        height: "25%",
        id: "ImageView_2",
        image: "/images/iphone/project-holder-image.png"
    });
    $.__views.View_1.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView({
        top: "15%",
        right: "7.5%",
        width: "40%",
        height: "25%",
        id: "ImageView_3",
        image: "/images/iphone/project-holder-image.png"
    });
    $.__views.View_1.add($.__views.ImageView_3);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Project Name",
        left: "7%",
        top: "41%",
        width: "40%",
        id: "__alloyId83"
    });
    $.__views.View_1.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Project Name",
        right: "7%",
        top: "41%",
        width: "40%",
        id: "__alloyId84"
    });
    $.__views.View_1.add($.__views.__alloyId84);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;