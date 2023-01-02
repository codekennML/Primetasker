import { format, parseISO } from "date-fns";

const DateRender = ({ date }) => {
  let userbirthDate;

  {
    date
      ? (userbirthDate = <span> {format(parseISO(date), "dd/MM/yy")} </span>)
      : null;
    return userbirthDate;
  }
};

export default DateRender;
