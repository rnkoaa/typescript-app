import { User } from "./index";

export class UserService {
  private readonly userData: User[];
  private readonly userDataMap: Map<number, User | null>;

  constructor(_userData: User[]) {
    this.userData = _userData;
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
    if (!found) { // cuz it could be undefined
      return null;
    }
    return found;
  }
}
