import { format, parseISO } from "date-fns";

const DateRender = ({ date }) => {
  let userbirthDate;

  {
    date
      ? (userbirthDate = (
          <span> {format(parseISO(date), `E, dd MMM yy - HH:mm a`)} </span>
        ))
      : null;
    return userbirthDate;
  }
};

export default DateRender;
