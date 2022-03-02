import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flight.js'


/* GET users listing. */

router.get('/new', flightsCtrl.new)

router.get('/', flightsCtrl.index)

router.post('/', flightsCtrl.create)




export {
  router
}
