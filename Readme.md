## cordova-reactvr-testapp

React VR example app for cordova

### How to build apps

1. Install cordova

    ```
    $ npm install -g cordova
    ```
    
1. Add platforms

    ```
    $ cordova platform add ios --save
    $ cordova platform add android --save
    ```

1. Install dependencies

    ```
    $ cd react_vr
    $ npm install
    ```
    
1. Build

    ```
    $ npm run bundle
    $ cd ../
    $ cordova build ios
    $ cordova build android
    ```
    
1. Run by emulator

    ```
    $ cordova emulate ios
    $ cordova emulate android
    ```
    