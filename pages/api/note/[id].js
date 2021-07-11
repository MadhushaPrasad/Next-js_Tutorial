import nc from 'next-connect';
import notes from '../../../src/data/data';

const getNote = (id) => notes.find((n) => n.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404).send('Not Found');
      res.end();
      return;
    }

    res.json({ data: notes });
  })

  .patch((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404).send('Not Found');
      res.end();
      return;
    }

    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    const updatedNote = { ...notes, ...req.body };

    notes[i] = updatedNote;
    res.json({ data: updatedNote });
  })

  .delete((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404).send('Not Found');
      res.end();
      return;
    }

    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    notes.splice(i, 1);
    res.json({ data: req.query.id });
  });

export default handler;
