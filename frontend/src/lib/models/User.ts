import type { UserType } from "src/types/users";

class User implements UserType {
  #id;
  #name;
  #username;
  #chatListIds;
  #friendIds;

  constructor(
    id: string,
    name: string,
    username: string,
    chatListIds: string[],
    friendIds: string[]
  ) {
    this.#id = id;
    this.#name = name;
    this.#username = username;
    this.#chatListIds = new Set(chatListIds);
    this.#friendIds = new Set(friendIds);
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get username() {
    return this.#username;
  }

  get chatListIds() {
    return new Set(...this.#chatListIds);
  }

  get friendIds() {
    return new Set(...this.#friendIds);
  }

  updateUsername(newName: string): void {
    this.#username = newName;
  }

  checkIfFriend(userId: string): boolean {
    return this.#friendIds.has(userId);
  }
}

export default User;
