import React, { Component } from 'react';
import {
	Modal,
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	FlatList,
	Dimensions
} from 'react-native'
import PropTypes from 'prop-types';
//引入样式组件
import styles from './brandAndBranchFilters_css';
//import {autoSize} from './AutoLayout'

const {width, height} = Dimensions.get('window');


const   branchList=[{orgCode:'4342',orgName:'上海大剧院'},
				{orgCode:'434',orgName:'上海大剧院'},
				{orgCode:'4234',orgName:'上海大剧院'},
				{orgCode:'5435',orgName:'上海大剧院'},
				{orgCode:'4324',orgName:'上海大剧院'},
				{orgCode:'42334',orgName:'上海大剧院'},
				{orgCode:'54435',orgName:'上海大剧院'},
				{orgCode:'4345',orgName:'上海大剧院'},
				{orgCode:'42364',orgName:'上海大剧院'},
				{orgCode:'54735',orgName:'上海大剧院'},
				{orgCode:'4364',orgName:'上海大剧院'},
				{orgCode:'42734',orgName:'上海大剧院'},
				{orgCode:'54375',orgName:'上海大剧院'}
			];

const  carBrandList=[{
				carBrandId:'2343244',
				carBrandCode:'324324',
				carBrandName:'大众',
				carBrandSort:'34',
			},{
				carBrandId:'234344524',
				carBrandCode:'324324',
				carBrandName:'奥迪',
				carBrandSort:'34',
			},{
				carBrandId:'23434324',
				carBrandCode:'324324',
				carBrandName:'大众',
				carBrandSort:'34',
			},{
				carBrandId:'234334244',
				carBrandCode:'324324',
				carBrandName:'奥迪',
				carBrandSort:'34',
			},{
				carBrandId:'234344344524',
				carBrandCode:'324324',
				carBrandName:'大众',
				carBrandSort:'34',
			},
			{
				carBrandId:'234343324',
				carBrandCode:'324324',
				carBrandName:'大众',
				carBrandSort:'34',
			},{
				carBrandId:'2343324244',
				carBrandCode:'324324',
				carBrandName:'奥迪',
				carBrandSort:'34',
			},{
				carBrandId:'234344134524',
				carBrandCode:'324324',
				carBrandName:'大众',
				carBrandSort:'34',
			},
];

 export class CustomButton extends Component {
	
	static propTypes = {

		isCarBrand:PropTypes.bool.isRequired,
		buttonText:PropTypes.string.isRequired,
		selected:PropTypes.bool.isRequired,
		index:PropTypes.number.isRequired,
		
	}

	static defaultProps = {
		selected:false,
		isCarBrand:true,
		buttonText:'56',
		index:0,
	
		
	}
	render() {
		return (
			<View
			style={this.props.selected ? [styles.selectedButton,this.props.isCarBrand==false?{width:(width/2 +autoSize(40)) - autoSize(10)}:{width:(width/2 + autoSize(40))/2 - autoSize(10)}]: [styles.button ,this.props.isCarBrand==false?{width:(width/2 +autoSize(40)) - autoSize(10)}:{width:(width/2 + autoSize(40))/2 - autoSize(10)}]} onPress={this.props.onPress}>                    
                <Text style={this.props.selected ? styles.selectedButtonText : styles.buttonText} allowFontScaling={false}>{this.props.buttonText}</Text>
           </View>
		);
	}

	
};

/**
 * 创建人          向才华
 * 创建时间        2017年11月4日12点
 * 最后修改人      向才华
 * 
 * 品牌和分公司的筛选框
 * modalVisible        显示/隐藏
 * callBack            数据回调 {'brand': {id: '1', title: '宝马'},
 *						 		'region': {id: '2', title: '上海'}
 *							   }
 *cancelCallBack       点击黑屏界面的回调
 *carBrand             车品牌的data数据，数据类型为数组
 *branch               分公司名称的数据，数据的类型为数组
 * 
 *  <BrandAndBranchFilters
 *                  modalVisible={this.state.modalVisible}
 *                  cancelCallBack={() => {
 *                       this.setState({
 *                           modalVisible: false
 *                       })
 *                   }}
 *                  callBack={(choiceData) => {
 *                       RootToast.show(JSON.stringify(choiceData))
 *                  }} />
 */



