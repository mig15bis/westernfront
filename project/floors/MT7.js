main.floors.MT7=
{
    "floorId": "MT7",
    "title": "阿登森林东-营地",
    "name": "阿登森林东-营地",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao6.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "update"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "showui"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "teach5.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                20,
                102,
                440,
                275
            ],
            "opacity": 1,
            "time": 500
        },
        {
            "type": "wait"
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "teach6.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                20,
                102,
                440,
                275
            ],
            "opacity": 1,
            "time": 500
        },
        {
            "type": "wait"
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "teach7.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                20,
                102,
                440,
                275
            ],
            "opacity": 1,
            "time": 500
        },
        {
            "type": "wait"
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,13": [
            {
                "type": "choices",
                "text": "\t[参谋,N517]长官，需要我做什么？",
                "choices": [
                    {
                        "text": "呼叫空中支援（装备飞机）",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[参谋,N517]请选择出战的空中单位",
                                "choices": [
                                    {
                                        "text": "装备 斗士MK2",
                                        "icon": "wrestler",
                                        "need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                                        "action": [
                                            {
                                                "type": "loadEquip",
                                                "id": "wrestler"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "卸下当前战斗机",
                                        "action": [
                                            {
                                                "type": "unloadEquip",
                                                "pos": 4
                                            }
                                        ]
                                    },
                                    {
                                        "text": "取消",
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "选择战术",
                        "action": [
                            {
                                "type": "insert",
                                "name": "选择技能"
                            },
                            {
                                "type": "choices",
                                "text": "是否立即前往战场？",
                                "choices": [
                                    {
                                        "text": "还没准备好",
                                        "action": []
                                    },
                                    {
                                        "text": "现在出发",
                                        "action": [
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
                                                "floorId": "MT8",
                                                "loc": [
                                                    0,
                                                    7
                                                ],
                                                "direction": "down"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "没什么事",
                        "action": []
                    }
                ]
            }
        ],
        "3,3": [
            "\t[维修人员,N514]长官，所有战车准备就绪！",
            {
                "type": "choices",
                "text": "\t[维修人员,N514]请选择出战坦克",
                "choices": [
                    {
                        "text": "装备 雷诺FT17",
                        "icon": "ft17",
                        "need": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
                        "condition": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "ft17"
                            }
                        ]
                    },
                    {
                        "text": "装备 哈奇开斯H35",
                        "icon": "h35",
                        "need": "core.hasItem('h35')&&!core.hasEquip('h35')",
                        "condition": "core.hasItem('h35')&&!core.hasEquip('h35')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "h35"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前坦克",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 0
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "5,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量装甲车辆，有步兵伴随。\n推荐携带技能：战壕\n推荐出战装备：雷诺FT17机枪型、斗士MK2"
        ]
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
    [311,311,311,311,  0,  0,152,152,152,152,152,152,152,152,152],
    [507,  0,  0,311,  0,  0,152,152,152,152,152,152,152,152,152],
    [  0,507,  0,311,  0,  0,  0,152,152,152,152,152,152,152,152],
    [507,  0,  0,514,  0,  0,  0,  0,  0,  0,152,152,152,152,152],
    [  0,507,  0,311,  0,  0,  0,  0,  0,  0,  0,152,152,152,152],
    [507,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,152,152,152,152],
    [311,311,311,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,152,152,152,152],
    [20104,20105,20106,20107,20108,  0,  0,  0,  0,  0,152,152,152,152,152],
    [20112,20113,20114,20115,20116,  0,  0,  0,  0,152,152,152,152,152,152],
    [20120,20121,20122,20123,20124,  0,  0,  0,  0,152,152,152,152,152,152],
    [20128,20129,20130,20131,20132,10148,  0,  0,152,152,152,152,152,152,152],
    [20136,20137,20138,20139,20140,  0,  0,  0,152,152,152,152,152,152,152],
    [  0,  0,517,  0,  0,  0,  0,  0,152,152,152,152,152,152,152],
    [  0,  0,  0,  0,  0,  0,  0,  0,152,152,152,152,152,152,152]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,557,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,153,153,153,153],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,556,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,559,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}