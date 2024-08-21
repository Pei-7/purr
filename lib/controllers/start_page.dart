import 'package:flutter/material.dart';
import 'package:purr/controllers/beginning_page.dart';
import 'package:purr/model/common.dart';

class StartPage extends StatelessWidget {
  const StartPage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Spacer(),
            HomeImage(),
            Spacer(),
            StartButton(),
          ],
        ),
      ),
    );
  }
}

class HomeImage extends StatelessWidget {
  const HomeImage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: ScreenSize.getStandardWidth(context) * 0.6,
      height: ScreenSize.getStandardWidth(context) * 0.6,
      child: Image.asset('assets/cat.gif'),
    );
  }
}

class StartButton extends StatelessWidget {
  const StartButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: ScreenSize.getStandardWidth(context) * 0.4,
      margin: const EdgeInsets.only(bottom: 56),
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.pink.shade100,
        ),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) {
              return const BeginningPage();
            }),
          );
        },
        child: const Text(
          '開始遊戲',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}
