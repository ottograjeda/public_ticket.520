React-Native Monorepo
=================
This is a simple monorepo. It shows how to share code between different platforms 
(web, Android, & iOS) when using React-Native & React-Native-Web. 

The key to code sharing is React-Native's [Platform-specific extensions](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions). React-Native will detect when the extension ```.native.js``` , ```.ios.js``` or ```.android.js``` are used and load the relevant platform file when required.

The main benefit is to share application logic while keeping the rendering of individual components unique to each platform. 

Installation
============
* Get the repo
* From the root directory, execute ```yarn```
* Change root/android/local.properties as needed

Required: React-Native working per [Getting Started](https://facebook.github.io/react-native/docs/getting-started)

Run
===

For each platform, from the root directory, do

### Web
* ```node_modules/.bin/webpack -p --progress```
* ```node_modules/.bin/webpack-dev-server --content-base public/ --config ./webpack.config.js --port 3001 --inline --hot --colors```
* Manually open a browser to localhost:3001 to see webapp 
* Inspect browser window = open console to see shared code working on button click

### Android
* ```react-native run-android```

### iOS
* ```react-native run-ios``` or open ```ios/tenta.xcodeproj``` with XCode and hit, Run

### For All
1 element (a button), native to each platform, is used ; it is attached to 1 function.
1 component (title) & 1 function (just logs console message) is shared for all 3 platforms.
Due to platform specific UI rendering, CSS & App are not shared ; they are just shared between iOS & Android.

Screenshots
===========

![Screenshot 1](foo)
![Screenshot 2](foo)
![Screenshot 3](foo)

Notes
=====
Since this is a simple , basic monorepo (for frontend development)...

* Lerna or Yarn workspaces not used ; there is only 1 node_modules folder
* State / Props / Redux are not used for any platform. You can add them or any other package, as needed
* Examples of Shared code = a) app/component/App , b) app/component/Title , c) common/example.js , + d) common/nativeStyles.js.

Inspiration
===========
* [Sharing code btwn React Web and Native Apps](http://jkaufman.io/react-web-native-codesharing/)
* [Code sharing btwn React & React Native applications](http://ihor.burlachenko.com/code-sharing-between-react-and-react-native-applications/)
