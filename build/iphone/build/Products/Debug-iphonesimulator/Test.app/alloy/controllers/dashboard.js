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
    $.__views.__alloyId28 = Ti.UI.createView({
        height: "15%",
        left: "0%",
        top: "0%",
        id: "__alloyId28"
    });
    $.__views.dashboard.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createImageView({
        image: "/images/iphone/dojo-cover.png",
        width: "100%",
        height: "100%",
        top: "0%",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        color: "white",
        right: "8%",
        text: "welcome,",
        top: "15%",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: "30",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "45",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.deepExtend(true, o, {
            color: "white",
            right: "8%",
            text: "STEFAN",
            textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
            top: "35%",
            id: "__alloyId31"
        });
        return o;
    }());
    $.__views.__alloyId28.add($.__views.__alloyId31);
    var __alloyId33 = [];
    $.__views.__alloyId34 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-contacts.png",
            selectedImage: "/images/iphone/db-contacts-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId34"
        });
        return o;
    }());
    __alloyId33.push($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-projects.png",
            selectedImage: "/images/iphone/db-projects-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId35"
        });
        return o;
    }());
    __alloyId33.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-hotlist.png",
            selectedImage: "/images/iphone/db-hotlist-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId36"
        });
        return o;
    }());
    __alloyId33.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-reporting.png",
            selectedImage: "/images/iphone/db-reporting-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId37"
        });
        return o;
    }());
    __alloyId33.push($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-recent.png",
            selectedImage: "/images/iphone/db-recent-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId38"
        });
        return o;
    }());
    __alloyId33.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-settings.png",
            selectedImage: "/images/iphone/db-settings-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId39"
        });
        return o;
    }());
    __alloyId33.push($.__views.__alloyId39);
    $.__views.__alloyId32 = Ti.UI.createDashboardView({
        data: __alloyId33,
        center: true,
        columnCount: 2,
        height: "75%",
        left: "0.00%",
        top: "15%",
        width: "100%",
        id: "__alloyId32"
    });
    $.__views.dashboard.add($.__views.__alloyId32);
    $.__views.__alloyId40 = Ti.UI.createView({
        height: "15%",
        left: "0%",
        top: "90%",
        id: "__alloyId40"
    });
    $.__views.dashboard.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createImageView({
        image: "/images/iphone/dojo-bottom.png",
        width: "100%",
        height: "100%",
        top: "0%",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;