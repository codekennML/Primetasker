const ImageRenderer = ({ src }) => {
  return (
    <img
      className="inline object-cover rounded-full h-[35px] w-[35px]"
      width="40px"
      height="40px"
      src={src}
    />
  );
};

export default ImageRenderer;
