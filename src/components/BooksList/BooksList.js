import React from "react";

const BooksList = ({ list, onDelete }) => {
	return (
		<React.Fragment>
			<section className='books books--wrapper'>
				{list.map((inner, index) => (
					<div key={inner.id} className='inner books__inner'>
						<ul className='list inner__list'>
							<li className='list__item'>
								<b>Книга №:</b> {index + 1}
							</li>
							<li className='list__item'>
								<b>Название</b>
								<br /> {inner.name}
							</li>
							<li className='list__item'>
								<b>Автор</b>
								<br /> {inner.author}
							</li>
						</ul>
						<div className='button inner__buttons'>
							<button
								className='button__delete'
								onClick={() => onDelete(inner.id)}>
								Удалить
							</button>
						</div>
					</div>
				))}
			</section>
		</React.Fragment>
	);
};

export default BooksList;
