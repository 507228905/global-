import * as  GlobalColor from './globalColor';
import * as AutoLayout from '../AutoLayout';

//import BrandAndBranchFilters from './../brandAndBranchFilters';

//定义全局的颜色
global.GlobalColor = GlobalColor;
//定义全局的自动适配屏幕；
global.AutoLayout = AutoLayout;
//自动适配字体大小和长度和宽度
/**
 * autoSize适用的主要的事项；
 * 1.是采用iPhone的屏幕的宽度适配的，宽度为：375
 * 2.当某个组件需要使用m'r
*/
global.autoSize = AutoLayout.autoSize;

/**
 * 导入组件
*/
// global.BrandAndBranchFilters = BrandAndBranchFilters;