import { OrderBy } from '../constants';

type SongData = {
  id: string;
  title: string;
  artists: string[];
  url: string;
  playCount: number;
};

type SongDataCreated = Omit<SongData, 'id' | 'playCount'>;

type ListParams = {
  orderBy?: OrderBy;
};

export class Song {
  private id: string;
  private title: string;
  private artists: string[];
  private url: string;
  private playCount: number;

  constructor({ artists, title, url }: SongDataCreated) {
    this.id = Date.now().toString();
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.playCount = 0;
  }

  incrementPlayCount() {
    this.playCount += 1;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getArtists() {
    return this.artists;
  }

  getUrl() {
    return this.url;
  }

  getPlayCount() {
    return this.playCount;
  }
}

class Playlist {
  private theSongs: Song[] = [];

  constructor() {}

  listSongs(params?: ListParams) {
    if (params?.orderBy) {
      return this.listSortedSongs(params.orderBy);
    }
    return this.theSongs;
  }

  listSortedSongs(orderBy?: OrderBy) {
    if (orderBy === OrderBy.PLAY_COUNT_ASC) {
      return this.theSongs.sort((a, b) => a.getPlayCount() - b.getPlayCount());
    }

    return this.theSongs.sort((a, b) => b.getPlayCount() - a.getPlayCount());
  }

  addSong(song: Song) {
    this.theSongs.push(song);
  }

  getSongById(id: string) {
    const song = this.theSongs.find((song) => song.getId() === id);
    return song;
  }
}

export const myPlaylist = new Playlist();
