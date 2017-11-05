/*
 * @Author: aacn
 * @Date:   2017-02-24 10:20:55
 * @Last Modified by:   wangyinhua
 * @Last Modified time: 2017-06-07 10:35:41
 */

import {
	Dimensions,
	PixelRatio,
	Platform,
} from 'react-native';

export const {
	width,
	height,
	scale,
} = Dimensions.get('window');

export const ratio = PixelRatio.get();

//
export const OS = Platform.OS; // ios,android
export const OSVersion = Platform.Version;

// console.log('----------------- Platform -----------------');
// console.log(Platform);

// console.log(PixelRatio.get());
// console.log(Dimensions.get('window'));

// 尺寸
export const headerHeight = 64;
export const statusBarHeight = OS === 'ios' ? 20 : (OSVersion <= 20 ? 0 : 20);

// 间隔
export const gap_1 = 8 * 1;
export const gap_2 = 8 * 2;
export const gap_3 = 8 * 3;
export const gap_4 = 8 * 4;
export const gap_5 = 8 * 5;
export const gap_6 = 8 * 6;
export const gap_7 = 8 * 7;
export const gap_8 = 8 * 8;
export const gap_9 = 8 * 9;
export const gap_10 = 8 * 10;

// 颜色
export const color = '#ffffff';
export const color_0 = 'transparent';
export const color_00 = '#000000';

//
export const color_1 = '#222222';
export const color_2 = '#666666';
export const color_3 = '#999999';
export const color_4 = '#cccccc';
export const color_5 = '#ffd200';
export const color_6 = '#ff552e';
export const color_7 = '#e5e5e5'; // 边框线
export const color_8 = '#f82121';
export const color_9 = '#ff0000';
export const color_10 = '#f7f7f7'; // 背景色

export const color_30 = '#ffd400';
export const color_31 = '#00a94e';
export const color_32 = '#c27000';
export const color_33 = '#ff6766';



// 字体大小
export const size_11 = 11;
export const size_12 = 12;
export const size_14 = 14;
export const size_15 = 15;
export const size_17 = 17;
export const size_18 = 18;
export const size_30 = 30;