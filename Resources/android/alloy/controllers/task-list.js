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
    $.__views.__alloyId352 = Ti.UI.createView({
        top: 0,
        id: "__alloyId352"
    });
    $.__views.Window_1.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createImageView({
        width: "100%",
        height: "200px",
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId353"
    });
    $.__views.__alloyId352.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "white",
        text: "Project Name",
        top: 30,
        id: "__alloyId354"
    });
    $.__views.__alloyId352.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createView({
        layout: "vertical",
        top: 110,
        id: "__alloyId355"
    });
    $.__views.__alloyId352.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createView({
        height: 70,
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
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
    $.__views.__alloyId356.add($.__views.Button_1);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "60%",
        height: "90px",
        borderRadius: "10",
        left: "3.73%",
        top: "3.21%",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.__alloyId356.add($.__views.TextField_1);
    $.__views.__alloyId357 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        color: "black",
        text: "Project Tasks",
        id: "__alloyId357"
    });
    $.__views.__alloyId355.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 240,
        id: "__alloyId358"
    });
    $.__views.Window_1.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId359"
    });
    $.__views.__alloyId358.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        color: "black",
        text: "IN THE QUEUE",
        id: "__alloyId360"
    });
    $.__views.__alloyId359.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "black",
        right: "5%",
        text: "See All",
        id: "__alloyId361"
    });
    $.__views.__alloyId359.add($.__views.__alloyId361);
    var __alloyId365 = [];
    $.__views.__alloyId366 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId366"
        }
    };
    __alloyId365.push($.__views.__alloyId366);
    $.__views.__alloyId367 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId367"
        }
    };
    __alloyId365.push($.__views.__alloyId367);
    $.__views.__alloyId368 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId368"
        }
    };
    __alloyId365.push($.__views.__alloyId368);
    $.__views.__alloyId369 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId369"
        }
    };
    __alloyId365.push($.__views.__alloyId369);
    $.__views.__alloyId370 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId370"
        }
    };
    __alloyId365.push($.__views.__alloyId370);
    $.__views.__alloyId363 = Ti.UI.createListSection({
        title: "Today",
        id: "__alloyId363"
    });
    $.__views.__alloyId363.items = __alloyId365;
    var __alloyId371 = [];
    __alloyId371.push($.__views.__alloyId363);
    $.__views.__alloyId362 = Ti.UI.createListView({
        sections: __alloyId371,
        title: "In the Queue",
        id: "__alloyId362"
    });
    $.__views.__alloyId358.add($.__views.__alloyId362);
    $.__views.__alloyId372 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId372"
    });
    $.__views.__alloyId358.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        color: "black",
        text: "OTHER TASKS",
        id: "__alloyId373"
    });
    $.__views.__alloyId372.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "black",
        right: "5%",
        text: "See All",
        id: "__alloyId374"
    });
    $.__views.__alloyId372.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        color: "black",
        left: "5%",
        text: "+",
        id: "__alloyId375"
    });
    $.__views.__alloyId372.add($.__views.__alloyId375);
    var __alloyId379 = [];
    $.__views.__alloyId380 = {
        properties: {
            title: "Task 1",
            id: "__alloyId380"
        }
    };
    __alloyId379.push($.__views.__alloyId380);
    $.__views.__alloyId381 = {
        properties: {
            title: "Task 2",
            id: "__alloyId381"
        }
    };
    __alloyId379.push($.__views.__alloyId381);
    $.__views.__alloyId382 = {
        properties: {
            title: "Task 3",
            id: "__alloyId382"
        }
    };
    __alloyId379.push($.__views.__alloyId382);
    $.__views.__alloyId383 = {
        properties: {
            title: "Task 4",
            id: "__alloyId383"
        }
    };
    __alloyId379.push($.__views.__alloyId383);
    $.__views.__alloyId384 = {
        properties: {
            title: "Task 5",
            id: "__alloyId384"
        }
    };
    __alloyId379.push($.__views.__alloyId384);
    $.__views.__alloyId385 = {
        properties: {
            title: "Task 6",
            id: "__alloyId385"
        }
    };
    __alloyId379.push($.__views.__alloyId385);
    $.__views.__alloyId377 = Ti.UI.createListSection({
        id: "__alloyId377"
    });
    $.__views.__alloyId377.items = __alloyId379;
    var __alloyId386 = [];
    __alloyId386.push($.__views.__alloyId377);
    $.__views.__alloyId376 = Ti.UI.createListView({
        sections: __alloyId386,
        title: "Tasks",
        id: "__alloyId376"
    });
    $.__views.__alloyId358.add($.__views.__alloyId376);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;