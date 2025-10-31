# tree-sitter-fasta

[![CI][ci]](https://github.com/will-gebbie/tree-sitter-fasta/actions/workflows/ci.yml)
[![crates][crates]](https://crates.io/crates/tree-sitter-fasta)
[![npm][npm]](https://www.npmjs.com/package/tree-sitter-fasta)
[![pypi][pypi]](https://pypi.org/project/tree-sitter-fasta)

fasta grammar for [tree-sitter](https://github.com/tree-sitter).

#### References

[FASTA file format](https://en.wikipedia.org/wiki/FASTA_format)

#### Supported File Extensions

- .fasta
- .faa
- .fna
- .ffn
- .fa
- .frn
- .fas
- .mpfa

#### Neovim ([nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)) Setup

In ~/.config/nvim/after/plugin/treesitter.lua (or other appropriate config location) add:
```lua
local parser_config = require('nvim-treesitter.parsers').get_parser_configs()
parser_config.fasta = {
  install_info = {
    url = 'https://github.com/will-gebbie/tree-sitter-fasta',
    files = { 'src/parser.c' },
    branch = 'main',
    requires_generate_from_grammar = true,
  },
  filetype = 'fasta',
}

vim.filetype.add {
  extension = {
    fasta = 'fasta',
    fna = 'fasta',
    ffn = 'fasta',
    fa = 'fasta',
    faa = 'fasta',
    frn = 'fasta',
    fas = 'fasta',
    mpfa = 'fasta',
  },
}
```

#### Notes

Currently trying to get this added to the [nvim-treesitter supported languages list](https://github.com/nvim-treesitter/nvim-treesitter?tab=readme-ov-file#supported-languages).
Will update this README when accomplished...

[ci]: https://github.com/will-gebbie/tree-sitter-fasta/actions/workflows/ci.yml/badge.svg
[npm]: https://img.shields.io/npm/v/tree-sitter-fasta?logo=npm
[crates]: https://img.shields.io/crates/v/tree-sitter-fasta?logo=rust
[pypi]: https://img.shields.io/pypi/v/tree-sitter-fasta?logo=pypi&logoColor=ffd242
