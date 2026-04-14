main.floors.MT370=
{
    "floorId": "MT370",
    "title": "荷兰",
    "name": "荷兰",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass2",
    "bgm": "hitman.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,13": [
            "\f[wittmann.png,90,50]米歇尔·魏特曼，武装党卫队上尉，第二次世界大战中最成功和最著名的坦克指挥官。1939年10月参军，在5年的战斗中，他共击毁了138辆坦克，132门火炮，曾在波卡基村的战斗中驾驶虎式坦克单枪匹马击毁英军25辆坦克，14辆半履带车，14辆布伦通用载具和杀死几百名士兵。1944年8月8日，魏特曼的虎式坦克在前往卡昂的路上被盟军击毁，包括他在内的车组全部阵亡（本关所在时间线为1944年9月，此时魏特曼早已阵亡）。至于究竟是谁杀死了魏特曼，至今仍是个谜。目前最多的说法是一辆萤火虫坦克击穿并摧毁了魏特曼的虎式。"
        ],
        "7,0": [
            {
                "type": "choices",
                "text": "\t[WARNING]再次提醒：主线boss战开始后无法返回。确认前进？",
                "choices": [
                    {
                        "text": "前进",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT371",
                                "loc": [
                                    7,
                                    14
                                ],
                                "direction": "up"
                            }
                        ]
                    },
                    {
                        "text": "再等等",
                        "action": [
                            {
                                "type": "moveHero",
                                "steps": [
                                    "down:1"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,11": [
            {
                "type": "if",
                "condition": "(flag:fuji5!==true)",
                "true": [
                    {
                        "type": "animate",
                        "name": "vehicleexplore",
                        "loc": "hero",
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
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "-=",
                        "value": "600000"
                    },
                    "一声巨响过后，队伍打头的坦克被直接捅了个对穿，剧烈的爆炸将数吨重的炮塔都掀到了天上。你很快发现\r[yellow]左侧树丛里露出的一截倾斜装甲\r。"
                ]
            }
        ],
        "2,11": [
            {
                "type": "if",
                "condition": "((blockId:2,11!=='tigerking')&&(flag:fuji5!==true))",
                "true": [
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": [
                            2,
                            11
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "tigerking",
                        "loc": [
                            [
                                2,
                                11
                            ]
                        ],
                        "time": 0
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT369",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "14,7": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[50][1]=true\n}"
            }
        ],
        "2,11": [
            {
                "type": "setValue",
                "name": "flag:fuji5",
                "value": "true"
            },
            {
                "type": "setValue",
                "name": "flag:mission49tsk3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        11
                    ]
                ],
                "remove": true,
                "time": 0
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [373,384,146,524,146,580,146,620,146,643,643,146, 22,580, 22],
    [270,373,146,201,146,201,146, 82,146,201,146,146,146,384,146],
    [ 81,146,146,  0,146,  0,412,  0,376,  0,  0,146,  0,389,  0],
    [  0,412, 82,  0,146,265,146,146,146,146,265,146,146,146, 81],
    [590,  0,146,668,  0,  0,  0,146,391,  0,  0,146,668,664,518],
    [146,146,146,146,  0,146,146,146,146,146, 81,146,  0,146,518],
    [638,638,228, 81,670, 81,  0,  0,635,  0,227,  0,275,146,146],
    [638,638,  0,146,  0,146,608,  0,635,  0,146,406,  0, 82,278],
    [146,146,146,146, 82,146,669,146,146,146,146,146,  0,146,146],
    [636,636,391,669,  0,146,  0,  0,228,635,635,524,  0, 81,228],
    [146,146,146,146,270,146,669,146,146,146,146,  0,670,146,580],
    [637,406,146,  0,  0,  0,  0,  0,  0,275,  0,  0,668,146,581],
    [637,637,146, 81,146,146,146, 81,146,146,228,146,146,146,146],
    [228,146,146,266,643,146,129,  0,608,146,  0,146,391,636,636],
    [  0,  0, 81,643,637,146,  0, 93,  0,146,  0, 82,270,636,636]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}