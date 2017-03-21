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
    this.__controllerPath = "pd";
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
        id: "Window_1",
        title: "Project Dashboard"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId204 = Ti.UI.createImageView({
        top: 0,
        image: "/images/iphone/project-db-cover.png",
        id: "__alloyId204"
    });
    $.__views.Window_1.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel(function() {
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
            text: "Project Name",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: "5%",
            id: "__alloyId205"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createScrollView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "vertical",
            top: "18%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            top: "21%"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId206"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createView({
        height: 50,
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        text: "CONTACTS",
        id: "__alloyId208"
    });
    $.__views.__alloyId207.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId209"
    });
    $.__views.__alloyId207.add($.__views.__alloyId209);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "15%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true,
        width: "100%"
    });
    $.__views.__alloyId206.add($.__views.scrollView);
    $.__views.__alloyId210 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "750"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "1050"
        });
        Alloy.deepExtend(true, o, {
            backgroundColor: "#ffffff",
            height: "100%",
            id: "__alloyId210"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.__alloyId210);
    $.__views.ImageView_1 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "1.5%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "1.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_1",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_1);
    $.__views.ImageView_2 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "11%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "11%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_2",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "20.5%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "20.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_3",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_3);
    $.__views.ImageView_4 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "30%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "30%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_4",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_4);
    $.__views.ImageView_5 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "39.5%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "39.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_5",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_5);
    $.__views.ImageView_6 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "49%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "49%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_6",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_6);
    $.__views.ImageView_7 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "58.5%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "58.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_7",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_7);
    $.__views.ImageView_8 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "68%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "68%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_8",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_8);
    $.__views.ImageView_9 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "77.5%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "77.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_9",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_9);
    $.__views.ImageView_10 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "87%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "87%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_10",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId210.add($.__views.ImageView_10);
    $.__views.__alloyId211 = Ti.UI.createView({
        height: 50,
        id: "__alloyId211"
    });
    $.__views.__alloyId206.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        text: "HOT LIST",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "15%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true,
        width: "100%"
    });
    $.__views.__alloyId206.add($.__views.scrollView);
    $.__views.__alloyId214 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "750"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "1050"
        });
        Alloy.deepExtend(true, o, {
            backgroundColor: "#ffffff",
            height: "100%",
            id: "__alloyId214"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.__alloyId214);
    $.__views.ImageView_1 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "1.5%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "1.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_1",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_1);
    $.__views.ImageView_2 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "11%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "11%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_2",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "20.5%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "20.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_3",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_3);
    $.__views.ImageView_4 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "30%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "30%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_4",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_4);
    $.__views.ImageView_5 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "39.5%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "39.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_5",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_5);
    $.__views.ImageView_6 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "49%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "49%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_6",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_6);
    $.__views.ImageView_7 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            width: "125px",
            left: "58.5%",
            top: "10%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "58.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_7",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_7);
    $.__views.ImageView_8 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "68%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "68%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_8",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_8);
    $.__views.ImageView_9 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "77.5%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "77.5%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_9",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_9);
    $.__views.ImageView_10 = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "125px",
            left: "87%",
            top: "10%",
            width: "125px"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "175px",
            left: "87%",
            top: "10%",
            width: "175px"
        });
        Alloy.deepExtend(true, o, {
            id: "ImageView_10",
            image: "/images/iphone/project-shuriken.png"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.ImageView_10);
    $.__views.__alloyId215 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        top: 20,
        width: "100%",
        id: "__alloyId215"
    });
    $.__views.__alloyId206.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "TASKS",
        id: "__alloyId216"
    });
    $.__views.__alloyId215.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId217"
    });
    $.__views.__alloyId215.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        left: "5%",
        text: "+",
        id: "__alloyId218"
    });
    $.__views.__alloyId215.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createListView({
        height: "520px",
        id: "__alloyId219"
    });
    $.__views.__alloyId206.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
        top: 10,
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId220"
    });
    $.__views.__alloyId206.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "GOALS",
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId222"
    });
    $.__views.__alloyId220.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        left: "5%",
        text: "+",
        id: "__alloyId223"
    });
    $.__views.__alloyId220.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createListView({
        height: "520px",
        id: "__alloyId224"
    });
    $.__views.__alloyId206.add($.__views.__alloyId224);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;