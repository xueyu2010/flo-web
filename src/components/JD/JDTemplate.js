import React, { Component } from 'react';

export default class JDTemplate extends Component {


  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.title}> {this.props.jobTitle} </div>
        <div style={styles.tagline}> {this.props.tagline} </div>
        <div style={styles.content}>
          {this.props.content.map( (c, index) =>
          <div key={index} style={styles.line}> {c} </div>
        )}
        </div>
        <div style={styles.contact}>
          如有意向，请火速邮件您的简历至:
          <a href={ "mailto:" + this.props.contact}>
            <span>{this.props.contact} </span>
          </a>
        </div>

      </div>
    );
  }
}

const styles = {
  wrapper: {
    margin: 10,
    width: 450,
    height: 'auto',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: '16px',
    color: '#888',
    backgroundColor: 'inherit'
  },

  tagline: {
    marginTop: 10,
    lineHeight: '17px',
    fontSize: 12,
    color: '#979797',
    backgroundColor: 'inherit'
  },

  content: {
    marginTop: 30,
    height: 'auto',
    padding: '20px 5px',
    borderTop: '1px solid #F9D4FD',
    borderBottom: '1px solid #F9D4FD',
    backgroundColor: 'inherit',
    textAlign: 'left',
    color: '#707473',
  },

  line: {
    fontSize: '14px',
    backgroundColor: '#ffffff',
    lineHeight: 2
  },

  contact: {
    margin: 10,
    fontSize: 12,
    color: '#979797',
    backgroundColor: 'inherit',

  }

}
