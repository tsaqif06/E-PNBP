const InputWrapper = ({ children, error = false, message = "" }) => {
  return (
    <>
      {children}
      {error && (
        <div className="rounded-bottom" style={{ backgroundColor: "pink" }}>
          <span className="text-danger small mx-2">{message}</span>
        </div>
      )}
    </>
  );
};
export default InputWrapper;
