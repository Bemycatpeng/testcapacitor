import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";

// const successFunction = (e) => {
//   if (!e) {
//     alert("alert弹窗");
//   }
// };
const openScanner = async () => {
  AndroidFullScreen.immersiveMode();
};

openScanner();
