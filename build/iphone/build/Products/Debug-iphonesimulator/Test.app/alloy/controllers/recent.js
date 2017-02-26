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
    $.__views.__alloyId150 = Ti.UI.createImageView({
        top: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        image: "/images/iphone/recent-cover.png",
        id: "__alloyId150"
    });
    $.__views.Window_1.add($.__views.__alloyId150);
    var __alloyId151 = [];
    $.__views.__alloyId152 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId152"
    });
    __alloyId151.push($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId153"
    });
    $.__views.__alloyId152.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId154"
    });
    $.__views.__alloyId152.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        text: "Stefan Forsberg",
        id: "__alloyId155"
    });
    $.__views.__alloyId154.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId156"
    });
    $.__views.__alloyId154.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "TimeDay",
        id: "__alloyId157"
    });
    $.__views.__alloyId152.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId158"
    });
    $.__views.__alloyId152.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId159"
    });
    __alloyId151.push($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId160"
    });
    $.__views.__alloyId159.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId161"
    });
    $.__views.__alloyId159.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        text: "Stefan Forsberg",
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "TimeDay",
        id: "__alloyId164"
    });
    $.__views.__alloyId159.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId165"
    });
    $.__views.__alloyId159.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId166"
    });
    __alloyId151.push($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId168"
    });
    $.__views.__alloyId166.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        text: "Stefan Forsberg",
        id: "__alloyId169"
    });
    $.__views.__alloyId168.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId170"
    });
    $.__views.__alloyId168.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "TimeDay",
        id: "__alloyId171"
    });
    $.__views.__alloyId166.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId172"
    });
    $.__views.__alloyId166.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: "140px",
        id: "__alloyId173"
    });
    __alloyId151.push($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        height: "100px",
        image: "/images/iphone/project-shuriken.png",
        width: "100px",
        id: "__alloyId174"
    });
    $.__views.__alloyId173.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createView({
        layout: "vertical",
        width: 210,
        id: "__alloyId175"
    });
    $.__views.__alloyId173.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 14
        },
        text: "Stefan Forsberg",
        id: "__alloyId176"
    });
    $.__views.__alloyId175.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "This this the most recent message",
        top: 5,
        id: "__alloyId177"
    });
    $.__views.__alloyId175.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createLabel({
        top: 10,
        left: 10,
        font: {
            fontSize: 12
        },
        color: "#9d9d9d",
        text: "TimeDay",
        id: "__alloyId178"
    });
    $.__views.__alloyId173.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createImageView({
        top: 10,
        left: 10,
        image: "images/iphone/arrow-right.png",
        height: "30px",
        width: "30px",
        id: "__alloyId179"
    });
    $.__views.__alloyId173.add($.__views.__alloyId179);
    $.__views.TableView_1 = Ti.UI.createTableView({
        data: __alloyId151,
        id: "TableView_1"
    });
    $.__views.Window_1.add($.__views.TableView_1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;