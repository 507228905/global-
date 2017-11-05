import React, {Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class button extends Component {
    static propTypes = {
        titlt:PropTypes.string.isRequired,

    }
    static defaultProps = {

        titlt:'默认值',
    }

    render() {
        
        return(
            <Text style = {{fontSize:50 ,color:'ffffff'}}>{this.props.titlt}</Text>

        );

    }



}