var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "可以打开一扇黄门",
		"hideInToolbox": true
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "可以打开一扇蓝门",
		"hideInToolbox": true
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "可以打开一扇红门",
		"hideInToolbox": true
	},
	"redGem": {
		"cls": "items",
		"name": "红宝石",
		"text": ",攻击+1",
		"itemEffect": "core.status.hero.atk += 1;\nif (flags.anime === true && !core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('atkup');\n}",
		"itemEffectTip": "，攻击+1",
		"useItemEffect": "",
		"canUseItemEffect": "true",
		"useItemEvent": []
	},
	"blueGem": {
		"cls": "items",
		"name": "蓝宝石",
		"text": "，指挥点数+10",
		"itemEffect": "core.status.hero.mana += 10;\nif (flags.anime === true && !core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('manaup');\n}",
		"itemEffectTip": "，指挥点+10",
		"useItemEffect": "core.status.hero.mana += 10;",
		"canUseItemEffect": "true"
	},
	"greenGem": {
		"cls": "items",
		"name": "绿宝石",
		"text": "，后勤+5",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio\nif (flags.anime === true && !core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('mdefup');\n}",
		"itemEffectTip": "，后勤+${core.values.greenGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"yellowGem": {
		"cls": "items",
		"name": "黄宝石",
		"text": ",血量及血限+50",
		"itemEffect": "core.status.hero.hpmax += 50;\ncore.status.hero.hp += 50;",
		"itemEffectTip": "，血量及血限+50",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"redPotion": {
		"cls": "items",
		"name": "红血瓶",
		"text": "，生命+${core.values.redPotion}",
		"itemEffect": "core.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.redPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true"
	},
	"bluePotion": {
		"cls": "items",
		"name": "蓝血瓶",
		"text": "，生命+${core.values.bluePotion}",
		"itemEffect": "core.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.bluePotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true"
	},
	"yellowPotion": {
		"cls": "items",
		"name": "黄血瓶",
		"text": "，生命+${core.values.yellowPotion}",
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.yellowPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true"
	},
	"greenPotion": {
		"cls": "items",
		"name": "绿血瓶",
		"text": "，生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"sword0": {
		"cls": "items",
		"name": "破旧的剑",
		"text": "一把已经生锈的剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 0
			}
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "，攻击+0"
	},
	"sword1": {
		"cls": "items",
		"name": "铁剑",
		"text": "一把很普通的铁剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 10
			}
		},
		"itemEffect": "core.status.hero.atk += 10",
		"itemEffectTip": "，攻击+10"
	},
	"sword2": {
		"cls": "items",
		"name": "银剑",
		"text": "一把很普通的银剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 20
			}
		},
		"itemEffect": "core.status.hero.atk += 20",
		"itemEffectTip": "，攻击+20"
	},
	"sword3": {
		"cls": "items",
		"name": "骑士剑",
		"text": "一把很普通的骑士剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 40
			}
		},
		"itemEffect": "core.status.hero.atk += 40",
		"itemEffectTip": "，攻击+40"
	},
	"sword4": {
		"cls": "items",
		"name": "圣剑",
		"text": "一把很普通的圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 80
			}
		},
		"itemEffect": "core.status.hero.atk += 80",
		"itemEffectTip": "，攻击+80"
	},
	"sword5": {
		"cls": "items",
		"name": "神圣剑",
		"text": "一把很普通的神圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 160
			}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"shield0": {
		"cls": "items",
		"name": "破旧的盾",
		"text": "一个很破旧的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 0
			}
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "，防御+0"
	},
	"shield1": {
		"cls": "items",
		"name": "铁盾",
		"text": "一个很普通的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 10
			}
		},
		"itemEffect": "core.status.hero.def += 10",
		"itemEffectTip": "，防御+10"
	},
	"shield2": {
		"cls": "items",
		"name": "银盾",
		"text": "一个很普通的银盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 20
			}
		},
		"itemEffect": "core.status.hero.def += 20",
		"itemEffectTip": "，防御+20"
	},
	"shield3": {
		"cls": "items",
		"name": "骑士盾",
		"text": "一个很普通的骑士盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 40
			}
		},
		"itemEffect": "core.status.hero.def += 40",
		"itemEffectTip": "，防御+40"
	},
	"shield4": {
		"cls": "items",
		"name": "圣盾",
		"text": "一个很普通的圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 80
			}
		},
		"itemEffect": "core.status.hero.def += 80",
		"itemEffectTip": "，防御+80"
	},
	"shield5": {
		"cls": "items",
		"name": "神圣盾",
		"text": "一个很普通的神圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 100,
				"mdef": 100
			}
		},
		"itemEffect": "core.status.hero.def += 100;core.status.hero.mdef += 100",
		"itemEffectTip": "，防御+100，护盾+100"
	},
	"superPotion": {
		"cls": "items",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "，生命值翻倍",
		"useItemEffect": "core.status.hero.hp *= 2;core.playSound('回血');",
		"canUseItemEffect": "true",
		"text": "生命值翻倍"
	},
	"book": {
		"cls": "constants",
		"name": "敌军情报",
		"text": "可以查看当前战场内各敌人属性",
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "战场传送器",
		"text": "可以在当前区域内已到过的战场地图之间进行快捷传送，需要在出入口旁使用",
		"hideInReplay": true,
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\tif (core.flags.flyNearStair && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();"
	},
	"coin": {
		"cls": "constants",
		"name": "战争财",
		"text": "美国可以说是二战最大的受益国，依靠各种手段大发战争财，并奠定战后金融霸权地位。\n持有时，战斗获得三倍黄金和经验（可与其他增收手段叠加或叠乘）。"
	},
	"freezeBadge": {
		"cls": "constants",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否多方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 多方向雪花\n\t\tfor (var direction in core.utils.scan) { // 多方向雪花默认四方向，如需改为八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('打开界面');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "持有后无视怪物的无敌属性"
	},
	"dagger": {
		"cls": "constants",
		"name": "屠龙匕首",
		"text": "该道具尚未被定义"
	},
	"amulet": {
		"cls": "constants",
		"name": "护符",
		"text": "持有时无视负面地形"
	},
	"bigKey": {
		"cls": "items",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "可以打开一扇绿门"
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门"
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "可以破坏勇士面前的墙",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否多方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 多方向破\n\t\tfor (var direction in core.utils.scan) { // 多方向破默认四方向，如需改成八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('破墙镐');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\t// 无法使用\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰",
		"text": "消耗200指挥点数，破坏主角面前的一块浮冰。\n注意！这是个消耗道具！省着点用！另外，通关后会回收剩余破冰道具。",
		"useItemEffect": "(function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\tcore.insertAction({ \"type\": \"openDoor\", \"loc\": [\"core.nextX()\", \"core.nextY()\"] });\n\tcore.status.hero.mana -= 200;\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'ice' && core.status.hero.mana >= 200;\n})();"
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "可以飞向当前楼层中心对称的位置",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
	},
	"upFly": {
		"cls": "tools",
		"name": "上楼器",
		"text": "可以飞往楼上的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"downFly": {
		"cls": "tools",
		"name": "下楼器",
		"text": "可以飞往楼下的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "tools",
		"name": "解毒药水",
		"text": "可以解除中毒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'poison');",
		"canUseItemEffect": "core.hasFlag('poison');"
	},
	"weakWine": {
		"cls": "tools",
		"name": "解衰药水",
		"text": "可以解除衰弱状态",
		"useItemEffect": "core.triggerDebuff('remove', 'weak');",
		"canUseItemEffect": "core.hasFlag('weak');"
	},
	"curseWine": {
		"cls": "tools",
		"name": "解咒药水",
		"text": "可以解除诅咒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'curse');",
		"canUseItemEffect": "core.hasFlag('curse');"
	},
	"superWine": {
		"cls": "tools",
		"name": "万能药水",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.triggerDebuff('remove', ['poison', 'weak', 'curse']);",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();"
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "该道具尚未被定义"
	},
	"lifeWand": {
		"cls": "tools",
		"name": "生命魔杖",
		"text": "可以恢复100点生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('lifeWand', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入生命魔杖使用次数：(0-${item:lifeWand})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "flag:input<=item:lifeWand",
				"true": [
					{
						"type": "setValue",
						"name": "item:lifeWand",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*100"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次生命魔杖，恢复${flag:input*100}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "跳跃靴",
		"text": "能跳跃到前方两格处",
		"useItemEffect": "core.playSound(\"跳跃\");\ncore.insertAction({ \"type\": \"jumpHero\", \"loc\": [core.nextX(2), core.nextY(2)] });",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "技能：二倍斩",
		"text": "可以打开或关闭主动技能二倍斩",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 1; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 5; // 技能的需求\n\tvar skillName = '二倍斩'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"wand": {
		"cls": "constants",
		"name": "技能快捷键查看",
		"text": "查看当前快捷键所对应的技能",
		"canUseItemEffect": true,
		"useItemEvent": [],
		"useItemEffect": "core.insertCommonEvent('查看技能')"
	},
	"pack": {
		"cls": "items",
		"name": "钱袋",
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "，金币+500"
	},
	"I334": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I335": {
		"cls": "constants",
		"name": "任务提示",
		"canUseItemEffect": "true",
		"text": "查看本区的三个任务目标",
		"useItemEffect": "(function () {\n\tvar i = core.floorIds.indexOf(core.status.floorId);\n\twhile (i > 0) {\n\t\tvar s = JSON.stringify(core.floors[core.floorIds[i]].firstArrive);\n\t\tvar a = /\\\"\\\\t\\[任务目标\\]⭐(.+)\\\\n⭐(.+)\\\\n⭐(.+?)\\\"/.exec(s);\n\t\tif (Array.isArray(a) && a.length >= 3) {\n\t\t\tcore.drawText('\\t[任务目标]⭐' + a[1] + '\\n⭐' + a[2] + '\\n⭐' + a[3]);\n\t\t\tbreak;\n\t\t}\n\t\t--i;\n\t}\n})()"
	},
	"I336": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I337": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I338": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I339": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I340": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I341": {
		"cls": "items",
		"name": "大银块",
		"canUseItemEffect": "true",
		"text": "，黄金+500",
		"itemEffectTip": "，黄金+500",
		"itemEffect": "core.status.hero.money += 500;"
	},
	"I342": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I343": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I344": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"orangeGem": {
		"cls": "items",
		"name": "橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加5雷击",
		"itemEffectTip": "，增加5雷击",
		"itemEffect": "core.status.hero.top += 5;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('topup');\n}"
	},
	"pinkGem": {
		"cls": "items",
		"name": "粉宝石（废稿）",
		"canUseItemEffect": "true",
		"text": "，增加5空袭",
		"itemEffectTip": "，增加5空袭"
	},
	"medal": {
		"cls": "items",
		"name": "勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "xinxinbazhe.mp3"
			}
		],
		"itemEffect": "core.status.hero.hpmax += 50;\ncore.status.hero.hp += 50;\ncore.status.hero.mana += 10;\ncore.status.hero.atk += 1;\ncore.status.hero.top += 5;\ncore.status.hero.mdef += 5;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('allup');\n}"
	},
	"ft17": {
		"cls": "equips",
		"name": "雷诺FT17机枪型",
		"canUseItemEffect": "true",
		"text": "攻10，穿10装22。\n被动：\n机枪：对步兵伤害+5%",
		"equip": {
			"type": 0,
			"value": {
				"atk": 10,
				"ap": 10,
				"arm": 22
			},
			"percentage": {}
		}
	},
	"h35": {
		"cls": "equips",
		"name": "哈奇开斯H35",
		"canUseItemEffect": "true",
		"text": "攻+20，穿26装24",
		"equip": {
			"type": 0,
			"value": {
				"atk": 20,
				"arm": 24,
				"ap": 26
			},
			"percentage": {}
		}
	},
	"s35": {
		"cls": "equips",
		"name": "索玛S35",
		"canUseItemEffect": "true",
		"text": "废稿"
	},
	"crusades": {
		"cls": "equips",
		"name": "十字军巡洋坦克",
		"canUseItemEffect": "true",
		"text": "攻+50，穿52，装20。\n被动技能：\n机动：我方被敌人单向击穿时，敌方先攻次数-2",
		"equip": {
			"type": 0,
			"value": {
				"atk": 50,
				"arm": 20,
				"ap": 52
			},
			"percentage": {}
		}
	},
	"valentine": {
		"cls": "equips",
		"name": "瓦伦丁步兵坦克",
		"canUseItemEffect": "true",
		"text": "攻+50，穿50，装60。\n被动技能：\n迟缓：被敌人单向击穿时，敌人额外先攻5回合。",
		"equip": {
			"type": 0,
			"value": {
				"atk": 50,
				"ap": 50,
				"arm": 60
			},
			"percentage": {}
		}
	},
	"cromwell": {
		"cls": "equips",
		"name": "克伦威尔巡洋坦克",
		"canUseItemEffect": "true",
		"text": "攻+150，穿78，装64。\n被动技能：\n迟缓：未击穿敌方装甲时，敌人额外先攻5回合。"
	},
	"matilda": {
		"cls": "equips",
		"name": "玛蒂尔达步兵坦克",
		"canUseItemEffect": "true",
		"equip": {
			"type": 0,
			"value": {
				"atk": 150,
				"arm": 75,
				"ap": 50
			},
			"percentage": {}
		},
		"text": "攻+150，穿50，装75。\n被动技能：\n压制：敌方地面部队无法击穿我方装甲时，受到伤害额外减少20%。\n迟缓：被敌人单向击穿时，敌人额外先攻5回合。"
	},
	"churchillmk3": {
		"cls": "equips",
		"name": "丘吉尔MK3型",
		"canUseItemEffect": "true",
		"text": "攻+100后加30%，穿90，装89。\n被动技能：\n笨重：被敌人单向击穿时，敌人额外先攻10回合。\n红茶不能洒：使用“下午茶”时，恢复效果改为35%。",
		"equip": {
			"type": 0,
			"value": {
				"atk": 100,
				"ap": 90,
				"arm": 89
			},
			"percentage": {
				"atk": 30
			}
		}
	},
	"m3grant": {
		"cls": "equips",
		"name": "M3格兰特",
		"canUseItemEffect": "true",
		"text": "攻+150后额外加10%，穿65，装75。\n被动技能：\n压制：敌方地面部队无法击穿我方装甲时，受到伤害额外减少20%。\n笨重：被敌人单向击穿时，敌人额外先攻10回合。",
		"equip": {
			"type": 0,
			"value": {
				"atk": 150,
				"ap": 65,
				"arm": 75
			},
			"percentage": {
				"atk": 10
			}
		}
	},
	"m4a2": {
		"cls": "equips",
		"name": "M4A2谢尔曼",
		"canUseItemEffect": "true",
		"text": "攻+200后额外加30%，穿78，装85。\n被动技能：\n工业底蕴：战后额外加5黄金。判定在“工业潜能”之前触发。\n血之训诫：战后获得的经验翻倍。\n数量碾压：被敌人单向击穿时，攻击力额外加15%。\n杀伤榴弹：对步兵和炮兵增加30%普攻伤害。",
		"equip": {
			"type": 0,
			"value": {
				"atk": 200,
				"arm": 85,
				"ap": 78
			},
			"percentage": {
				"atk": 30
			}
		}
	},
	"m4a3": {
		"cls": "equips",
		"name": "M4A1(76W)",
		"canUseItemEffect": "true",
		"text": "攻+500后额外加50%，穿120，装105。\n被动技能：\n工业底蕴：战后额外加5黄金。判定在“工业潜能”之前触发。\n血之训诫：战后获得的经验翻倍。\n数量碾压：被敌人单向击穿时，攻击力额外加15%。\n杀伤榴弹：对步兵和炮兵增加30%普攻伤害。"
	},
	"m4a3e2": {
		"cls": "equips",
		"name": "M4A3E2“巨无霸”",
		"canUseItemEffect": "true",
		"text": "攻+800后额外加60%，穿78，装175。\n被动技能：\n工业底蕴：战后额外加5黄金。判定在“工业潜能”之前触发。\n血之训诫：战后获得的经验翻倍。\n互相刮痧：双方互不击穿时，减少敌人20%伤害。\n杀伤榴弹：对步兵和炮兵增加30%普攻伤害。"
	},
	"firefly": {
		"cls": "equips",
		"name": "谢尔曼“萤火虫”",
		"canUseItemEffect": "true",
		"text": "攻+1000后额外加60%，穿155，装110。\n被动技能：\n工业底蕴：战后额外加5黄金。判定在“工业潜能”之前触发。\n血之训诫：战后获得的经验翻倍。\n精准狙击：与“精锐”或“主将”作战时，伤害提升40%。"
	},
	"a34comet": {
		"cls": "equips",
		"name": "A34彗星",
		"canUseItemEffect": "true",
		"text": "攻+50，穿123，装76。\n被动技能：\n机动：我方被敌人单向击穿时，敌方先攻次数-2\n红茶不能洒：使用“下午茶”时，恢复效果改为40%。"
	},
	"churchillmk7": {
		"cls": "equips",
		"name": "丘吉尔MK7型",
		"canUseItemEffect": "true",
		"text": "攻+50，穿78，装170。\n被动技能：\n笨重：被敌人单向击穿时，敌人额外先攻10回合。\n绝对防御：单向击穿敌人坦克时，获得60%减伤。"
	},
	"m26pershing": {
		"cls": "equips",
		"name": "M26潘兴",
		"canUseItemEffect": "true",
		"text": "攻击+n后额外加200%，穿160装120。\n被动：\n横扫千军：与敌方步兵和火炮战斗时，伤害增加50%，受到伤害减少40%。\n驯兽师：与虎式和豹式坦克作战时，攻击力再增加30%。"
	},
	"classe": {
		"cls": "equips",
		"name": "E级驱逐舰",
		"canUseItemEffect": "true",
		"text": "攻+100，雷击+100，鱼雷管+3。闪避鱼雷数+1。\n被动：\n反潜：对潜艇攻击时，每3回合额外造成一次等同于0.5倍攻击力的伤害。",
		"equip": {
			"type": 1,
			"value": {
				"tpn": 3,
				"top": 100,
				"dod": 1,
				"atk": 100
			},
			"percentage": {}
		}
	},
	"mahan": {
		"cls": "equips",
		"name": "马汉级驱逐舰",
		"canUseItemEffect": "true",
		"text": "攻+120，雷击+150，鱼雷管+3，闪避鱼雷数+2。\n被动：\n反潜：对潜艇攻击时，每3回合额外造成一次等同于0.5倍攻击力的伤害。\n哑弹：发射的鱼雷不会爆炸（神剧难度无效）。",
		"equip": {
			"type": 1,
			"value": {
				"tpn": 3,
				"top": 150,
				"dod": 2,
				"atk": 120
			},
			"percentage": {}
		}
	},
	"classj": {
		"cls": "equips",
		"name": "J级驱逐舰",
		"canUseItemEffect": "true",
		"text": "攻击+200，雷击+1500后额外加20%。鱼雷管+10，闪避数+4。\n被动：\n战时需求：击败敌方海军时，额外获得5黄金和5经验(可触发工业潜能效果）。\n商船护航：存在友军时，友军受到的伤害减半。\n反潜：对潜艇攻击时，每3回合额外造成一次等同于1.5倍攻击力的伤害。",
		"equip": {
			"type": 1,
			"value": {
				"tpn": 10,
				"top": 1500,
				"dod": 4,
				"atk": 200
			},
			"percentage": {
				"top": 20
			}
		}
	},
	"gridley": {
		"cls": "equips",
		"name": "格里德利级驱逐舰",
		"canUseItemEffect": "true",
		"text": "废稿"
	},
	"classv": {
		"cls": "equips",
		"name": "V级驱逐舰",
		"canUseItemEffect": "true",
		"text": "装备属性：攻+100，雷击+1000，鱼雷管+6。闪避鱼雷数+3。\n被动：\n反潜：对潜艇攻击时，每3回合额外造成一次等同于攻击力的伤害。\n老兵：装备期间与敌人作战后获得经验+2",
		"equip": {
			"type": 1,
			"value": {
				"tpn": 6,
				"top": 1000,
				"dod": 3,
				"atk": 100
			},
			"percentage": {}
		}
	},
	"flecher": {
		"cls": "equips",
		"name": "弗莱彻级驱逐舰",
		"canUseItemEffect": "true",
		"text": "攻+n后额外加m%。雷击＋a后额外加b%。鱼雷管+12，闪避数+5。\n被动：\n数量优势：我方海军发射鱼雷时，额外发射一轮。\n勇气迸发：面对重巡和战列舰时，提前5回合发射鱼雷。\n反潜：每3回合对潜艇造成2倍攻击力的反潜伤害。\n哑弹：发射的鱼雷不会爆炸。"
	},
	"edinburgh": {
		"cls": "equips",
		"name": "轻巡·爱丁堡号",
		"canUseItemEffect": "true",
		"text": "攻+200，雷击+100，鱼雷管+1。\n被动：黄金护卫：装备时，每次战后额外获得2枚黄金。",
		"equip": {
			"type": 2,
			"value": {
				"tpn": 1,
				"top": 100,
				"atk": 200
			},
			"percentage": {}
		}
	},
	"sheffield": {
		"cls": "equips",
		"name": "轻巡·谢菲尔德号",
		"canUseItemEffect": "true",
		"text": "攻+250后增加10%，雷击+1000，鱼雷管+2。\n被动：\n巴伦支海传奇：攻击轻巡和驱逐舰时，减少对手30%的雷击值并转化为首回合对其造成的额外伤害\n警戒：战斗开始时，我方额外普攻一回合",
		"equip": {
			"type": 2,
			"value": {
				"tpn": 2,
				"top": 1000,
				"atk": 250
			},
			"percentage": {
				"atk": 10
			}
		}
	},
	"norfolk": {
		"cls": "equips",
		"name": "重巡·诺福克号",
		"canUseItemEffect": "true",
		"text": "装备属性：攻+300，雷击+100。\n被动：\n先发制人：与敌方水面舰艇作战时，额外先攻一次\n最后一击：敌方水面舰艇血量少于20%时，立刻发射3枚鱼雷（不受哑弹影响）",
		"equip": {
			"type": 2,
			"value": {
				"atk": 300,
				"top": 100
			},
			"percentage": {}
		}
	},
	"dorsetshire": {
		"cls": "equips",
		"name": "重巡·多塞特郡号",
		"canUseItemEffect": "true",
		"text": "废稿"
	},
	"benson": {
		"cls": "equips",
		"name": "本森级驱逐舰",
		"canUseItemEffect": "true",
		"text": "装备属性：攻+150，雷击＋1500，鱼雷管+10，闪避鱼雷数+4。\n被动：\n反潜：对潜艇攻击时，每3回合额外造成一次等同于攻击力的伤害\n冲刺：发射鱼雷所需回合数-2\n哑弹：发射的鱼雷不会爆炸（神剧难度无效）",
		"equip": {
			"type": 1,
			"value": {
				"tpn": 10,
				"top": 1500,
				"dod": 4,
				"atk": 150
			},
			"percentage": {}
		}
	},
	"cleveland": {
		"cls": "equips",
		"name": "轻巡·克利夫兰号",
		"canUseItemEffect": "true",
		"text": "攻+400后额外加30%。雷击+500后额外加10%。鱼雷管+2，闪避数+1。\n被动：\n防空轻巡：在海上与敌机战斗时，伤害增加25%。\n海上骑士：我方血量低于一半时，获得25%伤害减免（战前检测）。\n哑弹：发射的鱼雷不会爆炸。",
		"equip": {
			"type": 2,
			"value": {
				"top": 500,
				"atk": 400,
				"tpn": 2,
				"dod": 1
			},
			"percentage": {
				"top": 10,
				"atk": 30
			}
		}
	},
	"hood": {
		"cls": "equips",
		"name": "胡德号战列巡洋舰",
		"canUseItemEffect": "true",
		"text": "攻+1000。闪避鱼雷数-2。\n被动：\n主炮轰击：每4回合额外发射一轮主炮，对敌方水面战舰造成6倍攻击力的伤害。\n皇家荣耀：战后获得黄金和经验+10。",
		"equip": {
			"type": 3,
			"value": {
				"atk": 1000,
				"dod": -2
			},
			"percentage": {}
		}
	},
	"warspite": {
		"cls": "equips",
		"name": "厌战号战列舰",
		"canUseItemEffect": "true",
		"text": "攻+500。闪避鱼雷数-2。\n被动：\n主炮轰击：每3回合额外发射一轮主炮，对敌方水面战舰造成3倍攻击力的伤害（为防止误伤友军，地面战时不会开炮）。",
		"equip": {
			"type": 3,
			"value": {
				"dod": -2,
				"atk": 500
			},
			"percentage": {}
		}
	},
	"kinggeorge5": {
		"cls": "equips",
		"name": "乔治五世级战列舰",
		"canUseItemEffect": "true",
		"text": "攻击+1000，后勤+2000。闪避鱼雷数-3。\n被动：\n主炮轰击：每4回合额外发射一轮主炮，对敌方水面战舰造成6倍攻击力的伤害（为防止误伤友军，地面战时不会开炮）。\n重甲战舰：敌方轻巡和驱逐舰的普攻伤害减少50%，但受到鱼雷攻击时伤害增加40%。",
		"equip": {
			"type": 3,
			"value": {
				"mdef": 2000,
				"dod": -3,
				"atk": 1000
			},
			"percentage": {}
		}
	},
	"northcarolina": {
		"cls": "equips",
		"name": "北卡罗莱纳号战列舰",
		"canUseItemEffect": "true",
		"text": "攻击+1000后额外加30%。后勤+2000后额外加20%。闪避鱼雷数-2。\n被动：\n主炮轰击：每4回合额外发射一轮主炮，对敌方水面战舰造成9倍攻击力的伤害（为防止误伤友军，地面战时不会开炮）。\n禁飞区：在海上遭遇空袭时，对敌机造成的伤害提升60%。\n重甲战舰：敌方轻巡和驱逐舰普攻伤害减少40%，但受到鱼雷攻击伤害增加20%。",
		"equip": {
			"type": 3,
			"value": {
				"mdef": 2000,
				"dod": -2,
				"atk": 1000
			},
			"percentage": {
				"mdef": 20,
				"atk": 30
			}
		}
	},
	"iowa": {
		"cls": "equips",
		"name": "衣阿华级战列舰",
		"canUseItemEffect": "true",
		"text": "攻+n后额外加m%。后勤+a后额外加b%。闪避鱼雷数-1。\n被动：\n主炮轰击：每4回合额外发射一轮主炮，对敌方水面战舰造成10倍攻击力的伤害（为防止误伤友军，地面战时不会开炮）。\n末代战列：减免40%伤害，对轻巡和驱逐舰时效果改为80%。\n空袭掩护：在海上与敌机交战时，增伤80%。"
	},
	"illustrious": {
		"cls": "equips",
		"name": "光辉号航空母舰",
		"canUseItemEffect": "true",
		"text": "舰载机：海喷火MK5、梭鱼式鱼雷机、剑鱼式鱼雷机。闪避鱼雷数-2。\n被动：\n装甲航母：在海上遭遇敌方空袭时，减少25%炸弹伤害。遭遇非战列舰的水面舰艇攻击时，伤害减少20%。\n先手起飞：海战时，在战斗前起飞所有飞机，舰载机在首回合中即可进行炸弹和鱼雷攻击，同时免疫敌战列舰首轮跨射攻击。",
		"equip": {
			"type": 3,
			"value": {
				"dod": -2,
				"atk": 170
			},
			"percentage": {
				"atk": 20
			}
		}
	},
	"eagle": {
		"cls": "equips",
		"name": "鹰号航空母舰",
		"canUseItemEffect": "true",
		"text": "舰载机：海飓风MK1、贼鸥式轰炸机、剑鱼式鱼雷机。闪避鱼雷数-2。\n受到敌方鱼雷伤害增加20%。",
		"equip": {
			"type": 3,
			"value": {
				"dod": -2,
				"atk": 60
			},
			"percentage": {}
		}
	},
	"raider": {
		"cls": "equips",
		"name": "突击者号航空母舰",
		"canUseItemEffect": "true",
		"text": "舰载机：F4F-3野猫战斗机、SBD-3无畏式轰炸机、TBD蹂躏者鱼雷机，闪避鱼雷数-2\n被动：\n航弹强化：此航母的俯冲轰炸机造成的炸弹伤害提升40%。",
		"equip": {
			"type": 3,
			"value": {
				"atk": 130,
				"dod": -2
			},
			"percentage": {
				"atk": 10
			}
		}
	},
	"essex": {
		"cls": "equips",
		"name": "埃塞克斯级航空母舰",
		"canUseItemEffect": "true",
		"text": "攻击+5%，雷击+10%。舰载机：F6F-5地狱猫战斗机、SB2C地狱俯冲者轰炸机、TBF复仇者鱼雷机。\n被动：\n远程空袭：无视敌军战列舰主炮伤害，且可以支援我军在陆地上的行动。\n制海权：与除潜艇外的敌方海军交战时，伤害提升50%，受伤降低30%。\n先发制人：航母机群在首回合即可投放炸弹和鱼雷。"
	},
	"enterprise": {
		"cls": "equips",
		"name": "企业号航空母舰",
		"canUseItemEffect": "true",
		"text": "攻击力+n%，后勤+m%。舰载机：F4U海盗式战斗机、SB2C地狱俯冲者轰炸机、TBF复仇者鱼雷机\n被动：\n灰色幽灵：我军一切空袭伤害×250%，与除潜艇外的敌方海军交战时，伤害提升50%，受伤降低30%。\n远程空袭：无视敌军战列舰主炮伤害，且可以支援我军在陆地上的行动。\nLucky E：装备企业号时，“海上霸主”技能花费改为1500，效果改为“当前地图所有除潜艇外的敌舰和飞机损失90%血量，陆军损失30%血量”。\n先发制人：舰载机在战斗首回合即可投放炸弹和鱼雷。"
	},
	"wrestler": {
		"cls": "equips",
		"name": "斗士MK2型",
		"canUseItemEffect": "true",
		"text": "主武器：4×7.7mm机枪\n攻+25。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 25
			},
			"percentage": {}
		}
	},
	"hurricanemk1": {
		"cls": "equips",
		"name": "飓风MK1",
		"canUseItemEffect": "true",
		"text": "主武器：8×7.7mm机枪\n攻+40。每回合对轰炸机追加80点伤害。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 40
			},
			"percentage": {}
		}
	},
	"spitfiremk1": {
		"cls": "equips",
		"name": "喷火MK1",
		"canUseItemEffect": "true",
		"text": "主武器：8×7.7mm机枪\n攻击+60，与战斗机作战时，每回合额外追加10%伤害",
		"equip": {
			"type": 4,
			"value": {
				"atk": 60
			},
			"percentage": {}
		}
	},
	"hurricanemk2": {
		"cls": "equips",
		"name": "飓风MK2",
		"canUseItemEffect": "true",
		"text": "主武器：4×20mm机炮。装备属性：攻+100。\n被动：\n机炮扫射：攻击对象为轰炸机或装甲小于20的坦克时，每回合普攻伤害额外增加20%",
		"equip": {
			"type": 4,
			"value": {
				"atk": 100
			},
			"percentage": {}
		}
	},
	"f4f3": {
		"cls": "equips",
		"name": "F4F-3野猫",
		"canUseItemEffect": "true",
		"text": "主武器：6×12.7毫米勃朗宁机枪。挂载：2×100磅炸弹\n装备属性：攻+80后额外加10%。仅第2回合投弹，造成两次0.4倍攻击力的伤害。\n被动：\n萨奇剪刀：与敌方战斗机作战时，以受到伤害增加5%为代价，使普攻伤害+20%。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 80
			},
			"percentage": {
				"atk": 10
			}
		}
	},
	"f6f5": {
		"cls": "equips",
		"name": "F6F-5地狱猫",
		"canUseItemEffect": "true",
		"text": "主武器：6×12.7mm机枪。挂载：6×HVAR火箭弹和2×1000磅炸弹\n属性：攻+250后额外＋20%，与陆军或水面舰艇战斗时可以先后分别使用火箭弹和炸弹攻击：\n首回合抢先发射一轮火箭弹，每枚火箭弹伤害为0.2倍攻击力（对步、炮以及小型舰艇增伤15%）。仅第2回合投弹，每颗炸弹伤害为4倍攻击力\n被动：\n火鸡猎手：敌方战斗机的每一点连击数都会额外增加我方5%的普攻伤害。（无连击时视为1连击，仍有5%保底加成）\n安全返航：战斗结束时，如果剩余血量小于30%，额外回复5%。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 250
			},
			"percentage": {
				"atk": 20
			}
		}
	},
	"spitfiremk16": {
		"cls": "equips",
		"name": "喷火MK16",
		"canUseItemEffect": "true",
		"text": "主武器：2×12.7mm机枪和2×20mm机炮\n属性：攻击+n后额外加50%。挂载：8×RP-3火箭弹和2×500磅炸弹。与陆军或水面舰艇战斗时可以先后使用火箭弹和炸弹攻击：\n首回合抢先发射2轮火箭弹，每枚火箭弹伤害为0.1倍攻击力（对装甲、建筑增伤20%）。仅第2回合投弹，每颗炸弹伤害为2倍攻击力\n被动：\n最后的喷火：与敌机作战时，普攻伤害提升20%的基础上+20%后勤值。\n空中掩护：已夺取制空权时，加成效果改为25%。"
	},
	"seafury": {
		"cls": "equips",
		"name": "海怒",
		"canUseItemEffect": "true",
		"text": "废稿"
	},
	"f4u": {
		"cls": "equips",
		"name": "F4U-4B海盗",
		"canUseItemEffect": "true",
		"text": "主武器：4×20mm机炮。挂载：8×HVAR火箭弹和2×1000磅炸弹\n属性：攻击+n后额外加100%。与陆军和海军作战时抢先发射2轮火箭弹，每枚火箭弹伤害为0.2倍攻击力（对步、炮和小型舰艇增伤15%）。仅第2回合投弹，每颗炸弹伤害为4倍攻击力。\n被动：\n死亡口哨：战斗开始前，削减敌人20%血量和攻击力（同种飞机不可叠加）。\n空域肃清：已夺取制空权时，我军一切空袭伤害提高50%。未夺取制空权时，对战斗机伤害提升20%。（同种飞机不可叠加）"
	},
	"p51d": {
		"cls": "equips",
		"name": "P51D野马",
		"canUseItemEffect": "true",
		"text": "主武器：6×12.7mm机枪。挂载：10×HVAR火箭弹\n属性：攻击+n后额外加100%。与陆军和水面舰艇战斗时抢先发射2轮火箭弹，每枚火箭弹伤害为0.2倍攻击力（对步、炮和小型舰艇增伤15%）。\n被动：\n长途护航：受到的所有战斗伤害减少30%。\n制空霸权：与敌方空军战斗时，战斗方式改为2连击。对喷气机不生效。已夺取制空权时，我军一切空袭伤害提高40%。"
	},
	"skua": {
		"cls": "equips",
		"name": "贼鸥式轰炸机",
		"canUseItemEffect": "true",
		"text": "攻+20。挂载：1×500磅炸弹。\n每4个回合投弹，造成2倍攻击力的伤害。\n被动技能：\n俯冲轰炸：攻击军舰时，炸弹造成的伤害提升50%。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 20
			},
			"percentage": {}
		}
	},
	"sbd3": {
		"cls": "equips",
		"name": "SBD-3无畏",
		"canUseItemEffect": "true",
		"text": "攻+40。挂载：1×1000磅炸弹和2×250磅炸弹。\n每4个回合投弹，造成4.5倍攻击力的伤害。\n被动技能：\n俯冲轰炸：攻击军舰时，炸弹造成的伤害提升50%。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 40
			},
			"percentage": {}
		}
	},
	"beautifighter": {
		"cls": "equips",
		"name": "英俊战士MK6C",
		"canUseItemEffect": "true",
		"text": "主武器：6×7.7mm机枪和4×20mm机炮\n攻击+300后+20%。挂载：8×RP-3火箭弹。\n攻击非空军敌人时率先发射1轮火箭弹，每发火箭弹的伤害为0.1倍攻击力（对装甲、建筑增伤20%）。\n被动：\n机载雷达：敌人的“突袭”（先攻）技能无效且我方额外进行2次普通攻击。\n截击：对敌方轰炸机伤害提高40%。\n海上突袭：对舰攻击时，在第3回合发射3枚鱼雷。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 300
			},
			"percentage": {}
		}
	},
	"p38": {
		"cls": "equips",
		"name": "P38闪电",
		"canUseItemEffect": "true",
		"text": "主武器：4×12.7mm机枪和1×20mm机炮\n攻击+350后+20%。挂载：2×500磅炸弹\n仅第2回合投弹，每颗炸弹伤害为2倍攻击力。\n被动：\n斩首行动：攻击敌方主将时，我军造成的一切伤害增加20%。\n截击：对敌方轰炸机造成伤害提高35%。\n双身恶魔：血量低于50%时，获得10%减伤。高于50%时，获得10%攻击加成。\n狗斗：战斗机不在场时，也可以代替争夺制空权。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 350
			},
			"percentage": {}
		}
	},
	"mosquito": {
		"cls": "equips",
		"name": "蚊式战斗机",
		"canUseItemEffect": "true",
		"text": "主武器：4×7.7mm机枪和4×20mm机炮。挂载：8×RP3火箭弹\n属性：攻击+450后额外加20%。与陆军和水面舰艇作战时抢先发射2轮火箭弹，每枚火箭弹伤害为0.1倍攻击力（对装甲、建筑增伤20%）\n被动：\n木制奇迹：与敌方战斗机作战时，如果对方不是喷气战斗机，先手造成3倍攻击力伤害。\n机载雷达：敌人的“先攻”技能无效且我方额外进行2次普通攻击。\n高效侦察：以50%倍率免疫领域类伤害。\n狗斗：战斗机不在场时，也可以代替争夺制空权。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 450
			},
			"percentage": {
				"atk": 10
			}
		}
	},
	"p47d": {
		"cls": "equips",
		"name": "P47D雷电",
		"canUseItemEffect": "true",
		"text": "主武器：8×12.7mm机枪。挂载：8×HVAR火箭弹和3×500磅炸弹\n属性：攻击＋n后额外加40%。\n首回合发射2轮火箭弹，每枚基础伤害0.2倍攻击力（对步、炮和小型舰艇增伤15%）。每3回合投掷2轮炸弹，每颗炸弹伤害为1.5倍攻击力。\n被动：\n铜墙铁壁：与空军和高射炮作战时，获得20%减伤。\n舔地狂魔：与地面单位作战时，P47D投掷的炸弹数量增加一轮。\n战机转职：未夺取制空权时，炸弹和火箭弹伤害-30%，但对空普攻伤害提高40%。\n狗斗：战斗机不在场时，也可以代替争夺制空权。"
	},
	"sb2c": {
		"cls": "equips",
		"name": "SB2C地狱俯冲者",
		"canUseItemEffect": "true",
		"text": "主武器：2×20mm机炮和2×7.62mm自卫机枪。挂载：8×HVAR火箭弹和1×2000磅炸弹或1×MK13鱼雷\n属性：攻击+n，雷击+n%。\n与陆军和水面舰艇作战时抢先发射2轮火箭弹，每枚火箭弹伤害为0.2倍攻击力（对步、炮和小型舰艇增伤15%）。每4回合投弹，每颗炸弹伤害为8倍攻击力。\n被动：\n俯冲轰炸：对舰攻击时，炸弹造成的伤害提升50%。\n地狱咆哮：敌人攻击力减少15%，闪避-2。对重巡、战列舰和航母造成的炸弹伤害增加50%。\n双重打击：攻击军舰时，可以在投弹的同时发射5枚鱼雷攻击。\n哑弹：发射的鱼雷不会爆炸。"
	},
	"tempest": {
		"cls": "equips",
		"name": "暴风式攻击机",
		"canUseItemEffect": "true",
		"text": "废稿"
	},
	"p61": {
		"cls": "equips",
		"name": "P61黑寡妇",
		"canUseItemEffect": "true",
		"text": "主武器：4×20mm机炮和4×12.7mm机枪炮塔。挂载：4×500磅炸弹\n属性：攻击+n，后勤+40%。每5个回合投弹，每颗炸弹伤害为1倍攻击力。\n被动：\n暗夜行者：与高射炮对战时，免疫60%伤害；免疫80%领域伤害。\n机载雷达：敌人的“先攻”技能无效且我方额外进行2次普通攻击。\n狗斗：战斗机不在场时，也可以代替争夺制空权。"
	},
	"swordfish": {
		"cls": "equips",
		"name": "剑鱼式鱼雷机",
		"canUseItemEffect": "true",
		"text": "无属性加成。挂载：1×MK12鱼雷 或 3×200磅炸弹\n对舰攻击时，每5回合投放3枚鱼雷。对地攻击时，每5回合投放一轮炸弹，每颗炸弹伤害为0.6倍攻击力.",
		"equip": {
			"type": 6,
			"value": {},
			"percentage": {}
		}
	},
	"tbd": {
		"cls": "equips",
		"name": "TBD蹂躏者",
		"canUseItemEffect": "true",
		"text": "装备属性：攻+10。挂载：1×MK13鱼雷或3×500磅炸弹\n对舰攻击时，每5回合投放3枚鱼雷。对地攻击时，每5回合投放一轮炸弹，每颗炸弹伤害为1倍攻击力\n被动：\n哑弹：发射的鱼雷不会爆炸。",
		"equip": {
			"type": 6,
			"value": {
				"atk": 10
			},
			"percentage": {}
		}
	},
	"blenheim": {
		"cls": "equips",
		"name": "布伦海姆轰炸机",
		"canUseItemEffect": "true",
		"text": "攻+10。挂载：4×250磅炸弹。\n每5回合投掷一轮炸弹，每颗炸弹伤害为0.7倍攻击力",
		"equip": {
			"type": 6,
			"value": {
				"atk": 10
			},
			"percentage": {}
		}
	},
	"b25": {
		"cls": "equips",
		"name": "B25米切尔",
		"canUseItemEffect": "true",
		"text": "自卫武器：7×12.7mm炮塔。攻击+50。挂载：3×1000磅炸弹。\n每5回合投弹，每颗炸弹伤害为2倍攻击力。但受精度影响，实际炸弹伤害减少40%。\n被动：\n杜立特传奇：我方装备有航空母舰时，投掷炸弹时额外再投一轮。",
		"equip": {
			"type": 6,
			"value": {
				"atk": 50
			},
			"percentage": {}
		}
	},
	"barracuda": {
		"cls": "equips",
		"name": "梭鱼式轰炸机",
		"canUseItemEffect": "true",
		"text": "自卫武器：2×7.7mm机枪。挂载：6×250磅炸弹或1×MK12鱼雷\n无属性加成。\n对地攻击时，每5回合投掷一轮炸弹，每颗炸弹伤害为0.5倍攻击力\n对舰攻击时，每5回合投掷5枚鱼雷。\n被动：\n兼职俯冲：对舰攻击时，同时进行炸弹和鱼雷攻击。",
		"equip": {
			"type": 6,
			"value": {},
			"percentage": {}
		}
	},
	"tbf": {
		"cls": "equips",
		"name": "TBF复仇者",
		"canUseItemEffect": "true",
		"text": "主武器：2×12.7mm机枪和1×12.7mm自卫机枪。挂载：4×500磅炸弹或1×MK13鱼雷\n属性：攻击+100，雷击+70%。对地攻击时，每4回合投掷1轮炸弹，每颗炸弹伤害为1倍攻击力。对舰攻击时，每4回合投放10枚鱼雷。\n被动：\n巨舰猎手：攻击重巡、战列舰、航母等大型战舰时，鱼雷伤害增加100%\n机载雷达：敌人的“先攻”技能无效且我方额外进行2次普通攻击。\n哑弹：发射的鱼雷不会爆炸。",
		"equip": {
			"type": 6,
			"value": {
				"atk": 100
			},
			"percentage": {
				"top": 70
			}
		}
	},
	"a26": {
		"cls": "equips",
		"name": "B26入侵者",
		"canUseItemEffect": "true",
		"text": "废稿"
	},
	"sterling": {
		"cls": "equips",
		"name": "斯特林MK1",
		"canUseItemEffect": "true",
		"text": "废稿"
	},
	"b17": {
		"cls": "equips",
		"name": "B17空中堡垒",
		"canUseItemEffect": "true",
		"text": "自卫武器：9×12.7和2×7.62mm机枪。挂载：12×500磅炸弹\n被动：\n战略轰炸：无法对舰攻击。对地攻击时，初始敌人血量减少10%，且战后主角周围8格内敌方陆军血量减少5%，可叠加。\n飞行混凝土：遭遇战斗机和高射炮攻击时，减免20%伤害，且对战斗机的每回合普攻伤害+10%。",
		"equip": {
			"type": 6,
			"value": {},
			"percentage": {}
		}
	},
	"b24": {
		"cls": "equips",
		"name": "B24解放者",
		"canUseItemEffect": "true",
		"text": "自卫武器：5×12.7mm机枪。挂载：12×500磅炸弹。\n被动:\n战略轰炸：无法对舰攻击。对地攻击时，敌方血量减少20%，且战后主角周围8格陆军血量减少10%，可叠加。\n反潜巡逻：对潜艇攻击时，抢先投放深水炸弹，造成5倍攻击力的伤害"
	},
	"lancaster": {
		"cls": "equips",
		"name": "兰开斯特轰炸机",
		"canUseItemEffect": "true",
		"text": "自卫武器：8×7.7mm机枪。挂载：14×1000磅炸弹。\n被动：\n战略轰炸：无法对舰攻击。对地攻击时，初始减少敌人20%血量，且战后主角周围8格内陆军血量减少10%，可叠加。\n夜间空袭：免疫20%高射炮伤害与10%轻型战斗机伤害，但受到重型战斗机伤害提升30%。\n特别行动：该飞机可挂载特定的超重型炸弹。"
	},
	"b29": {
		"cls": "equips",
		"name": "B29超级空中堡垒",
		"canUseItemEffect": "true",
		"text": "自卫武器：12×12.7mm机枪。挂载：18×1000磅炸弹。\n被动：\n战略轰炸：无法对舰攻击。对地攻击时，初始减少敌人30%血量，且战后主角周围8格内陆军血量减少15%，可叠加。\n超高空轰炸：敌人的防空技能失效，高射炮伤害-90%，战斗机伤害-50%。\n李梅之怒：与敌方陆军战斗期间，敌方每回合额外受到等同于5%后勤值的普攻伤害。\n末日审判：该机可以挂载【绝密】（也可挂载高脚柜炸弹）。",
		"useItemEffect": null,
		"equip": {
			"type": 6,
			"value": {},
			"percentage": {}
		}
	},
	"tea": {
		"cls": "tools",
		"name": "下午茶",
		"canUseItemEffect": "core.status.hero.hp < core.status.hero.hpmax",
		"text": "英式下午茶，能让人的精神得到放松。\n饮用后恢复25%血量。快捷键8。",
		"useItemEvent": [
			{
				"type": "animate",
				"name": "heal",
				"loc": "hero",
				"async": true
			}
		],
		"useItemEffect": "if (core.hasEquip('churchillmk3')) {\n\tif (hero.hp > hero.hpmax * 0.65 && !core.getFlag(\"__statistics__\")) core.drawHeroAnimate('hpfull');\n\tcore.status.hero.hp += hero.hpmax * 0.35;\n} else if (core.hasEquip('a34comet')) {\n\tif (hero.hp > hero.hpmax * 0.6 && !core.getFlag(\"__statistics__\")) core.drawHeroAnimate('hpfull');\n\tcore.status.hero.hp += hero.hpmax * 0.4;\n} else {\n\tif (hero.hp > hero.hpmax * 0.75 && !core.getFlag(\"__statistics__\")) core.drawHeroAnimate('hpfull');\n\tcore.status.hero.hp += hero.hpmax * 0.25;\n}"
	},
	"cola": {
		"cls": "tools",
		"name": "可乐",
		"canUseItemEffect": "core.status.hero.hp < core.status.hero.hpmax",
		"text": "美国大兵的最爱。由于作者没有获得广告费赞助，因此这款可乐并没注明品牌。\n饮用后恢复50%血量，下一场战斗中额外增加等同于血限5%的后勤值,可叠加。",
		"useItemEvent": [
			{
				"type": "animate",
				"name": "heal",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:colabuff",
				"operator": "+=",
				"value": "1"
			}
		],
		"useItemEffect": "if (hero.hp > hero.hpmax * 1 / 2&&!core.getFlag(\"__statistics__\")) core.drawHeroAnimate('hpfull');\ncore.status.hero.hp += hero.hpmax * 0.5;"
	},
	"I520": {
		"cls": "items",
		"name": "银屑",
		"canUseItemEffect": "true",
		"text": "，黄金+5",
		"itemEffectTip": "，黄金+5",
		"itemEffect": "core.status.hero.money += 5;"
	},
	"I521": {
		"cls": "items",
		"name": "金屑",
		"canUseItemEffect": "true",
		"text": "，黄金+10",
		"itemEffectTip": "，黄金+10",
		"itemEffect": "core.status.hero.money += 10;"
	},
	"I522": {
		"cls": "items",
		"name": "银块",
		"canUseItemEffect": "true",
		"text": "，黄金+50",
		"itemEffectTip": "，黄金+50",
		"itemEffect": "core.status.hero.money += 50;"
	},
	"I523": {
		"cls": "items",
		"name": "金块",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.money += 100;",
		"text": "，黄金+100",
		"itemEffectTip": "，黄金+100"
	},
	"I524": {
		"cls": "items",
		"name": "大金块",
		"canUseItemEffect": "true",
		"text": "，黄金+1000",
		"itemEffectTip": "，黄金+1000",
		"itemEffect": "core.status.hero.money += 1000;"
	},
	"red2Gem": {
		"cls": "items",
		"name": "2阶红宝石",
		"canUseItemEffect": "true",
		"text": ",攻击+2",
		"itemEffect": "core.status.hero.atk += 2;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('atkup');\n}",
		"itemEffectTip": "，攻击+2",
		"useItemEffect": "core.status.hero.atk += 2;"
	},
	"red3Gem": {
		"cls": "items",
		"name": "3阶红宝石",
		"canUseItemEffect": "true",
		"text": ",攻击+5",
		"itemEffectTip": ",攻击+5",
		"itemEffect": "core.status.hero.atk += 5;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('atkup');\n}"
	},
	"red4Gem": {
		"cls": "items",
		"name": "4阶红宝石",
		"canUseItemEffect": "true",
		"text": ",攻击+10",
		"itemEffectTip": ",攻击+10",
		"itemEffect": "core.status.hero.atk += 10;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('atkup');\n}"
	},
	"red5Gem": {
		"cls": "items",
		"name": "5阶红宝石",
		"canUseItemEffect": "true",
		"text": ",攻击+50",
		"itemEffectTip": ",攻击+50",
		"itemEffect": "core.status.hero.atk += 50;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('atkup');\n}"
	},
	"blue2Gem": {
		"cls": "items",
		"name": "2阶蓝宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 20;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('manaup');\n}",
		"text": "，指挥点数+20",
		"itemEffectTip": "，指挥点+20",
		"useItemEffect": "core.status.hero.mana += 20;"
	},
	"blue3Gem": {
		"cls": "items",
		"name": "3阶蓝宝石",
		"canUseItemEffect": "true",
		"text": "，指挥点数+50",
		"itemEffectTip": "，指挥点数+50",
		"itemEffect": "core.status.hero.mana += 50;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('manaup');\n}"
	},
	"blue4Gem": {
		"cls": "items",
		"name": "4阶蓝宝石",
		"canUseItemEffect": "true",
		"text": "，指挥点数+100",
		"itemEffectTip": "，指挥点数+100",
		"itemEffect": "core.status.hero.mana += 100;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('manaup');\n}"
	},
	"blue5Gem": {
		"cls": "items",
		"name": "5阶蓝宝石",
		"canUseItemEffect": "true",
		"text": "，指挥点数+200",
		"itemEffectTip": "，指挥点数+200",
		"itemEffect": "core.status.hero.mana += 200;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('manaup');\n}"
	},
	"green2Gem": {
		"cls": "items",
		"name": "2阶绿宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 10;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('mdefup');\n}",
		"text": "，后勤+10",
		"itemEffectTip": "，后勤+10",
		"useItemEffect": "core.status.hero.mdef += 10;"
	},
	"green3Gem": {
		"cls": "items",
		"name": "3阶绿宝石",
		"canUseItemEffect": "true",
		"text": "，后勤+20",
		"itemEffectTip": "，后勤+20",
		"itemEffect": "core.status.hero.mdef += 20;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('mdefup');\n}"
	},
	"green4Gem": {
		"cls": "items",
		"name": "4阶绿宝石",
		"canUseItemEffect": "true",
		"text": "，后勤+50",
		"itemEffectTip": "，后勤+50",
		"itemEffect": "core.status.hero.mdef += 50;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('mdefup');\n}"
	},
	"green5Gem": {
		"cls": "items",
		"name": "5阶绿宝石",
		"canUseItemEffect": "true",
		"text": "，后勤+150",
		"itemEffectTip": "，后勤+150",
		"itemEffect": "core.status.hero.mdef += 150;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('mdefup');\n}"
	},
	"yellow2Gem": {
		"cls": "items",
		"name": "2阶黄宝石",
		"canUseItemEffect": "true",
		"text": ",血量及血限+100",
		"itemEffectTip": ",血量及血限+100",
		"itemEffect": "core.status.hero.hpmax += 100;\ncore.status.hero.hp += 100;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('hpmaxup');\n}",
		"useItemEffect": "core.status.hero.hpmax += 100;\ncore.status.hero.hp += 100;"
	},
	"yellow3Gem": {
		"cls": "items",
		"name": "3阶黄宝石",
		"canUseItemEffect": "true",
		"text": ",血量及血限+500",
		"itemEffectTip": ",血量及血限+500",
		"itemEffect": "core.status.hero.hpmax += 500;\ncore.status.hero.hp += 500;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('hpmaxup');\n}"
	},
	"yellow4Gem": {
		"cls": "items",
		"name": "4阶黄宝石",
		"canUseItemEffect": "true",
		"text": ",血量及血限+1000",
		"itemEffectTip": ",血量及血限+1000",
		"itemEffect": "core.status.hero.hpmax += 1000;\ncore.status.hero.hp += 1000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('hpmaxup');\n}"
	},
	"yellow5Gem": {
		"cls": "items",
		"name": "5阶黄宝石",
		"canUseItemEffect": "true",
		"text": ",血量及血限+3000",
		"itemEffectTip": ",血量及血限+3000",
		"itemEffect": "core.status.hero.hpmax += 3000;\ncore.status.hero.hp += 3000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('hpmaxup');\n}"
	},
	"orange2Gem": {
		"cls": "items",
		"name": "2阶橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加10雷击",
		"itemEffectTip": "，增加10雷击",
		"itemEffect": "core.status.hero.top += 10;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('topup');\n}"
	},
	"orange3Gem": {
		"cls": "items",
		"name": "3阶橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加50雷击",
		"itemEffect": "core.status.hero.top += 50;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('topup');\n}",
		"itemEffectTip": "，增加50雷击"
	},
	"orange4Gem": {
		"cls": "items",
		"name": "4阶橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加200雷击",
		"itemEffectTip": "，增加200雷击",
		"itemEffect": "core.status.hero.top += 200;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('topup');\n}"
	},
	"orange5Gem": {
		"cls": "items",
		"name": "5阶橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加500雷击",
		"itemEffectTip": "，增加500雷击",
		"itemEffect": "core.status.hero.top += 500;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('topup');\n}"
	},
	"p40c": {
		"cls": "equips",
		"name": "P40B战斧",
		"canUseItemEffect": "true",
		"text": "主武器：2×12.7mm和4×7.62mm机枪\n攻+30。挂载：2×100磅和1×500磅炸弹\n仅第2回合投弹，造成两次0.4倍攻击力的伤害和1次2倍攻击力的伤害",
		"equip": {
			"type": 4,
			"value": {
				"atk": 30
			},
			"percentage": {}
		}
	},
	"baltimore": {
		"cls": "equips",
		"name": "重巡·巴尔的摩级",
		"canUseItemEffect": "true",
		"text": "攻+n后额外加m%。闪避数+1。\n被动：\n航空引导：与埃塞克斯级或约克城级航空母舰一同出击时，对空增伤40%，对海鱼雷增伤60%，对地炸弹增伤30%。\n后方援护：即便在地面战斗中也可以装备。"
	},
	"hard1": {
		"cls": "constants",
		"name": "神剧难度",
		"canUseItemEffect": "true",
		"text": "全塔战斗减伤40%"
	},
	"hard2": {
		"cls": "constants",
		"name": "街机难度",
		"canUseItemEffect": "true",
		"text": "全塔战斗减伤20%"
	},
	"hard4": {
		"cls": "constants",
		"name": "炼狱难度",
		"canUseItemEffect": "true",
		"text": "所有敌人伤害增加10%"
	},
	"orangePotion": {
		"cls": "items",
		"name": "橙血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+5000",
		"itemEffectTip": "，生命+5000",
		"itemEffect": "core.status.hero.hp += 5000;"
	},
	"purplePotion": {
		"cls": "items",
		"name": "紫血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+10000",
		"itemEffectTip": "，生命+10000",
		"itemEffect": "core.status.hero.hp += 10000;"
	},
	"cyanPotion": {
		"cls": "items",
		"name": "青血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+15000",
		"itemEffectTip": "，生命+15000",
		"itemEffect": "core.status.hero.hp += 15000;"
	},
	"darkbluePotion": {
		"cls": "items",
		"name": "深蓝血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+20000",
		"itemEffectTip": "，生命+20000",
		"itemEffect": "core.status.hero.hp += 20000;"
	},
	"darkredPotion": {
		"cls": "items",
		"name": "赤血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+50000",
		"itemEffectTip": "，生命+50000",
		"itemEffect": "core.status.hero.hp += 50000;"
	},
	"goldPotion": {
		"cls": "items",
		"name": "金血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+100000",
		"itemEffectTip": "，生命+100000",
		"itemEffect": "core.status.hero.hp += 100000;"
	},
	"medal2": {
		"cls": "items",
		"name": "2级勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"itemEffect": "core.status.hero.hpmax += 100;\ncore.status.hero.hp += 100;\ncore.status.hero.mana += 20;\ncore.status.hero.atk += 2;\ncore.status.hero.top += 10;\ncore.status.hero.mdef += 10;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('allup');\n}",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "xinxinbazhe.mp3"
			}
		]
	},
	"typhoon": {
		"cls": "equips",
		"name": "台风式攻击机",
		"canUseItemEffect": "true",
		"text": "攻＋300后+20%。挂载：8×RP3火箭弹、1×500磅炸弹。\n攻击非空军敌人时，率先发射两轮火箭弹，每发火箭弹伤害为0.1倍攻击力（对装甲、建筑增伤20%）。\n每4回合投掷一次炸弹，每枚炸弹伤害为2倍攻击力。\n被动：\n机炮扫射：攻击对象为步兵、轰炸机或装甲小于20的坦克时，每回合普攻伤害额外增加20%。\n纵深打击：每一场战斗后，对正前方2格内的敌军地面目标发射火箭弹攻击。\n狗斗：战斗机不在场时，也可以代替争夺制空权。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 300
			},
			"percentage": {}
		}
	},
	"illus1941": {
		"cls": "equips",
		"name": "光辉（1941）",
		"canUseItemEffect": "true",
		"text": "舰载机：海喷火MK1、贼鸥式轰炸机、剑鱼式鱼雷机。闪避鱼雷数-2。\n被动：装甲航母：在海上遭遇敌方空袭时，减少25%炸弹伤害。遭遇非战列舰的水面舰艇攻击时，伤害减少20%。",
		"equip": {
			"type": 3,
			"value": {
				"atk": 80,
				"dod": -2
			},
			"percentage": {}
		}
	},
	"yellow3Key": {
		"cls": "items",
		"name": "一串黄钥匙",
		"canUseItemEffect": "true",
		"text": ",黄钥匙+3",
		"itemEffectTip": ",黄钥匙+3",
		"itemEffect": "core.addItem('yellowKey', 3)"
	},
	"blue3Key": {
		"cls": "items",
		"name": "一串蓝钥匙",
		"canUseItemEffect": "true",
		"text": "，蓝钥匙+3",
		"itemEffectTip": "，蓝钥匙+3",
		"itemEffect": "core.addItem('blueKey', 3)"
	},
	"medal3": {
		"cls": "items",
		"name": "3级勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "xinxinbazhe.mp3"
			}
		],
		"itemEffect": "core.status.hero.hpmax += 500;\ncore.status.hero.hp += 500;\ncore.status.hero.mana += 50;\ncore.status.hero.atk += 5;\ncore.status.hero.top += 50;\ncore.status.hero.mdef += 20;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('allup');\n}"
	},
	"tea5": {
		"cls": "items",
		"name": "小补给箱",
		"canUseItemEffect": "true",
		"text": "，获得5个下午茶",
		"itemEffectTip": "，获得5个下午茶",
		"itemEffect": "core.addItem('tea', 5)"
	},
	"I600": {
		"cls": "constants",
		"name": "额外设置",
		"canUseItemEffect": "true",
		"text": "进行一些额外的设置",
		"useItemEvent": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[选择设置项] ",
						"choices": [
							{
								"text": "临界显示：[${flags.cri?'ON':'OFF'}]",
								"action": [
									{
										"type": "setValue",
										"name": "flag:cri",
										"value": "(!flag:cri)"
									}
								]
							},
							{
								"text": "动画效果：[${flags.anime?'ON':'OFF'}]",
								"action": [
									{
										"type": "setValue",
										"name": "flag:anime",
										"value": "(!flag:anime)"
									}
								]
							},
							{
								"text": "战后音效：[${flags.closesound?'OFF':'ON'}]",
								"action": [
									{
										"type": "setValue",
										"name": "flag:closesound",
										"value": "(!flag:closesound)"
									}
								]
							},
							{
								"text": "撞冰受伤：[${flags.hitice?'ON':'OFF'}]",
								"action": [
									{
										"type": "setValue",
										"name": "flag:hitice",
										"value": "(!flag:hitice)"
									}
								]
							},
							{
								"text": "自动拾取：[${flags.autoitem?'ON':'OFF'}]",
								"action": [
									{
										"type": "setValue",
										"name": "flag:autoitem",
										"value": "(!flag:autoitem)"
									}
								]
							},
							{
								"text": "灯光效果：[${flags.lighton?'ON':'OFF'}]",
								"action": [
									{
										"type": "setValue",
										"name": "flag:lighton",
										"value": "(!flag:lighton)"
									},
									{
										"type": "function",
										"function": "function(){\ncore.drawHero()\n}"
									}
								]
							},
							{
								"text": "返回",
								"action": [
									{
										"type": "break",
										"n": 1
									}
								]
							}
						]
					}
				]
			}
		]
	},
	"m4": {
		"cls": "equips",
		"name": "M4谢尔曼",
		"canUseItemEffect": "true",
		"text": "攻+200后额外加30%，穿78，装85。\n被动技能：\n工业底蕴：战后额外加5黄金。判定在“工业潜能”之前触发。\n数量碾压：被敌人单向击穿时，攻击力额外加15%。\n杀伤榴弹：对步兵和炮兵增加30%普攻伤害。",
		"equip": {
			"type": 0,
			"value": {
				"atk": 200,
				"ap": 78,
				"arm": 85
			},
			"percentage": {
				"atk": 30
			}
		}
	},
	"p47b": {
		"cls": "equips",
		"name": "P47B雷电",
		"canUseItemEffect": "true",
		"text": "主武器：8×12.7mm机枪\n装备属性：攻击+120后额外加20%。\n被动：\n钢筋铁骨：与敌方空军作战时，免疫20%普攻伤害。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 120
			},
			"percentage": {
				"atk": 20
			}
		}
	},
	"spitfiremk9": {
		"cls": "equips",
		"name": "喷火MK9",
		"canUseItemEffect": "true",
		"text": "主武器：4×7.7mm机枪和2×20mm机炮。挂载：8×RP-3火箭弹\n属性：攻击＋250后额外加30%。首回合发射一轮火箭弹，每发火箭弹伤害为0.1倍攻击力（对装甲、建筑增伤20%）\n被动：\n不列颠之鹰II：与敌方战斗机作战时，普攻伤害增加0.2倍后勤值。\n空中掩护：已夺取制空权时，制空权加成改为20%。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 250
			},
			"percentage": {
				"atk": 30
			}
		}
	},
	"spitfiremk5": {
		"cls": "equips",
		"name": "喷火MK5",
		"canUseItemEffect": "true",
		"text": "主武器：4×7.7mm机枪和2×20mm机炮\n攻击+170后额外加20%。\n被动：\n不列颠之鹰：与敌方战斗机作战时，每回合增伤10%。此外，如果回合结束时该敌机血量高于60%，额外受到等同于我方攻击力15%的伤害。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 170
			},
			"percentage": {
				"atk": 20
			}
		}
	},
	"medal4": {
		"cls": "items",
		"name": "4级勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"itemEffect": "core.status.hero.hpmax += 1000;\ncore.status.hero.hp += 1000;\ncore.status.hero.mana += 100;\ncore.status.hero.atk += 10;\ncore.status.hero.top += 200;\ncore.status.hero.mdef += 50;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('allup');\n}",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "xinxinbazhe.mp3"
			}
		]
	},
	"sonar": {
		"cls": "constants",
		"name": "主动声纳",
		"canUseItemEffect": "false"
	},
	"bigredPotion": {
		"cls": "items",
		"name": "大红血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+25w",
		"itemEffectTip": "，生命+25w",
		"itemEffect": "core.status.hero.hp += 250000;"
	},
	"bigbluePotion": {
		"cls": "items",
		"name": "大蓝血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+50w",
		"itemEffectTip": "，生命+50w",
		"itemEffect": "core.status.hero.hp += 500000;"
	},
	"bigyellowPotion": {
		"cls": "items",
		"name": "大黄血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+100w",
		"itemEffectTip": "，生命+100w",
		"itemEffect": "core.status.hero.hp += 1000000;"
	},
	"biggreenPotion": {
		"cls": "items",
		"name": "大绿血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+250w",
		"itemEffectTip": "，生命+250w",
		"itemEffect": "core.status.hero.hp += 2500000;"
	},
	"bigorangePotion": {
		"cls": "items",
		"name": "大橙血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+500w",
		"itemEffectTip": "，生命+500w",
		"itemEffect": "core.status.hero.hp += 5000000;"
	},
	"bigpurplePotion": {
		"cls": "items",
		"name": "大紫血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+1000w",
		"itemEffectTip": "，生命+1000w",
		"itemEffect": "core.status.hero.hp += 10000000;"
	},
	"bigcyanPotion": {
		"cls": "items",
		"name": "大青血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+2500w",
		"itemEffectTip": "，生命+2500w",
		"itemEffect": "core.status.hero.hp += 25000000;"
	},
	"bigdarkbluePotion": {
		"cls": "items",
		"name": "大深蓝血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+5000w",
		"itemEffectTip": "，生命+5000w",
		"itemEffect": "core.status.hero.hp += 50000000;"
	},
	"bigdarkredPotion": {
		"cls": "items",
		"name": "大赤血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+1e",
		"itemEffectTip": "，生命+1e",
		"itemEffect": "core.status.hero.hp += 100000000;"
	},
	"biggoldPotion": {
		"cls": "items",
		"name": "大金血瓶",
		"canUseItemEffect": "true",
		"text": "，生命+2e",
		"itemEffectTip": "，生命+2e",
		"itemEffect": "core.status.hero.hp += 200000000;"
	},
	"medal5": {
		"cls": "items",
		"name": "5级勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"itemEffect": "core.status.hero.hpmax += 3000;\ncore.status.hero.hp += 3000;\ncore.status.hero.mana += 200;\ncore.status.hero.atk += 50;\ncore.status.hero.top += 500;\ncore.status.hero.mdef += 150;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('allup');\n}",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "xinxinbazhe.mp3"
			}
		]
	},
	"unicorn": {
		"cls": "constants",
		"name": "独角兽号轻航母",
		"canUseItemEffect": "true",
		"text": "永久道具类，无需装备。仅在海洋和浅滩生效。\n每次作战后，如果伤害不高于0，回血效果增加20%。此外，如果装备了航母，获得10%战斗减伤。如果是光辉号航母，减伤效果改为20%。"
	},
	"independence": {
		"cls": "constants",
		"name": "独立级轻航母",
		"canUseItemEffect": "true",
		"text": "舰载机：F6F地狱猫、SBD无畏、TBF复仇者\n永久道具类，无需装备。仅在海洋和浅滩生效。舰载机仅保留属性加成和武器弹药，没有特殊技能效果，无法参与夺取制空权。\n没有装备航母时，舰载机将参与战斗。\n装备航母时，效果改为：所有空袭伤害提升30%（陆基飞机也可获得加成）"
	},
	"casablanca": {
		"cls": "constants",
		"name": "卡萨布兰卡级护航航母",
		"canUseItemEffect": "true",
		"text": "永久道具类，无需装备。仅在海洋、浅滩生效。\n存在需保护的友军时，友军受到伤害减少30%。与潜艇作战时，首回合即可造成1倍攻击力的深水炸弹伤害。"
	},
	"nuke": {
		"cls": "tools",
		"name": "曼哈顿计划",
		"canUseItemEffect": "(function () {\n\treturn (core.hasEquip('b29') || core.hasEquip('tu4')) && !core.floors[core.status.floorId].cannotViewMap;\n})()",
		"text": "一次性道具。必须装备着具有投放核武器能力的轰炸机时才能使用。\n在当前地图投放一枚原子弹，抹除当前以及相邻两个战斗层中所有非boss敌人和可破墙壁（不获得金经），并留下永久辐射效果：boss全阶段血量降低90%，且若有新敌人出现，新敌人血量为0。",
		"useItemEffect": "(function () {\n\tif ((core.hasEquip('b29') || core.hasEquip('tu4')) && !core.floors[core.status.floorId].cannotViewMap) {\n\t\tconst index = core.floorIds.indexOf(core.status.floorId);\n\t\tlet nukefloor = [core.status.floorId];\n\t\tif (index + 1 < core.floorIds.length && !core.floors[core.floorIds[index + 1]].cannotViewMap) {\n\t\t\tnukefloor.push(core.floorIds[index + 1]);\n\t\t}\n\t\tif (index - 1 >= 0 && !core.floors[core.floorIds[index - 1]].cannotViewMap) {\n\t\t\tnukefloor.push(core.floorIds[index - 1]);\n\t\t}\n\t\tcore.insertAction([{ \"type\": \"showImage\", \"code\": 1, \"image\": \"aircraft6.png\", \"loc\": [20, 480], \"opacity\": 1, \"time\": 0 },\n\t\t\t{ \"type\": \"playSound\", \"name\": \"bomber1.mp3\" },\n\t\t\t{ \"type\": \"moveImage\", \"code\": 1, \"to\": [20, -330], \"time\": 2000 },\n\t\t\t{ \"type\": \"hideImage\", \"code\": 1, \"time\": 0 },\n\t\t\t{ \"type\": \"sleep\", \"time\": 2000 },\n\t\t\t{ \"type\": \"setCurtain\", \"color\": [255, 255, 255, 1], \"time\": 100, \"keep\": true }\n\t\t], null, null, () => {\n\t\t\tlet nukeblock = core.searchBlockWithFilter(block => { return (block.event.cls === 'enemys' && !core.hasSpecial(core.material.enemys[block.event.id].special, 57)) || block.event.canBreak }, nukefloor);\n\t\t\tlet nukeevent = nukeblock.filter(block => block.event && block.event.cls === 'enemys');\n\t\t\tlet nuketodo = [];\n\t\t\tnukeevent.forEach(v => {\n\t\t\t\tcore.push(nuketodo, core.floors[v.floorId].afterBattle[v.x + \",\" + v.y]);\n\t\t\t\tcore.push(nuketodo, core.material.enemys[v.event.id].afterBattle);\n\t\t\t})\n\t\t\tnukeblock.forEach(v => {\n\t\t\t\tdelete((flags.enemyOnPoint || {})[v.floorId] || {})[v.x + \",\" + v.y];\n\t\t\t\tcore.removeBlock(v.x, v.y, v.floorId);\n\t\t\t})\n\t\t\tcore.updateStatusBar();\n\t\t\tif (!flags.nuked) {\n\t\t\t\tflags.nuked = nukefloor;\n\t\t\t} else {\n\t\t\t\tflags.nuked = [...(new Set([...flags.nuked, ...nukefloor]))];\n\t\t\t}\n\t\t\tcore.insertAction([{ \"type\": \"showImage\", \"code\": 1, \"image\": \"nuke.jpg\", \"loc\": [0, 0], \"opacity\": 1, \"time\": 0 },\n\t\t\t\t{ \"type\": \"sleep\", \"time\": 1000 },\n\t\t\t\t{ \"type\": \"playSound\", \"name\": \"049-Explosion02.mp3\" },\n\t\t\t\t{ \"type\": \"vibrate\", \"direction\": \"horizontal\", \"time\": 3000, \"speed\": 10, \"power\": 10, \"async\": true },\n\t\t\t\t{ \"type\": \"setCurtain\", \"time\": 500 },\n\t\t\t\t{ \"type\": \"sleep\", \"time\": 2000 },\n\t\t\t\t{ \"type\": \"setCurtain\", \"color\": [255, 255, 255, 1], \"time\": 500, \"keep\": true },\n\t\t\t\t{ \"type\": \"hideImage\", \"code\": 1, \"time\": 0 },\n\t\t\t\t{ \"type\": \"sleep\", \"time\": 500 },\n\t\t\t\t{ \"type\": \"setCurtain\", \"time\": 500 },\n\t\t\t\t{ \"type\": \"waitAsync\" },\n\t\t\t], null, null, () => { if (nuketodo.length > 0) { core.insertAction(nuketodo) } })\n\t\t})\n\t}\n})()"
	},
	"penicillin": {
		"cls": "constants",
		"name": "青霉素",
		"canUseItemEffect": "true",
		"text": "持有时，血限提升15%，“一杯茶”治疗效果改为40%。"
	},
	"red6Gem": {
		"cls": "items",
		"name": "6阶红宝石",
		"canUseItemEffect": "true",
		"text": ",攻击+100",
		"itemEffectTip": ",攻击+100",
		"itemEffect": "core.status.hero.atk += 100;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('atkup');\n}"
	},
	"blue6Gem": {
		"cls": "items",
		"name": "6阶蓝宝石",
		"canUseItemEffect": "true",
		"text": "，指挥点数+300",
		"itemEffectTip": "，指挥点数+300",
		"itemEffect": "core.status.hero.mana += 300;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('manaup');\n}"
	},
	"green6Gem": {
		"cls": "items",
		"name": "6阶绿宝石",
		"canUseItemEffect": "true",
		"text": "，后勤+500",
		"itemEffectTip": "，后勤+500",
		"itemEffect": "core.status.hero.mdef += 500;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('mdefup');\n}"
	},
	"yellow6Gem": {
		"cls": "items",
		"name": "6阶黄宝石",
		"canUseItemEffect": "true",
		"text": ",血量及血限+10000",
		"itemEffectTip": ",血量及血限+10000",
		"itemEffect": "core.status.hero.hpmax += 10000;\ncore.status.hero.hp += 10000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('hpmaxup');\n}"
	},
	"orange6Gem": {
		"cls": "items",
		"name": "6阶橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加1500雷击",
		"itemEffectTip": "，增加1500雷击",
		"itemEffect": "core.status.hero.top += 1500;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('topup');\n}"
	},
	"red7Gem": {
		"cls": "items",
		"name": "7阶红宝石",
		"canUseItemEffect": "true",
		"text": ",攻击+200",
		"itemEffectTip": ",攻击+200",
		"itemEffect": "core.status.hero.atk += 200;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('atkup');\n}"
	},
	"blue7Gem": {
		"cls": "items",
		"name": "7阶蓝宝石",
		"canUseItemEffect": "true",
		"text": "，指挥点数+400",
		"itemEffectTip": "，指挥点数+400",
		"itemEffect": "core.status.hero.mana += 400;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('manaup');\n}"
	},
	"green7Gem": {
		"cls": "items",
		"name": "7阶绿宝石",
		"canUseItemEffect": "true",
		"text": "，后勤+1000",
		"itemEffectTip": "，后勤+1000",
		"itemEffect": "core.status.hero.mdef += 1000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('mdefup');\n}"
	},
	"yellow7Gem": {
		"cls": "items",
		"name": "7阶黄宝石",
		"canUseItemEffect": "true",
		"text": ",血量及血限+20000",
		"itemEffectTip": ",血量及血限+20000",
		"itemEffect": "core.status.hero.hpmax += 20000;\ncore.status.hero.hp += 20000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('hpmaxup');\n}"
	},
	"orange7Gem": {
		"cls": "items",
		"name": "7阶橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加5000雷击",
		"itemEffectTip": "，增加50500雷击",
		"itemEffect": "core.status.hero.top += 5000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('topup');\n}"
	},
	"red8Gem": {
		"cls": "items",
		"name": "8阶红宝石",
		"canUseItemEffect": "true",
		"text": ",攻击+500",
		"itemEffectTip": ",攻击+500",
		"itemEffect": "core.status.hero.atk += 500;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('atkup');\n}"
	},
	"blue8Gem": {
		"cls": "items",
		"name": "8阶蓝宝石",
		"canUseItemEffect": "true",
		"text": "，指挥点数+500",
		"itemEffectTip": "，指挥点数+500",
		"itemEffect": "core.status.hero.mana += 500;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('manaup');\n}"
	},
	"green8Gem": {
		"cls": "items",
		"name": "8阶绿宝石",
		"canUseItemEffect": "true",
		"text": "，后勤+2000",
		"itemEffectTip": "，后勤+2000",
		"itemEffect": "core.status.hero.mdef += 2000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('mdefup');\n}"
	},
	"yellow8Gem": {
		"cls": "items",
		"name": "8阶黄宝石",
		"canUseItemEffect": "true",
		"text": ",血量及血限+50000",
		"itemEffectTip": ",血量及血限+50000",
		"itemEffect": "core.status.hero.hpmax += 50000;\ncore.status.hero.hp += 50000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('hpmaxup');\n}"
	},
	"orange8Gem": {
		"cls": "items",
		"name": "8阶橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加15000雷击",
		"itemEffectTip": "，增加15000雷击",
		"itemEffect": "core.status.hero.top += 15000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('topup');\n}"
	},
	"medal6": {
		"cls": "items",
		"name": "6级勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"itemEffect": "core.status.hero.hpmax += 10000;\ncore.status.hero.hp += 10000;\ncore.status.hero.mana += 300;\ncore.status.hero.atk += 100;\ncore.status.hero.top += 1500;\ncore.status.hero.mdef += 500;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('allup');\n}"
	},
	"medal7": {
		"cls": "items",
		"name": "7级勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"itemEffect": "core.status.hero.hpmax += 20000;\ncore.status.hero.hp += 20000;\ncore.status.hero.mana += 400;\ncore.status.hero.atk += 200;\ncore.status.hero.top += 5000;\ncore.status.hero.mdef += 1000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('allup');\n}"
	},
	"medal8": {
		"cls": "items",
		"name": "8级勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"itemEffect": "core.status.hero.hpmax += 50000;\ncore.status.hero.hp += 50000;\ncore.status.hero.mana += 500;\ncore.status.hero.atk += 500;\ncore.status.hero.top += 15000;\ncore.status.hero.mdef += 2000;\nif (flags.anime === true&&!core.getFlag(\"__statistics__\")) {\n\tcore.drawHeroAnimate('allup');\n}"
	},
	"rocketLauncher": {
		"cls": "constants",
		"name": "巴祖卡火箭筒",
		"canUseItemEffect": "false",
		"text": "步兵武器，无需装备。\n地面战时，被对方单向击穿，对方的20%减伤将失效。\n对建筑增伤10%，对火炮20%，对坦克5%。"
	},
	"I667": {
		"cls": "tools",
		"name": "演讲稿",
		"canUseItemEffect": "true",
		"text": "语言的力量！\n使用后清空所有“惊慌”层数，并获得一层“振奋”：攻击力提升10%，持续一场战斗。"
	},
	"shermancrab": {
		"cls": "constants",
		"name": "谢尔曼“螃蟹”扫雷坦克",
		"canUseItemEffect": "true",
		"text": "持有时，地雷伤害-80%，但对水雷无效。\n扫雷坦克扫不了水雷不是很正常吗？"
	},
	"crocodile": {
		"cls": "tools",
		"name": "丘吉尔“鳄鱼”喷火坦克",
		"canUseItemEffect": "(function () {\n\tlet Block = core.getBlock(core.nextX(), core.nextY());\n\treturn Block && Block.event.cls === 'enemys' && ['步兵', '反坦克炮', '榴弹炮', '高射炮', '建筑'].includes(core.material.enemys[Block.event.id].type) && !core.hasSpecial(core.material.enemys[Block.event.id].special, 57);\n})()",
		"text": "喷射火焰，消灭主角面前的非boss步兵、火炮或防御建筑并获得金经，无视“无法被攻击”效果。",
		"useItemEffect": "(function () {\n\tlet Block = core.getBlock(core.nextX(), core.nextY());\n\tif (Block && Block.event.cls === 'enemys' && ['步兵', '反坦克炮', '榴弹炮', '高射炮', '建筑'].includes(core.material.enemys[Block.event.id].type) && !core.hasSpecial(core.material.enemys[Block.event.id].special, 57)) {\n\t\tlet money = core.getEnemyValue(Block.event.id, 'money', Block.x, Block.y),\n\t\t\texp = core.getEnemyValue(Block.event.id, 'exp', Block.x, Block.y),\n\t\t\ttodo = [];\n\t\tif (core.hasEquip('m4') || core.hasEquip('m4a2') || core.hasEquip('m4a3') || core.hasEquip('m4a3e2') || core.hasEquip('firefly')) money += 5; //谢馒头，触发在双倍前\n\t\tif (core.hasEquip('classj')) money += 5; //J级驱逐舰\n\t\tif (flags.warmachine === true) money *= 2; //工业潜能，金币翻倍，计算在下面几个之前\n\t\tif (core.hasEquip('edinburgh')) money += 2; //爱丁堡号巡洋舰，金币+2\n\t\tif (core.hasEquip('hood')) money += 10; //胡德号，金币+10\n\t\tif (core.hasItem('coin')) money *= 2; // 幸运金币：双倍\n\t\tif (core.hasSpecial(core.material.enemys[Block.event.id].special, 61)) money = 0; // 投降\n\t\tcore.status.hero.money += money;\n\t\tcore.status.hero.statistics.money += money;\n\t\tif (core.hasEquip('classv')) exp += 2; //V级驱逐舰\n\t\tif (core.hasEquip('classj')) exp += 5; //J级驱逐舰\n\t\tif (core.hasEquip('hood')) exp += 10; //胡德号，经验+10\n\t\tif (core.hasEquip('m4a2') || core.hasEquip('m4a3') || core.hasEquip('m4a3e2') || core.hasEquip('firefly')) exp *= 2; //馒头\n\t\tif (core.hasSpecial(core.material.enemys[Block.event.id].special, 61)) exp = 0; // 投降\n\t\tcore.status.hero.exp += exp;\n\t\tcore.status.hero.statistics.exp += exp;\n\t\tcore.drawAnimate('explore3', Block.x, Block.y);\n\t\tif (core.status.floorId != null) {\n\t\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[Block.x + \",\" + Block.y]);\n\t\t}\n\t\tcore.push(todo, core.material.enemys[Block.event.id].afterBattle);\n\t\tdelete((flags.enemyOnPoint || {})[core.status.floorId] || {})[Block.x + \",\" + Block.y];\n\t\tcore.removeBlock(Block.x, Block.y);\n\t\tif (core.hasSpecial(core.material.enemys[Block.event.id].special, 84)) {\n\t\t\tcore.setBlock(\"yellowWall\", Block.x, Block.y);\n\t\t}\n\t\tif (todo.length > 0) {\n\t\t\tcore.insertAction(todo);\n\t\t}\n\t}\n})()"
	},
	"is3": {
		"cls": "equips",
		"name": "IS-3“斯大林”重型坦克",
		"canUseItemEffect": "true",
		"text": "攻击+n后额外+100%，穿215装240。\n被动：\n钢铁洪流：生命值大于50%时，攻击力进一步提高40%。\n装甲扫荡：对一切地面目标伤害提升30%，受到战斗伤害减少30%。无视万岁冲锋。\n乌拉：不会被惊慌debuff影响。"
	},
	"la9": {
		"cls": "equips",
		"name": "拉-9战斗机",
		"canUseItemEffect": "true",
		"text": "主武器：4×23mm机炮。挂载：8×RBS-132火箭弹（虚空加的，现实没有）\n攻+n后额外+80%。首回合发射2轮火箭弹，基础伤害0.2倍攻击力（对地面目标增伤30%）\n被动：\n一击必杀：首轮攻击造成3倍伤害，之后每回合伤害倍率降为90%。\n苏空集群：如果战斗结束后血量在30%以下，则恢复10%血量并获得10%攻击力加成，持续1场战斗。"
	},
	"il10": {
		"cls": "equips",
		"name": "伊尔10“野兽”",
		"canUseItemEffect": "true",
		"text": "主武器：4×23mm机炮。挂载：4×RBS132火箭弹和2×250kg炸弹\n攻击+n后+30%。首轮攻击发射3轮火箭弹，基础伤害0.2倍攻击力（对地面目标伤害+30%）。每2回合投放3轮炸弹，每颗炸弹倍率1倍攻击力。\n被动：\n对地打击：攻击地面目标时，火箭弹和炸弹伤害翻倍。\n飞行坦克：无视防空技能，受到一切伤害减少20%。"
	},
	"tu4": {
		"cls": "equips",
		"name": "图4轰炸机",
		"canUseItemEffect": "true",
		"text": "自卫武器：12×12.7mm机枪。挂载：18×1000磅炸弹。\n被动：\n山寨版B29：技能组和属性加成同B29轰炸机。"
	}
}