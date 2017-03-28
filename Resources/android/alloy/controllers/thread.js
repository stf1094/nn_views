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
    this.__controllerPath = "thread";
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
    $.__views.thread = Ti.UI.createWindow({
        title: "Thread",
        id: "thread"
    });
    $.__views.thread && $.addTopLevelView($.__views.thread);
    $.__views.__alloyId376 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId376"
    });
    $.__views.thread.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 0,
        height: 520,
        id: "__alloyId377"
    });
    $.__views.__alloyId376.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId378"
    });
    $.__views.__alloyId377.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "black",
        text: "Message content",
        id: "__alloyId379"
    });
    $.__views.__alloyId378.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId380"
    });
    $.__views.__alloyId377.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "white",
        text: "Message content",
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId382"
    });
    $.__views.__alloyId377.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId383"
    });
    $.__views.__alloyId377.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId384"
    });
    $.__views.__alloyId377.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId385"
    });
    $.__views.__alloyId377.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId386"
    });
    $.__views.__alloyId377.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId387"
    });
    $.__views.__alloyId377.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId388"
    });
    $.__views.__alloyId377.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId389"
    });
    $.__views.__alloyId377.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId390"
    });
    $.__views.__alloyId377.add($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId391"
    });
    $.__views.__alloyId377.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId392"
    });
    $.__views.__alloyId377.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId393"
    });
    $.__views.__alloyId377.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: 50,
        id: "__alloyId394"
    });
    $.__views.__alloyId376.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createTextField({
        left: 10,
        width: "70%",
        height: "90px",
        borderRadius: "10",
        borderColor: "#ececec",
        hintText: "Message",
        id: "__alloyId395"
    });
    $.__views.__alloyId394.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createButton({
        left: 10,
        font: {
            fontSize: 30
        },
        height: "90px",
        width: "20%",
        color: "black",
        backgroundColor: "white",
        borderRadius: "10",
        borderColor: "#193441",
        borderWidth: "2",
        title: ">",
        id: "__alloyId396"
    });
    $.__views.__alloyId394.add($.__views.__alloyId396);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;