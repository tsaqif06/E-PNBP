import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import SEO from "../../components/SEO";
import InputWrapper from "../../components/InputWrapper";
import ReCAPTCHA from "react-google-recaptcha";
import "../../assets/css/login.css"; // Import CSS here

const RECAPTCHA_SITE_KEY = "6LdceBUqAAAAAKVabEGH7mAhufEqB0_KDIdvSwfL";

const validation = () => {
	return Yup.object().shape({
		username: Yup.string().required("Harap isikan email anda"),
		password: Yup.string().required("Harap isikan password anda"),
		recaptcha: Yup.string().required("Harap verifikasi CAPTCHA"),
	});
};

const Signin2 = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validation()),
		defaultValues: {
			username: "",
			password: "",
			recaptcha: "",
		},
	});

	const { mutateAsync } = useLogin();

	const onSubmit = async (values) => {
		try {
			const response = await mutateAsync(values);
			if (response.success) {
				navigate("/");
			} else {
				// toast(
				//  "Login failed. Please check your username and password.",
				//  "Error"
				// );
			}
		} catch (error) {
			// toast(error.message || "An error occurred", "Error");
		}
	};

	const handleRecaptcha = (value) => {
		setValue("recaptcha", value);
	};

	const isLoggedIn = localStorage.getItem("barantinToken");
	useEffect(() => {
		if (isLoggedIn) {
			navigate("/");
		}
	}, [isLoggedIn, navigate]);

	return (
		<div className="background-custom">
			<SEO title="Login" />
			<Row className="g-0" style={{ height: "100vh", width: "100%" }}>
				<Col md="6" className="left-col">
					<div className="p-4">
						<Col md="12">
							<div className="logo-header">
								<Image src="/keuangan.png" width={350} height={90} />
							</div>
						</Col>
						<Col md="12" style={{ marginLeft: "30px" }}>
							<div className="logo-header">
								<div className="mt-4">
									<h2 style={{ color: "#FFA500" }}>Persyaratan</h2>
									<h1 className="fw-bold" style={{ color: "#c9870e" }}>
										Pengunaan Layanan
									</h1>
								</div>
							</div>
						</Col>

						<div
							className="color-circles mt-4"
							style={{ display: "flex", gap: "24px", marginLeft: "30px" }}
						>
							<div
								className="color-circle-container"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<div
									className="color-circle"
									style={{
										backgroundColor: "#FFA500",
										width: "180px",
										height: "180px",
										borderRadius: "50%",
									}}
								></div>
								<span
									style={{
										marginTop: "30px",
										textAlign: "center",
										display: "block",
									}}
								>
									Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
									eiusmod tempor incididunt ut labore et
								</span>
							</div>
							<div
								className="color-circle-container"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<div
									className="color-circle"
									style={{
										backgroundColor: "#FF6347",
										width: "180px",
										height: "180px",
										borderRadius: "50%",
									}}
								></div>
								<span
									style={{
										marginTop: "30px",
										textAlign: "center",
										display: "block",
									}}
								>
									Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
									eiusmod tempor incididunt ut labore et
								</span>
							</div>
							<div
								className="color-circle-container"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<div
									className="color-circle"
									style={{
										backgroundColor: "#40E0D0",
										width: "180px",
										height: "180px",
										borderRadius: "50%",
									}}
								></div>
								<span
									style={{
										marginTop: "30px",
										textAlign: "center",
										display: "block",
									}}
								>
									Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
									eiusmod tempor incididunt ut labore et
								</span>
							</div>
							<div
								className="color-circle-container"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<div
									className="color-circle"
									style={{
										backgroundColor: "#4169E1",
										width: "180px",
										height: "180px",
										borderRadius: "50%",
									}}
								></div>
								<span
									style={{
										marginTop: "30px",
										textAlign: "center",
										display: "block",
									}}
								>
									Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
									eiusmod tempor incididunt ut labore et
								</span>
							</div>
						</div>

						<div style={{ marginLeft: "30px" }}>
							<p className="mt-3">Data yang diperlukan</p>
							<ol>
								<li>Lorem ipsum dolor sit amet</li>
								<li>Lorem ipsum dolor sit amet</li>
								<li>Lorem ipsum dolor sit amet</li>
								<li>Lorem ipsum dolor sit amet</li>
							</ol>
						</div>
					</div>
				</Col>

				<Col
					md="6"
					className="right-col d-flex align-items-center justify-content-center"
				>
					<Card className="card-sign w-75">
						<Card.Header
							className="text-center"
							style={{ marginLeft: "100px" }}
						>
							<Col md="12">
								<div className="logo-header">
									<Image src="/logo.png" width={150} height={150} />
									<div className="ml-3">
										<h1 className="fw-bold mt-5" style={{ color: "#c9870e" }}>
											BARANTIN
										</h1>
										<p className="text-center" style={{ color: "#FFA500" }}>
											Cepat, Mudah, Terintegrasi
										</p>
									</div>
								</div>
							</Col>
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
											autoComplete="off"
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
								<div className="mb-4">
									<InputWrapper
										error={!!errors?.recaptcha}
										message={errors?.recaptcha?.message}
									>
										<div className="recaptcha-container" style={{ width: "100%" }}>
											<ReCAPTCHA
												sitekey={RECAPTCHA_SITE_KEY}
												onChange={handleRecaptcha}
											/>
										</div>
									</InputWrapper>
								</div>
								<Button type="submit" className="btn-sign w-100">
									Sign In
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Signin2;
