var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {
	this.getHeroPerTurnDamageFn = function (enemyInfo, hero, x, y, floorId) {
		hero = hero || core.status.hero;
		floorId = floorId || core.status.floorId;
		if (typeof enemyInfo === 'string') enemyInfo = core.getEnemyInfo(enemyInfo, hero, x, y, floorId);
		const heroInfo = {};
		['hp', 'atk', 'def', 'mdef', 'ap', 'arm', 'top', 'bom', 'tpn', 'dod', 'gro'].forEach((field) => {
			heroInfo[field] = core.getRealStatusOrDefault(hero, field);
		});
		const mon_special = enemyInfo.special;
		const code = [ /* js */ `
			var hero_hp = heroInfo.hp,
				hero_atk = heroInfo.atk,
				hero_def = heroInfo.def,
				hero_mdef = heroInfo.mdef,
				hero_ap = heroInfo.ap,
				hero_arm = heroInfo.arm,
				hero_top = heroInfo.top,
				hero_bom = heroInfo.bom,
				hero_tpn = heroInfo.tpn,
				hero_dod = heroInfo.dod,
				hero_gro = heroInfo.gro;
			var mon_hp = enemyInfo.hp,
				mon_atk = enemyInfo.atk,
				mon_def = enemyInfo.def,
				mon_ap = enemyInfo.ap,
				mon_arm = enemyInfo.arm,
				mon_top = enemyInfo.top,
				mon_bom = enemyInfo.bom,
				mon_tpn = enemyInfo.tpn,
				mon_dod = enemyInfo.dod,
				mon_cd = enemyInfo.cd,
				mon_ammo = enemyInfo.ammo,
				mon_spd = enemyInfo.spd,
				mon_gro = enemyInfo.gro;
			hero_dod = core.clamp(hero_dod, 0, mon_tpn);
			mon_dod = core.clamp(mon_dod, 0, hero_tpn);
		`];
		if (core.hasSpecial(mon_special, 36)) // 俯冲轰炸，除前spd个回合外，攻击降低
			code.push( /* js */ `if (nthTurn > mon_spd) hero_atk *= 0.95;`);
		if (flags.skill === 3 && this.Luftwaffe.includes(enemyInfo.type)) // 技能3：防空弹幕，对空攻击力为1.2倍
			code.push( /* js */ `hero_atk *= 1.2;`);
		//谢馒头
		if (core.hasEquip('m4') && this.Army.includes(enemyInfo.type)) {
			code.push( /* js */ `
				if (hero_ap <= mon_arm && hero_arm < mon_ap) {
					hero_atk *= 1.15;
				}
			`);
		}
		//M4A2馒头
		if (core.hasEquip('m4a2') && this.Army.includes(enemyInfo.type)) {
			code.push( /* js */ `
				if (hero_ap <= mon_arm && hero_arm < mon_ap) {
					hero_atk *= 1.15;
				}
			`);
		}
		code.push( /* js */ `
			var damage = hero_atk,
				torpeodoDamage = 0,
				depthcharge = 0,
				bombDamage = 0;
		`);
		if (this.Army.includes(enemyInfo.type)) { // 陆战
			//飓风MK2
			if (core.hasEquip('hurricanemk2')) {
				if (enemyInfo.type.endsWith('轻坦') || enemyInfo.type.endsWith('中坦') || enemyInfo.type.endsWith('重坦') || enemyInfo.type.endsWith('坦歼')) { //对地
					code.push( /* js */ `if (mon_arm < 20) damage *= 1.2;`);
				}
			}
			//台风战斗机
			if (core.hasEquip('typhoon')) {
				if (enemyInfo.type.endsWith('轻坦') || enemyInfo.type.endsWith('中坦') || enemyInfo.type.endsWith('重坦') || enemyInfo.type.endsWith('坦歼')) {
					code.push( /* js */ `if (mon_arm < 20) damage *= 1.2;`);
				} else if (enemyInfo.type.endsWith('反坦克炮') || enemyInfo.type.endsWith('榴弹炮') || enemyInfo.type.endsWith('高射炮') || enemyInfo.type.endsWith('步兵')) {
					code.push( /* js */ `damage *= 1.2`);
				}
			}
			//野猫
			if (core.hasEquip('f4f3')) {
				code.push( /* js */ `if (nthTurn === 2) bombDamage += 0.4 * 2 * hero_atk;`);
			}
			if (core.hasEquip('raider')) {
				code.push( /* js */ `if (nthTurn === 2) bombDamage += 0.4 * 2 * hero_atk;`);
			}
			//地狱猫
			if (core.hasEquip('f6f5')) {
				code.push( /* js */ `if (nthTurn === 2) bombDamage += 2 * 2 * hero_atk;`);
			}
			if (core.hasEquip('essex')) {
				code.push( /* js */ `if (nthTurn === 2) bombDamage += 2 * 2 * hero_atk;`);
			}
			//P40B战斧
			if (core.hasEquip('p40c')) {
				code.push( /* js */ `if (nthTurn === 2) bombDamage += 2.8 * hero_atk;`);
			}
			// 装备加成——攻击机
			if (core.hasEquip('skua')) // 贼鸥式轰炸机
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) bombDamage += hero_atk * 2;`);
			if (core.hasEquip("eagle")) // 贼鸥式轰炸机(鹰号航母)
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) bombDamage += hero_atk * 2;`);
			if (core.hasEquip('sbd3')) //无畏
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) bombDamage += hero_atk * 4.5;`);
			if (core.hasEquip('raider')) //无畏（突击者号航母）
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) bombDamage += hero_atk * 6.3;`);
			if (core.hasEquip('barracuda')) //梭鱼
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 6 * 0.5;`);
			if (core.hasEquip('illustrious')) //梭鱼（光辉号）
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 6 * 0.5;`);
			if (core.hasEquip('typhoon')) // 台风式攻击机
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) bombDamage += hero_atk * 2;`);
			// 装备加成——轰炸机
			if (core.hasEquip('swordfish')) // 箭鱼鱼雷机
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 0.6 * 3;`);
			if (core.hasEquip("eagle")) // 箭鱼鱼雷机(鹰号航母)
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 0.6 * 3;`);
			if (core.hasEquip('blenheim')) //布伦海姆
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 0.7 * 4;`);
			if (core.hasEquip('tbd')) //TBD鱼雷机
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 3;`);
			if (core.hasEquip('raider')) //TBD鱼雷机（突击者
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 3;`);
			if (core.hasEquip('b25')) { //B25米切尔
				if (!['eagle', 'illustrious', 'raider', 'essex', 'enterprise'].some(id => core.hasEquip(id))) {
					code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 12 * 0.6;`);
				} else {
					code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 6 * 0.6;`);
				}
			}
		} else if (this.Navy.includes(enemyInfo.type)) { // 海战
			//野猫
			if (core.hasEquip('f4f3')) { //野猫
				code.push( /* js */ `if (nthTurn === 2) bombDamage += 0.4 * 2 * hero_atk;`);
			}
			if (core.hasEquip('raider')) { //野猫（突击者航空母舰）
				code.push( /* js */ `if (nthTurn === 2) bombDamage += 0.4 * 2 * hero_atk;`);
			}
			//P40B战斧
			if (core.hasEquip('p40c')) {
				code.push( /* js */ `if (nthTurn === 2) bombDamage += 2.8 * hero_atk;`);
			}
			// 装备加成——攻击机
			if (core.hasEquip('skua')) { // 贼鸥式轰炸机
				code.push( /* js */ `
					if (nthTurn > 0 && nthTurn % 4 === 0) {
						bombDamage += hero_atk * 2;
						bombDamage *= 1.5;
					}
				`);
			}
			if (core.hasEquip('eagle')) { // 贼鸥式轰炸机(鹰号航母)
				code.push( /* js */ `
					if (nthTurn > 0 && nthTurn % 4 === 0) {
						bombDamage += hero_atk * 2;
						bombDamage *= 1.5;
					}
				`);
			}
			if (core.hasEquip('illus1941')) { // 贼鸥式轰炸机(光辉1941)
				code.push( /* js */ `
					if (nthTurn > 0 && nthTurn % 4 === 0) {
						bombDamage += hero_atk * 2;
						bombDamage *= 1.5;
					}
				`);
			}
			if (core.hasEquip('sbd3')) { //无畏
				code.push( /* js */ `
					if (nthTurn > 0 && nthTurn % 4 === 0) {
						bombDamage += hero_atk * 4.5;
						bombDamage *= 1.5;
					}
				`);
			}
			if (core.hasEquip('raider')) { //无畏（突击者号航母）
				code.push( /* js */ `
					if (nthTurn > 0 && nthTurn % 4 === 0) {
						bombDamage += hero_atk * 6.3;
						bombDamage *= 1.5;
					}
				`);
			}
			if (core.hasEquip('barracuda')) { //梭鱼
				code.push( /* js */ `
                   if (nthTurn > 0 && nthTurn % 5 === 0) {
                       bombDamage += hero_atk * 6 * 0.5;
                   if (mon_dod <= 5)
                       torpeodoDamage += hero_top * (5- mon_dod);
                   }
                `);
			}
			if (core.hasEquip('illustrious')) { //梭鱼（光辉号）
				code.push( /* js */ `
                   if (nthTurn > 0 && nthTurn % 5 === 0) {
                       bombDamage += hero_atk * 6 * 0.5;
                   if (mon_dod <= 5)
                       torpeodoDamage += hero_top * (5- mon_dod);
                   if (nthTurn = 1){
                      bombDamage += hero_atk * 6 * 0.5;
                   if (mon_dod <= 5)
                       torpeodoDamage += hero_top * (5- mon_dod);
                   }
                   }
                `);
			}
			if (core.hasEquip('typhoon')) // 台风式攻击机
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) bombDamage += hero_atk * 2;`);
			// 装备加成——轰炸机
			if (core.hasEquip('swordfish')) { // 箭鱼鱼雷机
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0 && mon_dod <= 3) torpeodoDamage += hero_top * (3 - mon_dod);`);
			}
			if (core.hasEquip('eagle')) // 箭鱼鱼雷机(鹰号航母)
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0 && mon_dod <= 3) torpeodoDamage += hero_top * (3 - mon_dod);`);
			if (core.hasEquip("illus1941")) // 箭鱼鱼雷机(光辉1941)
				code.push( /* js */ `
                   if (nthTurn > 0 && nthTurn % 5 === 0 && mon_dod <= 3) 
                       torpeodoDamage += hero_top * (3 - mon_dod);
                   if (nthTurn = 1 && mon_dod <= 3){
                       torpeodoDamage += hero_top * (3 - mon_dod);
                   }
                `);
			if (core.hasEquip('blenheim')) //布伦海姆
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 0.7 * 4;`);
			if (core.hasEquip('b25')) { //B25米切尔
				if (!['eagle', 'illustrious', 'raider', 'essex', 'enterprise'].some(id => core.hasEquip(id))) {
					code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 12 * 0.6;`);
				} else {
					code.push( /* js */ `if (nthTurn > 0 && nthTurn % 5 === 0) bombDamage += hero_atk * 6 * 0.6;`);
				}
			}
			if (flags.skill === 8) { //技能8：剑鱼818中队
				code.push( /* js */ `
					if (nthTurn === 5 && mon_dod < 3) {
						torpeodoDamage += hero_top * (3 - mon_dod);
						mon_dod -= 2;
						if (mon_dod < 0)
							mon_dod = 0;
					}
				`);
			}
			if (flags.skill === 12) { //技能12：从海底出击
				code.push( /* js */ `if (nthTurn === 1 && mon_dod < 8) torpeodoDamage += hero_top * (8 - mon_dod);`);
			}
			if (core.hasEquip('tbd')) { //TBD蹂躏者（有哑弹）
				if (flags.hard === 1 || flags['引信改良'])
					code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0 && mon_dod <= 3) torpeodoDamage += hero_top * (3 - mon_dod);`);
			}
			if (core.hasEquip('raider')) { //TBD蹂躏者（突击者号航空母舰）
				if (flags.hard === 1 || flags['引信改良'])
					code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0 && mon_dod <= 3) torpeodoDamage += hero_top * (3 - mon_dod);`);
			}
			if (core.hasEquip('tbf')) { //TBF复仇者（有哑弹）
				if (flags.hard === 1 || flags['引信改良'])
					code.push( /* js */ `
                    if (nthTurn > 0 && nthTurn % 4 === 0 && mon_dod <= 10) {
                        torpeodoDamage += hero_top * (10 - mon_dod);
                        if (enemyInfo.type === '重巡' || enemyInfo.type === '战列'){
                           torpeodoDamage *= 2;
                        }
                   }
               `);
			}
			if (core.hasEquip('essex')) { //TBF复仇者（企业号）
				if (flags.hard === 1 || flags['引信改良'])
					code.push( /* js */ `
                    if (nthTurn > 0 && nthTurn % 4 === 0 && mon_dod <= 10) {
                        torpeodoDamage += hero_top * (10 - mon_dod);
                        if (enemyInfo.type === '重巡' || enemyInfo.type === '战列'){
                           torpeodoDamage *= 2;
                        }
                   }
               `);
			}
			if (core.hasEquip('enterprise')) { //TBF复仇者（企业号）
				if (flags.hard === 1 || flags['引信改良'])
					code.push( /* js */ `
                    if (nthTurn > 0 && nthTurn % 4 === 0 && mon_dod <= 10) {
                        torpeodoDamage += hero_top * (10 - mon_dod);
                        if (enemyInfo.type === '重巡' || enemyInfo.type === '战列'){
                           torpeodoDamage *= 2;
                        }
                   }
               `);
			}
			// 正常情况，鱼雷攻击
			code.push( /* js */ `var torpeodo = 10;`);
			//先判定是否哑弹
			if (flags.hard === 1 || flags['引信改良'] || !['mahan', 'gridley', 'benson', 'fletcher', 'cleveland', 'raider', 'enterprise'].some(id => core.hasEquip(id))) {
				if (core.hasEquip('benson')) {
					code.push( /* js */ `torpeodo -= 2;`);
				} //本森级，-2轮鱼雷cd
				code.push( /* js */ `if (nthTurn % torpeodo === 0){ //发射鱼雷 
                torpeodoDamage += hero_top * (hero_tpn - mon_dod);
                }
             `);
			}
			// 装备加成——军舰
			// 厌战号战列舰
			if (core.hasEquip('warspite') && enemyInfo.type != '潜艇')
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 3 === 0) damage += 3 * hero_atk;`);
			//胡德号战列舰
			if (core.hasEquip('hood') && enemyInfo.type != '潜艇')
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) damage += 6 * hero_atk;`);
			//乔五号战列舰
			if (core.hasEquip('kinggeorge5') && enemyInfo.type != '潜艇')
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) damage += 6 * hero_atk;`);
			//北卡号战列舰
			if (core.hasEquip('northcarolina') && enemyInfo.type != '潜艇')
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 4 === 0) damage += 9 * hero_atk;`);
			// 潜行
			if (core.hasSpecial(mon_special, 33))
				code.push( /* js */ `damage *= 0.1;`);
			//E级驱逐舰
			if (core.hasEquip('classe') && enemyInfo.type === '潜艇')
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 3 === 0) depthcharge += 0.5 * hero_atk;`);
			//马汉级
			if (core.hasEquip('mahan') && enemyInfo.type === '潜艇')
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 3 === 0) depthcharge += 0.5 * hero_atk;`);
			//V级
			if (core.hasEquip('classv') && enemyInfo.type === '潜艇')
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 3 === 0) depthcharge += hero_atk;`);
			//本森级
			if (core.hasEquip('benson') && enemyInfo.type === '潜艇')
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 3 === 0) depthcharge += hero_atk;`);
		} else if (this.Luftwaffe.includes(enemyInfo.type)) { // 空战
			if (core.hasEquip('f4f3')) { //野猫
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 2 === 0) damage *= 1.15;`);
			}
			if (core.hasEquip('raider')) { //野猫（突击者）
				code.push( /* js */ `if (nthTurn > 0 && nthTurn % 2 === 0) damage *= 1.15;`);
			}
			if (core.hasEquip('hurricanemk1') && enemyInfo.type.endsWith('轰炸机')) // 飓风MK1
				code.push( /* js */ `damage += 80;`);
			if (core.hasEquip('eagle') && enemyInfo.type.endsWith('轰炸机')) //飓风MK1（鹰号航母）
				code.push( /* js */ `damage += 80;`);
			if (core.hasEquip('spitfiremk1') && enemyInfo.type.endsWith('战斗机')) //喷火MK1
				code.push( /* js */ `damage *= 1.1;`);
			if (core.hasEquip('illus1941') && enemyInfo.type.endsWith('战斗机')) //光辉1941
				code.push( /* js */ `damage *= 1.1;`);
			if (core.hasEquip('hurricanemk2') && enemyInfo.type.endsWith('轰炸机')) //飓风MK2
				code.push( /* js */ `damage *= 1.2;`);
			if (core.hasEquip('typhoon') && enemyInfo.type.endsWith('轰炸机')) //台风战斗机
				code.push( /* js */ `damage *= 1.2;`);
			if (core.hasEquip('spitfiremk5') && enemyInfo.type.endsWith('战斗机')) //喷火MK5
				code.push( /* js */ `damage *= 1.1;`);
			if (core.hasEquip('illustrious') && enemyInfo.type.endsWith('战斗机')) //喷火MK5（光辉号）
				code.push( /* js */ `damage *= 1.1;`);
			if (core.hasEquip('spitfiremk5') && enemyInfo.type.endsWith('战斗机')) //喷火MK9
				code.push( /* js */ `damage += 0.2 * hero.mdef;`);
			if (core.hasEquip('f6f5') && enemyInfo.type.endsWith('战斗机')) { //地狱猫——火鸡猎手
				if (core.hasSpecial(mon_special, 4)) { code.push( /* js */ `damage *= 1.4`); }
				if (core.hasSpecial(mon_special, 5)) { code.push( /* js */ `damage *= 1.6`); }
				if (core.hasSpecial(mon_special, 6)) { code.push( /* js */ `damage *= enemyInfo.n * 0.2 + 1`); }
				if (!core.hasSpecial(mon_special, 4) && !core.hasSpecial(mon_special, 5) && !core.hasSpecial(mon_special, 6)) { code.push( /* js */ `damage *= 1.2`); }
			}
			if (core.hasEquip('beautifighter') && enemyInfo.type.endsWith('轰炸机')) //英俊战士
				code.push( /* js */ `if (nthTurn === 1) damage *= 2;`);
			if (core.hasEquip('p38') && enemyInfo.type.endsWith('轰炸机')) //P38
				code.push( /* js */ `if (nthTurn === 1) damage *= 2;`);
			if (core.hasEquip("northcarolina") && core.status.thisMap.area === "海洋") //北卡禁飞区
				code.push( /* js */ `damage *= 1.6;`);
			if (core.hasEquip("cleveland")) //克利夫兰
				code.push( /* js */ `damage *= 1.25;`);
		}
		code.push( /* js */ `damage += torpeodoDamage + bombDamage + depthcharge;`);
		if (flags.dry === true && !core.hasSpecial(mon_special, 55) && !core.hasSpecial(mon_special, 62)) { //炎热debuff
			code.push( /* js */ `damage *= 1.2;`);
		}
		if (core.hasEquip('p38') && core.hasSpecial(mon_special, 57)) { //P38闪电，斩首行动
			code.push( /* js */ `damage *= 1.5;`);
		}
		if (this.Army.includes(enemyInfo.type)) { // 陆战中被对方单向击穿
			var preTurn = 5;
			if (core.hasEquip('crusades')) preTurn = 3; //十字军坦克：敌人先攻-2
			if (core.hasEquip('valentine')) preTurn = 10; //瓦伦丁坦克
			if (core.hasEquip('matilda')) preTurn = 10; // 玛蒂尔达步兵坦克：无法击穿对方时前10回合无法造成伤害
			if (core.hasEquip('m3grant')) preTurn = 15; //M3格兰特
			if (core.hasEquip('churchillmk3')) preTurn = 15; //傻丘3
			// 前5回合无法造成伤害，其他回合伤害只有80%
			code.push( /* js */ `
				if (hero_ap <= mon_arm && hero_arm < mon_ap) {
					var preTurn = ${preTurn};
					if (nthTurn <= preTurn) damage = 0;
					else damage *= 0.8;
				}
			`);
		}
		code.push( /* js */ `return damage;`);
		const fn = new Function("heroInfo", "enemyInfo", "nthTurn", code.join('\n'));
		return (nthTurn) => fn(heroInfo, enemyInfo, nthTurn);
	}
	this.getEnemyPerDamage = function (enemyInfo, hero, x, y, floorId, nthTurn) {
		hero = hero || core.status.hero;
		floorId = floorId || core.status.floorId;
		if (typeof enemyInfo === 'string') enemyInfo = core.getEnemyInfo(enemyInfo, hero, x, y, floorId);
		var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
			hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
			hero_def = core.getRealStatusOrDefault(hero, 'def'),
			hero_mdef = core.getRealStatusOrDefault(hero, 'mdef'),
			hero_ap = core.getRealStatusOrDefault(hero, 'ap'),
			hero_arm = core.getRealStatusOrDefault(hero, 'arm'),
			hero_top = core.getRealStatusOrDefault(hero, 'top'),
			hero_bom = core.getRealStatusOrDefault(hero, 'bom'),
			hero_tpn = core.getRealStatusOrDefault(hero, 'tpn'),
			hero_dod = core.getRealStatusOrDefault(hero, 'dod'),
			hero_gro = core.getRealStatusOrDefault(hero, 'gro');
		var mon_hp = enemyInfo.hp,
			mon_atk = enemyInfo.atk,
			mon_def = enemyInfo.def,
			mon_special = enemyInfo.special,
			mon_ap = enemyInfo.ap,
			mon_arm = enemyInfo.arm,
			mon_top = enemyInfo.top,
			mon_bom = enemyInfo.bom,
			mon_tpn = enemyInfo.tpn,
			mon_dod = enemyInfo.dod,
			mon_cd = enemyInfo.cd,
			mon_ammo = enemyInfo.ammo,
			mon_spd = enemyInfo.spd,
			mon_gro = enemyInfo.gro;
		var damage = mon_atk;
		//技能6：Z字规避
		if (flags.skill === 6) {
			hero_dod += 3;
		}
		//技能5：预警
		if (flags.skill === 5) {
			hero_dod += 6;
		}
		hero_dod = core.clamp(hero_dod, 0, mon_tpn);
		mon_dod = core.clamp(mon_dod, 0, hero_tpn);
		var torpeodoDamage = 0,
			bombDamage = 0;
		// 连击
		if (core.hasSpecial(mon_special, 4)) damage *= 2;
		if (core.hasSpecial(mon_special, 5)) damage *= 3;
		if (core.hasSpecial(mon_special, 6)) damage *= enemyInfo.n;
		if (this.Army.includes(enemyInfo.type)) { // 陆战
			if (core.hasSpecial(mon_special, 43) && mon_ap > hero_arm) // 超压：勇士被对方穿甲则对方伤害为1.4倍
				damage *= 1.4;
			if (core.hasEquip('matilda') && hero_arm >= mon_ap) // 玛蒂尔达步兵坦克：勇士未被对方穿甲则对方伤害为0.8倍
				damage *= 0.8;
			if (core.hasEquip('m3grant') && hero_arm >= mon_ap) // M3格兰特：勇士未被对方穿甲则对方伤害为0.8倍
				damage *= 0.8;
			//380舰炮
			if (core.hasSpecial(mon_special, 32) && nthTurn > 0 && nthTurn % 4 === 0) {
				damage += 6 * mon_atk;
			}
			if (hero_ap > mon_arm && hero_arm >= mon_ap) { // 被勇士单向击穿
				if (core.hasSpecial(mon_special, 60)) {
					if (nthTurn <= 2) damage = 0;
				} else if (nthTurn <= 5) damage = 0;
				else damage *= 0.8;
			}
			if (core.hasEquip('b17')) { //b17伤害减免
				if (enemyInfo.type === '高射炮') {
					damage *= 0.8
				}
			}
		} else if (this.Navy.includes(enemyInfo.type)) { // 海战
			//光辉号装甲
			if (core.hasEquip('illus1941') && !enemyInfo.type.endsWith('战列') && !enemyInfo.type.endsWith('潜艇')) {
				damage *= 0.8
			}
			if (core.hasEquip('illustrious') && !enemyInfo.type.endsWith('战列') && !enemyInfo.type.endsWith('潜艇')) {
				damage *= 0.8
			}
			//乔五战列舰装甲
			if (core.hasEquip('kinggeorge5')) {
				if (enemyInfo.type === '驱逐' || enemyInfo.type === '轻巡') {
					damage *= 0.5;
				}
			}
			//北卡战列舰装甲
			if (core.hasEquip('northcarolina')) {
				if (enemyInfo.type === '驱逐' || enemyInfo.type === '轻巡') {
					damage *= 0.4;
				}
			}
			// 鱼雷
			if (core.hasSpecial(mon_special, 29) && nthTurn > 0 && nthTurn % mon_cd === 0) {
				torpeodoDamage += mon_top * (mon_tpn - hero_dod);
				if (core.hasEquip('eagle')) torpeodoDamage *= 1.2; // 鹰号航母
			}
			//280舰炮
			if (core.hasSpecial(mon_special, 31) && nthTurn > 0 && nthTurn % 3 === 0) {
				damage += 3 * mon_atk;
			}
			//380舰炮
			if (core.hasSpecial(mon_special, 32) && nthTurn > 0 && nthTurn % 4 === 0) {
				damage += 6 * mon_atk;
			}
		} else if (this.Luftwaffe.includes(enemyInfo.type)) { // 空战
			if (core.hasEquip('typhoon') && enemyInfo.type.endsWith('战斗机')) // 台风式攻击机
				damage *= 1.3;
			if (core.hasEquip('p47b')) //P47B雷电
				damage *= 0.8;
			if (core.hasSpecial(mon_special, 30)) { //航炮
				damage += mon_atk * 0.3;
			}
			// 航弹
			if (core.hasSpecial(mon_special, 28) && nthTurn > 0 && nthTurn % mon_spd === 0) {
				// 俯冲轰炸机
				if (core.hasSpecial(mon_special, 36)) bombDamage += mon_ammo * mon_bom * 1.5;
				else bombDamage += mon_ammo * mon_bom;
			}
			//光辉号炸弹抗性
			if (core.hasEquip('illus1941') && core.status.thisMap.area === "海洋") {
				bombDamage *= 0.75;
			}
			if (core.hasEquip('illustrious') && core.status.thisMap.area === "海洋") {
				bombDamage *= 0.75;
			}
			// 鱼雷
			if (core.hasSpecial(mon_special, 29) && nthTurn > 0 && nthTurn % mon_cd === 0) {
				torpeodoDamage += mon_top * (mon_tpn - hero_dod);
				if (core.hasEquip('eagle')) torpeodoDamage *= 1.2; // 鹰号航母
			}
			if (core.hasEquip('b17')) { //b17伤害减免
				if (enemyInfo.type.endsWith('战斗机')) {
					damage *= 0.8;
				}
			}
		}
		//乔五战列舰鱼雷减抗
		if (core.hasEquip('kinggeorge5')) {
			torpeodoDamage *= 1.4;
		}
		//北卡战列舰鱼雷减抗
		if (core.hasEquip("northcarolina")) {
			torpeodoDamage *= 1.2;
		}
		damage += torpeodoDamage + bombDamage;
		if (core.hasSpecial(mon_special, 38)) { //精锐
			damage *= 2;
		}
		if (core.hasEquip('mosquito') && enemyInfo.type.endsWith('战斗机') && nthTurn <= 3) { //蚊式战斗机木制奇迹（喷气机以后做）
			damage = 0;
		}
		if (flags.dry === true && !core.hasItem('hard1')) { //炎热
			if (core.hasSpecial(mon_special, 62)) { //沙漠之狐
				damage *= 1.5;
			} else
				damage *= 1.2;
		}
		return damage;
	}


	this._afterLoadResources = function () {
		core.ui.statusBar.init()
		// 本函数将在所有资源加载完毕后，游戏开启前被执行（原init）
	}
},
    "drawLight": function () {

	// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
	// 【参数说明】
	// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
	// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
	// lights：可选，一个数组，定义了每个独立的灯光。
	//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
	// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
	//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
	// 【调用样例】
	// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
	// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
	// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
	// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
	// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，40%后才开始衰减。
	this.drawLight = function (name, color, lights, lightDec) {

		// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
		var ctx = core.getContextByName(name);
		if (ctx == null) {
			if (typeof name == 'string')
				ctx = core.createCanvas(name, 0, 0, core._PX_ || core.__PIXELS__, core._PY_ || core.__PIXELS__, 98);
			else return;
		}

		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.msImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;

		core.clearMap(name);
		// 绘制色调层，默认不透明度
		if (color == null) color = 0.9;
		ctx.fillStyle = "rgba(0,0,0," + color + ")";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		lightDec = core.clamp(lightDec, 0, 1);

		// 绘制每个灯光效果
		ctx.globalCompositeOperation = 'destination-out';
		lights.forEach(function (light) {
			// 坐标，半径，中心不透明度
			var x = light[0],
				y = light[1],
				r = light[2];
			// 计算衰减距离
			var decDistance = parseInt(r * lightDec);
			// 正方形区域的直径和左上角坐标
			var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
			grd.addColorStop(0, "rgba(0,0,0,1)");
			grd.addColorStop(1, "rgba(0,0,0,0)");
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.arc(x, y, r, 0, 2 * Math.PI);
			ctx.fill();
		});
		ctx.globalCompositeOperation = 'source-over';
		// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
	}
},
    "shop": function () {
		// 【全局商店】相关的功能
		// 
		// 打开一个全局商店
		// shopId：要打开的商店id；noRoute：是否不计入录像
		this.openShop = function (shopId, noRoute) {
			var shop = core.status.shops[shopId];
			// Step 1: 检查能否打开此商店
			if (!this.canOpenShop(shopId)) {
				core.drawTip("该商店尚未开启");
				return false;
			}

			// Step 2: （如有必要）记录打开商店的脚本事件
			if (!noRoute) {
				core.status.route.push("shop:" + shopId);
			}

			// Step 3: 检查道具商店 or 公共事件
			if (shop.item) {
				if (core.openItemShop) {
					core.openItemShop(shopId);
				} else {
					core.playSound('操作失败');
					core.insertAction("道具商店插件不存在！请检查是否存在该插件！");
				}
				return;
			}
			if (shop.commonEvent) {
				core.insertCommonEvent(shop.commonEvent, shop.args);
				return;
			}

			_shouldProcessKeyUp = true;

			// Step 4: 执行标准公共商店    
			core.insertAction(this._convertShop(shop));
			return true;
		}

		////// 将一个全局商店转变成可预览的公共事件 //////
		this._convertShop = function (shop) {
			return [
				{ "type": "function", "function": "function() {core.addFlag('@temp@shop', 1);}" },
				{
					"type": "while",
					"condition": "true",
					"data": [
						// 检测能否访问该商店
						{
							"type": "if",
							"condition": "core.isShopVisited('" + shop.id + "')",
							"true": [
								// 可以访问，直接插入执行效果
								{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', false) }" },
							],
							"false": [
								// 不能访问的情况下：检测能否预览
								{
									"type": "if",
									"condition": shop.disablePreview,
									"true": [
										// 不可预览，提示并退出
										{ "type": "playSound", "name": "操作失败" },
										"当前无法访问该商店！",
										{ "type": "break" },
									],
									"false": [
										// 可以预览：将商店全部内容进行替换
										{ "type": "tip", "text": "当前处于预览模式，不可购买" },
										{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', true) }" },
									]
								}
							]
						}
					]
				},
				{ "type": "function", "function": "function() {core.addFlag('@temp@shop', -1);}" }
			];
		}

		this._convertShop_replaceChoices = function (shopId, previewMode) {
			var shop = core.status.shops[shopId];
			var choices = (shop.choices || []).filter(function (choice) {
				if (choice.condition == null || choice.condition == '') return true;
				try { return core.calValue(choice.condition); } catch (e) { return true; }
			}).map(function (choice) {
				var ableToBuy = core.calValue(choice.need);
				return {
					"text": choice.text,
					"icon": choice.icon,
					"color": ableToBuy && !previewMode ? choice.color : [153, 153, 153, 1],
					"action": ableToBuy && !previewMode ? [{ "type": "playSound", "name": "商店" }].concat(choice.action) : [
						{ "type": "playSound", "name": "操作失败" },
						{ "type": "tip", "text": previewMode ? "预览模式下不可购买" : "购买条件不足" }
					]
				};
			}).concat({ "text": "离开", "action": [{ "type": "playSound", "name": "取消" }, { "type": "break" }] });
			core.insertAction({ "type": "choices", "text": shop.text, "choices": choices });
		}

		/// 是否访问过某个快捷商店
		this.isShopVisited = function (id) {
			if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
			var shops = core.getFlag("__shops__");
			if (!shops[id]) shops[id] = {};
			return shops[id].visited;
		}

		/// 当前应当显示的快捷商店列表
		this.listShopIds = function () {
			return Object.keys(core.status.shops).filter(function (id) {
				return core.isShopVisited(id) || !core.status.shops[id].mustEnable;
			});
		}

		/// 是否能够打开某个商店
		this.canOpenShop = function (id) {
			if (this.isShopVisited(id)) return true;
			var shop = core.status.shops[id];
			if (shop.item || shop.commonEvent || shop.mustEnable) return false;
			return true;
		}

		/// 启用或禁用某个快捷商店
		this.setShopVisited = function (id, visited) {
			if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
			var shops = core.getFlag("__shops__");
			if (!shops[id]) shops[id] = {};
			if (visited) shops[id].visited = true;
			else delete shops[id].visited;
		}

		/// 能否使用快捷商店
		this.canUseQuickShop = function (id) {
			// 如果返回一个字符串，表示不能，字符串为不能使用的提示
			// 返回null代表可以使用

			// 检查当前楼层的canUseQuickShop选项是否为false
			if (core.status.thisMap.canUseQuickShop === false)
				return '当前楼层不能使用快捷商店。';
			return null;
		}

		var _shouldProcessKeyUp = true;

		/// 允许商店X键退出
		core.registerAction('keyUp', 'shops', function (keycode) {
			if (!core.status.lockControl || core.status.event.id != 'action') return false;
			if ((keycode == 13 || keycode == 32) && !_shouldProcessKeyUp) {
				_shouldProcessKeyUp = true;
				return true;
			}

			if (!core.hasFlag("@temp@shop") || core.status.event.data.type != 'choices') return false;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (keycode == 88 || keycode == 27) { // X, ESC
				core.actions._clickAction(core._HALF_WIDTH_ || core.__HALF_SIZE__, topIndex + choices.length - 1);
				return true;
			}
			return false;
		}, 60);

		/// 允许长按空格或回车连续执行操作
		core.registerAction('keyDown', 'shops', function (keycode) {
			if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
			if (core.status.event.data.type != 'choices') return false;
			core.status.onShopLongDown = true;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (keycode == 13 || keycode == 32) { // Space, Enter
				core.actions._clickAction(core._HALF_WIDTH_ || core.__HALF_SIZE__, topIndex + core.status.event.selection);
				_shouldProcessKeyUp = false;
				return true;
			}
			return false;
		}, 60);

		// 允许长按屏幕连续执行操作
		core.registerAction('longClick', 'shops', function (x, y, px, py) {
			if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
			if (core.status.event.data.type != 'choices') return false;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (Math.abs(x - (core._HALF_WIDTH_ || core.__HALF_SIZE__)) <= 2 && y >= topIndex && y < topIndex + choices.length) {
				core.actions._clickAction(x, y);
				return true;
			}
			return false;
		}, 60);
	},
    "removeMap": function () {
		// 高层塔砍层插件，删除后不会存入存档，不可浏览地图也不可飞到。
		// 推荐用法：
		// 对于超高层或分区域塔，当在1区时将2区以后的地图删除；1区结束时恢复2区，进二区时删除1区地图，以此类推
		// 这样可以大幅减少存档空间，以及加快存读档速度

		// 删除楼层
		// core.removeMaps("MT1", "MT300") 删除MT1~MT300之间的全部层
		// core.removeMaps("MT10") 只删除MT10层
		this.removeMaps = function (fromId, toId) {
			toId = toId || fromId;
			var fromIndex = core.floorIds.indexOf(fromId),
				toIndex = core.floorIds.indexOf(toId);
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			flags.__visited__ = flags.__visited__ || {};
			flags.__removed__ = flags.__removed__ || [];
			flags.__disabled__ = flags.__disabled__ || {};
			flags.__leaveLoc__ = flags.__leaveLoc__ || {};
			for (var i = fromIndex; i <= toIndex; ++i) {
				var floorId = core.floorIds[i];
				if (core.status.maps[floorId].deleted) continue;
				delete flags.__visited__[floorId];
				flags.__removed__.push(floorId);
				delete flags.__disabled__[floorId];
				delete flags.__leaveLoc__[floorId];
				(core.status.autoEvents || []).forEach(function (event) {
					if (event.floorId == floorId && event.currentFloor) {
						core.autoEventExecuting(event.symbol, false);
						core.autoEventExecuted(event.symbol, false);
					}
				});
				core.status.maps[floorId].deleted = true;
				core.status.maps[floorId].canFlyTo = false;
				core.status.maps[floorId].canFlyFrom = false;
				core.status.maps[floorId].cannotViewMap = true;
			}
		}

		// 恢复楼层
		// core.resumeMaps("MT1", "MT300") 恢复MT1~MT300之间的全部层
		// core.resumeMaps("MT10") 只恢复MT10层
		this.resumeMaps = function (fromId, toId) {
			toId = toId || fromId;
			var fromIndex = core.floorIds.indexOf(fromId),
				toIndex = core.floorIds.indexOf(toId);
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			flags.__removed__ = flags.__removed__ || [];
			for (var i = fromIndex; i <= toIndex; ++i) {
				var floorId = core.floorIds[i];
				if (!core.status.maps[floorId].deleted) continue;
				flags.__removed__ = flags.__removed__.filter(function (f) { return f != floorId; });
				core.status.maps[floorId] = core.loadFloor(floorId);
			}
		}

		// 分区砍层相关
		var inAnyPartition = function (floorId) {
			var inPartition = false;
			(core.floorPartitions || []).forEach(function (floor) {
				var fromIndex = core.floorIds.indexOf(floor[0]);
				var toIndex = core.floorIds.indexOf(floor[1]);
				var index = core.floorIds.indexOf(floorId);
				if (fromIndex < 0 || index < 0) return;
				if (toIndex < 0) toIndex = core.floorIds.length - 1;
				if (index >= fromIndex && index <= toIndex) inPartition = true;
			});
			return inPartition;
		}

		// 分区砍层
		this.autoRemoveMaps = function (floorId) {
			if (main.mode != 'play' || !inAnyPartition(floorId)) return;
			// 根据分区信息自动砍层与恢复
			(core.floorPartitions || []).forEach(function (floor) {
				var fromIndex = core.floorIds.indexOf(floor[0]);
				var toIndex = core.floorIds.indexOf(floor[1]);
				var index = core.floorIds.indexOf(floorId);
				if (fromIndex < 0 || index < 0) return;
				if (toIndex < 0) toIndex = core.floorIds.length - 1;
				if (index >= fromIndex && index <= toIndex) {
					core.resumeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				} else {
					core.removeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				}
			});
		}
	},
    "fiveLayers": function () {
		// 是否启用五图层（增加背景2层和前景2层） 将__enable置为true即会启用；启用后请保存后刷新编辑器
		// 背景层2将会覆盖背景层 被事件层覆盖 前景层2将会覆盖前景层
		// 另外 请注意加入两个新图层 会让大地图的性能降低一些
		// 插件作者：ad
		var __enable = false;
		if (!__enable) return;

		// 创建新图层
		function createCanvas (name, zIndex) {
			if (!name) return;
			var canvas = document.createElement('canvas');
			canvas.id = name;
			canvas.className = 'gameCanvas';
			// 编辑器模式下设置zIndex会导致加入的图层覆盖优先级过高
			if (main.mode != "editor") canvas.style.zIndex = zIndex || 0;
			// 将图层插入进游戏内容
			document.getElementById('gameDraw').appendChild(canvas);
			var ctx = canvas.getContext('2d');
			core.canvas[name] = ctx;
			canvas.width = core._PX_ || core.__PIXELS__;
			canvas.height = core._PY_ || core.__PIXELS__;
			return canvas;
		}

		var bg2Canvas = createCanvas('bg2', 20);
		var fg2Canvas = createCanvas('fg2', 63);
		// 大地图适配
		core.bigmap.canvas = ["bg2", "fg2", "bg", "event", "event2", "fg", "damage"];
		core.initStatus.bg2maps = {};
		core.initStatus.fg2maps = {};

		if (main.mode == 'editor') {
			/*插入编辑器的图层 不做此步新增图层无法在编辑器显示*/
			// 编辑器图层覆盖优先级 eui > efg > fg(前景层) > event2(48*32图块的事件层) > event(事件层) > bg(背景层)
			// 背景层2(bg2) 插入事件层(event)之前(即bg与event之间)
			document.getElementById('mapEdit').insertBefore(bg2Canvas, document.getElementById('event'));
			// 前景层2(fg2) 插入编辑器前景(efg)之前(即fg之后)
			document.getElementById('mapEdit').insertBefore(fg2Canvas, document.getElementById('ebm'));
			// 原本有三个图层 从4开始添加
			var num = 4;
			// 新增图层存入editor.dom中
			editor.dom.bg2c = core.canvas.bg2.canvas;
			editor.dom.bg2Ctx = core.canvas.bg2;
			editor.dom.fg2c = core.canvas.fg2.canvas;
			editor.dom.fg2Ctx = core.canvas.fg2;
			editor.dom.maps.push('bg2map', 'fg2map');
			editor.dom.canvas.push('bg2', 'fg2');

			// 创建编辑器上的按钮
			var createCanvasBtn = function (name) {
				// 电脑端创建按钮
				var input = document.createElement('input');
				// layerMod4/layerMod5
				var id = 'layerMod' + num++;
				// bg2map/fg2map
				var value = name + 'map';
				input.type = 'radio';
				input.name = 'layerMod';
				input.id = id;
				input.value = value;
				editor.dom[id] = input;
				input.onchange = function () {
					editor.uifunctions.setLayerMod(value);
				}
				return input;
			};

			var createCanvasBtn_mobile = function (name) {
				// 手机端往选择列表中添加子选项
				var input = document.createElement('option');
				var id = 'layerMod' + num++;
				var value = name + 'map';
				input.name = 'layerMod';
				input.value = value;
				editor.dom[id] = input;
				return input;
			};
			if (!editor.isMobile) {
				var input = createCanvasBtn('bg2');
				var input2 = createCanvasBtn('fg2');
				// 获取事件层及其父节点
				var child = document.getElementById('layerMod'),
					parent = child.parentNode;
				// 背景层2插入事件层前
				parent.insertBefore(input, child);
				// 不能直接更改背景层2的innerText 所以创建文本节点
				var txt = document.createTextNode('bg2');
				// 插入事件层前(即新插入的背景层2前)
				parent.insertBefore(txt, child);
				// 向最后插入前景层2(即插入前景层后)
				parent.appendChild(input2);
				var txt2 = document.createTextNode('fg2');
				parent.appendChild(txt2);
				parent.childNodes[2].replaceWith("bg");
				parent.childNodes[6].replaceWith("事件");
				parent.childNodes[8].replaceWith("fg");
			} else {
				var input = createCanvasBtn_mobile('bg2');
				var input2 = createCanvasBtn_mobile('fg2');
				// 手机端因为是选项 所以可以直接改innerText
				input.innerText = '背景层2';
				input2.innerText = '前景层2';
				var parent = document.getElementById('layerMod');
				parent.insertBefore(input, parent.children[1]);
				parent.appendChild(input2);
			}
		}

		var _loadFloor_doNotCopy = core.maps._loadFloor_doNotCopy;
		core.maps._loadFloor_doNotCopy = function () {
			return ["bg2map", "fg2map"].concat(_loadFloor_doNotCopy());
		}
		////// 绘制背景和前景层 //////
		core.maps._drawBg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
			config.ctx = cacheCtx;
			core.maps._drawBg_drawBackground(floorId, config);
			// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制背景图块；后绘制的覆盖先绘制的。
			core.maps._drawFloorImages(floorId, config.ctx, 'bg', null, null, config.onMap);
			core.maps._drawBgFgMap(floorId, 'bg', config);
			if (config.onMap) {
				core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
				core.clearMap('bg2');
				core.clearMap(cacheCtx);
			}
			core.maps._drawBgFgMap(floorId, 'bg2', config);
			if (config.onMap) core.drawImage('bg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			config.ctx = toDrawCtx;
		}
		core.maps._drawFg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
			config.ctx = cacheCtx;
			// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制前景图块；后绘制的覆盖先绘制的。
			core.maps._drawFloorImages(floorId, config.ctx, 'fg', null, null, config.onMap);
			core.maps._drawBgFgMap(floorId, 'fg', config);
			if (config.onMap) {
				core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
				core.clearMap('fg2');
				core.clearMap(cacheCtx);
			}
			core.maps._drawBgFgMap(floorId, 'fg2', config);
			if (config.onMap) core.drawImage('fg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			config.ctx = toDrawCtx;
		}
		////// 移动判定 //////
		core.maps._generateMovableArray_arrays = function (floorId) {
			return {
				bgArray: this.getBgMapArray(floorId),
				fgArray: this.getFgMapArray(floorId),
				eventArray: this.getMapArray(floorId),
				bg2Array: this._getBgFgMapArray('bg2', floorId),
				fg2Array: this._getBgFgMapArray('fg2', floorId)
			};
		}
	},
    "itemShop": function () {
		// 道具商店相关的插件
		// 可在全塔属性-全局商店中使用「道具商店」事件块进行编辑（如果找不到可以在入口方块中找）

		var shopId = null; // 当前商店ID
		var type = 0; // 当前正在选中的类型，0买入1卖出
		var selectItem = 0; // 当前正在选中的道具
		var selectCount = 0; // 当前已经选中的数量
		var page = 0;
		var totalPage = 0;
		var totalMoney = 0;
		var list = [];
		var shopInfo = null; // 商店信息
		var choices = []; // 商店选项
		var use = 'money';
		var useText = '金币';

		var bigFont = core.ui._buildFont(20, false),
			middleFont = core.ui._buildFont(18, false);

		this._drawItemShop = function () {
			// 绘制道具商店

			// Step 1: 背景和固定的几个文字
			core.ui._createUIEvent();
			core.clearMap('uievent');
			core.ui.clearUIEventSelector();
			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'top');
			core.fillRect('uievent', 0, 0, 416, 416, 'black');
			core.drawWindowSkin('winskin.png', 'uievent', 0, 0, 416, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 0, 56, 312, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 0, 112, 312, 304);
			core.drawWindowSkin('winskin.png', 'uievent', 312, 56, 104, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 312, 112, 104, 304);
			core.setFillStyle('uievent', 'white');
			core.setStrokeStyle('uievent', 'white');
			core.fillText("uievent", "购买", 32, 74, 'white', bigFont);
			core.fillText("uievent", "卖出", 132, 74);
			core.fillText("uievent", "离开", 232, 74);
			core.fillText("uievent", "当前" + useText, 324, 66, null, middleFont);
			core.setTextAlign("uievent", "right");
			core.fillText("uievent", core.formatBigNumber(core.status.hero[use]), 405, 89);
			core.setTextAlign("uievent", "left");
			core.ui.drawUIEventSelector(1, "winskin.png", 22 + 100 * type, 66, 60, 33);
			if (selectItem != null) {
				core.setTextAlign('uievent', 'center');
				core.fillText("uievent", type == 0 ? "买入个数" : "卖出个数", 364, 320, null, bigFont);
				core.fillText("uievent", "<   " + selectCount + "   >", 364, 350);
				core.fillText("uievent", "确定", 364, 380);
			}

			// Step 2：获得列表并展示
			list = choices.filter(function (one) {
				if (one.condition != null && one.condition != '') {
					try { if (!core.calValue(one.condition)) return false; } catch (e) { }
				}
				return (type == 0 && one.money != null) || (type == 1 && one.sell != null);
			});
			var per_page = 6;
			totalPage = Math.ceil(list.length / per_page);
			page = Math.floor((selectItem || 0) / per_page) + 1;

			// 绘制分页
			if (totalPage > 1) {
				var half = 156;
				core.setTextAlign('uievent', 'center');
				core.fillText('uievent', page + " / " + totalPage, half, 388, null, middleFont);
				if (page > 1) core.fillText('uievent', '上一页', half - 80, 388);
				if (page < totalPage) core.fillText('uievent', '下一页', half + 80, 388);
			}
			core.setTextAlign('uievent', 'left');

			// 绘制每一项
			var start = (page - 1) * per_page;
			for (var i = 0; i < per_page; ++i) {
				var curr = start + i;
				if (curr >= list.length) break;
				var item = list[curr];
				core.drawIcon('uievent', item.id, 10, 125 + i * 40);
				core.setTextAlign('uievent', 'left');
				core.fillText('uievent', core.material.items[item.id].name, 50, 132 + i * 40, null, bigFont);
				core.setTextAlign('uievent', 'right');
				core.fillText('uievent', (type == 0 ? core.calValue(item.money) : core.calValue(item.sell)) + useText + "/个", 300, 133 + i * 40, null, middleFont);
				core.setTextAlign("uievent", "left");
				if (curr == selectItem) {
					// 绘制描述，文字自动放缩
					var text = core.material.items[item.id].text || "该道具暂无描述";
					try { text = core.replaceText(text); } catch (e) { }
					for (var fontSize = 20; fontSize >= 8; fontSize -= 2) {
						var config = { left: 10, fontSize: fontSize, maxWidth: 403 };
						var height = core.getTextContentHeight(text, config);
						if (height <= 50) {
							config.top = (56 - height) / 2;
							core.drawTextContent("uievent", text, config);
							break;
						}
					}
					core.ui.drawUIEventSelector(2, "winskin.png", 8, 120 + i * 40, 295, 40);
					if (type == 0 && item.number != null) {
						core.fillText("uievent", "存货", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", item.number, 406, 132, null, null, 40);
					} else if (type == 1) {
						core.fillText("uievent", "数量", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", core.itemCount(item.id), 406, 132, null, null, 40);
					}
					core.setTextAlign("uievent", "left");
					core.fillText("uievent", "预计" + useText, 324, 250);
					core.setTextAlign("uievent", "right");
					totalMoney = selectCount * (type == 0 ? core.calValue(item.money) : core.calValue(item.sell));
					core.fillText("uievent", core.formatBigNumber(totalMoney), 405, 280);

					core.setTextAlign("uievent", "left");
					core.fillText("uievent", type == 0 ? "已购次数" : "已卖次数", 324, 170);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", (type == 0 ? item.money_count : item.sell_count) || 0, 405, 200);
				}
			}

			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'alphabetic');
		}

		var _add = function (item, delta) {
			if (item == null) return;
			selectCount = core.clamp(
				selectCount + delta, 0,
				Math.min(type == 0 ? Math.floor(core.status.hero[use] / core.calValue(item.money)) : core.itemCount(item.id),
					type == 0 && item.number != null ? item.number : Number.MAX_SAFE_INTEGER)
			);
		}

		var _confirm = function (item) {
			if (item == null || selectCount == 0) return;
			if (type == 0) {
				core.status.hero[use] -= totalMoney;
				core.getItem(item.id, selectCount);
				core.stopSound();
				core.playSound('确定');
				if (item.number != null) item.number -= selectCount;
				item.money_count = (item.money_count || 0) + selectCount;
			} else {
				core.status.hero[use] += totalMoney;
				core.removeItem(item.id, selectCount);
				core.playSound('确定');
				core.drawTip("成功卖出" + selectCount + "个" + core.material.items[item.id].name, item.id);
				if (item.number != null) item.number += selectCount;
				item.sell_count = (item.sell_count || 0) + selectCount;
			}
			selectCount = 0;
		}

		this._performItemShopKeyBoard = function (keycode) {
			var item = list[selectItem] || null;
			// 键盘操作
			switch (keycode) {
				case 38: // up
					if (selectItem == null) break;
					if (selectItem == 0) selectItem = null;
					else selectItem--;
					selectCount = 0;
					break;
				case 37: // left
					if (selectItem == null) {
						if (type > 0) type--;
						break;
					}
					_add(item, -1);
					break;
				case 39: // right
					if (selectItem == null) {
						if (type < 2) type++;
						break;
					}
					_add(item, 1);
					break;
				case 40: // down
					if (selectItem == null) {
						if (list.length > 0) selectItem = 0;
						break;
					}
					if (list.length == 0) break;
					selectItem = Math.min(selectItem + 1, list.length - 1);
					selectCount = 0;
					break;
				case 13:
				case 32: // Enter/Space
					if (selectItem == null) {
						if (type == 2)
							core.insertAction({ "type": "break" });
						else if (list.length > 0)
							selectItem = 0;
						break;
					}
					_confirm(item);
					break;
				case 27: // ESC
					if (selectItem == null) {
						core.insertAction({ "type": "break" });
						break;
					}
					selectItem = null;
					break;
			}
		}

		this._performItemShopClick = function (px, py) {
			var item = list[selectItem] || null;
			// 鼠标操作
			if (px >= 22 && px <= 82 && py >= 71 && py <= 102) {
				// 买
				if (type != 0) {
					type = 0;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 122 && px <= 182 && py >= 71 && py <= 102) {
				// 卖
				if (type != 1) {
					type = 1;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 222 && px <= 282 && py >= 71 && py <= 102) // 离开
				return core.insertAction({ "type": "break" });
			// < >
			if (px >= 318 && px <= 341 && py >= 348 && py <= 376)
				return _add(item, -1);
			if (px >= 388 && px <= 416 && py >= 348 && py <= 376)
				return _add(item, 1);
			// 确定
			if (px >= 341 && px <= 387 && py >= 380 && py <= 407)
				return _confirm(item);

			// 上一页/下一页
			if (px >= 45 && px <= 105 && py >= 388) {
				if (page > 1) {
					selectItem -= 6;
					selectCount = 0;
				}
				return;
			}
			if (px >= 208 && px <= 268 && py >= 388) {
				if (page < totalPage) {
					selectItem = Math.min(selectItem + 6, list.length - 1);
					selectCount = 0;
				}
				return;
			}

			// 实际区域
			if (px >= 9 && px <= 300 && py >= 120 && py < 360) {
				if (list.length == 0) return;
				var index = parseInt((py - 120) / 40);
				var newItem = 6 * (page - 1) + index;
				if (newItem >= list.length) newItem = list.length - 1;
				if (newItem != selectItem) {
					selectItem = newItem;
					selectCount = 0;
				}
				return;
			}
		}

		this._performItemShopAction = function () {
			if (flags.type == 0) return this._performItemShopKeyBoard(flags.keycode);
			else return this._performItemShopClick(flags.px, flags.py);
		}

		this.openItemShop = function (itemShopId) {
			shopId = itemShopId;
			type = 0;
			page = 0;
			selectItem = null;
			selectCount = 0;
			core.isShopVisited(itemShopId);
			shopInfo = flags.__shops__[shopId];
			if (shopInfo.choices == null) shopInfo.choices = core.clone(core.status.shops[shopId].choices);
			choices = shopInfo.choices;
			use = core.status.shops[shopId].use;
			if (use != 'exp') use = 'money';
			useText = use == 'money' ? '金币' : '经验';

			core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.plugin._drawItemShop(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.plugin._performItemShopAction(); }" }
				]
			},
			{
				"type": "function",
				"function": "function () { core.deleteCanvas('uievent'); core.ui.clearUIEventSelector(); }"
			}
			]);
		}

	},
    "enemyLevel": function () {
	// 此插件将提供怪物手册中的怪物境界显示
	// 使用此插件需要先给每个怪物定义境界，方法如下：
	// 点击怪物的【配置表格】，找到“【怪物】相关的表格配置”，然后在【名称】仿照增加境界定义：
	/*
	 "level": {
		  "_leaf": true,
		  "_type": "textarea",
		  "_string": true,
		  "_data": "境界"
	 },
	 */
	// 然后保存刷新，可以看到怪物的属性定义中出现了【境界】。再开启本插件即可。

	// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。

	var __enable = true;
	if (!__enable) return;

	// 这里定义每个境界的显示颜色；可以写'red', '#RRGGBB' 或者[r,g,b,a]四元数组
	var levelToColors = {
		"萌新一阶": "red",
		"萌新二阶": "#FF0000",
		"萌新三阶": [255, 0, 0, 1],
	};

	// 复写 _drawBook_drawName
	var originDrawBook = core.ui._drawBook_drawName;
	core.ui._drawBook_drawName = function (index, enemy, top, left, width) {
		// 如果没有境界，则直接调用原始代码绘制
		if (!enemy.type) return originDrawBook.call(core.ui, index, enemy, top, left, width);
		// 存在境界，则额外进行绘制
		core.setTextAlign('ui', 'center');
		if (enemy.specialText.length == 0) {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 27, '#DDDDDD', this._buildFont(17, true));
			core.fillText('ui', enemy.type, left + width / 2,
				top + 51, core.arrayToRGBA(levelToColors[enemy.type] || '#DDDDDD'), this._buildFont(14, true));
		} else {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 20, '#DDDDDD', this._buildFont(17, true), width);
			switch (enemy.specialText.length) {
			case 1:
				core.fillText('ui', enemy.specialText[0], left + width / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'),
					this._buildFont(14, true), width);
				break;
			case 2:
				// Step 1: 计算字体
				var text = enemy.specialText[0] + "  " + enemy.specialText[1];
				core.setFontForMaxWidth('ui', text, width, this._buildFont(14, true));
				// Step 2: 计算总宽度
				var totalWidth = core.calWidth('ui', text);
				var leftWidth = core.calWidth('ui', enemy.specialText[0]);
				var rightWidth = core.calWidth('ui', enemy.specialText[1]);
				// Step 3: 绘制
				core.fillText('ui', enemy.specialText[0], left + (width + leftWidth - totalWidth) / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'));
				core.fillText('ui', enemy.specialText[1], left + (width + totalWidth - rightWidth) / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[1] || '#FF6A6A'));
				break;
			default:
				core.fillText('ui', '多属性...', left + width / 2,
					top + 38, '#FF6A6A', this._buildFont(14, true), width);
			}
			core.fillText('ui', enemy.type, left + width / 2,
				top + 56, core.arrayToRGBA(levelToColors[enemy.type] || '#DDDDDD'), this._buildFont(14, true));
		}
	}

	// 也可以复写其他的属性颜色如怪物攻防等，具体参见下面的例子的注释部分
	core.ui._drawBook_drawContent = function (index, enemy, top, left) {
		var width = core._PX_ - left; // 9 : 8 : 8 划分三列
		core.ui._drawBook_drawRow1(index, enemy, top, left, width, top + 20);
		core.ui._drawBook_drawRow2(index, enemy, top, left, width, top + 38);
		core.ui._drawBook_drawRow3(index, enemy, top, left, width, top + 56);
	}
	core.ui._drawBook_drawRow1 = function (index, enemy, top, left, width, position) {
		// 绘制第一行
		core.setTextAlign('ui', 'left');
		var b13 = this._buildFont(13, true),
			f13 = this._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 0.35,
			col3 = left + width * 0.65,
			col4 = left + width * 0.95;
		core.fillText('ui', '生命', col1, position, [0, 255, 0, 1], f13);
		core.fillText('ui', core.formatBigNumber(enemy.hp || 0), col1 + 30, position, null, b13);
		core.fillText('ui', '黄金', col2, position, [255, 255, 0, 1], f13);
		core.fillText('ui', core.formatBigNumber(enemy.money || 0), col2 + 30, position, null, b13);
		core.fillText('ui', '经验', col3, position, [255, 0, 255, 1], f13);
		core.fillText('ui', core.formatBigNumber(enemy.exp || 0), col3 + 30, position, null, b13);
	}

	core.ui._drawBook_drawRow2 = function (index, enemy, top, left, width, position) {
		// 绘制第二行
		core.setTextAlign('ui', 'left');
		var b13 = core.ui._buildFont(13, true),
			f13 = core.ui._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 0.25,
			col3 = left + width * 0.55,
			col4 = left + width * 0.75;
		// 获得第二行绘制的内容
		var second_line = [];
		if (core.plugin.Army.includes(enemy.type)) {
			core.fillText('ui', '穿甲', col1, position, [244, 164, 96, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.ap || 0), col1 + 30, position, null, b13);
			core.fillText('ui', '装甲', col2 + 30, position, [244, 164, 96, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.arm || 0), col2 + 60, position, null, b13);
		}
		if (core.plugin.Navy.includes(enemy.type)) {
			core.fillText('ui', '鱼雷管', col1, position, [0, 191, 255, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.tpn || 0), col1 + 45, position, null, b13);
			core.fillText('ui', '雷击', col2 + 30, position, [0, 191, 255, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.top || 0), col2 + 60, position, null, b13);
		}
		if (core.plugin.Luftwaffe.includes(enemy.type)) {
			core.fillText('ui', '雷击', col1, position, [255, 255, 255, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.top || 0), col1 + 30, position, null, b13);
			core.fillText('ui', '空袭', col2 + 10, position, [255, 255, 255, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.bom || 0), col2 + 40, position, null, b13);
			core.fillText('ui', '鱼雷', col3, position, [255, 255, 255, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.tpn || 0), col3 + 30, position, null, b13);
		}

		var damage_offset = col4 + 15;

		// 忽略第三列，直接绘制伤害
		this._drawBook_drawDamage(index, enemy, damage_offset, position);
	}

	core.ui._drawBook_drawRow3 = function (index, enemy, top, left, width, position) {
		// 绘制第三行
		core.setTextAlign('ui', 'left');
		var b13 = core.ui._buildFont(13, true),
			f13 = core.ui._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 0.35,
			col3 = left + width * 0.65,
			col4 = left + width * 0.95;
		core.fillText('ui', '攻击', col1, position, [255, 0, 0, 1], f13);
		core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col1 + 30, position, null, b13);
		core.fillText('ui', '临界', col2, position, '#DDDDDD', f13);
		core.fillText('ui', core.formatBigNumber(enemy.critical || 0), col2 + 30, position, null, b13);
		core.fillText('ui', '回合', col3, position, null, f13);
		core.fillText('ui', core.getDamageInfo(enemy)?.turn, col3 + 30, position, null, b13);
	}
	core.ui._drawBook_drawBackground = function () {
		core.setAlpha('ui', 1);
		core.setFillStyle('ui', core.material.groundPattern);
		core.fillRect('ui', 0, 0, core._PY_, core._PY_);
		core.setAlpha('ui', 0.6);
		core.setFillStyle('ui', '#000000');
		core.fillRect('ui', 0, 0, core._PY_, core._PY_);
	}
	core.ui._drawBook_drawOne = function (floorId, index, enemy, pageinfo, selected) {
		var top = pageinfo.per_height * index + pageinfo.padding_top; // 最上面margin默认是12px
		enemy.floorId = floorId;
		// 横向规划：
		// 22 + 42 = 64 是头像框
		core.ui._drawBook_drawBox(index, enemy, top, pageinfo);
		var left = 64,
			total_width = core._PY_ - left;
		var name_width = total_width * 10 / 35;
		core.ui._drawBook_drawName(index, enemy, top, left, name_width);
		core.ui._drawBook_drawContent(index, enemy, top, left + name_width);
		if (selected)
			core.strokeRoundRect('ui', 10, top + 1, core._PY_ - 10 * 2, pageinfo.per_height, 10, core.status.globalAttribute.selectColor);
	}
	core.ui._drawBookDetail_getTexts = function (enemy, floorId, texts) {
		// --- 原始数值
		core.ui._drawBookDetail_origin(enemy, texts);
		// --- 模仿临界计算器
		core.ui._drawBookDetail_mofang(enemy, texts);
		// --- 吸血怪最低生命值
		core.ui._drawBookDetail_vampire(enemy, floorId, texts);
		// --- 仇恨伤害
		core.ui._drawBookDetail_hatred(enemy, texts);
		// --- 战斗回合数，临界表
		// this._drawBookDetail_turnAndCriticals(enemy, floorId, texts);
	}
	core.control._updateDamage_damage = function (floorId, onMap) {
		core.status.damage.data = [];
		if (!core.flags.displayEnemyDamage && !core.flags.displayExtraDamage) return;
		core.extractBlocks(floorId);
		core.status.maps[floorId].blocks.forEach(function (block) {
			var x = block.x,
				y = block.y;
			// v2优化，只绘制范围内的部分
			if (onMap && core.bigmap.v2) {
				if (x < core.bigmap.posX - core.bigmap.extend || x > core.bigmap.posX + core._WIDTH_ + core.bigmap.extend ||
					y < core.bigmap.posY - core.bigmap.extend || y > core.bigmap.posY + core._HEIGHT_ + core.bigmap.extend) {
					return;
				}
			}
			if (!block.disable && block.event.cls.indexOf('enemy') == 0 && block.event.displayDamage !== false) {
				if (core.flags.displayEnemyDamage) {
					var damageString = core.enemys.getDamageString(block.event.id, x, y, floorId);
					core.status.damage.data.push({ text: damageString.damage, px: 32 * x + 1, py: 32 * (y + 1) - 1, color: damageString.color });
				}
				if (core.flags.displayCritical) {
					var info = core.getEnemyInfo(block.event.id, hero, x, y, floorId);
					var turn = core.getDamageInfo(block.event.id, core.status.hero, x, y, floorId)?.turn;
					core.status.damage.data.push({ text: turn, px: 32 * x + 1, py: 32 * (y + 1) - 11, color: '#FFFFFF' });
					if (flags.cri === true && turn > 0) {
						var critical = core.plugin.getCritical(block.event.id, hero, x, y, floorId);
						core.status.damage.data.push({ text: critical, px: 32 * x + 1, py: 32 * (y + 1) - 21, color: '#FFFFFF' });
					}
				}
			}
		});
	}
	this.getCritical = function (enemyId, hero, x, y, floorId) {
		var enemyInfo = core.getEnemyInfo(enemyId, hero, x, y, floorId);
		var damageInfo = core.getDamageInfo(enemyId, core.status.hero, x, y, floorId);
		var low = 1,
			high = enemyInfo.hp,
			mid;
		do {
			mid = Math.floor((low + high) / 2);
			var newInfo = core.getDamageInfo(enemyId, { 'atk': core.status.hero.atk + mid }, x, y, floorId);
			if (newInfo?.turn >= damageInfo?.turn) low = mid + 1;
			else high = mid;
		} while (low < high);
		return low;
	}
},
    "multiHeros": function () {
		// 多角色插件
		// Step 1: 启用本插件
		// Step 2: 定义每个新的角色各项初始数据（参见下方注释）
		// Step 3: 在游戏中的任何地方都可以调用 `core.changeHero()` 进行切换；也可以 `core.changeHero(1)` 来切换到某个具体的角色上

		// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
		var __enable = false;
		if (!__enable) return;

		// 在这里定义全部的新角色属性
		// 请注意，在这里定义的内容不会多角色共用，在切换时会进行恢复。
		// 你也可以自行新增或删除，比如不共用金币则可以加上"money"的初始化，不共用道具则可以加上"items"的初始化，
		// 多角色共用hp的话则删除hp，等等。总之，不共用的属性都在这里进行定义就好。
		var hero1 = {
			"floorId": "MT0", // 该角色初始楼层ID；如果共用楼层可以注释此项
			"image": "brave.png", // 角色的行走图名称；此项必填不然会报错
			"name": "1号角色",
			"lv": 1,
			"hp": 10000, // 如果HP共用可注释此项
			"atk": 1000,
			"def": 1000,
			"mdef": 0,
			// "money": 0, // 如果要不共用金币则取消此项注释
			// "exp": 0, // 如果要不共用经验则取消此项注释
			"loc": { "x": 0, "y": 0, "direction": "up" }, // 该角色初始位置；如果共用位置可注释此项
			"items": {
				"tools": {}, // 如果共用消耗道具（含钥匙）则可注释此项
				// "constants": {}, // 如果不共用永久道具（如手册）可取消注释此项
				"equips": {}, // 如果共用在背包的装备可注释此项
			},
			"equipment": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题
		};
		// 也可以类似新增其他角色
		// 新增的角色，各项属性共用与不共用的选择必须和上面完全相同，否则可能出现问题。
		// var hero2 = { ...

		var heroCount = 2; // 包含默认角色在内总共多少个角色，该值需手动修改。

		this.initHeros = function () {
			core.setFlag("hero1", core.clone(hero1)); // 将属性值存到变量中
			// core.setFlag("hero2", core.clone(hero2)); // 更多的角色也存入变量中；每个定义的角色都需要新增一行

			// 检测是否存在装备
			if (hero1.equipment) {
				if (!hero1.items || !hero1.items.equips) {
					alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
				}
				// 存99号套装为全空
				var saveEquips = core.getFlag("saveEquips", []);
				saveEquips[99] = [];
				core.setFlag("saveEquips", saveEquips);
			} else {
				if (hero1.items && hero1.items.equips) {
					alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
				}
			}
		}

		// 在游戏开始注入initHeros
		var _startGame_setHard = core.events._startGame_setHard;
		core.events._startGame_setHard = function () {
			_startGame_setHard.call(core.events);
			core.initHeros();
		}

		// 切换角色
		// 可以使用 core.changeHero() 来切换到下一个角色
		// 也可以 core.changeHero(1) 来切换到某个角色（默认角色为0）
		this.changeHero = function (toHeroId) {
			var currHeroId = core.getFlag("heroId", 0); // 获得当前角色ID
			if (toHeroId == null) {
				toHeroId = (currHeroId + 1) % heroCount;
			}
			if (currHeroId == toHeroId) return;

			var saveList = Object.keys(hero1);

			// 保存当前内容
			var toSave = {};
			// 暂时干掉 drawTip 和 音效，避免切装时的提示
			var _drawTip = core.ui.drawTip;
			core.ui.drawTip = function () { };
			var _playSound = core.control.playSound;
			core.control.playSound = function () { }
			// 记录当前录像，因为可能存在换装问题
			core.clearRouteFolding();
			var routeLength = core.status.route.length;
			// 优先判定装备
			if (hero1.equipment) {
				core.items.quickSaveEquip(100 + currHeroId);
				core.items.quickLoadEquip(99);
			}

			saveList.forEach(function (name) {
				if (name == 'floorId') toSave[name] = core.status.floorId; // 楼层单独设置
				else if (name == 'items') {
					toSave.items = core.clone(core.status.hero.items);
					Object.keys(toSave.items).forEach(function (one) {
						if (!hero1.items[one]) delete toSave.items[one];
					});
				} else toSave[name] = core.clone(core.status.hero[name]); // 使用core.clone()来创建新对象
			});

			core.setFlag("hero" + currHeroId, toSave); // 将当前角色信息进行保存
			var data = core.getFlag("hero" + toHeroId); // 获得要切换的角色保存内容

			// 设置角色的属性值
			saveList.forEach(function (name) {
				if (name == "floorId");
				else if (name == "items") {
					Object.keys(core.status.hero.items).forEach(function (one) {
						if (data.items[one]) core.status.hero.items[one] = core.clone(data.items[one]);
					});
				} else {
					core.status.hero[name] = core.clone(data[name]);
				}
			});
			// 最后装上装备
			if (hero1.equipment) {
				core.items.quickLoadEquip(100 + toHeroId);
			}

			core.ui.drawTip = _drawTip;
			core.control.playSound = _playSound;
			core.status.route = core.status.route.slice(0, routeLength);
			core.control._bindRoutePush();

			// 插入事件：改变角色行走图并进行楼层切换
			var toFloorId = data.floorId || core.status.floorId;
			var toLoc = data.loc || core.status.hero.loc;
			core.insertAction([
				{ "type": "setHeroIcon", "name": data.image || "hero.png" }, // 改变行走图
				// 同层则用changePos，不同层则用changeFloor；这是为了避免共用楼层造成触发eachArrive
				toFloorId != core.status.floorId ? {
					"type": "changeFloor",
					"floorId": toFloorId,
					"loc": [toLoc.x, toLoc.y],
					"direction": toLoc.direction,
					"time": 0 // 可以在这里设置切换时间
				} : { "type": "changePos", "loc": [toLoc.x, toLoc.y], "direction": toLoc.direction }
				// 你还可以在这里执行其他事件，比如增加或取消跟随效果
			]);
			core.setFlag("heroId", toHeroId); // 保存切换到的角色ID
		}
	},
    "heroFourFrames": function () {
		// 样板的勇士/跟随者移动时只使用2、4两帧，观感较差。本插件可以将四帧全用上。

		// 是否启用本插件
		var __enable = true;
		if (!__enable) return;

		["up", "down", "left", "right"].forEach(function (one) {
			// 指定中间帧动画
			core.material.icons.hero[one].midFoot = 2;
		});

		var heroMoving = function (timestamp) {
			if (core.status.heroMoving <= 0) return;
			if (timestamp - core.animateFrame.moveTime > core.values.moveSpeed) {
				core.animateFrame.leftLeg++;
				core.animateFrame.moveTime = timestamp;
			}
			core.drawHero(['stop', 'leftFoot', 'midFoot', 'rightFoot'][core.animateFrame.leftLeg % 4], 4 * core.status.heroMoving);
		}
		core.registerAnimationFrame('heroMoving', true, heroMoving);

		core.events._eventMoveHero_moving = function (step, moveSteps) {
			var curr = moveSteps[0];
			var direction = curr[0], x = core.getHeroLoc('x'), y = core.getHeroLoc('y');
			// ------ 前进/后退
			var o = direction == 'backward' ? -1 : 1;
			if (direction == 'forward' || direction == 'backward') direction = core.getHeroLoc('direction');
			var faceDirection = direction;
			if (direction == 'leftup' || direction == 'leftdown') faceDirection = 'left';
			if (direction == 'rightup' || direction == 'rightdown') faceDirection = 'right';
			core.setHeroLoc('direction', direction);
			if (curr[1] <= 0) {
				core.setHeroLoc('direction', faceDirection);
				moveSteps.shift();
				return true;
			}
			if (step <= 4) core.drawHero('stop', 4 * o * step);
			else if (step <= 8) core.drawHero('leftFoot', 4 * o * step);
			else if (step <= 12) core.drawHero('midFoot', 4 * o * (step - 8));
			else if (step <= 16) core.drawHero('rightFoot', 4 * o * (step - 8)); // if (step == 8) {
			if (step == 8 || step == 16) {
				core.setHeroLoc('x', x + o * core.utils.scan2[direction].x, true);
				core.setHeroLoc('y', y + o * core.utils.scan2[direction].y, true);
				core.updateFollowers();
				curr[1]--;
				if (curr[1] <= 0) moveSteps.shift();
				core.setHeroLoc('direction', faceDirection);
				return step == 16;
			}
			return false;
		}
	},
    "routeFixing": function () {
		// 是否开启本插件，true 表示启用，false 表示禁用。
		var __enable = true;
		if (!__enable) return;
		/*
		 使用说明：启用本插件后，录像回放时您可以用数字键1或6分别切换到原速或24倍速，
		 暂停播放时按数字键7（电脑按N）可以单步播放。（手机端可以点击难度单词切换出数字键）
		 数字键2-5可以进行录像自助精修，具体描述见下（实际弹窗请求您输入时不要带有任何空格）：
		 
		 up down left right 勇士向某个方向「行走一步或撞击」
		 item:ID 使用某件道具，如 item:bomb 表示使用炸弹
		 unEquip:n 卸掉身上第(n+1)件装备（n从0开始），如 unEquip:1 默认表示卸掉盾牌
		 equip:ID 穿上某件装备，如 equip:sword1 表示装上铁剑
		 saveEquip:n 将身上的当前套装保存到第n套快捷套装（n从0开始）
		 loadEquip:n 快捷换上之前保存好的第n套套装
		 fly:ID 使用楼传飞到某一层，如 fly:MT10 表示飞到主塔10层
		 choices:none 确认框/选择项「超时」（作者未设置超时时间则此项视为缺失）
		 choices:n 确认框/选择项选择第(n+1)项（选择项n从0开始，确认框n为0表示「确定」，1表示「取消」）
		 选择项n为负数时表示选择倒数第 -n 项，如 -1 表示最后一项（V2.8.2起标准全局商店的「离开」项）
		 此项缺失的话，确认框将选择作者指定的默认项（初始光标位置），选择项将弹窗请求补选（后台录像验证中选最后一项，可以复写函数来修改）
		 shop:ID 打开某个全局商店，如 shop:itemShop 表示打开道具商店。因此连载塔千万不要中途修改商店ID！
		 turn 单击勇士（Z键）转身，core.turnHero() 会产生此项，因此通过事件等方式强制让勇士转向应该用 core.setHeroLoc()
		 turn:dir 勇士转向某个方向，dir 可以为 up down left right（此项一般是读取自动存档产生的，属于样板的不良特性，请勿滥用）
		 getNext 轻按获得身边道具，优先获得面前的（面前没有则按上下左右顺序依次获得），身边如果没有道具则此项会被跳过
		 input:none “等待用户操作事件”中超时（作者未设置超时时间则此项会导致报错）
		 input:xxx 可能表示“等待用户操作事件”的一个操作（如按键操作将直接记录 input:keycode ），
		 也可能表示一个“接受用户输入数字”的输入，后者的情况下 xxx 为输入的整数。此项缺失的话前者将直接报错，后者将用0代替（后者现在支持负数了）
		 input2:xxx 可能表示“读取全局存储（core.getGlobal）”读取到的值，也可能表示一个“接受用户输入文本”的输入，
		 两种情况下 xxx 都为 base64 编码。此项缺失的话前者将重新现场读取，后者将用空字符串代替
		 no 走到可穿透的楼梯上不触发楼层切换事件，通过本插件可以让勇士停在旁边没有障碍物的楼梯上哦～
		 move:x:y 尝试瞬移到 [x,y] 点（不改变朝向），该点甚至可以和勇士相邻或者位于视野外
		 key:n 松开键值为n的键，如 key:49 表示松开大键盘数字键1，默认会触发使用破墙镐
		 click:n:px:py 点击自绘状态栏，n为0表示横屏1表示竖屏，[px,py] 为点击的像素坐标
		 random:n 生成了随机数n，即 core.rand2(num) 的返回结果，n必须在 [0,num-1] 范围，num必须为正整数。此项缺失将导致现场重新随机生成数值，可能导致回放结果不一致！
		 作者自定义的新项（一般为js对象，可以先JSON.stringify()再core.encodeBase64()得到纯英文数字的内容）需要用(半角圆括弧)括起来。
		 
		 当您使用数字键5将一些项追加到即将播放内容的开头时，请注意要逆序逐项追加，或者每追加一项就按下数字键7或字母键N单步播放一步。
		 但是【input input2 random choices】是被动读取的，单步播放如果触发了相应的事件就会连续读取，这时候只能提前逐项追加好。
		 电脑端熟练以后推荐直接在控制台操作 core.status.route 和 core.status.replay.toReplay（后者录像回放时才有），配合 core.push() 和 core.unshift() 更加灵活自由哦！
		 */
		core.actions.registerAction('onkeyUp', '_sys_onkeyUp_replay', function (e) {
			if (this._checkReplaying()) {
				if (e.keyCode == 27) // ESCAPE
					core.stopReplay();
				else if (e.keyCode == 90) // Z
					core.speedDownReplay();
				else if (e.keyCode == 67) // C
					core.speedUpReplay();
				else if (e.keyCode == 32) // SPACE
					core.triggerReplay();
				else if (e.keyCode == 65) // A
					core.rewindReplay();
				else if (e.keyCode == 83) // S
					core.control._replay_SL();
				else if (e.keyCode == 88) // X
					core.control._replay_book();
				else if (e.keyCode == 33 || e.keyCode == 34) // PgUp/PgDn
					core.control._replay_viewMap();
				else if (e.keyCode == 78) // N
					core.stepReplay();
				else if (e.keyCode == 84) // T
					core.control._replay_toolbox();
				else if (e.keyCode == 81) // Q
					core.control._replay_equipbox();
				else if (e.keyCode == 66) // B
					core.ui._drawStatistics();
				else if (e.keyCode == 49 || e.keyCode == 54) // 1/6，原速/24倍速播放
					core.setReplaySpeed(e.keyCode == 49 ? 1 : 24);
				else if (e.keyCode > 49 && e.keyCode < 54) { // 2-5，录像精修
					switch (e.keyCode - 48) {
						case 2: // pop
							alert("您已移除已录制内容的最后一项：" + core.status.route.pop());
							break;
						case 3: // push
							core.utils.myprompt("请输入您要追加到已录制内容末尾的项：", "", function (value) {
								if (value != null) core.status.route.push(value);
							});
							break;
						case 4: // shift
							alert("您已移除即将播放内容的第一项：" + core.status.replay.toReplay.shift());
							break;
						case 5: // unshift
							core.utils.myprompt("请输入您要追加到即将播放内容开头的项：", "", function (value) {
								if (value != null) core.status.replay.toReplay.unshift(value);
							});
					}
				}
				return true;
			}
		}, 100);
	},
    "numpad": function () {
		// 样板自带的整数输入事件为白屏弹窗且可以误输入任意非法内容但不支持负整数，观感较差。本插件可以将其美化成仿RM样式，使其支持负整数同时带有音效
		// 另一方面，4399等第三方平台不允许使用包括 core.myprompt() 和 core.myconfirm() 在内的弹窗，因此也需要此插件来替代，不然类似生命魔杖的道具就不好实现了
		// 关于负整数输入，V2.8.2原生支持其录像的压缩和解压，只是默认的 core.events._action_input() 函数将负数取了绝对值，可以只复写下面的 core.isReplaying() 部分来取消

		// 是否启用本插件，false表示禁用，true表示启用
		var __enable = true;
		if (!__enable) return;

		core.events._action_input = function (data, x, y, prefix) { // 复写整数输入事件
			if (core.isReplaying()) { // 录像回放时，处理方式不变，但增加负整数支持
				core.events.__action_getInput(core.replaceText(data.text, prefix), false, function (value) {
					value = parseInt(value) || 0; // 去掉了取绝对值的步骤
					core.status.route.push("input:" + value);
					core.setFlag("input", value);
					core.doAction();
				});
			} else {
				// 正常游戏中，采用暂停录制的方式然后用事件流循环“绘制-等待-变量操作”三板斧实现（按照13*13适配的）。
				// 您可以自行修改循环内的内容来适配15*15或其他需求，或干脆作为公共事件编辑。
				core.insertAction([
					// 记录当前录像长度，下面的循环结束后裁剪。达到“暂停录制”的效果
					{ "type": "function", "function": "function(){flags['@temp@length']=core.status.route.length}" },
					{ "type": "setValue", "name": "flag:input", "value": "0" },
					{
						"type": "while",
						"condition": "true",
						"data": [
							{ "type": "drawBackground", "background": "winskin.png", "x": 16, "y": 16, "width": 384, "height": 384 },
							{ "type": "drawIcon", "id": "X10181", "x": 32, "y": 288 },
							{ "type": "drawIcon", "id": "X10185", "x": 64, "y": 288 },
							{ "type": "drawIcon", "id": "X10186", "x": 96, "y": 288 },
							{ "type": "drawIcon", "id": "X10187", "x": 128, "y": 288 },
							{ "type": "drawIcon", "id": "X10188", "x": 160, "y": 288 },
							{ "type": "drawIcon", "id": "X10189", "x": 192, "y": 288 },
							{ "type": "drawIcon", "id": "X10193", "x": 224, "y": 288 },
							{ "type": "drawIcon", "id": "X10194", "x": 256, "y": 288 },
							{ "type": "drawIcon", "id": "X10195", "x": 288, "y": 288 },
							{ "type": "drawIcon", "id": "X10196", "x": 320, "y": 288 },
							{ "type": "drawIcon", "id": "X10197", "x": 352, "y": 288 },
							{ "type": "drawIcon", "id": "X10286", "x": 32, "y": 352 },
							{ "type": "drawIcon", "id": "X10169", "x": 96, "y": 352 },
							{ "type": "drawIcon", "id": "X10232", "x": 128, "y": 352 },
							{ "type": "drawIcon", "id": "X10185", "x": 320, "y": 352 },
							{ "type": "drawIcon", "id": "X10242", "x": 352, "y": 352 },
							{ "type": "fillBoldText", "x": 48, "y": 256, "style": [255, 255, 255, 1], "font": "bold 32px Consolas", "text": "${flag:input}" },
							{ "type": "fillBoldText", "x": 32, "y": 48, "style": [255, 255, 255, 1], "font": "16px Consolas", "text": core.replaceText(data.text, prefix) },
							{
								"type": "wait",
								"forceChild": true,
								"data": [{
									"case": "keyboard",
									"keycode": "48,49,50,51,52,53,54,55,56,57",
									"action": [
										// 按下数字键，追加到已输入内容的末尾，但禁止越界。变量：keycode-48就是末位数字
										{ "type": "playSound", "name": "光标移动" },
										{
											"type": "if",
											"condition": "(flag:input<0)",
											"true": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input-(flag:keycode-48)" },
											],
											"false": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input+(flag:keycode-48)" },
											]
										},
										{ "type": "setValue", "name": "flag:input", "value": "core.clamp(flag:input,-9e15,9e15)" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "189",
									"action": [
										// 按下减号键，变更已输入内容的符号
										{ "type": "playSound", "name": "跳跃" },
										{ "type": "setValue", "name": "flag:input", "value": "-flag:input" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "8",
									"action": [
										// 按下退格键，从已输入内容的末尾删除一位
										{ "type": "playSound", "name": "取消" },
										{ "type": "setValue", "name": "flag:input", "operator": "//=", "value": "10" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "27",
									"action": [
										// 按下ESC键，清空已输入内容
										{ "type": "playSound", "name": "读档" },
										{ "type": "setValue", "name": "flag:input", "value": "0" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "13",
									"action": [
										// 按下回车键，确定
										{ "type": "break", "n": 1 },
									]
								},
								{
									"case": "mouse",
									"px": [32, 63],
									"py": [288, 320],
									"action": [
										// 点击减号，变号。右边界写63防止和下面重叠
										{ "type": "playSound", "name": "跳跃" },
										{ "type": "setValue", "name": "flag:input", "value": "-flag:input" },
									]
								},
								{
									"case": "mouse",
									"px": [64, 384],
									"py": [288, 320],
									"action": [
										// 点击数字，追加到已输入内容的末尾，但禁止越界。变量：x-2就是末位数字
										{ "type": "playSound", "name": "光标移动" },
										{
											"type": "if",
											"condition": "(flag:input<0)",
											"true": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input-(flag:x-2)" },
											],
											"false": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input+(flag:x-2)" },
											]
										},
										{ "type": "setValue", "name": "flag:input", "value": "core.clamp(flag:input,-9e15,9e15)" },
									]
								},
								{
									"case": "mouse",
									"px": [32, 64],
									"py": [352, 384],
									"action": [
										// 点击左箭头，退格
										{ "type": "playSound", "name": "取消" },
										{ "type": "setValue", "name": "flag:input", "operator": "//=", "value": "10" },
									]
								},
								{
									"case": "mouse",
									"px": [96, 160],
									"py": [352, 384],
									"action": [
										// 点击CE，清空
										{ "type": "playSound", "name": "读档" },
										{ "type": "setValue", "name": "flag:input", "value": "0" },
									]
								},
								{
									"case": "mouse",
									"px": [320, 384],
									"py": [352, 384],
									"action": [
										// 点击OK，确定
										{ "type": "break", "n": 1 },
									]
								}
								]
							}
						]
					},
					{ "type": "clearMap" },
					// 裁剪录像，只保留'input:n'，然后继续录制
					{ "type": "function", "function": "function(){core.status.route.splice(flags['@temp@length']);core.status.route.push('input:'+core.getFlag('input',0))}" }
				], x, y);
				core.events.doAction();
			}
		}
	},
    "sprites": function () {
		// 基于canvas的sprite化，摘编整理自万宁魔塔
		// 
		// ---------------------------------------- 第一部分 js代码 （必装） --------------------------------------- //

		/* ---------------- 用法说明 ---------------- *
		 * 1. 创建sprite: var sprite = new Sprite(x, y, w, h, z, reference, name);
		 *   其中x y w h为画布的横纵坐标及长宽，reference为参考系，只能填game（相对于游戏画面）和window（相对于窗口）
		 *   且当为相对游戏画面时，长宽与坐标将会乘以放缩比例（相当于用createCanvas创建）
		 *   z为纵深，表示不同元素之间的覆盖关系，大的覆盖小的
		 *   name为自定义名称，可以不填
		 * 2. 删除: sprite.destroy();
		 * 3. 设置css特效: sprite.setCss(css);
		 *   其中css直接填 box-shadow: 0px 0px 10px black;的形式即可，与style标签与css文件内写法相同
		 *   对于已设置的特效，如果之后不需要再次设置，可以不填
		 * 4. 添加事件监听器: sprite.addEventListener(); 用法与html元素的addEventListener完全一致
		 * 5. 移除事件监听器: sprite.removeEventListener(); 用法与html元素的removeEventListener完全一致
		 * 6. 属性列表
		 *   (1) sprite.x | sprite.y | sprite.width | sprite.height | sprite.zIndex | sprite.reference 顾名思义
		 *   (2) sprite.canvas 该sprite的画布
		 *   (3) sprite.context 该画布的CanvasRenderingContext2d对象，即样板中常见的ctx
		 *   (4) sprite.count 不要改这个玩意
		 * 7. 使用样板api进行绘制
		 *   示例：
		 *   var ctx = sprite.context;
		 *   core.fillText(ctx, 'xxx', 100, 100);
		 *   core.fillRect(ctx, 0, 0, 50, 50);
		 *   当然也可以使用原生js
		 *   ctx.moveTo(0, 0);
		 *   ctx.bezierCurveTo(50, 50, 100, 0, 100, 50);
		 *   ctx.stroke();
		 * ---------------- 用法说明 ---------------- */

		var count = 0;

		/** 创建一个sprite画布
		 * @param {number} x
		 * @param {number} y
		 * @param {number} w
		 * @param {number} h
		 * @param {number} z
		 * @param {'game' | 'window'} reference 参考系，游戏画面或者窗口
		 * @param {string} name 可选，sprite的名称，方便通过core.dymCanvas获取
		 */
		function Sprite (x, y, w, h, z, reference, name) {
			this.x = x;
			this.y = y;
			this.width = w;
			this.height = h;
			this.zIndex = z;
			this.reference = reference;
			this.canvas = null;
			this.context = null;
			this.count = 0;
			this.name = name || '_sprite_' + count;
			this.style = null;
			/** 初始化 */
			this.init = function () {
				if (reference === 'window') {
					var canvas = document.createElement('canvas');
					this.canvas = canvas;
					this.context = canvas.getContext('2d');
					canvas.width = w;
					canvas.height = h;
					canvas.style.width = w + 'px';
					canvas.style.height = h + 'px';
					canvas.style.position = 'absolute';
					canvas.style.top = y + 'px';
					canvas.style.left = x + 'px';
					canvas.style.zIndex = z.toString();
					document.body.appendChild(canvas);
					this.style = canvas.style;
				} else {
					this.context = core.createCanvas(this.name || '_sprite_' + count, x, y, w, h, z);
					this.canvas = this.context.canvas;
					this.canvas.style.pointerEvents = 'auto';
					this.style = this.canvas.style;
				}
				this.count = count;
				count++;
			}
			this.init();

			/** 设置css特效
			 * @param {string} css
			 */
			this.setCss = function (css) {
				css = css.replace('\n', ';').replace(';;', ';');
				var effects = css.split(';');
				var self = this;
				effects.forEach(function (v) {
					var content = v.split(':');
					var name = content[0];
					var value = content[1];
					name = name.trim().split('-').reduce(function (pre, curr, i, a) {
						if (i === 0 && curr !== '') return curr;
						if (a[0] === '' && i === 1) return curr;
						return pre + curr.toUpperCase()[0] + curr.slice(1);
					}, '');
					var canvas = self.canvas;
					if (name in canvas.style) canvas.style[name] = value;
				});
				return this;
			}

			/** 
			 * 移动sprite
			 * @param {boolean} isDelta 是否是相对位置，如果是，那么sprite会相对于原先的位置进行移动
			 */
			this.move = function (x, y, isDelta) {
				if (x !== undefined && x !== null) this.x = x;
				if (y !== undefined && y !== null) this.y = y;
				if (this.reference === 'window') {
					var ele = this.canvas;
					ele.style.left = x + (isDelta ? parseFloat(ele.style.left) : 0) + 'px';
					ele.style.top = y + (isDelta ? parseFloat(ele.style.top) : 0) + 'px';
				} else core.relocateCanvas(this.context, x, y, isDelta);
				return this;
			}

			/** 
			 * 重新设置sprite的大小
			 * @param {boolean} styleOnly 是否只修改css效果，如果是，那么将会不高清，如果不是，那么会清空画布
			 */
			this.resize = function (w, h, styleOnly) {
				if (w !== undefined && w !== null) this.w = w;
				if (h !== undefined && h !== null) this.h = h;
				if (reference === 'window') {
					var ele = this.canvas;
					ele.style.width = w + 'px';
					ele.style.height = h + 'px';
					if (!styleOnly) {
						ele.width = w;
						ele.height = h;
					}
				} else core.resizeCanvas(this.context, w, h, styleOnly);
				return this;
			}

			/**
			 * 旋转画布
			 */
			this.rotate = function (angle, cx, cy) {
				if (this.reference === 'window') {
					var left = this.x;
					var top = this.y;
					this.canvas.style.transformOrigin = (cx - left) + 'px ' + (cy - top) + 'px';
					if (angle === 0) {
						canvas.style.transform = '';
					} else {
						canvas.style.transform = 'rotate(' + angle + 'deg)';
					}
				} else {
					core.rotateCanvas(this.context, angle, cx, cy);
				}
				return this;
			}

			/**
			 * 清除sprite
			 */
			this.clear = function (x, y, w, h) {
				if (this.reference === 'window') {
					this.context.clearRect(x, y, w, h);
				} else {
					core.clearMap(this.context, x, y, w, h);
				}
				return this;
			}

			/** 删除 */
			this.destroy = function () {
				if (this.reference === 'window') {
					if (this.canvas) document.body.removeChild(this.canvas);
				} else {
					core.deleteCanvas(this.name || '_sprite_' + this.count);
				}
			}

			/** 添加事件监听器 */
			this.addEventListener = function () {
				this.canvas.addEventListener.apply(this.canvas, arguments);
			}

			/** 移除事件监听器 */
			this.removeEventListener = function () {
				this.canvas.removeEventListener.apply(this.canvas, arguments);
			}
		}

		window.Sprite = Sprite;
	},
    "statusBar": function () {
	//新版鸽窝状态栏ui绘制，请作者在添加道具等操作时一并将老版状态栏一起添加，以供玩家自行选择ui，或通过提示让玩家选择作者想使用的ui。
	main.dom.floorMsgGroup.style.display = "none";
	main.dom.statusBar.style.display = "none";

	const GAMEVIEW_WIDTH = 780; //横屏画面宽度
	const GAMEVIEW_HEIGHT = 480; //横屏画面高度

	const GAMEVIEW_WIDTH_VERTICAL = 480; //竖屏画面宽度
	const GAMEVIEW_HEIGHT_VERTICAL = 780; //竖屏画面高度

	const BAR_WIDTH = 150; //横屏左侧额外距离（即边栏宽度）
	const BAR_HEIGHT_VERTICAL = 150; //竖屏上侧额外距离（即边栏高度）
	const BORDER_WIDTH = 0; //游戏画面左侧偏移距离
	const BORDER_HEIGHT = 0; //游戏画面上侧偏移距离


	const outerBackground = document.createElement("canvas"); //背景画布设置
	outerBackground.style.position = "absolute";
	outerBackground.style.zIndex = 5;
	outerBackground.id = "outerBackground";
	main.dom.outerBackground = outerBackground;
	main.dom.startPanel.insertAdjacentElement("afterend", outerBackground);

	const outerUI = document.createElement("canvas"); //额外ui画布设置（状态栏所有绘制、点击都在额外ui上）
	outerUI.style.position = "absolute";
	outerUI.style.zIndex = 165;
	outerUI.id = "outerUI";
	main.dom.outerUI = outerUI;
	outerBackground.insertAdjacentElement("afterend", outerUI);
	setTimeout(function () {
		// Should be executed immediately after init()
		main.canvas.outerUI = outerUI.getContext("2d");
	});
	outerUI.onclick = function (e) {
		try {
			//e.preventDefault();
			if (!core.isPlaying()) return false;
			const left = core.dom.gameGroup.offsetLeft;
			const top = core.dom.gameGroup.offsetTop;
			const px = Math.floor((e.clientX - left) / core.domStyle.scale),
				py = Math.floor((e.clientY - top) / core.domStyle.scale);
			core.ui.statusBar.onclick(px, py);
		} catch (ee) {
			main.log(ee);
		}
	};

	const _resize_gameGroup = function (obj) {

		//游戏画面自适应调节
		const gameGroup = core.dom.gameGroup;
		gameGroup.style.width = obj.totalWidth + "px";
		gameGroup.style.height = obj.totalHeight + "px";
		gameGroup.style.left = (obj.clientWidth - obj.totalWidth) / 2 + "px";
		gameGroup.style.top = (obj.clientHeight - obj.totalHeight) / 2 + "px";
		//floorMsgGroup为切换楼层中生效，显示时间可通过‘全塔属性’——‘切换楼层时间’或游戏内设置调整
		//显示内容为游戏名/版本号/楼层名
		// floorMsgGroup
		var floorMsgGroup = core.dom.floorMsgGroup;
		var globalAttribute =
			core.status.globalAttribute || core.initStatus.globalAttribute;
		floorMsgGroup.style = globalAttribute.floorChangingStyle;
		floorMsgGroup.style.height = floorMsgGroup.style.width =
			GAMEVIEW_HEIGHT * core.domStyle.scale + "px";
		floorMsgGroup.style.fontSize = 16 * core.domStyle.scale + "px";

		if (core.domStyle.isVertical) {
			floorMsgGroup.style.left = "0px";
			floorMsgGroup.style.top =
				((GAMEVIEW_HEIGHT_VERTICAL - GAMEVIEW_WIDTH_VERTICAL) *
					core.domStyle.scale) /
				2 +
				"px";
		} else {
			floorMsgGroup.style.left =
				((GAMEVIEW_WIDTH - GAMEVIEW_HEIGHT) * core.domStyle.scale) / 2 + "px";
			floorMsgGroup.style.top = "0px";
		}
		core.dom.musicBtn.style.right =
			(obj.clientWidth - obj.totalWidth) / 2 + "px";
		core.dom.musicBtn.style.bottom =
			(obj.clientHeight - obj.totalHeight) / 2 - 28 + "px";
		let startBackground = core.domStyle.isVertical ?
			main.styles.startVerticalBackground || main.styles.startBackground :
			main.styles.startBackground;
		if (main.dom.startBackground.getAttribute("__src__") != startBackground) {
			main.dom.startBackground.setAttribute("__src__", startBackground);
			main.dom.startBackground.src = startBackground;
		}
		// startPanel


	};
	const _resize_canvas = function (obj) {
		//自适应画布
		main.dom.outerBackground.style.width = obj.totalWidth + "px";
		main.dom.outerBackground.style.height = obj.totalHeight + "px";
		main.dom.outerUI.style.width = obj.totalWidth + "px";
		main.dom.outerUI.style.height = obj.totalHeight + "px";

		// perf 8: HD compatibility.
		const innerSize = obj.canvasWidth * core.domStyle.scale + "px";
		for (let i = 0; i < core.dom.gameCanvas.length; ++i) {
			core.dom.gameCanvas[i].style.width = innerSize;
			core.dom.gameCanvas[i].style.height = innerSize;


		}
		core.dom.gif.style.width = core.dom.gif.style.height = innerSize;
		core.dom.gif2.style.width = core.dom.gif2.style.height = innerSize;

		core.dom.gameDraw.style.width = core.dom.gameDraw.style.height =
			innerSize;
		core.dom.gameDraw.style.top =
			obj.gameDrawBox.top * core.domStyle.scale + "px";
		core.dom.gameDraw.style.left =
			obj.gameDrawBox.left * core.domStyle.scale + "px";
		// resize bigmap
		core.bigmap.canvas.forEach(function (cn) {
			const ratio = core.canvas[cn].canvas.hasAttribute("isHD") ?
				core.domStyle.ratio * devicePixelRatio :
				1;
			core.canvas[cn].canvas.style.width =
				(innerSize / ratio) * core.domStyle.scale + "px";
			core.canvas[cn].canvas.style.height =
				(innerSize / ratio) * core.domStyle.scale + "px";
		});
		// resize dynamic canvas
		for (const name in core.dymCanvas) {
			const ctx = core.dymCanvas[name],
				canvas = ctx.canvas;
			const ratio = canvas.hasAttribute("isHD") ? core.domStyle.ratio * devicePixelRatio : 1;
			canvas.style.width =
				(canvas.width / ratio) * core.domStyle.scale + 'px';
			canvas.style.height =
				(canvas.height / ratio) * core.domStyle.scale + 'px';
			canvas.style.left =
				parseFloat(canvas.getAttribute("_left")) * core.domStyle.scale + "px";
			canvas.style.top =
				parseFloat(canvas.getAttribute("_top")) * core.domStyle.scale + "px";
		}
		// resize next
		main.dom.next.style.width = main.dom.next.style.height =
			5 * core.domStyle.scale + "px";
		main.dom.next.style.borderBottomWidth =
			main.dom.next.style.borderRightWidth = 4 * core.domStyle.scale + "px";
	};
	core.control.resize = function () {
		//自适应，可实现横竖屏切换
		if (main.mode == "editor") return;

		const clientWidth = main.dom.body.clientWidth,
			clientHeight = main.dom.body.clientHeight;
		const canvasWidth = core.__PIXELS__;

		const isVertical = clientHeight > clientWidth;
		core.domStyle.isVertical = isVertical;

		const totalWidth = isVertical ? GAMEVIEW_WIDTH_VERTICAL : GAMEVIEW_WIDTH,
			totalHeight = isVertical ? GAMEVIEW_HEIGHT_VERTICAL : GAMEVIEW_HEIGHT;

		const maxRatio = Math.min(
			clientWidth / totalWidth,
			clientHeight / totalHeight
		);

		core.domStyle.availableScale = [];
		[1, 1.25, 1.5, 1.75, 2].forEach(function (v) {
			if (maxRatio >= v) {
				core.domStyle.availableScale.push(v);
			}
		});

		if (core.domStyle.availableScale.indexOf(core.domStyle.scale) < 0) {
			core.domStyle.scale = Math.min(1, maxRatio);
		} else if (
			core.getLocalStorage("scale") == null &&
			core.domStyle.availableScale.length >= 2
		) {
			core.domStyle.scale =
				core.domStyle.availableScale[core.domStyle.availableScale.length - 2];
			core.setLocalStorage("scale", core.domStyle.scale);
		}

		const totalWidthScaled = totalWidth * core.domStyle.scale,
			totalHeightScaled = totalHeight * core.domStyle.scale;

		const gameDrawBox = isVertical ? {
			left: BORDER_WIDTH,
			top: BAR_HEIGHT_VERTICAL + BORDER_HEIGHT,
		} : { left: BAR_WIDTH + BORDER_WIDTH, top: BORDER_HEIGHT };

		const obj = {
			clientWidth: clientWidth,
			clientHeight: clientHeight,
			canvasWidth: canvasWidth,
			totalWidth: totalWidthScaled,
			totalHeight: totalHeightScaled,
			gameDrawBox: gameDrawBox,
			globalAttribute: core.status.globalAttribute || core.initStatus.globalAttribute,
		};

		_resize_gameGroup(obj);
		_resize_canvas(obj);

		if (core.status.automaticRoute == null) core.status.automaticRoute = {};
		core.updateStatusBar();
	};

	const bgctx = main.dom.outerBackground.getContext("2d");
	const uictx = main.dom.outerUI.getContext("2d");
	bgctx.imageSmoothingEnabled = false
	uictx.imageSmoothingEnabled = false //关闭抗锯齿
	class StatusBar {
		constructor() {
			//道具栏列表


		}
		//初始化内容（工具栏/录像操作执行函数）
		init() {
			this.toolbarAction = [
				[
					main.core.openKeyBoard,
					main.core.openQuickShop,
					core.doSL
				],
				[main.core.save, main.core.load, main.core.openSettings],
			];
			this.replayAction = [
				[core.triggerReplay, core.stopReplay, core.rewindReplay],
				[core.speedDownReplay, core.speedUpReplay, function () { core.control._replay_SL() }],
			];
		}
		//更新
		update() {
			this._update_background(); //更新背景
			this._update_props(); //更新属性
			this._update_skills(); //更新当前技能栏
			this._update_keys(); //更新钥匙栏
			this._update_missions(); //更新任务栏
			this._update_state(); //更新异常状态栏
			this._update_items(); //更新道具
			this._update_toolBox(); //更新工具栏
		}
		//更新背景
		_update_background() {
			if (core.domStyle.isVertical) {
				core.maps._setHDCanvasSize(bgctx, 480, 780)
				core.maps._setHDCanvasSize(uictx, 480, 780)

				const bg = core.material.images.images["shangmian.png"]; //竖屏背景（上）
				bgctx.drawImage(
					bg,
					0,
					0,
					GAMEVIEW_WIDTH_VERTICAL,
					BAR_HEIGHT_VERTICAL
				);
				const bg2 = core.material.images.images["xiamian.png"]; //竖屏背景（下）
				bgctx.drawImage(
					bg2,
					0,
					BAR_HEIGHT_VERTICAL + GAMEVIEW_WIDTH_VERTICAL,
					GAMEVIEW_WIDTH_VERTICAL,
					BAR_HEIGHT_VERTICAL
				);


				core.setTextAlign("outerUI", "center");
			} else {
				core.maps._setHDCanvasSize(bgctx, 780, 480)
				core.maps._setHDCanvasSize(uictx, 780, 480)

				const bg = core.material.images.images["zuobian.png"]; //横屏背景（左）
				bgctx.drawImage(
					bg,
					0,
					0,
					BAR_WIDTH,
					GAMEVIEW_HEIGHT
				);
				const bg2 = core.material.images.images["youbian.png"]; //横屏背景（右）
				bgctx.drawImage(
					bg2,
					BAR_WIDTH + GAMEVIEW_HEIGHT,
					0,
					BAR_WIDTH,
					GAMEVIEW_HEIGHT
				);
				core.setTextAlign("outerUI", "center");
			}
		}
		// 更新属性
		_update_props() {
			let skycontrol;
			if (core.status.floorId) {
				let bb = core.getEquip(3),
					ff = core.getEquip(4),
					fb = core.getEquip(5),
					cacheFloor = core.status.checkBlock.cache?.cacheFloor;
				if (cacheFloor?.红尾巴) {
					skycontrol = 1;
				} else {
					let hasFighter = ff || fb === 'p38' || fb === 'typhoon' || fb === 'mosquito' || fb === 'p47d' || fb === 'p61' || bb === 'eagle' || bb === 'illustrious' || bb === 'raider' || bb === 'essex' || bb === 'enterprise' || bb === 'illus1941' || (core.hasItem('independence') && (core.status.maps[core.status.floorId].area === '海洋' || core.status.maps[core.status.floorId].area === '浅滩')),
						enemyFighter = cacheFloor?.战斗机 || cacheFloor?.重型战斗机;
					if (hasFighter && !enemyFighter) {
						skycontrol = 1;
					} else if (!hasFighter && enemyFighter) {
						skycontrol = 2;
					}
				}
			}
			if (core.domStyle.isVertical) { // 竖屏
				core.clearMap(uictx, 0, 0, 150, 480); //上部（0--480，0--150）
				if (core.status.maps[core.status.floorId]) { // 绘制楼层名 地区 军衔
					core.setTextAlign("outerUI", "left") //左对齐
					core.fillBoldText(uictx, core.status.maps[core.status.floorId].name, 10, 20, "#00CCFF", "#000000", "bold 16px kaiti", 150)

					core.fillBoldText(uictx, core.status.maps[core.status.floorId].area, 10, 38, "#66FF33", "#000000", "bold 16px kaiti", 35)

					core.setTextAlign("outerUI", "right") //右对齐
					core.fillBoldText(uictx, core.getLvName(), 150, 38, "#CC9900", "#000000", "bold 16px kaiti", 35)
				}
				core.setTextAlign("outerUI", "center") //居中
				let a = core.status.hard,
					b = "",
					c = ""; //难度
				if (a === 'Massacre') {
					b = "神剧";
					c = "#60B103";
				} else if (a === 'Arcade') {
					b = "街机";
					c = "#EBB659"
				} else if (a === 'History') {
					b = "历史";
					c = "#CD0001"
				}
				core.fillBoldText(uictx, b, 80, 38, c, "#000000", "bold 16px kaiti", 35);

				core.setTextAlign("outerUI", "left") //左对齐
				if (core.getFlag("escort")) { //存在友军血量 core.getFlag("escort")
					core.fillBoldText(uictx, "友军血量:", 10, 53, "#33FF99", "#000000", "bold 12px kaiti") //友军血量
					core.fillBoldText(uictx, core.formatBigNumber(core.getFlag("友军血量")), 64, 54, "#33FF99", "#000000", "12px number", 102) //core.formatBigNumber(core.getFlag("友军血量"))
				}

				core.setTextAlign("outerUI", "left")
				core.drawIcon(uictx, "statusHp", 6, 55, 24, 24)
				core.fillRect(uictx, 32, 58.5, 94, 18, "#000000") //血槽
				let bloodmax = core.getRealStatus('hpmax'),
					blood = core.getRealStatus('hp');
				if (blood >= bloodmax * 0.8) { //变色血
					core.fillRect(uictx, 34, 60.5, 90 * blood / bloodmax, 14, "#00FF00");
				} else if (blood >= bloodmax * 0.6) {
					core.fillRect(uictx, 34, 60.5, 90 * blood / bloodmax, 14, "#9ACD32");
				} else if (blood >= bloodmax * 0.4) {
					core.fillRect(uictx, 34, 60.5, 90 * blood / bloodmax, 14, "#FFD700");
				} else if (blood >= bloodmax * 0.2) {
					core.fillRect(uictx, 34, 60.5, 90 * blood / bloodmax, 14, "#FFA500");
				} else { core.fillRect(uictx, 34, 60.5, 90 * blood / bloodmax, 14, "#FF0000"); }
				core.setTextAlign("outerUI", "center")
				core.fillText(uictx, core.formatBigNumber(blood, true) + "/" + core.formatBigNumber(bloodmax, true), 79, 72, "#FFFFFF", "12px number", 90) //  血量数字

				core.setTextAlign("outerUI", "left") //左对齐
				core.fillRoundRect(uictx, 6, 80, 148, 68, 5, "rgba(0,0,0,0.5)"); //常规状态底板
				core.drawIcon(uictx, "statusAtk", 8, 79, 20, 20) //攻击力
				core.fillText(uictx, "攻击:", 32, 94.5, "#FF0000", "bold 16px kaiti") //攻击：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus("atk"), false), 70, 96, "#FF0000", "18px number", 100) //攻击数字

				core.drawIcon(uictx, "statusMana", 8, 103, 20, 20) //指挥点	
				core.fillText(uictx, "指挥点:", 32, 118.5, "#00CCFF", "bold 16px kaiti") //指挥点：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus("mana"), false), 86, 120, "#00CCFF", "18px number", 100) //指挥点数字

				core.drawIcon(uictx, "statusMdef", 8, 127, 20, 20) //后勤点	
				core.fillText(uictx, "后勤点:", 32, 142.5, "#AAFF88", "bold 16px kaiti") //后勤点：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus("mdef"), false), 86, 144, "#AAFF88", "18px number", 100) //后勤点数字
				if (flags.temmdef) { //临时后勤
					core.fillText(uictx, "+" + core.formatBigNumber(flags.temmdef, false), 100, 128, "#7CFC00", "12px number", 100);
				}

				core.setTextAlign("outerUI", "center") //居中
				core.fillText(uictx, "——陆军属性——", 240, 20, "#FFFF00", "bold 16px kaiti", 150)
				core.setTextAlign("outerUI", "left") //左对齐
				core.fillRoundRect(uictx, 167, 26, 148, 49, 5, "rgba(0,0,0,0.5)"); //陆军属性底板
				core.drawIcon(uictx, "statusAp", 172, 28, 20, 20) //穿甲
				core.fillText(uictx, "穿甲:", 196, 43.5, "#FFFFFF", "bold 16px kaiti") //穿甲：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('ap'), false), 234, 45, "#FFFFFF", "18px number", 100) //穿甲数字

				core.drawIcon(uictx, "statusArm", 172, 52, 20, 20) //装甲
				core.fillText(uictx, "装甲:", 196, 67.5, "#D1AD89", "bold 16px kaiti") //装甲：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('arm'), false), 234, 69, "#D1AD89", "18px number", 100) //装甲数字

				core.setTextAlign("outerUI", "center") //居中
				core.fillText(uictx, "——海军属性——", 240, 89, "#55CCFF", "bold 16px kaiti", 150)
				core.setTextAlign("outerUI", "left") //左对齐
				core.fillRoundRect(uictx, 167, 95, 148, 49, 5, "rgba(0,0,0,0.5)"); //海军属性底板
				core.drawIcon(uictx, "statusTop", 170, 95, 24, 24) //雷击
				core.fillText(uictx, "雷击:", 196, 112.5, "#FF8C00", "bold 16px kaiti") //雷击：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('top'), false), 234, 114, "#FF8C00", "18px number", 100) //雷击数字

				core.drawIcon(uictx, "statusTpn", 170, 119, 24, 24) //鱼雷
				core.fillText(uictx, "鱼雷:", 196, 136.5, "#CC33FF", "bold 16px kaiti") //鱼雷：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('tpn'), false), 234, 138, "#CC33FF", "18px number", 100) //鱼雷数字

				core.fillRoundRect(uictx, 325, 4, 148, 49, 5, "rgba(0,0,0,0.5)"); //非战斗属性底板
				core.drawIcon(uictx, "statusMoney", 330, 6, 24, 24) //黄金
				core.fillText(uictx, "黄金:", 354, 21.5, "#FBBF3D", "bold 16px kaiti") //黄金：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('money'), false), 392, 23, "#FBBF3D", "18px number", 70) //黄金数字

				core.drawIcon(uictx, "statusLevel", 330, 30, 24, 24) //晋升
				core.fillText(uictx, "晋升:", 354, 45.5, "#CCCC44", "bold 16px kaiti") //晋升：
				core.fillText(uictx, core.formatBigNumber(core.control.getNextLvUpNeed(), false), 392, 47, "#CCCC44", "18px number", 70) //晋升数字



				core.setTextAlign("outerUI", "center") //居中
				if (skycontrol === 1) { //core.getFlag("制空权")===1
					core.fillBoldText(uictx, "制空权↑", 400, 114, "#6633FF", "#000000", "bold 20px kaiti", 100)
				} else if (skycontrol === 2) { //core.getFlag("制空权")===2
					core.fillBoldText(uictx, "制空权↓", 400, 114, "#FF8844", "#000000", "bold 20px kaiti", 100) //制空权↓
				}

				core.setTextAlign("outerUI", "center") //居中
				if (flags.skill > 0) { //flags.skill > 0
					core.fillBoldText(uictx, core.plugin.skillInfo[flags.skill].name, 400, 140, "#28B6F6", "#000000", "bold 20px kaiti", 160) //技能显示 core.plugin.skillInfo[flags.skill].name
				}
			} else { // 横屏
				core.clearMap(uictx, 0, 0, 150, 480); //左侧（0--150，0--480）
				if (core.status.maps[core.status.floorId]) { // 绘制楼层名 地区 军衔
					core.setTextAlign("outerUI", "center") //居中
					core.fillBoldText(uictx, core.status.maps[core.status.floorId].name, 75, 18, "#00CCFF", "#000000", "bold 16px kaiti", 150)
					core.setTextAlign("outerUI", "right") //右对齐
					core.fillBoldText(uictx, core.status.maps[core.status.floorId].area, 134, 38, "#66FF33", "#000000", "bold 16px kaiti", 150)
					core.setTextAlign("outerUI", "left") //左对齐
					core.fillBoldText(uictx, core.getLvName(), 16, 38, "#CC9900", "#000000", "bold 16px kaiti", 150)
				}
				core.setTextAlign("outerUI", "center") //居中
				let a = core.status.hard,
					b = "",
					c = ""; //难度
				if (a === 'Massacre') {
					b = "神剧";
					c = "#60B103";
				} else if (a === 'Arcade') {
					b = "街机";
					c = "#EBB659"
				} else if (a === 'History') {
					b = "历史";
					c = "#CD0001"
				}
				core.fillBoldText(uictx, b, 75, 38, c, "#000000", "bold 16px kaiti");

				core.setTextAlign("outerUI", "center") //居中
				core.fillText(uictx, "————————————————————————", 75, 55, "#FFFFFF", "bold 16px kaiti")

				core.setTextAlign("outerUI", "center") //居中
				if (skycontrol === 1) { //core.getFlag("制空权")===1
					core.fillBoldText(uictx, "制空权↑", 75, 73, "#6633FF", "#000000", "bold 16px kaiti")
				} else if (skycontrol === 2) { //core.getFlag("制空权")===2
					core.fillBoldText(uictx, "制空权↓", 75, 73, "#FF8844", "#000000", "bold 16px kaiti") //制空权↓
				}


				core.setTextAlign("outerUI", "left") //左对齐
				if (core.getFlag("escort")) { //存在友军血量 
					core.fillBoldText(uictx, "友军血量:", 10, 96, "#33FF99", "#000000", "bold 12px kaiti") //友军血量
					core.fillBoldText(uictx, core.formatBigNumber(core.getFlag("友军血量")), 64, 96, "#33FF99", "#000000", "12px number", 102)
				}

				core.setTextAlign("outerUI", "center")
				core.drawIcon(uictx, "statusHp", 4, 103, 32, 32)
				core.fillRect(uictx, 36, 107, 106, 24, "#000000") //血槽
				let bloodmax = core.getRealStatus('hpmax'),
					blood = core.getRealStatus('hp');
				if (blood >= bloodmax * 0.8) { //变色血
					core.fillRect(uictx, 38, 109, 102 * blood / bloodmax, 20, "#00FF00");
				} else if (blood >= bloodmax * 0.6) {
					core.fillRect(uictx, 38, 109, 102 * blood / bloodmax, 20, "#9ACD32");
				} else if (blood >= bloodmax * 0.4) {
					core.fillRect(uictx, 38, 109, 102 * blood / bloodmax, 20, "#FFD700");
				} else if (blood >= bloodmax * 0.2) {
					core.fillRect(uictx, 38, 109, 102 * blood / bloodmax, 20, "#FFA500");
				} else { core.fillRect(uictx, 38, 109, 102 * blood / bloodmax, 20, "#FF0000"); }
				core.fillText(uictx, core.formatBigNumber(blood, true) + "/" + core.formatBigNumber(bloodmax, true), 89, 123.5, "#FFFFFF", "12px number", 102) //  血量数字

				core.fillRoundRect(uictx, 4, 133, 142, 84, 5, "rgba(0,0,0,0.5)"); //常规状态底板
				core.drawIcon(uictx, "statusAtk", 6, 134, 24, 24) //攻击力
				core.setTextAlign("outerUI", "left") //左对齐
				core.fillText(uictx, "攻击:", 36, 153, "#FF0000", "bold 16px kaiti") //攻击：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus("atk"), false), 74, 154.5, "#FF0000", "18px number", 70) //攻击数字

				core.drawIcon(uictx, "statusMana", 6, 163, 24, 24) //指挥点	
				core.fillText(uictx, "指挥点:", 36, 181, "#00CCFF", "bold 16px kaiti") //指挥点：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus("mana"), false), 90, 182.5, "#00CCFF", "18px number", 54) //指挥点数字

				core.drawIcon(uictx, "statusMdef", 6, 190, 24, 24) //后勤点	
				core.fillText(uictx, "后勤点:", 36, 209, "#AAFF88", "bold 16px kaiti") //后勤点：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus("mdef"), false), 90, 210.5, "#AAFF88", "18px number", 54) //后勤点数字
				if (flags.temmdef) { //临时后勤
					core.fillText(uictx, "+" + core.formatBigNumber(flags.temmdef, false), 100, 195, "#7CFC00", "12px number", 100);
				}

				core.setTextAlign("outerUI", "center") //居中
				core.fillText(uictx, "——————————陆军属性——————————", 75, 235.5, "#FFFF00", "bold 16px kaiti")
				core.setTextAlign("outerUI", "left") //左对齐
				core.fillRoundRect(uictx, 4, 243, 142, 57, 5, "rgba(0,0,0,0.5)"); //陆军属性底板
				core.drawIcon(uictx, "statusAp", 6, 245, 24, 24) //穿甲
				core.fillText(uictx, "穿甲:", 36, 263, "#FFFFFF", "bold 16px kaiti") //穿甲：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('ap'), false), 74, 264.5, "#FFFFFF", "18px number", 70) //穿甲数字

				core.drawIcon(uictx, "statusArm", 6, 272, 24, 24) //装甲
				core.fillText(uictx, "装甲:", 36, 291, "#D1AD89", "bold 16px kaiti") //装甲：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('arm'), false), 74, 292.5, "#D1AD89", "18px number", 70) //装甲数字

				core.setTextAlign("outerUI", "center") //居中
				core.fillText(uictx, "——————————海军属性——————————", 75, 317.5, "#55CCFF", "bold 16px kaiti")
				core.setTextAlign("outerUI", "left") //左对齐
				core.fillRoundRect(uictx, 4, 325, 142, 57, 5, "rgba(0,0,0,0.5)"); //海军属性底板
				core.drawIcon(uictx, "statusTop", 4, 323, 32, 32) //雷击
				core.fillText(uictx, "雷击:", 36, 343.5, "#FF8C00", "bold 16px kaiti") //雷击：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('top'), false), 74, 345, "#FF8C00", "18px number", 70) //雷击数字

				core.drawIcon(uictx, "statusTpn", 4, 351, 32, 32) //鱼雷
				core.fillText(uictx, "鱼雷:", 36, 373, "#CC33FF", "bold 16px kaiti") //鱼雷：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('tpn'), false), 74, 374.5, "#CC33FF", "18px number", 70) //鱼雷数字

				core.setTextAlign("outerUI", "center") //居中
				core.fillText(uictx, "————————————————————————", 75, 395, "#FFFFFF", "bold 16px kaiti")
				core.setTextAlign("outerUI", "left") //左对齐
				core.fillRoundRect(uictx, 4, 397, 142, 57, 5, "rgba(0,0,0,0.5)"); //非战斗属性底板
				core.drawIcon(uictx, "statusMoney", 4, 395, 32, 32) //黄金
				core.fillText(uictx, "黄金:", 36, 417, "#FBBF3D", "bold 16px kaiti") //黄金：
				core.fillText(uictx, core.formatBigNumber(core.getRealStatus('money'), false), 74, 418.5, "#FBBF3D", "18px number", 70) //黄金数字

				core.drawIcon(uictx, "statusLevel", 4, 423, 32, 32) //晋升
				core.fillText(uictx, "晋升:", 36, 445, "#CCCC44", "bold 16px kaiti") //晋升：
				core.fillText(uictx, core.formatBigNumber(core.control.getNextLvUpNeed(), false), 74, 446.5, "#CCCC44", "18px number", 70) //晋升数字

				core.setTextAlign("outerUI", "center") //居中
				if (flags.skill > 0) {
					core.fillBoldText(uictx, core.plugin.skillInfo[flags.skill].name, 75, 472, "#28B6F6", "#000000", "bold 20px kaiti", 142) //技能显示
				}



			}


		}

		//横屏右侧（630--780，0--480）竖屏下部（0--480，630，780）

		_update_skills() { //当前技能栏
			const skill1 = core.plugin.skillInfo[flags?.skillList?.[0] || 0];
			const skill2 = core.plugin.skillInfo[flags?.skillList?.[1] || 0];
			const skill3 = core.plugin.skillInfo[flags?.skillList?.[2] || 0];
			const skill4 = core.plugin.skillInfo[flags?.skillList?.[3] || 0];
			const skill5 = core.plugin.skillInfo[flags?.skillList?.[4] || 0];
			const skill6 = core.plugin.skillInfo[flags?.skillList?.[5] || 0];
			const skill7 = core.plugin.skillInfo[flags?.skillList?.[6] || 0];


			if (core.domStyle.isVertical) { // 竖屏下部
				core.clearMap(uictx, 0, 630, 160, 150);
				core.fillRoundRect(uictx, 4, 633, 152, 144, 5, "rgba(0,0,0,0.5)"); //技能栏底板								 
				core.setTextAlign("outerUI", "left") //左对齐								 
				core.drawIcon(uictx, "btn1", 5, 635, 20, 20) //技能标记
				core.fillBoldText(uictx, skill1.name + " " + skill1.cost, 29, 650, skill1.strategy ? "#FF0000" : "#00FF00", "#000000", "14px number", 126) //  技能名+消耗								 

				core.drawIcon(uictx, "btn2", 5, 655, 20, 20) //技能标记
				core.fillBoldText(uictx, skill2.name + " " + skill2.cost, 29, 670, skill2.strategy ? "#FF0000" : "#00FF00", "#000000", "14px number", 126) //  技能名+消耗

				core.drawIcon(uictx, "btn3", 5, 675, 20, 20) //技能标记
				core.fillBoldText(uictx, skill3.name + " " + skill3.cost, 29, 690, skill3.strategy ? "#FF0000" : "#00FF00", "#000000", "14px number", 126) //  技能名+消耗

				core.drawIcon(uictx, "btn4", 5, 695, 20, 20) //技能标记
				core.fillBoldText(uictx, skill4.name + " " + skill4.cost, 29, 710, skill4.strategy ? "#FF0000" : "#00FF00", "#000000", "14px number", 126) //  技能名+消耗

				core.drawIcon(uictx, "btn5", 5, 715, 20, 20) //技能标记
				core.fillBoldText(uictx, skill5.name + " " + skill5.cost, 29, 730, skill5.strategy ? "#FF0000" : "#00FF00", "#000000", "14px number", 126) //  技能名+消耗

				core.drawIcon(uictx, "btn6", 5, 735, 20, 20) //技能标记
				core.fillBoldText(uictx, skill6.name + " " + skill6.cost, 29, 750, skill6.strategy ? "#FF0000" : "#00FF00", "#000000", "14px number", 126) //  技能名+消耗							 

				core.drawIcon(uictx, "btn7", 5, 755, 20, 20) //技能标记
				core.fillBoldText(uictx, skill7.name + " " + skill7.cost, 29, 770, skill7.strategy ? "#FF0000" : "#00FF00", "#000000", "14px number", 126) //  技能名+消耗	


			} else { //横屏右侧
				core.clearMap(uictx, 630, 0, 150, 171);
				core.fillRoundRect(uictx, 634, 6, 142, 167, 5, "rgba(0,0,0,0.5)"); //技能栏底板								 
				core.setTextAlign("outerUI", "left") //左对齐
				core.drawIcon(uictx, "btn1", 634, 5, 24, 24) //技能标记
				core.fillBoldText(uictx, skill1.name + " " + skill1.cost, 662, 22, skill1.strategy ? "#FF0000" : "#00FF00", "#000000", "16px number", 112) //  技能名+消耗

				core.drawIcon(uictx, "btn2", 634, 29, 24, 24) //技能标记
				core.fillBoldText(uictx, skill2.name + " " + skill2.cost, 662, 46, skill2.strategy ? "#FF0000" : "#00FF00", "#000000", "16px number", 112) //  技能名+消耗

				core.drawIcon(uictx, "btn3", 634, 53, 24, 24) //技能标记
				core.fillBoldText(uictx, skill3.name + " " + skill3.cost, 662, 70, skill3.strategy ? "#FF0000" : "#00FF00", "#000000", "16px number", 112) //  技能名+消耗

				core.drawIcon(uictx, "btn4", 634, 77, 24, 24) //技能标记
				core.fillBoldText(uictx, skill4.name + " " + skill4.cost, 662, 94, skill4.strategy ? "#FF0000" : "#00FF00", "#000000", "16px number", 112) //  技能名+消耗

				core.drawIcon(uictx, "btn5", 634, 101, 24, 24) //技能标记
				core.fillBoldText(uictx, skill5.name + " " + skill5.cost, 662, 118, skill5.strategy ? "#FF0000" : "#00FF00", "#000000", "16px number", 112) //  技能名+消耗

				core.drawIcon(uictx, "btn6", 634, 125, 24, 24) //技能标记
				core.fillBoldText(uictx, skill6.name + " " + skill6.cost, 662, 142, skill6.strategy ? "#FF0000" : "#00FF00", "#000000", "16px number", 112) //  技能名+消耗							 

				core.drawIcon(uictx, "btn7", 634, 149, 24, 24) //技能标记
				core.fillBoldText(uictx, skill7.name + " " + skill7.cost, 662, 166, skill7.strategy ? "#FF0000" : "#00FF00", "#000000", "16px number", 112) //  技能名+消耗	


			}
		}

		_update_keys() { //钥匙栏
			if (!core.domStyle.isVertical) { // 横屏右侧								 
				core.clearMap(uictx, 630, 173, 150, 47);
				core.setTextAlign("outerUI", "left") //左对齐								 
				core.drawIcon(uictx, "yellowKey", 652, 174, 24, 24) //黄钥匙
				core.setTextAlign("outerUI", "center") //居中								 
				core.fillText(uictx, core.itemCount("yellowKey"), 660, 216, "#FFCCAA", "18px number", 42) //黄钥匙数量

				core.setTextAlign("outerUI", "left") //左对齐	
				core.drawIcon(uictx, "blueKey", 694, 174, 24, 24) //蓝钥匙
				core.setTextAlign("outerUI", "center") //居中								 
				core.fillText(uictx, core.itemCount("blueKey"), 702, 216, "#CCCCFF", "18px number", 42) //蓝钥匙数量

				core.setTextAlign("outerUI", "left") //左对齐	
				core.drawIcon(uictx, "redKey", 736, 174, 24, 24) //红钥匙
				core.setTextAlign("outerUI", "center") //居中									 
				core.fillText(uictx, core.itemCount("redKey"), 744, 216, "#FF8888", "18px number", 42) //红钥匙数量								 
			} else { //竖屏上部！							 
				core.clearMap(uictx, 320, 53, 119, 39)
				core.setTextAlign("outerUI", "left") //左对齐								 
				core.drawIcon(uictx, "yellowKey", 356, 54, 16, 16) //黄钥匙
				core.setTextAlign("outerUI", "center") //居中	
				core.fillText(uictx, core.itemCount("yellowKey"), 362, 88, "#FFCCAA", "16px number", 56) //黄钥匙数量

				core.drawIcon(uictx, "blueKey", 397, 54, 16, 16) //蓝钥匙
				core.setTextAlign("outerUI", "center") //居中	
				core.fillText(uictx, core.itemCount("blueKey"), 403, 88, "#CCCCFF", "16px number", 56) //蓝钥匙数量

				core.drawIcon(uictx, "redKey", 440, 54, 16, 16) //红钥匙
				core.setTextAlign("outerUI", "center") //居中	
				core.fillText(uictx, core.itemCount("redKey"), 446, 88, "#FF8888", "16px number", 56) //红钥匙数量

			}
		}

		_update_missions() { //当前任务栏   
			if (!core.taskSystem.tasksInfo[0]) return;
			if (core.domStyle.isVertical) { // 竖屏
				core.clearMap(uictx, 161, 631, 160, 50);
				core.fillRoundRect(uictx, 168, 640, 135, 35, 15, "rgba(0,0,0,0.5)") //任务底板	

				if (!core.taskSystem.checkTask(0)) { //任务一 未完成								 
					core.drawIcon(uictx, "star1", 180, 644, 24, 24)
				} else { // 任务一 已完成
					core.drawIcon(uictx, "star2", 180, 644, 24, 24)
				}

				if (!core.taskSystem.checkTask(1)) { //任务二 未完成								 
					core.drawIcon(uictx, "star1", 223, 644, 24, 24)
				} else { // 任务二 已完成
					core.drawIcon(uictx, "star2", 223, 644, 24, 24)
				}

				if (!core.taskSystem.checkTask(2)) { //任务三 未完成								 
					core.drawIcon(uictx, "star1", 266, 644, 24, 24)
				} else { // 任务三 已完成
					core.drawIcon(uictx, "star2", 266, 644, 24, 24)
				}

			} else { //横屏
				core.clearMap(uictx, 630, 220, 150, 40);
				core.fillRoundRect(uictx, 637, 220, 131, 35, 15, "rgba(0,0,0,0.5)") //任务底板

				if (!core.taskSystem.checkTask(0)) { //任务一 未完成								 
					core.drawIcon(uictx, "star1", 648, 224, 24, 24)
				} else { // 任务一 已完成
					core.drawIcon(uictx, "star2", 648, 224, 24, 24)
				}

				if (!core.taskSystem.checkTask(1)) { //任务二 未完成								 
					core.drawIcon(uictx, "star1", 690, 224, 24, 24)
				} else { // 任务二 已完成
					core.drawIcon(uictx, "star2", 690, 224, 24, 24)
				}

				if (!core.taskSystem.checkTask(2)) { //任务三 未完成								 
					core.drawIcon(uictx, "star1", 732, 224, 24, 24)
				} else { // 任务三 已完成
					core.drawIcon(uictx, "star2", 732, 224, 24, 24)
				}

			}
		}

		_update_state() { //异常状态
			let Debuff = [],
				Debuffcolor = [];
			if (flags.dry) {
				Debuff.push('炎热');
				Debuffcolor.push('#FF8C00');
			}
			if (core.status.checkBlock.cache?.cacheFloor?.截断) {
				Debuff.push('截断');
				Debuffcolor.push('#00FF00');
			}
			if (core.status.checkBlock.cache?.cacheFloor?.点杀) {
				Debuff.push('点杀');
				Debuffcolor.push('#C677DD');
			}
			if (core.status.checkBlock.cache?.cacheFloor?.观测) {
				Debuff.push('观测');
				Debuffcolor.push('#FFFF00');
			}
			if (flags.scare > 0) {
				Debuff.push('慌' + flags.scare);
				Debuffcolor.push('#FF007F');
			}
			if (flags.fire > 0) {
				Debuff.push('火' + flags.fire);
				Debuffcolor.push('#FF0000');
			}
			if (flags.进水) {
				Debuff.push('进水');
				Debuffcolor.push('#00FFFF');
			}
			if (flags.powerup > 0) {
				Debuff.push('振奋');
				Debuffcolor.push('#FFD700');
			}
			if (core.status.checkBlock.cache?.cacheFloor?.火力覆盖) {
				Debuff.push('火力');
				Debuffcolor.push('#6600CC');
			}
			if (core.status.checkBlock.cache?.cacheFloor?.航空支援) {
				Debuff.push('航空');
				Debuffcolor.push('#CCFFFF');
			}
			if (core.status.checkBlock.cache?.cacheFloor?.直掩) {
				Debuff.push('直掩');
				Debuffcolor.push('#FF0000');
			}
			if (flags.spy) {
				Debuff.push('谍' + flags.spy);
				Debuffcolor.push('#FFFFFF');
			}
			if (flags.铝箔条) {
				Debuff.push('铝' + flags.铝箔条);
				Debuffcolor.push('#FFD700');
			}
			if (flags.xijun) {
				Debuff.push('感染' + flags.xijun);
				Debuffcolor.push('#00FF00');
			}
			if (core.domStyle.isVertical) { //竖屏
				core.clearMap(uictx, 161, 681, 160, 50);
				core.fillRoundRect(uictx, 168, 688, 135, 35, 15, "rgba(0,0,0,0.5)") //任务底板								 
				core.setTextAlign("outerUI", "center");
				if (Debuff.length > 0) { //异常状态检测需改动
					if (Debuff.length < 4) {
						for (let debuffn = 0, debuffx = 193; debuffn <= Debuff.length - 1; debuffn++, debuffx += 40) {
							core.fillText(uictx, Debuff[debuffn], debuffx, 712, Debuffcolor[debuffn], "16px number", 130);
						}
						//core.drawTextContent(uictx, Debuff.join(" "), { left: 168, top: 696, align: 'center', maxWidth: 130, color: "#FFAACC", fontSize: 16, font: 'number' })
					} else {
						for (let debuffn = 0, debuffx = 184, debuffy = 704; debuffn <= Debuff.length - 1; debuffn++, debuffx += 30) {
							if (debuffn === 4) {
								debuffx = 184;
								debuffy = 716;
							}
							core.fillText(uictx, Debuff[debuffn], debuffx, debuffy, Debuffcolor[debuffn], "12px number", 130);
						}
						//core.drawTextContent(uictx, Debuff.join(" "), { left: 183, top: 688, align: 'center', maxWidth: 100, color: "#FFAACC", fontSize: 12, font: 'number' })
					}
					//core.fillText(uictx, Debuff.join(" "), 235.5, 710, "#FF0000", "16px number", 130) //异常状态文字显示
				} else {
					core.fillText(uictx, "异常状态", 235.5, 710, "#FFAACC", "16px number", 130)
				}
			} else { //横屏	
				core.clearMap(uictx, 630, 261, 150, 40);
				core.fillRoundRect(uictx, 637, 261, 131, 35, 15, "rgba(0,0,0,0.5)"); //异常状态底板
				core.setTextAlign("outerUI", "center");
				if (Debuff.length > 0) { //异常状态检测需改动
					if (Debuff.length < 4) {
						for (let debuffn = 0, debuffx = 660; debuffn <= Debuff.length - 1; debuffn++, debuffx += 40) {
							core.fillText(uictx, Debuff[debuffn], debuffx, 283, Debuffcolor[debuffn], "16px number", 130);
						}
						//core.drawTextContent(uictx, Debuff.join(" "), { left: 637, top: 269, align: 'center', maxWidth: 130, color: "#FFAACC", fontSize: 16, font: 'number' })
					} else {
						for (let debuffn = 0, debuffx = 658, debuffy = 276; debuffn <= Debuff.length - 1; debuffn++, debuffx += 30) {
							if (debuffn === 4) {
								debuffx = 658;
								debuffy = 288;
							}
							core.fillText(uictx, Debuff[debuffn], debuffx, debuffy, Debuffcolor[debuffn], "12px number", 130);
						}
						//core.drawTextContent(uictx, Debuff.join(" "), { left: 652, top: 261, align: 'center', maxWidth: 100, color: "#FFAACC", fontSize: 12, font: 'number' })
					}
					//core.fillText(uictx, Debuff.join(" "), 702.5, 283, "#FFAACC", "16px number", 120) //异常状态文字显示
				} else {
					core.fillText(uictx, "异常状态", 702.5, 283, "#FFAACC", "16px number", 120)
				}
			}
		}


		_update_items() { //道具栏 下午茶 可乐 手册 楼传 背包 
			if (core.domStyle.isVertical) { // 竖屏
				core.clearMap(uictx, 161, 731, 160, 50); //下部 中间格 最下区 下午茶+可乐								 
				core.setTextAlign("outerUI", "left");

				core.drawIcon(uictx, "tea", 165, 737, 26, 32)
				core.fillText(uictx, core.itemCount("tea"), 190, 761, "#FF3366", "24px number", 49)


				core.drawIcon(uictx, "cola", 225, 738.5, 26, 32)
				core.fillText(uictx, core.itemCount("cola"), 250, 761, "#FFB728", "24px number", 49)


				core.clearMap(uictx, 321, 630, 53, 150); //下部  右侧格	最左区	

				core.drawIcon(uictx, "book", 327, 636, 42, 42)

				core.drawIcon(uictx, "fly", 327, 684, 42, 42)


				core.drawIcon(uictx, "pack", 327, 732, 42, 42)


			} else { //横屏
				core.clearMap(uictx, 630, 301, 150, 80);
				core.setTextAlign("outerUI", "left");

				core.drawIcon(uictx, "tea", 634, 303, 26, 32)
				core.fillText(uictx, core.itemCount("tea"), 659, 328, "#FF3366", "24px number", 45)


				core.drawIcon(uictx, "cola", 709, 304.5, 26, 32)
				core.fillText(uictx, core.itemCount("cola"), 734, 328, "#FFB728", "24px number", 45)



				core.drawIcon(uictx, "book", 634, 338, 42, 42)

				core.drawIcon(uictx, "fly", 684, 338, 42, 42)


				core.drawIcon(uictx, "pack", 734, 338, 42, 42)



			}
		}

		_update_toolBox() { //工具栏
			const tools = core.isReplaying() ? [
				[core.status.replay.pausing ? "play" : "pause", "stop", "rewind"],
				["speedDown", "speedUp", "save"],
			] : [
				["keyboard", "shop", "T732"],
				["save", "load", "settings"],
			];

			if (core.domStyle.isVertical) { //竖屏
				core.clearMap(uictx, 374, 631, 106, 150);
				for (let i = 0; i < tools.length; i++) {
					for (let j = 0; j < tools[i].length; j++) {
						core.drawIcon(uictx, tools[i][j], 377 + 50 * i, 636 + 48 * j, 42, 42);
					}
				}
			} else { //横屏
				core.clearMap(uictx, 630, 381, 150, 100);
				for (let i = 0; i < tools.length; i++) {
					for (let j = 0; j < tools[i].length; j++) {
						core.drawIcon(uictx, tools[i][j], 636 + 50 * j, 384 + 46 * i, 42, 42);
					}
				}
			}
		}

		showmetheui() { //ui显示
			outerBackground.style.display = "block";
			outerUI.style.display = "block";
			this.update();
		}

		hidetheui() { //ui隐藏
			outerBackground.style.display = "none";
			outerUI.style.display = "none";
		}












		onclick(x, y) { //点击
			const makeBox = ([x, y], [w, h]) => {
				return [
					[x, y],
					[x + w, y + h],
				];
			};
			const gridify = ([x, y], [gw, gh]) => {
				return [Math.floor(x / gw), Math.floor(y / gh)];
			};

			const inRect = ([x, y], [
				[sx, sy],
				[dx, dy]
			]) => {
				return sx <= x && x <= dx && sy <= y && y <= dy;
			};

			const relativeTo = ([x, y], [ax, ay]) => {
				return [x - ax, y - ay];
			};
			const pos = [x, y];

			if (core.domStyle.isVertical) { //竖屏


				const skillsBox = makeBox( //技能栏
					[4, 635],
					[152, 20 * 7]
				)
				if (inRect(pos, skillsBox)) {
					if (
						core.isReplaying() ||
						core.status.lockControl ||
						core.isMoving()
					)
						return;
					const click = Math.min(Math.floor((y - 635) / 20), 6);
					(async function () { await core.keyUp(49 + click); })()
				}

				const missionsBox = makeBox( //任务栏
					[168, 640],
					[135, 35]
				)
				if (inRect(pos, missionsBox)) {
					if (
						core.isReplaying() ||
						core.status.lockControl ||
						core.isMoving() ||
						!core.taskSystem.tasksInfo[0]
					)
						return;
					/*let text = `${core.taskSystem.checkTask(0)?"\\i[star2]":"\\i[star1]"}${core.taskSystem.tasksInfo[0].name}
${core.taskSystem.tasksInfo[0].text}
${core.taskSystem.checkTask(1)?"\\i[star2]":"\\i[star1]"}${core.taskSystem.tasksInfo[1].name}
${core.taskSystem.tasksInfo[1].text}
${core.taskSystem.checkTask(2)?"\\i[star2]":"\\i[star1]"}${core.taskSystem.tasksInfo[2].name}
${core.taskSystem.tasksInfo[2].text}`;*/
					let text = ""
					text += (core.taskSystem.checkTask(0) ? "\\i[star2]" : "\\i[star1]") + core.taskSystem.tasksInfo[0].name + "：" + core.taskSystem.tasksInfo[0].text + "\\n"
					core.taskSystem.tasksInfo[0].tasks.forEach(v => {
						if (v.type === "arrival") text += v.text + "(" + v.has + "/1)\\n"
						else if (v.type === "killAll") text += v.text + "(剩余" + v.has + ")\\n"
						else if (v.type === "outer") text += v.text + "\\n"
						else text += v.text + "(" + v.has + "/" + v.count + ")\\n"
					})
					text += (core.taskSystem.checkTask(1) ? "\\i[star2]" : "\\i[star1]") + core.taskSystem.tasksInfo[1].name + "：" + core.taskSystem.tasksInfo[1].text + "\\n"
					core.taskSystem.tasksInfo[1].tasks.forEach(v => {
						if (v.type === "arrival") text += v.text + "(" + v.has + "/1)\\n"
						else if (v.type === "killAll") text += v.text + "(剩余" + v.has + ")\\n"
						else if (v.type === "outer") text += v.text + "\\n"
						else text += v.text + "(" + v.has + "/" + v.count + ")\\n"
					})
					text += (core.taskSystem.checkTask(2) ? "\\i[star2]" : "\\i[star1]") + core.taskSystem.tasksInfo[2].name + "：" + core.taskSystem.tasksInfo[2].text + "\\n"
					core.taskSystem.tasksInfo[2].tasks.forEach(v => {
						if (v.type === "arrival") text += v.text + "(" + v.has + "/1)\\n"
						else if (v.type === "killAll") text += v.text + "(剩余" + v.has + ")\\n"
						else if (v.type === "outer") text += v.text + "\\n"
						else text += v.text + "(" + v.has + "/" + v.count + ")\\n"
					})
					const length = core.status.route.length;
					core.insertAction(text, void 0, void 0, () => core.status.route.length = length);

				}

				const teaBox = makeBox( //茶
					[165, 737],
					[60, 32]
				)
				if (inRect(pos, teaBox)) {
					if (
						core.isReplaying() ||
						core.status.lockControl ||
						core.isMoving() ||
						core.itemCount("tea") === 0
					)
						return;
					core.useItem("tea");
				}

				const colaBox = makeBox( //可乐
					[225, 738.5],
					[60, 32]
				)
				if (inRect(pos, colaBox)) {
					if (
						core.isReplaying() ||
						core.status.lockControl ||
						core.isMoving() ||
						core.itemCount("cola") === 0
					)
						return;
					core.useItem("cola");
				}

				const bookBox = makeBox( //手册
					[327, 636],
					[42, 42]
				);

				if (inRect(pos, bookBox)) {
					if (core.status.event.id == "viewMaps" ||
						core.status.event.id == "fly")
						core.openBook(true);
					if (core.isReplaying() || core.status.lockControl || core.isMoving()) { return; }
					core.openBook(true);
				}

				const flyBox = makeBox( //楼传
					[327, 684],
					[42, 42]
				);
				if (inRect(pos, flyBox)) {
					if (core.isReplaying() || core.status.lockControl || core.isMoving()) { return; }
					core.useFly(true)
				}


				const packBox = makeBox( //背包
					[327, 732],
					[42, 42]
				);
				if (inRect(pos, packBox)) {
					if (core.isReplaying() || core.status.lockControl || core.isMoving()) { return; }
					core.openToolbox(true)
				}




				const toolBox = makeBox( //工具栏修改  
					[372, 631],
					[49.5 * 2, 50 * 3]
				);
				if (inRect(pos, toolBox)) {
					const [col, row] = gridify(relativeTo(pos, toolBox[0]), [50, 50]);
					if (core.isReplaying()) {
						this.replayAction[col][row].call(core);
					} else if (core.isPlaying()) {
						if (col === 0 && row === 2) {
							core.doSL("autoSave", "load");
						} else {
							this.toolbarAction[col][row].call(core, true);
						}
					}
					return;
				}

			} else { //横屏



				const skillsBox = makeBox( //技能栏
					[634, 5],
					[142, 24 * 7]
				)
				if (inRect(pos, skillsBox)) {
					if (
						core.isReplaying() ||
						core.status.lockControl ||
						core.isMoving()
					)
						return;
					const click = Math.min(Math.floor((y - 5) / 24), 6);
					core.keyUp(49 + click);
					return;
				}

				const missionsBox = makeBox( //任务栏
					[637, 220],
					[131, 35]
				)
				if (inRect(pos, missionsBox)) {
					if (
						core.isReplaying() ||
						core.status.lockControl ||
						core.isMoving() ||
						!core.taskSystem.tasksInfo[0]
					)
						return;
					/*let text = `${core.taskSystem.checkTask(0)?"\\i[star2]":"\\i[star1]"}${core.taskSystem.tasksInfo[0].name}
${core.taskSystem.tasksInfo[0].text}
${core.taskSystem.checkTask(1)?"\\i[star2]":"\\i[star1]"}${core.taskSystem.tasksInfo[1].name}
${core.taskSystem.tasksInfo[1].text}
${core.taskSystem.checkTask(2)?"\\i[star2]":"\\i[star1]"}${core.taskSystem.tasksInfo[2].name}
${core.taskSystem.tasksInfo[2].text}`;*/
					let text = ""
					text += (core.taskSystem.checkTask(0) ? "\\i[star2]" : "\\i[star1]") + core.taskSystem.tasksInfo[0].name + "：" + core.taskSystem.tasksInfo[0].text + "\\n"
					core.taskSystem.tasksInfo[0].tasks.forEach(v => {
						if (v.type === "arrival") text += v.text + "(" + v.has + "/1)\\n"
						else if (v.type === "killAll") text += v.text + "(剩余" + v.has + ")\\n"
						else if (v.type === "outer") text += v.text + "\\n"
						else text += v.text + "(" + v.has + "/" + v.count + ")\\n"
					})
					text += (core.taskSystem.checkTask(1) ? "\\i[star2]" : "\\i[star1]") + core.taskSystem.tasksInfo[1].name + "：" + core.taskSystem.tasksInfo[1].text + "\\n"
					core.taskSystem.tasksInfo[1].tasks.forEach(v => {
						if (v.type === "arrival") text += v.text + "(" + v.has + "/1)\\n"
						else if (v.type === "killAll") text += v.text + "(剩余" + v.has + ")\\n"
						else if (v.type === "outer") text += v.text + "\\n"
						else text += v.text + "(" + v.has + "/" + v.count + ")\\n"
					})
					text += (core.taskSystem.checkTask(2) ? "\\i[star2]" : "\\i[star1]") + core.taskSystem.tasksInfo[2].name + "：" + core.taskSystem.tasksInfo[2].text + "\\n"
					core.taskSystem.tasksInfo[2].tasks.forEach(v => {
						if (v.type === "arrival") text += v.text + "(" + v.has + "/1)\\n"
						else if (v.type === "killAll") text += v.text + "(剩余" + v.has + ")\\n"
						else if (v.type === "outer") text += v.text + "\\n"
						else text += v.text + "(" + v.has + "/" + v.count + ")\\n"
					})
					const length = core.status.route.length;
					core.insertAction(text, void 0, void 0, () => core.status.route.length = length);
				}

				const teaBox = makeBox( //茶
					[634, 303],
					[75, 32]
				)
				if (inRect(pos, teaBox)) {
					if (
						core.isReplaying() ||
						core.status.lockControl ||
						core.isMoving() ||
						core.itemCount("tea") === 0
					)
						return;
					core.useItem("tea");
				}

				const colaBox = makeBox( //可乐
					[709, 304.5],
					[75, 32]
				)
				if (inRect(pos, colaBox)) {
					if (
						core.isReplaying() ||
						core.status.lockControl ||
						core.isMoving() ||
						core.itemCount("cola") === 0
					)
						return;
					core.useItem("cola");
				}

				const bookBox = makeBox( //手册
					[634, 338],
					[42, 42]
				);

				if (inRect(pos, bookBox)) {
					if (core.status.event.id == "viewMaps" ||
						core.status.event.id == "fly")
						core.openBook(true);
					if (core.isReplaying() || core.status.lockControl || core.isMoving()) { return; }
					core.openBook(true);
				}

				const flyBox = makeBox( //楼传
					[684, 338],
					[42, 42]
				);
				if (inRect(pos, flyBox)) {
					if (core.isReplaying() || core.status.lockControl || core.isMoving()) { return; }
					core.useFly(true)
				}


				const packBox = makeBox( //背包
					[734, 338],
					[42, 42]
				);
				if (inRect(pos, packBox)) {
					if (core.isReplaying() || core.status.lockControl || core.isMoving()) { return; }
					core.openToolbox(true)
				}



				const toolBox = makeBox( //工具栏
					[630, 381],
					[50 * 3, 50 * 2]
				);
				if (inRect(pos, toolBox)) {
					const [row, col] = gridify(relativeTo(pos, toolBox[0]), [50, 50]);
					if (core.isReplaying()) {
						this.replayAction[col][row].call(core);
					} else if (core.isPlaying()) {
						if (col === 0 && row === 2) {
							core.doSL("autoSave", "load");
						} else {
							this.toolbarAction[col][row].call(core, true);
						}
					}
					return;
				}
			}
		}
	}

	core.ui.statusBar = new StatusBar();

	core.control.clearStatusBar = function () {
		core.clearMap("outerUI");
	};
	// init() called in `afterLoadResources`.
},
    "函数复写": function () {
	core.statusBar.icons = {
		floor: 0,
		name: null,
		lv: 1,
		hpmax: 2,
		hp: 3,
		atk: 4,
		def: 5,
		mdef: 6,
		money: 7,
		exp: 8,
		up: 9,
		book: 10,
		fly: 11,
		toolbox: 12,
		keyboard: 13,
		shop: 14,
		save: 15,
		load: 16,
		settings: 17,
		play: 18,
		pause: 19,
		stop: 20,
		speedDown: 21,
		speedUp: 22,
		rewind: 23,
		equipbox: 24,
		mana: 25,
		skill: 26,
		exit: null,
		btn1: 27,
		btn2: 28,
		btn3: 29,
		btn4: 30,
		btn5: 31,
		btn6: 32,
		btn7: 33,
		alt: 34,
		keys: null,
		help: null,
		battle: null,
	};
	core.actions._getClickLoc = function (x, y) {
		var size = 32 * core.domStyle.scale;
		var left = main.dom.gameDraw.offsetLeft + main.dom.gameGroup.offsetLeft;
		var top = main.dom.gameDraw.offsetTop + main.dom.gameGroup.offsetTop;
		var loc = {
			x: Math.max(x - left, 0),
			y: Math.max(y - top, 0),
			size: size,
		};
		return loc;
	};
	/*core.ui._drawWindowSelector = function (background, x, y, w, h) {
		w = Math.round(w) + 48;
		h = Math.round(h);
		var ctx = core.ui.createCanvas("_selector", x - 24, y, w, h, 165);
		ctx.canvas.id = "";
		this._drawSelector(ctx, background, w, h);
	};

	core.ui._drawSelector = function (ctx, background, w, h, left, top) {
		left = left || 0;
		top = top || 0;
		ctx = this.getContextByName(ctx);
		if (!ctx) return;
		if (typeof background == "string")
			background = core.material.images.images[background];
		if (!(background instanceof Image)) return;
		// badge
		ctx.drawImage(background, 132, 68, 24, 24, left + 4, top + 4, 24, 24);
		ctx.drawImage(
			background,
			132,
			68,
			24,
			24,
			w - left - 28,
			top + 4,
			24,
			24
		);
	};*/

	enemys.prototype._nextCriticals_useBinarySearch = function (
		enemy,
		info,
		number,
		x,
		y,
		floorId
	) {
		var mon_hp = info.mon_hp,
			hero_atk = core.status.hero.atk,
			mon_def = info.mon_def,
			pre = info.damage;
		var list = [];
		var start_atk = hero_atk;
		if (info.__over__) {
			start_atk += info.__overAtk__;
			list.push([info.__overAtk__, -info.damage]);
		}
		var calNext = function (currAtk, maxAtk) {
			var start = Math.floor(currAtk),
				end = Math.floor(maxAtk);
			if (start > end) return null;

			while (start < end) {
				var mid = Math.floor((start + end) / 2);
				if (mid - start > end - mid) mid--;
				var nextInfo = core.enemys.getDamageInfo(
					enemy, { atk: mid },
					x,
					y,
					floorId
				);
				if (nextInfo == null || typeof nextInfo == "number") return null;
				if (pre > nextInfo.damage) end = mid;
				else start = mid + 1;
			}
			var nextInfo = core.enemys.getDamageInfo(
				enemy, { atk: start },
				x,
				y,
				floorId
			);
			return nextInfo == null ||
				typeof nextInfo == "number" ||
				nextInfo.damage >= pre ?
				null : [start, nextInfo.damage];
		};
		var currAtk = start_atk;
		while (true) {
			var next = calNext(currAtk + 1, Number.MAX_SAFE_INTEGER, pre);
			if (next == null) break;
			currAtk = next[0];
			pre = next[1];
			list.push([currAtk - hero_atk, info.damage - pre]);
			if (pre <= 0 && !core.flags.enableNegativeDamage) break;
			if (list.length >= number) break;
		}
		if (list.length == 0) list.push([0, 0]);
		return list;
	};
	core.ui.clearMap = function (name, x, y, width, height) {
		if (name == "all") {
			for (var m in core.canvas) {
				core.canvas[m].clearRect(
					-32,
					-32,
					core.canvas[m].canvas.width + 32,
					core.canvas[m].canvas.height + 32
				);
			}
			core.clearMap("outerUI");
			core.dom.gif.innerHTML = "";
			core.removeGlobalAnimate();
			core.deleteCanvas(function (one) {
				return one.startsWith("_bigImage_");
			});
			core.setWeather(null);
		} else {
			var ctx = this.getContextByName(name);
			if (ctx)
				ctx.clearRect(
					x || 0,
					y || 0,
					width || ctx.canvas.width,
					height || ctx.canvas.height
				);
		}
	};
	events.prototype.openBook = function (fromUserAction) {
		if (core.isReplaying()) return;
		// 如果能恢复事件（从callBook事件触发）
		if (
			core.status.event.id == "book" &&
			core.events.recoverEvents(core.status.event.interval)
		)
			return;
		// 当前是book，且从“浏览地图”打开
		if (core.status.event.id == "book" && core.status.event.ui) {
			core.status.boxAnimateObjs = [];
			core.ui._drawViewMaps(core.status.event.ui);
			return;
		}
		// 从“浏览地图”页面打开
		if (core.status.event.id == "viewMaps" || core.status.event.id == "fly") {
			fromUserAction = false;
			core.status.event.ui = core.status.event.data;
		}
		if (!this._checkStatus("book", fromUserAction, true)) return;
		core.playSound("打开界面");
		core.useItem("book", true);
	};
	////// 怪物手册界面时，放开某个键的操作 //////
	core.actions._keyUpBook = function (keycode) {
		if (keycode == 27 || keycode == 88) {
			core.playSound("取消");
			if (core.events.recoverEvents(core.status.event.interval)) {
				return;
			} else if (core.status.event.ui != null) {
				core.status.boxAnimateObjs = [];
				if (typeof core.status.event.ui === "number") {
					core.status.event.id = "fly";
					core.ui.drawFly(core.status.event.ui);
				} else {
					core.ui._drawViewMaps(core.status.event.ui);
				}
			} else core.ui.closePanel();
			return;
		}
		if (keycode == 13 || keycode == 32 || keycode == 67) {
			var data = core.status.event.data;
			if (data != null) {
				core.ui._drawBookDetail(data);
			}
			return;
		}
	};
	////// 怪物手册界面的点击操作 //////
	actions.prototype._clickBook = function (x, y) {
		var pageinfo = core.ui._drawBook_pageinfo();
		// 上一页
		if (
			(x == this._HX_ - 2 || x == this._HX_ - 3) &&
			y === core._HEIGHT_ - 1
		) {
			core.playSound("光标移动");
			core.ui.drawBook(core.status.event.data - pageinfo.per_page);
			return;
		}
		// 下一页
		if (
			(x == this._HX_ + 2 || x == this._HX_ + 3) &&
			y === core._HEIGHT_ - 1
		) {
			core.playSound("光标移动");
			core.ui.drawBook(core.status.event.data + pageinfo.per_page);
			return;
		}
		// 返回
		if (x >= this.LAST - 2 && y === core._HEIGHT_ - 1) {
			core.playSound("取消");
			if (core.events.recoverEvents(core.status.event.interval)) {
				return;
			} else if (core.status.event.ui != null) {
				core.status.boxAnimateObjs = [];
				if (typeof core.status.event.ui === "number") {
					core.status.event.id = "fly";
					core.ui.drawFly(core.status.event.ui);
				} else {
					core.ui._drawViewMaps(core.status.event.ui);
				}
			} else core.ui.closePanel();
			return;
		}
		// 怪物信息
		var data = core.status.event.data;
		if (data != null && y < core._HEIGHT_ - 1) {
			var per_page = pageinfo.per_page,
				page = parseInt(data / per_page);
			var u = (core._HEIGHT_ - 1) / per_page;
			for (var i = 0; i < per_page; ++i) {
				if (y >= u * i && y < u * (i + 1)) {
					var index = per_page * page + i;
					core.ui.drawBook(index);
					core.ui._drawBookDetail(index);
					break;
				}
			}
			return;
		}
		return;
	};

	////// 战斗 //////
	events.prototype.battle = function (id, x, y, force, callback) {
		core.saveAndStopAutomaticRoute();
		id = id || core.getBlockId(x, y);
		const cls = core.getClsFromId(id);
		if (!id || !cls || !(cls === 'enemys' || cls === 'enemy48')) return core.clearContinueAutomaticRoute(callback);
		if (!id) return core.clearContinueAutomaticRoute(callback);
		// 非强制战斗
		if (!core.enemys.canBattle(id, x, y) && !force && !core.status.event.id) {
			core.stopSound();
			core.playSound('操作失败');
			core.drawTip("你打不过此怪物！", id);
			return core.clearContinueAutomaticRoute(callback);
		}
		// 自动存档
		if (!core.status.event.id) core.autosave(true);
		// 战前事件
		if (!this.beforeBattle(id, x, y))
			return core.clearContinueAutomaticRoute(callback);
		// 战后事件
		this.afterBattle(id, x, y);
		if (callback) callback();
	}
	// 禁止手动换装，只能在事件中用指令强制换装   // 函数复写
	core.items._realLoadEquip = function (type, loadId, unloadId, callback) {
		if (core.status.event.id === 'action') {
			var loadEquip = core.material.items[loadId] || {},
				unloadEquip = core.material.items[unloadId] || {};
			// --- 音效
			core.items._realLoadEquip_playSound();
			// --- 实际换装
			core.items._loadEquipEffect(loadId, unloadId);
			// --- 加减
			if (loadId) core.removeItem(loadId);
			if (unloadId) core.addItem(unloadId);
			core.status.hero.equipment[type] = loadId || null;
			// --- 提示
			if (loadId) core.drawTip("已装备上" + loadEquip.name, loadId);
			else if (unloadId) core.drawTip("已卸下" + unloadEquip.name, unloadId);
		}
		if (callback) callback();
	}
	//显伤加字
	core.enemys.getDamageString = function (enemy, x, y, floorId) {
		if (typeof enemy == 'string') enemy = core.material.enemys[enemy];
		var damage = this.getDamage(enemy, x, y, floorId);

		var color = '#000000';

		if (damage == null) {
			damage = "???";
			color = '#FF2222';
		} else {
			if (damage <= 0) color = '#11FF11';
			else if (damage < core.status.hero.hp / 3) color = '#FFFFFF';
			else if (damage < core.status.hero.hp * 2 / 3) color = '#FFFF00';
			else if (damage < core.status.hero.hp) color = '#FF9933';
			else color = '#FF2222';

			damage = core.formatBigNumber(damage, true);
			if (core.enemys.hasSpecial(enemy, 19))
				damage += "+";
			if (core.enemys.hasSpecial(enemy, 21))
				damage += "-";
			if (core.enemys.hasSpecial(enemy, 11))
				damage += "^";
			if (core.enemys.hasSpecial(enemy, 42))
				damage += "截";
			if (core.enemys.hasSpecial(enemy, 44)) {
				damage += "风";
			}
			if (core.enemys.hasSpecial(enemy, 51))
				damage += "歼";
			if (core.enemys.hasSpecial(enemy, 52))
				damage += "夹";
			if (core.enemys.hasSpecial(enemy, 59))
				damage += "X";
			if (core.enemys.hasSpecial(enemy, 63))
				damage += "阵";
			if (core.enemys.hasSpecial(enemy, 66))
				damage += "狙";
		}

		return {
			"damage": damage,
			"color": color
		};
	}
	//歼灭领域显伤
	core.control._updateDamage_extraDamage = function (floorId, onMap) {
		core.status.damage.extraData = [];
		if (!core.flags.displayExtraDamage) return;

		var width = core.floors[floorId].width,
			height = core.floors[floorId].height;
		var startX = onMap && core.bigmap.v2 ? Math.max(0, core.bigmap.posX - core.bigmap.extend) : 0;
		var endX = onMap && core.bigmap.v2 ? Math.min(width, core.bigmap.posX + core._WIDTH_ + core.bigmap.extend + 1) : width;
		var startY = onMap && core.bigmap.v2 ? Math.max(0, core.bigmap.posY - core.bigmap.extend) : 0;
		var endY = onMap && core.bigmap.v2 ? Math.min(height, core.bigmap.posY + core._HEIGHT_ + core.bigmap.extend + 1) : height;

		for (var x = startX; x < endX; x++) {
			for (var y = startY; y < endY; y++) {
				var alpha = 1;
				if (core.noPass(x, y, floorId)) {
					if (core.flags.extraDamageType == 2) alpha = 0;
					else if (core.flags.extraDamageType == 1) alpha = 0.6;
				}
				var damage = core.status.checkBlock.damage[x + "," + y] || 0;
				if (damage > 0 && Number.isFinite(damage)) { // 该点伤害
					damage = core.formatBigNumber(damage, true);
					core.status.damage.extraData.push({ text: damage, px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33', alpha: alpha });
				} else if (damage === Infinity) {
					core.status.damage.extraData.push({ text: '死', px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ff0000', alpha: alpha });
				} else { // 检查捕捉
					if (core.status.checkBlock.ambush[x + "," + y]) {
						core.status.damage.extraData.push({ text: '!', px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33', alpha: alpha });
					}
				}
			}
		}
	}
	//灯光  
	core.control._drawHero_draw = function (direction, x, y, status, offset, frame) {
		offset = offset || { x: 0, y: 0, offset: 0, px: 0, py: 0 };
		if (["MT55", "MT56", "MT57", "MT58", "MT59", "MT60", "MT180", "MT181", "MT182", "MT183", "MT184"].indexOf(core.status.floorId) >= 0) {
			core.plugin.drawLight('newui1', 0.5, [
				[16 + hero.loc.x * 32 + offset.x, 16 + hero.loc.y * 32 + offset.y, flags.lighton ? 128 : 1000]
			], 0.8);
		} else { core.plugin.drawLight('newui1', 0, []) }
		var opacity = core.setAlpha('hero', core.getFlag('__heroOpacity__', 1))
		this._drawHero_getDrawObjs(direction, x, y, status, offset).forEach(function (block) {
			core.drawImage('hero', block.img, (block.heroIcon[block.status] + (frame || 0)) % 4 * block.width,
				block.heroIcon.loc * block.height, block.width, block.height,
				block.posx + (32 - block.width) / 2, block.posy + 32 - block.height, block.width, block.height);
		});
		core.setAlpha('hero', opacity);

	}


},
    "兵种分类": function () {
	// 在此增加新插件
	this.Army = ['步兵', '轻坦', '中坦', '重坦', '坦歼', '反坦克炮', '榴弹炮', '高射炮', '建筑'];
	this.Navy = ['潜艇', '鱼雷艇', '商船', '驱逐', '轻巡', '重巡', '战列', '航母'];
	this.Luftwaffe = ['战斗机', '重型战斗机', '攻击机', '俯冲轰炸机', '鱼雷轰炸机', '中型轰炸机', '导弹'];
},
    "技能系统": function () {
	// 在此增加新插件
	//技能系统  
	this.skillInfo = [{ // 0
			id: 0,
			strategy: false,
			name: '无',
			cost: 0,
			description: '无'
		},

		{ // 1
			id: 1,
			strategy: false,
			name: '战壕',
			cost: 20,
			description: '挖掘战壕，与敌方陆军战斗时，受到的伤害减少10%'
		},

		{ // 2
			id: 2,
			strategy: true,
			name: '紧急补给',
			cost: 150,
			func: function () {
				return new Promise(res => {
					core.status.hero.hp += Math.floor(core.status.hero.hpmax / 4);
					if (core.status.hero.hp > core.status.hero.hpmax) {
						core.status.hero.hp = core.status.hero.hpmax;
						core.drawHeroAnimate('hpfull');
					} else {
						core.drawHeroAnimate('heal');
					}
					res(true)
				})
			},
			description: '血量立即恢复25%'
		},

		{ // 3
			id: 3,
			strategy: false,
			name: '防空弹幕',
			cost: 50,
			description: '下一次与敌方空军的战斗中，攻击力提升20%'
		},

		{ // 4
			id: 4,
			strategy: true,
			name: '空战王牌',
			cost: 100,
			func: function () {
				return new Promise(res => {
					let X = core.nextX(),
						Y = core.nextY(),
						floorId = core.status.floorId,
						范围伤害目标 = X + ',' + Y + ',' + floorId,
						nextair = core.getBlockId(X, Y);
					if (core.isReplaying() || main.replayChecking) { //录像播放
						if (!flags.nofighter) {
							if (nextair && core.getBlockCls(X, Y) === "enemys" && core.plugin.Luftwaffe.includes(core.material.enemys[nextair].type)) {
								if (core.hasSpecial(nextair, 57)) {
									hero.mana += 100;
									core.drawTip("无法对敌方boss使用");
									res(false)
								} else if (core.material.enemys[nextair].type === '导弹') {
									hero.mana += 100;
									core.drawTip("无法对导弹使用");
									res(false)
								} else if (core.hasSpecial(nextair, 73)) {
									hero.mana += 100;
									core.drawTip("无法对喷气机使用");
									res(false)
								} else if (core.hasSpecial(nextair, 65)) {
									if (flags.aoe[范围伤害目标]) {
										flags.aoe[范围伤害目标] += core.getRealStatus('atk') * 3;
									} else {
										flags.aoe[范围伤害目标] = core.getRealStatus('atk') * 3;
									}
									if (core.getEnemyInfo(nextair, hero, X, Y, floorId).hp <= 0) {
										core.plugin.kill(X, Y, floorId, nextair)
									}
									res(true)
								} else {
									core.plugin.kill(X, Y, floorId, nextair)
									res(true)
								}
							} else {
								hero.mana += 100;
								core.drawTip("只能对空中目标使用");
								res(false)
							}
						} else {
							hero.mana += 100;
							core.drawTip("受剧情影响，无法使用！");
							res(false)
						}
					} else { //正常执行
						if (!flags.nofighter) {

							if (nextair && core.getBlockCls(X, Y) === "enemys" && core.plugin.Luftwaffe.includes(core.material.enemys[nextair].type)) {
								if (core.hasSpecial(nextair, 57)) {
									hero.mana += 100;
									core.drawTip("无法对敌方boss使用");
									res(false)

								} else if (core.material.enemys[nextair].type === '导弹') {
									hero.mana += 100;
									core.drawTip("无法对导弹使用");
									res(false)

								} else if (core.hasSpecial(nextair, 73)) {
									hero.mana += 100;
									core.drawTip("无法对喷气机使用");
									res(false)

								} else if (core.hasSpecial(nextair, 65)) {
									//动画
									core.playSound('fighter.mp3');
									core.showImage(1, 'aircraft1.png', null, [480, 32 * Y - 109], 1, 0, () => {
										setTimeout(() => {
											core.drawAnimate('shootair', X, Y);
											if (flags.aoe[范围伤害目标]) {
												flags.aoe[范围伤害目标] += core.getRealStatus('atk') * 3;
											} else {
												flags.aoe[范围伤害目标] = core.getRealStatus('atk') * 3;
											}
											if (core.getEnemyInfo(nextair, hero, X, Y, floorId).hp <= 0) {
												core.plugin.kill(X, Y, floorId, nextair)
											}
											core.updateStatusBar();
										}, (18 - X) / 21 * 500);
										core.moveImage(1, [-195, 32 * Y - 109], 1, null, 500, () => {
											core.hideImage(1, 0);
											res(true)
										})
									});
								} else {
									core.playSound('fighter.mp3');
									core.showImage(1, 'aircraft1.png', null, [480, 32 * Y - 109], 1, 0, () => {

										setTimeout(() => {
											core.drawAnimate('shootair', X, Y);
											core.playSound('crash2.mp3');
											core.plugin.kill(X, Y, floorId, nextair)
										}, (18 - X) / 21 * 500);
										core.moveImage(1, [-195, 32 * Y - 109], 1, null, 500, () => {
											core.hideImage(1, 0);
											res(true)
										})
									});
								}
							} else {
								hero.mana += 100;
								core.drawTip("只能对空中目标使用");
								res(false)
							}
						} else {
							hero.mana += 100;
							core.drawTip("受剧情影响，无法使用");
							res(false)
						}
					}
				})

			},
			description: '只能对面前的非boss空军使用，将其秒杀。如果无法秒杀对方，则效果改为“造成3倍攻击力的伤害”'
		},

		{ // 5
			id: 5,
			strategy: false,
			name: '预警',
			cost: 240,
			description: '下一场战斗中，闪避鱼雷数+6，受到伤害-30%'
		},

		{ // 6
			id: 6,
			strategy: false,
			name: 'Z字规避',
			cost: 80,
			description: '下一场战斗中，闪避鱼雷数+2'
		},

		{ // 7
			id: 7,
			strategy: true,
			name: '扫雷',
			cost: 20,
			func: function () {
				return new Promise(res => {
					let 排雷 = core.getBlockId(core.nextX(), core.nextY());
					if (['lavaNet', 'mine'].includes(排雷)) {
						core.removeBlock(core.nextX(), core.nextY());
						core.playSound('005-System05.mp3');
						res(true)
					} else {
						core.playSound('error.mp3');
						hero.mana += 20;
						core.drawTip('仅能对地雷或水雷使用');
						res(false)
					}
				})

			},
			description: '立即清除主角面前的地雷或水雷'
		},

		{ // 8
			id: 8,
			strategy: true,
			name: '剑鱼818中队',
			cost: 150,
			func: function () {
				return new Promise(res => {
					let X = core.nextX(),
						Y = core.nextY(),
						floorId = core.status.floorId,
						范围伤害目标 = X + ',' + Y + ',' + floorId,
						next = core.getBlockId(X, Y);

					if (core.isReplaying() || main.replayChecking) { //录像播放
						if (next && core.getBlockCls(X, Y) === "enemys" && core.plugin.Navy.includes(core.material.enemys[next].type) && core.material.enemys[next].type !== '潜艇') {
							let dod = core.getEnemyInfo(next, hero, X, Y, floorId).dod;
							if (flags.aoe[范围伤害目标]) {
								if (core.hasSpecial(next, 35)) {
									flags.aoe[范围伤害目标] += dod >= 5 ? hero.top : hero.top * (5 - dod);
								} else {
									flags.aoe[范围伤害目标] += hero.top * 5;
								}
							} else {
								if (core.hasSpecial(next, 35)) {
									flags.aoe[范围伤害目标] = dod >= 5 ? hero.top : hero.top * (5 - dod);
								} else {
									flags.aoe[范围伤害目标] = hero.top * 5;
								}
							}
							if (core.getEnemyInfo(next, hero, X, Y, floorId).hp <= 0) {
								core.plugin.kill(X, Y, floorId, next)
							}
							res(true)
						} else {
							hero.mana += 150;
							core.drawTip("只能对水面舰艇使用");
							res(false)
						}
					} else { //正常执行

						if (next && core.getBlockCls(X, Y) === "enemys" && core.plugin.Navy.includes(core.material.enemys[next].type) && core.material.enemys[next].type !== '潜艇') {
							core.lockControl();
							let dod = core.getEnemyInfo(next, hero, X, Y, floorId).dod;

							//动画
							core.playSound('bomber2.mp3');
							core.showImage(1, 'aircraft7.png', null, [480, 32 * Y - 109], 1, 0, () => {
								setTimeout(() => {
									core.drawAnimate('xinxinwater', X, Y);
									if (flags.aoe[范围伤害目标]) {
										if (core.hasSpecial(next, 35)) {
											flags.aoe[范围伤害目标] += dod >= 5 ? hero.top : hero.top * (5 - dod);
										} else {
											flags.aoe[范围伤害目标] += hero.top * 5;
										}
									} else {
										if (core.hasSpecial(next, 35)) {
											flags.aoe[范围伤害目标] = dod >= 5 ? hero.top : hero.top * (5 - dod);
										} else {
											flags.aoe[范围伤害目标] = hero.top * 5;
										}
									}
									if (core.getEnemyInfo(next, hero, X, Y, floorId).hp <= 0) {
										core.plugin.kill(X, Y, floorId, next)
									}
									core.updateStatusBar();
								}, (18 - X) / 21 * 500);
								core.moveImage(1, [-195, 32 * Y - 109], 1, null, 500, () => {
									core.hideImage(1, 0);
									res(true)
								})

							});
						} else {
							hero.mana += 150;
							core.drawTip("只能对水面舰艇使用");
							res(false)
						}
					}
					core.updateStatusBar();
				})

			},
			description: '对面前的敌军舰艇发射5枚鱼雷，且至少会命中1枚（潜艇除外），除造成正常的鱼雷伤害外，对手闪避鱼雷数-2。可重复空袭，但不会再降低对方的闪避'
		},

		{ // 9
			id: 9,
			strategy: false,
			name: '抵抗运动',
			cost: 100,
			description: '下一场战斗中，敌方陆军攻击力随回合数增加而减少，每回合减少原攻击力的10%。当敌人攻击力不足原来的30%时，则不会继续减少'
		},

		{ // 10
			id: 10,
			strategy: false,
			name: '破译',
			cost: 40,
			description: '下一场战斗中，获得20%减伤'
		},

		{ // 11
			id: 11,
			strategy: true,
			name: '空中打击',
			cost: 200,
			func: function () {
				return new Promise(res => {
					let X = core.nextX(),
						Y = core.nextY(),
						floorId = core.status.floorId,
						范围伤害目标 = X + ',' + Y + ',' + floorId,
						nextair = core.getBlockId(X, Y);
					let todo = [];
					if (core.isReplaying() || main.replayChecking) { //录像播放
						if (nextair && core.getBlockCls(X, Y) === "enemys" && core.plugin.Army.includes(core.material.enemys[nextair].type)) {
							if (core.hasSpecial(nextair, 57)) {
								hero.mana += 200;
								core.drawTip("无法对敌方boss使用");
								res(false)
							} else if (!['轻坦', '中坦', '重坦', '坦歼'].includes(core.material.enemys[nextair].type) || core.hasSpecial(nextair, 65)) {
								if (flags.aoe[范围伤害目标]) {
									if (!core.hasSpecial(core.material.enemys[nextair].special, 87)) {
										flags.aoe[范围伤害目标] += core.getRealStatus('atk') * 4;
									} else {
										flags.aoe[范围伤害目标] += core.getRealStatus('atk') * 1.2;
									}
								} else {
									if (!core.hasSpecial(core.material.enemys[nextair].special, 87)) {
										flags.aoe[范围伤害目标] = core.getRealStatus('atk') * 4;
									} else {
										flags.aoe[范围伤害目标] = core.getRealStatus('atk') * 1.2;
									}
								}
								if (core.getEnemyInfo(nextair, hero, X, Y, floorId).hp <= 0) {
									core.plugin.kill(X, Y, floorId, nextair)
								}
								res(true)

							} else {
								core.plugin.kill(X, Y, floorId, nextair)
								res(true)

							}
						} else {
							hero.mana += 200;
							core.drawTip("只能对地面目标使用");
							res(false)
						}
					} else { //正常执行

						if (nextair && core.getBlockCls(X, Y) === "enemys" && core.plugin.Army.includes(core.material.enemys[nextair].type)) {
							if (core.hasSpecial(nextair, 57)) {
								hero.mana += 200;
								core.drawTip("无法对敌方boss使用");
								res(false)
							} else if (!['轻坦', '中坦', '重坦', '坦歼'].includes(core.material.enemys[nextair].type) || core.hasSpecial(nextair, 65)) {

								//动画
								core.playSound('bomber3.mp3');
								core.showImage(1, 'aircraft2.png', null, [480, 32 * Y - 109], 1, 0, () => {
									setTimeout(() => {
										core.drawAnimate('explore', X, Y);
										if (flags.aoe[范围伤害目标]) {
											if (!core.hasSpecial(core.material.enemys[nextair].special, 87)) {
												flags.aoe[范围伤害目标] += core.getRealStatus('atk') * 4;
											} else {
												flags.aoe[范围伤害目标] += core.getRealStatus('atk') * 1.2;
											}
										} else {
											if (!core.hasSpecial(core.material.enemys[nextair].special, 87)) {
												flags.aoe[范围伤害目标] = core.getRealStatus('atk') * 4;
											} else {
												flags.aoe[范围伤害目标] = core.getRealStatus('atk') * 1.2;
											}
										}
										if (core.getEnemyInfo(nextair, hero, X, Y, floorId).hp <= 0) {
											core.plugin.kill(X, Y, floorId, nextair)
										}
										core.updateStatusBar();
									}, (18 - X) / 21 * 500);
									core.moveImage(1, [-195, 32 * Y - 109], 1, null, 500, () => {
										core.hideImage(1, 0);
										res(true)

									})
								});
							} else {
								core.playSound('bomber3.mp3');
								core.showImage(1, 'aircraft2.png', null, [480, 32 * Y - 109], 1, 0, () => {
									setTimeout(() => {
										core.drawAnimate('vehicleexplore', X, Y);
										core.plugin.kill(X, Y, floorId, nextair)
									}, (18 - X) / 21 * 500);
									core.moveImage(1, [-195, 32 * Y - 109], 1, null, 500, () => {
										core.hideImage(1, 0);
										res(true)
									})
								});
							}
						} else {
							hero.mana += 200;
							core.drawTip("只能对地面目标使用");
							res(false)
						}
					}
				})

			},
			description: '只能对面前的非boss地面部队使用。如果是坦克，则直接将其摧毁；如果无法摧毁，改为投掷一轮伤害为4倍攻击力的炸弹攻击'
		},

		{ // 12
			id: 12,
			strategy: false,
			name: '从海底出击',
			cost: 150,
			description: '下一场战斗中，派遣一艘潜艇支援：在战斗开始时发射8枚鱼雷，随后潜艇撤退'
		},

		{ // 13
			id: 13,
			strategy: false,
			name: '金牌损管',
			cost: 300,
			description: '仅在海战地图生效。下一场战斗结束后，回满血量，获得20%当前后勤值的临时后勤值。可扑灭火灾以及修复漏水。'
		},

		{ // 14
			id: 14,
			strategy: false,
			name: '补给线',
			cost: 250,
			description: '下一场战斗中，后勤值提升10倍，临时后勤值提升5倍'
		},

		{ // 15
			id: 15,
			strategy: true,
			name: 'C-47空中列车',
			cost: 300,
			func: function () {
				return new Promise(res => {
					//action.js和ui.js可优化：把遍历全图改成找周围两圈
					if (core.status.thisMap.area !== '陆地' && core.status.thisMap.area !== '浅滩') {
						core.status.hero.mana += 300;
						core.drawTip('只能在陆地或浅滩使用');
						res(false)
						return;
					}
					let blocks = core.searchBlockWithFilter((block) => {
						if (block.event.cls === 'enemys') {
							let Type = core.material.enemys[block.event.id].type;
							if (core.hasSpecial(block.event.id, 40) || Type === '战斗机' || Type === '重型战斗机') {
								return true;
							}
						}
					})
					core.plugin.c47 = {};
					for (let N = 0; N < 15; N++) {
						for (let M = 0; M < 15; M++) {
							core.plugin.c47[N + ',' + M] = 0;
						}
					}
					blocks.forEach(v => {
						let ID = v.block.event.id,
							TYPE = core.material.enemys[ID].type;
						if (core.hasSpecial(ID, 40)) {
							for (let A = -2; A < 3; A++) {
								if (A + v.x < 0 || A + v.x > 14) {
									continue;
								}
								for (let B = -2; B < 3; B++) {
									if (B + v.y < 0 || B + v.y > 14) {
										continue;
									}
									let C47X = A + v.x,
										C47Y = B + v.y;
									core.plugin.c47[C47X + ',' + C47Y] = 1;
								}
							}
						}
						if (TYPE === '战斗机' || TYPE === '重型战斗机') {
							for (let A = -1; A < 2; A++) {
								if (A + v.x < 0 || A + v.x > 14) {
									continue;
								}
								for (let B = -1; B < 2; B++) {
									if (B + v.y < 0 || B + v.y > 14) {
										continue;
									}
									let C47X = A + v.x,
										C47Y = B + v.y;
									core.plugin.c47[C47X + ',' + C47Y] = 1;
								}
							}
						}
					})
					core.ui._drawc47();
					res(true)
				})

			},
			description: '只能在陆地或浅滩使用，空降至当前地图的中心对称落点。如果目标地点处于“防空”范围内或敌方战斗机周围8格内，会失去等同于80%血限的生命值。（确认空降坐标时，点击目标点或空格进行空降，重新按对应快捷键则取消空降）'
		},

		{ // 16
			id: 16,
			strategy: true,
			name: '海上霸主',
			cost: 1000,
			func: function () {
				return new Promise(res => {
					let havecv = core.getEquip(3) === 'eagle' || core.getEquip(3) === 'illustrious' || core.getEquip(3) === 'raider' || core.getEquip(3) === 'essex' || core.getEquip(3) === 'enterprise',
						bombed = flags.航母炸过的楼层,
						floorId = core.status.floorId;
					if (!havecv) {
						core.status.hero.mana += 1000;
						core.drawTip('未装备航空母舰');
						core.playSound('error.mp3');
						res(false)
						return;
					}
					if (core.getEquip(3) === 'enterprise') {
						//使用成功，以下为技能效果
						if (!core.isReplaying() && !main.replayChecking) { //不在录像中
							core.insertCommonEvent('海上霸主动画', void 0, void 0, void 0, () => {

								for (let x = 0; x <= 14; x++) {
									for (let y = 0; y <= 14; y++) {
										if (core.getBlockCls(x, y, floorId) === 'enemys') {
											let Type = core.material.enemys[core.getBlockId(x, y)].type,
												enemyhp = core.getEnemyInfo(core.material.enemys[core.getBlockId(x, y)]).hp,
												heroatk = core.getRealStatus('atk'),
												herotop = core.getRealStatus('top'),
												block = core.getBlockId(x, y);
											if (!core.hasSpecial(block, 57)) {
												if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
													if (Type === '驱逐' || Type === '轻巡' || Type === '重巡' || Type === '战列' || Type === '航母') {
														flags.aoe[x + ',' + y + ',' + floorId] = heroatk * 200 + herotop * 40;
														if (Type === '重巡' || Type === '战列' || Type === '航母') {
															flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.3;
														}
													} else if (core.plugin.Luftwaffe.includes(Type) && Type !== '导弹') {
														flags.aoe[x + ',' + y + ',' + floorId] = heroatk * 15;
													} else if (core.plugin.Army.includes(Type)) {
														flags.aoe[x + ',' + y + ',' + floorId] = enemyhp * 0.3;
													}
												} else {
													if (Type === '驱逐' || Type === '轻巡' || Type === '重巡' || Type === '战列' || Type === '航母') {
														flags.aoe[x + ',' + y + ',' + floorId] += heroatk * 200 + herotop * 40;
														if (Type === '重巡' || Type === '战列' || Type === '航母') {
															flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.3;
														}
													} else if (core.plugin.Luftwaffe.includes(Type) && Type !== '导弹') {
														flags.aoe[x + ',' + y + ',' + floorId] += heroatk * 15;
													} else if (core.plugin.Army.includes(Type)) {
														flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.3;
													}
												}
											}
											if (core.getEnemyInfo(block, hero, x, y, floorId).hp <= 0) {
												core.plugin.kill(x, y, floorId)
												core.drawAnimate('fire', x, y, false);

											}
										}
									}
								}
								res(true)
							}); //公共事件
						} else { //在录像中
							core.lockControl();
							for (let x = 0; x <= 14; x++) {
								for (let y = 0; y <= 14; y++) {
									if (core.getBlockCls(x, y, floorId) === 'enemys') {
										let Type = core.material.enemys[core.getBlockId(x, y)].type,
											enemyhp = core.getEnemyInfo(core.material.enemys[core.getBlockId(x, y)]).hp,
											heroatk = core.getRealStatus('atk'),
											herotop = core.getRealStatus('top'),
											block = core.getBlockId(x, y);
										if (!core.hasSpecial(block, 57)) {
											if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
												if (Type === '驱逐' || Type === '轻巡' || Type === '重巡' || Type === '战列' || Type === '航母') {
													flags.aoe[x + ',' + y + ',' + floorId] = heroatk * 200 + herotop * 40;
													if (Type === '重巡' || Type === '战列' || Type === '航母') {
														flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.3;
													}
												} else if (core.plugin.Luftwaffe.includes(Type) && Type !== '导弹') {
													flags.aoe[x + ',' + y + ',' + floorId] = heroatk * 15;
												} else if (core.plugin.Army.includes(Type)) {
													flags.aoe[x + ',' + y + ',' + floorId] = enemyhp * 0.3;
												}
											} else {
												if (Type === '驱逐' || Type === '轻巡' || Type === '重巡' || Type === '战列' || Type === '航母') {
													flags.aoe[x + ',' + y + ',' + floorId] += heroatk * 200 + herotop * 40;
													if (Type === '重巡' || Type === '战列' || Type === '航母') {
														flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.3;
													}
												} else if (core.plugin.Luftwaffe.includes(Type) && Type !== '导弹') {
													flags.aoe[x + ',' + y + ',' + floorId] += heroatk * 15;
												} else if (core.plugin.Army.includes(Type)) {
													flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.3;
												}
											}
										}
										if (core.getEnemyInfo(block, hero, x, y, floorId).hp <= 0) {
											core.plugin.kill(x, y, floorId)
										}
									}
								}
							}
							res(true)
						}
					} else if (core.status.thisMap.area === '海洋') {
						//使用成功，以下为技能效果
						if (!core.isReplaying() && !main.replayChecking) { //不在录像中
							core.insertCommonEvent('海上霸主动画', void 0, void 0, void 0, () => {
								for (let x = 0; x <= 14; x++) {
									for (let y = 0; y <= 14; y++) {
										if (core.getBlockCls(x, y, floorId) === 'enemys') {
											let Type = core.material.enemys[core.getBlockId(x, y)].type,
												enemyhp = core.getEnemyInfo(core.material.enemys[core.getBlockId(x, y)]).hp,
												heroatk = core.getRealStatus('atk'),
												herotop = core.getRealStatus('top'),
												block = core.getBlockId(x, y);
											if (!core.hasSpecial(block, 57)) {
												if (Type === '驱逐' || Type === '轻巡' || Type === '重巡' || Type === '战列' || Type === '航母') {
													if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
														flags.aoe[x + ',' + y + ',' + floorId] = heroatk * 100 + herotop * 20;
													} else { flags.aoe[x + ',' + y + ',' + floorId] += heroatk * 100 + herotop * 20; }
													if (core.getEnemyInfo(block, hero, x, y, floorId).hp <= 0) {
														core.plugin.kill(x, y, floorId)
														core.drawAnimate('fire', x, y, false);
													}
												} else if (core.plugin.Luftwaffe.includes(Type) && Type !== '导弹') {
													if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
														flags.aoe[x + ',' + y + ',' + floorId] = heroatk * 5;
													} else { flags.aoe[x + ',' + y + ',' + floorId] += heroatk * 5; }
													if (core.getEnemyInfo(block, hero, x, y, floorId).hp <= 0) {
														core.plugin.kill(x, y, floorId)
														core.drawAnimate('fire', x, y, false);
													}
												}
											}
										}
									}
								}

								core.status.hero.hp -= core.getRealStatus('hpmax') * 0.2;
								if (core.getRealStatus('hp') <= 0) {
									core.lose();
								}
								res(true)
							}); //公共事件
						} else { //在录像中
							for (let x = 0; x <= 14; x++) {
								for (let y = 0; y <= 14; y++) {
									if (core.getBlockCls(x, y, floorId) === 'enemys') {
										let Type = core.material.enemys[core.getBlockId(x, y)].type,
											enemyhp = core.getEnemyInfo(core.material.enemys[core.getBlockId(x, y)]).hp,
											heroatk = core.getRealStatus('atk'),
											herotop = core.getRealStatus('top'),
											block = core.getBlockId(x, y);
										if (!core.hasSpecial(block, 57)) {
											if (Type === '驱逐' || Type === '轻巡' || Type === '重巡' || Type === '战列' || Type === '航母') {
												if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
													flags.aoe[x + ',' + y + ',' + floorId] = core.status.hero.atk * 100 + core.status.hero.top * 20;
												} else { flags.aoe[x + ',' + y + ',' + floorId] += core.status.hero.atk * 100 + core.status.hero.top * 20; }
												if (core.getEnemyInfo(block, hero, x, y, floorId).hp <= 0) {
													core.plugin.kill(x, y, floorId)
												}
											} else if (core.plugin.Luftwaffe.includes(Type) && Type !== '导弹') {
												if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
													flags.aoe[x + ',' + y + ',' + floorId] = heroatk * 5;
												} else { flags.aoe[x + ',' + y + ',' + floorId] += heroatk * 5; }
												if (core.getEnemyInfo(block, hero, x, y, floorId).hp <= 0) {
													core.plugin.kill(x, y, floorId)
													core.drawAnimate('fire', x, y, false);
												}
											}
										}
									}
								}
							}
							core.status.hero.hp -= core.getRealStatus('hpmax') * 0.2;
							if (core.getRealStatus('hp') <= 0) {
								core.lose();
							}
							res(true)
						}
					} else {
						core.status.hero.mana += 1000;
						core.drawTip('仅能在海洋使用');
						core.playSound('error.mp3');
						res(false)
						return;
					}
				})

			},
			description: '只能在海上使用且必须装备着航空母舰。使用后，派出舰载机发动空袭，使全图除潜艇外的敌方海军受到100倍攻击力和20倍雷击值的伤害，敌方空军受到5倍攻击力的伤害（可致死并获得金经），同时我方损失等同于20%血限的hp。可在同一地图中多次使用，对boss无效。'
		},

		{ // 17
			id: 17,
			strategy: false,
			name: '装甲突击',
			cost: 100,
			description: '下一场战斗中，主角攻击力+30%（必须装备着坦克且对方是地面单位，否则无效果）'
		},

		{ // 18
			id: 18,
			strategy: false,
			name: '孟菲斯美女号',
			cost: 200,
			description: '下一场战斗中，友军不会受到任何伤害，且战斗伤害减少25%'
		},

		{ // 19
			id: 19,
			strategy: false,
			name: '刺猬弹',
			cost: 100,
			description: '下一场战斗中发射“刺猬”反潜迫击炮，在首回合对潜艇造成1倍攻击力的伤害，且战后不会被狼群协同攻击'
		},

		{ // 20
			id: 20,
			strategy: true,
			name: '红色尾翼',
			cost: 1000,
			func: function () {
				return new Promise(res => {
					const thisfloor = core.status.floorId;
					if (flags.skill20Floor.includes(thisfloor)) { //检测当前楼层是否已使用技能
						core.status.hero.mana += 1000;
						core.drawTip('不能在同一楼层重复使用');
						core.playSound('error.mp3');
						res(false)
						return;
					} else {
						if (!core.isReplaying() && !main.replayChecking) { //不在录像中
							core.insertCommonEvent('红色尾翼动画', void 0, void 0, void 0, () => {
								res(true)
							}); //公共事件
							flags.skill20Floor.push(thisfloor);
						} else {
							flags.skill20Floor.push(thisfloor);
						}
					}
				})

			},
			description: '获得第332战斗机大队的支援：无条件直接夺取当前地图制空权。主角在当前地图行动期间，友军受到的战斗伤害-80%，且对敌方空军伤害+10%。'
		},

		{ // 21
			id: 21,
			strategy: true,
			name: 'T34谢尔曼风琴',
			cost: 600,
			func: function () {
				return new Promise(res => {
					let X = core.status.hero.loc.x,
						Y = core.status.hero.loc.y,
						floorId = core.status.floorId;
					if (core.status.thisMap.area === '陆地' || core.status.thisMap.area === '浅滩') {
						if (!core.isReplaying() && !main.replayChecking) { //不在录像中
							core.insertCommonEvent('火箭炮动画', void 0, void 0, void 0, () => {

								//技能效果
								for (let a = -3; a <= 3; a++) {
									for (let b = -3; b <= 3; b++) {
										if (core.getBlockCls(X + a, Y + b, floorId) === 'enemys') {
											let Type = core.material.enemys[core.getBlockId(X + a, Y + b)].type,
												enemyhp = core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp;
											if (Type === '步兵') {
												if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId]) {
													flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = enemyhp * 0.7;
												} else { flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += enemyhp * 0.7; }
											} else if (Type === '反坦克炮' || Type === '榴弹炮' || Type === '高射炮') {
												if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId]) {
													flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = enemyhp * 0.5;
												} else { flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += enemyhp * 0.5; }
											} else if (Type === '轻坦' || Type === '中坦' || Type === '重坦' || Type === '坦歼') {
												if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId]) {
													flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = enemyhp * 0.2;
												} else { flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += enemyhp * 0.2; }
											}

											if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b)
										}

									}
								}
								res(true)
							}); //公共事件
						} else {
							//技能效果
							for (let a = -3; a <= 3; a++) {
								for (let b = -3; b <= 3; b++) {
									if (core.getBlockCls(X + a, Y + b, floorId) === 'enemys') {
										let Type = core.material.enemys[core.getBlockId(X + a, Y + b)].type,
											enemyhp = core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp;
										if (Type === '步兵') {
											if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId]) {
												flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = enemyhp * 0.7;
											} else { flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += enemyhp * 0.7; }
										} else if (Type === '反坦克炮' || Type === '榴弹炮' || Type === '高射炮') {
											if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId]) {
												flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = enemyhp * 0.5;
											} else { flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += enemyhp * 0.5; }
										} else if (Type === '轻坦' || Type === '中坦' || Type === '重坦' || Type === '坦歼') {
											if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId]) {
												flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = enemyhp * 0.2;
											} else { flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += enemyhp * 0.2; }
										}
										if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b)
									}

								}
							}
							res(true)
						}
					} else {
						core.status.hero.mana += 600;
						core.drawTip('只能用于地面作战');
						core.playSound('error.mp3');
						res(false)
						return;
					}
				})

			},
			description: '仅可在地面使用。呼叫火箭炮覆盖打击，打击目标为以自身为中心7×7正方形区域，其中的敌人陆军受到不同程度的损失：步兵失去70%生命值，炮兵50%，装甲20%。对同一目标重复使用，则根据其现有血量计算。'
		},

		{ // 22
			id: 22,
			strategy: true,
			name: '地毯式轰炸',
			cost: 3000,
			func: function () {
				return new Promise(res => {
					if (!flags.地毯轰炸楼层) {
						flags.地毯轰炸楼层 = [];
					}
					let bombed = flags.地毯轰炸楼层,
						floorId = core.status.floorId,
						todo = [];
					if (core.status.thisMap.area === '陆地' || core.status.thisMap.area === '浅滩') {
						if (bombed.includes(floorId)) {
							core.status.hero.mana += 3000;
							core.drawTip('不可在同一地图重复使用');
							core.playSound('error.mp3');
							res(false)
							return;
						} else {
							//使用成功，以下为技能效果
							if (!core.isReplaying() && !main.replayChecking) { //不在录像中
								core.insertCommonEvent('地毯式轰炸动画', void 0, void 0, void 0, () => {
									for (let x = 0; x <= 14; x++) {
										for (let y = 0; y <= 14; y++) {
											if (core.getBlockCls(x, y, floorId) === 'enemys') {
												let Type = core.material.enemys[core.getBlockId(x, y)].type,
													enemyhp = core.getEnemyInfo(core.material.enemys[core.getBlockId(x, y)]).hp,
													block = core.getBlockId(x, y);
												if (!core.hasSpecial(block, 57)) {
													if (Type === '步兵' || Type === '轻坦' || Type === '中坦' || Type === '重坦' || Type === '坦歼' || Type === '反坦克炮' || Type === '榴弹炮' || Type === '高射炮' || Type === '建筑') {
														if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
															flags.aoe[x + ',' + y + ',' + floorId] = enemyhp * 0.7;
														} else { flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.7; }
													} else if (Type === '战斗机' || Type === '重型战斗机' || Type === '攻击机' || Type === '俯冲轰炸机' || Type === '鱼雷轰炸机' || Type === '中型轰炸机') {
														if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
															flags.aoe[x + ',' + y + ',' + floorId] = enemyhp * 0.15;
														} else { flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.15; }
													}
												}
											}
										}
									}
									flags.地毯轰炸楼层.push(floorId);
									res(true)
								}); //公共事件
							} else { //在录像中
								for (let x = 0; x <= 14; x++) {
									for (let y = 0; y <= 14; y++) {
										if (core.getBlockCls(x, y, floorId) === 'enemys') {
											let Type = core.material.enemys[core.getBlockId(x, y)].type,
												enemyhp = core.getEnemyInfo(core.material.enemys[core.getBlockId(x, y)]).hp,
												block = core.getBlockId(x, y);
											if (!core.hasSpecial(block, 57)) {
												if (Type === '步兵' || Type === '轻坦' || Type === '中坦' || Type === '重坦' || Type === '坦歼' || Type === '反坦克炮' || Type === '榴弹炮' || Type === '高射炮' || Type === '建筑') {
													if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
														flags.aoe[x + ',' + y + ',' + floorId] = enemyhp * 0.7;
													} else { flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.7; }
												} else if (Type === '战斗机' || Type === '重型战斗机' || Type === '攻击机' || Type === '俯冲轰炸机' || Type === '鱼雷轰炸机' || Type === '中型轰炸机') {
													if (!flags.aoe[x + ',' + y + ',' + core.status.floorId]) {
														flags.aoe[x + ',' + y + ',' + floorId] = enemyhp * 0.15;
													} else { flags.aoe[x + ',' + y + ',' + floorId] += enemyhp * 0.15; }
												}
											}
										}
									}
								}
								flags.地毯轰炸楼层.push(floorId);
								res(ture)
							}
						}
					} else {
						core.status.hero.mana += 3000;
						core.drawTip('当前地图不可使用');
						core.playSound('error.mp3');
						res(false)
						return;
					}
				})

			},
			description: '仅可在陆地或浅滩使用。呼叫大规模轰炸机群展开全图轰炸，全体敌方陆军损失70%生命值，空军损失15%生命值。每张地图仅限使用1次，对boss无效'
		},

		{ // 23
			id: 23,
			strategy: true,
			name: '铝箔条',
			cost: 600,
			func: function () {
				return new Promise(res => {
					if (core.getFlag('铝箔条', false)) {
						core.status.hero.mana += 600;
						core.drawTip('敌人已被干扰，无需重复释放');
						core.playSound('error.mp3');
						res(false)
						return;
					} else {
						if (!core.isReplaying() && !main.replayChecking) { //不在录像中
							core.insertCommonEvent('铝箔条动画', void 0, void 0, void 0);
							flags.铝箔条 += 3;
						} else { //在录像中
							flags.铝箔条 += 3;
						}
						res(true)
					}
				})

			},
			description: '抛洒铝箔条，干扰敌方雷达。在接下来的3场战斗中，光环类（指挥、截断等）、协同攻击类（陷阱、防空等）技能无效'
		},

		{ // 24
			id: 24,
			strategy: true,
			name: '翼尖挑衅',
			cost: 200,
			func: function () {
				return new Promise(res => {
					let x = core.nextX(),
						y = core.nextY(),
						X = core.nextX(2),
						Y = core.nextY(2),
						floorId = core.status.floorId,
						范围伤害目标 = X + ',' + Y + ',' + floorId,
						bomblocal = core.getBlock(X, Y),
						nextair = core.getBlockId(x, y);
					let todo = [];
					if (core.isReplaying() || main.replayChecking) { //录像播放
						if (nextair === 'v1missile') {
							core.removeBlock(x, y);
							if (bomblocal) {
								if (core.getBlockCls(X, Y) === 'enemys' && core.plugin.Army.includes(core.material.enemys[core.getBlockId(X, Y)].type) && !core.hasSpecial(bomblocal, 57)) {
									core.plugin.kill(X, Y, floorId)
								} else if (core.getBlockCls(X, Y) === 'animates' || core.getBlockCls(X, Y) === 'terrains' || core.getBlockCls(X, Y) === 'npcs' || core.getBlockCls(X, Y) === 'autotile' || core.getBlockCls(X, Y) === 'tileset') {
									if (bomblocal.event.canBreak) {
										core.removeBlock(X, Y);
									}
								}
							}
							res(true)
						} else {
							core.status.hero.mana += 200;
							core.drawTip('此技能仅对V1导弹生效');
							core.playSound('error.mp3');
							res(false)
							return;
						}
					} else { //正常执行
						if (nextair === 'v1missile') {
							core.insertCommonEvent('推导弹', void 0, void 0, void 0, () => {
								if (bomblocal) {
									if (core.getBlockCls(X, Y) === 'enemys' && core.plugin.Army.includes(core.material.enemys[core.getBlockId(X, Y)].type) && !core.hasSpecial(bomblocal, 57)) {
										core.plugin.kill(X, Y, floorId)
									} else if (core.getBlockCls(X, Y) === 'animates' || core.getBlockCls(X, Y) === 'terrains' || core.getBlockCls(X, Y) === 'npcs' || core.getBlockCls(X, Y) === 'autotile' || core.getBlockCls(X, Y) === 'tileset') {
										if (bomblocal.event.canBreak) {
											core.removeBlock(X, Y);
										}
									}
								}
							});
							res(true)
						} else {
							core.status.hero.mana += 200;
							core.drawTip('此技能仅对V1导弹生效');
							core.playSound('error.mp3');
							res(false)
							return;
						}
					}
					core.updateStatusBar();
				})

			},
			description: '将面前的V1导弹向前推1格并引爆。如果引爆地点是可破墙壁或非boss地面单位，可将其摧毁（不获得金经）'
		},

		{ // 25
			id: 25,
			strategy: true,
			name: '高脚柜炸弹',
			cost: 1000,
			func: function () {
				return new Promise(res => {
					if (core.getEquip(6) === 'lancaster' || core.getEquip(6) === 'b29' || core.getEquip(6) === 'tu4') {
						if (core.status.thisMap.area === '陆地' || core.status.thisMap.area === '浅滩') {
							if (core.isReplaying() || main.replayChecking) { //在录像中
								core.insertCommonEvent('高脚柜选择目标', void 0, void 0, void 0, () => {
									let X = flags.x,
										Y = flags.y,
										floorId = core.status.floorId;
									//爆炸中心
									if (flags.touchenemy !== 'failed') { //是怪
										if (core.hasSpecial(core.getBlockId(X, Y), 76)) { //北宅
											if (!flags.aoe[X + ',' + Y + ',' + floorId]) {
												flags.aoe[X + ',' + Y + ',' + floorId] = core.getEnemyInfo(core.material.enemys[core.getBlockId(X, Y)]).hp * 0.4;
												if (core.getEnemyInfo(core.getBlockId(X, Y), null, X, Y).hp <= 0) core.kill(X, Y);
											} else {
												flags.aoe[X + ',' + Y + ',' + floorId] += core.getEnemyInfo(core.material.enemys[core.getBlockId(X, Y)]).hp * 0.4;
												if (core.getEnemyInfo(core.getBlockId(X, Y), null, X, Y).hp <= 0) core.kill(X, Y);
											}
										} else if (core.hasSpecial(core.getBlockId(X, Y), 57) && core.plugin.Army.includes(core.material.enemys[core.getBlockId(X, Y)].type)) { //主将
											if (!flags.aoe[X + ',' + Y + ',' + core.status.floorId]) {
												flags.aoe[X + ',' + Y + ',' + floorId] = core.getEnemyInfo(core.material.enemys[core.getBlockId(X, Y)]).hp * 0.6;
												if (core.getEnemyInfo(core.getBlockId(X, Y), null, X, Y).hp <= 0) core.kill(X, Y);
											} else {
												flags.aoe[X + ',' + Y + ',' + floorId] += core.getEnemyInfo(core.material.enemys[core.getBlockId(X, Y)]).hp * 0.6;
												if (core.getEnemyInfo(core.getBlockId(X, Y), null, X, Y).hp <= 0) core.kill(X, Y);
											}
										} else if (core.plugin.Army.includes(core.material.enemys[core.getBlockId(X, Y)].type)) { //常规怪
											core.kill(X, Y);
										}
									} else if (core.getBlockCls(X, Y) === 'animates' || core.getBlockCls(X, Y) === 'terrains' || core.getBlockCls(X, Y) === 'npcs' || core.getBlockCls(X, Y) === 'autotile' || core.getBlockCls(X, Y) === 'tileset') {
										if (core.getBlock(X, Y).event.canBreak) {
											core.removeBlock(X, Y);
										}
									}
									//爆炸冲击范围
									for (let a = -3; a <= 3; a++) {
										for (let b = -3; b <= 3; b++) {
											if (a === 0 && b === 0) { continue }
											if (core.getBlockCls(X + a, Y + b, floorId) === 'enemys') { //是怪
												if (!core.hasSpecial(core.getBlockId(X + a, Y + b), 57) && core.plugin.Army.includes(core.material.enemys[core.getBlockId(X + a, Y + b)].type)) { //主将
													if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + core.status.floorId]) {
														flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = core.getEnemyInfo(core.material.enemys[core.getBlockId(X + a, Y + b)]).hp * 0.4;
														if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b);
													} else {
														flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += core.getEnemyInfo(core.material.enemys[core.getBlockId(X + a, Y + b)]).hp * 0.4;
														if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b);
													}
												} else if (core.plugin.Army.includes(core.material.enemys[core.getBlockId(X + a, Y + b)].type)) { //常规怪
													if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + core.status.floorId]) {
														flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = core.getEnemyInfo(core.material.enemys[core.getBlockId(X + a, Y + b)]).hp * 0.8;
														if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b);
													} else {
														flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += core.getEnemyInfo(core.material.enemys[core.getBlockId(X + a, Y + b)]).hp * 0.8;
														if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b);
													}
												}
											} else if (core.getBlockCls(X + a, Y + b) === 'animates' || core.getBlockCls(X + a, Y + b) === 'terrains' || core.getBlockCls(X + a, Y + b) === 'npcs' || core.getBlockCls(X + a, Y + b) === 'autotile' || core.getBlockCls(X + a, Y + b) === 'tileset') { //是墙
												if (core.getBlock(X + a, Y + b).event.canBreak) {
													core.removeBlock(X + a, Y + b);
												}
											}
										}
									}
									res(true)
								});
							} else { //不在录像中
								core.insertCommonEvent('高脚柜选择目标', void 0, void 0, void 0, () => {
									let X = flags.x,
										Y = flags.y,
										floorId = core.status.floorId;
									//动画
									core.playSound('bomber1.mp3');
									core.showImage(1, 'aircraft4.png', null, [32 * X - 109, 480], 1, 0, () => {
										setTimeout(() => {
											core.drawAnimate('bigexplore', X, Y);
											core.vibrate('horizontal', 1000, 50, 100);
											//爆炸中心
											if (flags.touchenemy !== 'failed') { //是怪
												if (core.hasSpecial(core.getBlockId(X, Y), 76)) { //北宅
													if (!flags.aoe[X + ',' + Y + ',' + floorId]) {
														flags.aoe[X + ',' + Y + ',' + floorId] = core.getEnemyInfo(core.material.enemys[core.getBlockId(X, Y)]).hp * 0.4;
														if (core.getEnemyInfo(core.getBlockId(X, Y), null, X, Y).hp <= 0) core.kill(X, Y);
													} else {
														flags.aoe[X + ',' + Y + ',' + floorId] += core.getEnemyInfo(core.material.enemys[core.getBlockId(X, Y)]).hp * 0.4;
														if (core.getEnemyInfo(core.getBlockId(X, Y), null, X, Y).hp <= 0) core.kill(X, Y);
													}
												} else if (core.hasSpecial(core.getBlockId(X, Y), 57) && core.plugin.Army.includes(core.material.enemys[core.getBlockId(X, Y)].type)) { //主将
													if (!flags.aoe[X + ',' + Y + ',' + core.status.floorId]) {
														flags.aoe[X + ',' + Y + ',' + floorId] = core.getEnemyInfo(core.material.enemys[core.getBlockId(X, Y)]).hp * 0.6;
														if (core.getEnemyInfo(core.getBlockId(X, Y), null, X, Y).hp <= 0) core.kill(X, Y);
													} else {
														flags.aoe[X + ',' + Y + ',' + floorId] += core.getEnemyInfo(core.material.enemys[core.getBlockId(X, Y)]).hp * 0.6;
														if (core.getEnemyInfo(core.getBlockId(X, Y), null, X, Y).hp <= 0) core.kill(X, Y);
													}
												} else if (core.plugin.Army.includes(core.material.enemys[core.getBlockId(X, Y)].type)) { //常规怪
													core.kill(X, Y);
												}
											} else if (core.getBlockCls(X, Y) === 'animates' || core.getBlockCls(X, Y) === 'terrains' || core.getBlockCls(X, Y) === 'npcs' || core.getBlockCls(X, Y) === 'autotile' || core.getBlockCls(X, Y) === 'tileset') {
												if (core.getBlock(X, Y).event.canBreak) {
													core.removeBlock(X, Y);
												}
											}
											//爆炸冲击范围
											for (let a = -3; a <= 3; a++) {
												for (let b = -3; b <= 3; b++) {
													if (a === 0 && b === 0) { continue }
													if (core.getBlockCls(X + a, Y + b, floorId) === 'enemys') { //是怪
														if (!core.hasSpecial(core.getBlockId(X + a, Y + b), 57) && core.plugin.Army.includes(core.material.enemys[core.getBlockId(X + a, Y + b)].type)) { //主将
															if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + core.status.floorId]) {
																flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = core.getEnemyInfo(core.material.enemys[core.getBlockId(X + a, Y + b)]).hp * 0.4;
																if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b);
															} else {
																flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += core.getEnemyInfo(core.material.enemys[core.getBlockId(X + a, Y + b)]).hp * 0.4;
																if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b);
															}
														} else if (core.plugin.Army.includes(core.material.enemys[core.getBlockId(X + a, Y + b)].type)) { //常规怪
															if (!flags.aoe[(X + a) + ',' + (Y + b) + ',' + core.status.floorId]) {
																flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] = core.getEnemyInfo(core.material.enemys[core.getBlockId(X + a, Y + b)]).hp * 0.8;
																if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b);
															} else {
																flags.aoe[(X + a) + ',' + (Y + b) + ',' + floorId] += core.getEnemyInfo(core.material.enemys[core.getBlockId(X + a, Y + b)]).hp * 0.8;
																if (core.getEnemyInfo(core.getBlockId(X + a, Y + b), null, X + a, Y + b).hp <= 0) core.kill(X + a, Y + b);
															}
														}
													} else if (core.getBlockCls(X + a, Y + b) === 'animates' || core.getBlockCls(X + a, Y + b) === 'terrains' || core.getBlockCls(X + a, Y + b) === 'npcs' || core.getBlockCls(X + a, Y + b) === 'autotile' || core.getBlockCls(X + a, Y + b) === 'tileset') { //是墙
														if (core.getBlock(X + a, Y + b).event.canBreak) {
															core.removeBlock(X + a, Y + b);
														}
													}
												}
											}
											core.updateStatusBar();
										}, (18 - X) / 21 * 2000);
										core.moveImage(1, [32 * X - 109, -195], 1, null, 2000, () => {
											core.hideImage(1, 0);
											res(true)
										})
									});
								});
							}
						} else {
							core.status.hero.mana += 1000;
							core.drawTip('只能在陆地或浅滩使用');
							core.playSound('error.mp3');
							res(false)
							return;
						}
					} else {
						core.status.hero.mana += 1000;
						core.drawTip('未装备合适载体，无法投放');
						core.playSound('error.mp3');
						res(false)
						return;
					}
				})
			},
			description: '只能在陆地或浅滩使用，且必须装备着特定轰炸机。使用后在当前地图中指定地点投下一枚“高脚柜”炸弹，爆炸中心的非boss陆军将被直接摧毁（无视抗破），boss失去60%生命值。同时，爆炸中心九宫格3格半径内将发生小范围地震，摧毁可破墙壁，范围内其他敌方陆军损失80%血量（boss为40%）'
		},

		{ // 26
			id: 26,
			strategy: true,
			name: '钳形攻势',
			cost: 2000,
			description: '废案'
		}
	]

	this._makemiddleList = function (list, depth, x) {
		if (list.length > 13) { // 分页
			var suffix = list.splice(6);
			list.unshift({ "text": "上一页", "action": [{ "type": "break", "n": 1 }] })

			list.push({ "text": "下一页", "action": this._makemiddleList(suffix, depth + 1, x) });
		} else {
			var suffix = list.splice(6);
			list.unshift({ "text": "上一页", "action": [{ "type": "break", "n": 1 }] })

			list.push({ "text": "下一页", "action": this._makelastList(suffix, depth + 1, x) });
		}
		list.push({ "text": "查看当前快捷键", "action": [{ "type": "insert", "name": "查看技能" }] });
		list.push({ "text": "保存并进入下一章", "action": [{ "type": "break", "n": depth + x * 2 }] });
		return [{
			"type": "while",
			"condition": "true",
			"data": [{ "type": "choices", "text": "\t[技能快捷键设定] ", "choices": list }]
		}];
	}
	this._makelastList = function (list, depth, x) {
		list.unshift({ "text": "上一页", "action": [{ "type": "break", "n": 1 }] })
		list.push({ "text": "查看当前快捷键", "action": [{ "type": "insert", "name": "查看技能" }] });
		list.push({ "text": "保存并进入下一章", "action": [{ "type": "break", "n": depth + x * 2 }] });
		return [{
			"type": "while",
			"condition": "true",
			"data": [{ "type": "choices", "text": "\t[技能快捷键设定] ", "choices": list }]
		}];
	}
	this._makeList = function (list, depth, x) {
		if (list.length > 8) { // 分页
			if (list.length > 14) {
				var suffix = list.splice(7);
				list.push({ "text": "下一页", "action": this._makemiddleList(suffix, depth + 1, x) });
			} else {
				var suffix = list.splice(7);
				list.push({ "text": "下一页", "action": this._makelastList(suffix, depth + 1, x) });
			}

		}
		list.push({ "text": "查看当前快捷键", "action": [{ "type": "insert", "name": "查看技能" }] });
		list.push({ "text": "保存并进入下一章", "action": [{ "type": "break", "n": depth + x * 2 }] });
		return [{
			"type": "while",
			"condition": "true",
			"data": [{
				"type": "choices",
				"text": "\t[技能快捷键设定] ",
				"choices": list
			}]
		}]

	}
	this.bindSkills = function (x = 0) {
		var list = [];
		for (var i = 0; i < flags.learned.length; ++i) {
			if (flags.learned[i]) {
				var info = this.skillInfo[i],
					obj = {
						"text": info.name + (info.strategy ? '（即时）' : '') + '，消耗：' + info.cost,
						"action": [{
							"type": "choices",
							"text": "请选择要绑定的技能按键",
							"choices": [{
									"text": "数字1:" + core.plugin.skillInfo[flags.skillList[0]].name + (core.plugin.skillInfo[flags.skillList[0]].strategy ? '（即时）' : '') + '，消耗：' + core.plugin.skillInfo[flags.skillList[0]].cost,
									"action": [
										{ "type": "function", "function": "function(){\n var index = flags.skillList.indexOf(" + info.id + ")\n if (index >= 0) flags.skillList[index] = flags.skillList[0]\n flags.skillList[0] = " + info.id + "\n core.ui.statusBar._update_skills()\n core.insertAction(core.plugin.bindSkills(" + (x + 1) + "))}" },
									]
								},
								{
									"text": "数字2:" + core.plugin.skillInfo[flags.skillList[1]].name + (core.plugin.skillInfo[flags.skillList[1]].strategy ? '（即时）' : '') + '，消耗：' + core.plugin.skillInfo[flags.skillList[1]].cost,
									"action": [
										{ "type": "function", "function": "function(){\nvar index = flags.skillList.indexOf(" + info.id + ")\nif (index >= 0) flags.skillList[index] = flags.skillList[1]\nflags.skillList[1] = " + info.id + "\n core.ui.statusBar._update_skills()\n core.insertAction(core.plugin.bindSkills(" + (x + 1) + "))}" },
									]
								},
								{
									"text": "数字3:" + core.plugin.skillInfo[flags.skillList[2]].name + (core.plugin.skillInfo[flags.skillList[2]].strategy ? '（即时）' : '') + '，消耗：' + core.plugin.skillInfo[flags.skillList[2]].cost,
									"action": [
										{ "type": "function", "function": "function(){\nvar index = flags.skillList.indexOf(" + info.id + ")\nif (index >= 0) flags.skillList[index] = flags.skillList[2]\nflags.skillList[2] = " + info.id + "\n core.ui.statusBar._update_skills()\n core.insertAction(core.plugin.bindSkills(" + (x + 1) + "))}" },
									]
								},
								{
									"text": "数字4:" + core.plugin.skillInfo[flags.skillList[3]].name + (core.plugin.skillInfo[flags.skillList[3]].strategy ? '（即时）' : '') + '，消耗：' + core.plugin.skillInfo[flags.skillList[3]].cost,
									"action": [
										{ "type": "function", "function": "function(){\nvar index = flags.skillList.indexOf(" + info.id + ")\nif (index >= 0) flags.skillList[index] = flags.skillList[3]\nflags.skillList[3] = " + info.id + "\n core.ui.statusBar._update_skills()\n core.insertAction(core.plugin.bindSkills(" + (x + 1) + "))}" },
									]
								},
								{
									"text": "数字5:" + core.plugin.skillInfo[flags.skillList[4]].name + (core.plugin.skillInfo[flags.skillList[4]].strategy ? '（即时）' : '') + '，消耗：' + core.plugin.skillInfo[flags.skillList[4]].cost,
									"action": [
										{ "type": "function", "function": "function(){\nvar index = flags.skillList.indexOf(" + info.id + ")\nif (index >= 0) flags.skillList[index] = flags.skillList[4]\nflags.skillList[4] = " + info.id + "\n core.ui.statusBar._update_skills()\n core.insertAction(core.plugin.bindSkills(" + (x + 1) + "))}" },
									]
								},
								{
									"text": "数字6:" + core.plugin.skillInfo[flags.skillList[5]].name + (core.plugin.skillInfo[flags.skillList[5]].strategy ? '（即时）' : '') + '，消耗：' + core.plugin.skillInfo[flags.skillList[5]].cost,
									"action": [
										{ "type": "function", "function": "function(){\nvar index = flags.skillList.indexOf(" + info.id + ")\nif (index >= 0) flags.skillList[index] = flags.skillList[5]\nflags.skillList[5] = " + info.id + "\n core.ui.statusBar._update_skills()\n core.insertAction(core.plugin.bindSkills(" + (x + 1) + "))}" },
									]
								},
								{
									"text": "数字7:" + core.plugin.skillInfo[flags.skillList[6]].name + (core.plugin.skillInfo[flags.skillList[6]].strategy ? '（即时）' : '') + '，消耗：' + core.plugin.skillInfo[flags.skillList[6]].cost,
									"action": [
										{ "type": "function", "function": "function(){\nvar index = flags.skillList.indexOf(" + info.id + ")\nif (index >= 0) flags.skillList[index] = flags.skillList[6]\nflags.skillList[6] = " + info.id + "\n core.ui.statusBar._update_skills()\n core.insertAction(core.plugin.bindSkills(" + (x + 1) + "))}" },
									]
								},
							]
						}, ]
					};
				list.push(obj);
			}
		}
		return this._makeList(list, 1, x);
	}

},
    "额外信息": function () {
	/* 宝石血瓶左下角显示数值
	 * 注意！！！不要在道具属性中直接操作flags，使用core.status.hero.flags或core.setFlag系列函数代替！
	 * 需要将 变量：itemDetail改为true才可正常运行
	 * 请尽量减少勇士的属性数量，否则可能会出现严重卡顿（划掉，现在你放一万个属性也不会卡）
	 * 注意：这里的属性必须是core.status.hero里面的，flag无法显示
	 * 如果不想显示，可以core.setFlag("itemDetail", false);
	 * 然后再core.getItemDetail();
	 * 如有bug在大群或造塔群@古祠
	 */

	// 忽略的道具

	const ignore = ["superPotion"];

	// 取消注释下面这句可以减少超大地图的判定。
	// 如果地图宝石过多，可能会略有卡顿，可以尝试取消注释下面这句话来解决。
	// core.bigmap.threshold = 256;
	const origin = core.control.updateStatusBar;
	core.updateStatusBar = core.control.updateStatusBar = function () {
		if (core.getFlag("__statistics__")) return;
		else return origin.apply(core.control, arguments);
	};

	core.control.updateDamage = function (floorId, ctx) {
		floorId = floorId || core.status.floorId;
		if (!floorId || core.status.gameOver || main.mode != "play") return;
		const onMap = ctx == null;

		// 没有怪物手册
		if (!core.hasItem("book")) return;
		core.status.damage.posX = core.bigmap.posX;
		core.status.damage.posY = core.bigmap.posY;
		if (!onMap) {
			const width = core.floors[floorId].width,
				height = core.floors[floorId].height;
			// 地图过大的缩略图不绘制显伤
			if (width * height > core.bigmap.threshold) return;
		}
		this._updateDamage_damage(floorId, onMap);
		this._updateDamage_extraDamage(floorId, onMap);
		core.getItemDetail(floorId); // 宝石血瓶详细信息
		this.drawDamage(ctx);
	};
	// 获取宝石信息 并绘制
	this.getItemDetail = function (floorId) {
		if (!core.status.thisMap) {
			return;
		}
		floorId = floorId ?? core.status.thisMap.floorId;
		const beforeRatio = core.status.thisMap.ratio || 1;
		core.status.thisMap.ratio = core.status.maps[floorId].ratio;
		let diff = {};
		const before = core.status.hero;
		const hero = core.clone(core.status.hero);
		const handler = {
			set(target, key, v) {
				diff[key] = v - (target[key] || 0);
				if (!diff[key]) diff[key] = void 0;
				return true;
			},
		};
		core.status.hero = new Proxy(hero, handler);
		core.status.maps[floorId].blocks.forEach(function (block) {
			if (
				block.event.cls !== "items" ||
				ignore.includes(block.event.id) ||
				block.disable
			)
				return;
			const x = block.x,
				y = block.y;
			// v2优化，只绘制范围内的部分
			if (core.bigmap.v2) {
				if (
					x < core.bigmap.posX - core.bigmap.extend ||
					x > core.bigmap.posX + core._WIDTH_ + core.bigmap.extend ||
					y < core.bigmap.posY - core.bigmap.extend ||
					y > core.bigmap.posY + core._HEIGHT_ + core.bigmap.extend
				) {
					return;
				}
			}
			diff = {};
			const id = block.event.id;
			const item = core.material.items[id];
			if (item.cls === "equips") {
				// 装备也显示
				const diff = item.equip.value ?? {};
				const per = item.equip.percentage ?? {};
				for (const name in per) {
					diff[name + "per"] = per[name].toString() + "%";
				}
				drawItemDetail(diff, x, y);
				return;
			}
			// 跟数据统计原理一样 执行效果 前后比较
			core.setFlag("__statistics__", true);
			try {
				eval(item.itemEffect);
			} catch (error) {}
			drawItemDetail(diff, x, y);
		});
		core.status.thisMap.ratio = beforeRatio;
		core.status.hero = before;
		window.hero = before;
		window.flags = before.flags;
	};

	// 绘制
	function drawItemDetail(diff, x, y) {
		const px = 32 * x + 2,
			py = 32 * y + 30;
		let content = "";
		// 获得数据和颜色
		let i = 0;
		for (const name in diff) {
			if (!diff[name]) continue;
			let color = "#fff";

			if (typeof diff[name] === "number")
				content = core.formatBigNumber(diff[name], true);
			else content = diff[name];
			switch (name) { //
			case "atk":
			case "atkper":
				color = "#FF7A7A";
				break;
			case "top":
			case "topper":
				color = "#00E6F1";
				break;
			case "mdef":
			case "mdefper":
				color = "#6EFF83";
				break;
			case "hp":
				color = "#A4FF00";
				break;
			case "hpmax":
			case "hpmaxper":
				color = "#F9FF00";
				break;
			case "mana":
				color = "#c66";
				break;
			}
			// 绘制
			core.status.damage.data.push({
				text: content,
				px: px,
				py: py - 10 * i,
				color: color,
			});
			i++;
		}
	}
},
    "任务系统": function () {
	// 在此增加新插件
	class TaskSystem {
		constructor() {
			this.tasksInfo = []
		}
		setTask(name, text, info, n) {
			this.tasksInfo.push({ name, text, n, tasks: info.map(v => new Task(v)) })
			this.tasksInfo[this.tasksInfo.length - 1].complter = this.checkTask(this.tasksInfo.length - 1)
		}
		checkTask(index) {
			if (this.tasksInfo[index].success) return true
			else return this.tasksInfo[index].tasks.reduce((a, b) => a + Number(b.check()), 0) >= this.tasksInfo[index].n
		}
		removeTaskByName(name) {
			const index = this.tasksInfo.findIndex(v => v.name === name)
			removeTask(index)
		}
		removeTask(index) {
			this.tasksInfo.splice(index, 1)
		}
		clearTask() {
			this.tasksInfo = []
		}
		checkAll() {
			for (let i = 0; i < this.tasksInfo.length; i++) {
				this.checkTask(i)
			}
		}
		submitTask() {
			if (!flags.score) flags.score = 0
			for (let i = 0; i < this.tasksInfo.length; i++) {
				flags.score += Number(this.checkTask(i)) * 100
			}
			this.clearTask()
		}
		successTask(index) {
			this.tasksInfo[index].success = true
			this.tasksInfo[index].complter = true
		}
		successTaskByName(name) {
			const index = this.tasksInfo.findIndex(v => v.name === name)
			this.tsuccessTask(index)
		}
		save() {
			return this.tasksInfo.map(v => {
				const c = core.clone(v)
				const b = v.tasks.map(a => a.save());
				c.tasks = b
				return c
			})
		}
		load(data) {

			this.tasksInfo = data.map(v => {
				const c = core.clone(v)
				const b = v.tasks.map(a => new Task(a))
				c.tasks = b
				return c
			})

		}

	}
	class Task {
		constructor(info) {
			this.type = info.type
			this.text = info.text
			if (info.type === "checkItem") {
				this.checkItem = info.checkItem
				this.count = info.count
				this.operator = info.operator
				this.has = info.has ?? core.itemCount(this.checkItem)
			} else if (info.type === "checkStatus") {
				this.checkStatus = info.checkStatus
				this.count = info.count
				this.operator = info.operator
				this.has = info.has ?? core.getRealStatus(this.checkStatus)
			} else if (info.type === "checkFlag") {
				this.checkFlag = info.checkFlag
				this.count = core.calValue(info.count)
				this.operator = info.operator
				this.has = info.has ?? core.getFlag(this.checkFlag)
			} else if (info.type === "checkBlock") { //剩余图块
				this.checkBlock = info.checkBlock
				this.count = info.count
				this.operator = info.operator
				this.floorId = info.floorId
				this.has = info.has ?? core.searchBlock(this.checkBlock, this.floorId).length
			} else if (info.type === "checkEnemyType") {
				this.checkEnemyType = info.checkEnemyType
				this.count = info.count
				this.operator = info.operator
				this.floorId = info.floorId
				this.has = info.has ?? core.searchBlockWithFilter(block => block.event.cls.startsWith("enemy") && block.event.type === this.checkEnemyType, this.floorId).length
			} else if (info.type === "kill") {
				this.floorId = info.floorId
				this.kill = info.kill
				this.count = info.count
				this.has = info.has ?? 0
				this.operator = info.operator
			} else if (info.type === "killLocs") {
				this.floorId = info.floorId
				this.loc = info.loc
				this.count = info.count
				this.has = info.has ?? 0
				this.operator = info.operator
			} else if (info.type === "killType") {
				this.floorId = info.floorId
				this.killType = info.killType
				this.count = info.count
				this.has = info.has ?? 0
				this.operator = info.operator
			} else if (info.type === "killSpecial") {
				this.floorId = info.floorId
				this.killSpecial = core.calValue(info.killSpecial)
				this.count = info.count
				this.has = info.has ?? 0
				this.operator = info.operator
			} else if (info.type === "killAll") {
				this.floorId = info.floorId
				this.has = info.has ?? core.searchBlockWithFilter(block => block.event.cls.startsWith("enemy"), this.floorId).length
			} else if (info.type === "specialBlock") { //踩雷
				this.floorId = info.floorId
				this.specialType = info.specialType
				this.count = info.count
				this.has = info.has ?? 0
				this.operator = info.operator
			} else if (info.type === "gosthFloor") {
				this.floorId = info.floorId
				this.count = info.count
				this.has = info.has ?? 0
				this.operator = info.operator
			} else if (info.type === "arrival") {
				this.floorId = info.floorId
				this.has = info.has ?? 0
			}


		}
		check() {
			if (this.type === "checkItem") return this.checkInfo(this.count, this.has = core.itemCount(this.checkItem))
			else if (this.type === "checkStatus") return this.checkInfo(this.count, this.has = core.getRealStatus(this.checkStatus))
			else if (this.type === "checkFlag") return this.checkInfo(this.count, this.has = core.getFlag(this.checkFlag))
			else if (this.type === "checkBlock") return this.checkInfo(this.count, this.has = core.searchBlock(this.checkBlock, this.floorId).length)
			else if (this.type === "checkEnemyType") return this.checkInfo(this.count, this.has = core.searchBlockWithFilter(block => block.event.cls.startsWith("enemy") && core.material.enemys[block.event.id].type === this.checkEnemyType, this.floorId).length)
			else if (this.type === "killAll") return this.has = core.searchBlockWithFilter(block => block.event.cls.startsWith("enemy"), this.floorId).length, this.has === 0
			else if (this.type === "specialBlock" || this.type === "gosthFloor" || this.type === "kill" || this.type === "killSpecial" || this.type === "killLocs" || this.type === "killType") return this.checkInfo(this.count, this.has)
			else if (this.type === "arrival") return Boolean(this.has)
			else if (this.type === "outer") return false

		}
		checkInfo(check, has) {
			switch (this.operator) {
			case "=":
				return check === has
			case "<":
				return check > has
			case "<=":
				return check >= has
			case ">":
				return check < has
			case ">=":
				return check <= has
			}
		}
		save() {
			let info = { type: this.type, text: this.text }
			if (info.type === "checkItem") {
				info.checkItem = this.checkItem
				info.count = this.count
				info.operator = this.operator
				info.has = this.has
			} else if (info.type === "checkStatus") {
				info.checkStatus = this.checkStatus
				info.count = this.count
				info.operator = this.operator
				info.has = this.has
			} else if (info.type === "checkFlag") {
				info.checkFlag = this.checkFlag
				info.count = this.count
				info.operator = this.operator
				info.has = this.has
			} else if (info.type === "checkBlock") {
				info.checkBlock = this.checkBlock
				info.count = this.count
				info.operator = this.operator
				info.floorId = this.floorId
				info.has = this.has
			} else if (info.type === "checkEnemyType") {
				info.checkEnemyType = this.checkEnemyType
				info.count = this.count
				info.operator = this.operator
				info.floorId = this.floorId
				info.has = this.has
			} else if (info.type === "kill") {
				info.floorId = this.floorId
				info.kill = this.kill
				info.count = this.count
				info.has = this.has
				info.operator = this.operator
			} else if (info.type === "killLocs") {
				info.floorId = this.floorId
				info.loc = this.loc
				info.count = this.count
				info.has = this.has
				info.operator = this.operator
			} else if (info.type === "killType") {
				info.floorId = this.floorId
				info.killType = this.killType
				info.count = this.count
				info.has = this.has
				info.operator = this.operator
			} else if (info.type === "killSpecial") {
				info.floorId = this.floorId
				info.killSpecial = this.killSpecial
				info.count = this.count
				info.has = this.has
				info.operator = this.operator
			} else if (info.type === "killAll") {
				info.floorId = this.floorId
				info.has = this.has
			} else if (info.type === "specialBlock") {
				info.floorId = this.floorId
				info.specialType = this.specialType
				info.count = this.count
				info.has = this.has
				info.operator = this.operator
			} else if (info.type === "gosthFloor") {
				info.floorId = this.floorId
				info.count = this.count
				info.has = this.has
				info.operator = this.operator
			} else if (info.type === "arrival") {
				info.floorId = this.floorId
				info.has = this.has
			}
			return info
		}

	}
	core.taskSystem = new TaskSystem()

	core.registerEvent("setTask", (data) => {
		core.taskSystem.setTask(data.name, data.text, data.info, data.n)
		core.doAction()
	})
	core.registerEvent("removeTask", (data) => {
		core.taskSystem.removeTask(data.index)
		core.doAction()
	})
	core.registerEvent("removeTaskByName", (data) => {
		core.taskSystem.removeTaskByName(data.name)
		core.doAction()
	})
	core.registerEvent("successTask", (data) => {
		core.taskSystem.successTask(data.index)
		core.doAction()
	})
	core.registerEvent("successTaskByName", (data) => {
		core.taskSystem.successTaskByName(data.name)
		core.doAction()
	})
	core.registerEvent("clearTask", () => {
		core.taskSystem.clearTask()
		core.doAction()
	})

	core.registerEvent("submitTask", () => {
		core.taskSystem.submitTask()
		core.doAction()
	})

	core.registerEvent("hideui", () => {
		core.ui.statusBar.hidetheui()
		core.doAction()
	})

	core.registerEvent("showui", () => {
		core.ui.statusBar.showmetheui()
		core.doAction()
	})
},
    "战后动画": function () {
	// 在此增加新插件
	this.battleAnimate = {
		步兵: "shoot",
		轻坦: "vehicleexplore",
		中坦: "vehicleexplore",
		坦歼: "vehicleexplore",
		重坦: "vehicleexplore",
		反坦克炮: "vehicleexplore",
		榴弹炮: "howitzer",
		高射炮: "flak",
		建筑: "zone",
		潜艇: "xinxinwater",
		驱逐: "xinxinwater",
		轻巡: "xinxinwater",
		重巡: "xinxinwater",
		战列: "xinxinwater",
		航母: "xinxinwater",
		商船: "xinxinwater",
		战斗机: "shootair",
		重型战斗机: "shootair",
		俯冲轰炸机: "shootair",
		鱼雷轰炸机: "shootair",
		中型轰炸机: "shootair",
		导弹: "explore3"
	};
	this.battleSound = {
		步兵: "",
		轻坦: "move2.mp3",
		中坦: "move2.mp3",
		坦歼: "move2.mp3",
		重坦: "move3.mp3",
		反坦克炮: "bomb.mp3",
		榴弹炮: "zone2.mp3",
		高射炮: "bomb.mp3",
		建筑: "",
		潜艇: "Sonar.wav",
		驱逐: "",
		轻巡: "",
		重巡: "seabattle.mp3",
		战列: "seabattle.mp3",
		航母: "seabattle.mp3",
		商船: "",
		战斗机1: "fighter.mp3",
		战斗机2: "crash2.mp3",
		战斗机3: "jet.mp3",
		重型战斗机1: "fighter.mp3",
		重型战斗机2: "crash2.mp3",
		俯冲轰炸机1: "stukadive.mp3",
		俯冲轰炸机2: "crash2.mp3",
		鱼雷轰炸机1: "bomber1.mp3",
		鱼雷轰炸机2: "crash2.mp3",
		中型轰炸机1: "bomber1.mp3",
		中型轰炸机2: "crash2.mp3",
		导弹: "v_jet_pass.mp3"
	};
},
    "怪物位置和范围显示": function () {
	// 在此增加新插件
	const setting = {
		启用: true,
		炮击: { 本体: '#ffa500', 范围: '#ee82ee', 启动: true },
		指挥: { 本体: '#ff0000', 启动: true },
		点杀: { 本体: '#8a2be2', 启动: true },
		防空: { 本体: '#7fffd4', 范围: '#f0ffff', 启动: true },
		谍报: { 本体: '#ffffff', 启动: true },
		截断: { 本体: '#00ff00', 启动: true },
		警戒: { 本体: '#800000', 启动: true },
		堡垒: { 本体: '#000000', 范围: '#c0c0c0', 启动: true },
		燃烧: { 本体: '#dc143c', 启动: true },
		遥控: { 本体: '#00ffff', 启动: true },
		陷阱: { 本体: '#ffff00', 范围: '#ffa07a', 启动: true },
		阵地: { 本体: '#8b008b', 范围: '#ff00ff', 启动: true },
		迂回包抄: { 本体: '#ff69b4', 启动: true },
		直掩: { 本体: '#ffd700', 启动: true },
		观测: { 本体: '#ff8c00', 启动: true },
		火力覆盖: { 本体: '#0000cd', 启动: true },
		进水: { 本体: '#1e90ff', 启动: true },
		alpha: 0.5
	};


	core.draw = function draw() {
		let ctx = core.dymCanvas.location;
		//let ctx2 = core.dymCanvas.location2;
		if (!ctx) {
			ctx = core.createCanvas('location', 0, 0, 480, 480, 61);
			//ctx.globalCompositeOperation = 'color';
		}
		/*if (!ctx2) {
			ctx2 = core.createCanvas("location2", 0, 0, 480, 480, 62);
			ctx2.globalCompositeOperation = 'color';
		}*/
		core.clearMap(ctx);
		//core.clearMap(ctx2);
		//if (core.status.event.id) return;
		let newsystem = core.getLocalStorage('drawui', setting);
		if (!newsystem.启用) {
			return;
		}
		core.setOpacity(ctx, 1);

		//core.setOpacity(ctx2, 0.8);
		if (!core.status.checkBlock?.cache?.map) { return }
		Object.entries(core.status.checkBlock.cache.map).forEach(([key, value]) => {
			if (!newsystem[key].启动) { return }
			//console.log(value);
			Object.entries(value).forEach(([k, v]) => {
				//console.log(k, v);
				const loc = k.split(",").map(Number);
				core.setAlpha(ctx, 1);
				ctx.lineWidth = 2;
				core.drawLine(ctx, 32 * loc[0], 32 * loc[1], 32 * loc[0] + 6, 32 * loc[1], newsystem[key].本体); //左上横线
				core.drawLine(ctx, 32 * loc[0], 32 * loc[1], 32 * loc[0], 32 * loc[1] + 6, newsystem[key].本体); //左上竖线
				core.drawLine(ctx, 32 * loc[0] + 32, 32 * loc[1], 32 * loc[0] + 26, 32 * loc[1], newsystem[key].本体); //右上横线
				core.drawLine(ctx, 32 * loc[0] + 32, 32 * loc[1], 32 * loc[0] + 32, 32 * loc[1] + 6, newsystem[key].本体); //右上竖线
				core.drawLine(ctx, 32 * loc[0], 32 * loc[1] + 32, 32 * loc[0] + 6, 32 * loc[1] + 32, newsystem[key].本体); //左下横线
				core.drawLine(ctx, 32 * loc[0], 32 * loc[1] + 32, 32 * loc[0], 32 * loc[1] + 26, newsystem[key].本体); //左下竖线
				core.drawLine(ctx, 32 * loc[0] + 32, 32 * loc[1] + 32, 32 * loc[0] + 26, 32 * loc[1] + 32, newsystem[key].本体); //右下横线
				core.drawLine(ctx, 32 * loc[0] + 32, 32 * loc[1] + 32, 32 * loc[0] + 32, 32 * loc[1] + 26, newsystem[key].本体); //右下竖线
				core.drawLine(ctx, 32 * loc[0], 32 * loc[1] + 16, 32 * loc[0] + 32, 32 * loc[1] + 16, newsystem[key].本体); //准星-横
				core.drawLine(ctx, 32 * loc[0] + 16, 32 * loc[1], 32 * loc[0] + 16, 32 * loc[1] + 32, newsystem[key].本体); //准星-竖
				core.strokeCircle(ctx, 32 * loc[0] + 16, 32 * loc[1] + 16, 8, newsystem[key].本体); //准星-圆
				//console.log('本体边框');
				if (newsystem[key].范围) {
					//console.log('领域范围');
					core.setAlpha(ctx, newsystem.alpha);
					ctx.lineWidth = 3;
					core.fillRect(ctx, 32 * (loc[0] - v), 32 * (loc[1] - v), (2 * v + 1) * 32, (2 * v + 1) * 32, newsystem[key].范围); //领域范围
					core.setAlpha(ctx, 0.8);
					core.strokeRect(ctx, 32 * (loc[0] - v), 32 * (loc[1] - v), (2 * v + 1) * 32, (2 * v + 1) * 32, newsystem[key].本体); //领域边框
				}
			});
		});
	}
	//core.registerAnimationFrame('drawui', true, draw);
},
    "击杀": function () {
	// 在此增加新插件
	this.kill = function (x, y, floorId, enemyId, notask, animate, sound) {
		let id = typeof enemyId === 'string' ? enemyId : core.getBlockId(x, y, floorId)
		let todo = []
		if (!floorId) floorId = core.status.floorId
		let money = core.getEnemyValue(id, 'money', x, y, floorId),
			exp = core.getEnemyValue(id, 'exp', x, y, floorId);
		if (core.hasEquip('m4') || core.hasEquip('m4a2') || core.hasEquip('m4a3') || core.hasEquip('m4a3e2') || core.hasEquip('firefly')) money += 5; //谢馒头，触发在双倍前
		if (core.hasEquip('classj')) money += 5; //J级驱逐舰
		if (flags.warmachine === true) money *= 2; //工业潜能，金币翻倍，计算在下面几个之前
		if (core.hasEquip('edinburgh')) money += 2; //爱丁堡号巡洋舰，金币+2
		if (core.hasEquip('hood')) money += 10; //胡德号，金币+10
		if (core.hasItem('coin')) money *= 2; // 幸运金币：双倍
		if (core.hasSpecial(id, 61) || flags.咒 === true) money = 0; // 投降
		core.status.hero.money += money;
		core.status.hero.statistics.money += money;
		if (core.hasEquip('classv')) exp += 2; //V级驱逐舰
		if (core.hasEquip('classj')) exp += 5; //J级驱逐舰
		if (core.hasEquip('hood')) exp += 10; //胡德号，经验+10
		if (core.hasEquip('m4a2') || core.hasEquip('m4a3') || core.hasEquip('m4a3e2') || core.hasEquip('firefly')) exp *= 2; //馒头
		if (core.hasSpecial(id, 61) || flags.咒 === true) exp = 0; // 投降
		core.status.hero.exp += exp;
		core.status.hero.statistics.exp += exp;
		core.push(todo, core.floors[floorId].afterBattle[x + "," + y]);
		core.push(todo, core.material.enemys[id].afterBattle);
		delete((flags.enemyOnPoint || {})[floorId] || {})[x + "," + y];
		delete flags.aoe[x + ',' + y + ',' + floorId];
		// 因为removeBlock和hideBlock都会刷新状态栏，因此将删除部分移动到这里并保证刷新只执行一次，以提升效率
		if (core.getBlock(x, y, floorId) != null) {
			// 检查是否是重生怪物；如果是则仅隐藏不删除
			if (core.hasSpecial(id, 23)) {
				core.hideBlock(x, y, floorId);
			} else {
				core.removeBlock(x, y, floorId);
			}
		} else {
			core.updateStatusBar();
		}

		if (core.hasSpecial(id, 84)) {
			core.setBlock("yellowWall", Block.x, Block.y, floorId);
		}
		var hint = "打败 " + core.getEnemyValue(id, "name", x, y);
		if (core.flags.statusBarItems.indexOf('enableMoney') >= 0)
			hint += ',' + core.getStatusLabel('money') + '+' + money; // hint += "，金币+" + money;
		if (core.flags.statusBarItems.indexOf('enableExp') >= 0)
			hint += ',' + core.getStatusLabel('exp') + '+' + exp; // hint += "，经验+" + exp;
		if (core.hasSpecial(id, 50)) {
			if (core.searchBlockWithFilter(block => block.event.cls.startsWith('enemy') && core.hasSpecial(block.event.id, 50), floorId).length === 0) {
				core.searchBlockWithFilter(block => block.event.cls.startsWith('enemy') && core.hasSpecial(block.event.id, 49), floorId).forEach(v => {
					core.drawAnimate('explore2', v.x, v.y);
					core.removeBlock(v.x, v.y, floorId)
				})

			}
		}
		core.drawTip(hint, id);
		core.insertAction(todo);
		//战后任务检测
		if (!notask) {
			core.taskSystem.tasksInfo.forEach(v => v.tasks.forEach(a => {
				if (a.type === "kill" && (!a.floorId || a.floorId.includes(floorId))) {
					if (a.kill && a.kill === id) {
						a.has++;
					} else if (!a.kill) {
						a.has++;
					}

				} else if (a.type === "killSpecial" && (!a.floorId || a.floorId.includes(floorId))) {
					if (core.hasSpecial(id, a.killSpecial))
						a.has++;
				} else if (a.type === "killLocs" && a.floorId === floorId) {
					if (a.loc[0] instanceof Array) {
						a.loc.forEach(v => {
							if (x === v[0] && y === v[1] && (!a.floorId || a.floorId.includes(floorId)))
								a.has++;
						})
					} else {
						if (Block.x === a.loc[0] && Block.y === a.loc[1] && (!a.floorId || a.floorId.includes(floorId)))
							a.has++;
					}
				} else if (a.type === "killType" && (!a.floorId || a.floorId.includes(floorId))) {
					if (a.killType === core.material.enemys[id].type)
						a.has++;
				}
			}));
		}

	}
},
    "玩家控制范围显示系统": function () {
	// 在此增加新插件
	const setting = {
		启用: true,
		炮击: { 本体: '#ffa500', 范围: '#ee82ee', 启动: true },
		指挥: { 本体: '#ff0000', 启动: true },
		点杀: { 本体: '#8a2be2', 启动: true },
		防空: { 本体: '#7fffd4', 范围: '#f0ffff', 启动: true },
		谍报: { 本体: '#ffffff', 启动: true },
		截断: { 本体: '#00ff00', 启动: true },
		警戒: { 本体: '#800000', 启动: true },
		堡垒: { 本体: '#ffffff', 范围: '#c0c0c0', 启动: true },
		燃烧: { 本体: '#dc143c', 启动: true },
		遥控: { 本体: '#00ffff', 启动: true },
		陷阱: { 本体: '#ffff00', 范围: '#ffa07a', 启动: true },
		阵地: { 本体: '#8b008b', 范围: '#ff00ff', 启动: true },
		迂回包抄: { 本体: '#ff69b4', 启动: true },
		直掩: { 本体: '#ffd700', 启动: true },
		观测: { 本体: '#ff8c00', 启动: true },
		火力覆盖: { 本体: '#0000cd', 启动: true },
		进水: { 本体: '#1e90ff', 启动: true },
		alpha: 0.5
	};
	this.范围显示开关 = function () {
		core.lockControl();
		core.status.event.id = '特技显示设置中';
		let newsystem = core.getLocalStorage('drawui', setting);
		let ctx = core.createCanvas('底层画布', 0, 0, 480, 480, 1000);
		core.setTextAlign(ctx, 'left');
		core.fillRect(ctx, 0, 0, 480, 480, 'rgba(0, 0, 0, 1)');
		core.fillText(ctx, '怪物特技显示辅助系统设置', 50, 30, '#fff', '32px kaiti');
		core.fillText(ctx, '开关□', 30, 80, '#ffff00', '24px kaiti');
		//core.strokeRect(ctx, 80, 62, 20, 20, '#fff', 2);
		if (newsystem.启用) {
			core.fillText(ctx, '√', 80, 77, '#00ff00', "24px kaiti");
			core.fillText(ctx, '□炮击:本体□ 范围□', 10, 110, '#fff', '24px kaiti');
			if (newsystem.炮击.启动) {
				core.fillText(ctx, '√', 10, 108, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 92, 20, 20, newsystem.炮击.本体);
			core.fillRect(ctx, 216, 92, 20, 20, newsystem.炮击.范围);

			core.fillText(ctx, '□指挥:本体□', 10, 140, '#fff', '24px kaiti');
			if (newsystem.指挥.启动) {
				core.fillText(ctx, '√', 10, 138, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 122, 20, 20, newsystem.指挥.本体);

			core.fillText(ctx, '□点杀:本体□', 10, 170, '#fff', '24px kaiti');
			if (newsystem.点杀.启动) {
				core.fillText(ctx, '√', 10, 168, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 152, 20, 20, newsystem.点杀.本体);

			core.fillText(ctx, '□防空:本体□ 范围□', 10, 200, '#fff', '24px kaiti');
			if (newsystem.防空.启动) {
				core.fillText(ctx, '√', 10, 198, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 182, 20, 20, newsystem.防空.本体);
			core.fillRect(ctx, 216, 182, 20, 20, newsystem.防空.范围);

			core.fillText(ctx, '□谍报:本体□', 10, 230, '#fff', '24px kaiti');
			if (newsystem.谍报.启动) {
				core.fillText(ctx, '√', 10, 228, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 212, 20, 20, newsystem.谍报.本体);

			core.fillText(ctx, '□截断:本体□', 10, 260, '#fff', '24px kaiti');
			if (newsystem.截断.启动) {
				core.fillText(ctx, '√', 10, 258, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 242, 20, 20, newsystem.截断.本体);

			core.fillText(ctx, '□警戒:本体□', 10, 290, '#fff', '24px kaiti');
			if (newsystem.警戒.启动) {
				core.fillText(ctx, '√', 10, 288, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 272, 20, 20, newsystem.警戒.本体);

			core.fillText(ctx, '□堡垒:本体□ 范围□', 10, 320, '#fff', '24px kaiti');
			if (newsystem.堡垒.启动) {
				core.fillText(ctx, '√', 10, 318, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 302, 20, 20, newsystem.堡垒.本体);
			core.fillRect(ctx, 216, 302, 20, 20, newsystem.堡垒.范围);

			core.fillText(ctx, '□燃烧:本体□', 10, 350, '#fff', '24px kaiti');
			if (newsystem.燃烧.启动) {
				core.fillText(ctx, '√', 10, 348, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 332, 20, 20, newsystem.燃烧.本体);

			core.fillText(ctx, '□遥控:本体□', 10, 380, '#fff', '24px kaiti');
			if (newsystem.遥控.启动) {
				core.fillText(ctx, '√', 10, 378, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 362, 20, 20, newsystem.遥控.本体);

			core.fillText(ctx, '□陷阱:本体□ 范围□', 10, 410, '#fff', '24px kaiti');
			if (newsystem.陷阱.启动) {
				core.fillText(ctx, '√', 10, 408, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 392, 20, 20, newsystem.陷阱.本体);
			core.fillRect(ctx, 216, 392, 20, 20, newsystem.陷阱.范围);

			core.fillText(ctx, '□阵地:本体□ 范围□', 10, 440, '#fff', '24px kaiti');
			if (newsystem.阵地.启动) {
				core.fillText(ctx, '√', 10, 438, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 138, 422, 20, 20, newsystem.阵地.本体);
			core.fillRect(ctx, 216, 422, 20, 20, newsystem.阵地.范围);

			core.fillText(ctx, '□迂回:本体□', 250, 110, '#fff', '24px kaiti');
			if (newsystem.迂回包抄.启动) {
				core.fillText(ctx, '√', 250, 108, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 378, 92, 20, 20, newsystem.迂回包抄.本体);

			core.fillText(ctx, '□直掩:本体□', 250, 140, '#fff', '24px kaiti');
			if (newsystem.直掩.启动) {
				core.fillText(ctx, '√', 250, 138, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 378, 122, 20, 20, newsystem.直掩.本体);

			core.fillText(ctx, '□观测:本体□', 250, 170, '#fff', '24px kaiti');
			if (newsystem.观测.启动) {
				core.fillText(ctx, '√', 250, 168, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 378, 152, 20, 20, newsystem.观测.本体);

			core.fillText(ctx, '□火力:本体□', 250, 200, '#fff', '24px kaiti');
			if (newsystem.火力覆盖.启动) {
				core.fillText(ctx, '√', 250, 198, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 378, 182, 20, 20, newsystem.火力覆盖.本体);

			core.fillText(ctx, '□进水:本体□', 250, 230, '#fff', '24px kaiti');
			if (newsystem.进水.启动) {
				core.fillText(ctx, '√', 250, 228, '#00ff00', '24px kaiti');
			}
			core.fillRect(ctx, 378, 212, 20, 20, newsystem.进水.本体);
			core.fillText(ctx, '范围透明度:', 250, 260, '#fff', '24px kaiti');
			core.drawLine(ctx, 250, 280, 400, 280, '#808080', 4);
			core.fillCircle(ctx, 150 * (1 - newsystem.alpha) + 250, 280, 4, '#ffffff');
			core.fillText(ctx, Math.floor(100 - newsystem.alpha * 100), 410, 285);
		}
		core.fillText(ctx, '退出', 400, 440, '#ffff00', '24px kaiti');
	}

	function rect(x, y, w, h, px, py) {
		return px >= x && px <= x + w && py >= y && py <= y + h;
	}
	let skillname, type = '本体';
	this.点击切换 = function (x, y, px, py) {
		let newsystem = core.getLocalStorage('drawui', setting);
		if (rect(80, 62, 20, 20, px, py)) {
			newsystem.启用 = !newsystem.启用;
		}
		if (newsystem.启用) {
			if (rect(12, 92, 20, 20, px, py)) {
				newsystem.炮击.启动 = !newsystem.炮击.启动;
			} else if (rect(12, 122, 20, 20, px, py)) {
				newsystem.指挥.启动 = !newsystem.指挥.启动;
			} else if (rect(12, 152, 20, 20, px, py)) {
				newsystem.点杀.启动 = !newsystem.点杀.启动;
			} else if (rect(12, 182, 20, 20, px, py)) {
				newsystem.防空.启动 = !newsystem.防空.启动;
			} else if (rect(12, 212, 20, 20, px, py)) {
				newsystem.谍报.启动 = !newsystem.谍报.启动;
			} else if (rect(12, 242, 20, 20, px, py)) {
				newsystem.截断.启动 = !newsystem.截断.启动;
			} else if (rect(12, 272, 20, 20, px, py)) {
				newsystem.警戒.启动 = !newsystem.警戒.启动;
			} else if (rect(12, 302, 20, 20, px, py)) {
				newsystem.堡垒.启动 = !newsystem.堡垒.启动;
			} else if (rect(12, 332, 20, 20, px, py)) {
				newsystem.燃烧.启动 = !newsystem.燃烧.启动;
			} else if (rect(12, 362, 20, 20, px, py)) {
				newsystem.遥控.启动 = !newsystem.遥控.启动;
			} else if (rect(12, 392, 20, 20, px, py)) {
				newsystem.陷阱.启动 = !newsystem.陷阱.启动;
			} else if (rect(12, 422, 20, 20, px, py)) {
				newsystem.阵地.启动 = !newsystem.阵地.启动;
			} else if (rect(252, 92, 20, 20, px, py)) {
				newsystem.迂回包抄.启动 = !newsystem.迂回包抄.启动;
			} else if (rect(252, 122, 20, 20, px, py)) {
				newsystem.直掩.启动 = !newsystem.直掩.启动;
			} else if (rect(252, 152, 20, 20, px, py)) {
				newsystem.观测.启动 = !newsystem.观测.启动;
			} else if (rect(252, 182, 20, 20, px, py)) {
				newsystem.火力覆盖.启动 = !newsystem.火力覆盖.启动;
			} else if (rect(252, 212, 20, 20, px, py)) {
				newsystem.进水.启动 = !newsystem.进水.启动;
			} else if (rect(138, 92, 20, 20, px, py)) {
				skillname = '炮击';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(216, 92, 20, 20, px, py)) {
				skillname = '炮击';
				type = '范围'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 122, 20, 20, px, py)) {
				skillname = '指挥';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 152, 20, 20, px, py)) {
				skillname = '点杀';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 182, 20, 20, px, py)) {
				skillname = '防空';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(216, 182, 20, 20, px, py)) {
				skillname = '防空';
				type = '范围'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 212, 20, 20, px, py)) {
				skillname = '谍报';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 242, 20, 20, px, py)) {
				skillname = '截断';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 272, 20, 20, px, py)) {
				skillname = '警戒';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 302, 20, 20, px, py)) {
				skillname = '堡垒';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(216, 302, 20, 20, px, py)) {
				skillname = '堡垒';
				type = '范围'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 332, 20, 20, px, py)) {
				skillname = '燃烧';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 362, 20, 20, px, py)) {
				skillname = '遥控';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 392, 20, 20, px, py)) {
				skillname = '陷阱';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(216, 392, 20, 20, px, py)) {
				skillname = '陷阱';
				type = '范围'
				core.plugin.颜色变化();
				return;
			} else if (rect(138, 422, 20, 20, px, py)) {
				skillname = '阵地';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(216, 422, 20, 20, px, py)) {
				skillname = '阵地';
				type = '范围'
				core.plugin.颜色变化();
				return;
			} else if (rect(378, 92, 20, 20, px, py)) {
				skillname = '迂回包抄';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(378, 122, 20, 20, px, py)) {
				skillname = '直掩';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(378, 152, 20, 20, px, py)) {
				skillname = '观测';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(378, 182, 20, 20, px, py)) {
				skillname = '火力覆盖';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(378, 212, 20, 20, px, py)) {
				skillname = '进水';
				type = '本体'
				core.plugin.颜色变化();
				return;
			} else if (rect(246, 276, 404, 284, px, py)) {
				newsystem.alpha = Math.max(0, Math.min(1 - (px - 250) / 150, 1));
			}
		}
		if (rect(400, 418, 48, 24, px, py)) {
			core.status.event.id = null;
			core.unlockControl();
			core.deleteCanvas('底层画布');
			core.updateStatusBar();
			return;
		}
		core.setLocalStorage('drawui', newsystem);
		core.plugin.范围显示开关();
	}

	function hslToRgb(h, s, l) {
		h = Math.max(0, Math.min(360, h));
		s = Math.max(0, Math.min(1, s));
		l = Math.max(0, Math.min(1, l));

		let c = (1 - Math.abs(2 * l - 1)) * s; // 色度
		let hp = h / 60.0;
		let x = c * (1 - Math.abs((hp % 2) - 1));
		let m = l - c / 2;

		let r1, g1, b1;
		if (hp >= 0 && hp < 1) {
			r1 = c;
			g1 = x;
			b1 = 0;
		} else if (hp >= 1 && hp < 2) {
			r1 = x;
			g1 = c;
			b1 = 0;
		} else if (hp >= 2 && hp < 3) {
			r1 = 0;
			g1 = c;
			b1 = x;
		} else if (hp >= 3 && hp < 4) {
			r1 = 0;
			g1 = x;
			b1 = c;
		} else if (hp >= 4 && hp < 5) {
			r1 = x;
			g1 = 0;
			b1 = c;
		} else {
			r1 = c;
			g1 = 0;
			b1 = x;
		}

		const r = Math.round((r1 + m) * 255);
		const g = Math.round((g1 + m) * 255);
		const b = Math.round((b1 + m) * 255);
		return { r, g, b };
	}
	let newcolor = '';
	this.颜色变化 = function () {
		core.status.event.id = '特技显示颜色切换';
		let newsystem = core.getLocalStorage('drawui', setting);
		let ctx = core.createCanvas('底层画布', 0, 0, 480, 480, 1000);
		core.fillRect(ctx, 0, 0, 480, 480, 'rgba(0, 0, 0, 1)');
		core.setTextAlign(ctx, 'center');
		core.fillText(ctx, `${skillname}${type}颜色切换`, 240, 30, '#fff', '32px kaiti');
		core.setTextAlign(ctx, 'left');
		core.fillText(ctx, '确定', 10, 440, '#ffff00', '24px kaiti');
		core.fillText(ctx, '取消', 400, 440, '#ffff00', '24px kaiti');
		core.strokeRect(ctx, 90, 50, 300, 300, '#ffffff', 2);
		const canvas = document.createElement("canvas");
		canvas.width = 480;
		canvas.height = 480;
		const ctx1 = canvas.getContext("2d")
		const imagedata = ctx1.getImageData(0, 0, 480, 480);
		const data = imagedata.data;
		for (let y = 0; y < 480; y++) {
			const dri = 1.0 - (y / 480) * 0.75;
			for (let x = 0; x < 480; x++) {
				let hue = (x / 480) * 360;
				const rgb = hslToRgb(hue, 1.0, dri);
				const idx = (y * 480 + x) * 4;
				data[idx] = rgb.r;
				data[idx + 1] = rgb.g;
				data[idx + 2] = rgb.b;
				data[idx + 3] = 255;
			}
		}
		ctx1.putImageData(imagedata, 0, 0);
		ctx.drawImage(canvas, 90, 50, 300, 300);
		core.fillText(ctx, '原色:□', 10, 100, '#ffffff', '24px kaiti');
		core.fillRect(ctx, 66, 84, 20, 20, newsystem[skillname][type])
		core.fillText(ctx, '更改:□', 10, 130, '#ffffff', '24px kaiti');
		if (newcolor) {
			core.fillRect(ctx, 66, 114, 20, 20, newcolor);
		}
		/*let ratio = core.domStyle.ratio;
		ratio *= devicePixelRatio;
		const imagedata = ctx.getImageData(90 * ratio, 50 * ratio, 300 * ratio, 300 * ratio);
		const data = imagedata.data;
		for (let y = 0; y < 300 * ratio; y++) {
			const dri = 1.0 - (y / (300 * ratio)) * 0.75;
			for (let x = 0; x < 300 * ratio; x++) {
				let hue = (x / (300 * ratio)) * 360;
				const rgb = hslToRgb(hue, 1.0, dri);
				const idx = (y * 300 * ratio + x) * 4;
				data[idx] = rgb.r;
				data[idx + 1] = rgb.g;
				data[idx + 2] = rgb.b;
				data[idx + 3] = 255;
			}
		}
		ctx.putImageData(imagedata, 90 * ratio, 50 * ratio);*/

	}
	this.颜色选择 = function (x, y, px, py) {
		let newsystem = core.getLocalStorage('drawui', setting);
		if (rect(400, 418, 48, 24, px, py)) {
			core.plugin.范围显示开关();
			newcolor = '';
			return;
		} else if (rect(90, 50, 300, 300, px, py)) {
			let ratio = core.domStyle.ratio;
			ratio *= devicePixelRatio;
			px = Math.max(90, Math.min(390 - 1, px));
			py = Math.max(50, Math.min(350 - 1, py));
			const data = core.dymCanvas.底层画布.getImageData(Math.floor(px * ratio), Math.floor(py * ratio), 1, 1).data;
			newcolor = `rgba(${data[0]},${data[1]},${data[2]},${data[3]})`
			this.颜色变化();
		} else if (rect(10, 418, 48, 24, px, py)) {
			if (newcolor) {
				newsystem[skillname][type] = newcolor;
				newcolor = '';
				core.setLocalStorage('drawui', newsystem);
			}
			core.plugin.范围显示开关();
			return;
		}
	}
},
    "热重载": function () {
	/* ---------- 功能说明 ---------- *
	
		1. 当 libs/ main.js index.html 中的任意一个文件被更改后，会自动刷新塔的页面
		2. 修改楼层文件后自动在塔的页面上显示出来，不需要刷新
		3. 修改脚本编辑或插件编写后也能自动更新更改的插件或脚本，但不保证不会出问题（一般都不会有问题的
		4. 修改图块属性、怪物属性等后会自动更新
		5. 当全塔属性被修改时，会自动刷新塔的页面
		6. 样板的 styles.css 被修改后也可以直接显示，不需要刷新
		7. 其余内容修改后不会自动更新也不会刷新
	
		/* ---------- 使用方式 ---------- *
	
		1. 前往 https://nodejs.org/en/ 下载node.js的LTS版本（点左边那个绿色按钮）并安装
		2. 将该插件复制到插件编写中
		3. 在造塔群的群文件-魔塔样板·改中找到server.js，下载并放到塔的根目录（与启动服务同一级）
		4. 在该目录下按下shift+鼠标右键（win11只按右键即可），选择在终端打开或在powershell打开
		5. 运行node server.js即可
	
		*/

	if (main.mode !== "play" || main.replayChecking) return;

	/**
	 * 发送请求
	 * @param {string} url
	 * @param {string} type
	 * @param {string} data
	 * @returns {Promise<string>}
	 */
	async function post(url, type, data) {
		const xhr = new XMLHttpRequest();
		xhr.open(type, url);
		xhr.send(data);
		const res = await new Promise((res) => {
			xhr.onload = (e) => {
				if (xhr.status !== 200) {
					console.error(`hot reload: http ${xhr.status}`);
					res("@error");
				} else res("success");
			};
			xhr.onerror = (e) => {
				res("@error");
				console.error(`hot reload: error on connection`);
			};
		});
		if (res === "success") return xhr.response;
		else return "@error";
	}

	/**
	 * 热重载css
	 * @param {string} data
	 */
	function reloadCss(data) {
		const all = Array.from(document.getElementsByTagName("link"));
		all.forEach((v) => {
			if (v.rel !== "stylesheet") return;
			if (v.href === `http://127.0.0.1:3000/${data}`) {
				v.remove();
				const link = document.createElement("link");
				link.rel = "stylesheet";
				link.type = "text/css";
				link.href = data;
				document.head.appendChild(link);
				console.log(`css hot reload: ${data}`);
			}
		});
	}

	/**
	 * 热重载楼层
	 * @param {string} data
	 */
	async function reloadFloor(data) {
		// 首先重新加载main.floors对应的楼层
		await import(`/project/floors/${data}.js?v=${Date.now()}`);
		// 然后写入core.floors并解析
		core.floors[data] = main.floors[data];
		const floor = core.loadFloor(data);
		if (core.isPlaying()) {
			core.status.maps[data] = floor;
			delete core.status.mapBlockObjs[data];
			core.extractBlocks(data);
			if (data === core.status.floorId) {
				core.drawMap(data);
				core.setWeather(
					core.animateFrame.weather.type,
					core.animateFrame.weather.level
				);
			}
			core.updateStatusBar(true, true);
		}
		console.log(`floor hot reload: ${data}`);
	}

	/**
	 * 热重载脚本编辑及插件编写
	 * @param {string} data
	 */
	async function reloadScript(data) {
		if (data === "plugins") {
			// 插件编写比较好办
			const before = plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1;
			// 这里不能用动态导入，因为动态导入会变成模块，变量就不是全局的了
			const script = document.createElement("script");
			script.src = `/project/plugins.js?v=${Date.now()}`;
			document.body.appendChild(script);
			await new Promise((res) => {
				script.onload = () => res("success");
			});
			const after = plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1;
			// 找到差异的函数
			for (const id in before) {
				const fn = before[id];
				if (typeof fn !== "function") continue;
				if (fn.toString() !== after[id]?.toString()) {
					try {
						core.plugin[id] = after[id];
						core.plugin[id].call(core.plugin);
						core.updateStatusBar(true, true);
						console.log(`plugin hot reload: ${id}`);
					} catch (e) {
						console.error(e);
					}
				}
			}
		} else if (data === "functions") {
			// 脚本编辑略微麻烦点
			const before = functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a;
			// 这里不能用动态导入，因为动态导入会变成模块，变量就不是全局的了
			const script = document.createElement("script");
			script.src = `/project/functions.js?v=${Date.now()}`;
			document.body.appendChild(script);
			await new Promise((res) => {
				script.onload = () => res("success");
			});
			const after = functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a;
			// 找到差异的函数
			for (const mod in before) {
				const fns = before[mod];
				for (const id in fns) {
					const fn = fns[id];
					if (typeof fn !== "function" || id === "hasSpecial") continue;
					const now = after[mod][id];
					if (fn.toString() !== now.toString()) {
						try {
							if (mod === "events") {
								core.events.eventdata[id] = now;
							} else if (mod === "enemys") {
								core.enemys.enemydata[id] = now;
							} else if (mod === "actions") {
								core.actions.actionsdata[id] = now;
							} else if (mod === "control") {
								core.control.controldata[id] = now;
							} else if (mod === "ui") {
								core.ui.uidata[id] = now;
							}
							core.updateStatusBar(true, true);
							console.log(`function hot reload: ${mod}.${id}`);
						} catch (e) {
							console.error(e);
						}
					}
				}
			}
		}
	}

	/**
	 * 属性热重载，包括全塔属性等
	 * @param {string} data
	 */
	async function reloadData(data) {
		const script = document.createElement("script");
		script.src = `/project/${data}.js?v=${Date.now()}`;
		document.body.appendChild(script);
		await new Promise((res) => {
			script.onload = () => res("success");
		});

		let after;
		if (data === "data") after = data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d;
		if (data === "enemys")
			after = enemys_fcae963b_31c9_42b4_b48c_bb48d09f3f80;
		if (data === "icons") after = icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1;
		if (data === "items") after = items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a;
		if (data === "maps") after = maps_90f36752_8815_4be8_b32b_d7fad1d0542e;
		if (data === "events")
			after = events_c12a15a8_c380_4b28_8144_256cba95f760;

		if (data === "enemys") {
			core.enemys.enemys = after;
			for (var enemyId in after) {
				core.enemys.enemys[enemyId].id = enemyId;
			}
			core.material.enemys = core.getEnemys();
		} else if (data === "icons") {
			core.icons.icons = after;
			core.material.icons = core.getIcons();
		} else if (data === "items") {
			core.items.items = after;
			for (var itemId in after) {
				core.items.items[itemId].id = itemId;
			}
			core.material.items = core.getItems();
		} else if (data === "maps") {
			core.maps.blocksInfo = after;
			core.status.mapBlockObjs = {};
			core.status.number2block = {};
			Object.values(core.status.maps).forEach((v) => delete v.blocks);
			core.extractBlocks();
			core.setWeather(
				core.animateFrame.weather.type,
				core.animateFrame.weather.level
			);
			core.drawMap();
		} else if (data === "events") {
			core.events.commonEvent = after.commonEvent;
		} else if (data === "data") {
			location.reload();
		}
		core.updateStatusBar(true, true);
		console.log(`data hot reload: ${data}`);
	}

	// 初始化
	(async function () {
		const data = await post("/reload", "POST", "test");
		if (data === "@error") {
			console.log(`未检测到node服务，热重载插件将无法使用`);
		} else {
			console.log(`热重载插件加载成功`);
			// reload
			setInterval(async () => {
				const res = await post("/reload", "POST");
				if (res === "@error") return;
				if (res === "true") location.reload();
				else return;
			}, 1000);

			// hot reload
			setInterval(async () => {
				const res = await post("/hotReload", "POST");
				const data = res.split("@@");
				data.forEach((v) => {
					if (v === "") return;
					const [type, file] = v.split(":");
					if (type === "css") reloadCss(file);
					if (type === "data") reloadData(file);
					if (type === "floor") reloadFloor(file);
					if (type === "script") reloadScript(file);
				});
			}, 1000);
		}
	})();
}
}