main.floors.MT350=
{
    "floorId": "MT350",
    "title": "德国",
    "name": "德国",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "ground6",
    "bgm": "europe4.mp3",
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "relax.mp3"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 47 速度与激情",
        {
            "type": "playSound",
            "name": "bomber.mp3"
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:8"
            ]
        },
        "\t[盟军指挥官,hero]编队汇合完毕，保持队形，集中注意力，敌人可能出现在任何方向。",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "setBlock",
            "number": "me262",
            "loc": [
                [
                    0,
                    13
                ]
            ],
            "time": 0
        },
        {
            "type": "playSound",
            "name": "v_jet_pass.mp3"
        },
        {
            "type": "move",
            "loc": [
                0,
                13
            ],
            "time": 50,
            "async": true,
            "steps": [
                "right:14"
            ]
        },
        {
            "type": "animate",
            "name": "fire",
            "loc": [
                2,
                13
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "moveHero",
            "time": 0,
            "async": true,
            "steps": [
                "down:0"
            ]
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                2,
                13
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": "hero",
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "playBgm",
            "name": "europe4.mp3"
        },
        "\t[第八航空队飞行员,N622]What the f...?",
        "\t[盟军指挥官,hero]什么东西？有人看清了吗？",
        {
            "type": "moveHero",
            "time": 0,
            "steps": [
                "left:0"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 0,
            "steps": [
                "right:0"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 0,
            "steps": [
                "down:0"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": "hero"
        },
        "\t[盟军指挥官,hero]六点方向！敌袭！躲避！",
        {
            "type": "setBlock",
            "number": "me262",
            "loc": [
                [
                    7,
                    13
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "me262",
            "loc": [
                [
                    6,
                    14
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "me262",
            "loc": [
                [
                    8,
                    14
                ]
            ],
            "time": 0
        },
        {
            "type": "playSound",
            "name": "v_jet_pass.mp3"
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 100,
            "keep": true,
            "async": true
        },
        {
            "type": "move",
            "loc": [
                7,
                13
            ],
            "time": 50,
            "keep": true,
            "async": true,
            "steps": [
                "up:8"
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                14
            ],
            "time": 50,
            "keep": true,
            "async": true,
            "steps": [
                "up:8"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                14
            ],
            "time": 50,
            "keep": true,
            "async": true,
            "steps": [
                "up:8"
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "changeFloor",
            "floorId": "MT351",
            "loc": [
                7,
                14
            ],
            "direction": "up"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
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
    [  0,  0,  0,  0,633,  0,633,  0,  0,633,  0,633,  0,  0,  0],
    [  0,  0,  0,  0,  0,633,  0,  0,  0,  0,633,  0,  0,  0,  0],
    [  0,  0,622,  0,  0,  0,  0,  0,  0,  0,  0,  0,622,  0,  0],
    [  0,622,  0,622,  0,  0,  0,  0,  0,  0,  0,622,  0,622,  0],
    [622,  0,  0,  0,622,  0,  0,  0,  0,  0,622,  0,  0,  0,622],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,633,  0,  0,622,  0,  0,  0,  0,  0,622,  0,  0,633,  0],
    [633,  0,  0,622,  0,622,  0,  0,  0,622,  0,622,  0,  0,633],
    [  0,  0,622,  0,  0,  0,622,  0,622,  0,  0,  0,622,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [622,  0,  0,  0,622,  0,  0,  0,  0,  0,622,  0,  0,  0,622],
    [  0,622,  0,622,  0,  0,  0,  0,  0,  0,  0,622,  0,622,  0],
    [  0,  0,622,  0,  0,  0,  0,  0,  0,  0,  0,  0,622,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}