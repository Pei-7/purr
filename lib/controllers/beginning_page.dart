import 'package:flutter/material.dart';

import 'cat_page.dart';

class BeginningPage extends StatelessWidget {
  const BeginningPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Spacer(),
              IntroText(),
              Spacer(),
              GoToNextButton(),
            ],
          ),
        ),
      ),
    );
  }
}

class GoToNextButton extends StatelessWidget {
  const GoToNextButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 36.0),
      child: const Column(
        children: [
          Button(),
          SideNote(),
        ],
      ),
    );
  }
}

class SideNote extends StatelessWidget {
  const SideNote({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Text(
      '貓語翻譯：好的！',
      style: TextStyle(fontSize: 15),
    );
  }
}

class Button extends StatelessWidget {
  const Button({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return FilledButton(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) {
              return const CatPage();
            },
          ),
        );
      },
      child: const Padding(
        padding: EdgeInsets.all(8.0),
        child: Text(
          ' 喵嗷！',
          style: TextStyle(fontSize: 18),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}

class IntroText extends StatelessWidget {
  const IntroText({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Wrap(
      children: [
        Text(
          '每隻貓貓都是個小宇宙！\n\n用一年的時間，來探索貓貓的無限可能。\n透過每個月與貓貓的互動，\n創造屬於你們獨一無二的故事吧！',
          style: TextStyle(
            fontSize: 18,
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
