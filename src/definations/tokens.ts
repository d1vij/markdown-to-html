export interface Token {
  type: string;
}

export interface TextToken extends Token {
  type: "text";
  content: string;
}
