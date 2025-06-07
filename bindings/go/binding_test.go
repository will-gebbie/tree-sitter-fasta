package tree_sitter_fasta_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_fasta "github.com/will-gebbie/tree-sitter-fasta/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_fasta.Language())
	if language == nil {
		t.Errorf("Error loading Fasta grammar")
	}
}
