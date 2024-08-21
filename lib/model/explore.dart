import 'dart:math';

enum Explore {
  alpaca(
    assetPath: 'explore/alpaca',
    description: '貓貓交了一頭羊駝好朋友！',
    keyName: 'friendship',
    addValue: 1,
  ),
  balloon(
    assetPath: 'explore/balloon',
    description: '貓貓帶了一顆汽球回來送給你！',
    keyName: 'gift',
    addValue: 1,
  ),

  champion(
    assetPath: 'explore/champion',
    description: '貓貓獲得\n「世界可愛貓貓大賽」冠軍了！',
    keyName: 'world',
    addValue: 3,
  ),

  city(
    assetPath: 'explore/city',
    description: '貓貓進行了一場城市大冒險！',
    keyName: 'exercise',
    addValue: 1,
  ),

  flower(
    assetPath: 'explore/flower',
    description: '貓貓抱了一束鮮花回來送給你！',
    keyName: 'gift',
    addValue: 1,
  ),

  horse(
    assetPath: 'explore/horse',
    description: '貓貓交了一匹馬好朋友！',
    keyName: 'friendship',
    addValue: 1,
  ),

  letter(
    assetPath: 'explore/letter',
    description: '貓貓叼了一封情書回來送給你！',
    keyName: 'gift',
    addValue: 1,
  ),

  mouse(
    assetPath: 'explore/mouse',
    description: '貓貓叼了一隻老鼠回來送給你！',
    keyName: 'gift',
    addValue: 1,
  ),

  parachute(
    assetPath: 'explore/parachute',
    description: '貓貓玩了一把降落傘，安全落地！',
    keyName: 'height',
    addValue: 1,
  ),

  pigeon(
    assetPath: 'explore/pigeon',
    description: '貓貓交了一隻鴿子好朋友！',
    keyName: 'friendship',
    addValue: 1,
  ),

  rose(
    assetPath: 'explore/rose',
    description: '貓貓叼了一支玫瑰回來送給你！',
    keyName: 'gift',
    addValue: 1,
  ),

  ski(
    assetPath: 'explore/ski',
    description: '貓貓滑雪衝得很快，\n感覺自己像一陣風。',
    keyName: 'height',
    addValue: 1,
  ),

  snake(
    assetPath: 'explore/snake',
    description: '貓貓交了一條蛇好朋友！',
    keyName: 'friendship',
    addValue: 1,
  ),

  soccer(
    assetPath: 'explore/soccer',
    description: '貓貓踢了一場足球，\n是位很厲害的守門員！',
    keyName: 'exercise',
    addValue: 1,
  ),

  surfing(
    assetPath: 'explore/surfing',
    description: '貓貓到海邊衝浪玩得很開心！',
    keyName: 'ocean',
    addValue: 1,
  ),

  tornado(
    assetPath: 'explore/tornado',
    description: '貓貓遇到龍捲風，幸好平安回來了！',
    keyName: 'height',
    addValue: 1,
  ),
  trash(
    assetPath: 'explore/trash',
    description: '貓貓到垃圾桶裡探險，\n渾身髒兮兮的，但很開心。',
    keyName: 'world',
    addValue: 1,
  ),

  tree(
    assetPath: 'explore/tree',
    description: '貓貓爬樹不小心爬太高了，\n幸好安全下來了！',
    keyName: 'height',
    addValue: 1,
  ),

  ufo(
    assetPath: 'explore/ufo',
    description: '貓貓到幽浮上探險了！\n幸好有乖乖地準時回家。',
    keyName: 'world',
    addValue: 1,
  ),
  ;

  final String assetPath;
  final String description;
  final String keyName;
  final int addValue;

  const Explore({
    required this.assetPath,
    required this.description,
    required this.keyName,
    required this.addValue,
  });

  static Explore getRandomOne() {
    int index = Random().nextInt(Explore.values.length);
    return Explore.values[index];
  }
}
