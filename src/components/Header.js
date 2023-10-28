import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState();

	useEffect(() => {
		if (localStorage.getItem('userToken')) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	return (
		<div className="container">
			{console.log(isLoggedIn)}
			<ul className="navbar">
				<li>
					<h1>Food Available</h1>
				</li>
				<li>
					{isLoggedIn ? (
						<div className="container-login">
							<button
								className="red-button"
								onClick={() => {
									localStorage.removeItem('userToken');
									setIsLoggedIn(false);
									window.location.reload();
								}}
							>
								Logout
							</button>
						</div>
					) : (
						<div className="container-login">
							<button
								className="green-button"
								onClick={() => {
									navigate('/login');
								}}
							>
								Login
							</button>
						</div>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Header;
