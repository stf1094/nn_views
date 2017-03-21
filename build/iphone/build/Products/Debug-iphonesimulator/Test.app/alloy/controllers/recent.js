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
    this.__controllerPath = "recent";
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
        layout: "vertical",
        title: "Recent",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId293 = Ti.UI.createImageView({
        top: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        image: "/images/iphone/recent-cover.png",
        id: "__alloyId293"
    });
    $.__views.Window_1.add($.__views.__alloyId293);
    var __alloyId294 = [];
    $.__views.__alloyId295 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId295"
    });
    __alloyId294.push($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId297"
    });
    $.__views.__alloyId295.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        text: "Stefan Forsberg",
        id: "__alloyId298"
    });
    $.__views.__alloyId297.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId299"
    });
    $.__views.__alloyId297.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "horizontal",
            left: "10"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "375"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId300"
        });
        return o;
    }());
    $.__views.__alloyId295.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "TimeDay",
        id: "__alloyId301"
    });
    $.__views.__alloyId300.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId302"
    });
    $.__views.__alloyId300.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId303"
    });
    __alloyId294.push($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId305"
    });
    $.__views.__alloyId303.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        text: "Stefan Forsberg",
        id: "__alloyId306"
    });
    $.__views.__alloyId305.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId307"
    });
    $.__views.__alloyId305.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "horizontal",
            left: "10"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "375"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId308"
        });
        return o;
    }());
    $.__views.__alloyId303.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "TimeDay",
        id: "__alloyId309"
    });
    $.__views.__alloyId308.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId310"
    });
    $.__views.__alloyId308.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId311"
    });
    __alloyId294.push($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId312"
    });
    $.__views.__alloyId311.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId313"
    });
    $.__views.__alloyId311.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        text: "Stefan Forsberg",
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId315"
    });
    $.__views.__alloyId313.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "horizontal",
            left: "10"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "375"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId316"
        });
        return o;
    }());
    $.__views.__alloyId311.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "TimeDay",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId318"
    });
    $.__views.__alloyId316.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId319"
    });
    __alloyId294.push($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId321"
    });
    $.__views.__alloyId319.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        text: "Stefan Forsberg",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId323"
    });
    $.__views.__alloyId321.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            layout: "horizontal",
            left: "10"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            left: "375"
        });
        Alloy.deepExtend(true, o, {
            id: "__alloyId324"
        });
        return o;
    }());
    $.__views.__alloyId319.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "TimeDay",
        id: "__alloyId325"
    });
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId326"
    });
    $.__views.__alloyId324.add($.__views.__alloyId326);
    $.__views.TableView_1 = Ti.UI.createTableView({
        data: __alloyId294,
        id: "TableView_1"
    });
    $.__views.Window_1.add($.__views.TableView_1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;