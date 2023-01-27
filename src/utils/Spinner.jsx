import { Oval } from "react-loader-spinner";

const Spinner = ({ position }) => {
  return (
    <Oval
      height={50}
      width={50}
      color="lightgray"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="purple"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
    // </div>
  );
};

export default Spinner;
