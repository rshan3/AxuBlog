import React, { PropTypes, Component } from 'react';
import { Map, List } from 'immutable';
import HomePageStyle from './styles/HomePage.css';
import withStyles from '../../decorators/withStyles';
import Section from '../Section';
import Canvas from '../Canvas';

class BlogLogo extends Component {

  render() {
    return (
      <svg viewBox="0 0 500 500">
        <g>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M308,297.7c0,6.6,0.8,12.4,2.3,17.4
		c1.6,5,4.1,8.7,7.6,11c3.5,2.3,7.6,3.5,12.4,3.5c1.7,0,3.4-0.2,5.1-0.5c1.8-0.4,3.5-0.9,5.4-1.6v-12.8L310,282.4
		C308.7,287.3,308,292.5,308,297.7z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M161.7,208.4c1.2-2,1.8-4.5,1.8-7.5
		c0-3.1-0.6-5.6-1.8-7.5c-1.2-2-2.9-3.4-5.2-4.5c-2.2-1-5.8-1.5-10.8-1.5v27.2c4.8,0,8.4-0.5,10.7-1.6
		C158.7,211.9,160.5,210.4,161.7,208.4z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M330.4,388.3c-0.9-1.5-1.7-2.6-2.3-3.2
		c-0.6-0.7-1.1-1.1-1.6-1.2c-0.4-0.2-0.8-0.1-1.1,0c-0.6,0.4-0.7,1.1-0.3,2.4c0.3,1,0.9,2.3,1.9,4c1.2,1.9,2.3,3.3,3.2,4
		c0.7,0.5,1.2,0.6,1.7,0.3c0.3-0.2,0.5-0.5,0.5-0.9c0.1-0.5-0.1-1.2-0.4-2.1C331.7,390.6,331.2,389.6,330.4,388.3z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M165.6,384c0.4-0.3,0.7-0.7,1.1-1.3
		c0.6-0.8,0.9-1.5,1-2.1c0.1-0.5-0.1-1-0.6-1.3l-0.5-0.3l-3.3,4.8l0.3,0.2c0.4,0.3,0.8,0.4,1.1,0.4
		C164.9,384.4,165.2,384.3,165.6,384z"/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" points="182.1,397.6 183.2,393
		180.1,396.6 	"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M218.7,405.2c0.2-1,0.3-1.7,0.1-2.3
		c-0.1-0.5-0.5-0.9-1.1-1l-0.6-0.1l-1.3,5.7l0.3,0.1c0.5,0.1,0.9,0.1,1.2,0c0.3-0.1,0.5-0.4,0.8-0.8
		C218.4,406.4,218.6,405.8,218.7,405.2z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M362.6,55.5h-225L25,250l112.6,194.5h225
		L475,250L362.6,55.5z M120.1,250.7c3.2,0,5.4-0.3,6.5-0.9c1.1-0.6,1.9-1.4,2.4-2.3c0.5-0.9,0.7-3.3,0.7-7v-44.8
		c0-3.7-0.2-6.1-0.7-7.1c-0.5-1-1.3-1.7-2.4-2.3c-1.2-0.6-3.3-0.9-6.5-0.9v-1.9h33.1c7.9,0,13.5,0.7,16.8,2.1
		c3.3,1.4,5.9,3.5,7.8,6.3c1.9,2.8,2.9,5.8,2.9,8.9c0,3.3-1.2,6.3-3.6,8.9c-2.4,2.6-6.7,4.7-12.7,6.2c6.6,1.5,11.1,3.4,13.8,5.5
		c3.8,3.1,5.7,7.1,5.7,12c0,5.2-2.1,9.5-6.3,12.9c-5.1,4.1-12.6,6.2-22.4,6.2h-35.1V250.7z M142.5,360.8c-0.2,0-0.3-0.1-0.4-0.2
		c-0.1-0.2-0.2-0.4-0.1-0.7c0.1-0.3,0.3-0.6,0.6-0.9c0.3-0.3,0.7-0.5,1-0.6c0.4-0.1,0.6,0,0.8,0.1c0.2,0.2,0.2,0.6,0.1,1
		s-0.5,1-1.1,1.5c-0.7,0.6-1.4,1.1-2.1,1.4c-0.7,0.3-1.4,0.3-2.1,0.1l0.3-0.3c0.5,0.1,1,0,1.5-0.2c0.5-0.2,1-0.5,1.4-0.9
		c0.1-0.1,0.1-0.1,0.2-0.2c0-0.1,0-0.1,0-0.1C142.6,360.8,142.5,360.8,142.5,360.8z M121.8,352.7l-2.1-2.9l0.3-0.2l0.1,0.1
		c0.2,0.2,0.3,0.4,0.5,0.4c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0.2-0.2,0.5-0.6l1.1-1.3l-1.5-2.1l-1.2,0.5
		c-0.4,0.2-0.7,0.3-1,0.5c-0.3,0.2-0.5,0.4-0.5,0.7c0,0.1,0,0.4,0.2,0.7l-0.3,0.2l-1.4-2l0.3-0.2c0.2,0.2,0.5,0.2,0.9,0.2
		c0.4,0,1-0.3,2-0.6l10.2-4l0.1,0.1l-7.4,8.5c-0.7,0.8-1.1,1.3-1.2,1.6c-0.1,0.2-0.1,0.4,0,0.6L121.8,352.7z M127.5,359.4l-0.3,0.2
		l-2.2-2.8l0.3-0.2c0.2,0.2,0.4,0.3,0.5,0.3c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.2,0.3-0.5,0.6-1l1.6-2.6l-2.6,0.7
		c-0.8,0.2-1.3,0.4-1.5,0.6c-0.1,0.1-0.3,0.3-0.3,0.4c-0.1,0.2-0.1,0.3,0,0.5c0,0.1,0.1,0.2,0.2,0.4l-0.3,0.2l-1.7-2.2l0.3-0.2
		c0.3,0.2,0.5,0.3,0.8,0.3c0.4,0,1.1-0.1,2.1-0.4l3.4-0.9l2.8-4.5c0.5-0.7,0.7-1.2,0.7-1.3c0.1-0.2,0.2-0.4,0.2-0.5
		c0-0.1,0-0.3-0.1-0.4l0.3-0.2l2.3,2.9l-0.3,0.2l-0.1-0.1c-0.1-0.2-0.3-0.2-0.4-0.2c-0.1,0-0.3,0.1-0.4,0.2
		c-0.1,0.1-0.2,0.2-0.3,0.3l-0.6,0.9l-1.4,2.3l1.8-0.5c0.9-0.2,1.5-0.5,1.8-0.7c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.1,0.1-0.3,0.1-0.4
		c0-0.1-0.1-0.3-0.2-0.5l0.3-0.2l1.7,2.1l-0.3,0.2c-0.1-0.2-0.3-0.3-0.4-0.3c-0.1,0-0.4-0.1-0.6,0c-0.2,0-0.7,0.1-1.6,0.4l-3.2,0.8
		l-3,5c-0.5,0.8-0.8,1.4-0.8,1.6C127.4,359,127.4,359.2,127.5,359.4z M131.9,364.2c-0.7,0.1-1.3-0.2-1.8-0.8
		c-0.4-0.5-0.6-0.9-0.6-1.4c0-0.6,0.2-1.2,0.6-1.8c0.4-0.6,1-1.2,1.8-2l4.9-4.3c0.6-0.5,0.9-0.8,1-1c0.1-0.2,0.2-0.3,0.2-0.5
		c0-0.2-0.1-0.4-0.3-0.6l0.3-0.2l2.5,2.8l-0.3,0.2l-0.1-0.1c-0.2-0.2-0.4-0.3-0.5-0.3c-0.2,0-0.3,0-0.5,0.1
		c-0.2,0.1-0.5,0.4-1.1,0.9l-4.9,4.3c-0.9,0.8-1.5,1.3-1.7,1.7c-0.2,0.3-0.4,0.7-0.4,1c0,0.3,0.1,0.6,0.3,0.9c0.3,0.3,0.6,0.4,1,0.4
		s0.9-0.1,1.4-0.4c0.5-0.3,1.3-0.9,2.4-1.8l4.1-3.6c0.4-0.4,0.7-0.7,0.9-0.9c0.1-0.2,0.2-0.4,0.2-0.5c0-0.2-0.1-0.4-0.3-0.7l0.3-0.2
		l1.7,1.9l-0.3,0.2l-0.1-0.1c-0.1-0.2-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.7,0.2c-0.2,0.1-0.5,0.3-0.9,0.7l-3.8,3.3
		c-1.2,1-2.1,1.7-2.7,2.1C133.3,363.9,132.6,364.1,131.9,364.2z M140.5,372.6c-0.9,0.2-1.6,0.1-2.1-0.4c-0.2-0.2-0.3-0.3-0.4-0.5
		c-0.1-0.2-0.2-0.5-0.2-0.9c0-0.2-0.1-0.4-0.2-0.4c-0.1-0.1-0.2-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.6,0.2l-0.1-0.1l3.5-3.6l0.1,0.1
		c-0.9,1.1-1.4,2.1-1.6,2.9c-0.2,0.8-0.1,1.5,0.3,1.8c0.3,0.3,0.7,0.4,1.1,0.3c0.5-0.1,0.9-0.4,1.2-0.7c0.2-0.2,0.4-0.5,0.5-0.7
		c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.3,0.1-0.8,0-1.4c-0.1-0.9,0-1.6,0-2.1c0.1-0.5,0.3-1,0.5-1.5c0.3-0.5,0.6-0.9,1-1.4
		c0.7-0.8,1.5-1.2,2.4-1.5c0.8-0.2,1.5-0.1,1.9,0.3c0.2,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.1,0.4,0.1,0.7c0,0.3,0.1,0.5,0.1,0.6
		c0.1,0.1,0.2,0.1,0.3,0c0.1,0,0.3-0.2,0.6-0.4l0.1,0.1l-3.1,3.2l-0.2-0.2c0.7-0.9,1.2-1.7,1.3-2.5c0.2-0.8,0.1-1.3-0.2-1.7
		c-0.3-0.3-0.6-0.3-1-0.2c-0.4,0.1-0.8,0.3-1.1,0.7c-0.2,0.2-0.4,0.4-0.5,0.6c-0.1,0.3-0.2,0.6-0.3,1c0,0.3,0,0.8,0,1.6
		c0.1,1.1,0,2.1-0.3,2.8c-0.3,0.7-0.7,1.4-1.3,2C142.2,371.9,141.4,372.4,140.5,372.6z M149.9,381.8l0.2,0.2l-0.2,0.3l-2.9-2.5
		l0.2-0.3l0.2,0.2c0.2,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.5-0.2c0.1-0.1,0.4-0.4,0.9-0.9l2.7-3.1l-2-1.7l-2.7,3.1
		c-0.4,0.5-0.7,0.9-0.8,1c-0.1,0.2-0.1,0.3-0.1,0.5c0,0.2,0.1,0.3,0.2,0.5l0.2,0.2l-0.2,0.3l-2.9-2.5l0.2-0.3l0.2,0.2
		c0.2,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.5-0.2c0.1-0.1,0.4-0.4,0.9-0.9l5.7-6.6c0.4-0.5,0.7-0.9,0.8-1c0.1-0.2,0.1-0.3,0.1-0.5
		c0-0.2-0.1-0.3-0.2-0.5l-0.2-0.2l0.2-0.3l2.9,2.5l-0.2,0.3l-0.2-0.2c-0.2-0.1-0.3-0.2-0.5-0.2c-0.1,0-0.3,0.1-0.5,0.2
		c-0.1,0.1-0.4,0.4-0.9,0.9l-2.5,2.9l2,1.7l2.5-2.9c0.4-0.5,0.7-0.9,0.8-1s0.1-0.3,0.1-0.5c0-0.2-0.1-0.3-0.2-0.5l-0.2-0.2l0.2-0.3
		l2.9,2.5l-0.2,0.3l-0.2-0.2c-0.2-0.1-0.3-0.2-0.5-0.2c-0.1,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.4,0.4-0.9,0.9l-5.7,6.6
		c-0.4,0.5-0.7,0.9-0.8,1c-0.1,0.2-0.1,0.3-0.1,0.5C149.7,381.5,149.8,381.6,149.9,381.8z M150.8,382.9l0.2-0.3l0.2,0.1
		c0.2,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.5-0.2c0.1-0.1,0.4-0.4,0.8-0.9l5.4-6.9c0.4-0.5,0.6-0.8,0.7-0.9c0.1-0.2,0.2-0.4,0.2-0.5
		c0-0.2-0.1-0.4-0.3-0.6l-0.2-0.1l0.2-0.3l4.9,3.7l-2.4,3.1l-0.2-0.1c0.5-0.8,0.8-1.5,0.9-1.9c0.1-0.4,0.1-0.9-0.1-1.2
		c-0.1-0.2-0.4-0.5-0.8-0.8l-0.6-0.5l-3.3,4.3l0.1,0.1c0.4,0.3,0.8,0.3,1.3,0c0.5-0.3,1.1-0.8,1.8-1.6l0.2,0.1l-4.3,5.5l-0.2-0.1
		c0.4-0.6,0.7-1.2,0.9-1.6c0.2-0.5,0.3-0.8,0.2-1.1c0-0.2-0.2-0.5-0.5-0.7l-2.3,3c-0.4,0.6-0.7,0.9-0.8,1.1
		c-0.1,0.2-0.1,0.3-0.1,0.4c0,0.1,0.1,0.3,0.3,0.4l0.3,0.3c0.5,0.4,1.2,0.5,1.8,0.3c0.7-0.2,1.4-0.7,2.3-1.5l0.2,0.1l-2.8,3.1
		L150.8,382.9z M163.6,392.3l-1.9-1.3l1.5-6.3l-0.4-0.3l-2.1,3.1c-0.4,0.6-0.6,1-0.7,1.2c-0.1,0.2-0.1,0.4,0,0.5
		c0,0.2,0.2,0.3,0.5,0.5l-0.2,0.3l-3.1-2.1l0.2-0.3c0.3,0.2,0.5,0.3,0.7,0.3c0.2,0,0.3-0.1,0.5-0.2c0.1-0.1,0.4-0.5,0.8-1.1l4.9-7.1
		c0.4-0.6,0.6-1,0.7-1.2c0.1-0.2,0.1-0.4,0-0.5c0-0.2-0.2-0.3-0.5-0.5l0.2-0.3l2.8,1.9c0.7,0.5,1.2,1,1.4,1.4
		c0.2,0.4,0.3,0.9,0.1,1.6c-0.1,0.6-0.4,1.3-0.9,2c-0.6,0.8-1.2,1.4-1.9,1.7c-0.4,0.2-0.9,0.2-1.4,0.2l-1.1,4.7
		c-0.1,0.6-0.2,1-0.2,1.2c0,0.3,0.1,0.4,0.2,0.6L163.6,392.3z M173.6,396.7c-0.2,0.4-0.5,0.7-0.8,0.9c-0.3,0.2-0.6,0.2-0.8,0.1
		c-0.2-0.1-0.3-0.4-0.3-0.7c0-0.4,0.1-0.7,0.3-1.1c0.2-0.4,0.5-0.7,0.8-0.9c0.3-0.2,0.6-0.2,0.8-0.1c0.2,0.1,0.3,0.4,0.3,0.7
		C174,395.9,173.8,396.3,173.6,396.7z M174.3,387.9c0.4-0.9,0.7-1.5,0.7-2c0.1-0.5,0-0.9-0.2-1.2c-0.1-0.2-0.4-0.5-0.9-0.7l-0.6-0.4
		l-2.8,4.6l0.1,0.1c0.4,0.2,0.8,0.2,1.3-0.1c0.5-0.3,1-0.9,1.6-1.8l0.2,0.1l-3.7,5.9l-0.2-0.1c0.4-0.7,0.6-1.2,0.7-1.7
		c0.1-0.5,0.2-0.8,0.1-1.1c-0.1-0.2-0.3-0.4-0.5-0.6l-2,3.2c-0.4,0.6-0.6,1-0.7,1.2c-0.1,0.2-0.1,0.3,0,0.4c0,0.1,0.1,0.3,0.3,0.4
		l0.4,0.2c0.6,0.4,1.2,0.4,1.9,0.1c0.7-0.3,1.4-0.9,2.1-1.8l0.2,0.1l-2.5,3.4l-5.4-3.3l0.2-0.3l0.2,0.1c0.2,0.1,0.4,0.1,0.5,0.1
		c0.1,0,0.3-0.1,0.4-0.3c0.1-0.1,0.3-0.5,0.7-1l4.6-7.5c0.3-0.5,0.5-0.8,0.6-1c0.1-0.2,0.1-0.4,0.1-0.6c0-0.2-0.1-0.4-0.3-0.5
		l-0.2-0.1l0.2-0.3l5.2,3.2l-2.1,3.3L174.3,387.9z M183.3,402.9l-0.2,0.3l-3.2-1.6l0.2-0.3l0.1,0.1c0.3,0.1,0.5,0.2,0.6,0.1
		c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.3,0.2-0.7l0.4-1.7l-2.3-1.2l-0.9,1c-0.3,0.3-0.5,0.6-0.6,0.9
		c-0.2,0.3-0.2,0.6-0.1,0.8c0,0.1,0.2,0.3,0.5,0.5l-0.2,0.3l-2.2-1.1l0.2-0.3c0.3,0.1,0.5,0,0.8-0.2c0.3-0.2,0.8-0.7,1.5-1.5
		l7.1-8.3l0.1,0l-2.5,10.9c-0.2,1-0.3,1.7-0.3,2C183,402.6,183.1,402.8,183.3,402.9z M184.1,403.6l0.1-0.3l0.2,0.1
		c0.2,0.1,0.4,0.1,0.6,0c0.1,0,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.5,0.5-1.1l3.5-8c0.3-0.6,0.4-1,0.5-1.2c0-0.2,0-0.3,0-0.5
		c-0.1-0.2-0.2-0.3-0.4-0.4l-0.2-0.1l0.1-0.3l3.6,1.6l-0.1,0.3l-0.3-0.1c-0.2-0.1-0.4-0.1-0.6,0c-0.1,0-0.3,0.2-0.4,0.3
		c-0.1,0.1-0.3,0.5-0.5,1.1l-3.4,7.8c-0.3,0.6-0.4,1-0.5,1.2c0,0.2,0,0.3,0.1,0.5c0.1,0.1,0.2,0.2,0.6,0.3l0.6,0.2
		c0.4,0.2,0.7,0.2,1,0s0.7-0.4,1.1-0.8c0.4-0.4,0.9-1.1,1.4-2l0.2,0.1l-2.1,4.2L184.1,403.6z M199.7,396.1l-0.3-0.1
		c-0.2-0.1-0.4-0.1-0.6,0c-0.1,0.1-0.2,0.2-0.4,0.4c-0.1,0.1-0.3,0.5-0.5,1.1l-3,7.9c-0.2,0.6-0.4,1.1-0.4,1.2c0,0.2,0,0.4,0.1,0.5
		c0.1,0.1,0.3,0.2,0.6,0.3l0.6,0.2c0.4,0.1,0.7,0.1,1,0c0.3-0.1,0.7-0.4,1-0.9c0.4-0.4,0.8-1.1,1.3-2l0.2,0.1l-1.9,4.3l-6.1-2.3
		l0.1-0.3l0.2,0.1c0.2,0.1,0.4,0.1,0.6,0c0.1-0.1,0.2-0.2,0.4-0.4c0.1-0.1,0.3-0.5,0.5-1.1l3.1-8.2c0.2-0.6,0.4-1,0.4-1.2
		c0-0.2,0-0.3-0.1-0.5c-0.1-0.2-0.2-0.3-0.4-0.4l-0.2-0.1l0.1-0.3l3.7,1.4L199.7,396.1z M203.6,400.2c0,0-0.1,0-0.1,0
		c-0.1,0.1-0.3,0.1-0.4,0c-0.2-0.1-0.3-0.3-0.4-0.6c-0.1-0.3,0-0.7,0.1-1.1c0.1-0.4,0.3-0.7,0.6-1c0.3-0.3,0.5-0.3,0.8-0.3
		c0.3,0.1,0.5,0.4,0.5,0.9s0,1.1-0.3,1.8c-0.3,0.9-0.7,1.6-1.2,2.2c-0.5,0.6-1.1,0.9-1.8,1.1l0.1-0.4c0.5-0.2,0.9-0.5,1.3-0.9
		c0.3-0.4,0.6-0.9,0.8-1.4C203.7,400.5,203.7,400.4,203.6,400.2C203.7,400.3,203.6,400.2,203.6,400.2z M209.6,403.3l-0.2-0.1
		c0.2-1.1,0.2-2,0-2.8c-0.2-0.8-0.5-1.2-1-1.4c-0.4-0.1-0.7,0-1,0.3c-0.3,0.3-0.5,0.6-0.7,1.1c-0.1,0.3-0.1,0.5-0.1,0.8
		c0,0.3,0.1,0.7,0.2,1c0.1,0.3,0.4,0.7,0.8,1.4c0.6,1,0.9,1.8,1,2.6c0.1,0.7,0,1.5-0.2,2.4c-0.3,1.1-0.8,1.9-1.5,2.5
		c-0.7,0.6-1.4,0.8-2.1,0.6c-0.2-0.1-0.4-0.2-0.6-0.3c-0.2-0.1-0.4-0.4-0.6-0.7c-0.1-0.2-0.2-0.3-0.4-0.3c-0.1,0-0.2,0-0.3,0.1
		c-0.1,0.1-0.3,0.3-0.4,0.5l-0.2-0.1l1.4-4.8l0.2,0.1c-0.3,1.4-0.3,2.5-0.1,3.4c0.2,0.8,0.6,1.3,1.1,1.5c0.4,0.1,0.8,0,1.1-0.3
		c0.3-0.3,0.6-0.7,0.7-1.2c0.1-0.3,0.1-0.6,0.1-0.9s-0.1-0.6-0.2-0.9c-0.1-0.3-0.3-0.7-0.7-1.3c-0.5-0.8-0.8-1.4-0.9-1.9
		c-0.2-0.5-0.2-1-0.2-1.5c0-0.5,0.1-1.1,0.3-1.7c0.3-1,0.8-1.8,1.4-2.4c0.6-0.6,1.3-0.8,1.9-0.6c0.2,0.1,0.4,0.2,0.6,0.4
		c0.1,0.1,0.3,0.3,0.5,0.6s0.3,0.4,0.4,0.5c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.4-0.7l0.2,0L209.6,403.3z M219.5,415.2l-2.3-0.5
		l-1-6.4l-0.5-0.1l-0.8,3.6c-0.2,0.7-0.2,1.1-0.2,1.3c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.6,0.3l-0.1,0.4l-3.7-0.8l0.1-0.4
		c0.3,0.1,0.6,0.1,0.7,0c0.1-0.1,0.3-0.2,0.3-0.4c0.1-0.2,0.2-0.6,0.4-1.3l1.9-8.4c0.2-0.7,0.2-1.1,0.2-1.3c0-0.2-0.1-0.4-0.2-0.5
		c-0.1-0.1-0.3-0.2-0.6-0.3l0.1-0.4l3.3,0.7c0.9,0.2,1.5,0.4,1.8,0.8c0.4,0.3,0.6,0.8,0.7,1.4c0.1,0.6,0.1,1.4-0.1,2.1
		c-0.2,1-0.6,1.7-1.1,2.2c-0.3,0.3-0.7,0.6-1.2,0.7l0.7,4.8c0.1,0.6,0.2,1,0.2,1.2c0.1,0.2,0.2,0.4,0.4,0.4L219.5,415.2z
		 M212.6,297.1c0-10.3,3.5-18.8,10.5-25.6c7-6.8,15.6-10.1,25.7-9.6c11-0.4,19.9,2.8,26.8,9.6c6.9,6.8,10.3,15.4,10.3,25.6
		c0,8.8-2.6,16.5-7.7,23.1c-6.8,8.8-16.4,13.2-28.8,13.2c-12.4,0-22-4.2-28.8-12.6C215.3,314.2,212.6,306.3,212.6,297.1z
		 M225.5,403.3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.1-0.2,0.5-0.3,1.2l-1.6,8.6c-0.1,0.7-0.2,1.1-0.2,1.3c0,0.2,0.1,0.3,0.2,0.5
		c0.1,0.1,0.2,0.2,0.4,0.3l0.2,0L224,416l-3.8-0.7l0.1-0.4l0.2,0c0.2,0,0.4,0,0.5-0.1c0.1-0.1,0.2-0.2,0.3-0.4
		c0.1-0.1,0.2-0.6,0.3-1.2l1.6-8.6c0.1-0.7,0.2-1.1,0.2-1.3s-0.1-0.3-0.2-0.5c-0.1-0.1-0.2-0.2-0.4-0.3l-0.2,0l0.1-0.4l3.8,0.7
		l-0.1,0.4l-0.2,0C225.8,403.1,225.7,403.2,225.5,403.3z M228.4,415.5c0.3,0.5,0.7,0.8,1.2,0.8c0.2,0,0.4,0,0.6,0
		c0.2,0,0.4-0.1,0.6-0.2l0.4-2.7c0.1-0.5,0.1-0.9,0.1-1c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.2l-0.2,0l0-0.4l3.5,0.5l0,0.4
		c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.2,0.2-0.3,0.5c0,0.1-0.1,0.4-0.2,0.9l-0.4,2.7c-0.5,0.3-1,0.5-1.6,0.7c-0.5,0.1-1.1,0.2-1.6,0.1
		c-0.7-0.1-1.2-0.3-1.6-0.7c-0.4-0.4-0.8-0.9-1-1.5c-0.3-0.6-0.5-1.3-0.6-2c-0.1-0.9-0.1-1.9,0-3.1c0.3-2,0.9-3.6,1.8-4.9
		c1-1.3,2-1.8,3.2-1.7c0.4,0,0.7,0.1,1,0.3c0.2,0.1,0.4,0.3,0.7,0.5c0.3,0.3,0.5,0.4,0.6,0.4c0.1,0,0.2,0,0.3-0.2
		c0.1-0.1,0.2-0.4,0.3-0.7l0.2,0l-0.6,4.7l-0.2,0c-0.1-1.3-0.3-2.3-0.7-3c-0.4-0.7-0.9-1.1-1.4-1.2c-0.5-0.1-1,0.1-1.5,0.7
		c-0.4,0.5-0.8,1.2-1.1,2.2c-0.3,1-0.5,2-0.6,3c-0.2,1.3-0.2,2.4-0.2,3.4C227.9,414.3,228.1,415,228.4,415.5z M243.5,405.1l-0.2,0
		c-0.2,0-0.4,0-0.5,0.2c-0.1,0.1-0.2,0.2-0.3,0.5c-0.1,0.2-0.1,0.6-0.1,1.2l-0.6,8.7c0,0.7-0.1,1.1,0,1.3c0,0.2,0.1,0.3,0.2,0.5
		c0.1,0.1,0.3,0.2,0.5,0.2l0.2,0l0,0.4l-3.8-0.3l0-0.4l0.2,0c0.2,0,0.4,0,0.5-0.2c0.1-0.1,0.2-0.2,0.3-0.5c0.1-0.2,0.1-0.6,0.1-1.2
		l0.3-4.1l-2.6-0.2l-0.3,4.1c0,0.7-0.1,1.1,0,1.3c0,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2l0.2,0l0,0.4l-3.8-0.3l0-0.4l0.2,0
		c0.2,0,0.4,0,0.5-0.2c0.1-0.1,0.2-0.2,0.2-0.5c0.1-0.2,0.1-0.6,0.1-1.2l0.6-8.7c0-0.7,0.1-1.1,0-1.3c0-0.2-0.1-0.3-0.2-0.5
		s-0.3-0.2-0.5-0.2l-0.2,0l0-0.4l3.8,0.3l0,0.4l-0.2,0c-0.2,0-0.4,0-0.5,0.2c-0.1,0.1-0.2,0.2-0.3,0.5c-0.1,0.2-0.1,0.6-0.1,1.2
		l-0.3,3.8l2.6,0.2l0.3-3.8c0-0.7,0.1-1.1,0-1.3c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2l-0.2,0l0-0.4l3.8,0.3L243.5,405.1z
		 M250.6,408.4l-0.2,0c-0.1-0.8-0.2-1.4-0.4-1.8c-0.1-0.4-0.3-0.7-0.6-0.9c-0.1-0.1-0.4-0.2-0.7-0.2l-0.5,0l-0.2,10.3
		c0,0.7,0,1.1,0,1.3c0,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2l0.2,0l0,0.4l-3.8-0.1l0-0.4l0.2,0c0.2,0,0.4-0.1,0.5-0.2
		c0.1-0.1,0.2-0.2,0.2-0.5c0-0.2,0.1-0.6,0.1-1.2l0.2-10.3l-0.5,0c-0.5,0-0.9,0.2-1.1,0.5c-0.3,0.5-0.5,1.3-0.6,2.3l-0.2,0l0.1-3.6
		l6.6,0.1L250.6,408.4z M264.3,404.8c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.1-0.1,0.6-0.2,1.5l-1.6,11.1l-0.2,0l-2.4-8.5l-1.5,8.7l-0.2,0
		l-3.1-10.7c-0.3-1.1-0.5-1.7-0.6-1.9c-0.1-0.2-0.3-0.3-0.5-0.4l0-0.4l3.2-0.2l0,0.4c-0.3,0-0.4,0.1-0.5,0.2
		c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.2,0.1,0.8,0.4,1.6l1.8,6.4l0.8-5.1l-0.4-1.4c-0.2-0.8-0.4-1.3-0.5-1.5c-0.1-0.3-0.2-0.4-0.3-0.5
		c-0.1-0.1-0.3-0.1-0.5-0.1l0-0.4l3.5-0.2l0,0.4c-0.2,0-0.4,0.1-0.5,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0.1,0,0.2,0,0.4
		c0,0.2,0.1,0.6,0.3,1.4l1.7,6.2l0.8-5.8c0.1-0.6,0.1-1,0.2-1.2c0-0.2,0-0.4,0-0.6c0-0.3-0.1-0.5-0.2-0.6c-0.1-0.1-0.3-0.2-0.6-0.2
		l0-0.4l1.9-0.1l0,0.4C264.5,404.6,264.3,404.6,264.3,404.8z M266.4,417.3l0-0.4l0.2,0c0.2,0,0.4-0.1,0.5-0.3
		c0.1-0.1,0.1-0.3,0.2-0.5c0-0.2,0-0.6-0.1-1.2l-1-8.7c-0.1-0.7-0.1-1.1-0.2-1.3c-0.1-0.2-0.2-0.3-0.3-0.4c-0.1-0.1-0.3-0.2-0.5-0.1
		l-0.2,0l0-0.4l3.8-0.4l0,0.4l-0.2,0c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.1-0.1,0.3-0.2,0.5c0,0.2,0,0.6,0.1,1.2l1,8.7
		c0.1,0.7,0.1,1.1,0.2,1.3c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.5,0.1l0.2,0l0,0.4L266.4,417.3z M272.9,416.5l-0.1-0.4l0.2,0
		c0.2,0,0.4-0.1,0.5-0.3c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2,0-0.6-0.1-1.2l-1.6-10.1l-0.5,0.1c-0.5,0.1-0.8,0.3-1,0.7
		c-0.2,0.6-0.3,1.4-0.2,2.3l-0.2,0l-0.6-3.6l6.5-1l0.6,3.6l-0.2,0c-0.2-0.8-0.5-1.4-0.7-1.7c-0.2-0.3-0.4-0.6-0.7-0.8
		c-0.2-0.1-0.4-0.1-0.7-0.1l-0.5,0.1l1.6,10.1c0.1,0.7,0.2,1.1,0.3,1.3c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.1,0.5,0.1l0.2,0
		l0.1,0.4L272.9,416.5z M283.6,414.5l-0.1-0.4l0.2-0.1c0.2,0,0.4-0.1,0.5-0.3c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2-0.1-0.6-0.2-1.2l-0.9-4
		l-2.5,0.5l0.9,4c0.1,0.7,0.3,1.1,0.3,1.2c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.1,0.5,0.1l0.2-0.1l0.1,0.4l-3.7,0.8l-0.1-0.4
		l0.2-0.1c0.2,0,0.4-0.1,0.5-0.3c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2-0.1-0.6-0.2-1.2l-1.9-8.6c-0.1-0.7-0.3-1.1-0.3-1.2
		c-0.1-0.2-0.2-0.3-0.3-0.4c-0.1-0.1-0.3-0.1-0.5-0.1l-0.2,0.1l-0.1-0.4l3.7-0.8l0.1,0.4l-0.2,0.1c-0.2,0-0.4,0.1-0.5,0.3
		c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.2,0.1,0.6,0.2,1.2l0.8,3.7l2.5-0.5l-0.8-3.7c-0.1-0.7-0.3-1.1-0.3-1.2c-0.1-0.2-0.2-0.3-0.3-0.4
		c-0.1-0.1-0.3-0.1-0.5-0.1l-0.2,0.1l-0.1-0.4l3.7-0.8l0.1,0.4l-0.2,0.1c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.1-0.1,0.3-0.1,0.5
		c0,0.2,0.1,0.6,0.2,1.2l1.9,8.6c0.1,0.7,0.3,1.1,0.3,1.2c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.1,0.5,0.1l0.2-0.1l0.1,0.4
		L283.6,414.5z M292.8,412.2l-0.1-0.3l0.2-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2-0.1-0.6-0.3-1.2l-2.9-9.8
		l-0.5,0.2c-0.5,0.1-0.8,0.4-0.9,0.9c-0.1,0.6-0.1,1.4,0.1,2.3l-0.2,0.1l-1-3.5l6.3-1.9l1,3.5l-0.2,0.1c-0.3-0.8-0.6-1.3-0.9-1.6
		c-0.2-0.3-0.5-0.5-0.8-0.7c-0.2-0.1-0.4-0.1-0.7,0l-0.5,0.2l2.9,9.8c0.2,0.7,0.3,1.1,0.4,1.2c0.1,0.2,0.2,0.3,0.4,0.4
		c0.2,0.1,0.3,0.1,0.5,0l0.2-0.1l0.1,0.3L292.8,412.2z M303.2,408.8l-0.1-0.3l0.2-0.1c0.2-0.1,0.3-0.2,0.4-0.4
		c0.1-0.1,0.1-0.3,0-0.5c0-0.2-0.1-0.6-0.4-1.2l-1.4-3.9l-2.4,0.9l1.4,3.9c0.2,0.6,0.4,1,0.5,1.2c0.1,0.1,0.2,0.3,0.4,0.3
		c0.2,0.1,0.3,0.1,0.5,0l0.2-0.1l0.1,0.3l-3.6,1.3l-0.1-0.3l0.2-0.1c0.2-0.1,0.3-0.2,0.4-0.4c0.1-0.1,0.1-0.3,0-0.5
		c0-0.2-0.1-0.6-0.4-1.2l-3-8.2c-0.2-0.6-0.4-1-0.5-1.2c-0.1-0.1-0.2-0.3-0.4-0.3c-0.2-0.1-0.3-0.1-0.5,0l-0.2,0.1l-0.1-0.3l3.6-1.3
		l0.1,0.3l-0.2,0.1c-0.2,0.1-0.3,0.2-0.4,0.4c-0.1,0.1-0.1,0.3,0,0.5c0,0.2,0.1,0.6,0.4,1.2l1.3,3.5l2.4-0.9l-1.3-3.5
		c-0.2-0.6-0.4-1-0.5-1.2c-0.1-0.1-0.2-0.3-0.4-0.3c-0.2-0.1-0.3-0.1-0.5,0l-0.2,0.1l-0.1-0.3l3.6-1.3l0.1,0.3l-0.2,0.1
		c-0.2,0.1-0.3,0.2-0.4,0.4c-0.1,0.1-0.1,0.3,0,0.5c0,0.2,0.1,0.6,0.4,1.2l3,8.2c0.2,0.6,0.4,1,0.5,1.2c0.1,0.1,0.2,0.3,0.4,0.3
		s0.3,0.1,0.5,0l0.2-0.1l0.1,0.3L303.2,408.8z M307.9,407.1l-0.1-0.3l0.2-0.1c0.2-0.1,0.3-0.2,0.4-0.4c0.1-0.1,0.1-0.3,0-0.5
		c0-0.2-0.2-0.5-0.4-1.2l-3.4-8.1c-0.2-0.6-0.4-0.9-0.5-1c-0.1-0.2-0.3-0.3-0.4-0.4c-0.2-0.1-0.4-0.1-0.6,0l-0.2,0.1l-0.1-0.3
		l5.6-2.4l1.5,3.6l-0.2,0.1c-0.5-0.8-0.9-1.4-1.2-1.7c-0.3-0.3-0.7-0.5-1.1-0.5c-0.2,0-0.6,0.1-1.1,0.3l-0.7,0.3l2.1,5l0.1-0.1
		c0.4-0.2,0.6-0.6,0.6-1.1c0-0.6-0.2-1.3-0.5-2.3l0.2-0.1l2.7,6.4l-0.2,0.1c-0.3-0.7-0.7-1.2-1-1.6c-0.3-0.4-0.6-0.6-0.8-0.7
		c-0.2-0.1-0.5-0.1-0.8,0.1l1.5,3.5c0.3,0.7,0.5,1.1,0.6,1.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.3,0,0.5,0l0.4-0.2
		c0.6-0.3,1-0.7,1.2-1.4c0.2-0.7,0.1-1.6-0.2-2.8l0.2-0.1l1.3,4L307.9,407.1z M324.8,399.5l-5.6-6.8l2.2,8.5l-0.2,0.1l-7.2-8.5
		c-0.7-0.9-1.2-1.4-1.4-1.5c-0.2-0.2-0.4-0.2-0.6-0.1l-0.2-0.3l2.8-1.5l0.2,0.3c-0.2,0.1-0.3,0.3-0.4,0.4c0,0.2,0,0.3,0.1,0.5
		c0.1,0.2,0.4,0.6,1,1.3l4.3,5.1l-1.3-5l-0.9-1.1c-0.5-0.6-0.9-1-1.1-1.2c-0.2-0.2-0.4-0.3-0.5-0.3c-0.2,0-0.3,0-0.5,0.1l-0.2-0.3
		l3.1-1.6l0.2,0.3c-0.2,0.1-0.4,0.2-0.4,0.3c0,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.4c0.1,0.1,0.4,0.5,0.9,1.1l4.1,5l-1.6-5.6
		c-0.2-0.6-0.3-1-0.4-1.2c-0.1-0.2-0.2-0.4-0.2-0.6c-0.1-0.2-0.3-0.4-0.4-0.5c-0.2-0.1-0.4-0.1-0.6,0l-0.2-0.3l1.7-0.9l0.2,0.3
		c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1,0,0.3,0,0.6c0,0.1,0.2,0.6,0.4,1.5l3.1,10.8L324.8,399.5z M332.3,395.1c-1.1,0.7-2.4,0.5-3.9-0.5
		c-1.2-0.8-2.2-1.9-3.1-3.4c-1-1.7-1.6-3.3-1.6-4.8c-0.1-1.5,0.4-2.5,1.4-3c1-0.7,2.1-0.6,3.4,0.1c1.3,0.7,2.5,2,3.5,3.6
		c0.9,1.4,1.4,2.8,1.6,4.2C333.9,393.2,333.5,394.5,332.3,395.1z M341.2,389l-5.4-3.6l-0.4,0.3l2.1,3.1c0.4,0.6,0.7,1,0.8,1.1
		c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.7-0.3l0.2,0.3l-3.1,2.1l-0.2-0.3c0.3-0.2,0.4-0.4,0.5-0.5c0-0.2,0-0.3,0-0.5
		c-0.1-0.2-0.3-0.6-0.7-1.2l-4.9-7.1c-0.4-0.6-0.7-1-0.8-1.1c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.7,0.3l-0.2-0.3l2.8-1.9
		c0.7-0.5,1.3-0.8,1.8-0.8c0.5-0.1,1,0.1,1.5,0.4c0.6,0.3,1.1,0.8,1.5,1.5c0.6,0.8,0.9,1.6,0.9,2.3c0,0.5-0.1,0.9-0.3,1.3l4,2.7
		c0.5,0.3,0.9,0.6,1,0.6c0.2,0.1,0.4,0.1,0.6,0l0.2,0.3L341.2,389z M343.7,387.2l-0.2-0.3l0.2-0.1c0.2-0.1,0.3-0.3,0.3-0.5
		c0-0.1,0-0.3-0.1-0.5c-0.1-0.1-0.3-0.5-0.7-1l-5.4-6.9c-0.4-0.5-0.7-0.9-0.8-1c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0-0.5,0.1
		l-0.2,0.1l-0.2-0.3l3.1-2.4l0.2,0.3l-0.3,0.2c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.1,0,0.3,0.1,0.5c0.1,0.1,0.3,0.5,0.7,1l5.2,6.7
		c0.4,0.5,0.7,0.9,0.8,1c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.6-0.3l0.5-0.4c0.3-0.2,0.5-0.5,0.5-0.9c0.1-0.4,0-0.8-0.2-1.3
		c-0.2-0.5-0.5-1.3-1-2.2l0.2-0.1l2.6,3.9L343.7,387.2z M353.8,378c-0.1,0.5-0.2,0.9-0.5,1.4c-0.1,0.2-0.4,0.5-0.7,0.8l-2.5,2.1
		l-0.2-0.3l0.2-0.2c0.2-0.1,0.2-0.3,0.3-0.5c0-0.2,0-0.3-0.1-0.5c-0.1-0.1-0.3-0.4-0.8-1l-5.7-6.7c-0.4-0.5-0.7-0.8-0.9-0.9
		s-0.3-0.2-0.5-0.2c-0.2,0-0.3,0-0.5,0.2l-0.2,0.2l-0.2-0.3l2.5-2.1c0.7-0.6,1.3-0.9,2-0.9c0.8,0,1.7,0.3,2.7,0.9
		c1,0.6,1.9,1.4,2.8,2.4c0.6,0.7,1.1,1.4,1.5,2.1c0.4,0.7,0.6,1.3,0.8,1.9S353.8,377.5,353.8,378z M357.6,376
		c-0.2,0.2-0.4,0.2-0.8,0.1c-0.3-0.1-0.7-0.3-1-0.7c-0.3-0.3-0.5-0.7-0.6-1c-0.1-0.4,0-0.6,0.1-0.8c0.2-0.2,0.5-0.2,0.8-0.1
		c0.3,0.1,0.7,0.3,1,0.7c0.3,0.3,0.5,0.7,0.6,1S357.8,375.8,357.6,376z M388.7,170.6c-2.3,0.5-4.4-0.3-6.4,0.5c-3.4,1.4-2,5.5-5,7.4
		c-3.1,1.8-3.4-0.5-5.8-0.5c-2.4,0-4,5.9-6.7,6.8c-2.7,0.9-4.3-1.3-6-1.3c-2.3,0-2.2,2.8-7,2.8c-4.7-0.7-8,0-11.1,0.4
		c-6.8,0-3.8-3.6-10.1-1.8c-1.6,0-3-3.3-4.7-3.3c-1.8,0-3.5,2.1-3.5,4.4c5.6,0,5.3,3,7.5,6.7c11,0,9.7,2.3,13.5,6.1
		c14.9,0.7,9.9,4.5,11.7,8.2c1.8,3.7,5.9,2.3,5.9,4.9c0,1.6-2.6,5-1,8c1.6,3,4.3,0.4,3.4,7.3c5.9,5.9,2.7,11.7,3.8,14.8
		c3.2,3.2,6.5,5.7,4.5,15.4c11.2,8.2,3.7,14.7,3.7,15.8c0,1.2,2.2,5,2.2,6.8c0,1.8-0.1,6.3,0.3,7.7c0.4,1.4,1.3,2.9,1.3,4
		c0,1.8-0.9,2.5-0.9,4.6c0,2.1,2.1,2.1,2.1,4.6s-3.6,6.1-3.6,8c0,3,2.1,2.3,2.1,6.5c0,4.7-5,7.4,0,16c0.5,0.9-0.2,2.6,0,4.1
		c0.2,1.6,1.2,3.3,1.2,4.3c0,2-1.5,3.7-1.4,7.3c0.1,3.4,1.3,8,1,8.5l-25.4-26.7c-3.4,1.3-7,2.4-10.7,3.2c-4.8,1-9.7,1.5-14.8,1.5
		c-6.5,0-12-0.9-16.3-2.7c-4.3-1.8-8.1-4.1-11.4-7c-3.3-2.9-5.9-6.2-7.8-9.8c-2.4-4.7-3.6-9.9-3.6-15.7c0-10.3,3.6-18.9,10.7-26.1
		l-81.9-86c-0.2,0.1-0.5,0.2-0.7,0.3c-0.9,0.5-1.6,1.3-2.1,2.4c-0.4,0.8-0.6,3-0.6,6.4v44c0,3.5,0.2,5.8,0.6,6.7
		c0.4,1,1.2,1.7,2.4,2.2c0.8,0.3,2.9,0.5,6.2,0.5h5.8c3.7,0,6.7-0.6,9.2-1.9c2.4-1.3,4.6-3.3,6.3-6.1c1.8-2.8,3.5-6.9,5.1-12.3h2.1
		l-2.6,24.2h-61.3v-1.9h2.3c2,0,3.6-0.4,4.8-1.1c0.9-0.5,1.6-1.3,2-2.4c0.4-0.8,0.6-3,0.6-6.4v-45.4c0-3.5-0.2-5.7-0.6-6.6
		c-0.4-0.9-1.1-1.7-2.3-2.3c-1.1-0.7-2.7-1-4.6-1h-2.3v-1.9H216L161.1,126c0,0,12.1-11,12.1-11.1c-0.6,13.9,16.9,31.6,20.1,35.2
		c3.3,3.7,7.3,11.7,18.5,11.7c14.5,0,22.1-24.6,22.1-30.4c0-3.6-1.7-7.7-1.2-10.5c0.5-2.8,0.7-15.5,10.5-23c9.2-7,22.7-7.8,24.7-6
		c1.3,0,3.6-4,6.1-4c2.5,0,4.4,1.8,8.4,1.8c4,0,2.8-3.5,8-3.5c5.2,0,4.7,3.2,8.7,3.2c4,0,3.8-3.1,7.9-3.1c4.1,0,2.7,2.3,6.2,2.3
		c4.7,0,2.4-1.3,7.1-1.3c4.6,0,5.1,4,6.8,4c1.1,0,1.8-0.8,3.2-0.9c1-0.1,5.4,1.3,5.3,2.2c0,1.6-2.9,1.9-3.8,4
		c-1.1,2-0.2,3.1-1.2,5.7c-1,2-4.8,4.7-4.8,7.4c0,3.3,6.3,5.8,9.5,5.8c2.4,0,7.6-0.5,9.1,0.2c1.8,0.9,1.5,2.8,3.8,4
		c2.4,1.2,4.2,0.4,5.8,1.4c1.6,1,0.6,2,2.6,3.2c2,1.2,4.3-2,7.7,0.8c3.4,2.8,3,4.6,5.3,6.8c2.4,2.2,3.4,0.3,5.1,3.1
		c1.8,2.8,0.3,2.7,2.3,5.4c2,2.8,3.8,0.7,5.2,3.6c1.4,3,0.2,3.9,2.4,5.8c3.1,2.6,3.6,2.2,5.4,4.5c0.9,1.1,1.6,3.3,2.5,5
		c1,1.9,2.3,2.7,2.3,4C394.2,164.6,391,170,388.7,170.6z"/>
        <polygon fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" points="126.6,343.8 122.2,345.5
		123.5,347.3 	"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M335.2,381.4c-0.6-0.8-1.1-1.4-1.6-1.6
		c-0.5-0.2-1-0.2-1.5,0.1l-0.5,0.3l3.3,4.8l0.3-0.2c0.4-0.3,0.7-0.6,0.8-0.8c0.1-0.3,0.1-0.6,0-1.1
		C335.9,382.5,335.6,382,335.2,381.4z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M349.9,373.7c-1.1-1.3-2.1-2.2-3-2.8
		c-0.7-0.5-1.3-0.7-1.7-0.6c-0.3,0-0.7,0.2-1.2,0.6l6.8,7.9c0.4,0.4,0.6,0.7,0.7,0.7c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.3,0,0.4-0.2
		c0.5-0.4,0.6-1,0.3-1.7C352.2,376.7,351.3,375.3,349.9,373.7z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M249.3,329.6c3.5,0,6.4-0.8,8.8-2.5
		c3-2.2,5.3-5.6,7-10.4c1.7-4.8,2.5-11,2.5-18.7c0-9.1-0.8-16-2.5-20.5c-1.7-4.5-3.9-7.7-6.5-9.6c-2.6-1.9-5.7-2.8-9.1-2.8
		c-6.3,0-11.1,3.2-14.4,9.7c-2.7,5.3-4,12.9-4,22.8c0,11.8,2.1,20.5,6.2,26.1C240.1,327.6,244.1,329.6,249.3,329.6z"/>
        <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.0158" stroke-miterlimit="10" d="M164.1,241.8c1.2-2.3,1.8-4.8,1.8-7.7
		c0-3.2-0.7-6.1-2.2-8.7c-1.5-2.6-3.5-4.4-6.2-5.4c-2.6-1-6.5-1.5-11.7-1.5v22.1l-0.1,2.5c0,1.8,0.5,3.2,1.4,4.1
		c0.9,0.9,2.3,1.4,4.1,1.4c2.7,0,5.2-0.6,7.5-1.8C161.1,245.8,162.8,244.1,164.1,241.8z"/>
      </g>
      </svg>
    );
  }

}

