import { Db } from "../db";
import { describe, expect, test } from "@jest/globals";
import { Address } from "./index";

describe("can pull data from users", () => {
  test("load all users from database", async () => {
    const db = new Db();
    await db.onLoad();
    expect(db.users!.findAll().length).toEqual(10);
  });

  test("when user does not exist, the result is a null object", async () => {
    const db = new Db();
    await db.onLoad();

    const user = db.users!.findById(1000);
    expect(user).toBeNull();
  });

  test("load a single user that exist from database", async () => {
    const db = new Db();
    await db.onLoad();
    const expectedAddress: Address = {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    };
    const user = db.users!.findById(1);
    expect(user).not.toBeNull(); // ensure we found the user
    expect(user?.id).toEqual(1);
    expect(user?.name).toEqual("Leanne Graham");
    expect(user?.email).toEqual("Sincere@april.biz");
    expect(user?.address).not.toBeNull();
    expect(user?.address).toEqual(expectedAddress);
  });

  test("when a user exists, the user albums for the user can be found", async () => {
    const db = new Db();
    await db.onLoad();

    const albums = db.users!.findAlbums(1); // find all albums for user 1
    expect(albums).not.toBeNull();
    expect(albums.length).toEqual(10);
  });

  test("when a user exists, the user posts for the user can be found", async () => {
    const db = new Db();
    await db.onLoad();

    const posts = db.users!.findPosts(1); // find all albums for user 1
    expect(posts).not.toBeNull();
    expect(posts.length).toEqual(10);
  });

  test("when a user exists, the user todos for the user can be found", async () => {
    const db = new Db();
    await db.onLoad();

    const todos = db.users!.findTodos(1); // find all albums for user 1
    expect(todos).not.toBeNull();
    expect(todos.length).toEqual(20);
  });
});
