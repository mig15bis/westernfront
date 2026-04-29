main.floors.MT441=
{
    "floorId": "MT441",
    "title": "东京",
    "name": "东京",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "hiaction2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,10": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,14": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,14": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,2": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT440",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT442",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 23,694,694,693,688,688,  2, 91,  2,645,645,691,692,690,524],
    [  2,  2,  2,  2,  2, 82,  2,693,  2,  2,  2,  2, 82,  2,  2],
    [646,  0,  2,647,  2,687,  2, 81,  2,494,518,  2,687,  2,645],
    [524,692, 81,  0,683,  0,687,748,700,518,687,  2,684,  2,645],
    [646,  0,  2,683,609,  2,  2,692,  2,  2, 81,  2,688,  2,647],
    [  2,  2,  2,688,  2,  2,  0,700,  0,691,750,  0,  0,  2,705],
    [518,518,684,750,580,  2,684,  2,  2,  2,  2,  2,747, 81,702],
    [  2,  2,  2,  2, 81,  2,  0,518,  2,518,609,  2,  0,  2,  2],
    [646,648,  2,  0,750,  2,518,  0,686,580,518,687,  0,683,610],
    [648,519,  2,686,  2,  2,  2,  2, 81,  2,747,  2,  2,  2,  2],
    [ 22,700, 81,  0,  0,684,518,  2,518,  2,  0,691,494,  2,  0],
    [  2,  2,  2,686,  2,  2,688,  2,684,  2,  2,  0,700, 81,691],
    [646,648,  2,690,  2,684,  0,  0,  0,690,  2,  2,  2,  2,  0],
    [648,519,  2,  0,  2,518,  2,  0,  2,518,  2,519,647,  2,524],
    [ 22,691, 81,  0,  2,494,  2, 93,  2,494,  2,647,580,686,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}