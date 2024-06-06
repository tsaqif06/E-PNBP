import { useEffect, useState } from "react";
import { Fragment } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { isEmpty } from "lodash";
import { Container } from "react-bootstrap";

export default function Main() {
  const offsets = ["/apps/file-manager", "/apps/email", "/apps/calendar"];
  const { pathname } = useLocation();
  const bc = document.body.classList;

  // set sidebar to offset
  offsets.includes(pathname)
    ? bc.add("sidebar-offset")
    : bc.remove("sidebar-offset");

  // auto close sidebar when switching pages in mobile
  bc.remove("sidebar-show");

  // scroll to top when switching pages
  window.scrollTo(0, 0);

  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);

  const switchSkin = (skin) => {
    if (skin === "dark") {
      const btnWhite = document.getElementsByClassName("btn-white");

      for (const btn of btnWhite) {
        btn.classList.add("btn-outline-primary");
        btn.classList.remove("btn-white");
      }
    } else {
      const btnOutlinePrimary = document.getElementsByClassName(
        "btn-outline-primary"
      );

      for (const btn of btnOutlinePrimary) {
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-white");
      }
    }
  };

  switchSkin(skin);

  useEffect(() => {
    switchSkin(skin);
  }, [skin]);
  const navigate = useNavigate();
  const token = localStorage.getItem("barantinToken");

  useEffect(() => {
    if (isEmpty(token)) {
      navigate("/login");
    }
  }, [token]);

  return (
    <Fragment>
      {/* <Sidebar /> */}
      <Header onSkin={setSkin} />
      {/* <div className="main main-app p-3 p-lg-4"> */}
      <Container fluid className="p-4 pt-5">
        <Outlet />
        <Footer />
      </Container>
      {/* </div> */}
    </Fragment>
  );
}
