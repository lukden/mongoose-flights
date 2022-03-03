import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flight.js'


/* GET users listing. */

router.get('/new', flightsCtrl.new)

router.get('/', flightsCtrl.index)

router.get('/:id', flightsCtrl.show)

router.post('/', flightsCtrl.create)

router.delete("/:id", flightsCtrl.delete)

router.get("/:id/edit", flightsCtrl.edit)

router.put("/:id", flightsCtrl.update)

router.post('/:id/tickets', flightsCtrl.createTicket)



export {
  router
}
