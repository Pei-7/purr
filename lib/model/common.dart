import 'package:flutter/material.dart';

class ScreenSize {
  final double standardLength;

  const ScreenSize({required this.standardLength});

  static double getStandardWidth(BuildContext context) {
    final size = MediaQuery.of(context).size;
    double length = size.width;
    if (size.width > size.height) {
      length = (size.height) / 852 * 393;
    }
    return length;
  }
}
