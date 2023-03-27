import { format } from "date-fns";

export const formatDate = (ISOday, type) => {
  const date = new Date(ISOday);
  return format(date, type);
};
