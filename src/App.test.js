jest.unmock(./App.js)

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from './App';

describe('Tab', () => {
  it('render the tab content', () => {
  // 根据 data 渲染出 Tab 内容
    const tab = TestUtils.renderIntoDocument(
      <Tabs classPrefix={'tabs'} defaultActiveIndex={0} className="ui-tabs">
        <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
        <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
        <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
      </Tabs>
    );
    const tabNode = ReactDOM.findDOMNode(tab);
    // 验证渲染出 3 个 Tab
    expect(tab.querySelectorAll('.tabs-tab').length).toEqual(3);
    // 验证默认选中第一个 Tab，即索引为 0 的子元素含有 active 的 class
    expect(tab.querySelectorAll('.tabs-tab')[0].classList.contains('tabs-active')).toBe(true);
  });
});

