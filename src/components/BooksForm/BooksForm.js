import React from "react";

const BooksForm = ({ onAdd, setName, setAuthor, name, author, enabled }) => {
	return (
		<React.Fragment>
			<section className='adding adding--wrapper'>
				<form className='form adding__form' onSubmit={onAdd}>
					<img
						className='form__image'
						src='https://source.unsplash.com/1600x900/?reading'
						alt='iamge'
					/>
					<label className='form__label' for='name'>
						Название книги
					</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='form__name'
						name='name'
						placeholder='Введите название книги'
						type='text'
					/>
					<label className='form__label' for='name'>
						Автор книги
					</label>
					<input
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
						className='form__name'
						name='name'
						placeholder='Введите автора книги'
						type='text'
					/>
					<button className='form__button' disabled={!enabled}>
						Добавить книгу
					</button>
				</form>
			</section>
		</React.Fragment>
	);
};

export default BooksForm;
