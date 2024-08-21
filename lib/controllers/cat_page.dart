import 'package:flutter/material.dart';
import '../model/action_item.dart';
import '../model/common.dart';
import '../model/explore.dart';
import '../model/food.dart';
import '../model/play.dart';
import '../model/result.dart';
import 'result_page.dart';

class CatPage extends StatefulWidget {
  const CatPage({super.key});

  @override
  State<CatPage> createState() => _CatHomeState();
}

//心情
Map<int, String> moodMap = {
  1: '貓貓很愉悅，\n並主動去找你的手蹭蹭。',
  2: '貓貓很舒服，\n並發出呼嚕嚕的聲音。',
  3: '貓貓覺得夠了。',
  4: '貓貓要生氣了！',
  5: '還摸！\n貓貓迅雷不及掩耳的咬了你一口。',
};

Map<String, int> pointing = {
  'exercise': 0,
  'friendship': 0,
  'saturation': 0,
  'gift': 0,
  'sleep': 0,
  'world': 0,
  'height': 0,
  'spicy': 0,
  'coffee': 0,
  'mood': 0,
  'mashroom': 0,
  'ocean': 0
};

Map<String, Result> resultCorresponding = {
  //'pointing key' : 'result name'
  'friendship': Result.friendship,
  'saturation': Result.pig,
  'gift': Result.gift,
  'sleep': Result.koala,
  'exercise': Result.tiger,
  'world': Result.world,
};

class _CatHomeState extends State<CatPage> {
  //變更月份
  int calendarIndex = 0;
  void updateCalendarIndex() {
    setState(() {
      if (calendarIndex < 12) {
        calendarIndex++;
        if (calendarIndex == 12) {
          opacityValue = 0;
        }
      } else {
        print(pointing);
        calendarIndex = 0;
        pointing.updateAll((key, value) => 0);
      }
    });
  }

//asset檔名
  String assetName = 'cat_icon';
  void updateAssetName(String newName) {
    setState(() {
      assetName = newName;
    });
  }

//description文字
  String descrptionText = '';
  void updateDescrptionText(String newDescription) {
    setState(() {
      descrptionText = newDescription;
    });
  }

  //ButtonsTile 隱藏狀態
  double opacityValue = 1;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Spacer(),
            Calendar(index: calendarIndex),
            CatEmoji(assetName: assetName),
            DescriptionText(text: descrptionText),
            const Spacer(),
            ButtonsTile(
              updateCalendarIndex: updateCalendarIndex,
              updateAssetName: updateAssetName,
              updateDescrptionText: updateDescrptionText,
              opacityValue: opacityValue,
            ),
          ],
        ),
      ),
    );
  }
}

class Calendar extends StatelessWidget {
  const Calendar({super.key, required this.index});

  final int index;

  @override
  Widget build(BuildContext context) {
    List<String> calendarList = [
      '🗓️',
      '❄️ Jan',
      '❄️ Feb',
      '🌸 Mar',
      '🌸 Apr',
      '🌸 May',
      '🌻 Jun',
      '🌻 Jul',
      '🌻 Aug',
      '🍁 Sep',
      '🍁 Oct',
      '🍁 Nov',
      '❄️ Dec',
    ];
    return ClipRRect(
      clipBehavior: Clip.hardEdge,
      borderRadius: BorderRadius.circular(24),
      child: Container(
        width: ScreenSize.getStandardWidth(context) * 0.3,
        color: Colors.pink.shade100,
        padding: const EdgeInsets.all(8),
        child: Text(
          calendarList[index],
          style: const TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
          ),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}

class ButtonsTile extends StatelessWidget {
  const ButtonsTile({
    super.key,
    required this.updateCalendarIndex,
    required this.updateAssetName,
    required this.updateDescrptionText,
    required this.opacityValue,
  });

  final Function updateCalendarIndex;
  final Function(String) updateAssetName;
  final Function(String) updateDescrptionText;
  final double opacityValue;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        ResultButton(
          opacityValue: opacityValue,
          updateCalendarIndex: updateCalendarIndex,
        ),
        InteractiveButtons(
          opacityValue: opacityValue,
          updateCalendarIndex: updateCalendarIndex,
          updateAssetName: updateAssetName,
          updateDescrptionText: updateDescrptionText,
        ),
      ],
    );
  }
}

class InteractiveButtons extends StatelessWidget {
  const InteractiveButtons({
    super.key,
    required this.opacityValue,
    required this.updateCalendarIndex,
    required this.updateAssetName,
    required this.updateDescrptionText,
  });

  final double opacityValue;
  final Function updateCalendarIndex;
  final Function(String p1) updateAssetName;
  final Function(String p1) updateDescrptionText;

