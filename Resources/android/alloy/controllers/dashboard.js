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
    this.__controllerPath = "dashboard";
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
    $.__views.dashboard = Ti.UI.createWindow({
        id: "dashboard"
    });
    $.__views.dashboard && $.addTopLevelView($.__views.dashboard);
    $.__views.__alloyId35 = Ti.UI.createView({
        top: 0,
        height: "15%",
        left: "0%",
        id: "__alloyId35"
    });
    $.__views.dashboard.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createImageView({
        image: "/images/iphone/dojo-cover.png",
        width: "100%",
        height: "100%",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        color: "white",
        right: "8%",
        text: "welcome,",
        top: "15%",
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "white",
        right: "8%",
        text: "STEFAN",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        top: "35%",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "vertical",
        height: "75%",
        top: "15%",
        id: "__alloyId39"
    });
    $.__views.dashboard.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        layout: "horizontal",
        height: "576px",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createImageView({
        left: ".25%",
        width: "49.5%",
        height: "100%",
        image: "/images/android/db-android-contacts.png",
        selectedImage: "/images/android/db-android-contacts-grey.png",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createImageView({
        width: "49.5%",
        height: "100%",
        image: "/images/android/db-android-projects.png",
        selectedImage: "/images/android/db-android-projects-grey.png",
        id: "__alloyId42"
    });
    $.__views.__alloyId40.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        layout: "horizontal",
        height: "576px",
        id: "__alloyId43"
    });
    $.__views.__alloyId39.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createImageView({
        left: ".25%",
        width: "49.5%",
        height: "100%",
        image: "/images/android/db-android-hotlist.png",
        selectedImage: "/images/android/db-android-hotlist-grey.png",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createImageView({
        width: "49.5%",
        height: "100%",
        image: "/images/android/db-android-reporting.png",
        selectedImage: "/images/android/db-android-reporting-grey.png",
        id: "__alloyId45"
    });
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        layout: "horizontal",
        height: "576px",
        id: "__alloyId46"
    });
    $.__views.__alloyId39.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createImageView({
        left: ".25%",
        width: "49.5%",
        height: "100%",
        image: "/images/android/db-android-recent.png",
        selectedImage: "/images/android/db-android-recent-grey.png",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createImageView({
        width: "49.5%",
        height: "100%",
        image: "/images/android/db-android-calendar.png",
        selectedImage: "/images/android/db-android-calendar-grey.png",
        id: "__alloyId48"
    });
    $.__views.__alloyId46.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: "10%",
        top: "90%",
        id: "__alloyId49"
    });
    $.__views.dashboard.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createImageView({
        image: "/images/iphone/dojo-bottom.png",
        width: "100%",
        height: "100%",
        top: "0%",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;