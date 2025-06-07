/**
 * @file Fasta file parser
 * @author Will Gebbie <will.gebbie777@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "fasta",

  rules: {
    source_file: ($) => repeat($._definition),

    _definition: ($) => choice($.record_definition),

    record_definition: ($) => seq(">", $.id, $.description, $.sequence),

    id: ($) => optional($.header_text),

    description: ($) => seq($.header_text, $.newline),

    sequence: ($) => repeat($.seqeunce_combo),

    sequence_combo: ($) => seq($.sequence_text, $.newline),

    // TODO: Add all valid chars in regex for id and description
    header_text: ($) => /[a-z]+/,

    new_line: ($) => /[\r?\n]/,

    // TODO: Only allow fasta codes from https://en.wikipedia.org/wiki/FASTA_format
    seqeunce_text: ($) => /[a-z]+/,
  },
});
