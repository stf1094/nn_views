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
    $.__views.__alloyId38 = Ti.UI.createLabel(function() {
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
            id: "__alloyId38"
        });
        return o;
    }());
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
        center: true,
        height: "300px",
        width: "100%",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            left: ".25%",
            width: "49.5%",
            height: "100%",
            image: "/images/iphone/db-contacts.png",
            selectedImage: "/images/iphone/db-contacts-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId41"
        });
        return o;
    }());
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "49.5%",
            height: "100%",
            image: "/images/iphone/db-projects.png",
            selectedImage: "/images/iphone/db-projects-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId42"
        });
        return o;
    }());
    $.__views.__alloyId40.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        layout: "horizontal",
        height: "300px",
        id: "__alloyId43"
    });
    $.__views.__alloyId39.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            left: ".25%",
            width: "49.5%",
            height: "100%",
            image: "/images/iphone/db-hotlist.png",
            selectedImage: "/images/iphone/db-hotlist-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId44"
        });
        return o;
    }());
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "49.5%",
            height: "100%",
            image: "/images/iphone/db-reporting.png",
            selectedImage: "/images/iphone/db-reporting-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId45"
        });
        return o;
    }());
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        layout: "horizontal",
        height: "300px",
        id: "__alloyId46"
    });
    $.__views.__alloyId39.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            left: ".25%",
            width: "49.5%",
            height: "100%",
            image: "/images/iphone/db-recent.png",
            selectedImage: "/images/iphone/db-recent-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId47"
        });
        return o;
    }());
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "49.5%",
            height: "100%",
            image: "/images/iphone/db-calendar.png",
            selectedImage: "/images/iphone/db-calendar-grey.png"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId48"
        });
        return o;
    }());
    $.__views.__alloyId46.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: "10%",
        left: "0%",
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