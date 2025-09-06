export interface MessageContent {
  type: "user" | "sender";
  content: string;
  timeStamp: Date;
}
