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
import Button from "../ui/Button";

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
    <div className="bg-white w-[450px] rounded-lg  pb-2">
      <ModalHead title="Make an Offer" />
      <div className="px-6 ">
        <Formik
          initialValues={{ offerAmount: 5000, offerMessage: "" }}
          onSubmit={(values) => createOfferhandler(values)}
        >
          {({ values, isSubmitting, isValid }) => {
            return (
              <Form>
                <div className="my-6 relative ">
                  <h3 className="text-primary text-[.9rem] my-2">Your offer</h3>
                  <CustomText
                    name="offerAmount"
                    type="text"
                    placeholder="5000"
                    value={values.offerAmount}
                    imgBfr="&#8358;"
                    adornment="top-[25%] left-[6%] font-medium text-brand-text"
                    inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500  text-base text-primary bg-brand-secondary indent-6 w-full rounded auto"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-primary text-[.9rem]  my-2">
                    Extra details about your offer
                  </h3>
                  <CustomTextarea
                    name="offerMessage"
                    value={values.offerMessage}
                    placeholder={`Share how you stand out from other bidders`}
                    inputStyle={`my-4 py-4 p-2 bg-slate-100 h-44 resize-none border-0 placeholder:text-[14px] placeholder:text-primary text-primary w-full `}
                  />
                  <p className="text-[.7rem] font-semibold text-brand-light">
                    This will be visible to the public
                  </p>
                </div>

                <div className="my-8 flex flex-row items-center gap-x-3">
                  <Button
                    onClick={() => hideModal()}
                    fullWidth
                    style="py-2.5 "
                    text={`Close`}
                  />
                  <Button
                    disabled={isSubmitting || !isValid}
                    fullWidth
                    primary
                    style="py-2.5 "
                    text={`Submit Offer`}
                  />
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
