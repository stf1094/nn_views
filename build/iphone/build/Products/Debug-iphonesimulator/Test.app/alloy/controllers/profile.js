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
    $.__views.__alloyId180 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#f9f9f9",
        height: 225,
        id: "__alloyId180"
    });
    $.__views.contactInfo.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId182"
    });
    $.__views.__alloyId180.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Message content",
        color: "white",
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId184"
    });
    $.__views.__alloyId180.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId185"
    });
    $.__views.__alloyId180.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId186"
    });
    $.__views.__alloyId180.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId187"
    });
    $.__views.__alloyId180.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId188"
    });
    $.__views.__alloyId180.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId189"
    });
    $.__views.__alloyId180.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: 60,
        id: "__alloyId190"
    });
    $.__views.contactInfo.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createTextField(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: "70%",
            height: "90px",
            borderRadius: "10",
            borderColor: "#ececec",
            backgroundColor: "white",
            color: "#444444",
            top: "15",
            left: "15",
            hintText: "Message"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            width: "70%",
            height: "90px",
            borderRadius: "10",
            borderColor: "#ececec",
            backgroundColor: "white",
            color: "#444444",
            top: "15",
            left: "35",
            hintText: "Message"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId191"
        });
        return o;
    }());
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createButton({
        left: 10,
        height: "90px",
        width: "20%",
        backgroundColor: "#f7941d",
        color: "white",
        borderRadius: "10",
        title: "Send",
        top: 15,
        id: "__alloyId192"
    });
    $.__views.__alloyId190.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createView({
        height: 1,
        width: "100%",
        backgroundColor: "#acacac",
        top: 20,
        id: "__alloyId193"
    });
    $.__views.contactInfo.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createView({
        layout: "vertical",
        top: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId194"
    });
    $.__views.contactInfo.add($.__views.__alloyId194);
    $.__views.profileImage = Ti.UI.createImageView({
        height: "150px",
        width: "150px",
        id: "profileImage",
        image: "/images/iphone/project-shuriken.png",
        top: 20
    });
    $.__views.__alloyId194.add($.__views.profileImage);
    $.__views.name = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 24
        },
        text: "The Ninja",
        id: "name"
    });
    $.__views.__alloyId194.add($.__views.name);
    $.__views.job = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Your ninja",
        id: "job"
    });
    $.__views.__alloyId194.add($.__views.job);
    $.__views.company = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Alvarium Systems, Inc",
        id: "company"
    });
    $.__views.__alloyId194.add($.__views.company);
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
    $.__views.__alloyId194.add($.__views.addFavoriteBtn);
    $.__views.__alloyId195 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId195"
    });
    $.__views.contactInfo.add($.__views.__alloyId195);
    $.__views.callBtn = Ti.UI.createLabel({
        id: "callBtn"
    });
    $.__views.__alloyId195.add($.__views.callBtn);
    $.__views.emailBtn = Ti.UI.createLabel({
        id: "emailBtn"
    });
    $.__views.__alloyId195.add($.__views.emailBtn);
    $.__views.msgBtn = Ti.UI.createLabel({
        id: "msgBtn"
    });
    $.__views.__alloyId195.add($.__views.msgBtn);
    $.__views.__alloyId196 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId196"
    });
    $.__views.contactInfo.add($.__views.__alloyId196);
    $.__views.fbBtn = Ti.UI.createLabel({
        id: "fbBtn"
    });
    $.__views.__alloyId196.add($.__views.fbBtn);
    $.__views.liBtn = Ti.UI.createLabel({
        id: "liBtn"
    });
    $.__views.__alloyId196.add($.__views.liBtn);
    $.__views.googBtn = Ti.UI.createLabel({
        id: "googBtn"
    });
    $.__views.__alloyId196.add($.__views.googBtn);
    $.__views.__alloyId197 = Ti.UI.createView({
        height: 1,
        width: "100%",
        backgroundColor: "#acacac",
        id: "__alloyId197"
    });
    $.__views.contactInfo.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId198"
    });
    $.__views.contactInfo.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 24
        },
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.start_date = Ti.UI.createLabel({
        left: 10,
        right: 10,
        font: {
            fontSize: 12
        },
        text: "July 27, 2016",
        id: "start_date"
    });
    $.__views.__alloyId199.add($.__views.start_date);
    $.__views.__alloyId201 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId201"
    });
    $.__views.__alloyId198.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 18
        },
        text: "Projects",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        text: "Project 1",
        id: "__alloyId203"
    });
    $.__views.__alloyId201.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        text: "Project 3",
        id: "__alloyId204"
    });
    $.__views.__alloyId201.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "95%",
        backgroundColor: "#acacac",
        id: "__alloyId205"
    });
    $.__views.__alloyId198.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId206"
    });
    $.__views.__alloyId198.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 18
        },
        text: "Projects",
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        text: "Project 1",
        id: "__alloyId208"
    });
    $.__views.__alloyId206.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        text: "Project 3",
        id: "__alloyId209"
    });
    $.__views.__alloyId206.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createView({
        top: 10,
        height: 1,
        width: "90%",
        backgroundColor: "#acacac",
        id: "__alloyId210"
    });
    $.__views.__alloyId198.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId211"
    });
    $.__views.__alloyId198.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontSize: 18
        },
        text: "Projects",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        text: "Project 1",
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        text: "Project 3",
        id: "__alloyId214"
    });
    $.__views.__alloyId211.add($.__views.__alloyId214);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;