import React, { useState } from "react";
import { initialData } from "../API/api";
import BooksList from "../BooksList/BooksList";
import BooksForm from "../BooksForm/BooksForm";
import { v4 as uuidv4 } from "uuid";
import Search from "../SearchBooks/Search";

const Books = () => {
	const [list, setList] = useState(initialData);

	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const [search, setSearch] = useState("");
	// const [newList, setNewList] = useState("");
	const clearInputs = () => {
		setName("");
		setAuthor("");
	};

	const total = list.length;
	const enabled = name.length > 0 && author.length > 0;

	const filteredList = list.filter((inner) =>
		inner.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
	);

	const handleOnAdd = (event) => {
		event.preventDefault();
		setList((prev) => [...prev, { name: name, author: author, id: uuidv4() }]);

		alert(`Книга ${name} успешно удалена!`);
		clearInputs();
	};

	const handleOnDelete = (id) => {
		let shouldRemove = window.confirm(
			`Вы действительно хотите удалить книгу, идентификатор которой является: ${id} ?`
		);
		if (shouldRemove) {
			const remove = list.filter((inner) => inner.id !== id);
			setList(remove);
			alert(`Книга, идентификатор которой является: ${id} успешно удалена!`);
		}
	};

	return (
		<React.Fragment>
			<BooksForm
				onAdd={handleOnAdd}
				name={name}
				author={author}
				setName={setName}
				setAuthor={setAuthor}
				enabled={enabled}
			/>
			<Search search={search} setSearch={setSearch} />
			<BooksList list={filteredList} onDelete={handleOnDelete} />
		</React.Fragment>
	);
};

export default Books;
