import React from "react";
import Tabs from "./components/Tabs";

const App: React.FC = () => {
  const tabs = [
    {
      title: "اطلاعات اولیه",
      id: "tab1",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
    {
      title: "مستندات",
      id: "tab2",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
    {
      title: " جزییات کاربر",
      id: "tab3",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
    {
      title: "مستندات",
      id: "tab4",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 7"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 8"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
    {
      title: "مستندات",
      id: "ta5",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 7"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 8"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
    {
      title: "مستندات",
      id: "ta6",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 10"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 12"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
    {
      title: "اطلاعات اولیه",
      id: "tab7",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 1"
            className="w-full  px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 2"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
    {
      title: "اطلاعات اولیه",
      id: "tab8",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 25"
            className="w-full  px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 26"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },

    {
      title: "اطلاعات اولیه",
      id: "tab9",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 1"
            className="w-full  px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 2"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },

    {
      title: "اطلاعات اولیه",
      id: "tab10",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 1"
            className="w-full  px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 2"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
    {
      title: " کاببببببببببراطلاعات اولیه",
      id: "tab11",
      component: (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Input 1"
            className="w-full  px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Input 2"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      ),
    },
  ];

  return (
    <div className="flex justify-evenly p-8">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
