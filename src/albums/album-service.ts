import { Album } from "../users";

export class AlbumService {

  private readonly albumData: Album[]
  private readonly albumDataMap: Map<number, Album | null>;

  constructor(_albumData: Album[]) {
    this.albumData = _albumData;
    this.albumDataMap = new Map(
      _albumData.map((obj) => {
        return [obj.id, obj];
      })
    );
  }

  findAll(): Album[] {
    return this.albumData;
  }

  findById(id: number): Album | null {
    const found = this.albumDataMap.get(id);
    if (!found) {
      // cuz it could be undefined
      return null;
    }
    return found;
  }
}
