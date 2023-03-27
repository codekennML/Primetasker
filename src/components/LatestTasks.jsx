import {
  AiFillAlert,
  AiOutlineAlert,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
  AiOutlineForm,
} from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

const trendingTasks = [
  {
    id: 1,
    title: "Praesent lectus.",
    locale: "CYEM",
    time: "Afternoon",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 67212,
  },
  {
    id: 2,
    title: "In hac habitasse platea dictumst.",
    locale: "SNJN",
    time: "Mid-day",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/899267100/photo/blue-gift-box-tied-with-blue-ribbon.jpg?b=1&s=170667a&w=0&k=20&c=dkREDQqmQqj9AaN7Qkn_zbEV-29vb9z6jBR653wspp4=",
    price: 59303,
  },
  {
    id: 3,
    title: "Vivamus tortor.",
    locale: "67L",
    time: "Evening",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/160808843/photo/gift-box-wrapped-in-orange-stripped-paper-with-an-orange-bow.jpg?b=1&s=170667a&w=0&k=20&c=LNm3I3dAr7Cwu3rm95pIXBLdydxv0CTqAJHa8q9EiAc=",
    price: 40384,
  },
  {
    id: 4,
    title:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    locale: "GMTT",
    time: "Mid-day",
    Date: "Mon, 27 Jan",
    src: "https://images.unsplash.com/photo-1573947519611-72795aed568f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveCUyMGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 25662,
  },
  {
    id: 5,
    title: "Integer a nibh.",
    locale: "LGAT",
    time: "Morning",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 40875,
  },
  {
    id: 6,
    title: "Aliquam sit amet diam in magna bibendum imperdiet.",
    locale: "KHST",
    time: "Mid-day",
    Date: "Mon, 27 Jan",
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveCUyMGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 68364,
  },
  {
    id: 7,
    title: "Nulla nisl.",
    locale: "OOTH",
    time: "Morning",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 30824,
  },
  {
    id: 8,
    title:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    locale: "FYOA",
    time: "Evening",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 53242,
  },
  {
    id: 9,
    title: "Etiam faucibus cursus urna.",
    locale: "BGCH",
    time: "Evening",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 29850,
  },
  {
    id: 10,
    title: "Aliquam quis turpis eget elit sodales scelerisque.",
    locale: "WABT",
    time: "Morning",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 20550,
  },
  {
    id: 11,
    title: "Vestibulum ac est lacinia nisi venenatis tristique.",
    locale: "HCMN",
    time: "Afternoon",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 20307,
  },
  {
    id: 12,
    title: "Donec dapibus.",
    locale: "ZLGL",
    time: "Morning",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 63089,
  },
  {
    id: 13,
    title: "Aenean fermentum.",
    locale: "WART",
    time: "Morning",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 46907,
  },
  {
    id: 14,
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    locale: "YKKG",
    time: "Afternoon",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 40156,
  },
  {
    id: 15,
    title: "In quis justo.",
    locale: "FAVR",
    time: "Morning",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 68747,
  },
  {
    id: 16,
    title: "Donec quis orci eget orci vehicula condimentum.",
    locale: "KCAG",
    time: "Mid-day",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 64098,
  },
  {
    id: 17,
    title: "Nulla suscipit ligula in lacus.",
    locale: "VCBI",
    time: "Mid-day",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 54150,
  },
  {
    id: 18,
    title: "Donec semper sapien a libero.",
    locale: "YBWW",
    time: "Afternoon",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 60056,
  },
  {
    id: 19,
    title: "Donec semper sapien a libero.",
    locale: "LFTU",
    time: "Mid-day",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 40204,
  },
  {
    id: 20,
    title: "Etiam pretium iaculis justo.",
    locale: "VNNG",
    time: "Mid-day",
    Date: "Mon, 27 Jan",
    src: "https://media.istockphoto.com/id/183510983/photo/multicolored-and-beribboned-gift-boxes-in-pile.jpg?b=1&s=170667a&w=0&k=20&c=R2GhikpAXkgh2culfK31P7ZfHWaojwJppgoYTIlI7Q0=",
    price: 30129,
  },
];

const LatestTasks = () => {
  return (
    <section className=" bg-gray-50 py-16 pb-24">
      <article className="w-[80%] mx-auto">
        <h2 class="text-2xl font-bold mb-8 text-left text-gray-800  ">
          Explore & make offers to trending tasks
        </h2>
        <div className="relative">
          <Swiper
            className="static"
            slidesPerColumn={1}
            slidesPerGroup={4}
            slidesPerColumnFill="row"
            grabCursor={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            slidesPerView={4}
          >
            {trendingTasks.map((task) => {
              return (
                <SwiperSlide>
                  <article className="bg-white  rounded-b-lg  pb-1 border-l-[1px] shadow-md border   hover:transition hover:2s hover:duration-300   ">
                    <div className="w-full space-y-2 border-b">
                      <img
                        src={task.src}
                        height={150}
                        className="max-h-[150px]  w-full object-cover "
                      />
                    </div>

                    <div className="px-4  ">
                      <div className=" flex flex-col-reverse justify-start items-start space-x-1 ">
                        <div className="max-h-[40px] text-ellipsis  max-w-[400px] ">
                          <p className="flex-1  text-[13px] font-sans font-medium max-h-[80px] h-full truncate text-gray-700 text-left py-1">
                            {task.title}
                          </p>
                        </div>
                        <div className="justify-center items-center flex space-x-2 my-2">
                          <img
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt=""
                            className="align-end w-[25px] h-[25px] object-cover object-fit rounded-full "
                          />
                          <p className="flex-1  text-[13px] font-sans font-medium  text-left text-purple-800 ">
                            Melinda Aaron
                          </p>
                        </div>
                      </div>
                      <ul className="text-[14px] space-y-1.5 my-1 flex justify-between items-center">
                        <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                          <p>
                            <AiOutlineCalendar />
                          </p>
                          <p className="text-[12px] text-gray-700">
                            {" "}
                            {task.Date}
                          </p>
                        </li>

                        <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                          <p>
                            <AiOutlineEnvironment />
                          </p>
                          <p className="text-[12px]"> {task.locale}</p>
                        </li>
                      </ul>

                      <div className="border-t py-2 flex justify-between items-center">
                        <div>
                          <button className="text-[25px] text-gray-400">
                            <AiOutlineForm />
                          </button>
                        </div>
                        <div className="flex flex-1 justify-end space-x-4">
                          <p className="uppercase">Starting at</p>
                          <p className="justify-items-end text-[14px] text-purple-900 font-semibold text-center inline-flex items-center">
                            <span> N{task.price}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </article>
    </section>
  );
};

export default LatestTasks;
