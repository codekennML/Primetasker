export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  return (
    <span
      className={`${
        cellValue === "male" ? "bg-yellow-200/70 " : "bg-green-200/70"
      }    items-center text-green-700v rounded-lg px-5 py-1.5`}
    >
      {cellValue}
    </span>
  );
};