export default class BrandAndBranchFilters extends Component {
	static propTypes = {

		carBrand:PropTypes.array.isRequired,
		branch:PropTypes.array.isRequired,
		callBack:PropTypes.func,
		modalVisible:PropTypes.bool.isRequired,
		cancelCallBack:PropTypes.func,
	}

	static defaultProps = {
		carBrand:carBrandList,
		branch:branchList,
		callBack:null,
		modalVisible:true,
		cancelCallBack:null
	}

	

	constructor(props){
	     super(props);
        this.state = {
            modalVisible: this.props.modalVisible,
			isOpenCarBrandList:true,
			isOpenBrandchList:true,
			carBrandIndx:-1,
			branchIndex:-1,
			choiceData: {'carBrand': {id:'', title:''},
			             'branch': {id:'', title:''}
		   },
		}	
	}

	//当props改变的时候调用的方法

	componentWillReceiveProps(nextProps){
        this.setState({
            modalVisible:nextProps.modalVisible,
        })
    }
	
	// _setModalVisible(visible) {
	// 	this.setState({ modalVisible: visible });

	// 	if (this.props.cancelCallBack) {
	// 		this.props.cancelCallBack();
	// 	}

		
	// }
	render() {
		return (
			<View>
				<Modal
				animationType={'fade'}
				transparent={true}
				visible={this.state.modalVisible}
				onRequestClose={() => { this._setModalVisible(false) }}>

				<TouchableOpacity style = {styles.container}  activeOpacity= {1} onPress ={()=>{this._setModalVisible(false)}}>
				
				<TouchableOpacity activeOpacity={1} onPress={()=>{}}  style={styles.listView}>
					

					
						<ScrollView  style = {{paddingLeft:autoSize(10),paddingRight:autoSize(10)}}>

							{this.creatHeaderView(1)}
					      
						
						   <FlatList
								numColumns={2}
								data = {this.props.carBrand.length<=6?this.props.carBrandList: 
								this.state.isOpenCarBrandList?this.props.carBrand:this.props.carBrand.slice(0,6) }
								extraData={this.state}
								renderItem={this.renderItem0.bind(this)}
								keyExtractor={this.rowKey_1.bind(this)}
                            />
                      
							 {this.creatHeaderView(2)}
							
							<FlatList
								numColumns={1}
								extraData={this.state}
								data = {this.props.branch.length<=6?this.props.branch: 
									   this.state.isOpenBrandchList?this.props.branch:this.props.branch.slice(0,6) }
								renderItem={this.renderItem1.bind(this)}
								keyExtractor={this.rowKey_2.bind(this)}
							/>


							
						</ScrollView>
						<View style={styles.bottomButtonView}>
								<TouchableOpacity activeOpacity={0.5} style={[styles.bottomButton, {justifyContent: 'center'}]} onPress={this._resetClick.bind(this)}>                    
									<Text style={styles.buttonText} allowFontScaling={false}>重置</Text>
								</TouchableOpacity>
								<TouchableOpacity activeOpacity={0.5} style={[styles.bottomButton, {backgroundColor: '#005BAC', justifyContent: 'center'}]} onPress={this._finishClick.bind(this)}>                    
									<Text style={[styles.buttonText, {color: 'white'}]} allowFontScaling={false}>完成</Text>
								</TouchableOpacity>
						</View>
						

					 
					 </TouchableOpacity>

					</TouchableOpacity>
				</Modal>
			</View>
		);
	}

	//点击完成按钮调用的方法
	_finishClick() {

		let stateBrandID = this.state.choiceData.carBrand.id;
		let stateRegionID = this.state.choiceData.branch.id; 	
		if (!stateBrandID && !stateRegionID) {
			alert('请至少选择品牌或者地区一种类型');
		} else {
			this._setModalVisible(false);

			if (this.props.callBack) {
				this.props.callBack(this.state.choiceData);
			}
		}
	}

