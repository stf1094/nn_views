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
    $.__views.__alloyId159 = Ti.UI.createImageView({
        top: 0,
        image: "/images/iphone/project-db-cover.png",
        id: "__alloyId159"
    });
    $.__views.Window_1.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel(function() {
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
            id: "__alloyId160"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createScrollView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "vertical",
            top: "18%"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            top: "21%"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId161"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createView({
        height: 50,
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        text: "CONTACTS",
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId164"
    });
    $.__views.__alloyId162.add($.__views.__alloyId164);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "15%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true,
        width: "100%"
    });
    $.__views.__alloyId161.add($.__views.scrollView);
    $.__views.__alloyId165 = Ti.UI.createView(function() {
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
            id: "__alloyId165"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.__alloyId165);
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
    $.__views.__alloyId165.add($.__views.ImageView_1);
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
    $.__views.__alloyId165.add($.__views.ImageView_2);
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
    $.__views.__alloyId165.add($.__views.ImageView_3);
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
    $.__views.__alloyId165.add($.__views.ImageView_4);
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
    $.__views.__alloyId165.add($.__views.ImageView_5);
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
    $.__views.__alloyId165.add($.__views.ImageView_6);
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
    $.__views.__alloyId165.add($.__views.ImageView_7);
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
    $.__views.__alloyId165.add($.__views.ImageView_8);
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
    $.__views.__alloyId165.add($.__views.ImageView_9);
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
    $.__views.__alloyId165.add($.__views.ImageView_10);
    $.__views.__alloyId166 = Ti.UI.createView({
        height: 50,
        id: "__alloyId166"
    });
    $.__views.__alloyId161.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        text: "HOT LIST",
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId168"
    });
    $.__views.__alloyId166.add($.__views.__alloyId168);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "15%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true,
        width: "100%"
    });
    $.__views.__alloyId161.add($.__views.scrollView);
    $.__views.__alloyId169 = Ti.UI.createView(function() {
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
            id: "__alloyId169"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.__alloyId169);
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
    $.__views.__alloyId169.add($.__views.ImageView_1);
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
    $.__views.__alloyId169.add($.__views.ImageView_2);
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
    $.__views.__alloyId169.add($.__views.ImageView_3);
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
    $.__views.__alloyId169.add($.__views.ImageView_4);
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
    $.__views.__alloyId169.add($.__views.ImageView_5);
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
    $.__views.__alloyId169.add($.__views.ImageView_6);
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
    $.__views.__alloyId169.add($.__views.ImageView_7);
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
    $.__views.__alloyId169.add($.__views.ImageView_8);
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
    $.__views.__alloyId169.add($.__views.ImageView_9);
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
    $.__views.__alloyId169.add($.__views.ImageView_10);
    $.__views.__alloyId170 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        top: 20,
        width: "100%",
        id: "__alloyId170"
    });
    $.__views.__alloyId161.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "TASKS",
        id: "__alloyId171"
    });
    $.__views.__alloyId170.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId172"
    });
    $.__views.__alloyId170.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        left: "5%",
        text: "+",
        id: "__alloyId173"
    });
    $.__views.__alloyId170.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createListView({
        height: "520px",
        id: "__alloyId174"
    });
    $.__views.__alloyId161.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createView({
        top: 10,
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId175"
    });
    $.__views.__alloyId161.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "GOALS",
        id: "__alloyId176"
    });
    $.__views.__alloyId175.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId177"
    });
    $.__views.__alloyId175.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        left: "5%",
        text: "+",
        id: "__alloyId178"
    });
    $.__views.__alloyId175.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createListView({
        height: "520px",
        id: "__alloyId179"
    });
    $.__views.__alloyId161.add($.__views.__alloyId179);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;