import express, { NextFunction, Request, Response } from 'express';
import { listSongHandler } from '../handlers';
import { queryValidationMiddleware } from '../../shared/middlewares';
import { ListSongQueryDto } from '../dtos';

const listSongRouter = express.Router();

listSongRouter.get(
  '/playlists.list-song',
  queryValidationMiddleware(ListSongQueryDto),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = listSongHandler(req.query);
      res.status(200).send({
        ok: true,
        ...result,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { listSongRouter };
