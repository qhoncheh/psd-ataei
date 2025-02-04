import React from "react";
import Tabs from "./components/Tab/Tabs";
import TabForm from "./components/tab/tab-form/tab-form";


const App: React.FC = () => {
  const tabs = [
    {
      title: "اطلاعات اولیه",
      id: "tab1",
      component: <TabForm inputs={["Input 5", "Input 6"]} />,
    },
    {
      title: "مستندات",
      id: "tab2",
      component: <TabForm inputs={["Input 5", "Input 6"]} />,
    },
    {
      title: "جزییات کاربر",
      id: "tab3",
      component: <TabForm inputs={["Input 5", "Input 6"]} />,
    },
    {
      title: "مستندات",
      id: "tab4",
      component: <TabForm inputs={["Input 7", "Input 8"]} />,
    },
    {
      title: "مستندات",
      id: "ta5",
      component: <TabForm inputs={["Input 7", "Input 8"]} />,
    },
    {
      title: "مستندات",
      id: "ta6",
      component: <TabForm inputs={["Input 10", "Input 12"]} />,
    },
    {
      title: "اطلاعات اولیه",
      id: "tab7",
      component: <TabForm inputs={["Input 1", "Input 2"]} />,
    },
    {
      title: "اطلاعات اولیه",
      id: "tab8",
      component: <TabForm inputs={["Input 25", "Input 26"]} />,
    },
    {
      title: "اطلاعات اولیه",
      id: "tab9",
      component: <TabForm inputs={["Input 1", "Input 2"]} />,
    },
    {
      title: "اطلاعات اولیه",
      id: "tab10",
      component: <TabForm inputs={["Input 1", "Input 2"]} />,
    },
    {
      title: "کاببببببببببراطلاعات اولیه",
      id: "tab11",
      component: <TabForm inputs={["Input 1", "Input 2"]} />,
    },
    {
      title: "کاراولیه",
      id: "tab12",
      component: <TabForm inputs={["Input 1", "Input 2"]} />,
    },
  ];

  return (
    <div className="flex justify-evenly p-8">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;