import 'package:flutter/material.dart';
import 'package:purr/controllers/start_page.dart';

import 'controllers/beginning_page.dart';
import 'model/common.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: StartPage(),
    );
  }
}
