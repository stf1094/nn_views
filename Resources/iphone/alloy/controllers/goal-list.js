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
    $.__views.__alloyId86 = Ti.UI.createImageView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId86"
    });
    $.__views.Window_1.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel(function() {
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
            id: "__alloyId87"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 100,
        id: "__alloyId88"
    });
    $.__views.Window_1.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: 60,
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createButton({
        left: "9.78%",
        width: "80%",
        height: "90px",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "Add Goal",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    var __alloyId92 = [];
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "vertical",
        title: "Goal 1",
        id: "__alloyId93"
    });
    __alloyId92.push($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: 50,
        width: "100%",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        color: "black",
        text: "GOAL 1",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
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
    $.__views.__alloyId93.add($.__views.ProgressBar_1);
    $.__views.__alloyId96 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId96"
    });
    $.__views.__alloyId93.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID YES",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        right: "5%",
        text: "See All",
        id: "__alloyId98"
    });
    $.__views.__alloyId96.add($.__views.__alloyId98);
    var __alloyId102 = [];
    $.__views.__alloyId103 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId103"
        }
    };
    __alloyId102.push($.__views.__alloyId103);
    $.__views.__alloyId104 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId104"
        }
    };
    __alloyId102.push($.__views.__alloyId104);
    $.__views.__alloyId105 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId105"
        }
    };
    __alloyId102.push($.__views.__alloyId105);
    $.__views.__alloyId106 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId106"
        }
    };
    __alloyId102.push($.__views.__alloyId106);
    $.__views.__alloyId107 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId107"
        }
    };
    __alloyId102.push($.__views.__alloyId107);
    $.__views.__alloyId108 = {
        properties: {
            title: "Contact 6",
            id: "__alloyId108"
        }
    };
    __alloyId102.push($.__views.__alloyId108);
    $.__views.__alloyId100 = Ti.UI.createListSection({
        id: "__alloyId100"
    });
    $.__views.__alloyId100.items = __alloyId102;
    var __alloyId109 = [];
    __alloyId109.push($.__views.__alloyId100);
    $.__views.__alloyId99 = Ti.UI.createListView({
        sections: __alloyId109,
        height: 300,
        title: "Said Yes",
        id: "__alloyId99"
    });
    $.__views.__alloyId93.add($.__views.__alloyId99);
    $.__views.__alloyId110 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId110"
    });
    $.__views.__alloyId93.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID NO",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        right: "5%",
        text: "See All",
        id: "__alloyId112"
    });
    $.__views.__alloyId110.add($.__views.__alloyId112);
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
        height: 300,
        title: "Said No",
        id: "__alloyId113"
    });
    $.__views.__alloyId93.add($.__views.__alloyId113);
    $.__views.__alloyId124 = Ti.UI.createView({
        layout: "vertical",
        title: "Goal 2",
        id: "__alloyId124"
    });
    __alloyId92.push($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: 50,
        width: "100%",
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        color: "black",
        text: "GOAL 2",
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
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
    $.__views.__alloyId124.add($.__views.ProgressBar_2);
    $.__views.__alloyId127 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId127"
    });
    $.__views.__alloyId124.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID YES",
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        right: "5%",
        text: "See All",
        id: "__alloyId129"
    });
    $.__views.__alloyId127.add($.__views.__alloyId129);
    var __alloyId133 = [];
    $.__views.__alloyId134 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId134"
        }
    };
    __alloyId133.push($.__views.__alloyId134);
    $.__views.__alloyId135 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId135"
        }
    };
    __alloyId133.push($.__views.__alloyId135);
    $.__views.__alloyId136 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId136"
        }
    };
    __alloyId133.push($.__views.__alloyId136);
    $.__views.__alloyId137 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId137"
        }
    };
    __alloyId133.push($.__views.__alloyId137);
    $.__views.__alloyId138 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId138"
        }
    };
    __alloyId133.push($.__views.__alloyId138);
    $.__views.__alloyId139 = {
        properties: {
            title: "Contact 6",
            id: "__alloyId139"
        }
    };
    __alloyId133.push($.__views.__alloyId139);
    $.__views.__alloyId131 = Ti.UI.createListSection({
        id: "__alloyId131"
    });
    $.__views.__alloyId131.items = __alloyId133;
    var __alloyId140 = [];
    __alloyId140.push($.__views.__alloyId131);
    $.__views.__alloyId130 = Ti.UI.createListView({
        sections: __alloyId140,
        height: 300,
        title: "Said Yes",
        id: "__alloyId130"
    });
    $.__views.__alloyId124.add($.__views.__alloyId130);
    $.__views.__alloyId141 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId141"
    });
    $.__views.__alloyId124.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID NO",
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
        right: "5%",
        text: "See All",
        id: "__alloyId143"
    });
    $.__views.__alloyId141.add($.__views.__alloyId143);
    var __alloyId147 = [];
    $.__views.__alloyId148 = {
        properties: {
            title: "Task 1",
            id: "__alloyId148"
        }
    };
    __alloyId147.push($.__views.__alloyId148);
    $.__views.__alloyId149 = {
        properties: {
            title: "Task 2",
            id: "__alloyId149"
        }
    };
    __alloyId147.push($.__views.__alloyId149);
    $.__views.__alloyId150 = {
        properties: {
            title: "Task 3",
            id: "__alloyId150"
        }
    };
    __alloyId147.push($.__views.__alloyId150);
    $.__views.__alloyId151 = {
        properties: {
            title: "Task 4",
            id: "__alloyId151"
        }
    };
    __alloyId147.push($.__views.__alloyId151);
    $.__views.__alloyId152 = {
        properties: {
            title: "Task 5",
            id: "__alloyId152"
        }
    };
    __alloyId147.push($.__views.__alloyId152);
    $.__views.__alloyId153 = {
        properties: {
            title: "Task 6",
            id: "__alloyId153"
        }
    };
    __alloyId147.push($.__views.__alloyId153);
    $.__views.__alloyId145 = Ti.UI.createListSection({
        id: "__alloyId145"
    });
    $.__views.__alloyId145.items = __alloyId147;
    var __alloyId154 = [];
    __alloyId154.push($.__views.__alloyId145);
    $.__views.__alloyId144 = Ti.UI.createListView({
        sections: __alloyId154,
        height: 300,
        title: "Said No",
        id: "__alloyId144"
    });
    $.__views.__alloyId124.add($.__views.__alloyId144);
    $.__views.__alloyId91 = Ti.UI.createScrollableView({
        views: __alloyId92,
        id: "__alloyId91"
    });
    $.__views.__alloyId88.add($.__views.__alloyId91);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;