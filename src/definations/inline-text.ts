import { Token } from "./tokens";
import { MarkdownNode } from "./nodes";

// Text Node
export enum InlineModifiers {
  italics = "italics",
  bold = "bold",
  striked = "striked",
  inline_code = "inline_code",
  none = "none",
}

export const InlineModifiersList = ["_", "*", "~", "`"];

export interface TextNode extends MarkdownNode {
  type: "text";
  style: InlineModifiers;
  content: (string | TextNode)[];
}
//**** Might cause bugs later on
export interface TextNode extends MarkdownNode {
  modification: InlineModifiers;
  content: (string | TextNode)[];
}

export interface ParagraphNode extends MarkdownNode {
  type: "paragraph";
  content: TextNode[];
}

export interface InlineTextModifierToken extends Token {
    type: "inline_text_modifier_token";
    style: InlineModifiers;
}
export interface InlineTextContentToken {
    type: "inline_text_content_token"
    content: string
}
export interface InlineTextToken extends Token {
    type: "inline_text_block",
    content: (InlineTextContentToken | InlineTextModifierToken)[]
}
