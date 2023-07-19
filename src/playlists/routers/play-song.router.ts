import express, { NextFunction, Request, Response } from 'express';
import { PlaySongQueryDto } from '../dtos';
import { queryValidationMiddleware } from '../../shared/middlewares';
import { playSongHandler } from '../handlers';

const playSongRouter = express.Router();

playSongRouter.get(
  '/playlists.play-song',
  queryValidationMiddleware(PlaySongQueryDto),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query as unknown as PlaySongQueryDto;
      const result = playSongHandler(query);
      res.status(200).send({
        ok: true,
        ...result,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { playSongRouter };
