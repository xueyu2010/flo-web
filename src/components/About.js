import React, { Component } from 'react';

export default class About extends Component {


  render() {
    return (
      <div style={styles.wrapper}>
        <p>我们是2017年中成立的一家做时尚消费级智能设备的初创公司。</p>
        <p>创始团队来自硅谷，现创立的福萝科技公司致力于将人工智能放入低能耗的电子设备。</p>
        <p>团队核心成员曾经在微软，Twitter,  LinkedIn, 小红书等知名公司任职，毕业于国内，加拿大，美国常青藤名校 </p>
        <p>我们擅长产品设计，计算机视觉，人工智能，嵌入式系统，搜索推荐，Growth Hacking和团队管理。 </p>
        <p>现已有天使轮投资意向，寻找同样想和我们一起改变世界的你~ 等你哦~ </p>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    fontSize: 14,
    maxWidth: 1000,
    margin: '50px auto',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',

  },
}
