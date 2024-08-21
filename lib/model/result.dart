enum Result {
  bat(
    assetPath: 'result/bat',
    description: '因為愛上高空的感覺，\n貓貓變成一頭蝙蝠貓了！',
  ),

  fire(
    assetPath: 'result/fire',
    description: '因為吃得太辣，\n貓貓變成一團小火貓了！',
  ),

  friendship(
    assetPath: 'result/friendship',
    description: '因為交到很多好朋友，\n貓貓變成一隻人氣貓貓！',
  ),

  gift(
    assetPath: 'result/gift',
    description: '因為送了很多禮物，\n貓貓變成一隻禮物貓了！',
  ),

  koala(
    assetPath: 'result/koala',
    description: '因為睡太多，\n貓貓變成一隻無尾熊貓了！',
  ),

  mermaid(
    assetPath: 'result/mermaid',
    description: '因為愛上了海底，\n貓貓變成一條人魚貓了！',
  ),

  panda(
    assetPath: 'result/panda',
    description: '因為喝太多咖啡睡不著，\n貓貓變成一隻熊貓貓了！',
  ),

  pig(
    assetPath: 'result/pig',
    description: '因為吃得太多，\n貓貓變成一頭小豬貓了！',
  ),

  shark(
    assetPath: 'result/shark',
    description: '因為愛咬人，\n貓貓變成一條鯊魚貓了！',
  ),

  snail(
    assetPath: 'result/snail',
    description: '因為一直沒出門，\n貓貓變成一隻蝸牛貓了！',
  ),

  tiger(
    assetPath: 'result/tiger',
    description: '因為運動量很大，\n貓貓變成一頭山大王貓了！',
  ),

  unicorn(
    assetPath: 'result/unicorn',
    description: '因為出現太多幻覺，\n貓貓變成一頭獨角獸貓了！',
  ),

  world(
    assetPath: 'result/world',
    description: '因為見多識廣，\n貓貓變成一隻世界貓了！',
  ),
  ;

  final String assetPath;
  final String description;

  const Result({
    required this.assetPath,
    required this.description,
  });
}
