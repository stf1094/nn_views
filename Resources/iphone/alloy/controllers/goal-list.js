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
    $.__views.__alloyId52 = Ti.UI.createImageView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: 0,
        image: "/images/iphone/project-dashboard-cover.png",
        id: "__alloyId52"
    });
    $.__views.Window_1.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel(function() {
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
            id: "__alloyId53"
        });
        return o;
    }());
    $.__views.Window_1.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createScrollView({
        layout: "vertical",
        top: 100,
        id: "__alloyId54"
    });
    $.__views.Window_1.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: 60,
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createButton({
        left: "9.78%",
        width: "80%",
        height: "90px",
        backgroundColor: "#f7941d",
        borderRadius: "10",
        color: "white",
        selectedBackgroundColor: "#e5790e",
        title: "Add Goal",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    var __alloyId58 = [];
    $.__views.__alloyId59 = Ti.UI.createView({
        layout: "vertical",
        title: "Goal 1",
        id: "__alloyId59"
    });
    __alloyId58.push($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: 50,
        width: "100%",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        color: "black",
        text: "GOAL 1",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
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
    $.__views.__alloyId59.add($.__views.ProgressBar_1);
    $.__views.__alloyId62 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId62"
    });
    $.__views.__alloyId59.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID YES",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        right: "5%",
        text: "See All",
        id: "__alloyId64"
    });
    $.__views.__alloyId62.add($.__views.__alloyId64);
    var __alloyId68 = [];
    $.__views.__alloyId69 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId69"
        }
    };
    __alloyId68.push($.__views.__alloyId69);
    $.__views.__alloyId70 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId70"
        }
    };
    __alloyId68.push($.__views.__alloyId70);
    $.__views.__alloyId71 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId71"
        }
    };
    __alloyId68.push($.__views.__alloyId71);
    $.__views.__alloyId72 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId72"
        }
    };
    __alloyId68.push($.__views.__alloyId72);
    $.__views.__alloyId73 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId73"
        }
    };
    __alloyId68.push($.__views.__alloyId73);
    $.__views.__alloyId74 = {
        properties: {
            title: "Contact 6",
            id: "__alloyId74"
        }
    };
    __alloyId68.push($.__views.__alloyId74);
    $.__views.__alloyId66 = Ti.UI.createListSection({
        id: "__alloyId66"
    });
    $.__views.__alloyId66.items = __alloyId68;
    var __alloyId75 = [];
    __alloyId75.push($.__views.__alloyId66);
    $.__views.__alloyId65 = Ti.UI.createListView({
        sections: __alloyId75,
        height: 300,
        title: "Said Yes",
        id: "__alloyId65"
    });
    $.__views.__alloyId59.add($.__views.__alloyId65);
    $.__views.__alloyId76 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId76"
    });
    $.__views.__alloyId59.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID NO",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        right: "5%",
        text: "See All",
        id: "__alloyId78"
    });
    $.__views.__alloyId76.add($.__views.__alloyId78);
    var __alloyId82 = [];
    $.__views.__alloyId83 = {
        properties: {
            title: "Task 1",
            id: "__alloyId83"
        }
    };
    __alloyId82.push($.__views.__alloyId83);
    $.__views.__alloyId84 = {
        properties: {
            title: "Task 2",
            id: "__alloyId84"
        }
    };
    __alloyId82.push($.__views.__alloyId84);
    $.__views.__alloyId85 = {
        properties: {
            title: "Task 3",
            id: "__alloyId85"
        }
    };
    __alloyId82.push($.__views.__alloyId85);
    $.__views.__alloyId86 = {
        properties: {
            title: "Task 4",
            id: "__alloyId86"
        }
    };
    __alloyId82.push($.__views.__alloyId86);
    $.__views.__alloyId87 = {
        properties: {
            title: "Task 5",
            id: "__alloyId87"
        }
    };
    __alloyId82.push($.__views.__alloyId87);
    $.__views.__alloyId88 = {
        properties: {
            title: "Task 6",
            id: "__alloyId88"
        }
    };
    __alloyId82.push($.__views.__alloyId88);
    $.__views.__alloyId80 = Ti.UI.createListSection({
        id: "__alloyId80"
    });
    $.__views.__alloyId80.items = __alloyId82;
    var __alloyId89 = [];
    __alloyId89.push($.__views.__alloyId80);
    $.__views.__alloyId79 = Ti.UI.createListView({
        sections: __alloyId89,
        height: 300,
        title: "Said No",
        id: "__alloyId79"
    });
    $.__views.__alloyId59.add($.__views.__alloyId79);
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "vertical",
        title: "Goal 2",
        id: "__alloyId90"
    });
    __alloyId58.push($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: 50,
        width: "100%",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        font: {
            fontSize: 30
        },
        color: "black",
        text: "GOAL 2",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
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
    $.__views.__alloyId90.add($.__views.ProgressBar_2);
    $.__views.__alloyId93 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId93"
    });
    $.__views.__alloyId90.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID YES",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        right: "5%",
        text: "See All",
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
    var __alloyId99 = [];
    $.__views.__alloyId100 = {
        properties: {
            title: "Contact 1",
            id: "__alloyId100"
        }
    };
    __alloyId99.push($.__views.__alloyId100);
    $.__views.__alloyId101 = {
        properties: {
            title: "Contact 2",
            id: "__alloyId101"
        }
    };
    __alloyId99.push($.__views.__alloyId101);
    $.__views.__alloyId102 = {
        properties: {
            title: "Contact 3",
            id: "__alloyId102"
        }
    };
    __alloyId99.push($.__views.__alloyId102);
    $.__views.__alloyId103 = {
        properties: {
            title: "Contact 4",
            id: "__alloyId103"
        }
    };
    __alloyId99.push($.__views.__alloyId103);
    $.__views.__alloyId104 = {
        properties: {
            title: "Contact 5",
            id: "__alloyId104"
        }
    };
    __alloyId99.push($.__views.__alloyId104);
    $.__views.__alloyId105 = {
        properties: {
            title: "Contact 6",
            id: "__alloyId105"
        }
    };
    __alloyId99.push($.__views.__alloyId105);
    $.__views.__alloyId97 = Ti.UI.createListSection({
        id: "__alloyId97"
    });
    $.__views.__alloyId97.items = __alloyId99;
    var __alloyId106 = [];
    __alloyId106.push($.__views.__alloyId97);
    $.__views.__alloyId96 = Ti.UI.createListView({
        sections: __alloyId106,
        height: 300,
        title: "Said Yes",
        id: "__alloyId96"
    });
    $.__views.__alloyId90.add($.__views.__alloyId96);
    $.__views.__alloyId107 = Ti.UI.createView({
        backgroundColor: "#ececec",
        height: 50,
        width: "100%",
        id: "__alloyId107"
    });
    $.__views.__alloyId90.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "SAID NO",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        font: {
            fontSize: "14",
            fontFamily: "",
            fontStyle: "",
            fontWeight: "normal"
        },
        right: "5%",
        text: "See All",
        id: "__alloyId109"
    });
    $.__views.__alloyId107.add($.__views.__alloyId109);
    var __alloyId113 = [];
    $.__views.__alloyId114 = {
        properties: {
            title: "Task 1",
            id: "__alloyId114"
        }
    };
    __alloyId113.push($.__views.__alloyId114);
    $.__views.__alloyId115 = {
        properties: {
            title: "Task 2",
            id: "__alloyId115"
        }
    };
    __alloyId113.push($.__views.__alloyId115);
    $.__views.__alloyId116 = {
        properties: {
            title: "Task 3",
            id: "__alloyId116"
        }
    };
    __alloyId113.push($.__views.__alloyId116);
    $.__views.__alloyId117 = {
        properties: {
            title: "Task 4",
            id: "__alloyId117"
        }
    };
    __alloyId113.push($.__views.__alloyId117);
    $.__views.__alloyId118 = {
        properties: {
            title: "Task 5",
            id: "__alloyId118"
        }
    };
    __alloyId113.push($.__views.__alloyId118);
    $.__views.__alloyId119 = {
        properties: {
            title: "Task 6",
            id: "__alloyId119"
        }
    };
    __alloyId113.push($.__views.__alloyId119);
    $.__views.__alloyId111 = Ti.UI.createListSection({
        id: "__alloyId111"
    });
    $.__views.__alloyId111.items = __alloyId113;
    var __alloyId120 = [];
    __alloyId120.push($.__views.__alloyId111);
    $.__views.__alloyId110 = Ti.UI.createListView({
        sections: __alloyId120,
        height: 300,
        title: "Said No",
        id: "__alloyId110"
    });
    $.__views.__alloyId90.add($.__views.__alloyId110);
    $.__views.__alloyId57 = Ti.UI.createScrollableView({
        views: __alloyId58,
        id: "__alloyId57"
    });
    $.__views.__alloyId54.add($.__views.__alloyId57);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;