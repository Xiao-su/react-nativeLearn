

import { Dimensions } from 'react-native';

// 在移动端开发中200的单位是dp，实际开发中美工给的是px单位的图，需转换
// 公式为: 设计稿的宽度 / 元素的宽度 = 手机屏幕 / 手机中元素的宽度
// 手机中元素的宽度 = 手机屏幕 * 元素的宽度 / 设计稿的宽度(假设375)

/**
 * 屏幕的宽度
 */
export const screenWidth = Dimensions.get("window").width;

/**
 * 屏幕的高度
 */
export const screenHeight = Dimensions.get("window").height;

/**
 * 将px转dp
 * @param {Number} elePx 元素的宽度或者高度 单位px
 * @returns 
 */
export const pxToDp=(elePx) => screenWidth * elePx / 375;
