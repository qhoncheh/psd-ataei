import React, { useState } from "react";
import Tab from "./Tab";

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
    <div className="w-full ">
      <div className={`relative ${styles?.headerClass || ""}`}>
        <div className="flex overflow-x-auto scrollbar-remover pb-[1px]">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-shrink-0 px-3 py-3 md:px-5 md:py-3
                relative cursor-pointer transition-colors
                ${styles?.tabClass || ""}
                ${
                  activeTab === tab.id
                    ? "text-gray-700  rounded-tl-xl rounded-tr-xl font-semibold bg-white border-t border-l border-r border-gray-400"
                    : "text-gray-500  border-b border-white "
                }
                ${index === 0 ? "rounded-tl-lg" : ""}
                ${index === tabs.length - 1 ? "rounded-tr-lg" : ""}
              `}
              style={{
                zIndex: activeTab === tab.id ? 2 : 1,
              }}
            >
              {tab.title}
              {activeTab === tab.id && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-white"></div>
              )}
              {activeTab === tab.id ? (
                <>
                  <div
                    className={
                      "h-3 w-3 bg-white absolute bottom-0 -right-3 translate-y-[1px] " +
                      (index == tabs.length - 1 ? "hidden" : "")
                    }
                  >
                    <div className="h-3 w-3 bg-gray-50 rounded-bl-xl border-b border-l border-gray-400"></div>
                  </div>
                  <div
                    className={
                      "h-3 w-3 bg-white absolute bottom-0 -left-3 translate-y-[1px] " +
                      (index == 0 ? "hidden" : "")
                    }
                  >
                    <div className="h-3 w-3 bg-gray-50 rounded-br-xl border-b border-r border-gray-400"></div>
                  </div>
                </>
              ) : null}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0  left-0 right-0  bg-white z-[1]"></div>
      </div>

      <div
        className={`
          border border-gray-400 p-4  bg-white
          ${getContentRoundedClasses()}
          ${styles?.contentClass || ""}
        `}
        style={{ marginTop: "-1px", zIndex: 2 }}
      >
        {tabs.map(
          (tab) => activeTab === tab.id && <Tab key={tab.id} {...tab} />
        )}
      </div>
    </div>
  );
};

export default Tabs;
