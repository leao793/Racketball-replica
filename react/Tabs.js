import { useState } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import "./Tabs.css" 


const CSS_HANDLES = ['tabsContainer', 'tabList', 'tabItem', 'tabItemActive', 'tabContent'];

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  const handles = useCssHandles(CSS_HANDLES);

  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className={handles.tabsContainer}>
      <ul className={handles.tabList}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`${handles.tabItem} ${activeTab === tab.id ? handles.tabItemActive : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className={handles.tabContent}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;