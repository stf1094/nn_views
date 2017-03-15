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
        height: "15%",
        left: "0%",
        top: "0%",
        id: "__alloyId35"
    });
    $.__views.dashboard.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createImageView({
        image: "/images/iphone/dojo-cover.png",
        width: "100%",
        height: "100%",
        top: "0%",
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
    var __alloyId40 = [];
    $.__views.__alloyId41 = Ti.UI.createDashboardItem({
        image: "android/db-android-contacts.png",
        selectedImage: "android/db-android-contacts-grey.png",
        id: "__alloyId41"
    });
    __alloyId40.push($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createDashboardItem({
        image: "android/db-android-projects.png",
        selectedImage: "android/db-android-projects-grey.png",
        id: "__alloyId42"
    });
    __alloyId40.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createDashboardItem({
        image: "android/db-android-hotlist.png",
        selectedImage: "android/db-android-hotlist-grey.png",
        id: "__alloyId43"
    });
    __alloyId40.push($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createDashboardItem({
        image: "android/db-android-reporting.png",
        selectedImage: "android/db-android-reporting-grey.png",
        id: "__alloyId44"
    });
    __alloyId40.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createDashboardItem({
        image: "android/db-android-recent.png",
        selectedImage: "android/db-android-recent-grey.png",
        id: "__alloyId45"
    });
    __alloyId40.push($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createDashboardItem({
        image: "android/db-android-settings.png",
        selectedImage: "android/db-android-settings-grey.png",
        id: "__alloyId46"
    });
    __alloyId40.push($.__views.__alloyId46);
    $.__views.__alloyId39 = Ti.UI.createDashboardView({
        data: __alloyId40,
        center: true,
        columnCount: 2,
        height: "75%",
        left: "0.00%",
        top: "15%",
        width: "100%",
        id: "__alloyId39"
    });
    $.__views.dashboard.add($.__views.__alloyId39);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: "15%",
        left: "0%",
        top: "90%",
        id: "__alloyId47"
    });
    $.__views.dashboard.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createImageView({
        image: "/images/iphone/dojo-bottom.png",
        width: "100%",
        height: "100%",
        top: "0%",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;