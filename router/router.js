const entry = require('../controllers/entry');
const auth = require('../controllers/auth');
const passportService = require('../services/passport');
const passport = require('passport');

// NOTES
/*
  READ-ONLY unless auth'd
  middleware intercepts req & connects to router
  incoming req --> requireAuth --> route
  intercept incoming req, verify if auth'd, if auth'd connect to route
*/

// use JwtStrategy
const requireAuth = passport.authenticate('jwt', {session: false});
// use LocalStrategy
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function router (app) {
  // READ-ONLY
  app.get('/', entry.getAllEntries);
  app.get('/entry/id/:_id', entry.getEntryById);
  app.get('/user/:_author', entry.getEntryByAuthor);
  // CRUD
  app.post('/entry', requireAuth, entry.addEntry);
  app.put('/entry/:_id', requireAuth, entry.updateEntryById);
  app.delete('/entry/:_id', requireAuth, entry.deleteEntryById);
  // AUTH
  app.post('/signin', requireSignin, auth.signin);
  app.post('/signup', auth.signup);
};
