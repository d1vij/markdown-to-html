import { InlineTextContentToken, InlineTextModifierToken,InlineModifiersList,InlineTextToken, InlineModifiers } from "../definations/inline-text.js";

export class InlineTextTokenizer {

    private constructor(){}

    public static getModifierEnumKey(modifier:string) {
        switch (modifier) {
            case "_": return InlineModifiers.italics;
            case "*": return InlineModifiers.bold;
            case "~": return InlineModifiers.striked;
            case "`": return InlineModifiers.inline_code;
            default: return InlineModifiers.none;
        }
    }

    public static tokenize(line: string):InlineTextToken {
        let buffer: string[] = [];
        const tokens: (InlineTextContentToken | InlineTextModifierToken)[] = [];

        for (let idx = 0; idx < line.length; idx++) {
            const tok = line[idx];

            if (InlineModifiersList.includes(tok)) {
                if (buffer.length > 0) {

                    //flushing out buffer
                    tokens.push({
                        type: "inline_text_content_token",
                        content: buffer.join(""),
                    });
                    buffer = [];
                }

                tokens.push({
                    type: "inline_text_modifier_token",
                    style: this.getModifierEnumKey(tok),
                });
            } else {
                buffer.push(tok);
            }
        }

        if (buffer.length > 0) {
            tokens.push({
                type: "inline_text_content_token",
                content: buffer.join(""),
            });
        }

        return {
            type: "inline_text_block",
            content: tokens
        }
    }

}
