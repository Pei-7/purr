import 'package:flutter/material.dart';

import '../model/common.dart';
import '../model/result.dart';

class ResultPage extends StatelessWidget {
  final Result catResult;
  const ResultPage({super.key, required this.catResult});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(32.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              const Spacer(),
              const ReturnButton(),
              const Spacer(),
              ResultText(catResult: catResult),
              ResultEmoji(catResult: catResult),
              const Spacer(),
            ],
          ),
        ),
      ),
    );
  }
}

class ReturnButton extends StatelessWidget {
  const ReturnButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 24),
      width: ScreenSize.getStandardWidth(context) * 0.4,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(backgroundColor: Colors.pink.shade100),
        onPressed: () {
          Navigator.popUntil(context, (route) => route.isFirst);
        },
        child: const Text(
          '再玩一次',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}

class ResultText extends StatelessWidget {
  const ResultText({super.key, required this.catResult});

  final Result catResult;

  @override
  Widget build(BuildContext context) {
    return Text(
      catResult.description,
      style: const TextStyle(fontSize: 22),
      textAlign: TextAlign.center,
    );
  }
}

class ResultEmoji extends StatelessWidget {
  const ResultEmoji({
    super.key,
    required this.catResult,
  });

  final Result catResult;

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: const EdgeInsets.all(24),
        width: ScreenSize.getStandardWidth(context) * 0.6,
        height: ScreenSize.getStandardWidth(context) * 0.6,
        child: Image.asset('assets/${catResult.assetPath}.png'));
  }
}
