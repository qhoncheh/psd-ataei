import React from 'react';

interface TabProps {
  title: string;
  id: string;
  component: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ component }) => {
  return (
    <div>
      {component}
    </div>
  );
};

export default Tab;