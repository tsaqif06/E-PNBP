import toast from "react-hot-toast";

const useToaster = () => {
	return (message, type) => {
		if (type === "Success") {
			toast.success(message);
		} else if (type === "Error") {
			toast.error(message);
		} else {
			toast(message);
		}
	};
};

export default useToaster;
