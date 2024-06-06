import { useCallback, useState } from "react";

const useDisclosure = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  /* eslint-disable react-hooks/exhaustive-deps */
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, onClose, onOpen };
};

export default useDisclosure;
