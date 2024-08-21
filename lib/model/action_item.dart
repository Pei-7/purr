class ActionItem {
  //型別
  final String emoji;
  final String actionName;

  //構造
  const ActionItem({
    required this.emoji,
    required this.actionName,
  });

  //創建
  static const ActionItem eat = ActionItem(
    emoji: '🍽️',
    actionName: '餵食',
  );

  static const ActionItem pat = ActionItem(
    emoji: '🫳',
    actionName: '撫摸',
  );

  static const ActionItem sleep = ActionItem(
    emoji: '🛌',
    actionName: '睡覺',
  );

  static const ActionItem play = ActionItem(
    emoji: '🧶',
    actionName: '遊戲',
  );

  static const ActionItem explore = ActionItem(
    emoji: '🛝',
    actionName: '探險',
  );
}
