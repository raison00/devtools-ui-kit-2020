# The Flutter DevTools UI Kit Living Style Guide

#### The Flutter DevTools Living Style Guide provides a unified visual experience,  establishes consistent UX for features, and maintains the expected look and feel of the complete suite of tools.  It is the single source of truth for teams (product, ux, engineering) to refer to for UI changes, for iterations, and when developing new features.

##### Flutter Layout:  Understanding, Using, and Resolving Text Overflow Issues using Flutter's Dart DevTools

>  Understanding Flutter's Layout Paradim 
Purpose and common info about it all: articles, tutorials and various resources devoted to common layout issues.

# Positions are set by parents.
> The Flutter layout paradim is very different from HTML layout paradim: so it's best to breakdown how layout works within the Flutter framework.


- [ ] <kbd>?</kbd>A widget gets its own constraints from its parent. A “constraint” is just a set of 4 doubles: a minimum and maximum width, and a minimum and maximum height.
- [ ] <kbd>?</kbd>Then the widget goes through its own list of children. One by one, the widget tells its children what are their constraints (which can be different for each child), and then asks each child which size it wants to be.
- [ ] <kbd>?</kbd>Then, the widget positions its children (horizontally in the x axis, and vertically in the y axis), one by one.
- [ ] <kbd>?</kbd>And, finally, the widget tells its parent about its own size (within the original constraints, of course).

## Resources
### Articles
*  [ Test your Flutter widgets using golden files ] (https://medium.com/swlh/test-your-flutter-widgets-using-golden-files-b533ac0de469): Testing how widgets get rendered with different screen sizes and enabling notifications when the look of a widget changes.
*  [ Flutter: The Advanced Layout Rule Even Beginners Must Know ] (https://medium.com/flutter-community/flutter-the-advanced-layout-rule-even-beginners-must-know-edc9516d1a2):header
*  [ Flutter — Row/Column Cheat Sheet ] (https://medium.com/jlouage/flutter-row-column-cheat-sheet-78c38d242041):Flutter 's use of Row & Column for Layouts
*  [ Page Transitions Using ThemeData in Flutter ] (https://medium.com/flutter-community/page-transitions-using-themedata-in-flutter-c24afadb0b5d): How to apply page transitions to the entire app.
* [Flutter Widget Inspector](https://medium.com/pslove/flutter-widget-inspector-aa7c828854d6): How can I visualize a widget’s place in its complete widget tree?

### Tutorials
*  [ How I Made My Own App (which you can download) ] (https://www.youtube.com/watch?v=W89i7qqhuLQ): For anyone who's ever asked "Is it February the 29th?"
*  [ Flutter Tutorial for Beginners #4 - Creating a Flutter App ] (https://www.youtube.com/watch?v=TSIhiZ5jRB0&list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ&index=5&t=0s): The Net Ninja's Flutter Tutorials
*  [ Flutter - Inspecting the Widget Tree] (https://www.youtube.com/watch?v=T2fgPSWvoZo): Using the inspector to find a widget tree and render tree
*  [ Title ] (http):header
### Github
*  [ Title ] (http):header
*  [ Title ] (http):header
*  [ Title ] (http):header
*  [ Title ] (http): header
### StackOverflow
*  [ How to use Flutter's Widget Inspector in Visual Studio Code? ] (https://stackoverflow.com/questions/53381536/how-to-use-flutters-widget-inspector-in-visual-studio-code: Functionality of Dart's DevTools in the DevTools
*  [ Title ] (http):header
*  [ Title ] (http):header
*  [ Title ] (http):header
### CodePens
*  [ Flutter Box Constraints ] (https://codepen.io/felicitous/pen/yLYXRjM):Box Constraints Visualization
*  [ Title ] (http):header
*  [ Title ] (http):header
*  [ Title ] (http):header
### Documentation
* [Using the Flutter inspector](https://flutter.dev/docs/development/tools/devtools/inspector): The Flutter widget inspector is a powerful tool for visualizing and exploring Flutter widget trees.
*  [ Title ] (http):header
*  [ Title ] (http):header
### Gists:  Visualizing Common Layout Issues with Flutter Tools and Solutions
* [Flutter RenderOverflow Errors using CustomMultiChild ](https://gist.github.com/raison00/b11a9a7dedf70500d9fb8bd215d86de6): Sample Overflow Challenge: Using CustomMultiChild Layout to Resolve RenderOverflow Errors
* [Flutter RenderOverflow Solution using CustomMultiChild ](https://gist.github.com/raison00/fb4ce93653187da22f9cfdb9eab7af52): Sample Overflow Solution: Using CustomMultiChild Layout to Resolve RenderOverflow Errors
* [Flutter RenderOverflow Solution using Flexible Widget](https://gist.github.com/raison00/679ad092bdfd5979e766507c1dc7a0e9): Using Flexible Widget to solve render flex overflow errors
* [Flutter RenderOverflow Solution using Expanded Widget](https://gist.github.com/raison00/27f6302019514b0c5f8150f9fdfa6a88): Using Expanded Widget to solve render flex overflow errors
* [Flutter Box Constraints](https://gist.github.com/raison00/311b04d2898178f14766675673dfa16a): Box Constraints Visualization; no text clipping issues/errors but can have a render overflow error in the column


