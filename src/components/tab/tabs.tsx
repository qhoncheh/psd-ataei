import React, { useState } from "react";
import TabButton from "./button/tab-button";
import TabContent from "./content/tab-content";

type TabId = string;
  interface TabType {
    title: string;
    id: TabId;
    component: React.ReactNode;
  }
  interface TabsProps {
    tabs: TabType[];
    styles?: {
      headerClass?: string;
      contentClass?: string;
      tabClass?: string;
    };
  }

const Tabs: React.FC<TabsProps> = ({ tabs, styles }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const getContentRoundedClasses = () => {
    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (activeTabIndex === 0) {
      return "rounded-tr-none rounded-br-xl rounded-bl-xl";
    }
    return "rounded-tl-xl rounded-br-xl rounded-bl-xl";
  };
  return (
    <div className="w-full">
      <div className={`relative ${styles?.headerClass || ""}`}>
        <div className="flex overflow-x-auto scrollbar-remover pb-[1px]">
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.id}
              tab={tab}
              active={activeTab === tab.id}
              index={index}
              onClick={() => setActiveTab(tab.id)}
              tabsLength={tabs.length}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white z-[1]"></div>
      </div>
      <TabContent
        activeTab={activeTab}
        tabs={tabs}
        getContentRoundedClasses={getContentRoundedClasses}
        styles={styles}
      />
    </div>
  );
};

export default Tabs;