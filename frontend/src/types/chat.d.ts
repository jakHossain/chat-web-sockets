export interface MessageContent {
  type: "user" | "sender";
  content: string;
  timeStamp: Date;
}

export interface MessageType {
  content: string;
  clientCreatedAt: Date;
  serverReceivedAt: null | Date;
  senderId: string;
  threadId: string;
  edited: boolean;
  editMessage(newContent: string): void;
  JSONstringify(): string;
}

export interface ChatThreadType {
  id: string;
  memberIds: Set<string>;
  messages: MessageType[];
  createdAt: Date;
  sendMessage(senderId: string, message: MessageType);
}
