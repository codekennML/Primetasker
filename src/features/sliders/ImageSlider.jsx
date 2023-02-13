import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const ImageSlider = ({ modalOpen, setModalopen }) => {
  return (
    <section class="sticky z-50 w-full h-full justify-center items-center bg-gray-500/90 top-0 left-0 right-0 bottom-0 relative">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          repellendus optio laboriosam nesciunt sunt! Autem itaque reiciendis,
          minima repudiandae delectus quisquam odio reprehenderit sed, dolore
          praesentium beatae asperiores nisi ipsa? Eius beatae adipisci, nemo
          repudiandae voluptatem consequuntur qui, nulla consequatur blanditiis
          error, eveniet autem debitis fugit! Fuga incidunt tempora delectus
          sapiente neque numquam similique quidem impedit deleniti obcaecati?
          Quibusdam, dicta?
        </p>
        {/* <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/333550390.jpg?k=cb361d9f65ea9ef8b39167a3637a9b6bec50a25d314ca59d366426bf51147e0a&o=&hp=1" alt="" class='' />

        </div>
        <div class='absolute flex flex-row justify-between top-[0%] w-full'>
            <p class='bg-white w-5 h-5'>
            <FontAwesomeIcon icon ={faArrowLeft} />
              </p>
              <p class='bg-white w-5 h-5'>
              <FontAwesomeIcon icon ={faArrowRight} />
              </p>
        */}
      </div>
    </section>
  );
};

export default ImageSlider;
