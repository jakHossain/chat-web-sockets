import type { ChatThreadType, MessageType } from "../types/chat";

export class ChatThread implements ChatThreadType {
  #id;
  #memberIds;
  #messages;
  #createdAt;

  constructor(
    id: String,
    memberIds: Set<String> | String[],
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

  sendMessage(senderId: String, message: MessageType) {
    //TODO
  }
}
