import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import bg1 from "../../assets/img/bg1.jpg";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";
import SEO from "../../components/SEO";
import InputWrapper from "../../components/InputWrapper";

const validation = () => {
  return Yup.object().shape({
    username: Yup.string().required("Harap isikan email anda"),
    password: Yup.string().required("Harap isikan password anda"),
  });
};

const Signin2 = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation()),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  console.log(errors);
  const { mutateAsync } = useLogin();
  const onSubmit = async (values) => {
    const response = await mutateAsync(values);
    if (response.success) {
      navigate("/");
    }
  };
  const isLoggedIn = localStorage.getItem("barantinToken");
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    <div className="page-sign d-block py-0">
      <SEO title="Login" />
      <Row className="g-0">
        <Col md="7" lg="5" xl="4" className="col-wrapper">
          <Card className="card-sign">
            <Card.Header>
              <div className="d-flex justify-content-center mb-4">
                <Image src="/logo.png" width={200} height={200} />
              </div>
              <Card.Title className="fw-bold mb-1">PNBP Barantin</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <InputWrapper
                    error={!!errors?.username}
                    message={errors?.username?.message}
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      {...register("username")}
                      type="text"
                      placeholder="Enter your username"
                    />
                  </InputWrapper>
                </div>
                <div className="mb-4">
                  <InputWrapper
                    error={!!errors?.password}
                    message={errors?.password?.message}
                  >
                    <Form.Label className="d-flex justify-content-between">
                      Password <Link to="">Forgot password?</Link>
                    </Form.Label>
                    <Form.Control
                      {...register("password")}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </InputWrapper>
                </div>
                <Button type="submit" className="btn-sign">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-none d-lg-block">
          <img src={bg1} className="auth-img" alt="" />
        </Col>
      </Row>
    </div>
  );
};
export default Signin2;
