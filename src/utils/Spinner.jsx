import { Oval } from "react-loader-spinner";

const Spinner = ({
  color = "purple",
  visible = false,
  position,
  height = 50,
  width = 50,
}) => {
  return (
    <Oval
      strokeWidth={2}
      strokeWidthSecondary={2}
      color={color}
      secondaryColor="white"
      height={height}
      width={width}
      wrapperStyle={{}}
      wrapperclassName={position}
      visible={visible}
      ariaLabel="oval-loading"
    />
    // </div>
  );
};

export default Spinner;
