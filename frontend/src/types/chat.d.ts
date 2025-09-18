export interface MessageContent {
  type: "user" | "sender";
  content: string;
  timeStamp: Date;
}

export interface MessageType {
  content: String;
  clientCreatedAt: Date;
  serverReceivedAt: null | Date;
  senderId: String;
  threadId: String;
  edited: boolean;
  editMessage(newContent: String): void;
  JSONStringify(): String;
}

export interface ChatThreadType {
  id: String;
  memberIds: Set<String>;
  messages: MessageType[];
  createdAt: Date;
  sendMessage(senderId: String, message: MessageType);
}
