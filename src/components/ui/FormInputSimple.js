/**
 * Text Input
 *
     <FormInput></FormInput>
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from 'react-native-elements';

// Consts and Libs
import { AppColors, AppFonts } from '../../theme/';

/* Component ==================================================================== */
class CustomFormInputSimple extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    inputStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    containerStyle: [],
    inputStyle: [],
  }

  inputProps = () => {
    // Defaults
    let props = {
      ...this.props,
      containerStyle: [{
        /* borderBottomColor: AppColors.border,
        borderBottomWidth: 1,
        backgroundColor: 'rgba(255,255,255,0.05)',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20, */
      }],
      inputStyle: [{
        color: AppColors.textSecondary,
        fontFamily: AppFonts.base.family,
        // paddingHorizontal: 10,
        paddingVertical: 3,
      }],
    };

    props = [props, this.props.containerStyle, this.props.inputStyle];
    return props;
  }

  render = () => <FormInput {...this.inputProps()} />
}

/* Export Component ==================================================================== */
export default CustomFormInputSimple;
