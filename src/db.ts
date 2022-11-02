// import path from "path";
import { promises as fs } from 'fs';
import { UserService } from "./users/user-service";
import { User } from "./users";
import path from "path";

export class Db {
  users?: UserService 

  constructor() { }

  async onLoad(): Promise<void> {
    const userData: User[] = await this._loadData<User>("users");
    this.users = new UserService(userData)
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
