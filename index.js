function card_attack( base_attack, attack_growth, potential_growth = 0, level = 60){
  return Math.floor( base_attack + potential_growth + ( attack_growth * ( level - 1 ) ) );
}

function total_attack( card_attack, weapon_attack, karma = 0, support = 0, king_kai_punch_level = 0, armor_attack = 0 ){
  let king_kai_increase = king_kai_punch_level * 0.02;
  karma = karma > 5 ? karma / 100 : karma;
  return Math.floor( ( card_attack * ( karma + 1 ) * ( king_kai_increase + 1 ) ) + armor_attack + weapon_attack + support );
}