	//设置modle是否显示，modle的alert是冲突的，两个viiew不能同时出现
_setModalVisible(visible) {
		this.setState({ modalVisible: visible });

		if (this.props.cancelCallBack) {
			this.props.cancelCallBack();
		}
	}

	//点击重置按钮调用的方法
	_resetClick() {
		this.setState({
			carBrandIndx:-1,
			branchIndex:-1,
			choiceData:{'carBrand': {id:'', title:''},
						'branch': {id:'', title:''}}
		});
	}

 
	creatHeaderView(tag){
		return(
			<View style = {{flexDirection:'row',justifyContent:'space-between',height:autoSize(40),alignItems:'center'}}>
			
			   <Text style = {{fontSize:autoSize(15)}}>{tag == 1?'品牌':'分公司'}</Text>

			   <TouchableOpacity activeOpacity = {0.5} onPress = {()=>{this.openShrinkAction(tag)}}> 
			   <View style = {{flexDirection:'row',alignItems:'center'}}>
					 <Text style = {{color:'gray',fontSize:autoSize(14),marginRight:autoSize(5)}}>全部</Text>

					 {tag == 1? <Image source = {this.state.isOpenCarBrandList?require('./Image/icon_down.png'):require('./Image/icon_up.png')} style = {{height:autoSize(9),width:autoSize(15)}}/>  :
					 <Image source = {this.state.isOpenBrandchList?require('./Image/icon_down.png'):require('./Image/icon_up.png')} style = {{height:autoSize(9),width:autoSize(15)}}/>
					 }
					
			   </View>
			   </TouchableOpacity>
			
			</View>);


	}
//点击全部按钮所触发的方法
	openShrinkAction(index) {
		if(index == 1){
			this.setState({
				isOpenCarBrandList:!this.state.isOpenCarBrandList,
			})
		}

		if(index == 2) {
			this.setState({
			isOpenBrandchList:!this.state.isOpenBrandchList,
			})

		}
	}
	//品牌所返回的itemView
	renderItem0(item,index) {

		let selected = false;
		if(this.state.carBrandIndx == item.index) {

			selected = true;
		}
		
		return(
			
			<View style = {{marginRight:autoSize(8),marginTop:autoSize(5)}}> 
			<TouchableOpacity activeOpacity = {0.5} onPress = {()=>this.onClick(item)}> 
				<CustomButton selected = {this.state.carBrandIndx == item.index}  index = {item.index} buttonText = {item.item.carBrandName} 
				//onClick = {this.onClick.bind(this)}
				
				/>
			</TouchableOpacity>
			</View>
			
			);

	}
	//点击品牌的item所触发的方法
	onClick(item) {
		

		let choiceData = this.state.choiceData;
		choiceData.carBrand = {id: item.item.carBrandCode, title:item.item.carBrandName};
		this.setState({
			carBrandIndx:item.index,
			choiceData:choiceData,
		});
	}
//返回分公司的ItemView
	renderItem1(item,index) {
		let selected = false;
		if(this.state.branchIndex == item.index) {

			selected = true;
		}
		return(
			<View style = {{marginRight:autoSize(8),marginTop:autoSize(5)}}> 
				<TouchableOpacity activeOpacity = {0.5} onPress = {()=>this.onClick1(item)}> 
				    <CustomButton  selected = {selected} isCarBrand = {false} buttonText = {item.item.orgName}/>
				</TouchableOpacity>
			</View>
			);
		}
//分公司的item被点击时触发的动作
	onClick1(item) {
		let choiceData = this.state.choiceData;
		choiceData.branch = {id: item.item.orgCode, title:item.item.orgName};

	    this.setState({
			branchIndex:item.index,
			choiceData:choiceData,
			});
		}

	rowKey_2(item,index){

		return index;
	}

	rowKey_1(item,index){
		
				return index;
			}
	
};



