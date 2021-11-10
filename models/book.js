import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
	title: String,
	read: Boolean,
})

const Book = mongoose.model('book', bookSchema)

export { Book }
