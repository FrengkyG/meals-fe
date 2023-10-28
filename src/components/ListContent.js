import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

const ListContent = () => {
	const [meals, setMeals] = useState([]);
	const [, updateState] = useState();

	let favMealsLS = [];
	if (localStorage.getItem('favMeals')) {
		favMealsLS = localStorage.getItem('favMeals').split(',');
	}

	useEffect(() => {
		if (localStorage.getItem('userToken')) {
			axios
				.get(`${process.env.REACT_APP_BASE_API_URL}/meals`, {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('userToken')
					}
				})
				.then((res) => {
					setMeals(res.data.result);
				})
				.catch((error) => {
					setMeals([]);
				});
		}
	}, []);

	const handleFav = (mealsId) => {
		favMealsLS.push(mealsId);
		localStorage.setItem('favMeals', favMealsLS);
		updateState({});
	};

	const handleUnFav = (mealsId) => {
		favMealsLS = favMealsLS.filter((meal) => meal !== mealsId.toString());
		console.log('🚀 ~ file: ListContent.js:35 ~ handleUnFav ~ favMealsLS:', favMealsLS);
		localStorage.setItem('favMeals', favMealsLS);
		updateState({});
	};

	return (
		<>
			<h1 className="card search-title">Meals List</h1>
			<div className="content-search-items" id="searchItemsList">
				{meals.length > 0 ? (
					meals.map((meal) => {
						return (
							<div className="card item" key={meal.id}>
								<img src={meal.image_url} alt="" />
								<p>{meal.name}</p>
								{favMealsLS.includes(meal.id.toString()) ? (
									<button
										onClick={() => handleUnFav(meal.id)}
										className="pink-button-sm"
									>
										<BsHeartFill />
									</button>
								) : (
									<button
										onClick={() => handleFav(meal.id)}
										className="green-button-sm"
									>
										<BsHeart />
									</button>
								)}
							</div>
						);
					})
				) : (
					<p className="text-error">Tidak ada data Meals / Anda belum login</p>
				)}
			</div>
		</>
	);
};

export default ListContent;
