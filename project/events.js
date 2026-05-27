var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"回收钥匙商店": [
			{
				"type": "comment",
				"text": "此事件在全局商店中被引用了(全局商店keyShop)"
			},
			{
				"type": "comment",
				"text": "解除引用前勿删除此事件"
			},
			{
				"type": "comment",
				"text": "玩家在快捷列表（V键）中可以使用本公共事件"
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,trader]你有多余的钥匙想要出售吗？",
						"choices": [
							{
								"text": "黄钥匙（10金币）",
								"color": [
									255,
									255,
									0,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:yellowKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "10"
											}
										],
										"false": [
											"\t[商人,trader]你没有黄钥匙！"
										]
									}
								]
							},
							{
								"text": "蓝钥匙（50金币）",
								"color": [
									0,
									0,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:blueKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "50"
											}
										],
										"false": [
											"\t[商人,trader]你没有蓝钥匙！"
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"查看技能": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "setValue",
						"name": "temp:A",
						"value": "core.plugin.skillInfo[flags.skillList[0]]",
						"norefresh": true
					},
					{
						"type": "setValue",
						"name": "temp:B",
						"value": "core.plugin.skillInfo[flags.skillList[1]]",
						"norefresh": true
					},
					{
						"type": "setValue",
						"name": "temp:C",
						"value": "core.plugin.skillInfo[flags.skillList[2]]",
						"norefresh": true
					},
					{
						"type": "setValue",
						"name": "temp:D",
						"value": "core.plugin.skillInfo[flags.skillList[3]]",
						"norefresh": true
					},
					{
						"type": "setValue",
						"name": "temp:E",
						"value": "core.plugin.skillInfo[flags.skillList[4]]",
						"norefresh": true
					},
					{
						"type": "setValue",
						"name": "temp:F",
						"value": "core.plugin.skillInfo[flags.skillList[5]]",
						"norefresh": true
					},
					{
						"type": "setValue",
						"name": "temp:G",
						"value": "core.plugin.skillInfo[flags.skillList[6]]",
						"norefresh": true
					},
					{
						"type": "choices",
						"text": "\t[查看当前技能] ",
						"choices": [
							{
								"text": "快捷键1：${temp:A.name+(temp:A.strategy?'（即时）':'')+'，消耗：'+temp:A.cost}",
								"need": "flags.skillList[0]>0",
								"action": [
									"\t[${temp:A.name}]${temp:A.strategy?'战略':'战术'}指令，消耗指挥点数：${temp:A.cost}。\n${temp:A.description}"
								]
							},
							{
								"text": "快捷键2：${temp:B.name+(temp:B.strategy?'（即时）':'')+'，消耗：'+temp:B.cost}",
								"need": "flags.skillList[1]>0",
								"action": [
									"\t[${temp:B.name}]${temp:B.strategy?'战略':'战术'}指令，消耗指挥点数：${temp:B.cost}。\n${temp:B.description}"
								]
							},
							{
								"text": "快捷键3：${temp:C.name+(temp:C.strategy?'（即时）':'')+'，消耗：'+temp:C.cost}",
								"need": "flags.skillList[2]>0",
								"action": [
									"\t[${temp:C.name}]${temp:C.strategy?'战略':'战术'}指令，消耗指挥点数：${temp:C.cost}。\n${temp:C.description}"
								]
							},
							{
								"text": "快捷键4：${temp:D.name+(temp:D.strategy?'（即时）':'')+'，消耗：'+temp:D.cost}",
								"need": "flags.skillList[3]>0",
								"action": [
									"\t[${temp:D.name}]${temp:D.strategy?'战略':'战术'}指令，消耗指挥点数：${temp:D.cost}。\n${temp:D.description}"
								]
							},
							{
								"text": "快捷键5：${temp:E.name+(temp:E.strategy?'（即时）':'')+'，消耗：'+temp:E.cost}",
								"need": "flags.skillList[4]>0",
								"action": [
									"\t[${temp:E.name}]${temp:E.strategy?'战略':'战术'}指令，消耗指挥点数：${temp:E.cost}。\n${temp:E.description}"
								]
							},
							{
								"text": "快捷键6：${temp:F.name+(temp:F.strategy?'（即时）':'')+'，消耗：'+temp:F.cost}",
								"need": "flags.skillList[5]>0",
								"action": [
									"\t[${temp:F.name}]${temp:F.strategy?'战略':'战术'}指令，消耗指挥点数：${temp:F.cost}。\n${temp:F.description}"
								]
							},
							{
								"text": "快捷键7：${temp:G.name+(temp:G.strategy?'（即时）':'')+'，消耗：'+temp:G.cost}",
								"need": "flags.skillList[6]>0",
								"action": [
									"\t[${temp:G.name}]${temp:G.strategy?'战略':'战术'}指令，消耗指挥点数：${temp:G.cost}。\n${temp:G.description}"
								]
							},
							{
								"text": "退出",
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
		],
		"选择技能": [
			{
				"type": "function",
				"function": "function(){\ncore.insertAction(core.plugin.bindSkills())\n}"
			}
		],
		"选择坦克": [
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
						"text": "装备 十字军巡洋坦克",
						"icon": "crusades",
						"need": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
						"condition": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
						"action": [
							{
								"type": "loadEquip",
								"id": "crusades"
							}
						]
					},
					{
						"text": "装备 瓦伦丁步兵坦克",
						"icon": "valentine",
						"need": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
						"condition": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
						"action": [
							{
								"type": "loadEquip",
								"id": "valentine"
							}
						]
					},
					{
						"text": "装备 玛蒂尔达步兵坦克",
						"icon": "matilda",
						"need": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
						"condition": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
						"action": [
							{
								"type": "loadEquip",
								"id": "matilda"
							}
						]
					},
					{
						"text": "装备 M3格兰特中型坦克",
						"icon": "m3grant",
						"need": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
						"condition": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
						"action": [
							{
								"type": "loadEquip",
								"id": "m3grant"
							}
						]
					},
					{
						"text": "装备 M4谢尔曼中型坦克",
						"icon": "m4",
						"need": "core.hasItem('m4')&&!core.hasEquip('m4')",
						"condition": "core.hasItem('m4')&&!core.hasEquip('m4')",
						"action": [
							{
								"type": "loadEquip",
								"id": "m4"
							}
						]
					},
					{
						"text": "装备 丘吉尔MK3步兵坦克",
						"icon": "churchillmk3",
						"need": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
						"condition": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
						"action": [
							{
								"type": "loadEquip",
								"id": "churchillmk3"
							}
						]
					},
					{
						"text": "装备 M4A2谢尔曼",
						"icon": "m4a2",
						"need": "core.hasItem('m4a2')&&!core.hasEquip('m4a2')",
						"condition": "core.hasItem('m4a2')&&!core.hasEquip('m4a2')",
						"action": [
							{
								"type": "loadEquip",
								"id": "m4a2"
							}
						]
					},
					{
						"text": "装备 M4A1（76W）谢尔曼",
						"icon": "m4a3",
						"need": "core.hasItem('m4a3')&&!core.hasEquip('m4a3')",
						"condition": "core.hasItem('m4a3')&&!core.hasEquip('m4a3')",
						"action": [
							{
								"type": "loadEquip",
								"id": "m4a3"
							}
						]
					},
					{
						"text": "装备 M4A3E2巨无霸",
						"icon": "m4a3e2",
						"need": "core.hasItem('m4a3e2')&&!core.hasEquip('m4a3e2')",
						"condition": "core.hasItem('m4a3e2')&&!core.hasEquip('m4a3e2')",
						"action": [
							{
								"type": "loadEquip",
								"id": "m4a3e2"
							}
						]
					},
					{
						"text": "装备 谢尔曼“萤火虫”",
						"icon": "firefly",
						"need": "core.hasItem('firefly')&&!core.hasEquip('firefly')",
						"condition": "core.hasItem('firefly')&&!core.hasEquip('firefly')",
						"action": [
							{
								"type": "loadEquip",
								"id": "firefly"
							}
						]
					},
					{
						"text": "装备 M26潘兴",
						"icon": "m26pershing",
						"need": "core.hasItem('m26pershing')&&!core.hasEquip('m26pershing')",
						"condition": "core.hasItem('m26pershing')&&!core.hasEquip('m26pershing')",
						"action": [
							{
								"type": "loadEquip",
								"id": "m26pershing"
							}
						]
					},
					{
						"text": "装备 巴尔的摩级重巡洋舰",
						"icon": "baltimore",
						"need": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
						"condition": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
						"action": [
							{
								"type": "loadEquip",
								"id": "baltimore"
							}
						]
					},
					{
						"text": "装备 埃塞克斯级航空母舰",
						"icon": "essex",
						"need": "core.hasItem('essex')&&!core.hasEquip('essex')",
						"condition": "core.hasItem('essex')&&!core.hasEquip('essex')",
						"action": [
							{
								"type": "loadEquip",
								"id": "essex"
							}
						]
					},
					{
						"text": "装备 企业号航空母舰",
						"icon": "enterprise",
						"need": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
						"condition": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
						"action": [
							{
								"type": "loadEquip",
								"id": "enterprise"
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
		"选择战舰": [
			{
				"type": "choices",
				"text": "\t[海军参谋,N515]请选择出战海军舰艇",
				"choices": [
					{
						"text": "装备 E级驱逐舰",
						"icon": "classe",
						"need": "core.hasItem('classe')&&!core.hasEquip('classe')",
						"condition": "core.hasItem('classe')&&!core.hasEquip('classe')",
						"action": [
							{
								"type": "loadEquip",
								"id": "classe"
							}
						]
					},
					{
						"text": "装备 V级驱逐舰",
						"icon": "classv",
						"need": "core.hasItem('classv')&&!core.hasEquip('classv')",
						"condition": "core.hasItem('classv')&&!core.hasEquip('classv')",
						"action": [
							{
								"type": "loadEquip",
								"id": "classv"
							}
						]
					},
					{
						"text": "装备 马汉级驱逐舰",
						"icon": "mahan",
						"need": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
						"condition": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
						"action": [
							{
								"type": "loadEquip",
								"id": "mahan"
							}
						]
					},
					{
						"text": "装备 本森级驱逐舰",
						"icon": "benson",
						"need": "core.hasItem('benson')&&!core.hasEquip('benson')",
						"condition": "core.hasItem('benson')&&!core.hasEquip('benson')",
						"action": [
							{
								"type": "loadEquip",
								"id": "benson"
							}
						]
					},
					{
						"text": "装备 J级驱逐舰",
						"icon": "classj",
						"need": "core.hasItem('classj')&&!core.hasEquip('classj')",
						"condition": "core.hasItem('classj')&&!core.hasEquip('classj')",
						"action": [
							{
								"type": "loadEquip",
								"id": "classj"
							}
						]
					},
					{
						"text": "装备 弗莱彻级驱逐舰",
						"icon": "flecher",
						"need": "core.hasItem('flecher')&&!core.hasEquip('flecher')",
						"condition": "core.hasItem('flecher')&&!core.hasEquip('flecher')",
						"action": [
							{
								"type": "loadEquip",
								"id": "flecher"
							}
						]
					},
					{
						"text": "装备 爱丁堡号轻巡洋舰",
						"icon": "edinburgh",
						"need": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
						"condition": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
						"action": [
							{
								"type": "loadEquip",
								"id": "edinburgh"
							}
						]
					},
					{
						"text": "装备 谢菲尔德号轻巡洋舰",
						"icon": "sheffield",
						"need": "core.hasItem('sheffield')&&!core.hasEquip('sheffield')",
						"condition": "core.hasItem('sheffield')&&!core.hasEquip('sheffield')",
						"action": [
							{
								"type": "loadEquip",
								"id": "sheffield"
							}
						]
					},
					{
						"text": "装备 克利夫兰号轻巡洋舰",
						"icon": "cleveland",
						"need": "core.hasItem('cleveland')&&!core.hasEquip('cleveland')",
						"condition": "core.hasItem('cleveland')&&!core.hasEquip('cleveland')",
						"action": [
							{
								"type": "loadEquip",
								"id": "cleveland"
							}
						]
					},
					{
						"text": "装备 诺福克号重巡洋舰",
						"icon": "norfolk",
						"need": "core.hasItem('norfolk')&&!core.hasEquip('norfolk')",
						"condition": "core.hasItem('norfolk')&&!core.hasEquip('norfolk')",
						"action": [
							{
								"type": "loadEquip",
								"id": "norfolk"
							}
						]
					},
					{
						"text": "装备 巴尔的摩级重巡洋舰",
						"icon": "baltimore",
						"need": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
						"condition": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
						"action": [
							{
								"type": "loadEquip",
								"id": "baltimore"
							}
						]
					},
					{
						"text": "装备 厌战号战列舰",
						"icon": "warspite",
						"need": "core.hasItem('warspite')&&!core.hasEquip('warspite')",
						"condition": "core.hasItem('warspite')&&!core.hasEquip('warspite')",
						"action": [
							{
								"type": "loadEquip",
								"id": "warspite"
							}
						]
					},
					{
						"text": "装备 乔治五世号战列舰",
						"icon": "kinggeorge5",
						"need": "core.hasItem('kinggeorge5')&&!core.hasEquip('kinggeorge5')",
						"condition": "core.hasItem('kinggeorge5')&&!core.hasEquip('kinggeorge5')",
						"action": [
							{
								"type": "loadEquip",
								"id": "kinggeorge5"
							}
						]
					},
					{
						"text": "装备 北卡罗莱纳号战列舰",
						"icon": "northcarolina",
						"need": "core.hasItem('northcarolina')&&!core.hasEquip('northcarolina')",
						"condition": "core.hasItem('northcarolina')&&!core.hasEquip('northcarolina')",
						"action": [
							{
								"type": "loadEquip",
								"id": "northcarolina"
							}
						]
					},
					{
						"text": "装备 衣阿华级战列舰",
						"icon": "iowa",
						"need": "core.hasItem('iowa')&&!core.hasEquip('iowa')",
						"condition": "core.hasItem('iowa')&&!core.hasEquip('iowa')",
						"action": [
							{
								"type": "loadEquip",
								"id": "iowa"
							}
						]
					},
					{
						"text": "装备 鹰号航空母舰",
						"icon": "eagle",
						"need": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
						"condition": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
						"action": [
							{
								"type": "loadEquip",
								"id": "eagle"
							}
						]
					},
					{
						"text": "装备 突击者号航空母舰",
						"icon": "raider",
						"need": "core.hasItem('raider')&&!core.hasEquip('raider')",
						"condition": "core.hasItem('raider')&&!core.hasEquip('raider')",
						"action": [
							{
								"type": "loadEquip",
								"id": "raider"
							}
						]
					},
					{
						"text": "装备 光辉号航空母舰",
						"icon": "illustrious",
						"need": "core.hasItem('illustrious')&&!core.hasEquip('illustrious')",
						"condition": "core.hasItem('illustrious')&&!core.hasEquip('illustrious')",
						"action": [
							{
								"type": "loadEquip",
								"id": "illustrious"
							}
						]
					},
					{
						"text": "装备 埃塞克斯级航空母舰",
						"icon": "essex",
						"need": "core.hasItem('essex')&&!core.hasEquip('essex')",
						"condition": "core.hasItem('essex')&&!core.hasEquip('essex')",
						"action": [
							{
								"type": "loadEquip",
								"id": "essex"
							}
						]
					},
					{
						"text": "装备 企业号航空母舰",
						"icon": "enterprise",
						"need": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
						"condition": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
						"action": [
							{
								"type": "loadEquip",
								"id": "enterprise"
							}
						]
					},
					{
						"text": "卸下当前驱逐舰",
						"action": [
							{
								"type": "unloadEquip",
								"pos": 1
							}
						]
					},
					{
						"text": "卸下当前巡洋舰",
						"action": [
							{
								"type": "unloadEquip",
								"pos": 2
							}
						]
					},
					{
						"text": "卸下当前主力舰",
						"action": [
							{
								"type": "unloadEquip",
								"pos": 3
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
		"选择飞机": [
			{
				"type": "choices",
				"text": "\t[机场后勤,N516]请选择出战空军",
				"choices": [
					{
						"text": "装备 斗士MK2型",
						"icon": "wrestler",
						"need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
						"condition": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
						"action": [
							{
								"type": "loadEquip",
								"id": "wrestler"
							}
						]
					},
					{
						"text": "装备 P40B战斧",
						"icon": "p40c",
						"need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
						"condition": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
						"action": [
							{
								"type": "loadEquip",
								"id": "p40c"
							}
						]
					},
					{
						"text": "装备 飓风MK1型",
						"icon": "hurricanemk1",
						"need": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
						"condition": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
						"action": [
							{
								"type": "loadEquip",
								"id": "hurricanemk1"
							}
						]
					},
					{
						"text": "装备 喷火MK1型",
						"icon": "spitfiremk1",
						"need": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
						"condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
						"action": [
							{
								"type": "loadEquip",
								"id": "spitfiremk1"
							}
						]
					},
					{
						"text": "装备 飓风MK2型",
						"icon": "hurricanemk2",
						"need": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
						"condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
						"action": [
							{
								"type": "loadEquip",
								"id": "hurricanemk2"
							}
						]
					},
					{
						"text": "装备 F4F野猫战斗机",
						"icon": "f4f3",
						"need": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
						"condition": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
						"action": [
							{
								"type": "loadEquip",
								"id": "f4f3"
							}
						]
					},
					{
						"text": "装备 喷火MK5战斗机",
						"icon": "spitfiremk5",
						"need": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
						"condition": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
						"action": [
							{
								"type": "loadEquip",
								"id": "spitfiremk5"
							}
						]
					},
					{
						"text": "装备 喷火MK9战斗机",
						"icon": "spitfiremk9",
						"need": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
						"condition": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
						"action": [
							{
								"type": "loadEquip",
								"id": "spitfiremk9"
							}
						]
					},
					{
						"text": "装备 P47B雷电战斗机",
						"icon": "p47b",
						"need": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
						"condition": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
						"action": [
							{
								"type": "loadEquip",
								"id": "p47b"
							}
						]
					},
					{
						"text": "装备 F6F地狱猫战斗机",
						"icon": "f6f5",
						"need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
						"condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
						"action": [
							{
								"type": "loadEquip",
								"id": "f6f5"
							}
						]
					},
					{
						"text": "装备 喷火MK16战斗机",
						"icon": "spitfiremk16",
						"need": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
						"condition": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
						"action": [
							{
								"type": "loadEquip",
								"id": "spitfiremk16"
							}
						]
					},
					{
						"text": "装备 F4U海盗战斗机",
						"icon": "f4u",
						"need": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
						"condition": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
						"action": [
							{
								"type": "loadEquip",
								"id": "f4u"
							}
						]
					},
					{
						"text": "装备 P51野马战斗机",
						"icon": "p51d",
						"need": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
						"condition": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
						"action": [
							{
								"type": "loadEquip",
								"id": "p51d"
							}
						]
					},
					{
						"text": "装备 贼鸥式轰炸机",
						"icon": "skua",
						"need": "core.hasItem('skua')&&!core.hasEquip('skua')",
						"condition": "core.hasItem('skua')&&!core.hasEquip('skua')",
						"action": [
							{
								"type": "loadEquip",
								"id": "skua"
							}
						]
					},
					{
						"text": "装备 SBD无畏式轰炸机",
						"icon": "sbd3",
						"need": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
						"condition": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
						"action": [
							{
								"type": "loadEquip",
								"id": "sbd3"
							}
						]
					},
					{
						"text": "装备 英俊战士重型战斗机",
						"icon": "beautifighter",
						"need": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
						"condition": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
						"action": [
							{
								"type": "loadEquip",
								"id": "beautifighter"
							}
						]
					},
					{
						"text": "装备 P38闪电重型战斗机",
						"icon": "p38",
						"need": "core.hasItem('p38')&&!core.hasEquip('p38')",
						"condition": "core.hasItem('p38')&&!core.hasEquip('p38')",
						"action": [
							{
								"type": "loadEquip",
								"id": "p38"
							}
						]
					},
					{
						"text": "装备 台风攻击机",
						"icon": "typhoon",
						"need": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
						"condition": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
						"action": [
							{
								"type": "loadEquip",
								"id": "typhoon"
							}
						]
					},
					{
						"text": "装备 蚊式战斗机",
						"icon": "mosquito",
						"need": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
						"condition": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
						"action": [
							{
								"type": "loadEquip",
								"id": "mosquito"
							}
						]
					},
					{
						"text": "装备 P47D雷电攻击机",
						"icon": "p47d",
						"need": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
						"condition": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
						"action": [
							{
								"type": "loadEquip",
								"id": "p47d"
							}
						]
					},
					{
						"text": "装备 SB2C地狱俯冲者",
						"icon": "sb2c",
						"need": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
						"condition": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
						"action": [
							{
								"type": "loadEquip",
								"id": "sb2c"
							}
						]
					},
					{
						"text": "装备 P61黑寡妇",
						"icon": "p61",
						"need": "core.hasItem('p61')&&!core.hasEquip('p61')",
						"condition": "core.hasItem('p61')&&!core.hasEquip('p61')",
						"action": [
							{
								"type": "loadEquip",
								"id": "p61"
							}
						]
					},
					{
						"text": "装备 剑鱼式鱼雷机",
						"icon": "swordfish",
						"need": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
						"condition": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
						"action": [
							{
								"type": "loadEquip",
								"id": "swordfish"
							}
						]
					},
					{
						"text": "装备 TBD蹂躏者鱼雷机",
						"icon": "tbd",
						"need": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
						"condition": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
						"action": [
							{
								"type": "loadEquip",
								"id": "tbd"
							}
						]
					},
					{
						"text": "装备 布伦海姆轰炸机",
						"icon": "blenheim",
						"need": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
						"condition": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
						"action": [
							{
								"type": "loadEquip",
								"id": "blenheim"
							}
						]
					},
					{
						"text": "装备 B25米切尔轰炸机",
						"icon": "b25",
						"need": "core.hasItem('b25')&&!core.hasEquip('b25')",
						"condition": "core.hasItem('b25')&&!core.hasEquip('b25')",
						"action": [
							{
								"type": "loadEquip",
								"id": "b25"
							}
						]
					},
					{
						"text": "装备 梭鱼式鱼雷机",
						"icon": "barracuda",
						"need": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
						"condition": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
						"action": [
							{
								"type": "loadEquip",
								"id": "barracuda"
							}
						]
					},
					{
						"text": "装备 TBF复仇者",
						"icon": "tbf",
						"need": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
						"condition": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
						"action": [
							{
								"type": "loadEquip",
								"id": "tbf"
							}
						]
					},
					{
						"text": "装备 B17空中堡垒",
						"icon": "b17",
						"need": "core.hasItem('b17')&&!core.hasEquip('b17')",
						"condition": "core.hasItem('b17')&&!core.hasEquip('b17')",
						"action": [
							{
								"type": "loadEquip",
								"id": "b17"
							}
						]
					},
					{
						"text": "装备 B24解放者",
						"icon": "b24",
						"need": "core.hasItem('b24')&&!core.hasEquip('b24')",
						"condition": "core.hasItem('b24')&&!core.hasEquip('b24')",
						"action": [
							{
								"type": "loadEquip",
								"id": "b24"
							}
						]
					},
					{
						"text": "装备 兰开斯特轰炸机",
						"icon": "lancaster",
						"need": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
						"condition": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
						"action": [
							{
								"type": "loadEquip",
								"id": "lancaster"
							}
						]
					},
					{
						"text": "装备 B17G空中堡垒",
						"icon": "b17g",
						"need": "core.hasItem('b17g')&&!core.hasEquip('b17g')",
						"condition": "core.hasItem('b17g')&&!core.hasEquip('b17g')",
						"action": [
							{
								"type": "loadEquip",
								"id": "b17g"
							}
						]
					},
					{
						"text": "装备 B29超级堡垒",
						"icon": "b29",
						"need": "core.hasItem('b29')&&!core.hasEquip('b29')",
						"condition": "core.hasItem('b29')&&!core.hasEquip('b29')",
						"action": [
							{
								"type": "loadEquip",
								"id": "b29"
							}
						]
					},
					{
						"text": "装备 巴尔的摩级重巡洋舰",
						"icon": "baltimore",
						"need": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
						"condition": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
						"action": [
							{
								"type": "loadEquip",
								"id": "baltimore"
							}
						]
					},
					{
						"text": "装备 埃塞克斯级航空母舰",
						"icon": "essex",
						"need": "core.hasItem('essex')&&!core.hasEquip('essex')",
						"condition": "core.hasItem('essex')&&!core.hasEquip('essex')",
						"action": [
							{
								"type": "loadEquip",
								"id": "essex"
							}
						]
					},
					{
						"text": "装备 企业号航空母舰",
						"icon": "enterprise",
						"need": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
						"condition": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
						"action": [
							{
								"type": "loadEquip",
								"id": "enterprise"
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
						"text": "卸下当前攻击机",
						"action": [
							{
								"type": "unloadEquip",
								"pos": 5
							}
						]
					},
					{
						"text": "卸下当前轰炸机",
						"action": [
							{
								"type": "unloadEquip",
								"pos": 6
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
		"退役武器": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
						"choices": [
							{
								"text": "退役 雷诺FT17（60）",
								"icon": "ft17",
								"need": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
								"condition": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:ft17",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "60"
									}
								]
							},
							{
								"text": "退役 哈奇开斯H35（120）",
								"icon": "h35",
								"need": "core.hasItem('h35')&&!core.hasEquip('h35')",
								"condition": "core.hasItem('h35')&&!core.hasEquip('h35')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:h35",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "120"
									}
								]
							},
							{
								"text": "退役 十字军巡洋坦克（720）",
								"icon": "crusades",
								"need": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
								"condition": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:crusades",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "720"
									}
								]
							},
							{
								"text": "退役 瓦伦丁步兵坦克（840）",
								"icon": "valentine",
								"need": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
								"condition": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:valentine",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "840"
									}
								]
							},
							{
								"text": "退役 玛蒂尔达步兵坦克（1080）",
								"icon": "matilda",
								"need": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
								"condition": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:matilda",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "1080"
									}
								]
							},
							{
								"text": "退役 M3格兰特中型坦克（1320）",
								"icon": "m3grant",
								"need": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
								"condition": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:m3grant",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "1320"
									}
								]
							},
							{
								"text": "退役 M4谢尔曼（1000）",
								"icon": "m4",
								"need": "core.hasItem('m4')&&!core.hasEquip('m4')",
								"condition": "core.hasItem('m4')&&!core.hasEquip('m4')",
								"action": [
									{
										"type": "confirm",
										"text": "该装备可改造，确定直接出售？",
										"yes": [
											{
												"type": "playSound",
												"name": "shop.mp3"
											},
											{
												"type": "setValue",
												"name": "item:m4",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "1000"
											}
										],
										"no": []
									}
								]
							},
							{
								"text": "退役 M4A2谢尔曼（1400）",
								"icon": "m4a2",
								"need": "core.hasItem('m4a2')&&!core.hasEquip('m4a2')",
								"condition": "core.hasItem('m4a2')&&!core.hasEquip('m4a2')",
								"action": [
									{
										"type": "confirm",
										"text": "该装备可改造，确定直接出售？",
										"yes": [
											{
												"type": "playSound",
												"name": "shop.mp3"
											},
											{
												"type": "setValue",
												"name": "item:m4a2",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "1400"
											}
										],
										"no": []
									}
								]
							},
							{
								"text": "退役 M4A1(76W)（3400）",
								"icon": "m4a3",
								"need": "core.hasItem('m4a3')&&!core.hasEquip('m4a3')",
								"condition": "core.hasItem('m4a3')&&!core.hasEquip('m4a3')",
								"action": [
									{
										"type": "confirm",
										"text": "该装备可改造，确定直接出售？",
										"yes": [
											{
												"type": "playSound",
												"name": "shop.mp3"
											},
											{
												"type": "setValue",
												"name": "item:m4a3",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "3400"
											}
										],
										"no": []
									}
								]
							},
							{
								"text": "退役 丘吉尔MK3（1800）",
								"icon": "churchillmk3",
								"need": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
								"condition": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:churchillmk3",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "1800"
									}
								]
							},
							{
								"text": "退役 M4A3E2巨无霸（9000）",
								"icon": "m4a3e2",
								"need": "core.hasItem('m4a3e2')&&!core.hasEquip('m4a3e2')",
								"condition": "core.hasItem('m4a3e2')&&!core.hasEquip('m4a3e2')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:m4a3e2",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "9000"
									}
								]
							},
							{
								"text": "退役 谢尔曼“萤火虫”（13500）",
								"icon": "firefly",
								"need": "core.hasItem('firefly')&&!core.hasEquip('firefly')",
								"condition": "core.hasItem('firefly')&&!core.hasEquip('firefly')",
								"action": [
									{
										"type": "playSound",
										"name": "shop.mp3"
									},
									{
										"type": "setValue",
										"name": "item:firefly",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "13500"
									}
								]
							},
							{
								"text": "下一页（海军类）",
								"action": [
									{
										"type": "choices",
										"text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
										"choices": [
											{
												"text": "退役 E级驱逐舰（300）",
												"icon": "classe",
												"need": "core.hasItem('classe')&&!core.hasEquip('classe')",
												"condition": "core.hasItem('classe')&&!core.hasEquip('classe')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:classe",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "300"
													}
												]
											},
											{
												"text": "退役 V级驱逐舰（360）",
												"icon": "classv",
												"need": "core.hasItem('classv')&&!core.hasEquip('classv')",
												"condition": "core.hasItem('classv')&&!core.hasEquip('classv')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:classv",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "360"
													}
												]
											},
											{
												"text": "退役 马汉级驱逐舰（312）",
												"icon": "mahan",
												"need": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
												"condition": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:mahan",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "312"
													}
												]
											},
											{
												"text": "退役 本森级驱逐舰（450）",
												"icon": "benson",
												"need": "core.hasItem('benson')&&!core.hasEquip('benson')",
												"condition": "core.hasItem('benson')&&!core.hasEquip('benson')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:benson",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "450"
													}
												]
											},
											{
												"text": "退役 J级驱逐舰（2100）",
												"icon": "classj",
												"need": "core.hasItem('classj')&&!core.hasEquip('classj')",
												"condition": "core.hasItem('classj')&&!core.hasEquip('classj')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:classj",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "2100"
													}
												]
											},
											{
												"text": "退役 弗莱彻级驱逐舰（9000）",
												"icon": "flecher",
												"need": "core.hasItem('flecher')&&!core.hasEquip('flecher')",
												"condition": "core.hasItem('flecher')&&!core.hasEquip('flecher')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:flecher",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "9000"
													}
												]
											},
											{
												"text": "退役 爱丁堡号轻巡洋舰（720）",
												"icon": "edinburgh",
												"need": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
												"condition": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:edinburgh",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "720"
													}
												]
											},
											{
												"text": "退役 诺福克号重巡洋舰（900）",
												"icon": "norfolk",
												"need": "core.hasItem('norfolk')&&!core.hasEquip('norfolk')",
												"condition": "core.hasItem('norfolk')&&!core.hasEquip('norfolk')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:norfolk",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "900"
													}
												]
											},
											{
												"text": "退役 谢菲尔德号轻巡洋舰（1500）",
												"icon": "sheffield",
												"need": "core.hasItem('sheffield')&&!core.hasEquip('sheffield')",
												"condition": "core.hasItem('sheffield')&&!core.hasEquip('sheffield')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:sheffield",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "1500"
													}
												]
											},
											{
												"text": "退役 克利夫兰号轻巡洋舰（2400）",
												"icon": "cleveland",
												"need": "core.hasItem('cleveland')&&!core.hasEquip('cleveland')",
												"condition": "core.hasItem('cleveland')&&!core.hasEquip('cleveland')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:cleveland",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "2400"
													}
												]
											},
											{
												"text": "退役 巴尔的摩号轻巡洋舰（12000）",
												"icon": "baltimore",
												"need": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
												"condition": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:baltimore",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "12000"
													}
												]
											},
											{
												"text": "退役 厌战号战列舰（1500）",
												"icon": "warspite",
												"need": "core.hasItem('warspite')&&!core.hasEquip('warspite')",
												"condition": "core.hasItem('warspite')&&!core.hasEquip('warspite')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:warspite",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "1500"
													}
												]
											},
											{
												"text": "退役 乔治五世级战列舰（4200）",
												"icon": "kinggeorge5",
												"need": "core.hasItem('kinggeorge5')&&!core.hasEquip('kinggeorge5')",
												"condition": "core.hasItem('kinggeorge5')&&!core.hasEquip('kinggeorge5')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:kinggeorge5",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "4200"
													}
												]
											},
											{
												"text": "退役 北卡罗莱纳号战列舰（12000）",
												"icon": "northcarolina",
												"need": "core.hasItem('northcarolina')&&!core.hasEquip('northcarolina')",
												"condition": "core.hasItem('northcarolina')&&!core.hasEquip('northcarolina')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:northcarolina",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "12000"
													}
												]
											},
											{
												"text": "退役 衣阿华级战列舰（18000）",
												"icon": "iowa",
												"need": "core.hasItem('iowa')&&!core.hasEquip('iowa')",
												"condition": "core.hasItem('iowa')&&!core.hasEquip('iowa')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:iowa",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "18000"
													}
												]
											},
											{
												"text": "退役 鹰号航空母舰（1200）",
												"icon": "eagle",
												"need": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
												"condition": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:eagle",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "1200"
													}
												]
											},
											{
												"text": "退役 突击者号航空母舰（2400）",
												"icon": "raider",
												"need": "core.hasItem('raider')&&!core.hasEquip('raider')",
												"condition": "core.hasItem('raider')&&!core.hasEquip('raider')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:raider",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "2400"
													}
												]
											},
											{
												"text": "退役 光辉号航空母舰（4800）",
												"icon": "illustrious",
												"need": "core.hasItem('illustrious')&&!core.hasEquip('illustrious')",
												"condition": "core.hasItem('illustrious')&&!core.hasEquip('illustrious')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:illustrious",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "4800"
													}
												]
											},
											{
												"text": "退役 埃塞克斯级航空母舰（21000）",
												"icon": "essex",
												"need": "core.hasItem('essex')&&!core.hasEquip('essex')",
												"condition": "core.hasItem('essex')&&!core.hasEquip('essex')",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3"
													},
													{
														"type": "setValue",
														"name": "item:essex",
														"operator": "-=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "+=",
														"value": "21000"
													}
												]
											},
											{
												"text": "下一页（空军类）",
												"action": [
													{
														"type": "choices",
														"text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
														"choices": [
															{
																"text": "退役 斗士MK2（45）",
																"icon": "wrestler",
																"need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
																"condition": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:wrestler",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "45"
																	}
																]
															},
															{
																"text": "退役 喷火MK1型（280）",
																"icon": "spitfiremk1",
																"need": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
																"condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
																"action": [
																	{
																		"type": "confirm",
																		"text": "该装备可改造，确定直接出售？",
																		"yes": [
																			{
																				"type": "playSound",
																				"name": "shop.mp3"
																			},
																			{
																				"type": "setValue",
																				"name": "item:spitfiremk1",
																				"operator": "-=",
																				"value": "1"
																			},
																			{
																				"type": "setValue",
																				"name": "status:money",
																				"operator": "+=",
																				"value": "280"
																			}
																		],
																		"no": []
																	}
																]
															},
															{
																"text": "退役 飓风MK1型（160）",
																"icon": "hurricanemk1",
																"need": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
																"condition": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
																"action": [
																	{
																		"type": "confirm",
																		"text": "该装备可改造，确定直接出售？",
																		"yes": [
																			{
																				"type": "playSound",
																				"name": "shop.mp3"
																			},
																			{
																				"type": "setValue",
																				"name": "item:hurricanemk1",
																				"operator": "-=",
																				"value": "1"
																			},
																			{
																				"type": "setValue",
																				"name": "status:money",
																				"operator": "+=",
																				"value": "160"
																			}
																		],
																		"no": []
																	}
																]
															},
															{
																"text": "退役 P40B战斧（210）",
																"icon": "p40c",
																"need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
																"condition": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:p40c",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "210"
																	}
																]
															},
															{
																"text": "退役 飓风MK2型（720）",
																"icon": "hurricanemk2",
																"need": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
																"condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:hurricanemk2",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "720"
																	}
																]
															},
															{
																"text": "退役 F4F野猫战斗机（720）",
																"icon": "f4f3",
																"need": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
																"condition": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:f4f3",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "720"
																	}
																]
															},
															{
																"text": "退役 喷火MK5（1000）",
																"icon": "spitfiremk5",
																"need": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
																"condition": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
																"action": [
																	{
																		"type": "confirm",
																		"text": "该装备可改造，确定直接出售？",
																		"yes": [
																			{
																				"type": "playSound",
																				"name": "shop.mp3"
																			},
																			{
																				"type": "setValue",
																				"name": "item:spitfiremk5",
																				"operator": "-=",
																				"value": "1"
																			},
																			{
																				"type": "setValue",
																				"name": "status:money",
																				"operator": "+=",
																				"value": "1000"
																			}
																		],
																		"no": []
																	}
																]
															},
															{
																"text": "退役 P47B雷电（1000）",
																"icon": "p47b",
																"need": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
																"condition": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
																"action": [
																	{
																		"type": "confirm",
																		"text": "该装备可改造，确定直接出售？",
																		"yes": [
																			{
																				"type": "playSound",
																				"name": "shop.mp3"
																			},
																			{
																				"type": "setValue",
																				"name": "item:p47b",
																				"operator": "-=",
																				"value": "1"
																			},
																			{
																				"type": "setValue",
																				"name": "status:money",
																				"operator": "+=",
																				"value": "1000"
																			}
																		],
																		"no": []
																	}
																]
															},
															{
																"text": "退役 喷火MK9（1400）",
																"icon": "spitfiremk9",
																"need": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
																"condition": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
																"action": [
																	{
																		"type": "confirm",
																		"text": "该装备可改造，确定直接出售？",
																		"yes": [
																			{
																				"type": "playSound",
																				"name": "shop.mp3"
																			},
																			{
																				"type": "setValue",
																				"name": "item:spitfiremk9",
																				"operator": "-=",
																				"value": "1"
																			},
																			{
																				"type": "setValue",
																				"name": "status:money",
																				"operator": "+=",
																				"value": "1400"
																			}
																		],
																		"no": []
																	}
																]
															},
															{
																"text": "退役 F6F地狱猫（4800）",
																"icon": "f6f5",
																"need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
																"condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:f6f5",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "4800"
																	}
																]
															},
															{
																"text": "退役 喷火MK16（6000）",
																"icon": "spitfiremk16",
																"need": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
																"condition": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:spitfiremk16",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "6000"
																	}
																]
															},
															{
																"text": "退役 F4U海盗（7200）",
																"icon": "f4u",
																"need": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
																"condition": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:f4u",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "7200"
																	}
																]
															},
															{
																"text": "退役 P51D野马（9000）",
																"icon": "p51d",
																"need": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
																"condition": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:p51d",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "9000"
																	}
																]
															},
															{
																"text": "退役 贼鸥式轰炸机（180）",
																"icon": "skua",
																"need": "core.hasItem('skua')&&!core.hasEquip('skua')",
																"condition": "core.hasItem('skua')&&!core.hasEquip('skua')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:skua",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "180"
																	}
																]
															},
															{
																"text": "退役 SBD无畏式轰炸机（600）",
																"icon": "sbd3",
																"need": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
																"condition": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:sbd3",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "600"
																	}
																]
															},
															{
																"text": "退役 英俊战士重型战斗机（1800）",
																"icon": "beautifighter",
																"need": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
																"condition": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:beautifighter",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "1800"
																	}
																]
															},
															{
																"text": "退役 P38闪电战斗机（1920）",
																"icon": "p38",
																"need": "core.hasItem('p38')&&!core.hasEquip('p38')",
																"condition": "core.hasItem('p38')&&!core.hasEquip('p38')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:p38",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "1920"
																	}
																]
															},
															{
																"text": "退役 台风战斗机（1500）",
																"icon": "typhoon",
																"need": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
																"condition": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:typhoon",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "1500"
																	}
																]
															},
															{
																"text": "退役 蚊式战斗机（5400）",
																"icon": "mosquito",
																"need": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
																"condition": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:mosquito",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "3000"
																	}
																]
															},
															{
																"text": "退役 P47D雷电（7200）",
																"icon": "p47d",
																"need": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
																"condition": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:p47d",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "7200"
																	}
																]
															},
															{
																"text": "退役 SB2C地狱俯冲者（7200）",
																"icon": "sb2c",
																"need": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
																"condition": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:sb2c",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "7200"
																	}
																]
															},
															{
																"text": "退役 P61黑寡妇（10800）",
																"icon": "p61",
																"need": "core.hasItem('p61')&&!core.hasEquip('p61')",
																"condition": "core.hasItem('p61')&&!core.hasEquip('p61')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:p61",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "10800"
																	}
																]
															},
															{
																"text": "退役 布伦海姆轰炸机（280）",
																"icon": "blenheim",
																"need": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
																"condition": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:blenheim",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "280"
																	}
																]
															},
															{
																"text": "退役 剑鱼式鱼雷机（150）",
																"icon": "swordfish",
																"need": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
																"condition": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:swordfish",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "150"
																	}
																]
															},
															{
																"text": "退役 TBD蹂躏者鱼雷机（480）",
																"icon": "tbd",
																"need": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
																"condition": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:tbd",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "480"
																	}
																]
															},
															{
																"text": "退役 梭鱼式鱼雷机（1800）",
																"icon": "barracuda",
																"need": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
																"condition": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:barracuda",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "1800"
																	}
																]
															},
															{
																"text": "退役 TBF复仇者鱼雷机（6000）",
																"icon": "tbf",
																"need": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
																"condition": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:tbf",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "3600"
																	}
																]
															},
															{
																"text": "退役 B25米切尔轰炸机（1500）",
																"icon": "b25",
																"need": "core.hasItem('b25')&&!core.hasEquip('b25')",
																"condition": "core.hasItem('b25')&&!core.hasEquip('b25')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:b25",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "1500"
																	}
																]
															},
															{
																"text": "退役 B17空中堡垒轰炸机（2600）",
																"icon": "b17",
																"need": "core.hasItem('b17')&&!core.hasEquip('b17')",
																"condition": "core.hasItem('b17')&&!core.hasEquip('b17')",
																"action": [
																	{
																		"type": "confirm",
																		"text": "该装备可改造，确定直接出售？",
																		"yes": [
																			{
																				"type": "playSound",
																				"name": "shop.mp3"
																			},
																			{
																				"type": "setValue",
																				"name": "item:b17",
																				"operator": "-=",
																				"value": "1"
																			},
																			{
																				"type": "setValue",
																				"name": "status:money",
																				"operator": "+=",
																				"value": "2600"
																			}
																		],
																		"no": []
																	}
																]
															},
															{
																"text": "退役 B24解放者轰炸机（3600）",
																"icon": "b24",
																"need": "core.hasItem('b24')&&!core.hasEquip('b24')",
																"condition": "core.hasItem('b24')&&!core.hasEquip('b24')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:b24",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "4200"
																	}
																]
															},
															{
																"text": "退役 兰开斯特轰炸机（4200）",
																"icon": "lancaster",
																"need": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
																"condition": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:lancaster",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "4200"
																	}
																]
															},
															{
																"text": "退役 B17G空中堡垒轰炸机（4800）",
																"icon": "b17g",
																"need": "core.hasItem('b17g')&&!core.hasEquip('b17g')",
																"condition": "core.hasItem('b17g')&&!core.hasEquip('b17g')",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3"
																	},
																	{
																		"type": "setValue",
																		"name": "item:b17g",
																		"operator": "-=",
																		"value": "1"
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "+=",
																		"value": "4800"
																	}
																]
															},
															{
																"text": "返回",
																"action": [
																	{
																		"type": "exit"
																	}
																]
															}
														]
													}
												]
											},
											{
												"text": "返回",
												"action": [
													{
														"type": "exit"
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "返回",
								"action": [
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"海上霸主动画": [
			{
				"type": "if",
				"condition": "(flag:anime===true)",
				"true": [
					{
						"type": "playSound",
						"name": "fighter1.mp3"
					},
					{
						"type": "playSound",
						"name": "cvstrike.mp3"
					},
					{
						"type": "showImage",
						"code": 1,
						"image": "cvstrike.png",
						"loc": [
							30,
							100
						],
						"opacity": 1,
						"time": 500
					},
					{
						"type": "sleep",
						"time": 1000,
						"noSkip": true
					},
					{
						"type": "hideImage",
						"code": 1,
						"time": 500
					},
					{
						"type": "sleep",
						"time": 3000,
						"noSkip": true
					},
					{
						"type": "showImage",
						"code": 1,
						"image": "cvairgroup.png",
						"loc": [
							0,
							-1920
						],
						"opacity": 1,
						"time": 0
					},
					{
						"type": "moveImage",
						"code": 1,
						"to": [
							0,
							480
						],
						"time": 8000,
						"async": true
					},
					{
						"type": "sleep",
						"time": 1000
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							2,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							9,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							2
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							5,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							9
						]
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							4,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							9,
							2
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							3,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							7,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							0
						]
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							0,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							8,
							14
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							1
						],
						"async": true
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
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							8,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							4,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							1,
							0
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							1,
							12
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							5,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							2,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							1,
							3
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							13,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							9,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							6,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							0,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							8,
							1
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							4,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							3,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							8,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							4,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							10,
							3
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							12,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							14,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							1,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							4,
							5
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							5,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							1,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							5,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							7,
							4
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							13,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							0,
							0
						],
						"async": true
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
						"type": "animate",
						"name": "zone",
						"loc": [
							2,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							5,
							4
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							5,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							0,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							3,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							2,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							5
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							12,
							2
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							11,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							4,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							3,
							2
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							6,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							9,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							7,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							3,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							7,
							6
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							12,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							3,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							9,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							7,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							14
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							7,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							13,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							14,
							13
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							14,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							1,
							3
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							11,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							6,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							4,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							8,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							1
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							8,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							14,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							1,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							13,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							4,
							11
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							10,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							2,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							13,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							10,
							13
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							13
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							14,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							8,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							5,
							9
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							10,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							11,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							7,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							8,
							11
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							4,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							10,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							9,
							4
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							8,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							7,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							3,
							13
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							3,
							1
						],
						"async": true
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
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							10,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							7,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							3,
							7
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							7,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							4,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							0,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							13,
							2
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							11,
							2
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							1,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							4,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							4,
							2
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							13,
							8
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 150
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							7,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "xinxinwater",
						"loc": [
							11,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							9,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							7,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							4,
							13
						],
						"async": true
					},
					{
						"type": "waitAsync"
					},
					{
						"type": "hideImage",
						"code": 1,
						"time": 0
					}
				]
			}
		],
		"红色尾翼动画": [
			{
				"type": "if",
				"condition": "(flag:anime===true)",
				"true": [
					{
						"type": "showImage",
						"code": 1,
						"image": "aircraft8.png",
						"loc": [
							0,
							480
						],
						"opacity": 1,
						"time": 0
					},
					{
						"type": "showImage",
						"code": 2,
						"image": "aircraft8.png",
						"loc": [
							110,
							480
						],
						"opacity": 1,
						"time": 0
					},
					{
						"type": "showImage",
						"code": 3,
						"image": "aircraft8.png",
						"loc": [
							280,
							480
						],
						"opacity": 1,
						"time": 0
					},
					{
						"type": "playSound",
						"name": "fighter.mp3"
					},
					{
						"type": "moveImage",
						"code": 1,
						"to": [
							0,
							-195
						],
						"time": 500,
						"async": true
					},
					{
						"type": "sleep",
						"time": 200
					},
					{
						"type": "playSound",
						"name": "fighter.mp3"
					},
					{
						"type": "moveImage",
						"code": 3,
						"to": [
							280,
							-195
						],
						"time": 500,
						"async": true
					},
					{
						"type": "sleep",
						"time": 200
					},
					{
						"type": "playSound",
						"name": "fighter.mp3"
					},
					{
						"type": "moveImage",
						"code": 2,
						"to": [
							110,
							-195
						],
						"time": 500,
						"async": true
					},
					{
						"type": "waitAsync"
					},
					{
						"type": "hideImage",
						"code": 1,
						"time": 0
					},
					{
						"type": "hideImage",
						"code": 2,
						"time": 0
					},
					{
						"type": "hideImage",
						"code": 3,
						"time": 0
					}
				]
			}
		],
		"火箭炮动画": [
			{
				"type": "if",
				"condition": "(flag:anime===true)",
				"true": [
					{
						"type": "showImage",
						"code": 1,
						"image": "skill20.jpg",
						"loc": [
							-300,
							50
						],
						"opacity": 1,
						"time": 0
					},
					{
						"type": "moveImage",
						"code": 1,
						"to": [
							90,
							50
						],
						"time": 500,
						"async": true
					},
					{
						"type": "playSound",
						"name": "katyusha.mp3"
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "playSound",
						"name": "katyusha.mp3"
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "playSound",
						"name": "katyusha.mp3"
					},
					{
						"type": "waitAsync"
					},
					{
						"type": "hideImage",
						"code": 1,
						"time": 500
					},
					{
						"type": "sleep",
						"time": 1000
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x",
							"core.status.hero.loc.y - 2"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x - 1",
							"core.status.hero.loc.y"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x + 1",
							"core.status.hero.loc.y - 2"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x + 2",
							"core.status.hero.loc.y + 2"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x - 2",
							"core.status.hero.loc.y - 1"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x",
							"core.status.hero.loc.y + 1"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x - 1",
							"core.status.hero.loc.y - 2"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x + 1",
							"core.status.hero.loc.y"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x - 2",
							"core.status.hero.loc.y + 1"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x",
							"core.status.hero.loc.y - 1"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x + 2",
							"core.status.hero.loc.y - 2"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x - 1",
							"core.status.hero.loc.y + 2"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x + 1",
							"core.status.hero.loc.y - 1"
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100
					},
					{
						"type": "animate",
						"name": "explore3",
						"loc": [
							"core.status.hero.loc.x - 2",
							"core.status.hero.loc.y"
						],
						"async": true
					},
					{
						"type": "waitAsync"
					}
				]
			}
		],
		"地毯式轰炸动画": [
			{
				"type": "if",
				"condition": "(flag:anime===true)",
				"true": [
					{
						"type": "playSound",
						"name": "bomber4.mp3"
					},
					{
						"type": "sleep",
						"time": 2000,
						"noSkip": true
					},
					{
						"type": "playSound",
						"name": "airstrike.mp3"
					},
					{
						"type": "showImage",
						"code": 1,
						"image": "carpetbomb.png",
						"loc": [
							0,
							480
						],
						"opacity": 1,
						"time": 0
					},
					{
						"type": "moveImage",
						"code": 1,
						"to": [
							0,
							-1920
						],
						"time": 10000,
						"async": true
					},
					{
						"type": "sleep",
						"time": 1000
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							14,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							13,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							4,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							0,
							10
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							3,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							8,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							0,
							12
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							5,
							1
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							3,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							10,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							7,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							4,
							9
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							1,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							11,
							2
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							8
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							3,
							13
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							0,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							8,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							12,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							5,
							14
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							13,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							4,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							10,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							7,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							2,
							2
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							11,
							13
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							0,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							12,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							8,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							3,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							5,
							5
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							10,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							4,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							7,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							2
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							13
						],
						"async": true
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
						"type": "animate",
						"name": "explore",
						"loc": [
							2,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							11,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							1,
							8
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							0,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							12,
							12
						],
						"async": true
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
						"type": "animate",
						"name": "explore",
						"loc": [
							3,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							5,
							8
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							3
						],
						"async": true
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
						"type": "animate",
						"name": "explore",
						"loc": [
							4,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							7,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							14,
							5
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							6,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							12
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							2,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							11,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							1,
							12
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							0,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							12,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							8,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							3,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							5,
							11
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							13,
							12
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							10,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							4,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							7,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							14,
							13
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							6,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							9,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							2,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							11,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							3
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							0,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							12,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							8,
							3
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							3,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							5,
							0
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							10,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							4,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							7,
							2
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							14,
							0
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							11
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							2,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							11,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							10
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							0,
							14
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							12,
							5
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							8,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							3,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							5,
							3
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							13,
							7
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							10,
							12
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							4,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							7,
							13
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							14,
							9
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							6,
							2
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							9,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							2,
							0
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							11,
							4
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							1,
							6
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							0,
							10
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							12,
							13
						],
						"async": true
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
						"type": "animate",
						"name": "explore",
						"loc": [
							3,
							12
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							5,
							7
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 300
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							13,
							1
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							10,
							6
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							4,
							8
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "explore",
						"loc": [
							7,
							9
						],
						"async": true
					},
					{
						"type": "animate",
						"name": "zone",
						"loc": [
							14,
							1
						],
						"async": true
					},
					{
						"type": "waitAsync"
					},
					{
						"type": "hideImage",
						"code": 1,
						"time": 0
					}
				]
			}
		],
		"铝箔条动画": [
			{
				"type": "if",
				"condition": "(flag:anime===true)",
				"true": [
					{
						"type": "showImage",
						"code": 1,
						"image": "aircraft9.png",
						"loc": [
							480,
							115
						],
						"opacity": 1,
						"time": 0
					},
					{
						"type": "moveImage",
						"code": 1,
						"to": [
							-195,
							115
						],
						"time": 700,
						"async": true
					},
					{
						"type": "playSound",
						"name": "fighter.mp3"
					},
					{
						"type": "sleep",
						"time": 100,
						"noSkip": true
					},
					{
						"type": "playSound",
						"name": "Saint4.mp3"
					},
					{
						"type": "animate",
						"name": "disturb",
						"loc": [
							9,
							12
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100,
						"noSkip": true
					},
					{
						"type": "animate",
						"name": "disturb",
						"loc": [
							4,
							10
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100,
						"noSkip": true
					},
					{
						"type": "animate",
						"name": "disturb",
						"loc": [
							3,
							5
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100,
						"noSkip": true
					},
					{
						"type": "animate",
						"name": "disturb",
						"loc": [
							8,
							4
						],
						"async": true
					},
					{
						"type": "sleep",
						"time": 100,
						"noSkip": true
					},
					{
						"type": "animate",
						"name": "disturb",
						"loc": [
							7,
							7
						],
						"async": true
					},
					{
						"type": "waitAsync"
					},
					{
						"type": "hideImage",
						"code": 1,
						"time": 0
					}
				]
			}
		],
		"推导弹": [
			{
				"type": "if",
				"condition": "(flag:anime===true)",
				"true": [
					{
						"type": "animate",
						"name": "hand",
						"loc": [
							"core.nextX()",
							"core.nextY()"
						],
						"async": true
					},
					{
						"type": "jump",
						"from": [
							"core.nextX()",
							"core.nextY()"
						],
						"to": [
							"core.nextX(2)",
							"core.nextY(2)"
						],
						"time": 500,
						"async": true
					},
					{
						"type": "waitAsync"
					},
					{
						"type": "animate",
						"name": "bigexplore",
						"loc": [
							"core.nextX(2)",
							"core.nextY(2)"
						]
					}
				]
			}
		],
		"高脚柜选择目标": [
			{
				"type": "tip",
				"text": "请选择投弹位置"
			},
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "wait"
					},
					{
						"type": "if",
						"condition": "(flag:type===1)",
						"true": [
							{
								"type": "if",
								"condition": "((temp:X===flag:x)&&(temp:Y===flag:y))",
								"true": [
									{
										"type": "break",
										"n": 1
									}
								]
							},
							{
								"type": "setValue",
								"name": "temp:X",
								"value": "flag:x"
							},
							{
								"type": "setValue",
								"name": "temp:Y",
								"value": "flag:y"
							},
							{
								"type": "tip",
								"text": "再次点击闪烁位置确认"
							},
							{
								"type": "drawSelector",
								"image": "winskin.png",
								"code": 1,
								"x": "32*temp:X",
								"y": "32*temp:Y",
								"width": 32,
								"height": 32
							}
						]
					}
				]
			},
			{
				"type": "drawSelector",
				"code": 1
			},
			{
				"type": "function",
				"function": "function(){\nif (core.getBlockCls(flags.x, flags.y) === \"enemys\") flags.touchenemy = [flags.x, flags.y]\nelse flags.touchenemy = \"failed\"\nif (core.getBlockCls(flags.x, flags.y) === \"items\") flags.touchitem = [flags.x, flags.y]\nelse flags.touchitem = \"failed\"\nif (core.getBlockId(flags.x, flags.y, void 0, true) === null) flags.touchnullblock = [flags.x, flags.y]\nelse flags.touchnullblock = \"failed\"\nif ([\"yellowDoor\", \"blueDoor\", \"redDoor\"].includes(core.getBlockId(flags.x, flags.y, void 0, true))) flags.touchdoor = [flags.x, flags.y]\nelse flags.touchdoor = \"failed\"\n}"
			}
		],
		"结尾剧情": [
			{
				"type": "setText",
				"position": "center",
				"align": "center"
			},
			{
				"type": "showImage",
				"code": 1,
				"image": "black.png",
				"loc": [
					0,
					0
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "setCurtain",
				"time": 0
			},
			{
				"type": "playBgm",
				"name": "pearlharbor.mp3",
				"keep": true
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 2,
				"image": "title1.png",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					70,
					100,
					360,
					90
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "title2.png",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					70,
					190,
					350,
					120
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "moveImage",
				"code": 2,
				"to": [
					70,
					-180
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					70,
					-90
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end1.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "aircraft7.png",
				"loc": [
					640,
					115
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "作者：\n喜食佩刀的米格\n策划：\n喜食佩刀的米格\n剧情：\n由历史现实改编",
				"loc": [
					0,
					150
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					-195,
					115
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					-480,
					0
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end2.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "aircraft1.png",
				"loc": [
					-195,
					115
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "rotateImage",
				"code": 4,
				"angle": 180,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "脚本：\n秋橙（前期）\n草莓（后期）\n美工：\n喜食佩刀的米格\n永葆一颗童心\n草莓\n测试：\n待定",
				"loc": [
					0,
					140
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					640,
					115
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					640,
					0
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end3.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "aircraft7.png",
				"loc": [
					143,
					480
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "rotateImage",
				"code": 4,
				"angle": 90,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "制作工具：\nHTML5魔塔样板v2.8",
				"loc": [
					0,
					170
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					143,
					-115
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					0,
					-480
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end4.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "aircraft2.png",
				"loc": [
					143,
					-251
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "rotateImage",
				"code": 4,
				"angle": -90,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "图片来源：\n互联网\nWar in the Pacific（游戏）\n如发现图片内容与文本不符，欢迎指正",
				"loc": [
					0,
					160
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					143,
					480
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					0,
					480
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end5.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "aircraft9.png",
				"loc": [
					640,
					115
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "音乐来源：\n碧蓝航线\n永远的七日之都\n双星物语\n将军的荣耀\n钢铁雄心\n坦克世界\n三国志曹操传\n冰封前线系列\n欧洲空战英雄\n战争雷霆\n空中冲突太平洋航母\nWar on the Sea\n艾丽卡（小孩版本）\nfarthestend\nHarbinger\nExodus",
				"loc": [
					0,
					30
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					-195,
					115
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					-480,
					0
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end6.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "aircraft3.png",
				"loc": [
					143,
					480
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "音效来源：（样板自带及群文件中的不算在内）\nWar in the Pacific\nKards\n新抢摊登陆\n抢摊登陆2006\n战争雷霆\n偷袭珍珠港\n猎杀潜航\n太平洋风暴：盟军\n还有各种地方瞎搜罗的",
				"loc": [
					0,
					100
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					143,
					-251
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					0,
					-480
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end7.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "aircraft8.png",
				"loc": [
					-195,
					115
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "rotateImage",
				"code": 4,
				"angle": 90,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "声明：\n本游戏目前仅在h5mota.com发布\n完全免费，纯爱发电，不用于商业用途\n剧情改编自真实历史，如有雷同，纯属正常\n（不雷同那就怪了）\n若您在其他网站发现并游玩本游戏\n建议前往上述网站支持原版\n不会有人付费玩这游戏吧？不会吧？",
				"loc": [
					0,
					120
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					640,
					115
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					640,
					0
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end8.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "cvairgroup.png",
				"loc": [
					0,
					-1920
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "作者B站名：大傻米格\nuid：279738052\n欢迎关注！",
				"loc": [
					0,
					170
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					0,
					480
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					0,
					480
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end9.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "carpetbomb.png",
				"loc": [
					0,
					480
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "如有意见或建议\n可发评论区\n或私信作者\n欢迎一切积极友善的讨论！",
				"loc": [
					0,
					150
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					0,
					-1920
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					0,
					-480
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "end10.jpg",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					null
				],
				"opacity": 1,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 2000
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "aircraft6.png",
				"loc": [
					20,
					480
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showTextImage",
				"code": 2,
				"text": "谨以本作以及另外两部前作\n向所有在第二次世界大战中\n为反法西斯事业做出贡献的\n来自世界各地的英勇战士们\n   致以最崇高的敬意！",
				"loc": [
					0,
					150
				],
				"lineHeight": 1.4,
				"opacity": 1,
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					20,
					-330
				],
				"time": 500,
				"async": true
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					0,
					-480
				],
				"time": 500,
				"async": true
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "sleep",
				"time": 5000
			},
			{
				"type": "hideImage",
				"code": 2,
				"time": 500
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "setCurtain",
				"color": [
					0,
					0,
					0,
					1
				],
				"time": 0,
				"keep": true
			},
			{
				"type": "hideImage",
				"code": 1,
				"time": 0
			},
			{
				"type": "changeFloor",
				"floorId": "MT451",
				"loc": [
					7,
					0
				],
				"direction": "down",
				"time": 1000
			}
		],
		"跳关系统": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[跳关系统]请选择想要前往的历史节点",
						"choices": [
							{
								"text": "第二章 不列颠之鹰",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter2.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]西欧大陆已然沦陷，只有英吉利海峡将英国本土与德国的闪电攻势分隔。唯有挡下敌人的空中攻势，才能守住最后的阵地。",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第三章 惊涛骇浪",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter3.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]空中的战斗仍在持续，在波涛汹涌的大西洋下，德军的“深海狼群”正对着英国的海上交通线虎视眈眈……",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第四章 绝命沙原",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter4.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]非洲的漫天黄沙之下，意大利军队也在觊觎着苏伊士运河的控制权。在沙漠的另一端，一条狐狸尾巴忽隐忽现。",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第五章 全面开战",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter5.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]随着美苏的加入，战争的规模已达顶峰。越来越多的人力和物力将被源源不断送往前线，在那之前，务必顶住！",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第六章 反击时刻",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter6.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]持续的消耗战已经让曾经战无不胜的“沙漠之狐”显露疲态。现在正是，反击之时！",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第七章 王牌陨落",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter7.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]沙漠军团最后的力量已被逼退至最后一个据点。然而，沙暴之中，隐隐浮现出一些钢铁虎纹……",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第八章 战火蔓延",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter8.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]漫长的北非之战已经过去，下一步就是重返欧陆。迎接你的究竟是鲜花与荣耀，还是炮火与死亡？",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第九章 D-Day",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter9.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]主力部队集结完毕，这一战，将载入史册！",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第十章 阴云密布",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter10.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]一声轰鸣再次划破本该归于宁静的天空，跨时代的武器逐一登台亮相。本应唾手可得的胜利，重新蒙上了一层阴霾。",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "第十一章 胜利之歌",
								"action": [
									{
										"type": "showImage",
										"code": 1,
										"image": "chapter11.jpg",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 500
									},
									{
										"type": "sleep",
										"time": 1000
									},
									{
										"type": "choices",
										"text": "\t[章节概述]最终竞速已经开始，敌人发起最后的冲锋。在黎明到来之前，战斗的火把还不能熄灭！",
										"choices": [
											{
												"text": "立即前往",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 0
													}
												]
											},
											{
												"text": "再想想",
												"action": [
													{
														"type": "hideImage",
														"code": 1,
														"time": 500
													}
												]
											}
										]
									}
								]
							},
							{
								"text": "退出",
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
		],
		"新难度选择": [
			{
				"type": "showImage",
				"code": 1,
				"image": "bg2.png",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					0,
					0,
					480,
					480
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showImage",
				"code": 2,
				"image": "choosehard.png",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					120,
					20,
					240,
					80
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showImage",
				"code": 3,
				"image": "easy1.png",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					150,
					520,
					180,
					60
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showImage",
				"code": 4,
				"image": "normal1.png",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					150,
					580,
					180,
					60
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showImage",
				"code": 5,
				"image": "hard1.png",
				"sloc": [
					0,
					0,
					null
				],
				"loc": [
					150,
					640,
					180,
					60
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "moveImage",
				"code": 3,
				"to": [
					150,
					140
				],
				"time": 200
			},
			{
				"type": "moveImage",
				"code": 4,
				"to": [
					150,
					240
				],
				"time": 200
			},
			{
				"type": "moveImage",
				"code": 5,
				"to": [
					150,
					340
				],
				"time": 200
			},
			{
				"type": "while",
				"condition": "(flag:chosehard!==true)",
				"data": [
					{
						"type": "wait",
						"data": [
							{
								"case": "mouse",
								"px": [
									150,
									390
								],
								"py": [
									140,
									200
								],
								"action": [
									{
										"type": "showImage",
										"code": 3,
										"image": "easy2.png",
										"sloc": [
											0,
											0,
											null
										],
										"loc": [
											150,
											140,
											180,
											60
										],
										"opacity": 1,
										"time": 0
									},
									{
										"type": "playSound",
										"name": "telegram.mp3"
									},
									{
										"type": "sleep",
										"time": 500
									},
									{
										"type": "choices",
										"text": "\t[神剧难度]描述：可以扔掉大脑直接冲进敌阵开无双。适合只想看剧情或体验乱杀快感的玩家。\n难度福利：获得40%全战斗减伤，获得的指挥点数+100%，战斗获得3倍金经，拾取金币翻倍。",
										"choices": [
											{
												"text": "开打！",
												"action": [
													{
														"type": "setValue",
														"name": "flag:难度",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "flag:chosehard",
														"value": "true"
													}
												]
											},
											{
												"text": "换一个",
												"action": [
													{
														"type": "showImage",
														"code": 3,
														"image": "easy1.png",
														"sloc": [
															0,
															0,
															null
														],
														"loc": [
															150,
															140,
															180,
															60
														],
														"opacity": 1,
														"time": 0
													}
												]
											}
										]
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									150,
									390
								],
								"py": [
									240,
									300
								],
								"action": [
									{
										"type": "showImage",
										"code": 4,
										"image": "normal2.png",
										"sloc": [
											0,
											0,
											null
										],
										"loc": [
											150,
											240,
											180,
											60
										],
										"opacity": 1,
										"time": 0
									},
									{
										"type": "playSound",
										"name": "telegram.mp3"
									},
									{
										"type": "sleep",
										"time": 500
									},
									{
										"type": "choices",
										"text": "\t[街机难度]描述：虽不至于无脑乱撞但依旧比较亲民，相比常规蓝海塔的最简单难度可能还要简单一些，适合大部分玩家。\n难度福利：获得10%全战斗减伤，获得的指挥点数+50%，战斗获得3倍金经，拾取金币翻倍。",
										"choices": [
											{
												"text": "开打！",
												"action": [
													{
														"type": "setValue",
														"name": "flag:难度",
														"value": "2"
													},
													{
														"type": "setValue",
														"name": "flag:chosehard",
														"value": "true"
													}
												]
											},
											{
												"text": "换一个",
												"action": [
													{
														"type": "showImage",
														"code": 4,
														"image": "normal1.png",
														"sloc": [
															0,
															0,
															null
														],
														"loc": [
															150,
															240,
															180,
															60
														],
														"opacity": 1,
														"time": 0
													}
												]
											}
										]
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									150,
									390
								],
								"py": [
									340,
									400
								],
								"action": [
									{
										"type": "showImage",
										"code": 5,
										"image": "hard2.png",
										"sloc": [
											0,
											0,
											null
										],
										"loc": [
											150,
											340,
											180,
											60
										],
										"opacity": 1,
										"time": 0
									},
									{
										"type": "playSound",
										"name": "telegram.mp3"
									},
									{
										"type": "sleep",
										"time": 500
									},
									{
										"type": "choices",
										"text": "\t[历史难度]描述：直面敌人精锐，进行旷日持久的作战。适合想要有一定挑战性，技术比作者本人更高或持平的玩家（作者水平：蓝海塔最简单难度都不一定通关）。\n无任何福利。",
										"choices": [
											{
												"text": "开打！",
												"action": [
													{
														"type": "setValue",
														"name": "flag:难度",
														"value": "3"
													},
													{
														"type": "setValue",
														"name": "flag:chosehard",
														"value": "true"
													}
												]
											},
											{
												"text": "换一个",
												"action": [
													{
														"type": "showImage",
														"code": 5,
														"image": "hard1.png",
														"sloc": [
															0,
															0,
															null
														],
														"loc": [
															150,
															340,
															180,
															60
														],
														"opacity": 1,
														"time": 0
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
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
				"type": "hideImage",
				"code": 2,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 3,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 4,
				"time": 0
			},
			{
				"type": "hideImage",
				"code": 5,
				"time": 0
			}
		]
	}
}