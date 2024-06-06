import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer">
      <span>&copy; 2024. Barantin. All Rights Reserved.</span>
      <span>
        Created by:{" "}
        <Link to="http://barantin.com" target="_blank">
          Barantin
        </Link>
      </span>
    </div>
  );
}
