import { Token } from "./definations/tokens.js";
import { HeaderTokenizer } from "./tokenizers/header-tokenizer.js";
import { InlineTextTokenizer } from "./tokenizers/inline-text-tokenizer.js";

/**
 * No logic conversion of raw markdown into tokens
 * */
export class Tokenizer {
  private constructor() {}

  //Main method to tokenze the raw markdown input
  public static tokenize(raw: string): Token[] {
    const lines = raw.split("\n");
    console.log(`Lines found ${lines.length}`);

    const processedTokens: Token[] = [];

    for (let idx = 0; idx < lines.length; idx++) {
      const line = lines[idx];
      console.log(line);


      /**
        * If line fails all checks, then it is assumed that it must be a paragraph
        */

      if (HeaderTokenizer.isHeader(line)) {
        console.log("found header");
        processedTokens.push(HeaderTokenizer.tokenize(line));
      } else {
        console.log("found paragrpah");
        processedTokens.push(InlineTextTokenizer.tokenize(line));
      }
    }

    return processedTokens;
  }
}
