import React from "react";
import { FaTimes } from "react-icons/fa";
import { hideModal } from "../features/modal/modalSlice";
import { Formik, Form } from "formik";
import CustomText from "../utils/CustomFieldComp/CustomText";
import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";
import { useDispatch } from "react-redux";
import Naira from "../../assets/svgs/Naira";
import useAuth from "../hooks/useAuth";

import { notifySuccess, notifyErr } from "../hooks/NotifyToast";
import { useCreateOfferMutation } from "../features/Offers/slices/OfferApiSlice";
import ModalHead from "./ModalHead";

const OfferModal = ({ modalTitle, taskId }) => {
  const [createOffer, { isLoading, isSuccess }] = useCreateOfferMutation();
  const { id: userId } = useAuth();

  const dispatch = useDispatch();

  const createOfferhandler = async (values) => {
    let offerDetails = values;
    offerDetails.createdBy = userId;
    offerDetails.taskId = taskId;

    // console.log(offerDetails);

    const createdOffer = await createOffer(offerDetails);
    console.log(createdOffer);
    if (createdOffer.data.status === 201) {
      notifySuccess(`Your offer has been sent.`);
    } else {
      notifyErr(`Error : ${createdOffer.status} - Failed to create Offer  `);
    }
  };

  return (
    <div className="bg-white w-[450px] rounded-lg px-6  pb-2">
      <ModalHead title="Make an Offer" />
      <div>
        <Formik
          initialValues={{ offerAmount: 5000, offerMessage: "" }}
          onSubmit={(values) => createOfferhandler(values)}
        >
          {({ values, isSubmitting, isValid }) => {
            return (
              <Form>
                <div className="my-6 relative ">
                  <h3 className="text-gray-700 font-medium my-2">Your offer</h3>
                  <CustomText
                    name="offerAmount"
                    type="text"
                    placeholder="5000"
                    value={values.offerAmount}
                    imgBfr="&#8358;"
                    adornment="top-[25%] left-[6%] font-medium text-gray-500"
                    inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-green-400 text-base text-gray-600 bg-slate-100 indent-6 w-full rounded auto"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-gray-700 font-medium my-2">
                    Extra details about your offer
                  </h3>
                  <CustomTextarea
                    name="offerMessage"
                    value={values.offerMessage}
                    placeholder={`Share how you stand out from other bidders`}
                    inputStyle={`my-4 py-4 p-2 bg-slate-100 h-44 resize-none border-0 focus:outline-green-400  placeholder:text-[14px] placeholder:text-gray-500 text-gray-600 `}
                  />
                  <p className="text-[.7rem] font-semibold text-brand-light">
                    This will be visible to the public
                  </p>
                </div>

                <div className="my-8">
                  <button
                    disabled={isSubmitting || !isValid}
                    type="submit"
                    className="py-4  bg-brand-light text-white px-4 w-full rounded-full"
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
