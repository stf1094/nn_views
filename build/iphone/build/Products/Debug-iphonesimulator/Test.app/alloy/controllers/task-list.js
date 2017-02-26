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
    $.__views.__alloyId198 = Ti.UI.createImageView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId198"
    });
    $.__views.Window_1.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel(function() {
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
            id: "__alloyId199"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
        layout: "vertical",
        top: 100,
        id: "__alloyId200"
    });
    $.__views.Window_1.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createView({
        height: 50,
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "TASKS",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createView({
        height: 90,
        id: "__alloyId203"
    });
    $.__views.__alloyId200.add($.__views.__alloyId203);
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
    $.__views.__alloyId203.add($.__views.Button_1);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "60%",
        height: "90px",
        borderRadius: "10",
        left: "3.73%",
        top: "3.21%",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.__alloyId203.add($.__views.TextField_1);
    var __alloyId207 = [];
    $.__views.__alloyId208 = {
        properties: {
            title: "Task 1",
            id: "__alloyId208"
        }
    };
    __alloyId207.push($.__views.__alloyId208);
    $.__views.__alloyId209 = {
        properties: {
            title: "Task 2",
            id: "__alloyId209"
        }
    };
    __alloyId207.push($.__views.__alloyId209);
    $.__views.__alloyId210 = {
        properties: {
            title: "Task 3",
            id: "__alloyId210"
        }
    };
    __alloyId207.push($.__views.__alloyId210);
    $.__views.__alloyId211 = {
        properties: {
            title: "Task 4",
            id: "__alloyId211"
        }
    };
    __alloyId207.push($.__views.__alloyId211);
    $.__views.__alloyId212 = {
        properties: {
            title: "Task 5",
            id: "__alloyId212"
        }
    };
    __alloyId207.push($.__views.__alloyId212);
    $.__views.__alloyId213 = {
        properties: {
            title: "Task 6",
            id: "__alloyId213"
        }
    };
    __alloyId207.push($.__views.__alloyId213);
    $.__views.__alloyId205 = Ti.UI.createListSection({
        id: "__alloyId205"
    });
    $.__views.__alloyId205.items = __alloyId207;
    var __alloyId214 = [];
    __alloyId214.push($.__views.__alloyId205);
    $.__views.__alloyId204 = Ti.UI.createListView({
        sections: __alloyId214,
        id: "__alloyId204"
    });
    $.__views.__alloyId200.add($.__views.__alloyId204);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;