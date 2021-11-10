import { Router } from 'express'
import * as bookCtrl from '../controllers/books.js'

const router = Router()

router.get('/', bookCtrl.index)
router.get('/new', bookCtrl.new)
router.get('/:id', bookCtrl.show)
router.post('/', bookCtrl.create)
router.delete('/:id', bookCtrl.delete)

export { router }
