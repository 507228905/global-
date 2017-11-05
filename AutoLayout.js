/*
 * @Author: 屠淋 
 * @Date: 2017-05-05 10:09:56 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-17 19:45:34
 */

import {  PixelRatio,Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


//调整字体
export function autoSize(size) {

    return  size * (SCREEN_WIDTH/375) ;//根据iphone 6的宽度来缩放
}

//选样式
export function layoutStyle(normalStyle,newStyle){
    return [normalStyle,isNull(newStyle) ? {} : newStyle];
}

//调整宽度
export function autoWidth(width) {
    return  width * (SCREEN_WIDTH/375) ;//根据iphone 6的宽度来缩放
}

//调整高度
export function autoHeight(height) {
    return  height * (SCREEN_HEIGHT/667) ;//根据iphone 6的高度来缩放
}

// const pixelRatio = PixelRatio.get();
//     if (pixelRatio === 2) {
//         // iphone 5s and older Androids
//         if (SCREEN_WIDTH < 360) {
//             return size * 0.95;
//         }
//         // iphone 5
//         if (SCREEN_HEIGHT < 667) {
//             return size;
//             // iphone 6-6s
//         } else if (SCREEN_HEIGHT >= 667 && SCREEN_HEIGHT <= 735) {
//             return size * 1.15;
//         }
//         // older phablets
//         return size * 1.25;
//     }
//     if (pixelRatio === 3) {
//         // catch Android font scaling on small machines
//         // where pixel ratio / font scale ratio => 3:3
//         if (SCREEN_WIDTH <= 360) {
//             return size;
//         }
//         // Catch other weird android width sizings
//         if (SCREEN_HEIGHT < 667) {
//             return size * 1.15;
//             // catch in-between size Androids and scale font up
//             // a tad but not too much
//         }
//         if (SCREEN_HEIGHT >= 667 && SCREEN_HEIGHT <= 735) {
//             return size * 1.2;
//         }
//         // catch larger devices
//         // ie iphone 6s plus / 7 plus / mi note 等等
//         return size * 1.27;
//     }
//     if (pixelRatio === 3.5) {
//         // catch Android font scaling on small machines
//         // where pixel ratio / font scale ratio => 3:3
//         if (SCREEN_WIDTH <= 360) {
//             return size;
//             // Catch other smaller android height sizings
//         }
//         if (SCREEN_HEIGHT < 667) {
//             return size * 1.20;
//             // catch in-between size Androids and scale font up
//             // a tad but not too much
//         }
//         if(SCREEN_HEIGHT >= 667 && SCREEN_HEIGHT <= 735) {
//             return size * 1.25;
//         }
//         // catch larger phablet devices
//         return size * 1.40;
//     }
//     // if older device ie pixelRatio !== 2 || 3 || 3.5
//     return size;

