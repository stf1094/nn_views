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
    $.__views.__alloyId4 = Ti.UI.createView({
        left: "0%",
        top: "0%",
        id: "__alloyId4"
    });
    $.__views.dashboard.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        image: "/images/iphone/dojo-cover.png",
        width: "100%",
        top: "0%",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "white",
        right: "8%",
        text: "welcome,",
        top: "2%",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel(function() {
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
            top: "5%",
            id: "__alloyId7"
        });
        return o;
    }());
    $.__views.__alloyId4.add($.__views.__alloyId7);
    var __alloyId9 = [];
    $.__views.__alloyId10 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-contacts.png",
            selectedImage: "/images/iphone/db-contacts-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId10"
        });
        return o;
    }());
    __alloyId9.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-projects.png",
            selectedImage: "/images/iphone/db-projects-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId11"
        });
        return o;
    }());
    __alloyId9.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-hotlist.png",
            selectedImage: "/images/iphone/db-hotlist-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId12"
        });
        return o;
    }());
    __alloyId9.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-reporting.png",
            selectedImage: "/images/iphone/db-reporting-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId13"
        });
        return o;
    }());
    __alloyId9.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-recent.png",
            selectedImage: "/images/iphone/db-recent-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId14"
        });
        return o;
    }());
    __alloyId9.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createDashboardItem(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            image: "/images/iphone/db-settings.png",
            selectedImage: "/images/iphone/db-settings-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId15"
        });
        return o;
    }());
    __alloyId9.push($.__views.__alloyId15);
    $.__views.__alloyId8 = Ti.UI.createDashboardView({
        data: __alloyId9,
        center: true,
        columnCount: 2,
        height: "75%",
        left: "0.00%",
        top: "16.5%",
        width: "100%",
        id: "__alloyId8"
    });
    $.__views.dashboard.add($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;