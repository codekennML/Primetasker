import React, { useCallback } from "react";
import Button from "../../../ui/Button";
import ModalHead from "../../../components/ModalHead";
import useAuthRedirect from "../../../utils/functions/redirect";

const OfferGate = () => {
  const redirect = useAuthRedirect();

  const handleRedirect = useCallback(() => {
    redirect("/dashboard/verify", null, true);
  }, []);

  return (
    <section>
      <ModalHead title="Verify your details" />
      <article className="px-8 py-6   space-y-8 text-justify">
        <div>
          <h1 className="text-[1.6rem] text-primary font-brand">
            Before you make an offer
          </h1>
        </div>

        <p className="text-primary">
          Help us keep primetasker safe and secure for everyone by providing
          information about yourself and verifying your account
        </p>

        <p>
          Verifying your information helps us know you're a genuine human! We
          won't show it to anyone or sell it on to any 3rd party
        </p>

        <div className="flex flex-row items-center w-full gap-x-3">
          <Button
            text={` Learn More `}
            fullWidth
            style={`py-2.5`}
            primary={false}
          />
          <Button
            onClick={handleRedirect}
            text={` Go to Verification `}
            fullWidth
            style={`py-2.5 `}
            primary
          />
        </div>
      </article>
    </section>
  );
};

export default OfferGate;
