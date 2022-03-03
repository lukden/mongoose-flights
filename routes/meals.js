import { Router } from 'express'
import * as mealsCtrl from '../controllers/meal.js'

const router = Router()

router.get('/new', mealsCtrl.new)
router.post('/', mealsCtrl.create)

export {
  router
}