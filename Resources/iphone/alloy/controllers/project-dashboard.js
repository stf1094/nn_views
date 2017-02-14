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
    this.__controllerPath = "project-dashboard";
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
    $.__views.project - dashboard = Ti.UI.createWindow({
        title: "Project Dashboard",
        id: "project-dashboard"
    });
    $.__views.project - dashboard && $.addTopLevelView($.__views.project - dashboard);
    $.__views.__alloyId34 = Ti.UI.createButton({
        height: "8%",
        width: "44%",
        backgroundColor: "#ffffff",
        borderRadius: "10",
        color: "#193341",
        borderColor: "#193341",
        title: "Contacts",
        left: "5%",
        top: "2.5%",
        id: "__alloyId34"
    });
    $.__views.project - dashboard.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createButton({
        height: "8%",
        width: "44%",
        backgroundColor: "#ffffff",
        borderRadius: "10",
        color: "#193341",
        borderColor: "#193341",
        title: "Hot List",
        left: "51%",
        top: "2.5%",
        id: "__alloyId35"
    });
    $.__views.project - dashboard.add($.__views.__alloyId35);
    $.__views.View_1 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        center: "100%",
        height: "45.70%",
        left: "4.93%",
        top: "12%",
        width: "90%",
        borderRadius: "10",
        id: "View_1"
    });
    $.__views.project - dashboard.add($.__views.View_1);
    $.__views.ImageView_1 = Ti.UI.createImageView({
        id: "ImageView_1",
        image: "/images/iphone/tasks-bar.png",
        top: "1%",
        width: "100%"
    });
    $.__views.View_1.add($.__views.ImageView_1);
    $.__views.View_2 = Ti.UI.createView({
        id: "View_2",
        top: "50%",
        width: "90%"
    });
    $.__views.project - dashboard.add($.__views.View_2);
    $.__views.ImageView_2 = Ti.UI.createImageView({
        id: "ImageView_2",
        image: "/images/iphone/goals-bar.png",
        top: "1%",
        width: "100%"
    });
    $.__views.View_2.add($.__views.ImageView_2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;