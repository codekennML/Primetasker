import React from "react";
import { FaTimes } from "react-icons/fa";

const Showcase = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1595243643203-06ba168495ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHZpbGxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbGxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const deleteItem = () => {};

  return (
    <>
      <div>
        <h1 className="text-[1.6rem] font-bold">My Showcase</h1>
      </div>
      <div>
        <p className="text-primary mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          incidunt sed veritatis dicta libero blanditiis. Explicabo, autem
          mollitia obcaecati
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {images.map((image) => (
          <div className="relative h-[150px]">
            <img
              src={image.src}
              className="rounded h-full object-cover object-center w-full"
            />
            <button
              onClick={deleteItem}
              className="bg-rose-500 text-primary w-6 h-6 flex items-center justify-center   text-white rounded-full  absolute -top-2 -right-2"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Showcase;
