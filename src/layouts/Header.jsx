import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import userAvatar from "../assets/img/img1.jpg";
import { Image, Button } from "react-bootstrap";
import { dashboardMenu } from "../data/Menu";

const Header = (args, { onSkin }) => {
	const CustomToggle = React.forwardRef(function ({ children, onClick }, ref) {
		return (
			<Link
				to=""
				ref={ref}
				onClick={(e) => {
					e.preventDefault();
					onClick(e);
				}}
				className="dropdown-link"
			>
				{children}
			</Link>
		);
	});

	const navigate = useNavigate();
	const logout = () => {
		localStorage.clear();
		navigate("/login");
	};
	const { pathname } = useLocation();
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<div
			style={{
				width: "100%",
			}}
		>
			{/* Bagian atas header */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "10px 20px",
				}}
			>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Image src="/logo.png" width={50} height={50} />
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
						}}
					>
						<h5 style={{ fontWeight: "bold", margin: 0 }}>PNBP</h5>
						<h5 style={{ fontWeight: "bold", margin: 0 }}>Barantin</h5>
					</div>
					<div className="vr my-2 m-2"></div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
						}}
					>
						<h5 style={{ margin: 0 }}>UPT Induk</h5>
						<h6 style={{ margin: 0 }}>
							Balai Besar Uji Standar Karantina Hewan
						</h6>
					</div>
				</div>
				<Dropdown align="end">
					<Dropdown.Toggle as={CustomToggle}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<h5 onClick={logout} style={{ margin: 0, marginRight: "30px", color: "black" }}>
								LogOut
							</h5>
							<div
								style={{
									borderRadius: "50%",
									overflow: "hidden",
									width: "40px",
									height: "40px",
								}}
							>
								<img
									src={userAvatar}
									alt="User Avatar"
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
						</div>
					</Dropdown.Toggle>
					<Dropdown.Menu style={{ marginTop: "10px", textAlign: "center" }}>
						<div style={{ textAlign: "center" }}>
							<div
								style={{
									borderRadius: "50%",
									overflow: "hidden",
									marginBottom: "10px",
									width: "60px",
									margin: "0 auto",
								}}
							>
								<img
									src={userAvatar}
									alt=""
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
							<h5
								style={{
									marginBottom: "10px",
									color: "#000",
									fontWeight: "600",
								}}
							>
								{user?.name}
							</h5>
							<p style={{ fontSize: "14px", color: "#6c757d" }}>
								{user?.upt ?? "-"}
							</p>
							<hr />
							<nav style={{ display: "flex", flexDirection: "column" }}>
								<Link to="/profile" style={{ marginBottom: "10px" }}>
									<i className="ri-user-settings-line"></i> Account Settings
								</Link>
								<Button
									onClick={() => logout()}
									style={{ display: "block", width: "100%" }}
								>
									<i className="ri-logout-box-r-line"></i> Log Out
								</Button>
							</nav>
						</div>
					</Dropdown.Menu>
				</Dropdown>
			</div>

			{/* Bagian bawah header */}
			<div style={{ marginLeft: "10px", marginTop: "10px" }}>
				{dashboardMenu?.map((item, idx) => {
					const active = pathname === item.link ? "#ffc107" : "#000";
					return (
						<Link
							key={idx}
							to={item?.link}
							style={{
								padding: "10px 20px",
								textDecoration: "none",
								color: active,
								fontWeight: "bold",
							}}
						>
							{item?.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
