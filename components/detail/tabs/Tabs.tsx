import React, { useRef, useState } from 'react';
import { TabsHeader, Tab, TabIndicator, TabsWrapper } from './Tabs.style';

function Tabs() {
  const indicatorRef = useRef<any>(null);
  const tabsHeaderRef = useRef<any>(null);
  const dayArr = ['1일', '1주', '1달', '3달'];
  const [currentTab, setCurrentTab] = useState(dayArr[0]);

  const onClickHandler = (e: any) => {
    setCurrentTab(e.currentTarget.textContent);
    indicatorRef.current.style.left = `${e.currentTarget.offsetLeft + 4}px`;
  };

  return (
    <TabsWrapper className="tabs">
      <TabsHeader className="tab-header" ref={tabsHeaderRef}>
        {dayArr.map((k, i) => (
          <Tab
            key={i}
            className={currentTab === k ? 'active' : ''}
            onClick={onClickHandler}
          >
            {k}
          </Tab>
        ))}
      </TabsHeader>
      <TabIndicator className="tab-indicator" ref={indicatorRef}></TabIndicator>
    </TabsWrapper>
  );
}

export default Tabs;
