import 'dotenv/config';
export default{
  "expo": {
    "name": "ChatApp",
    "slug": "ChatApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: "AIzaSyBJRpOYUMutgIfAP7r1YD3oJYDCNEXeJYc",
      authDomain: "fir-2d19d.firebaseapp.com",
      projectId: "fir-2d19d",
      storageBucket: "fir-2d19d.appspot.com",
      messagingSenderId: "575235802509",
      appId: "1:575235802509:web:997be27d57fb72dd4629c4",
      measurementId: "G-8BTHGPX959"
    }
  }
}
