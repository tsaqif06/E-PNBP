import toast from "react-hot-toast";

const useToaster = () => {
  /**
   *
   * @param {Promise} promises
   * @param {string} textSuccess
   * @param {string} textLoading
   * @returns
   */
  const toaster = (promises, textSuccess, textLoading = "Loading...") => {
    return toast.promise(promises, {
      pending: textLoading,
      success: textSuccess ? textSuccess : null,
      error: (err) => (err ? err.message : "Uh oh, there was an error!"),
    });
  };

  return toaster;
};

export default useToaster;
