import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";

const TabComponent = ({ TabList }) => {
  return (
    <Tabs
      activeTab="1"
      className=""
      ulclassName="bg-gradient-to-tr from-pink-100/60 to-blue-100/60  font-medium text-gray-800 font-sans"
      activityclassName="bg-indigo-300 py-[1.5px] rounded-full"
      onClick={(event, tab) => console.log(event, tab)}
    >
      {TabList.map((tab) => (
        <Tab key={tab.id} title={tab.tabName} className="mr-3">
          <div className="mt-3">{tab.tabComponent}</div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default TabComponent;
