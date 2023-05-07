import { Formik, Form, FieldArray } from "formik";
import React from "react";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";
import Toggle from "../../../utils/Toggle";
import PrimeToggle from "../../../utils/CustomToggle";

const alertTypes = [
  {
    id: 1,
    name: "Email",
    value: 2,
  },
  {
    id: 2,
    name: "SMS",
    value: 2,
  },
  {
    id: 3,
    name: "Push",
    value: 3,
  },
];

const alertArray = [
  {
    id: 1,
    title: "Transaction",
    name: "transactions",
    tagLine:
      "You will always receive important notifications about any payments, cancellations and your account.",
    alerts: alertTypes,
  },
  {
    id: 2,
    title: "Task Reminders",
    name: "taskReminders",
    tagLine:
      "Reminders if you have forgotten to accept an offer, release a payment or leave a review.",
    alerts: alertTypes,
  },
  {
    id: 3,
    title: "Task updates",
    name: "taskUpdates",
    tagLine:
      "Receive updates on any new comments, private messages, offers and reviews.",
    alerts: alertTypes,
  },
  {
    id: 4,
    title: "Task Recommendations",
    name: "taskRecommendations",
    tagLine:
      "Get notified about tasks we think you will be interested in based on your activity on Primetasker.",
    alerts: alertTypes,
  },
  {
    id: 5,
    title: "Matching Task Alerts",
    name: "matchingAlerts",
    tagLine:
      "Once you have set up your  task alerts, you will be instantly notified when a task is posted that matches your preferences.",
    alerts: alertTypes,
  },
  {
    id: 6,
    title: "Helpful Information",
    name: "taskHelpInfo",
    tagLine:
      " Learn about how to earn more and find the right people for your tasks with helpful tips and advice.",
    alerts: alertTypes,
  },
  {
    id: 7,
    title: "NewsLetter and Features release",
    name: "newsLetter",
    tagLine:
      "Be the first to hear about new features and exciting updates,  tips and advice.",
    alerts: alertTypes,
  },
];

const Alerts = () => {
  return (
    <>
      <section className="">
        <div>
          <h2 className="font-bold text-[1.6rem]">Notifications</h2>
          <p className="text-[.85rem] text-brand-text-deep pr-10 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            beatae nostrum vero omnis cupiditate voluptatibus et.
          </p>
          <div className="pb-10">
            <Formik
              initialValues={{
                transactions: [1],
                taskReminders: [],
                taskUpdates: [],
                taskRecommendations: [],
                matchingAlerts: [],
                taskHelpInfo: [],
                newsLetter: [],
              }}
            >
              {({ values }) => (
                <Form>
                  {alertArray.map((alert, arrayIndex) => (
                    <div className="mt-6">
                      <h2 className="font-semibold text-brand-text-deep text-[.95rem]">
                        {alert.title}
                      </h2>

                      <div className="bg-brand-secondary px-4 mt-2 rounded-lg">
                        <p className="pt-4 text-[.85rem] font-medium">
                          {alert.tagLine}
                        </p>
                        <FieldArray name={alert.name}>
                          {(arrayHelpers) => (
                            <div className="flex flex-row items-center gap-x-5">
                              {alert.alerts.map((alert, index) => (
                                <CustomCheckbox
                                  key={index}
                                  type="checkbox"
                                  name={alert.name}
                                  className="w-5 h-5 my-3 cursor-pointer accent-brand-light"
                                  labelstyle={`text-[.8rem] font-medium text-brand-text`}
                                  label={alert.name}
                                  value={alert.id}
                                  checked={values[
                                    alertArray[arrayIndex].name
                                  ].includes(alert.id)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      arrayHelpers.push(alert.id);
                                    } else {
                                      const idx = values[
                                        alertArray[arrayIndex].name
                                      ].indexOf(alert.id);
                                      arrayHelpers.remove(idx);
                                    }
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </FieldArray>
                      </div>
                    </div>
                  ))}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alerts;
