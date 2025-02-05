import React from 'react';

interface TabButtonProps {
  tab: { id: string; title: string };
  active: boolean;
  index: number;
  onClick: () => void;
  tabsLength: number;
}

const TabButton: React.FC<TabButtonProps> = ({ tab, active, index, onClick, tabsLength }) => {
  return (
    <button
      key={tab.id}
      onClick={onClick}
      className={`
        flex-shrink-0 px-3 py-3 md:px-5 md:py-3
        relative cursor-pointer transition-colors
        ${active
          ? "text-gray-700 rounded-tl-xl rounded-tr-xl font-semibold bg-white border-t border-l border-r border-gray-400"
          : "text-gray-500 border-b border-white"}
        ${index === 0 ? "rounded-tl-lg" : ""}
        ${index === tabsLength - 1 ? "rounded-tr-lg" : ""}
      `}
      style={{ zIndex: active ? 2 : 1 }}
    >
      {tab.title}
      {active && <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-white"></div>}
      {active ? (
        <>
          <div
            className={`h-3 w-3 bg-white absolute bottom-0 -right-3 translate-y-[1px] ${index === tabsLength - 1 ? "hidden" : ""}`}
          >
            <div className="h-3 w-3 bg-gray-50 rounded-bl-xl border-b border-l border-gray-400"></div>
          </div>
          <div
            className={`h-3 w-3 bg-white absolute bottom-0 -left-3 translate-y-[1px] ${index === 0 ? "hidden" : ""}`}
          >
            <div className="h-3 w-3 bg-gray-50 rounded-br-xl border-b border-r border-gray-400"></div>
          </div>
        </>
      ) : null}
    </button>
  );
};

export default TabButton;