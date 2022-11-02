import * as dotenv from "dotenv";
import { Db } from "./db";

export default function main() {
  dotenv.config();
}
class Hello {
  _db: Db;
  constructor() {
    this._db = new Db();
  }

  async main(): Promise<void> {
    await this._db.onLoad();
    const users = this._db.users?.findById(1);
    console.log(`Users => ${JSON.stringify(users)}`);
  }
}

(async () => {
  await new Hello().main();
})();
