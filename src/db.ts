// import path from "path";
import { promises as fs } from 'fs';
import { UserService } from "./users/user-service";
import { Album, Todo, User, Post, Photo, Comment } from "./users";
import path from "path";
import { AlbumService } from './albums/album-service';
import { CommentService } from './comments/comment-service';
import { PhotoService } from './photos/photo-service';
import { TodoService } from './todos/todo-service';
import { PostService } from './posts/post-service';

export class Db {
  users?: UserService 
  albums?: AlbumService
  comments?: CommentService
  photos?: PhotoService
  posts?: PostService
  todos?: TodoService

  constructor() { }

  async onLoad(): Promise<void> {
    const userData: User[] = await this._loadData<User>("users");
    const albumData: Album[] = await this._loadData<Album>("albums");
    const todoData: Todo[] = await this._loadData<Todo>("todos");
    const postData: Post[] = await this._loadData<Post>("posts");
    const commentData: Comment[] = await this._loadData<Comment>("comments");
    const photoData: Photo[] = await this._loadData<Photo>("photos");
    this.comments = new CommentService(commentData)
    this.photos = new PhotoService(photoData)
    this.albums = new AlbumService(albumData, this.photos!)
    this.posts = new PostService(postData, this.comments!)
    this.todos = new TodoService(todoData)
    this.users = new UserService(userData, this.albums!, this.posts!, this.todos!)
  }

  private async _loadData<T>(context: string): Promise<T[]> {
    const jsonDirectory = path.join(process.cwd(), "db");
    const fileContents = await fs.readFile(
      jsonDirectory + `/${context}.json`,
      "utf8"
    );
    return <T[]>JSON.parse(fileContents)
  }
}

// return new Promise((resolve, reject) => {
//      fs.readFile(file, (err, res) => {
//          if (err) return reject(err);
//          return resolve(res)
//      })
//  })

// export function async jsonFile<Type>(context: string): Promist < Type[] > {
//   const jsonDirectory = path.join(process.cwd(), "data");
//   return <Type[]> JSON.parse(fileContents);
// }
// export const jsonFile<T> = async (context: string): Promise<T[]> => {
//   const jsonDirectory = path.join(process.cwd(), "data");
//   const fileContents = await fs.readFile(
//     jsonDirectory + `/${context}.json`,
//     "utf8"
//   );
//   return <T[]>JSON.parse(fileContents);
// };
