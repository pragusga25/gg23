import express, { NextFunction, Request, Response } from 'express';
import { AddSongBodyDto } from '../dtos';
import { bodyValidationMiddleware } from '../../shared/middlewares';
import { addSongHandler } from '../handlers';

const addSongRouter = express.Router();

addSongRouter.post(
  '/playlists.add-song',
  bodyValidationMiddleware(AddSongBodyDto),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = addSongHandler(req.body);
      res.status(200).send({
        ok: true,
        ...result,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { addSongRouter };
