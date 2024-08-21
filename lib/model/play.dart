import 'dart:math';

enum Play {
  ball(
    assetPath: 'play/ball',
    description: '貓貓陪你玩了一會兒球。',
    keyName: 'exercise',
    addValue: 1,
  ),
  book(
    assetPath: 'play/book',
    description: '貓貓跟你一起讀了一會兒書。',
    keyName: 'world',
    addValue: 1,
  ),
  box(
    assetPath: 'play/box',
    description: '貓貓靜靜地在紙箱裡玩了一會。',
    keyName: 'exercise',
    addValue: 1,
  ),

  hide(
    assetPath: 'play/hide',
    description: '貓貓在玩躲貓貓。\n貓貓可是躲貓貓高手。',
    keyName: 'exercise',
    addValue: 1,
  ),

  music(
    assetPath: 'play/music',
    description: '貓貓陪你聽了一會兒音樂。\n貓貓喜歡龐克風格。',
    keyName: 'mood',
    addValue: -2,
  ),

  safari(
    assetPath: 'play/safari',
    description: '貓貓網路上衝了會兒浪。',
    keyName: 'world',
    addValue: 1,
  ),
  ;

  final String assetPath;
  final String description;
  final String keyName;
  final int addValue;

  const Play({
    required this.assetPath,
    required this.description,
    required this.keyName,
    required this.addValue,
  });

  static Play getRandomOne() {
    int index = Random().nextInt(Play.values.length);
    return Play.values[index];
  }
}
