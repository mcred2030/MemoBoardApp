import React, { Component } from 'react';
import config from './config.json';
import styles from './app_style.css';


class Hello extends Component {
  render(){
  	var textColor2 = "background-color:#000;"
    return (
      <div className={styles.rootcss}>
      	{config.helloText}{textColor2}
      </div>
    );
  }
}
export default Hello
