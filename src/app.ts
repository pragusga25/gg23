import express from 'express';
import { errorMiddleware } from './shared/middlewares';

import { API_PREFIX } from './shared/constants';
import { playlistRouters } from './playlists';

const app = express();
const routers = [...playlistRouters];

app.use(express.json());
app.use(API_PREFIX, routers);

app.use(errorMiddleware);
export { app };
