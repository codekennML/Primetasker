import { ThreeCircles } from "react-loader-spinner";

const Spinner = ({ position }) => {
  return (
    // <div className="inline-flex justify-center items-center">
    <ThreeCircles
      height="60"
      width="60"
      color="#5521B5"
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#5521B5"
      innerCircleColor="#5521B5"
      middleCircleColor="#5521B5"
    />
    // </div>
  );
};

export default Spinner;
