var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {
	this.Army = ['步兵', '轻坦', '中坦', '重坦', '坦歼', '反坦克炮', '榴弹炮', '高射炮', '建筑'];
	this.Navy = ['潜艇', '鱼雷艇', '商船', '驱逐', '轻巡', '重巡', '战列', '航母'];
	this.Luftwaffe = ['战斗机', '重型战斗机', '攻击机', '俯冲轰炸机', '鱼雷轰炸机', '中型轰炸机', '导弹'];
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
			//P40C战斧
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
			//P40C战斧
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
			hero_dod += 2;
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
			//技能5
			if (flags.skill === 5 && core.status.thisMap.area === "海洋") {
				damage *= 0.8;
			}
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

	//技能系统
	this.getSkillInfo = function (id) {
		id = id ?? 0;
		var strategy = false,
			name = '无',
			cost = 0,
			event = [],
			description = '无';
		if (id === 1) {
			name = '战壕';
			cost = 20;
			description = '挖掘战壕，与敌方陆军战斗时，受到的伤害减少10%';
		}
		if (id === 2) {
			strategy = true;
			name = '紧急补给';
			cost = 100;
			description = '血量立即恢复25%';
			event = [{ "type": "setValue", "name": "status:hp", "operator": "+=", "value": "status:hpmax/4" }];
		}
		if (id === 3) {
			name = '防空弹幕';
			cost = 50;
			description = '下一次与敌方空军的战斗中，攻击力提升20%';
		}
		if (id === 4) {
			strategy = true;
			name = '空战王牌';
			cost = 100;
			description = '秒杀面前的非boss空军。如果无法秒杀对方，则改为“造成3倍攻击力的伤害”';
			event = [
				{ "type": "setValue", "name": "flag:空战王牌", "value": "core.getBlockId(core.nextX(),core.nextY())" }, { "type": "if", "condition": "core.plugin.Luftwaffe.includes(core.material.enemys[flags.空战王牌]?.type)&&!core.material.enemys[flag:空战王牌].notBomb&&core.material.enemys[flags.空战王牌]?.type!=='导弹'&&!core.hasSpecial(flags['空战王牌'], 65)", "true": [{ "type": "playSound", "name": "fighter.mp3" }, { "type": "showImage", "code": 1, "image": "aircraft1.png", "loc": [643, "32*core.nextY()+16-125"], "opacity": 1, "time": 0 }, { "type": "moveImage", "code": 1, "to": [-195, "32*core.nextY()+16-125"], "time": 500, "async": true }, { "type": "battle", "loc": ["core.nextX()", "core.nextY()"] }, { "type": "waitAsync" }, { "type": "hideImage", "code": 1, "time": 0 }], "false": [{ "type": "tip", "text": "目标无法击杀！" }, { "type": "playSound", "name": "操作失败" }, { "type": "setValue", "name": "status:mana", "operator": "+=", "value": "100" }, { "type": "setValue", "name": "flag:空战王牌", "value": "null" }] }
			];
		}
		if (id === 5) {
			name = '预警';
			cost = 150;
			description = '下一场战斗中，闪避鱼雷+8，受到伤害-30%';
		}
		if (id === 6) {
			name = 'Z字规避';
			cost = 80;
			description = '下一场战斗中，每次遭遇鱼雷攻击时额外闪避3枚鱼雷'
		}
		if (id === 7) {
			strategy = true;
			name = '扫雷';
			cost = 20;
			description = '立即清除主角面前的地雷或水雷'
			event = [
				{ "type": "setValue", "name": "temp:A", "value": "core.getBlockId(core.nextX(), core.nextY())" },
				{
					"type": "if",
					"condition": "((temp:A==='lavaNet')||(temp:A==='mine'))",
					"true": [
						{ "type": "playSound", "name": "005-System05.mp3" },
						{ "type": "hide", "loc": ["core.nextX()", "core.nextY()"], "remove": true },
					],
					"false": [
						{ "type": "playSound", "name": "error.mp3" },
						{ "type": "setValue", "name": "status:mana", "operator": "+=", "value": "20" },
						{ "type": "tip", "text": "操作失败！" },
					]
				},
			]
		}
		if (id === 8) {
			name = '剑鱼818中队';
			cost = 80;
			description = '对面前的敌军舰艇发射5枚鱼雷，且至少会命中1枚（潜艇除外），除造成正常的鱼雷伤害外，对手闪避鱼雷数-2。可重复空袭，但不会再降低对方的闪避'
		}
		if (id === 9) {
			name = '抵抗运动';
			cost = 100;
			description = '下一场战斗中，敌方陆军攻击力随回合数增加而减少，每回合减少原攻击力的10%。当敌人攻击力不足原来的30%时，则不会继续减少'
		}
		if (id === 10) {
			name = '破译';
			cost = 40;
			description = '下一场战斗中，获得20%减伤'
		}
		if (id === 11) {
			strategy = true;
			name = '空中打击';
			cost = 200;
			description = '秒杀面前的非boss坦克，如无法秒杀，改为“投掷一轮伤害为4倍攻击力的炸弹攻击”';
			event = [
				{ "type": "setValue", "name": "flag:空中打击", "value": "core.getBlockId(core.nextX(),core.nextY())" }, { "type": "if", "condition": "['轻坦','中坦','重坦','坦歼'].includes(core.material.enemys[flag:空中打击]?.type)&&!core.material.enemys[flag:空中打击]?.notBomb&&!core.hasSpecial(flags['空中打击'], 65)", "true": [{ "type": "playSound", "name": "bomber3.mp3" }, { "type": "showImage", "code": 1, "image": "aircraft2.png", "loc": [643, "32*core.nextY()+16-125"], "opacity": 1, "time": 0 }, { "type": "moveImage", "code": 1, "to": [-195, "32*core.nextY()+16-125"], "time": 500, "async": true }, { "type": "battle", "loc": ["core.nextX()", "core.nextY()"] }, { "type": "waitAsync" }, { "type": "hideImage", "code": 1, "time": 0 }], "false": [{ "type": "tip", "text": "目标无法击杀！" }, { "type": "playSound", "name": "操作失败" }, { "type": "setValue", "name": "status:mana", "operator": "+=", "value": "200" }, { "type": "setValue", "name": "flag:空中打击", "value": "null" }] }
			];
		}
		if (id === 12) {
			name = '从海底出击';
			cost = 100;
			description = '下一场战斗中，派遣一艘潜艇支援：在战斗开始时发射8枚鱼雷，随后潜艇撤退'
		}
		if (id === 13) {
			name = '金牌损管';
			cost = 180;
			description = '下一场战斗结束后，回满血量，清除所有负面效果，获得20%当前后勤值的临时后勤值'
		}
		if (id === 14) {
			name = '补给线';
			cost = 250;
			description = '下一场战斗中，后勤值提升10倍'
		}
		if (id === 15) {
			strategy = true;
			name = 'C-47空中列车';
			cost = 300;
			description = '只能在陆地或浅滩使用，空降至当前地图的中心对称落点。如果目标地点处于“防空”范围内或敌方战斗机周围8格内，会失去等同于80%血限的生命值。（确认空降坐标时，点击目标点或空格进行空降，重新按对应快捷键则取消空降）';
			event = [{ "type": "if", "condition": "(!['陆地','浅滩'].includes(core.status.thisMap.area))", "true": [{ "type": "playSound", "name": "操作失败" }, { "type": "tip", "text": "当前地图不可使用该技能！" }, { "type": "setValue", "name": "status:mana", "operator": "+=", "value": "300" }], "false": [{ "type": "function", "function": "function(){\nflags.X = core.bigmap.width - 1 - hero.loc.x;\nflags.Y = core.bigmap.height - 1 - hero.loc.y;\nflags.C = '#00FF00';\nif (core.getBlockNumber(flags.X, flags.Y) > 0) {\n\tflags.C = 'red';\n} else {\n\tfor (let dx = -2; dx <= 2; ++dx)\n\t\tfor (let dy = -2; dy <= +2; ++dy) {\n\t\t\tlet x = flags.X + dx,\n\t\t\t\ty = flags.Y + dy,\n\t\t\t\tid = core.getBlockId(x, y);\n\t\t\tif (core.enemyExists(x, y)) {\n\t\t\t\tif (core.hasSpecial(id, 40)) flags.C = 'yellow';\n\t\t\t\tif (Math.abs(dx) <= 1 && Math.abs(dy) <= 1 && core.material.enemys[id].type.endsWith('战斗机')) flags.C = 'yellow';\n\t\t\t}\n\t\t}\n}\ncore.ui._createUIEvent();\ncore.ui.fillRect('uievent', 32 * flags.X, 32 * flags.Y, 32, 32, flags.C);\n}" }, { "type": "tip", "text": "请确认空降位置" }, { "type": "wait" }, { "type": "if", "condition": "(((flags.type===1)&&((flags.x!==flags.X)||(flags.y!==flags.Y)))||((flags.type===0)&&((flags.keycode!==32)&&(flags.keycode!==13))))", "true": [{ "type": "playSound", "name": "取消" }, { "type": "tip", "text": "已取消空降" }, { "type": "setValue", "name": "status:mana", "operator": "+=", "value": "300" }], "false": [{ "type": "if", "condition": "(flags.C==='red')", "true": [{ "type": "playSound", "name": "操作失败" }, { "type": "tip", "text": "空降落点有障碍物存在，无法着陆！" }, { "type": "setValue", "name": "status:mana", "operator": "+=", "value": "300" }], "false": [{ "type": "playSound", "name": "bomber.mp3" }, { "type": "showImage", "code": 1, "image": "aircraft5.png", "loc": [480, "32 * flags.Y - 125"], "opacity": 1, "time": 0 }, { "type": "moveImage", "code": 1, "to": [-195, "32 * flags.Y - 125"], "time": 500 }, { "type": "hideImage", "code": 1, "time": 0 }, { "type": "changePos", "loc": ["flags.X", "flags.Y"] }, { "type": "if", "condition": "(flags.C==='yellow')", "true": [{ "type": "animate", "name": "explore", "loc": "hero" }, { "type": "setValue", "name": "status:hp", "operator": "-=", "value": "0.8*status:hpmax" }] }] }] }, { "type": "clearMap" }] }];
		}
		if (id === 16) {
			strategy = true;
			name = '海上霸主';
			cost = 1000;
			description = '只能在海上使用且必须装备着航空母舰。舰载机发动空袭，使全图除潜艇外的敌方海军损失50%生命值，同时我方损失等同于20%血限的hp作为飞机损失。每张地图仅限使用一次，对boss无效';
		}
		if (id === 17) {
			strategy = true;
			name = '范弗利特弹药量';
			cost = 60;
			description = '下一场战斗中，主角攻击力+60%';
		}
		if (id === 18) {
			name = '孟菲斯美女号';
			cost = 50;
			description = '下一场战斗中，友军不会受到任何伤害';
		}
		if (id === 19) {
			strategy = true;
			name = '刺猬弹';
			cost = 100;
			description = '下一场战斗中发射“刺猬”反潜迫击炮，在首回合对潜艇造成5倍攻击力的伤害，战后无视狼群协同攻击';
		}
		if (id === 20) {
			strategy = true;
			name = '红色尾翼';
			cost = 1000;
			description = '获得第332战斗机大队的支援。无条件直接夺取当前地图制空权，且制空权效果改为20%。主角在当前地图行动期间，友军不会受到任何损失，对敌方空军伤害+30%';
		}
		if (id === 21) {
			strategy = true;
			name = 'T34谢尔曼风琴';
			cost = 600;
			description = '仅可在地面使用。呼叫火箭炮覆盖打击，打击目标为以自身为中心7×7正方形区域，其中的敌人陆军受到不同程度的损失：步兵失去70%生命值，炮兵失去50%，装甲失去20%';
		}
		if (id === 22) {
			name = '地毯式轰炸';
			cost = 3000;
			description = '仅可在地面使用。呼叫大规模轰炸机群展开全图轰炸，全体敌方陆军损失70%生命值，空军损失15%生命值。';
		}
		if (id === 23) {
			strategy = true;
			name = '铝箔条';
			cost = 1200;
			description = '抛洒铝箔条，干扰敌方雷达。在使用过该技能的地图中，光环类（指挥、截断）、协同攻击类（陷阱、防空）等技能无效';
		}
		if (id === 24) {
			strategy = true;
			name = '翼尖挑衅';
			cost = 200;
			description = '将面前的V1导弹向前推1格并引爆。如果引爆地点是可破墙壁或非boss敌人，可将其摧毁（不获得金经）';
		}
		if (id === 25) {
			strategy = true;
			name = '高脚柜炸弹';
			cost = 1000;
			description = '只能在陆地或浅滩使用，且必须装备着特定轰炸机。使用后在前方一格投下一枚“高脚柜”炸弹，直接摧毁面前的非boss陆军（无视抗破），并在爆炸地点九宫格3格半径内引发小范围地震，摧毁可破墙壁，范围内其他敌方陆军损失80%血量';
		}
		if (id === 26) {
			strategy = true;
			name = '钳形攻势';
			cost = 2000;
			description = '主角能够从当前地图任意出口通行时可用。发动此技能后，在当前地图战斗时攻击力+50%，伤害减免40%。'
		}
		return {
			'strategy': strategy,
			'name': name,
			'cost': cost,
			'event': event,
			'id': id,
			'description': description
		};
	}
	this._makeList = function (list, depth) {
		if (list.length > 9) { // 分页
			var suffix = list.splice(9);
			list.push({ "text": "下一页", "action": this._makeList(suffix, depth + 1) });
		}
		list.push({ "text": "查看当前快捷键", "action": [{ "type": "insert", "name": "查看技能" }] });
		list.push({ "text": "保存并进入下一章", "action": [{ "type": "break", "n": depth }] });
		return [{
			"type": "while",
			"condition": "true",
			"data": [{ "type": "choices", "text": "\t[技能快捷键设定] ", "choices": list }]
		}];
	}
	this.bindSkills = function () {
		var list = [];
		for (var i = 0; i < flags.learned.length; ++i) {
			if (flags.learned[i]) {
				var info = this.getSkillInfo(i),
					obj = {
						"text": info.name + (info.strategy ? '（即时）' : '') + '，消耗：' + info.cost,
						"action": [
							{ "type": "tip", "text": "请按下要绑定到的数字键1~7" },
							{
								"type": "wait",
								"forceChild": true,
								"data": [{
									"case": "keyboard",
									"keycode": "49,50,51,52,53,54,55",
									"action": [{
										"type": "function",
										"function": "function(){var index=flags.skillList.indexOf(" + info.id + ");" +
											"if(index>=0)flags.skillList[index]=flags.skillList[flags.keycode-49];" +
											"flags.skillList[flags.keycode-49]=" + info.id + ";}"
									}, ]
								}, ]
							},
						]
					};
				list.push(obj);
			}
		}
		return this._makeList(list, 1);
	}
	// 禁止手动换装，只能在事件中用指令强制换装
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
			if (core.enemys.hasSpecial(enemy, 51))
				damage += "歼";
			if (core.enemys.hasSpecial(enemy, 52))
				damage += "夹";
			if (core.enemys.hasSpecial(enemy, 59))
				damage += "X";
			if (core.enemys.hasSpecial(enemy, 63))
				damage += "阵";
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
	//core.control._drawHero_draw = function (direction, x, y, status, offset, frame) {
	//offset = offset || { x: 0, y: 0, offset: 0, px: 0, py: 0 };
	//if (["MT55", "MT56", "MT57", "MT58", "MT59", "MT60", "MT180", "MT181", "MT182", "MT183", "MT184"].indexOf(core.status.floorId) >= 0) {
	//core.plugin.drawLight('newui1', 0.5, [
	//[16 + hero.loc.x * 32 + offset.x, 16 + hero.loc.y * 32 + offset.y, flags.lighton ? 128 : 1000]
	//], 0.8);
	//}
	//var opacity = core.setAlpha('hero', core.getFlag('__heroOpacity__', 1))
	//this._drawHero_getDrawObjs(direction, x, y, status, offset).forEach(function (block) {
	//core.drawImage('hero', block.img, (block.heroIcon[block.status] + (frame || 0)) % 4 * block.width,
	//block.heroIcon.loc * block.height, block.width, block.height,
	//block.posx + (32 - block.width) / 2, block.posy + 32 - block.height, block.width, block.height);
	//});
	//core.setAlpha('hero', opacity);

	//}
	this._afterLoadResources = function () {
		// 本函数将在所有资源加载完毕后，游戏开启前被执行
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
			col2 = left + width * 0.25,
			col3 = left + width * 0.45,
			col4 = left + width * 0.65;
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
			col3 = left + width * 0.45,
			col4 = left + width * 0.65;
		// 获得第二行绘制的内容
		var second_line = [];
		if (core.plugin.Army.includes(enemy.type)) {
			core.fillText('ui', '穿甲', col1, position, [255, 255, 255, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.ap || 0), col1 + 30, position, null, b13);
			core.fillText('ui', '装甲', col2, position, null, f13);
			core.fillText('ui', core.formatBigNumber(enemy.arm || 0), col2 + 30, position, null, b13);
		}
		if (core.plugin.Navy.includes(enemy.type)) {
			core.fillText('ui', '鱼雷管', col1, position, [255, 255, 255, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.tpn || 0), col1 + 45, position, null, b13);
			core.fillText('ui', '雷击', col2, position, null, f13);
			core.fillText('ui', core.formatBigNumber(enemy.top || 0), col2 + 30, position, null, b13);
		}
		if (core.plugin.Luftwaffe.includes(enemy.type)) {
			core.fillText('ui', '鱼雷管', col1, position, [255, 255, 255, 1], f13);
			core.fillText('ui', core.formatBigNumber(enemy.tpn || 0), col1 + 45, position, null, b13);
			core.fillText('ui', '雷击', col2, position, null, f13);
			core.fillText('ui', core.formatBigNumber(enemy.top || 0), col2 + 30, position, null, b13);
		}

		var damage_offset = col3 + 20;

		// 忽略第三列，直接绘制伤害
		this._drawBook_drawDamage(index, enemy, damage_offset, position);
	}

	core.ui._drawBook_drawRow3 = function (index, enemy, top, left, width, position) {
		// 绘制第三行
		core.setTextAlign('ui', 'left');
		var b13 = core.ui._buildFont(13, true),
			f13 = core.ui._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 0.25,
			col3 = left + width * 0.45,
			col4 = left + width * 0.65;
		core.fillText('ui', '攻击', col1, position, [255, 0, 0, 1], f13);
		core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col1 + 30, position, null, b13);
		core.fillText('ui', '空袭', col2, position, '#DDDDDD', f13);
		core.fillText('ui', core.formatBigNumber(enemy.bom || 0), col2 + 30, position, null, b13);
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
	}
}