// let config = require('./config.json');

// module.exports = function () {
//   let greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// }

import React from 'react';
import config from './config.json';

import styles from  './Greeter.css'
const Greeter = () => (
  <div className={styles.root}>
    func: {config.greetText}
  </div>
)

export default Greeter;