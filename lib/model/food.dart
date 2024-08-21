import 'dart:math';

enum Food {
  cherry(
    assetPath: 'food/cherry',
    description: '貓貓吃了櫻桃。\n要小心不能把籽吞下去！',
    keyName: 'saturation',
    addValue: 1,
  ),
  pineApple(
    assetPath: 'food/pineapple',
    description: '貓貓吃了鳳梨，並跟鳳梨打了一架。\n因為鳳梨咬了貓的舌頭。',
    keyName: 'saturation',
    addValue: 1,
  ),
  chili(
    assetPath: 'food/chili',
    description: '貓貓吃到了辣椒。\n被辣到了，但是還想再吃！',
    keyName: 'spicy',
    addValue: 1,
  ),

  avacado(
    assetPath: 'food/avacado',
    description: '貓貓吃了酪梨。\n不太喜歡這個口感。',
    keyName: 'saturation',
    addValue: 1,
  ),

  toast(
    assetPath: 'food/toast',
    description: '貓貓吃了吐司。\n覺得十分飽足。',
    keyName: 'saturation',
    addValue: 1,
  ),

  hotDog(
    assetPath: 'food/hotDog',
    description: '貓貓吃了熱狗。\n很好吃，但是名字有點讓貓害怕。',
    keyName: 'saturation',
    addValue: 1,
  ),

  cake(
    assetPath: 'food/cake',
    description: '貓貓吃了蛋糕。\n小蛋糕真好吃！',
    keyName: 'saturation',
    addValue: 1,
  ),

  coffee(
    assetPath: 'food/coffee',
    description: '貓貓喝了咖啡。\n覺得精力充沛，半夜更有精神了！',
    keyName: 'coffee',
    addValue: 1,
  ),

  mashroom(
    assetPath: 'food/mashroom',
    description: '貓貓不小心吃到了毒蘑菇。\n哎呀！出現幻覺了！',
    keyName: 'mashroom',
    addValue: 1,
  ),
  ;

  final String assetPath;
  final String description;
  final String keyName;
  final int addValue;

  const Food({
    required this.assetPath,
    required this.description,
    required this.keyName,
    required this.addValue,
  });

  static Food getRandomOne() {
    int index = Random().nextInt(Food.values.length);
    return Food.values[index];
  }
}
