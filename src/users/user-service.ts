import { AlbumService } from "../albums/album-service";
import { PostService } from "../posts/post-service";
import { TodoService } from "../todos/todo-service";
import { Album, Post, User, Todo } from "./index";

export class UserService {
    private readonly userData: User[];
    private readonly albumService: AlbumService;
    private readonly postService: PostService;
    private readonly todoService: TodoService;
    private readonly userDataMap: Map<number, User | null>;

    constructor(_userData: User[], _albumService: AlbumService, _postService: PostService, _todoService: TodoService) {
        this.userData = _userData;
        this.albumService = _albumService;
        this.postService = _postService;
        this.todoService = _todoService;
        this.userDataMap = new Map(
            this.userData.map((obj) => {
                return [obj.id, obj];
            })
        );
    }

    findAll(): User[] {
        return this.userData;
    }

    findById(id: number): User | null {
        const found = this.userDataMap.get(id);
        if (!found) {
            // cuz it could be undefined
            return null;
        }
        return found;
    }

    findTodos(id: number): Todo[] {
        return this.todoService.findByUser(id);
    }

    findAlbums(id: number): Album[] {
        return this.albumService.findByUser(id);
    }

    findPosts(id: number): Post[] {
        return this.postService.findByUser(id);
    }
}
