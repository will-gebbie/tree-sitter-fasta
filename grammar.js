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

    _definition: ($) =>
      choice(
        $.record_definition_description,
        $.record_definition_no_description,
      ),

    record_definition_description: ($) =>
      seq($.id, $.space, $.description, $.sequence),

    record_definition_no_description: ($) => seq($.id, $.newline, $.sequence),

    id: ($) => $.id_text,

    description: ($) => seq($.description_text, $.newline),

    sequence: ($) => repeat1($.sequence_choice),

    sequence_choice: ($) => choice($.sequence_newline, $.sequence_EOF),

    sequence_newline: ($) => seq($.sequence_text, $.newline),

    sequence_EOF: ($) => $.sequence_text,

    id_text: ($) => />[!-=?-~]+/,

    description_text: ($) => /[ -~]+/,

    newline: ($) => /[\r?\n]/,

    space: ($) => / +/,

    sequence_text: ($) => /[a-zA-Z*-]+/,
  },
});
