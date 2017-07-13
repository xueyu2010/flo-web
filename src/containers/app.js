require('styles/style.css');
require('normalize.css/normalize.css');

import React, { Component } from 'react';
import JDTemplate from '../components/JD/JDTemplate'
import About from '../components/About';
import { vioAlgoDev, embedSysEng } from './constants'

let logo = require('../images/flo_logo.png');

export default class App extends Component {

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <img src={logo} alt="福萝" style={{width: 200}} />
          <h1 style={styles.floname}>flography</h1>
          <p style={styles.floname.floTagline}>TAKE BETTER PHOTOS</p>
          <h2 syyle={styles.sectionName}> 关于我们 </h2>

          <About style={styles.JDContainer}/>
          <h2 syyle={styles.sectionName}>加入我们 </h2>
          <div style={styles.JDContainer}>
            <JDTemplate {...vioAlgoDev} />
            <JDTemplate {...embedSysEng} />
          </div>

          <div style={styles.footer}>
            Thrive to putting artificial intelligence into cameras 2017 &copy; FLOGRAPHY 福萝
          </div>

        </div>

      </div>
    );
  }
}


const styles = {

  content: {
    margin: '100px auto',
    maxWidth: 1200,
    width: 'auto',
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    textAlign: 'center'
  },
  floname: {
    fontFamily: 'Zilla Slab',
    color: '#212121',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: '64px',
    marginTop: '30px',
    marginBottom: '40px',
    floTagline: {
            fontSize: '12px',
            color: '#888',
            marginBottom: '100px'
    }
  },
  footer: {
    borderTop: '1px solid #E0E0E0',
    padding: 20,
    fontSize: '12px',
    color: '#888',
    margin: '100px'
  },

  sectionName: {
    fontSize: 20,
    color: '#616161',
    margin: '50px auto',

  },

  JDContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: '50px auto',
    width: 'auto',
  }

}