  @override
  Widget build(BuildContext context) {
    List<ActionItem> actionItems = [
      ActionItem.eat,
      ActionItem.pat,
      ActionItem.sleep,
      ActionItem.play,
      ActionItem.explore,
    ];
    return Center(
      child: Opacity(
        opacity: opacityValue,
        child: IgnorePointer(
          ignoring: (opacityValue == 0) ? true : false, //opacity等於零時忽略所有互動
          child: Container(
            padding: const EdgeInsets.only(bottom: 48.0),
            child: Wrap(
              alignment: WrapAlignment.center,
              spacing: 16,
              children: [
                for (var action in actionItems)
                  CatAction(
                    action: action,
                    updateCalendarIndex: updateCalendarIndex,
                    updateAssetName: updateAssetName,
                    updateDescrptionText: updateDescrptionText,
                    opacityValue: opacityValue,
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class ResultButton extends StatelessWidget {
  const ResultButton({
    super.key,
    required this.opacityValue,
    required this.updateCalendarIndex,
  });

  final double opacityValue;
  final Function updateCalendarIndex;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Opacity(
      opacity: opacityValue == 1 ? 0 : 1,
      child: FilledButton(
          onPressed: (opacityValue == 0) ? () => showResult(context) : null,
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 32.0),
            child: Column(
              children: [
                SizedBox(
                    width: ScreenSize.getStandardWidth(context) * 0.18,
                    height: ScreenSize.getStandardWidth(context) * 0.18,
                    child: Image.asset('assets/unsure.png')),
                const Text("查看養成貓貓", style: TextStyle(fontSize: 18)),
              ],
            ),
          )),
    ));
  }

  void showResult(BuildContext context) {
    // 找到 pointing map 前六項中最高的數值
    List<int> values = pointing.values.toList();
    List<int> firstSixValues = values.sublist(0, 6);
    int maxValue = firstSixValues.reduce((a, b) => a > b ? a : b);

    // 找到對應的 key
    String? keyOfMaxValue = pointing.entries
        .firstWhere((entry) => entry.value == maxValue,
            orElse: () => const MapEntry('', 0))
        .key;

    //result cat 的 asset 檔名
    Result catResultName = Result.tiger;

    if (resultCorresponding[keyOfMaxValue] != null) {
      catResultName = resultCorresponding[keyOfMaxValue]!;
    }

    if ((pointing['friendship']! +
            pointing['gift']! +
            pointing['world']! +
            pointing['height']! +
            pointing['ocean']!) ==
        0) {
      catResultName = Result.snail;
    }

    if (pointing['sleep']! > 6) {
      catResultName = Result.koala;
    }

    if (pointing['height']! > 3) {
      catResultName = Result.bat;
    }

    if (pointing['saturation']! > 7) {
      catResultName = Result.pig;
    }

    if (pointing['mood']! == 5) {
      catResultName = Result.shark;
    }

    if (pointing['spicy']! > 1) {
      catResultName = Result.fire;
    }

    if (pointing['coffee']! > 1) {
      catResultName = Result.panda;
    }

    if (pointing['mashroom']! > 1) {
      catResultName = Result.unicorn;
    }

    if (pointing['ocean']! > 1) {
      catResultName = Result.mermaid;
    }

    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => ResultPage(
          catResult: catResultName,
        ),
      ),
    );

    updateCalendarIndex();
  }
}

class CatAction extends StatelessWidget {
  const CatAction({
    super.key,
    required this.action,
    required this.updateCalendarIndex,
    required this.updateAssetName,
    required this.updateDescrptionText,
    required this.opacityValue,
  });

  final ActionItem action;
  final Function updateCalendarIndex;
  final Function(String) updateAssetName;
  final Function(String) updateDescrptionText;
  final double opacityValue;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: ScreenSize.getStandardWidth(context) * 0.24,
      height: ScreenSize.getStandardWidth(context) * 0.24,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          elevation: 4,
          backgroundColor: Colors.pink.shade100,
          padding: EdgeInsets.zero,
        ),
        onPressed: (opacityValue == 1) ? () => updateCatStatus() : null,
        child: Center(
          child: Text(
            action.emoji,
            style: const TextStyle(fontSize: 42),
            textAlign: TextAlign.center,
          ),
        ),
      ),
    );
  }

  void updateCatStatus() {
    updateCalendarIndex();

    if (action == ActionItem.eat) {
      Food newFood = Food.getRandomOne();
      updateAssetName(newFood.assetPath);
      updateDescrptionText(newFood.description);
      pointing[newFood.keyName] =
          (pointing[newFood.keyName] ?? 0) + newFood.addValue;
    } else if (action == ActionItem.explore) {
      Explore newExploration = Explore.getRandomOne();
      updateAssetName(newExploration.assetPath);
      updateDescrptionText(newExploration.description);
      pointing[newExploration.keyName] =
          (pointing[newExploration.keyName] ?? 0) + newExploration.addValue;
    } else if (action == ActionItem.pat) {
      if (pointing['mood']! < 1) {
        pointing['mood'] = 0;
      }
      if (pointing['mood']! < 5) {
        pointing['mood'] = pointing['mood']! + 1;
      } else {
        pointing['mood'] = 5;
      }
      updateAssetName('mood/mood${pointing['mood']}');
      updateDescrptionText(moodMap[pointing['mood']]!);
    } else if (action == ActionItem.play) {
      Play newPlay = Play.getRandomOne();
      updateAssetName(newPlay.assetPath);
      updateDescrptionText(newPlay.description);
      pointing[newPlay.keyName] =
          (pointing[newPlay.keyName] ?? 0) + newPlay.addValue;
    } else if (action == ActionItem.sleep) {
      updateAssetName('sleep');
      updateDescrptionText('貓貓呼呼大睡。');
      pointing['sleep'] = (pointing['sleep'] ?? 0) + 1;
    }
  }
}

class CatEmoji extends StatelessWidget {
  const CatEmoji({super.key, required this.assetName});

  final String assetName;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(
          vertical: ScreenSize.getStandardWidth(context) * 0.12),
      width: ScreenSize.getStandardWidth(context) * 0.5,
      height: ScreenSize.getStandardWidth(context) * 0.5,
      child: Image.asset('assets/$assetName.png'),
    );
  }
}

class DescriptionText extends StatelessWidget {
  const DescriptionText({
    super.key,
    required this.text,
  });

  final String text;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          alignment: Alignment.center,
          width: ScreenSize.getStandardWidth(context) * 0.85,
          height: 90,
          child: Text(
            text,
            style: const TextStyle(
              fontSize: 20,
            ),
            textAlign: TextAlign.center,
          ),
        ),
      ],
    );
  }
}
