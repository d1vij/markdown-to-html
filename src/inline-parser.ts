//import { MdText } from "./markdown-nodes.js";
//
//export function peek<T>(array: T[]): T | undefined {
//  return array[array.length - 1];
//}
//
////TODO: Figure out some way to recursively parse the line for stylings
//// for each char in line
//// if char is any of the modifier
//// - check if the last character of modifier stack is that char,
//// then
////  *_*_* , *_*
//// else store that char into a character buffer
//// [*, _, *]
//
//class InlineParser {
//  //Parses the inline modifications of a line -> ie bold, italcis etc
//  public static parse(line: string) {
//    const textNodes: MdText[] = [];
//
//    const validModifiers = Object.values(Modifiers) as string[];
//    const modifiersStack: (typeof validModifiers)[number][] = [];
//
//    const buffer: string[] = [];
//    const tokens = line.split(" ");
//
//    // _Italics **bold** Italics_
//    // [_Italics , **bold**,  Italics_
//    for (const tok of tokens) {
//      if (tok.length == 1 && validModifiers.includes(tok)) {
//        // If a modifier has space after it, use it as normal
//        buffer.push(tok);
//      }
//    }
//
//    for (const tok of line.split("")) {
//      if (validModifiers.includes(tok)) {
//        // Char is a modifier tok
//        //If the tok is escaped, add it directly yo the buffer
//        if (peek(buffer) === "\\") {
//          buffer.push(tok);
//        } else if (peek(modifiersStack) === tok) {
//          modifiersStack.pop();
//        }
//      } else {
//        buffer.push(tok);
//      }
//    }
//  }
//}
