import React, { Component } from 'react';
import config from './config.json';
import styles from './app_style.css';


class Hello extends Component {
  render(){
  	var textColor = "background-color:#000;"
    return (
      <div className={styles.rootcss}>
      	{config.helloText}{textColor}
      </div>
    );
  }
}
export default Hello
