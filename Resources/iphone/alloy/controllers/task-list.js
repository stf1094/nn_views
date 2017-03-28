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
    $.__views.__alloyId343 = Ti.UI.createView({
        top: 0,
        id: "__alloyId343"
    });
    $.__views.Window_1.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createImageView({
        width: "100%",
        height: "200px",
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId344"
    });
    $.__views.__alloyId343.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createLabel(function() {
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
            id: "__alloyId345"
        });
        return o;
    }());
    $.__views.__alloyId343.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createView({
        layout: "vertical",
        top: 110,
        id: "__alloyId346"
    });
    $.__views.__alloyId343.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createView({
        height: 70,
        id: "__alloyId347"
    });
    $.__views.__alloyId346.add($.__views.__alloyId347);
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
    $.__views.__alloyId347.add($.__views.Button_1);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "60%",
        height: "90px",
        borderRadius: "10",
        left: "3.73%",
        top: "3.21%",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.__alloyId347.add($.__views.TextField_1);
    $.__views.__alloyId348 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        text: "Project Tasks",
        id: "__alloyId348"
    });
    $.__views.__alloyId346.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 240,
        id: "__alloyId349"
    });
    $.__views.Window_1.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId350"
    });
    $.__views.__alloyId349.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "IN THE QUEUE",
        id: "__alloyId351"
    });
    $.__views.__alloyId350.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId352"
    });
    $.__views.__alloyId350.add($.__views.__alloyId352);
    var __alloyId356 = [];
    $.__views.__alloyId357 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId357"
        }
    };
    __alloyId356.push($.__views.__alloyId357);
    $.__views.__alloyId358 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId358"
        }
    };
    __alloyId356.push($.__views.__alloyId358);
    $.__views.__alloyId359 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId359"
        }
    };
    __alloyId356.push($.__views.__alloyId359);
    $.__views.__alloyId360 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId360"
        }
    };
    __alloyId356.push($.__views.__alloyId360);
    $.__views.__alloyId361 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId361"
        }
    };
    __alloyId356.push($.__views.__alloyId361);
    $.__views.__alloyId354 = Ti.UI.createListSection({
        title: "Today",
        id: "__alloyId354"
    });
    $.__views.__alloyId354.items = __alloyId356;
    var __alloyId362 = [];
    __alloyId362.push($.__views.__alloyId354);
    $.__views.__alloyId353 = Ti.UI.createListView({
        sections: __alloyId362,
        title: "In the Queue",
        id: "__alloyId353"
    });
    $.__views.__alloyId349.add($.__views.__alloyId353);
    $.__views.__alloyId363 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId363"
    });
    $.__views.__alloyId349.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "OTHER TASKS",
        id: "__alloyId364"
    });
    $.__views.__alloyId363.add($.__views.__alloyId364);
    $.__views.__alloyId365 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        right: "5%",
        text: "See All",
        id: "__alloyId365"
    });
    $.__views.__alloyId363.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        left: "5%",
        text: "+",
        id: "__alloyId366"
    });
    $.__views.__alloyId363.add($.__views.__alloyId366);
    var __alloyId370 = [];
    $.__views.__alloyId371 = {
        properties: {
            title: "Task 1",
            id: "__alloyId371"
        }
    };
    __alloyId370.push($.__views.__alloyId371);
    $.__views.__alloyId372 = {
        properties: {
            title: "Task 2",
            id: "__alloyId372"
        }
    };
    __alloyId370.push($.__views.__alloyId372);
    $.__views.__alloyId373 = {
        properties: {
            title: "Task 3",
            id: "__alloyId373"
        }
    };
    __alloyId370.push($.__views.__alloyId373);
    $.__views.__alloyId374 = {
        properties: {
            title: "Task 4",
            id: "__alloyId374"
        }
    };
    __alloyId370.push($.__views.__alloyId374);
    $.__views.__alloyId375 = {
        properties: {
            title: "Task 5",
            id: "__alloyId375"
        }
    };
    __alloyId370.push($.__views.__alloyId375);
    $.__views.__alloyId376 = {
        properties: {
            title: "Task 6",
            id: "__alloyId376"
        }
    };
    __alloyId370.push($.__views.__alloyId376);
    $.__views.__alloyId368 = Ti.UI.createListSection({
        id: "__alloyId368"
    });
    $.__views.__alloyId368.items = __alloyId370;
    var __alloyId377 = [];
    __alloyId377.push($.__views.__alloyId368);
    $.__views.__alloyId367 = Ti.UI.createListView({
        sections: __alloyId377,
        title: "Tasks",
        id: "__alloyId367"
    });
    $.__views.__alloyId349.add($.__views.__alloyId367);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;