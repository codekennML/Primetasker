import ProgressBar from "@ramonak/react-progress-bar";

const ProgressComp = ({ progress }) => {
  const height = "6px";

  return (
    <ProgressBar
      baseBgColor={`#F3F4F6`}
      completed={progress}
      height={height}
      labelAlignment={`outside`}
      labelColor={`#000`}
      labelSize={`12px`}
    />
  );
};

export default ProgressComp;
