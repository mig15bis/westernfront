main.floors.MT0=
{
    "floorId": "MT0",
    "title": "地图",
    "name": "地图",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground6",
    "firstArrive": [
        "1918年，当硝烟散尽，留下的只有满目疮痍。",
        "作为战败方，德国失去了大片土地，国内也被破环的遍地狼藉。",
        "无数家庭破碎，工人失业，战争赔款，凡尔赛条约……战胜国们似乎并非为了伸张正义，而是换了一种抢劫的方式。",
        "偏执而极端的希特勒认为，这个仇一定要报。",
        "他撕毁凡尔赛条约，无视战争赔款，并带领德国在经济大萧条中成功逆袭。现在，是时候，清算一切了。",
        "捷克斯洛伐克、奥地利、波兰、丹麦、挪威……面对这些赤裸裸的侵略行为，英法两国的无能政府却只是软弱无力的抗议。本来希特勒还有所忌惮，看见英法的态度后，他开始……飘了。",
        "将外围的这些小国都吃干抹净后，希特勒大手一挥，要求军方着手拟定一份“复仇计划”。",
        "这些显眼的行动不可能逃出英法的眼线。这两个昔日的仇敌只好再次联合，构筑防线。",
        "1940年5月9日，德国空军出动，把炸弹扔进了自家地盘，以数百名本国无辜平民的伤亡为由，诬陷给荷兰和比利时两个中立国作为开战理由。",
        "5月10日，法国、荷兰、比利时、卢森堡的天空，响起了德国轰炸机的引擎声——代号“黄色方案”，开始行动。",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "chapter1.jpg",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "sleep",
            "time": 2000
        },
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
            "type": "hideImage",
            "code": 1,
            "time": 0
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "gaijin4.mp3"
        },
        "指挥官阁下，紧急情况，德军已经开始了他们的进攻！",
        "今天早上，我们和盟友的重要基地均遭空袭，损失情况还在统计当中。现在我们需要全力应对眼下的进攻。",
        {
            "type": "move",
            "loc": [
                12,
                1
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                12,
                2
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                2
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                3
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                4
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                9,
                4
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                5
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                6
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                9,
                1
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    1
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                10,
                1
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    1
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                7,
                2
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                8,
                2
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                6,
                3
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                8,
                5
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    5
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                8,
                6
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "move",
            "loc": [
                11,
                1
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                2
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                2
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                9,
                3
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                4
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                4
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                9,
                5
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                9,
                6
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "waitAsync"
        },
        "看样子德军是按计划进行的。之前截获的情报称，德军将会佯攻马奇诺防线，主力部队会沿着比利时和荷兰进攻。",
        "我们的主力部队早已在那边严阵以待，但佯攻的敌人也不能置之不理。",
        {
            "type": "show",
            "loc": [
                [
                    10,
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
                    11,
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
                    11,
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
                    11,
                    13
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    12,
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
                    12,
                    14
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "指挥官阁下，你的任务很简单，那就是击溃马奇诺方向的敌军。他们没有多少重武器，很容易对付，就当是给你作为新手演练了。",
        "我们历经数年修建的马奇诺防线可不是软柿子，命令你的部下马上集合，让德国佬常常我们的厉害！",
        {
            "type": "changeFloor",
            "floorId": "prepare1",
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
        "10,9": {
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
        "11,10": {
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
        "11,11": {
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
        "12,12": {
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
        "11,13": {
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
        "12,14": {
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
    [10250,10242,495,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [499,499,  0,  0,  0,  0,  0,  0,  0,494,494,  0,224,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,494,494,  0,  0,226,201,  0,  0],
    [  0,  0,494,507,  0,  0,494,  0,  0,  0,224,  0,  0,  0,205],
    [  0,  0,506,494,507,  0,  0,  0,  0,226,  0,201,  0,207,  0],
    [  0,  0,  0,507,506,494,355,355,494,  0,224,  0,  0,  0,205],
    [  0,  0,  0,  0,  0,  0,355,355,494,226,  0,201,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,355,355,  0,  0,  0,  0,  0,205,  0],
    [  0,  0,  0,495,  0,  0,  0,501,501,  0,  0,  0,  0,  0,207],
    [  0,  0,  0,  0,  0,  0,506,  0,  0,501,224,  0,  0,  0,  0],
    [  0,  0,  0,  0,495,  0,  0,494,  0,501,  0,201,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,494,501,  0,224,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,507,  0,  0,501,  0,201,  0,  0],
    [  0,  0,  0,  0,495,  0,  0,  0,506,  0,501,224,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,494,  0,501,  0,  0,201,  0,  0]
],
    "bgmap": [
    [492,492,492, 16, 16, 16, 16, 16, 16, 16,491,491,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16,491,491,491,  0,  0,  0,  0],
    [ 16, 16, 16, 16,491,491,491,491,491,491,491,  0,  0,  0,  0],
    [493,493,493,493,491,491,491,491,491,  0,  0,  0,  0,  0,  0],
    [493,493,493,493,493,491,491,491,491,  0,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,491,  0,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,491,  0,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,491,  0,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,  0,  0,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,359,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,359,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,359,  0,  0,  0],
    [493,493,493,493,493,493,493,493,493,493,493,359,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [10233,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10234,  0],
    [10249,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10232,  0],
    [10180,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10249,  0],
    [10245,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10244,  0],
    [10169,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10180,  0],
    [10232,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10245,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10254,  0]
],
    "bgm": null,
    "area": "陆地"
}