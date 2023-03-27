import { useFormikContext } from "formik";
import { useRef } from "react";
import { AiOutlineCheckCircle, AiOutlinePlusCircle } from "react-icons/ai";
import ImageUpload from "../../../../components/ImageUpload";
import CustomTextarea from "../../../../utils/CustomFieldComp/CustomTextarea";
import MultipleFileUpload from "../../../../utils/CustomFieldComp/MultipleFileUpload";

export const StepThree = () => {
  const dropzoneRef = useRef(null);

  const openDropzone = () => {
    dropzoneRef.current.click();
  };

  const context = useFormikContext();
  const { values } = context;

  return (
    <section>
      <h2 className="text-[30px] font-bold text-slate-900 py-2.5 text-center mb-6">
        Just a few more details
      </h2>

      <div>
        <div className="flex items-center space-x-2 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlinePlusCircle />
          </p>
          <h3 className="text-purple-900 font-medium">
            Detailed description of your task
          </h3>
        </div>
        <CustomTextarea
          name="details"
          value={values.details}
          placeholder={`Type a description`}
          inputStyle={`my-4 py-4 p-2 bg-gray-200 h-32 resize-none focus:outline-violet-500  placeholder:text-[15px] placeholder:text-gray-500 text-gray-600 `}
        />
        <div className="">
          <div className="flex items-center space-x-2  my-6">
            <h3 className="text-purple-900 font-medium ">
              Add Images
              <span className="text-[0.7rem]">(Optional)</span>
            </h3>
          </div>
          {console.log(values)}
          <div className="flex flex-row space-x-4 items-center max-w-lg overflow-hidden">
            <button
              onClick={openDropzone}
              type="button"
              className="bg-gray-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
              justify-center"
            >
              <span>
                <AiOutlinePlusCircle className="text-[2.5rem] text-purple-600" />{" "}
              </span>
            </button>
            <>
              <ImageUpload
                ref={dropzoneRef}
                clearValues={false}
                files={values.files}
                postForm
              />
            </>
          </div>

          {/* <MultipleFileUpload
            ref={dropzoneRef}
            name="files"
            // value={values.files}
            fileposition={`absolute bottom-0 left-32 bg-white  rounded-lg`}
            dimensions={`w-[40%] max-w-full`}
            style={` flex space-x-2`}
          /> */}
          {/* <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            excepturi facere facilis a enim odit ipsum temporibus, quaerat
            eveniet sint at porro consequuntur vel alias quo reiciendis cumque
            ex minus! Necessitatibus laborum veritatis sequi numquam deleniti
            quaerat fuga optio sunt aliquid quo molestias quam rerum, totam
            accusantium debitis vel. Enim deserunt minima aliquid dolore debitis
            consequuntur at nihil quia numquam! Amet totam debitis eius illo
            temporibus inventore, alias eligendi aliquam sint odit corporis.
            Magni nihil necessitatibus commodi consequatur earum nisi dolor
            sapiente aliquid autem ad, recusandae temporibus delectus odit
            minima. Aperiam temporibus aut ad quibusdam saepe voluptatum
            corporis rem eaque voluptatem eos odit doloribus adipisci, sed
            eveniet tenetur aspernatur earum sunt ut error nisi maxime, eum
            beatae harum? Facilis, pariatur! Illo, voluptatibus hic quam
            cupiditate ab tenetur velit necessitatibus laudantium quasi corrupti
            laborum consequuntur esse asperiores aliquam ipsum itaque assumenda
            cum debitis, harum quia! Labore alias voluptates vel quae dolor!
            Voluptatum cupiditate quam dolorum pariatur possimus, praesentium,
            quae necessitatibus dolorem commodi hic consequatur eveniet vel
            iusto provident totam. Est veniam molestias explicabo hic impedit
            laboriosam in animi at aliquam nemo. Obcaecati doloribus tempore
            reiciendis. Quod, quae. Rem, quisquam hic doloremque, ducimus
            consequatur quaerat assumenda iure atque quidem nesciunt, corrupti
            ipsa sequi beatae sed deleniti quis harum provident quibusdam
            repudiandae alias! A cupiditate hic minus modi aperiam beatae
            doloribus ab repellat, nobis quaerat quo obcaecati nam unde corrupti
            eligendi. Tenetur fugit iste, eveniet ullam animi autem sapiente
            natus officiis sed temporibus! In voluptatibus excepturi id, quis
            deleniti incidunt quae fugiat at voluptate est porro nemo natus
            repellendus iure temporibus, laudantium quo? Veritatis, non
            consectetur odit quae omnis iusto similique dignissimos eos! Aperiam
            hic tenetur commodi cum officia porro sit eius reprehenderit eaque
            minus temporibus, fugiat blanditiis sint tempore pariatur ratione
            voluptates molestiae nobis? Deleniti impedit eos unde nostrum neque!
            Sed, inventore! Numquam facere qui tempore aspernatur aliquam!
            Voluptatem ipsam quam officia corporis molestias voluptas amet, odio
            suscipit temporibus omnis sint obcaecati ut dolorum, nemo, illum
            placeat similique nihil id sapiente tempora. Ratione laborum quo
            fugit odio assumenda ab ducimus odit debitis, qui cupiditate! Illum
            nesciunt explicabo enim architecto perspiciatis dignissimos qui
            voluptas facilis facere tempore veniam accusantium cumque et,
            doloribus debitis? Nobis quo id aperiam nesciunt assumenda
            accusantium cupiditate quisquam repellat obcaecati quasi sint
            accusamus omnis voluptas fugiat sapiente, placeat quas ipsum
            molestias ipsa voluptate officia perspiciatis? Maxime iste animi
            odio. Asperiores consequatur deleniti reprehenderit reiciendis nihil
            perferendis repudiandae enim. Aliquid doloremque minus error, non
            aliquam, doloribus incidunt commodi soluta, quidem distinctio ab
            neque veritatis consectetur quia dolores iure sit magni. Corrupti
            doloremque repellendus aut unde amet repudiandae qui, natus beatae
            rem asperiores temporibus voluptatibus, repellat laudantium a! Quod
            aspernatur laboriosam delectus facilis ullam, cum, placeat illum
            blanditiis sequi, ab incidunt. Optio delectus tenetur, excepturi
            ratione minus harum corrupti suscipit ducimus voluptatem cumque
            blanditiis at facilis nostrum, illo officiis cum, explicabo
            laboriosam placeat? Accusantium enim dolorem mollitia ipsam tenetur
            aliquid architecto. Ratione adipisci laboriosam doloribus, nam
            deleniti ipsa nemo quidem magni a quaerat! Repellat, voluptatibus
            tenetur eligendi ut ipsa recusandae aperiam earum velit similique
            voluptates sed! Reprehenderit corrupti odit fugiat voluptatibus!
            Ipsa aliquid necessitatibus illo id illum! Nihil tempore dolorem
            unde tempora odit cumque accusantium doloremque a ipsa, quo et quam
            ea maxime! Hic natus deleniti maiores? Assumenda, explicabo. Labore,
            optio. Officia voluptas provident nam ad veritatis sequi expedita
            placeat? Tenetur quibusdam sint repudiandae pariatur sit quia hic
            delectus temporibus perferendis, porro tempore consequuntur,
            mollitia iure similique, vel sapiente corporis modi. Perferendis
            quia unde cum rem mollitia pariatur neque alias fugit eius nostrum
            veritatis ipsum animi, quo nulla, ratione cupiditate id voluptatibus
            velit illo nihil tempora totam. Labore totam officia eligendi?
          </div> */}
          {/* {console.log(values.files)} */}
        </div>
      </div>
    </section>
  );
};
