main.floors.MT6=
{
    "floorId": "MT6",
    "title": "地图",
    "name": "地图",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground6",
    "bgm": "wot1.mp3",
    "firstArrive": [
        {
            "type": "resumeBgm"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下！紧急情况！",
        "我们中计了，我们到目前为止在防御的全都是佯攻部队！",
        {
            "type": "drawArrow",
            "x1": 400,
            "y1": 384,
            "x2": 272,
            "y2": 384,
            "style": [
                255,
                0,
                2,
                1
            ],
            "lineWidth": 3
        },
        {
            "type": "move",
            "loc": [
                12,
                10
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:5"
            ]
        },
        {
            "type": "move",
            "loc": [
                13,
                10
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:5"
            ]
        },
        {
            "type": "move",
            "loc": [
                12,
                11
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:5"
            ]
        },
        {
            "type": "move",
            "loc": [
                12,
                12
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:5"
            ]
        },
        {
            "type": "move",
            "loc": [
                12,
                13
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:5"
            ]
        },
        {
            "type": "move",
            "loc": [
                13,
                11
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:5"
            ]
        },
        {
            "type": "move",
            "loc": [
                13,
                12
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:5"
            ]
        },
        {
            "type": "move",
            "loc": [
                13,
                13
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:5"
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "clearMap"
        },
        "真正的德军主力坦克部队从阿登森林，这个我们完全想不到的地方冲了进来！我们没有在那里布置任何防御！",
        "他们的速度快到难以置信，赶快集结你的人马过去拦住他们！至少也要给我们的大部队争取时间！",
        {
            "type": "show",
            "loc": [
                [
                    0,
                    9
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    1,
                    10
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    0,
                    11
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    2,
                    11
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    1,
                    12
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    0,
                    13
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "你最好立刻出发，他们实在太快了！",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "changeFloor",
            "floorId": "MT7",
            "loc": [
                7,
                7
            ],
            "direction": "down"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "1,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "0,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "0,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "2,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "1,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,507,494,201,  0,254,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,494,201,254,  0,226,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,507,201,254,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,494,507,201,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,494,507,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,494,  0,  0,  0,  0],
    [506,  0,  0,  0,  0,  0,  0,  0,  0,355,355,355,  0,  0,  0],
    [  0,494,  0,  0,  0,  0,  0,  0,  0,355,355,355,226,226,  0],
    [494,  0,494,  0,  0,  0,  0,  0,  0,355,355,355,226,226,  0],
    [  0,494,  0,  0,  0,  0,  0,  0,  0,355,355,355,226,226,  0],
    [506,  0,  0,  0,  0,  0,  0,  0,  0,355,355,355,226,226,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,355,355,355,  0,  0,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16,493,493,493,493,493,  0,  0,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,  0,  0,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,  0,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,493,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,493,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,493,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,493,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,493,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,493,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,493,493,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,493,493,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}