class BioLogo extends Component {
  render() {
    return(
    <svg viewBox="0 0 500 500">
      <path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M362.6,55.5h-225L25,250l112.6,194.5h225L475,250L362.6,55.5z
	 M252.3,392.8c-2.5-5.2-3.1-11-4.3-16.5c-3.4-14.9-6.2-29.9-9.2-44.9c-3.2-16.3-6.1-32.6-9.7-48.8c-1.2-5.4-1.2-11.6-6.2-15.7
	c-1.2-1-2.3-1.8-3.7-2.3c-13.7-4.9-25.6-12.8-34.5-24.4c-9.8-12.9-15.6-27.8-16.9-44c-3.1-37.5,19.1-70.1,51.7-83
	c18.1-7.1,36.9-8.3,56.1-1.8c22.3,7.6,38.4,22,48.9,42.4c8.4,16.4,10,34.3,5.9,52.4c-5.8,25.8-20.2,45.1-44.5,56.2
	c-8,3.7-11.5,9.4-12.9,17.8c-3.8,22.6-8.1,45.1-12.3,67.7c-2.3,12.4-4.8,24.7-7.2,37.1C253,387.6,252.7,390.2,252.3,392.8z
	 M207,194.1c12.5,0,16.2,7,16.4,13.5c0.3,10.1-6.9,17.3-15.9,17c-10.1-0.4-16-6.7-15.6-16.7C192.2,199.1,198,193.8,207,194.1z
	 M309.8,208.4c-0.2,9-7,16.1-15.5,16.1c-9.1,0-15.3-6.5-15.2-16c0-8.1,7.8-15,16.8-14.9C303.2,193.7,309.9,200.9,309.8,208.4z"/>
    </svg>
    );
  }
}

