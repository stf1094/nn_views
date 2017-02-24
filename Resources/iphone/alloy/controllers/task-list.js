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
    $.__views.View_1 = Ti.UI.createView({
        backgroundColor: "#193341",
        center: "100%",
        height: "10%",
        left: "0.00%",
        top: "0.00%",
        width: "100.00%",
        borderRadius: "0",
        id: "View_1"
    });
    $.__views.Window_1.add($.__views.View_1);
    $.__views.Label_1 = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: "30dp",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        height: "100.00%",
        left: "26.27%",
        top: "0.00%",
        width: "55.87%",
        text: "Project Name",
        id: "Label_1"
    });
    $.__views.View_1.add($.__views.Label_1);
    $.__views.View_2 = Ti.UI.createView({
        height: "89.96%",
        left: "0.00%",
        top: "9.96%",
        width: "100.00%",
        id: "View_2"
    });
    $.__views.Window_1.add($.__views.View_2);
    $.__views.Button_1 = Ti.UI.createButton({
        backgroundColor: "#ffffff",
        borderColor: "#193341",
        borderRadius: "10",
        borderWidth: "2",
        color: "#193341",
        height: "10%%",
        left: "66.13%",
        top: "3.21%",
        width: "30%",
        title: "Add Task",
        id: "Button_1"
    });
    $.__views.View_2.add($.__views.Button_1);
    $.__views.TextField_1 = Ti.UI.createTextField({
        width: "60%",
        height: "10.09%",
        borderRadius: "10",
        borderColor: "#E5E5E5",
        borderWidth: "1",
        left: "3.73%",
        top: "3.21%",
        backgroundColor: "#ececec",
        id: "TextField_1"
    });
    $.__views.View_2.add($.__views.TextField_1);
    var __alloyId116 = [];
    $.__views.__alloyId117 = {
        properties: {
            title: "Task 1",
            id: "__alloyId117"
        }
    };
    __alloyId116.push($.__views.__alloyId117);
    $.__views.__alloyId118 = {
        properties: {
            title: "Task 2",
            id: "__alloyId118"
        }
    };
    __alloyId116.push($.__views.__alloyId118);
    $.__views.__alloyId119 = {
        properties: {
            title: "Task 3",
            id: "__alloyId119"
        }
    };
    __alloyId116.push($.__views.__alloyId119);
    $.__views.__alloyId120 = {
        properties: {
            title: "Task 4",
            id: "__alloyId120"
        }
    };
    __alloyId116.push($.__views.__alloyId120);
    $.__views.__alloyId121 = {
        properties: {
            title: "Task 5",
            id: "__alloyId121"
        }
    };
    __alloyId116.push($.__views.__alloyId121);
    $.__views.__alloyId122 = {
        properties: {
            title: "Task 6",
            id: "__alloyId122"
        }
    };
    __alloyId116.push($.__views.__alloyId122);
    $.__views.__alloyId114 = Ti.UI.createListSection({
        id: "__alloyId114"
    });
    $.__views.__alloyId114.items = __alloyId116;
    var __alloyId123 = [];
    __alloyId123.push($.__views.__alloyId114);
    $.__views.__alloyId113 = Ti.UI.createListView({
        sections: __alloyId123,
        top: "22%",
        id: "__alloyId113"
    });
    $.__views.Window_1.add($.__views.__alloyId113);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;