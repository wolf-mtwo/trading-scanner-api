import express from 'express';
import { NoteService } from './services/note.service';

module.exports = (app) => {
  let router = express.Router();

  router.get('/notes', NoteService.query);
  router.get(
    '/notes/page/:page/limit/:limit', NoteService.pagination
  );
  router.post('/notes', NoteService.create);
  router.route('/notes/:note_id')
  .get(NoteService.show)
  .put(NoteService.update)
  .delete(NoteService.remove);
  router.param('page', NoteService.page);
  router.param('limit', NoteService.limit);
  router.param('note_id', NoteService.load);

  app.use('/v1', router);
};
