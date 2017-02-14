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
    this.__controllerPath = "project-dashboard1";
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
    $.__views.project - dashboard1 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Project Dashboard",
        id: "project-dashboard1"
    });
    $.__views.project - dashboard1 && $.addTopLevelView($.__views.project - dashboard1);
    $.__views.__alloyId36 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: "Ti.UI.SIZE",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "20",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
        });
        Alloy.deepExtend(true, o, {
            text: "Contacts",
            top: "2.5%",
            width: "90%",
            id: "__alloyId36"
        });
        return o;
    }());
    $.__views.project - dashboard1.add($.__views.__alloyId36);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "20%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true,
        top: "5%",
        width: "100%"
    });
    $.__views.project - dashboard1.add($.__views.scrollView);
    $.__views.view = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: "100%",
        id: "view",
        width: 1200
    });
    $.__views.scrollView.add($.__views.view);
    $.__views.ImageView_1 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "1.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "1.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_1",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_1);
    $.__views.ImageView_2 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "7.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "13.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_2",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "13.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "25.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_3",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_3);
    $.__views.ImageView_4 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "19.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "37.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_4",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_4);
    $.__views.ImageView_5 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "25.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "49.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_5",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_5);
    $.__views.ImageView_6 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "31.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "61.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_6",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_6);
    $.__views.ImageView_7 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "37.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "73.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_7",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_7);
    $.__views.ImageView_8 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "43.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "85.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_8",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view.add($.__views.ImageView_8);
    $.__views.__alloyId37 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: "Ti.UI.SIZE",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "20",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
        });
        Alloy.deepExtend(true, o, {
            text: "Hot List",
            top: "30%",
            width: "90%",
            id: "__alloyId37"
        });
        return o;
    }());
    $.__views.project - dashboard1.add($.__views.__alloyId37);
    $.__views.scrollView1 = Ti.UI.createScrollView({
        height: "20%",
        horizontalBounce: true,
        id: "scrollView1",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true,
        top: "32%",
        width: "100%"
    });
    $.__views.project - dashboard1.add($.__views.scrollView1);
    $.__views.view1 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: "100%",
        id: "view1",
        width: 1200
    });
    $.__views.scrollView1.add($.__views.view1);
    $.__views.ImageView_1 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "1.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "1.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_1",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view1.add($.__views.ImageView_1);
    $.__views.ImageView_2 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "7.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "13.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_2",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view1.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "13.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "25.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_3",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view1.add($.__views.ImageView_3);
    $.__views.ImageView_4 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "19.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "37.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_4",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view1.add($.__views.ImageView_4);
    $.__views.ImageView_5 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "25.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "49.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_5",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view1.add($.__views.ImageView_5);
    $.__views.ImageView_6 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "31.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "61.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_6",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view1.add($.__views.ImageView_6);
    $.__views.ImageView_7 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "37.5%",
            top: "25%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "73.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_7",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view1.add($.__views.ImageView_7);
    $.__views.ImageView_8 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "43.5%",
            top: "25%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "200px",
            left: "85.5%",
            top: "25%",
            width: "200px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_8",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.view1.add($.__views.ImageView_8);
    $.__views.__alloyId38 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: "Ti.UI.SIZE",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "20",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
        });
        Alloy.deepExtend(true, o, {
            text: "Tasks",
            top: "53%",
            width: "90%",
            id: "__alloyId38"
        });
        return o;
    }());
    $.__views.project - dashboard1.add($.__views.__alloyId38);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;