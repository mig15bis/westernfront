main.floors.MT368=
{
    "floorId": "MT368",
    "title": "比利时",
    "name": "比利时",
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
        "2,9": [
            {
                "type": "if",
                "condition": "(flag:fuji2!==true)",
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
                        "value": "130000"
                    },
                    "队伍里的一辆坦克突然被击中起火，驾驶员惊恐地逃出来，告诉你其他乘员全部阵亡。你意识到这可能是\r[yellow]“铁拳”火箭筒的攻击\r，它的射程只有30米远，射手一定就在\r[yellow]你的附近\r，还没跑远。"
                ]
            }
        ],
        "2,10": [
            {
                "type": "if",
                "condition": "((blockId:2,10!=='attankinf')&&(flag:fuji2!==true))",
                "true": [
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "attankinf",
                        "loc": [
                            [
                                2,
                                10
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
            "floorId": "MT367",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT369",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,10": [
            {
                "type": "setValue",
                "name": "flag:fuji2",
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
                        2,
                        9
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
    [636,384,146,635,638,635,146, 91,146,635,638,635,146,384,636],
    [636,636,146,518,228,518,146,201,146,518,228,518,146,636,636],
    [664,146,146,146, 82,146,146, 81,146,146, 82,146,146,146,664],
    [  0,  0,275,  0,744,  0,  0,391,  0,  0,744,  0,275,  0,  0],
    [  0,146,146,146,146,146,146, 82,146,146,146,146,146,146,  0],
    [275,146,581,519,146,  0,  0,668,  0,  0, 81,265,637,146,275],
    [  0,146,373,406,146,  0,643,146,643,  0,146,637,580,146,  0],
    [ 81,146,270,  0,146,670,146,389,146,670,146,146,146,146, 81],
    [201,146, 81,146,146,  0,643,146,643,  0,146,637,580,146,201],
    [668,146,  0,  0,228,  0,  0,668,  0,  0, 81,265,637,146,668],
    [  0,146,146,146,146,146,146, 82,146,146,146,146,146,146,  0],
    [270,  0,  0,  0, 81,  0,518,228,518,  0, 81,  0,146,638,636],
    [146,146,146,266,146,669,608,146,608,669,146,266,146,636,638],
    [580,518,146,518,146, 81,146,146,146, 81,146,518,146,146,270],
    [518,275, 81,518,146,  0,  0, 93,  0,  0,146,518, 81,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}