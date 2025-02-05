import React from 'react';
import Tab from '../tab';

interface TabContentProps {
  activeTab: string;
  tabs: { id: string; component: React.ReactNode }[];
  getContentRoundedClasses: () => string;
  styles?: { contentClass?: string };
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, tabs, getContentRoundedClasses, styles }) => {
  return (
    <div
      className={`border border-gray-400 p-4 bg-white ${getContentRoundedClasses()} ${styles?.contentClass || ""}`}
      style={{ marginTop: "-1px", zIndex: 2 }}
    >
      {tabs.map((tab) => activeTab === tab.id && <Tab key={tab.id} {...tab} />)}
    </div>
  );
};

export default TabContent;