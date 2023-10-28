import React from 'react';
import imgHeader from '../assets/images/img-header.jpg';
import vegetable from '../assets/images/vegetable.jpg';
import soup from '../assets/images/soup.jpg';

const HeaderMenu = () => {
	return (
		<>
			<div className="content-header">
				<img src={imgHeader} width="60%" height="100%" alt="" />
				<div className="content-sub-header">
					<div className="container-image">
						<img src={vegetable} width="100%" height="100%" alt="" />
						<div className="image-text-center">Vegetable</div>
					</div>
					<div className="container-image">
						<img src={soup} width="100%" height="100%" alt="" />
						<div className="image-text-center">Soup</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderMenu;
