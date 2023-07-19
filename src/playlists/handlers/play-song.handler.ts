import { HttpError } from '../../shared/errors';
import { PlaySongQueryDto } from '../dtos';
import { myPlaylist } from '../models';

export const playSongHandler = ({ id }: PlaySongQueryDto) => {
  const song = myPlaylist.getSongById(id);

  if (!song) throw new HttpError(404, 'playlists/song-not-found');
  song.incrementPlayCount();

  return { data: song };
};
