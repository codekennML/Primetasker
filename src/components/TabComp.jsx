import { useState } from "react";

const TabComp = () => {
  const cities = [
    {
      id: 1,
      city: "Abuja",
      peeps: "120,400",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam quidem sit officiis quaerat? Voluptatem minus voluptate nostrum molestias, officia autem nihil nemo quis aperiam numquam corrupti harum dolores placeat.",
    },
    {
      id: 2,
      city: "Lagos",
      peeps: "120,400",
      body: " Tres Biems",
    },
    {
      id: 3,
      city: "Kano",
      peeps: "120,400",
      body: "Jyas Viens",
    },
    {
      id: 4,
      city: "London",
      peeps: "120,400",
      body: "JyTres Viens",
    },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const switchTab = (index) => {
    if (currentTab != index) {
      setCurrentTab(index);
      setIsActive(true);
    }

    // console.log(currentTab)
  };

  let contents;

  return (
    <section>
      <div className="space-x-4 flex flex-row relative min-h-[300px]">
        {cities.map((city, index) => {
          return (
            <article className="flex flex-col ">
              <div className="">
                <button
                  key={city.id}
                  onClick={() => switchTab(index)}
                  className="hover:bg-gray-200 border rounded-full px-4 py-2 font-semibold"
                >
                  Tab {city.city}{" "}
                </button>
              </div>

              <div
                className={`${
                  currentTab === index ? "visible opacity-100" : "hidden"
                } max-h-[250px] mt-16 absolute  left-0 transition-transform ease-in duration-400  `}
              >
                <p>{city.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TabComp;
