import express from 'express';
import { NoteService } from './services/note.service';

module.exports = (app) => {
  let router = express.Router();

  router.get('/bulk/stock/stats', NoteService.query);

  app.use('/v1', router);
};
