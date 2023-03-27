import React from "react";
import { FaTimes } from "react-icons/fa";
import { hideModal } from "../features/modal/modalSlice";
import { Formik, Form } from "formik";
import CustomText from "../utils/CustomFieldComp/CustomText";
import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";
import { useDispatch } from "react-redux";
import Naira from "../../assets/svgs/Naira";

const OfferModal = ({ modalTitle }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white w-[450px] rounded-lg px-6  pb-16">
      <div>
        <Formik initialValues={{ offerPrice: 5000, offerDetails: "" }}>
          {(values) => {
            return (
              <Form>
                <div className="my-6 relative ">
                  <h3 className="text-gray-500 font-medium text-[15px]">
                    Enter your offer
                  </h3>
                  <CustomText
                    imgBfr={<Naira style={`text-gray-500`} />}
                    name="offerPrice"
                    type="text"
                    placeholder="5000"
                    value={values.offerPrice}
                    imgBfr="&#8358;"
                    adornment="top-[22%] left-[4%] font-medium text-gray-500"
                    inputstyle="py-2.5 border-violet-500 font-medium  rounded-lg border-2 border-violet-200 placeholder:text-[15px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-600 bg-gray-50 indent-2 w-full rounded auto"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-gray-500 font-medium">
                    Extra details about your offer
                  </h3>
                  <CustomTextarea
                    name="offerDetails"
                    value={values.offerDetails}
                    placeholder={`Share how you stand out from other bidders`}
                    inputStyle={`my-4 py-4 p-2 bg-gray-200 h-32 resize-none focus:outline-violet-500  placeholder:text-[15px] placeholder:text-gray-500 text-gray-600 `}
                  />
                </div>

                <div className="my-8">
                  <button
                    type="button"
                    className="py-2 bg-purple-800 text-white rounded-lg px-4 float-right"
                  >
                    Submit Offer
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default OfferModal;
