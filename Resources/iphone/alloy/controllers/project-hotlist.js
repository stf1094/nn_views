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
    this.__controllerPath = "project-hotlist";
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
        title: "Window",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId213 = Ti.UI.createImageView({
        top: 0,
        image: "/images/iphone/project-hotlist-cover.png",
        id: "__alloyId213"
    });
    $.__views.Window_1.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
        height: 60,
        id: "__alloyId214"
    });
    $.__views.Window_1.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        top: 10,
        font: {
            fontSize: 30
        },
        text: "Project Name",
        id: "__alloyId215"
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    var __alloyId219 = [];
    $.__views.__alloyId220 = {
        properties: {
            height: 90,
            title: "Contact 1",
            id: "__alloyId220"
        }
    };
    __alloyId219.push($.__views.__alloyId220);
    $.__views.__alloyId221 = {
        properties: {
            height: 90,
            title: "Contact 2",
            id: "__alloyId221"
        }
    };
    __alloyId219.push($.__views.__alloyId221);
    $.__views.__alloyId222 = {
        properties: {
            height: 90,
            title: "Contact 3",
            id: "__alloyId222"
        }
    };
    __alloyId219.push($.__views.__alloyId222);
    $.__views.__alloyId223 = {
        properties: {
            height: 90,
            title: "Contact 4",
            id: "__alloyId223"
        }
    };
    __alloyId219.push($.__views.__alloyId223);
    $.__views.__alloyId224 = {
        properties: {
            height: 90,
            title: "Contact 5",
            id: "__alloyId224"
        }
    };
    __alloyId219.push($.__views.__alloyId224);
    $.__views.__alloyId225 = {
        properties: {
            height: 90,
            title: "Contact 6",
            id: "__alloyId225"
        }
    };
    __alloyId219.push($.__views.__alloyId225);
    $.__views.__alloyId226 = {
        properties: {
            height: 90,
            title: "Contact 7",
            id: "__alloyId226"
        }
    };
    __alloyId219.push($.__views.__alloyId226);
    $.__views.__alloyId227 = {
        properties: {
            height: 90,
            title: "Contact 8",
            id: "__alloyId227"
        }
    };
    __alloyId219.push($.__views.__alloyId227);
    $.__views.__alloyId217 = Ti.UI.createListSection({
        id: "__alloyId217"
    });
    $.__views.__alloyId217.items = __alloyId219;
    var __alloyId228 = [];
    __alloyId228.push($.__views.__alloyId217);
    $.__views.__alloyId216 = Ti.UI.createListView({
        sections: __alloyId228,
        id: "__alloyId216"
    });
    $.__views.Window_1.add($.__views.__alloyId216);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;