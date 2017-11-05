import {
	Dimensions,
	StyleSheet
} from 'react-native';

//import {autoSize} from './AutoLayout'

const {width, height} = Dimensions.get('window');

export default {
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	button: {
		borderRadius: autoSize(5),
	
		height: autoSize(33),
		justifyContent: 'center',
		alignItems:'center',
		borderColor: '#999999',
		borderWidth: StyleSheet.hairlineWidth,
	},
	buttonText: {
		fontSize: autoSize(14),
		margin: autoSize(5),
		textAlign: 'center',
		color: '#222222'
	},
	selectedButton: {
		borderRadius:autoSize(5) ,

		height: autoSize(33),
		justifyContent: 'center',
		alignItems:'center',
		borderColor: '#005BAC',
		borderWidth: StyleSheet.hairlineWidth,
		backgroundColor: '#DEF0FF'
	},
	selectedButtonText: {
		fontSize:autoSize(14),
		margin:autoSize(5),
		textAlign: 'center',
		color: '#005BAC'
	},
	listView: {
		backgroundColor: 'white',
		width: width/2 +autoSize(50),
		marginBottom: 0,
		marginTop:0,
		marginLeft:width/2 -autoSize(50),
		
		padding:autoSize(0),
		paddingTop:20,
	},
	tapToDismissView: {
		width: width/2 - autoSize(50),
		height: height,
	},
	sectionList: {
		marginTop: autoSize(20),
		marginLeft: autoSize(5),
		marginRight:autoSize(5),
	},
	list: {
		justifyContent: 'space-between',
		flexDirection: 'row',//设置横向布局  
		flexWrap: 'wrap',  //设置换行显示
		alignItems: 'flex-start',
		backgroundColor: '#FFFFFF'
		
	},
	headerView: {
		marginLeft:0
	},
	bottomButtonView: {
		flexDirection: 'row',
		marginLeft: 0,
		marginRight: 0,
		height:autoSize(45),
		borderTopColor: '#999999',
		borderWidth: StyleSheet.hairlineWidth,
		marginBottom: 0
	},
	bottomButton: {
		width: (width/2 + autoSize(50))/2,
		height:autoSize(45),
	},
};