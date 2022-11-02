

import { Post } from "../users";

export class PostService {
  private readonly postData: Post[];
  private readonly postDataMap: Map<number, Post | null>;

  constructor(_postData: Post[]) {
    this.postData = _postData;
    this.postDataMap = new Map(
      _postData.map((obj) => {
        return [obj.id, obj];
      })
    );
  }

  findAll(): Post[] {
    return this.postData;
  }

  findById(id: number): Post | null {
    const found = this.postDataMap.get(id);
    if (!found) {
      // cuz it could be undefined
      return null;
    }
    return found;
  }
}
