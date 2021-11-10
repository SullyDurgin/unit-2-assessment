import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
	title: String,
	read: {
    type: Boolean,
    required: true,
    default: false
  }
})

const Book = mongoose.model('Book', bookSchema)

export { Book }
