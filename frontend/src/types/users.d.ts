export interface UserType {
  id: string;
  name: string;
  username: string;
  chatListIds: Set<string>;
  friendIds: Set<string>;

  updateUsername(newName: string): void;
  checkIfFriend(userId: string): boolean;
}
