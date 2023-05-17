import { useState } from "react";
import { useField } from "formik";
import { Rating } from "react-simple-star-rating";

const Ratings = ({ name }) => {
  const [field, meta, { setValue }] = useField(name);

  const [rating, setRating] = useState(field.value);

  const handleRating = (rate) => {
    setValue(rate);
    setRating(rate);
  };
  console.log(rating);

  return (
    <div className="flex justify-center">
      <Rating
        size={30}
        onClick={handleRating}
        initialValue={rating}
        allowFraction={false}
        className="flex"
      />
    </div>
  );
};

export default Ratings;
