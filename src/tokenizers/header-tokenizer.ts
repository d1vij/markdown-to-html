import { HeaderToken, HeaderTypes } from "../definations/headers.js";
import { InlineTextTokenizer } from "./inline-text-tokenizer.js";

export class HeaderTokenizer {
  private static genericHeaderRegex = /^#{1,6} (.*)$/;
  private static h1Regex = /^# (.*)$/;
  private static h2Regex = /^## (.*)$/;
  private static h3Regex = /^### (.*)$/;
  private static h4Regex = /^#### (.*)$/;
  private static h5Regex = /^##### (.*)$/;
  private static h6Regex = /^###### (.*)$/;

  // H1 Regex done manually - as base case
  private static patterns = [
    {
      regex: this.h2Regex,
      size: HeaderTypes.H2,
    },
    {
      regex: this.h3Regex,
      size: HeaderTypes.H3,
    },
    {
      regex: this.h4Regex,
      size: HeaderTypes.H4,
    },
    {
      regex: this.h5Regex,
      size: HeaderTypes.H5,
    },
    {
      regex: this.h6Regex,
      size: HeaderTypes.H6,
    },
  ];

  private constructor() {}

  public static tokenize(line: string): HeaderToken {
    for (const { regex, size } of this.patterns) {
      const match = regex.exec(line);

      // Ideally the two errors should never be raised
      // if(match === null) throw new Error("Header is null when it shouldnt be null!!");
      if (match === null) continue;
      const content = match?.[1];
      if (content === undefined)
        throw new Error("Header content is undefined, when it shouldnt be !!");

      return {
        type: "header",
        size: size,
        content: InlineTextTokenizer.tokenize(content),
      };
    }

    // Without this block the tsc compiler complains
    const match = this.h1Regex.exec(line);
    if (match === null)
      throw new Error("Header is null when it shouldnt be null!!");
    console.log(match);
    const content = match?.[1];
    if (content === undefined)
      throw new Error("Header content is undefined, when it shouldnt be !!");

    return {
      type: "header",
      size: HeaderTypes.H1,
      content: InlineTextTokenizer.tokenize(content),
    };
  }

  public static isHeader(line: string): boolean {
    return this.genericHeaderRegex.test(line);
  }
}
