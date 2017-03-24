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
        backgroundColor: "#f9f9f9",
        id: "contactInfo"
    });
    $.__views.profile.add($.__views.contactInfo);
    $.__views.__alloyId223 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#f9f9f9",
        height: 225,
        id: "__alloyId223"
    });
    $.__views.contactInfo.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId224"
    });
    $.__views.__alloyId223.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId225"
    });
    $.__views.__alloyId223.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "white",
        text: "Message content",
        id: "__alloyId226"
    });
    $.__views.__alloyId225.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId227"
    });
    $.__views.__alloyId223.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId228"
    });
    $.__views.__alloyId223.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId229"
    });
    $.__views.__alloyId223.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId230"
    });
    $.__views.__alloyId223.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId231"
    });
    $.__views.__alloyId223.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId232"
    });
    $.__views.__alloyId223.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: 60,
        id: "__alloyId233"
    });
    $.__views.contactInfo.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createTextField({
        width: "70%",
        height: "175px",
        borderRadius: "10",
        borderColor: "#ececec",
        backgroundColor: "white",
        color: "#444444",
        top: "15",
        left: "20",
        hintText: "Message",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createButton({
        left: 10,
        font: {
            fontSize: 30
        },
        height: "175px",
        width: "18%",
        backgroundColor: "white",
        color: "#193441",
        borderRadius: "10",
        borderColor: "#193441",
        borderWidth: "2",
        title: ">",
        top: 15,
        id: "__alloyId235"
    });
    $.__views.__alloyId233.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createView({
        height: 1,
        width: "100%",
        backgroundColor: "#acacac",
        top: 20,
        id: "__alloyId236"
    });
    $.__views.contactInfo.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createView({
        layout: "vertical",
        top: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId237"
    });
    $.__views.contactInfo.add($.__views.__alloyId237);
    $.__views.profileImage = Ti.UI.createImageView({
        height: "250px",
        width: "250px",
        id: "profileImage",
        image: "/images/iphone/project-shuriken.png",
        top: 20
    });
    $.__views.__alloyId237.add($.__views.profileImage);
    $.__views.name = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 24
        },
        color: "black",
        text: "The Ninja",
        id: "name"
    });
    $.__views.__alloyId237.add($.__views.name);
    $.__views.job = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Your ninja",
        id: "job"
    });
    $.__views.__alloyId237.add($.__views.job);
    $.__views.company = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Alvarium Systems, Inc",
        id: "company"
    });
    $.__views.__alloyId237.add($.__views.company);
    $.__views.addFavoriteBtn = Ti.UI.createButton({
        top: 10,
        width: "100%",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        color: "black",
        title: "+ Add To Favorites",
        id: "addFavoriteBtn",
        textid: "bookmarkBtn"
    });
    $.__views.__alloyId237.add($.__views.addFavoriteBtn);
    $.__views.__alloyId238 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId238"
    });
    $.__views.contactInfo.add($.__views.__alloyId238);
    $.__views.callBtn = Ti.UI.createLabel({
        id: "callBtn"
    });
    $.__views.__alloyId238.add($.__views.callBtn);
    $.__views.emailBtn = Ti.UI.createLabel({
        id: "emailBtn"
    });
    $.__views.__alloyId238.add($.__views.emailBtn);
    $.__views.msgBtn = Ti.UI.createLabel({
        id: "msgBtn"
    });
    $.__views.__alloyId238.add($.__views.msgBtn);
    $.__views.__alloyId239 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId239"
    });
    $.__views.contactInfo.add($.__views.__alloyId239);
    $.__views.fbBtn = Ti.UI.createLabel({
        id: "fbBtn"
    });
    $.__views.__alloyId239.add($.__views.fbBtn);
    $.__views.liBtn = Ti.UI.createLabel({
        id: "liBtn"
    });
    $.__views.__alloyId239.add($.__views.liBtn);
    $.__views.googBtn = Ti.UI.createLabel({
        id: "googBtn"
    });
    $.__views.__alloyId239.add($.__views.googBtn);
    $.__views.__alloyId240 = Ti.UI.createView({
        height: 1,
        width: "100%",
        backgroundColor: "#acacac",
        id: "__alloyId240"
    });
    $.__views.contactInfo.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId241"
    });
    $.__views.contactInfo.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId242"
    });
    $.__views.__alloyId241.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 24
        },
        color: "black",
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    $.__views.start_date = Ti.UI.createLabel({
        left: 10,
        right: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "July 27, 2016",
        id: "start_date"
    });
    $.__views.__alloyId242.add($.__views.start_date);
    $.__views.__alloyId244 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "95%",
        backgroundColor: "#acacac",
        id: "__alloyId244"
    });
    $.__views.__alloyId241.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createView({
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId245"
    });
    $.__views.__alloyId241.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Phone Number",
        id: "__alloyId246"
    });
    $.__views.__alloyId245.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "95%",
        backgroundColor: "#acacac",
        id: "__alloyId247"
    });
    $.__views.__alloyId241.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createView({
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId248"
    });
    $.__views.__alloyId241.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Email",
        id: "__alloyId249"
    });
    $.__views.__alloyId248.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "95%",
        backgroundColor: "#acacac",
        id: "__alloyId250"
    });
    $.__views.__alloyId241.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId251"
    });
    $.__views.__alloyId241.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Projects",
        id: "__alloyId252"
    });
    $.__views.__alloyId251.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "Project 1",
        id: "__alloyId253"
    });
    $.__views.__alloyId251.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "Project 3",
        id: "__alloyId254"
    });
    $.__views.__alloyId251.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createView({
        height: 30,
        id: "__alloyId255"
    });
    $.__views.__alloyId241.add($.__views.__alloyId255);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;