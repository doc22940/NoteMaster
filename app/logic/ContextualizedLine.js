import lexer from '../nearley/lexer/Lexer';
import NMLParserService from '../nearley/NMLParserService';

export default class ContextualizedLine {
  // -- Core
  // Stores the zero-based line number
  lineNumberIndex;

  // Stores the line number for this line
  lineNumber;

  // Stores the content (text) for this line
  lineContent;

  // -- Parsing
  // Stores the parser object result (these will be instances of NMLBaseUnit)
  unitResult;

  // Stores the parser result from Nearley (this will most-likely become an object)
  unitResultValue;

  // Stores the charcter length of the result (used for calculating text wrapping width)
  unitResultValueCharacterLength;

  // Stores boolean value of whether the line was parsed successfully
  parsedSuccessful;

  // -- Flags
  // Stores whether the field is empty
  isEmpty;

  // Stores whether this line contains a identifier
  containsVariable;

  // Stores whether line should be visible
  isVisible;

  constructor(lineNumberIndex, lineContent) {
    // LR: Core properties
    this.lineNumberIndex = lineNumberIndex;
    this.lineNumber = lineNumberIndex + 1;

    // LR: Utilize reset function for class setup
    this.reset(lineContent);
  }

  // Functions
  reset = lineContent => {
    // LR: Make sure the content does not match
    if (lineContent === this.lineContent) return;

    // LR: Update the line content
    this.lineContent = lineContent;

    // LR: Boolean flags
    this.isEmpty = this.lineContent.length <= 0;
    this.containsVariable = this.doesContainVariable();
  };

  parse = () => {
    // HACK: Remove me later
    // setTimeout(() => {}, 100);

    // LR: Pass to the NML language parser
    const result = NMLParserService.parse(this.lineContent);

    if (result === null || typeof result === 'undefined') {
      this.parsedSuccessful = false;
      this.parsedValue = '';
      this.parsedValueCharacterLength = 0;
      this.isVisible = false;
      return;
    }

    if (result.parsedSuccessful) {
      // LR: Set the parse as successful
      this.parsedSuccessful = true;

      // LR: Set the parsed unit
      this.unitResult = result.unit;

      // LR: Set the parsed value result
      this.unitResultValue = this.unitResult.prettify();

      // LR: Calculate the parsed value length
      this.unitResultValueCharacterLength = String(this.unitResultValue).length;

      // LR: If the value is invalid hide the line
      this.isVisible = this.shouldBeVisible();
    } else {
      this.parsedSuccessful = false;
      this.parsedValue = '';
      this.parsedValueCharacterLength = 0;
      this.isVisible = false;
    }
  };

  shouldBeVisible = () => {
    // Null or undefined value?
    if (this.unitResult === null || typeof this.unitResult === 'undefined')
      return false;

    // The line content is empty?
    if (this.lineContent.length === 0) return false;

    return true;
  };

  supportsParallelProcessing = () => {};

  // Helpers
  doesContainVariable = () => {
    // LR: Lex the line content
    lexer.reset(this.lineContent);

    // LR: Search for variable
    // eslint-disable-next-line no-restricted-syntax
    for (const token of lexer) {
      if (token.type === 'identifier') return true;
    }

    return false;
  };
}
