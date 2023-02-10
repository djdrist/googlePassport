const express = require('express');
const isLogged = require('../middlewares/isLogged');
const router = express.Router();

router.get('/logged', isLogged, (req, res) => {
	res.render('logged', { name: req.user.displayName, photo: req.user.photos[0].value });
});
router.get('/profile', isLogged, (req, res) => {
	res.render('profile');
});
router.get('/profile/settings', isLogged, (req, res) => {
	res.render('profileSettings');
});

router.get('/no-permission', (req, res) => {
	res.render('noPermission');
});

module.exports = router;
