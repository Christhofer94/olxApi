const express = require('express')
const router = express.Router();

const Auth = require('../src/middlewares/Auth')

const AuthController = require ('./controllers/AuthController')
const UserController = require ('./controllers/UserController')
const AdsController = require ('./controllers/AdsController')

router.get('/ping', (req, res) => {
  res.json({pong: true});
});

router.get('/states', UserController.getStates);

router.post('/user/signin', AuthController.signin);
router.post('/user/signup', AuthController.signup);

router.get('/user/me', Auth.private, UserController.info);
router.put('/user/me', Auth.private, UserController.editAction);

router.get('/categories', AdsController.getCAtegories);

router.post('/ad/add', Auth.private, AdsController.AddAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', Auth.private, AdsController.editAction);


module.exports = router;