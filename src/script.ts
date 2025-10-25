import { Tokenizer } from "./tokenizer.js";
import {writeFile} from "fs/promises";
//console.log(Tokenizer.tokenize("Normal Text"));
//console.log(Tokenizer.tokenize("*Bold text*"));
//console.log(Tokenizer.tokenize("_Italics_"));
//console.log(Tokenizer.tokenize("~Italics~"));
//console.log(Tokenizer.tokenize("Text Before _Italics_ Text After"));
//
//console.log(Tokenizer.tokenize("~Italics~ *bold* ~striked~"));
//console.log(Tokenizer.tokenize("~Italics *bold nested* italics~"));

async function main(){
    await writeFile("tokenzied.json",JSON.stringify(Tokenizer.tokenize(`
# Project Overview

This project is a *tiny demonstration* of **Markdown inline styling**, showing how styles can be **_nested and combined_** inside ordinary paragraphs.

## Installation Notes

To install, run the usual steps — nothing fancy, just follow the **quick start**. If something goes wrong, try the _fallback_ instructions or consult the **[documentation](https://example.com)** for **more details**.

### Usage Examples

Use the CLI tool with a \`--help\` flag to see options. You can emphasize important flags like **\`--verbose\`** or *\`--dry-run\`* when describing commands.

## Styling Tricks

You can combine styles, for example **bold text with _italic inside_** or _italic text with **bold inside**_. You can also strike things out like ~~deprecated _old-method_~~ while keeping emphasis.

### Final Notes

`)));

}

main().catch(console.log);

