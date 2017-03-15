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
    this.__controllerPath = "goal-list";
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
        id: "Window_1",
        title: "Goals"
    });
    $.__views.Window_1 && $.addTopLevelView($.__views.Window_1);
    $.__views.__alloyId93 = Ti.UI.createImageView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId93"
    });
    $.__views.Window_1.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        color: "white",
        text: "Project Name",
        top: 30,
        id: "__alloyId94"
    });
    $.__views.Window_1.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 100,
        id: "__alloyId95"
    });
    $.__views.Window_1.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: 60,
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createButton({
        left: "9.78%",
        width: "80%",
        height: "90px",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "Add Goal",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    var __alloyId99 = [];
    $.__views.__alloyId100 = Ti.UI.createView({
        layout: "vertical",
        title: "Goal 1",
        id: "__alloyId100"
    });
    __alloyId99.push($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: 50,
        width: "100%",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        color: "black",
        text: "GOAL 1",
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.ProgressBar_1 = Ti.UI.createProgressBar({
        top: 10,
        visible: "true",
        min: "0",
        max: "100",
        value: "50",
        height: "60px",
        width: "90%",
        id: "ProgressBar_1"
    });
    $.__views.__alloyId100.add($.__views.ProgressBar_1);
    $.__views.__alloyId103 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId103"
    });
    $.__views.__alloyId100.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        font: {
            fontSize: "20",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID YES",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        right: "5%",
        text: "See All",
        id: "__alloyId105"
    });
    $.__views.__alloyId103.add($.__views.__alloyId105);
    var __alloyId109 = [];
    $.__views.__alloyId110 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId110"
        }
    };
    __alloyId109.push($.__views.__alloyId110);
    $.__views.__alloyId111 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId111"
        }
    };
    __alloyId109.push($.__views.__alloyId111);
    $.__views.__alloyId112 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId112"
        }
    };
    __alloyId109.push($.__views.__alloyId112);
    $.__views.__alloyId113 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId113"
        }
    };
    __alloyId109.push($.__views.__alloyId113);
    $.__views.__alloyId114 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId114"
        }
    };
    __alloyId109.push($.__views.__alloyId114);
    $.__views.__alloyId115 = {
        properties: {
            title: "Contact 6",
            id: "__alloyId115"
        }
    };
    __alloyId109.push($.__views.__alloyId115);
    $.__views.__alloyId107 = Ti.UI.createListSection({
        id: "__alloyId107"
    });
    $.__views.__alloyId107.items = __alloyId109;
    var __alloyId116 = [];
    __alloyId116.push($.__views.__alloyId107);
    $.__views.__alloyId106 = Ti.UI.createListView({
        sections: __alloyId116,
        height: 300,
        title: "Said Yes",
        id: "__alloyId106"
    });
    $.__views.__alloyId100.add($.__views.__alloyId106);
    $.__views.__alloyId117 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId117"
    });
    $.__views.__alloyId100.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        font: {
            fontSize: "20",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID NO",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        right: "5%",
        text: "See All",
        id: "__alloyId119"
    });
    $.__views.__alloyId117.add($.__views.__alloyId119);
    var __alloyId123 = [];
    $.__views.__alloyId124 = {
        properties: {
            title: "Task 1",
            id: "__alloyId124"
        }
    };
    __alloyId123.push($.__views.__alloyId124);
    $.__views.__alloyId125 = {
        properties: {
            title: "Task 2",
            id: "__alloyId125"
        }
    };
    __alloyId123.push($.__views.__alloyId125);
    $.__views.__alloyId126 = {
        properties: {
            title: "Task 3",
            id: "__alloyId126"
        }
    };
    __alloyId123.push($.__views.__alloyId126);
    $.__views.__alloyId127 = {
        properties: {
            title: "Task 4",
            id: "__alloyId127"
        }
    };
    __alloyId123.push($.__views.__alloyId127);
    $.__views.__alloyId128 = {
        properties: {
            title: "Task 5",
            id: "__alloyId128"
        }
    };
    __alloyId123.push($.__views.__alloyId128);
    $.__views.__alloyId129 = {
        properties: {
            title: "Task 6",
            id: "__alloyId129"
        }
    };
    __alloyId123.push($.__views.__alloyId129);
    $.__views.__alloyId121 = Ti.UI.createListSection({
        id: "__alloyId121"
    });
    $.__views.__alloyId121.items = __alloyId123;
    var __alloyId130 = [];
    __alloyId130.push($.__views.__alloyId121);
    $.__views.__alloyId120 = Ti.UI.createListView({
        sections: __alloyId130,
        height: 300,
        title: "Said No",
        id: "__alloyId120"
    });
    $.__views.__alloyId100.add($.__views.__alloyId120);
    $.__views.__alloyId131 = Ti.UI.createView({
        layout: "vertical",
        title: "Goal 2",
        id: "__alloyId131"
    });
    __alloyId99.push($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: 50,
        width: "100%",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        color: "black",
        text: "GOAL 2",
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.ProgressBar_2 = Ti.UI.createProgressBar({
        top: 10,
        visible: "true",
        min: "0",
        max: "100",
        value: "50",
        height: "60px",
        width: "90%",
        id: "ProgressBar_2"
    });
    $.__views.__alloyId131.add($.__views.ProgressBar_2);
    $.__views.__alloyId134 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId134"
    });
    $.__views.__alloyId131.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        font: {
            fontSize: "20",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID YES",
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        right: "5%",
        text: "See All",
        id: "__alloyId136"
    });
    $.__views.__alloyId134.add($.__views.__alloyId136);
    var __alloyId140 = [];
    $.__views.__alloyId141 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId141"
        }
    };
    __alloyId140.push($.__views.__alloyId141);
    $.__views.__alloyId142 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId142"
        }
    };
    __alloyId140.push($.__views.__alloyId142);
    $.__views.__alloyId143 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId143"
        }
    };
    __alloyId140.push($.__views.__alloyId143);
    $.__views.__alloyId144 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId144"
        }
    };
    __alloyId140.push($.__views.__alloyId144);
    $.__views.__alloyId145 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId145"
        }
    };
    __alloyId140.push($.__views.__alloyId145);
    $.__views.__alloyId146 = {
        properties: {
            title: "Contact 6",
            id: "__alloyId146"
        }
    };
    __alloyId140.push($.__views.__alloyId146);
    $.__views.__alloyId138 = Ti.UI.createListSection({
        id: "__alloyId138"
    });
    $.__views.__alloyId138.items = __alloyId140;
    var __alloyId147 = [];
    __alloyId147.push($.__views.__alloyId138);
    $.__views.__alloyId137 = Ti.UI.createListView({
        sections: __alloyId147,
        height: 300,
        title: "Said Yes",
        id: "__alloyId137"
    });
    $.__views.__alloyId131.add($.__views.__alloyId137);
    $.__views.__alloyId148 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId148"
    });
    $.__views.__alloyId131.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        font: {
            fontSize: "20",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID NO",
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
        right: "5%",
        text: "See All",
        id: "__alloyId150"
    });
    $.__views.__alloyId148.add($.__views.__alloyId150);
    var __alloyId154 = [];
    $.__views.__alloyId155 = {
        properties: {
            title: "Task 1",
            id: "__alloyId155"
        }
    };
    __alloyId154.push($.__views.__alloyId155);
    $.__views.__alloyId156 = {
        properties: {
            title: "Task 2",
            id: "__alloyId156"
        }
    };
    __alloyId154.push($.__views.__alloyId156);
    $.__views.__alloyId157 = {
        properties: {
            title: "Task 3",
            id: "__alloyId157"
        }
    };
    __alloyId154.push($.__views.__alloyId157);
    $.__views.__alloyId158 = {
        properties: {
            title: "Task 4",
            id: "__alloyId158"
        }
    };
    __alloyId154.push($.__views.__alloyId158);
    $.__views.__alloyId159 = {
        properties: {
            title: "Task 5",
            id: "__alloyId159"
        }
    };
    __alloyId154.push($.__views.__alloyId159);
    $.__views.__alloyId160 = {
        properties: {
            title: "Task 6",
            id: "__alloyId160"
        }
    };
    __alloyId154.push($.__views.__alloyId160);
    $.__views.__alloyId152 = Ti.UI.createListSection({
        id: "__alloyId152"
    });
    $.__views.__alloyId152.items = __alloyId154;
    var __alloyId161 = [];
    __alloyId161.push($.__views.__alloyId152);
    $.__views.__alloyId151 = Ti.UI.createListView({
        sections: __alloyId161,
        height: 300,
        title: "Said No",
        id: "__alloyId151"
    });
    $.__views.__alloyId131.add($.__views.__alloyId151);
    $.__views.__alloyId98 = Ti.UI.createScrollableView({
        views: __alloyId99,
        id: "__alloyId98"
    });
    $.__views.__alloyId95.add($.__views.__alloyId98);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;