export interface MarkdownNode {
  type: string;
  content: any;
}

// The final markdown structure that is produced by the compiler
export interface CompliledMarkdown {
  custom_styling: string; //TODO
  nodes: MarkdownNode;
}
