# NML.ne - NoteMaster Language
# Grammar by Liam Riddell
# Thanks to https://github.com/airportyh/smallang/blob/03-fun-call-and-multi-line/small.ne
# ----------------------------
# Notes:
#   - The moo lexer has been overriden to ignore word + undefined tokens.
# ----------------------------

@{%
    // LR: As this is transpiled from ES6 module export we need to specify the default
    const lexer = require("../../lexer/lexer").default;
    const ast = require("../../ast/ast").default;
%}

# Lexer: Moo
@lexer lexer

# Grammar Types
@include "./lib/type/whitespace.ne"
@include "./lib/type/number.ne"
@include "./lib/type/conversion.ne"

# Grammar Systems
@include "./lib/system/variable.ne"
@include "./lib/system/pemdas.ne"
@include "./lib/system/uom.ne"
@include "./lib/system/currency.ne"
@include "./lib/system/percentage.ne"

# Grammar Entry
main
    -> VariableSystem
    | PemdasSystem
    | PercentageSystem
    | UoMSystem
    | CurrencySystem

