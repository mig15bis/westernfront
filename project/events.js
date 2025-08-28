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
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "function",
						"function": "function(){\ncore.insertAction(core.plugin.bindSkills())\n}"
					}
				]
			}
		]
	}
}