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
        backgroundColor: "white",
        id: "contactInfo"
    });
    $.__views.profile.add($.__views.contactInfo);
    $.__views.__alloyId225 = Ti.UI.createView({
        layout: "vertical",
        top: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId225"
    });
    $.__views.contactInfo.add($.__views.__alloyId225);
    $.__views.profileImage = Ti.UI.createImageView({
        height: "150px",
        width: "150px",
        id: "profileImage",
        image: "/images/iphone/project-shuriken.png",
        top: 20
    });
    $.__views.__alloyId225.add($.__views.profileImage);
    $.__views.name = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 24
        },
        text: "The Ninja",
        id: "name"
    });
    $.__views.__alloyId225.add($.__views.name);
    $.__views.job = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Your ninja",
        id: "job"
    });
    $.__views.__alloyId225.add($.__views.job);
    $.__views.company = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Alvarium Systems, Inc",
        id: "company"
    });
    $.__views.__alloyId225.add($.__views.company);
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
    $.__views.__alloyId225.add($.__views.addFavoriteBtn);
    $.__views.__alloyId226 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId226"
    });
    $.__views.contactInfo.add($.__views.__alloyId226);
    $.__views.callBtn = Ti.UI.createLabel({
        id: "callBtn"
    });
    $.__views.__alloyId226.add($.__views.callBtn);
    $.__views.emailBtn = Ti.UI.createLabel({
        id: "emailBtn"
    });
    $.__views.__alloyId226.add($.__views.emailBtn);
    $.__views.msgBtn = Ti.UI.createLabel({
        id: "msgBtn"
    });
    $.__views.__alloyId226.add($.__views.msgBtn);
    $.__views.__alloyId227 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId227"
    });
    $.__views.contactInfo.add($.__views.__alloyId227);
    $.__views.fbBtn = Ti.UI.createLabel({
        id: "fbBtn"
    });
    $.__views.__alloyId227.add($.__views.fbBtn);
    $.__views.liBtn = Ti.UI.createLabel({
        id: "liBtn"
    });
    $.__views.__alloyId227.add($.__views.liBtn);
    $.__views.googBtn = Ti.UI.createLabel({
        id: "googBtn"
    });
    $.__views.__alloyId227.add($.__views.googBtn);
    $.__views.__alloyId228 = Ti.UI.createView({
        height: 1,
        width: "100%",
        backgroundColor: "#acacac",
        id: "__alloyId228"
    });
    $.__views.contactInfo.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId229"
    });
    $.__views.contactInfo.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId230"
    });
    $.__views.__alloyId229.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 24
        },
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.start_date = Ti.UI.createLabel({
        left: 10,
        right: 10,
        font: {
            fontSize: 12
        },
        text: "July 27, 2016",
        id: "start_date"
    });
    $.__views.__alloyId230.add($.__views.start_date);
    $.__views.__alloyId232 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "95%",
        backgroundColor: "#acacac",
        id: "__alloyId232"
    });
    $.__views.__alloyId229.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId233"
    });
    $.__views.__alloyId229.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 14
        },
        text: "Phone Number",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "95%",
        backgroundColor: "#acacac",
        id: "__alloyId235"
    });
    $.__views.__alloyId229.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId236"
    });
    $.__views.__alloyId229.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 14
        },
        text: "Email",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "95%",
        backgroundColor: "#acacac",
        id: "__alloyId238"
    });
    $.__views.__alloyId229.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId239"
    });
    $.__views.__alloyId229.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 14
        },
        text: "Project Name and Status",
        id: "__alloyId240"
    });
    $.__views.__alloyId239.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "95%",
        backgroundColor: "#acacac",
        id: "__alloyId241"
    });
    $.__views.__alloyId229.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        color: "#9d9d9d",
        text: "Notes",
        id: "__alloyId242"
    });
    $.__views.__alloyId229.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createTextArea({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        width: "95%",
        height: "200px",
        id: "__alloyId243"
    });
    $.__views.__alloyId229.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createView({
        height: 30,
        id: "__alloyId244"
    });
    $.__views.__alloyId229.add($.__views.__alloyId244);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;