class GithubLogo extends Component {
  render() {
    return(
      <svg viewBox="0 0 500 500">
        <path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M362.5,55.5h-225L25,250l112.5,194.5h225L475,250L362.5,55.5z
	 M432.3,252.6l-0.8,3.4c-18.7-4.6-38.7-6.4-61-5.7c-13.6,27-41.6,42.1-79.4,47.9c7.8,8.6,10.5,17.8,11.5,27.5v66.4
	c0,6.6,3.4,11.5,8.9,15.7c-16.8,0.5-31.9-4.6-31.9-16.9v-55.2c0-5.7-6-5.4-6-5.4v65.5c0,6.2,2.2,10.4,7.4,14.6
	c-19.6,1.3-28.4-7.3-28.4-18v-58.8c0-3-6-3-6,0v61.8c0,12.7-14.1,15.7-29,15.1c3.4-3.6,7-7.3,7-13.9v-66.2c0,0-6,0.4-6,5.4v56.7
	c0,10.4-12.7,18.8-29.7,17.1c4.9-3.2,7.7-7.8,7.7-14.8v-41.2h-17.6c-47.2,0-41.3-47-70.9-61.6c30.4-3.7,38.4,33.6,67.8,33.6h21.9
	c1.3-10,6.5-20.3,16.1-28.1c-41.3-4.9-69.7-20.6-84.4-46.8c-22.3-0.8-42.2,0.9-60.9,5.5l-0.8-3.5c18.4-4.5,37.9-6.4,59.7-5.9
	c-0.9-1.7-1.6-3.5-2.3-5.3c-20.1-1.6-40.8-1.4-61.6,0.6l-0.3-3.5c20.4-2,40.8-2.2,60.5-0.7c-3.9-10.7-5.9-22.7-6.1-36.2
	c-0.3-23.6,6-45,22.6-62.6c-4.8-18.2-3.9-36.8,1.7-55.6c19,0.8,38.3,7.3,58,20.6c31.5-6.8,63-6.4,94.5,0
	c16.8-12,35.8-18.9,56.8-20.6c5.3,17.1,7.5,34.2,4.6,51.3c14.7,18.2,24.1,40,24.3,68.1c0.1,13.2-1.6,24.9-4.8,35.1
	c20.1-1.5,40.7-1.4,61.5,0.7l-0.3,3.5c-21-2-42-2.2-62.3-0.6c-0.7,1.8-1.4,3.5-2.2,5.3C394,246.2,413.8,248,432.3,252.6z"/>
      </svg>
    );
  }

}

