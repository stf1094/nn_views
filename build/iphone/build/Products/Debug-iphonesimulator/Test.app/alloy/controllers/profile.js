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
    this.__controllerPath = "profile";
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
    $.__views.profile = Ti.UI.createWindow({
        layout: "vertical",
        title: "Profile",
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.contactInfo = Ti.UI.createScrollView({
        layout: "vertical",
        top: 0,
        id: "contactInfo"
    });
    $.__views.profile.add($.__views.contactInfo);
    $.__views.__alloyId105 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 10,
        height: 275,
        id: "__alloyId105"
    });
    $.__views.contactInfo.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "48%",
        height: "90px",
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "48%",
        height: "90px",
        id: "__alloyId107"
    });
    $.__views.__alloyId105.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        text: "Message content",
        color: "white",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "48%",
        height: "90px",
        id: "__alloyId109"
    });
    $.__views.__alloyId105.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "48%",
        height: "90px",
        id: "__alloyId110"
    });
    $.__views.__alloyId105.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "48%",
        height: "90px",
        id: "__alloyId111"
    });
    $.__views.__alloyId105.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "48%",
        height: "90px",
        id: "__alloyId112"
    });
    $.__views.__alloyId105.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "48%",
        height: "90px",
        id: "__alloyId113"
    });
    $.__views.__alloyId105.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "48%",
        height: "90px",
        id: "__alloyId114"
    });
    $.__views.__alloyId105.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        height: 1,
        width: "90%",
        backgroundColor: "#acacac",
        top: 20,
        id: "__alloyId115"
    });
    $.__views.contactInfo.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createView({
        layout: "vertical",
        top: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId116"
    });
    $.__views.contactInfo.add($.__views.__alloyId116);
    $.__views.profileImage = Ti.UI.createImageView({
        height: "150px",
        width: "150px",
        image: "/images/iphone/project-shuriken.png",
        top: 20,
        id: "profileImage"
    });
    $.__views.__alloyId116.add($.__views.profileImage);
    $.__views.name = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 24
        },
        text: "The Ninja",
        id: "name"
    });
    $.__views.__alloyId116.add($.__views.name);
    $.__views.job = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Your ninja",
        id: "job"
    });
    $.__views.__alloyId116.add($.__views.job);
    $.__views.company = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Alvarium Systems, Inc",
        id: "company"
    });
    $.__views.__alloyId116.add($.__views.company);
    $.__views.addFavoriteBtn = Ti.UI.createButton({
        top: 10,
        width: "100%",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        title: "+ Add To Favorites",
        id: "addFavoriteBtn",
        textid: "bookmarkBtn"
    });
    $.__views.__alloyId116.add($.__views.addFavoriteBtn);
    $.__views.__alloyId117 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId117"
    });
    $.__views.contactInfo.add($.__views.__alloyId117);
    $.__views.callBtn = Ti.UI.createLabel({
        id: "callBtn"
    });
    $.__views.__alloyId117.add($.__views.callBtn);
    $.__views.emailBtn = Ti.UI.createLabel({
        id: "emailBtn"
    });
    $.__views.__alloyId117.add($.__views.emailBtn);
    $.__views.msgBtn = Ti.UI.createLabel({
        id: "msgBtn"
    });
    $.__views.__alloyId117.add($.__views.msgBtn);
    $.__views.__alloyId118 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId118"
    });
    $.__views.contactInfo.add($.__views.__alloyId118);
    $.__views.fbBtn = Ti.UI.createLabel({
        id: "fbBtn"
    });
    $.__views.__alloyId118.add($.__views.fbBtn);
    $.__views.liBtn = Ti.UI.createLabel({
        id: "liBtn"
    });
    $.__views.__alloyId118.add($.__views.liBtn);
    $.__views.googBtn = Ti.UI.createLabel({
        id: "googBtn"
    });
    $.__views.__alloyId118.add($.__views.googBtn);
    $.__views.__alloyId119 = Ti.UI.createView({
        height: 1,
        width: "90%",
        backgroundColor: "#acacac",
        id: "__alloyId119"
    });
    $.__views.contactInfo.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId120"
    });
    $.__views.contactInfo.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 24
        },
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.start_date = Ti.UI.createLabel({
        left: 10,
        right: 10,
        font: {
            fontSize: 12
        },
        text: "July 27, 2016",
        id: "start_date"
    });
    $.__views.__alloyId121.add($.__views.start_date);
    $.__views.__alloyId123 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId123"
    });
    $.__views.__alloyId120.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 18
        },
        text: "Projects",
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        text: "Project 1",
        id: "__alloyId125"
    });
    $.__views.__alloyId123.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        text: "Project 3",
        id: "__alloyId126"
    });
    $.__views.__alloyId123.add($.__views.__alloyId126);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;