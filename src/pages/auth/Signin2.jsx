import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BarantinaLogo from "../../assets/img/1.png"; // Correct path
import BackgroundImage from "../../assets/img/12.jpg"; // Correct path
import KemenkeuLogo from "../../assets/img/3.png"; // Correct path
import InputWrapper from "../../components/InputWrapper";
import SEO from "../../components/SEO";
import { useLogin } from "../../hooks/useAuth";

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
				// Handle login failure
			}
		} catch (error) {
			// Handle error
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
				<Col md={4} className="d-flex align-items-center justify-content-center">
					<Card className="w-95" style={{ backgroundColor: 'white' , width:'400px', marginTop:'20px'}}> {/* Background color for the entire card */}
						<Card.Header className="text-center" style={{ backgroundColor: 'white', color: 'white', borderBottom: 'none' , height:'200px'}}>
							{/* No border between header and body */}
							<div className="d-flex mb-3" style={{ marginLeft: "60px", marginBottom: "8px" }}>
								<Image src={BarantinaLogo} width={100} height={100} className="me-3" />
								<Image src={KemenkeuLogo} width={150} height={100} />
							</div>
							<h1 className="fw-bold mt-3" style={{ color: "#c9870e", marginTop: "8px" }}>E-PNBP</h1>
							<p style={{ color: "#c9870e", marginTop: "8px" }}>Cepat, Mudah, Terintegrasi</p>

						</Card.Header>
						<Card.Body style={{ backgroundColor: 'white' }}> {/* Same background color as header */}
							<Form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-3">
									<InputWrapper error={!!errors?.username} message={errors?.username?.message}>
										<Form.Label>Username</Form.Label>
										<Form.Control
											{...register("username")}
											type="text"
											placeholder="Enter your username"
											autoComplete="off"
											style={{ height: "calc(2.5em + 2px)" }} // Adjust height as needed
										/>
									</InputWrapper>
								</div>
								<div className="mb-3">
									<InputWrapper error={!!errors?.password} message={errors?.password?.message}>
										<Form.Label>Password</Form.Label>
										<Form.Control
											{...register("password")}
											type="password"
											placeholder="Enter your password"
											style={{ height: "calc(2.5em + 2px)" }} // Adjust height as needed
										/>
									</InputWrapper>
								</div>
								<div className="mb-3">
									<InputWrapper error={!!errors?.recaptcha} message={errors?.recaptcha?.message}>
										<div className="recaptcha-container" style={{ width: "100%", height: "78px" }}> {/* Set height to match CAPTCHA */}
											<ReCAPTCHA
												sitekey={RECAPTCHA_SITE_KEY}
												onChange={handleRecaptcha}
												size="normal"
											/>
										</div>
									</InputWrapper>
								</div>
								<Button type="submit" className="w-100" style={{ height: "calc(2.5em + 2px)" }}>Sign In</Button> {/* Adjust button height */}
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col md={8} style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }} />
			</Row>
		</div>
	);
};

export default Signin2;
