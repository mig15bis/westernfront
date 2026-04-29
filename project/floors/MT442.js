main.floors.MT442=
{
    "floorId": "MT442",
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
        "9,0": [
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
        "0,2": [
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
            "floorId": "MT441",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT443",
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
    [645,645,  2, 21, 21, 21,  2, 91,  2,494,518,  2,648, 22,648],
    [647,647,  2,691,  2,  2,  2,694,  2,  2,518,  2,  0,691,  0],
    [494,692, 81,687,  0,  2,519,700,519,  2,700,  2,  2, 81,  2],
    [  2,  2,  2,  2,684,  2,524,702,524,  2,  0,749,687,686,518],
    [646,646,  2,518,518,  2,519,705,519,  2,684,  2,  2, 81,  2],
    [518,518,  2,750,  2,  2,  2, 82,  2,  2,  0,  2,  0,691,  0],
    [693,  0,  2,702, 81,749,  0,688,  0,685,749,  2,648, 22,648],
    [ 82,  2,  2,684,  2,684,  2, 81,  2,690,  2,  2,  2,  2,  2],
    [687, 21,686,  0,  2,  0,  2,748,  2,  0, 81,692,750,  0,652],
    [  2,  2,  2,  2,  2,700,  2, 21,  2,684,  2,  2, 81,  2,  0],
    [518,518,702,687,690,685,  2, 21,  2,  0,  2,  0,691,  2,609],
    [  2,  2, 81,  2,  2,684,  2,  2,  2,700,  2,646,646,  2,702],
    [  2,750,692,750,  2,  0,690,747,688,  0,  2,647,647,  2,609],
    [  2,  0,609,  0,  2,685,  2,  0,  2,685,  2,  2,  2,  2,  0],
    [  2,645,519,645,  2, 21,  2, 93,  2, 21, 81,688,  0,  0,652]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}