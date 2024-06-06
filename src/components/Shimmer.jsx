const Shimmer = ({ width = 40, height = 10 }) => {
  return (
    <div
      className="shimmer rounded"
      style={{ height, width, position: "relative", overflow: "hidden" }}
    />
  );
};

export default Shimmer;
