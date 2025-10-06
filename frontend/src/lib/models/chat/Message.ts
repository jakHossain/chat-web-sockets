import type { MessageType } from "../../types/chat";
export class Message implements MessageType {
  #senderId; //user id of sender
  #threadId; //id of chat thread message was sent to
  #content; //plain text content of message
  #edited; //boolean flag is message was edited
  #clientCreatedAt; //date time object to represent when client initially created message
  #serverReceivedAt: null | Date; //date time obejct to represent when server acknowledged message

  constructor(content: string, senderId: string, threadId: string) {
    this.#senderId = senderId;
    this.#threadId = threadId;
    this.#content = content;
    this.#edited = false;
    this.#clientCreatedAt = new Date();
    this.#serverReceivedAt = null;
  }

  get content() {
    return this.#content;
  }

  get edited() {
    return this.#edited;
  }

  get clientCreatedAt() {
    return this.#clientCreatedAt;
  }

  get serverReceivedAt() {
    return this.#serverReceivedAt;
  }

  get senderId() {
    return this.#senderId;
  }

  get threadId() {
    return this.#threadId;
  }

  /**
   * Update the string content of the message
   * @param newContent string content to update message item with
   */
  editMessage(newContent: string): void {
    this.#edited = true;
    this.#content = newContent;
  }

  /**
   *
   * @returns a stringified JSON object that represents a message
   */
  JSONstringify(): string {
    const messageObject = {
      content: this.#content,
      timeStamp: this.#clientCreatedAt.toISOString(),
      senderId: this.#senderId,
      threadId: this.#threadId,
      edited: this.#edited,
    };

    return JSON.stringify(messageObject);
  }
}
