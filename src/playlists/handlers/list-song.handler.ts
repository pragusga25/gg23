import { ListSongQueryDto } from '../dtos';
import { myPlaylist } from '../models';

export const listSongHandler = (query: ListSongQueryDto) => {
  const data = myPlaylist
    .listSongs({
      orderBy: query.orderBy,
    })
    .map((song) => ({
      id: song.getId(),
      title: song.getTitle(),
      artists: song.getArtists(),
      url: song.getUrl(),
      playCount: song.getPlayCount(),
    }));

  return { data };
};
