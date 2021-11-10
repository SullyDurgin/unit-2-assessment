import { Book } from '../models/book.js'

function index(req, res) {
	Book.find({})
  .then(books => {
		res.render('books/index', {
			books
		})
	})
}

function newBook(req, res) {
	res.render('books/new')
}

function create(req, res) {
	req.body.read = !!req.body.read
	Book.create(req.body).then(() => {
		res.redirect('/books')
	})
}


function show(req, res) {
	Book.findById(req.params.id).then((book) => {
		res.render('/books', {
			book,
		})
	})
}

function deleteBook(req, res) {
	Book.findByIdAndDelete(req.params.id).then(() => {
		res.redirect('/books')
	})
}

export { index, newBook as new, create, show, deleteBook as delete }