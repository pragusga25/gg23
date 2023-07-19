import { AddSongBodyDto } from '../dtos';
import { Song, myPlaylist } from '../models';

export const addSongHandler = (data: AddSongBodyDto) => {
  const song = new Song(data);
  myPlaylist.addSong(song);

  return { data: { id: song.getId() } };
};
