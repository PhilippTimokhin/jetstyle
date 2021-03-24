import React from "react";

const Search = ({ search, setSearch }) => {
	return (
		<React.Fragment>
			<section className='search search--wrapper'>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					type='text'
					className='search__input'
					placeholder='Введите текст для поиска ...'
				/>
			</section>
		</React.Fragment>
	);
};

export default Search;
