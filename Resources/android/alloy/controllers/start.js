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
    this.__controllerPath = "start";
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
    $.__views.start = Ti.UI.createWindow({
        backgroundColor: "#193441",
        id: "start"
    });
    $.__views.start && $.addTopLevelView($.__views.start);
    $.__views.__alloyId331 = Ti.UI.createView({
        borderRadius: "10",
        left: "5%",
        right: "5%",
        top: "8%",
        height: "50%",
        width: "90%",
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId331"
    });
    $.__views.start.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        top: "15%",
        left: "25",
        color: "black",
        text: "When would you like to start?",
        width: "85%",
        id: "__alloyId332"
    });
    $.__views.__alloyId331.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createView({
        layout: "horizontal",
        height: "175px",
        width: "85%",
        top: 20,
        id: "__alloyId333"
    });
    $.__views.__alloyId331.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Start Date",
        id: "__alloyId334"
    });
    $.__views.__alloyId333.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createImageView({
        height: "150px",
        width: "150px",
        left: "15",
        image: "/images/iphone/calendar-icon.png",
        id: "__alloyId335"
    });
    $.__views.__alloyId333.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createTextField({
        height: "150px",
        width: "450px",
        backgroundColor: "#ececec",
        id: "__alloyId336"
    });
    $.__views.__alloyId333.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createView({
        layout: "horizontal",
        left: "20",
        top: 35,
        id: "__alloyId337"
    });
    $.__views.__alloyId331.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createButton({
        height: "150px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Back",
        id: "__alloyId338"
    });
    $.__views.__alloyId337.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createButton({
        height: "150px",
        width: "44%",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "#ffffff",
        title: "Next",
        left: 20,
        id: "__alloyId339"
    });
    $.__views.__alloyId337.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createImageView({
        left: "43%",
        top: "3.5%",
        height: "200px",
        width: "200px",
        image: "/images/iphone/project-shuriken.png",
        id: "__alloyId340"
    });
    $.__views.start.add($.__views.__alloyId340);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;