const ImageRenderer = ({ src }) => {
  return (
    <img
      className="inline object-cover rounded-full h-[40px] w-[40px]"
      width="40px"
      height="40px"
      src={src}
    />
  );
};

export default ImageRenderer;
