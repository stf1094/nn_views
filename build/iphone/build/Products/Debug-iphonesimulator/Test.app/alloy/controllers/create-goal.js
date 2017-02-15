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
    this.__controllerPath = "create-goal";
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
        title: "Set a Goal",
        backgroundColor: "#193341",
        left: "0.00%",
        top: "6.67%",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.View_1 = Ti.UI.createView({
        left: "4.93%",
        right: "5%",
        top: "8.5%",
        height: "65%",
        width: "90%",
        backgroundColor: "#ffffff",
        center: "100%",
        borderRadius: "10",
        id: "View_1"
    });
    $.__views.Window_1.add($.__views.View_1);
    $.__views.startDate = Ti.UI.createLabel({
        top: "54.76%",
        color: "#444444",
        height: "4.69%",
        left: "20%",
        font: {
            fontSize: "3.5%",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        text: "Start Date",
        id: "startDate"
    });
    $.__views.View_1.add($.__views.startDate);
    $.__views.endDate = Ti.UI.createLabel({
        top: "66.87%",
        left: "21.42%",
        font: {
            fontSize: "3.5%",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#444444",
        height: "7.79%",
        width: "17.73%",
        text: "End Date",
        id: "endDate"
    });
    $.__views.View_1.add($.__views.endDate);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "81.54%",
        height: "10.51%",
        borderRadius: "10",
        borderColor: "#ECECEC",
        borderWidth: "1",
        left: "9.16%",
        top: "35.97%",
        color: "#444444",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.View_1.add($.__views.TextField_1);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        left: "46.15%",
        top: "51.71%",
        image: "/images/choose-date-entry.png",
        height: "11%",
        width: "45%",
        id: "ImageView_2"
    });
    $.__views.View_1.add($.__views.ImageView_2);
    $.__views.ImageView_4 = Ti.UI.createImageView({
        left: "46.15%",
        top: "65.15%",
        image: "/choose-date-entry.png",
        height: "11%",
        width: "45%",
        id: "ImageView_4"
    });
    $.__views.View_1.add($.__views.ImageView_4);
    $.__views.__alloyId0 = Ti.UI.createButton({
        height: "10%",
        width: "39%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        selectedBackgroundColor: "#e5790e",
        title: "NEXT",
        left: "52%",
        top: "83%",
        id: "__alloyId0"
    });
    $.__views.View_1.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createButton({
        height: "10%",
        width: "39%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        selectedBackgroundColor: "#e5790e",
        title: "BACK",
        left: "10%",
        top: "83%",
        id: "__alloyId1"
    });
    $.__views.View_1.add($.__views.__alloyId1);
    $.__views.Label_1 = Ti.UI.createLabel({
        height: "6.18%",
        left: "9.90%",
        top: "27.32%",
        width: "80.80%",
        font: {
            fontSize: "3.5%",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#444444",
        text: "What is your goal for this project?",
        id: "Label_1"
    });
    $.__views.View_1.add($.__views.Label_1);
    $.__views.TextField_2 = Ti.UI.createTextField({
        width: "27.92%",
        height: "10.88%",
        borderRadius: "10",
        borderColor: "#EcEcEc",
        borderWidth: "0",
        left: "60.86%",
        top: "51.67%",
        id: "TextField_2"
    });
    $.__views.View_1.add($.__views.TextField_2);
    $.__views.TextField_3 = Ti.UI.createTextField({
        width: "27.92%",
        height: "10.63%",
        borderRadius: "10",
        borderColor: "#ececec",
        borderWidth: "0",
        left: "60.86%",
        top: "65.39%",
        id: "TextField_3"
    });
    $.__views.View_1.add($.__views.TextField_3);
    $.__views.ImageView_1 = Ti.UI.createImageView({
        left: "10%",
        top: "17.43%",
        height: "10%",
        width: "50%",
        id: "ImageView_1",
        image: "images/iphone/setgoal.png"
    });
    $.__views.View_1.add($.__views.ImageView_1);
    $.__views.ImageView_3 = Ti.UI.createImageView({
        left: "40.25%",
        top: "2.25%",
        layout: "vertical",
        image: "/images/iphone/project-shuriken.png",
        canScale: "yes",
        height: "12%",
        width: "21%",
        id: "ImageView_3"
    });
    $.__views.Window_1.add($.__views.ImageView_3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;