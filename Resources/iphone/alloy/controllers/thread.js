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
    $.__views.__alloyId324 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId324"
    });
    $.__views.thread.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 0,
        height: 520,
        id: "__alloyId325"
    });
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId326"
    });
    $.__views.__alloyId325.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Message content",
        color: "black",
        id: "__alloyId327"
    });
    $.__views.__alloyId326.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId328"
    });
    $.__views.__alloyId325.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        text: "Message content",
        color: "white",
        id: "__alloyId329"
    });
    $.__views.__alloyId328.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId330"
    });
    $.__views.__alloyId325.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId331"
    });
    $.__views.__alloyId325.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId332"
    });
    $.__views.__alloyId325.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId333"
    });
    $.__views.__alloyId325.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId334"
    });
    $.__views.__alloyId325.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId335"
    });
    $.__views.__alloyId325.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId336"
    });
    $.__views.__alloyId325.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId337"
    });
    $.__views.__alloyId325.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId338"
    });
    $.__views.__alloyId325.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId339"
    });
    $.__views.__alloyId325.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createView({
        top: 10,
        left: 10,
        backgroundColor: "#ececec",
        borderRadius: "10",
        color: "black",
        width: "70%",
        height: "90px",
        id: "__alloyId340"
    });
    $.__views.__alloyId325.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createView({
        top: 10,
        right: 10,
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        width: "70%",
        height: "90px",
        id: "__alloyId341"
    });
    $.__views.__alloyId325.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: 50,
        id: "__alloyId342"
    });
    $.__views.__alloyId324.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createTextField({
        left: 10,
        width: "70%",
        height: "90px",
        borderRadius: "10",
        borderColor: "#ececec",
        hintText: "Message",
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createButton({
        left: 10,
        font: {
            fontSize: 30
        },
        height: "90px",
        width: "20%",
        color: "#193441",
        backgroundColor: "white",
        borderRadius: "10",
        borderColor: "#193441",
        borderWidth: "2",
        title: ">",
        id: "__alloyId344"
    });
    $.__views.__alloyId342.add($.__views.__alloyId344);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;