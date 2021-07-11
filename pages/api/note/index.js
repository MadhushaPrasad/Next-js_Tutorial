import nc from 'next-connect';

import notes from '../../../src/data/data';

const handler = nc()
  .get((req, res) => {
    res.json({ data: notes });
  })

  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    };

    notes.push(note);
    res.json({ data: notes });
  });

export default handler;