class NothingLogo extends Component {
  render() {
    return(
      <svg viewBox="0 0 500 500">
        <polygon fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" points="360.3,58.5 138.8,58.5 28,250 138.8,441.5 360.3,441.5
		471,250"/>
      </svg>
    );
  }
}

const drawPillar = (canvas,width,height) => {
  let ctx = canvas.getContext('2d');
  let grd = ctx.createLinearGradient(0,0,0,height);

  ctx.beginPath();
  ctx.arc(50,50,10,0,2*Math.PI);
  ctx.fill();

  grd.addColorStop(0,'#3498db');
  grd.addColorStop(1,'#2c3e50');
  ctx.fillStyle = grd;
  ctx.fillRect(0,0,width,height);

};

const drawPillar2 = (canvas,width,height) => {
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(300,150);
  ctx.stroke();

};


@withStyles('HomePage', {HomePageStyle})
class HomePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static propTypes = {
      uiInitialStates: PropTypes.object.isRequired,
      getUiClassName: PropTypes.func.isRequired
  };

  state = {
      uiStates: Map(this.props.uiInitialStates)
  };

  render() {
    this.context.onSetTitle('AXU.IO > Home');
    let uiClassName=this.props.getUiClassName(this.state.uiStates);
    return (
      <div data-layout='row' data-justify='center' ref={(ref)=>this.homepage=ref}>
        <div className={uiClassName} data-uipart='content' data-layout='row'>
            <Section uiType={'pillar'} uiInitialStates={{theme:'blue'}} header={'01'}>
                <Canvas layers={[{index:1,toDraw:drawPillar},{index:2,toDraw:drawPillar2}]}/>
            </Section>
            <div className={uiClassName} data-uipart='divider'/>
            <Section uiType={'pillar'} uiInitialStates={{theme:'orange'}} header={'02'}>
              <Canvas layers={[{index:1,toDraw:drawPillar}]}/>
            </Section>
            <div className={uiClassName} data-uipart='divider'/>
            <Section uiType={'pillar'} uiInitialStates={{theme:'red'}} header={'03'}>
              <Canvas layers={[{index:1,toDraw:drawPillar}]}/>
            </Section>
            <div className={uiClassName} data-uipart='divider'/>
            <Section uiType={'pillar'} uiInitialStates={{theme:'purple'}} header={'04'}>
              <Canvas layers={[{index:1,toDraw:drawPillar}]}/>
            </Section>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.homepage.offsetWidth);
    console.log(this.homepage.offsetHeight);
  }

}

export default HomePage;
