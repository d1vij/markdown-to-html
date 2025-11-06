import { Token } from "./tokens.js";
import { MarkdownNode } from "./nodes.js";
import { InlineTextToken } from "./inline-text.js";

export enum HeaderTypes {
  H1 = "1",
  H2 = "2",
  H3 = "3",
  H4 = "4",
  H5 = "5",
  H6 = "6",
}

//TODO: FIXME
export interface HeaderNode extends MarkdownNode {
  type: "header";
  size: HeaderTypes;
}

export interface HeaderToken extends Token {
  type: "header";
  size: HeaderTypes;
  content: InlineTextToken;
}
