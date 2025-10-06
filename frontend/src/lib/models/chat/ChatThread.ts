import type { MessageType, ChatThreadType } from "../../types/chat";

export class ChatThread implements ChatThreadType {
  #id;
  #memberIds;
  #messages;
  #createdAt;

  constructor(
    id: string,
    memberIds: Set<string> | string[],
    createdAt: null | Date
  ) {
    this.#id = id;
    this.#memberIds = new Set(memberIds);
    this.#messages = [] as MessageType[];
    this.#createdAt = createdAt === null ? new Date() : createdAt;
  }

  get id() {
    return this.#id;
  }

  get memberIds() {
    return this.#memberIds;
  }
  get messages() {
    return this.#messages;
  }

  get createdAt() {
    return this.#createdAt;
  }

  sendMessage(senderId: string, message: MessageType) {
    //TODO
  }
}
