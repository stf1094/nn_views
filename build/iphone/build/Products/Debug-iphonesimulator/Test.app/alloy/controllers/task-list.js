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
    this.__controllerPath = "task-list";
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
        title: "Tasks",
        id: "Window_1"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId291 = Ti.UI.createView({
        top: 0,
        id: "__alloyId291"
    });
    $.__views.Window_1.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createImageView({
        width: "100%",
        height: "200px",
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId292"
    });
    $.__views.__alloyId291.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontSize: "30",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "45",
                fontFamily: "",
                fontStyle: "",
                fontWeight: "normal"
            }
        });
        Alloy.deepExtend(true, o, {
            color: "white",
            text: "Project Name",
            top: 30,
            id: "__alloyId293"
        });
        return o;
    }());
    $.__views.__alloyId291.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createView({
        layout: "vertical",
        top: 110,
        id: "__alloyId294"
    });
    $.__views.__alloyId291.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createView({
        height: 70,
        id: "__alloyId295"
    });
    $.__views.__alloyId294.add($.__views.__alloyId295);
    $.__views.Button_1 = Ti.UI.createButton({
        backgroundColor: "#ffffff",
        borderColor: "#193341",
        borderRadius: "10",
        borderWidth: "2",
        color: "#193341",
        height: "90px",
        left: "66.13%",
        top: "3.21%",
        width: "30%",
        title: "Add Task",
        id: "Button_1"
    });
    $.__views.__alloyId295.add($.__views.Button_1);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "60%",
        height: "90px",
        borderRadius: "10",
        left: "3.73%",
        top: "3.21%",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.__alloyId295.add($.__views.TextField_1);
    $.__views.__alloyId296 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        text: "Project Tasks",
        id: "__alloyId296"
    });
    $.__views.__alloyId294.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 240,
        id: "__alloyId297"
    });
    $.__views.Window_1.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId298"
    });
    $.__views.__alloyId297.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "IN THE QUEUE",
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId300"
    });
    $.__views.__alloyId298.add($.__views.__alloyId300);
    var __alloyId304 = [];
    $.__views.__alloyId305 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId305"
        }
    };
    __alloyId304.push($.__views.__alloyId305);
    $.__views.__alloyId306 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId306"
        }
    };
    __alloyId304.push($.__views.__alloyId306);
    $.__views.__alloyId307 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId307"
        }
    };
    __alloyId304.push($.__views.__alloyId307);
    $.__views.__alloyId308 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId308"
        }
    };
    __alloyId304.push($.__views.__alloyId308);
    $.__views.__alloyId309 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId309"
        }
    };
    __alloyId304.push($.__views.__alloyId309);
    $.__views.__alloyId302 = Ti.UI.createListSection({
        title: "Today",
        id: "__alloyId302"
    });
    $.__views.__alloyId302.items = __alloyId304;
    var __alloyId310 = [];
    __alloyId310.push($.__views.__alloyId302);
    $.__views.__alloyId301 = Ti.UI.createListView({
        sections: __alloyId310,
        title: "In the Queue",
        id: "__alloyId301"
    });
    $.__views.__alloyId297.add($.__views.__alloyId301);
    $.__views.__alloyId311 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId311"
    });
    $.__views.__alloyId297.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "OTHER TASKS",
        id: "__alloyId312"
    });
    $.__views.__alloyId311.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId313"
    });
    $.__views.__alloyId311.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        left: "5%",
        text: "+",
        id: "__alloyId314"
    });
    $.__views.__alloyId311.add($.__views.__alloyId314);
    var __alloyId318 = [];
    $.__views.__alloyId319 = {
        properties: {
            title: "Task 1",
            id: "__alloyId319"
        }
    };
    __alloyId318.push($.__views.__alloyId319);
    $.__views.__alloyId320 = {
        properties: {
            title: "Task 2",
            id: "__alloyId320"
        }
    };
    __alloyId318.push($.__views.__alloyId320);
    $.__views.__alloyId321 = {
        properties: {
            title: "Task 3",
            id: "__alloyId321"
        }
    };
    __alloyId318.push($.__views.__alloyId321);
    $.__views.__alloyId322 = {
        properties: {
            title: "Task 4",
            id: "__alloyId322"
        }
    };
    __alloyId318.push($.__views.__alloyId322);
    $.__views.__alloyId323 = {
        properties: {
            title: "Task 5",
            id: "__alloyId323"
        }
    };
    __alloyId318.push($.__views.__alloyId323);
    $.__views.__alloyId324 = {
        properties: {
            title: "Task 6",
            id: "__alloyId324"
        }
    };
    __alloyId318.push($.__views.__alloyId324);
    $.__views.__alloyId316 = Ti.UI.createListSection({
        id: "__alloyId316"
    });
    $.__views.__alloyId316.items = __alloyId318;
    var __alloyId325 = [];
    __alloyId325.push($.__views.__alloyId316);
    $.__views.__alloyId315 = Ti.UI.createListView({
        sections: __alloyId325,
        title: "Tasks",
        id: "__alloyId315"
    });
    $.__views.__alloyId297.add($.__views.__alloyId315);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;