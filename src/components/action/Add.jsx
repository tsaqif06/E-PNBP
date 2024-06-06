import { Button } from "react-bootstrap";

const Add = ({ roles = [], title = "Tambah", onClick }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user.role?.includes(roles) ? (
    <Button onClick={onClick}>{title}</Button>
  ) : null;
};
export default Add;
