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
    $.__views.__alloyId198 = Ti.UI.createImageView({
        top: 0,
        image: "/images/iphone/project-db-cover.png",
        id: "__alloyId198"
    });
    $.__views.Window_1.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "white",
        text: "Project Name",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "5%",
        id: "__alloyId199"
    });
    $.__views.Window_1.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createScrollView({
        layout: "vertical",
        top: "18%",
        id: "__alloyId200"
    });
    $.__views.Window_1.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createView({
        height: 50,
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        text: "CONTACTS",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId203"
    });
    $.__views.__alloyId201.add($.__views.__alloyId203);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "15%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true,
        width: "100%"
    });
    $.__views.__alloyId200.add($.__views.scrollView);
    $.__views.__alloyId204 = Ti.UI.createView({
        width: "750",
        backgroundColor: "#ffffff",
        height: "100%",
        id: "__alloyId204"
    });
    $.__views.scrollView.add($.__views.__alloyId204);
    $.__views.ImageView_1 = Ti.UI.createImageView({
        height: "125px",
        left: "1.5%",
        top: "10%",
        width: "125px",
        id: "ImageView_1",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_1);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        height: "125px",
        left: "11%",
        top: "10%",
        width: "125px",
        id: "ImageView_2",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "20.5%",
        top: "10%",
        id: "ImageView_3",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_3);
    $.__views.ImageView_4 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "30%",
        top: "10%",
        id: "ImageView_4",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_4);
    $.__views.ImageView_5 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "39.5%",
        top: "10%",
        id: "ImageView_5",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_5);
    $.__views.ImageView_6 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "49%",
        top: "10%",
        id: "ImageView_6",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_6);
    $.__views.ImageView_7 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "58.5%",
        top: "10%",
        id: "ImageView_7",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_7);
    $.__views.ImageView_8 = Ti.UI.createImageView({
        height: "125px",
        left: "68%",
        top: "10%",
        width: "125px",
        id: "ImageView_8",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_8);
    $.__views.ImageView_9 = Ti.UI.createImageView({
        height: "125px",
        left: "77.5%",
        top: "10%",
        width: "125px",
        id: "ImageView_9",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_9);
    $.__views.ImageView_10 = Ti.UI.createImageView({
        height: "125px",
        left: "87%",
        top: "10%",
        width: "125px",
        id: "ImageView_10",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId204.add($.__views.ImageView_10);
    $.__views.__alloyId205 = Ti.UI.createView({
        height: 50,
        id: "__alloyId205"
    });
    $.__views.__alloyId200.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        text: "HOT LIST",
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId207"
    });
    $.__views.__alloyId205.add($.__views.__alloyId207);
    $.__views.scrollView = Ti.UI.createScrollView({
        height: "15%",
        horizontalBounce: true,
        id: "scrollView",
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: true,
        width: "100%"
    });
    $.__views.__alloyId200.add($.__views.scrollView);
    $.__views.__alloyId208 = Ti.UI.createView({
        width: "750",
        backgroundColor: "#ffffff",
        height: "100%",
        id: "__alloyId208"
    });
    $.__views.scrollView.add($.__views.__alloyId208);
    $.__views.ImageView_1 = Ti.UI.createImageView({
        height: "125px",
        left: "1.5%",
        top: "10%",
        width: "125px",
        id: "ImageView_1",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_1);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        height: "125px",
        left: "11%",
        top: "10%",
        width: "125px",
        id: "ImageView_2",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_2);
    $.__views.ImageView_3 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "20.5%",
        top: "10%",
        id: "ImageView_3",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_3);
    $.__views.ImageView_4 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "30%",
        top: "10%",
        id: "ImageView_4",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_4);
    $.__views.ImageView_5 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "39.5%",
        top: "10%",
        id: "ImageView_5",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_5);
    $.__views.ImageView_6 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "49%",
        top: "10%",
        id: "ImageView_6",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_6);
    $.__views.ImageView_7 = Ti.UI.createImageView({
        height: "125px",
        width: "125px",
        left: "58.5%",
        top: "10%",
        id: "ImageView_7",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_7);
    $.__views.ImageView_8 = Ti.UI.createImageView({
        height: "125px",
        left: "68%",
        top: "10%",
        width: "125px",
        id: "ImageView_8",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_8);
    $.__views.ImageView_9 = Ti.UI.createImageView({
        height: "125px",
        left: "77.5%",
        top: "10%",
        width: "125px",
        id: "ImageView_9",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_9);
    $.__views.ImageView_10 = Ti.UI.createImageView({
        height: "125px",
        left: "87%",
        top: "10%",
        width: "125px",
        id: "ImageView_10",
        image: "/images/iphone/project-shuriken.png"
    });
    $.__views.__alloyId208.add($.__views.ImageView_10);
    $.__views.__alloyId209 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        top: 20,
        width: "100%",
        id: "__alloyId209"
    });
    $.__views.__alloyId200.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "TASKS",
        id: "__alloyId210"
    });
    $.__views.__alloyId209.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId211"
    });
    $.__views.__alloyId209.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        left: "5%",
        text: "+",
        id: "__alloyId212"
    });
    $.__views.__alloyId209.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createListView({
        height: "520px",
        id: "__alloyId213"
    });
    $.__views.__alloyId200.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
        top: 10,
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId214"
    });
    $.__views.__alloyId200.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "GOALS",
        id: "__alloyId215"
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId216"
    });
    $.__views.__alloyId214.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        left: "5%",
        text: "+",
        id: "__alloyId217"
    });
    $.__views.__alloyId214.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createListView({
        height: "520px",
        id: "__alloyId218"
    });
    $.__views.__alloyId200.add($.__views.__alloyId218);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;