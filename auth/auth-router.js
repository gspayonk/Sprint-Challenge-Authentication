const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model');
const validateUser = require('./auth-helpers');


router.post('/register', (req, res) => {
  // implement registration
  const user = req.body;
  const result = validateUser(user);

  if (result.isSuccessful) {
    const hash = bcrypt.hashSync(user.password, 6);

    user.password = hash;
    Users.register(user)
      .then(user => {
        const { id, username } = user;
        res.status(200).json({ id, username });
      })
      .catch(() => {
        res.status(500).json({ message: 'server error' });
      });
  } else {
    res.status(400).json({
      message: 'error with credentials entered',
      error: result.errors
    });
  }
});

router.post('/login', (req, res) => {
  // implement login
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwt(user.id);
        console.log(token);
        res.status(200).json({
          message: 'Hello',
          token
        });
      } else {
        res.status(401).json({ message: 'shall not pass' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'server error' });
    });
});

function getJwt(id) {
  const payload = {
    id
  };

  const options = {
    expiresIn: '1d'
  };

  const secret = 'keep it secret, keep it safe';
  return jwt.sign(payload, secret, options);
}

module.exports = router;
