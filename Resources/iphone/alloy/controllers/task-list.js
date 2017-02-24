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
    $.__views.__alloyId134 = Ti.UI.createImageView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId134"
    });
    $.__views.Window_1.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel(function() {
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
            id: "__alloyId135"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createView({
        layout: "vertical",
        top: 100,
        id: "__alloyId136"
    });
    $.__views.Window_1.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
        height: 50,
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "TASKS",
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createView({
        height: 90,
        id: "__alloyId139"
    });
    $.__views.__alloyId136.add($.__views.__alloyId139);
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
    $.__views.__alloyId139.add($.__views.Button_1);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "60%",
        height: "90px",
        borderRadius: "10",
        left: "3.73%",
        top: "3.21%",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.__alloyId139.add($.__views.TextField_1);
    var __alloyId143 = [];
    $.__views.__alloyId144 = {
        properties: {
            title: "Task 1",
            id: "__alloyId144"
        }
    };
    __alloyId143.push($.__views.__alloyId144);
    $.__views.__alloyId145 = {
        properties: {
            title: "Task 2",
            id: "__alloyId145"
        }
    };
    __alloyId143.push($.__views.__alloyId145);
    $.__views.__alloyId146 = {
        properties: {
            title: "Task 3",
            id: "__alloyId146"
        }
    };
    __alloyId143.push($.__views.__alloyId146);
    $.__views.__alloyId147 = {
        properties: {
            title: "Task 4",
            id: "__alloyId147"
        }
    };
    __alloyId143.push($.__views.__alloyId147);
    $.__views.__alloyId148 = {
        properties: {
            title: "Task 5",
            id: "__alloyId148"
        }
    };
    __alloyId143.push($.__views.__alloyId148);
    $.__views.__alloyId149 = {
        properties: {
            title: "Task 6",
            id: "__alloyId149"
        }
    };
    __alloyId143.push($.__views.__alloyId149);
    $.__views.__alloyId141 = Ti.UI.createListSection({
        id: "__alloyId141"
    });
    $.__views.__alloyId141.items = __alloyId143;
    var __alloyId150 = [];
    __alloyId150.push($.__views.__alloyId141);
    $.__views.__alloyId140 = Ti.UI.createListView({
        sections: __alloyId150,
        id: "__alloyId140"
    });
    $.__views.__alloyId136.add($.__views.__alloyId140);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;