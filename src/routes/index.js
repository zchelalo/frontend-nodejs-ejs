import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Primer sitio web con Node' }))
router.get('/about', (req, res) => res.render('about', { title: 'Sobre mí' }))
router.get('/contacto', (req, res) => res.render('contacto', { title: 'Página de contacto' }))

export default router