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
    $.__views.__alloyId354 = Ti.UI.createView({
        top: 0,
        id: "__alloyId354"
    });
    $.__views.Window_1.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createImageView({
        width: "100%",
        height: "200px",
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId355"
    });
    $.__views.__alloyId354.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "white",
        text: "Project Name",
        top: 30,
        id: "__alloyId356"
    });
    $.__views.__alloyId354.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createView({
        layout: "vertical",
        top: 110,
        id: "__alloyId357"
    });
    $.__views.__alloyId354.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createView({
        height: 70,
        id: "__alloyId358"
    });
    $.__views.__alloyId357.add($.__views.__alloyId358);
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
    $.__views.__alloyId358.add($.__views.Button_1);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "60%",
        height: "90px",
        borderRadius: "10",
        left: "3.73%",
        top: "3.21%",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.__alloyId358.add($.__views.TextField_1);
    $.__views.__alloyId359 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        color: "black",
        text: "Project Tasks",
        id: "__alloyId359"
    });
    $.__views.__alloyId357.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 240,
        id: "__alloyId360"
    });
    $.__views.Window_1.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId361"
    });
    $.__views.__alloyId360.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        color: "black",
        text: "IN THE QUEUE",
        id: "__alloyId362"
    });
    $.__views.__alloyId361.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "black",
        right: "5%",
        text: "See All",
        id: "__alloyId363"
    });
    $.__views.__alloyId361.add($.__views.__alloyId363);
    var __alloyId367 = [];
    $.__views.__alloyId368 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId368"
        }
    };
    __alloyId367.push($.__views.__alloyId368);
    $.__views.__alloyId369 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId369"
        }
    };
    __alloyId367.push($.__views.__alloyId369);
    $.__views.__alloyId370 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId370"
        }
    };
    __alloyId367.push($.__views.__alloyId370);
    $.__views.__alloyId371 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId371"
        }
    };
    __alloyId367.push($.__views.__alloyId371);
    $.__views.__alloyId372 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId372"
        }
    };
    __alloyId367.push($.__views.__alloyId372);
    $.__views.__alloyId365 = Ti.UI.createListSection({
        title: "Today",
        id: "__alloyId365"
    });
    $.__views.__alloyId365.items = __alloyId367;
    var __alloyId373 = [];
    __alloyId373.push($.__views.__alloyId365);
    $.__views.__alloyId364 = Ti.UI.createListView({
        sections: __alloyId373,
        title: "In the Queue",
        id: "__alloyId364"
    });
    $.__views.__alloyId360.add($.__views.__alloyId364);
    $.__views.__alloyId374 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId374"
    });
    $.__views.__alloyId360.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        color: "black",
        text: "OTHER TASKS",
        id: "__alloyId375"
    });
    $.__views.__alloyId374.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        color: "black",
        right: "5%",
        text: "See All",
        id: "__alloyId376"
    });
    $.__views.__alloyId374.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        color: "black",
        left: "5%",
        text: "+",
        id: "__alloyId377"
    });
    $.__views.__alloyId374.add($.__views.__alloyId377);
    var __alloyId381 = [];
    $.__views.__alloyId382 = {
        properties: {
            title: "Task 1",
            id: "__alloyId382"
        }
    };
    __alloyId381.push($.__views.__alloyId382);
    $.__views.__alloyId383 = {
        properties: {
            title: "Task 2",
            id: "__alloyId383"
        }
    };
    __alloyId381.push($.__views.__alloyId383);
    $.__views.__alloyId384 = {
        properties: {
            title: "Task 3",
            id: "__alloyId384"
        }
    };
    __alloyId381.push($.__views.__alloyId384);
    $.__views.__alloyId385 = {
        properties: {
            title: "Task 4",
            id: "__alloyId385"
        }
    };
    __alloyId381.push($.__views.__alloyId385);
    $.__views.__alloyId386 = {
        properties: {
            title: "Task 5",
            id: "__alloyId386"
        }
    };
    __alloyId381.push($.__views.__alloyId386);
    $.__views.__alloyId387 = {
        properties: {
            title: "Task 6",
            id: "__alloyId387"
        }
    };
    __alloyId381.push($.__views.__alloyId387);
    $.__views.__alloyId379 = Ti.UI.createListSection({
        id: "__alloyId379"
    });
    $.__views.__alloyId379.items = __alloyId381;
    var __alloyId388 = [];
    __alloyId388.push($.__views.__alloyId379);
    $.__views.__alloyId378 = Ti.UI.createListView({
        sections: __alloyId388,
        title: "Tasks",
        id: "__alloyId378"
    });
    $.__views.__alloyId360.add($.__views.__alloyId378);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;