import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [errorMsg, setErrorMsg] = useState('');

	const handleLogin = async (event) => {
		event.preventDefault();
		setErrorMsg('');

		const userData = {
			email: event.target.email.value,
			password: event.target.password.value
		};
		axios
			.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, { ...userData })
			.then((res) => {
				localStorage.setItem('userToken', res.data.result.token);
				navigate('/');
			})
			.catch((error) => {
				setErrorMsg('Email/Password Anda Salah!');
			});
	};

	return (
		<div className="form login-form">
			<form onSubmit={handleLogin}>
				<h1>Login</h1>
				<div className="input-container">
					<label>
						E-Mail <br />
					</label>
					<input className="rounded-input box-shadow" type="text" name="email" required />
				</div>
				<div className="input-container">
					<label>
						Password <br />
					</label>
					<input
						className="rounded-input box-shadow"
						type="password"
						name="password"
						required
					/>
				</div>
				<div className="button-container">
					<input className="rounded-button" type="submit" />
				</div>
				<div className="text-error">{errorMsg ?? <p>{errorMsg}</p>}</div>
			</form>
		</div>
	);
};

export default Login;
