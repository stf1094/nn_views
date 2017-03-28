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
    $.__views.__alloyId278 = Ti.UI.createImageView({
        top: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        image: "/images/iphone/recent-cover.png",
        id: "__alloyId278"
    });
    $.__views.Window_1.add($.__views.__alloyId278);
    var __alloyId279 = [];
    $.__views.__alloyId280 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId280"
    });
    __alloyId279.push($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId281"
    });
    $.__views.__alloyId280.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId282"
    });
    $.__views.__alloyId280.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Stefan Forsberg",
        id: "__alloyId283"
    });
    $.__views.__alloyId282.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId284"
    });
    $.__views.__alloyId282.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createView({
        layout: "horizontal",
        left: "10",
        id: "__alloyId285"
    });
    $.__views.__alloyId280.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "TimeDay",
        id: "__alloyId286"
    });
    $.__views.__alloyId285.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId287"
    });
    $.__views.__alloyId285.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId288"
    });
    __alloyId279.push($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId289"
    });
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId290"
    });
    $.__views.__alloyId288.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Stefan Forsberg",
        id: "__alloyId291"
    });
    $.__views.__alloyId290.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId292"
    });
    $.__views.__alloyId290.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createView({
        layout: "horizontal",
        left: "10",
        id: "__alloyId293"
    });
    $.__views.__alloyId288.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "TimeDay",
        id: "__alloyId294"
    });
    $.__views.__alloyId293.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId295"
    });
    $.__views.__alloyId293.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId296"
    });
    __alloyId279.push($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId297"
    });
    $.__views.__alloyId296.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId298"
    });
    $.__views.__alloyId296.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Stefan Forsberg",
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId300"
    });
    $.__views.__alloyId298.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createView({
        layout: "horizontal",
        left: "10",
        id: "__alloyId301"
    });
    $.__views.__alloyId296.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "TimeDay",
        id: "__alloyId302"
    });
    $.__views.__alloyId301.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId303"
    });
    $.__views.__alloyId301.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId304"
    });
    __alloyId279.push($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId305"
    });
    $.__views.__alloyId304.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId306"
    });
    $.__views.__alloyId304.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Stefan Forsberg",
        id: "__alloyId307"
    });
    $.__views.__alloyId306.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId308"
    });
    $.__views.__alloyId306.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createView({
        layout: "horizontal",
        left: "10",
        id: "__alloyId309"
    });
    $.__views.__alloyId304.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "TimeDay",
        id: "__alloyId310"
    });
    $.__views.__alloyId309.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId311"
    });
    $.__views.__alloyId309.add($.__views.__alloyId311);
    $.__views.TableView_1 = Ti.UI.createTableView({
        data: __alloyId279,
        id: "TableView_1"
    });
    $.__views.Window_1.add($.__views.TableView_1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;