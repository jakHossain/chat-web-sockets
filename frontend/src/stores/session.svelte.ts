import type { UserType } from "src/types/users";

let currentUser: UserType | null = $state(null);

const login = (username: string, password: string) => {
  //Todo send to server
  //server returns login state
  //if valid login, server sends signed JWT and user data to store in
  //for now, just set user to
};
