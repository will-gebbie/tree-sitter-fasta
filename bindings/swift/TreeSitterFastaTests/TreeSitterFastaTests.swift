import XCTest
import SwiftTreeSitter
import TreeSitterFasta

final class TreeSitterFastaTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_fasta())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Fasta grammar")
    }
}
