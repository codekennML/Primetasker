import React from "react";
import Profile from "./Settings/Profile";
import TopBar from "./TopBar";

const Verify = () => {
  return (
    <div>
      <TopBar headerText={`Account Verification`} />
      <Profile />
    </div>
  );
};

export default Verify;
