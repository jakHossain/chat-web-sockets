import type { UserType } from "src/types/users";
import users from "$data/users.json";
import User from "$models/User";

export const loadUsers = (): UserType[] => {
  const userList: UserType[] = [];

  users.forEach((u) => {
    const newUser = new User(
      u.id,
      u.name,
      u.username,
      u.chatListIds,
      u.friendIds
    );
    userList.push(newUser);
  });

  console.log(userList);
  return userList;
};

export const loadChatThreads = () => {};
