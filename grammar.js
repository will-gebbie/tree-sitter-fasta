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

    id: ($) => $.id_text,

    description: ($) => seq($.description_text, $.newline),

    sequence: ($) => repeat1($.sequence_combo),

    sequence_combo: ($) => seq($.sequence_text, $.newline),

    id_text: ($) => /[!-~]+/,

    description_text: ($) => /[ -~]+/,

    newline: ($) => /[\r?\n]/,

    sequence_text: ($) => /[a-zA-Z*-]+/,
  },
});
