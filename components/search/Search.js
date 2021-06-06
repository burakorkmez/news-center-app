import classes from './Search.module.css';
import { country_list } from '../../search-options/hard-coded-countries';
import { categories } from '../../search-options/categories';
import { useState } from 'react';

const Search = ({ onFormSubmit }) => {
	const [country, setCountry] = useState('tr');
	const [category, setCategory] = useState('sports');

	const submitHandler = (e) => {
		e.preventDefault();

		onFormSubmit(country, category);
	};

	const handleChangeForCountry = (e) => {
		setCountry(e.target.value);
	};

	const handleChangeForCategory = (e) => {
		setCategory(e.target.value);
	};

	return (
		<div className="container">
			<form className={`flex ${classes.form}`} onSubmit={submitHandler}>
				<div className={`mr-3 `}>
					<label className={`${classes.label}`} htmlFor="countries">
						COUNTRY:{' '}
					</label>
					<select
						className={` ${classes.select}`}
						id="countries"
						name="country_list"
						onChange={handleChangeForCountry}
						value={country}
					>
						{country_list.map((country) => (
							<option value={country.code.toLowerCase()}>{country.name}</option>
						))}
					</select>
				</div>
				<div className={`mr-2 `}>
					<label className={`${classes.label}`} htmlFor="categories">
						CATEGORY:{' '}
					</label>
					<select
						className={` ${classes.select}`}
						id="categories"
						name="category_list"
						value={category}
						onChange={handleChangeForCategory}
					>
						{categories.map((category) => (
							<option value={category.toLowerCase()}>{category}</option>
						))}
					</select>
				</div>
				<button className={classes.search__button}>search</button>
			</form>
		</div>
	);
};

export default Search;
