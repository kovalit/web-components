import { EditorState, Modifier, SelectionState } from 'draft-js';

export default function (editorState, blockKey) {
    let content = editorState.getCurrentContent();
    let block = content.getBlockForKey(blockKey);

    let targetRange = new SelectionState({
	anchorKey: blockKey,
	anchorOffset: 0,
	focusKey: blockKey,
	focusOffset: block.getLength(),
    });
  
    let without = Modifier.removeRange(content, targetRange, 'backward');
    let resetBlock = Modifier.setBlockType(
	without,
	without.getSelectionAfter(),
	'unstyled',
    );
  
    let newState = EditorState.push(editorState, resetBlock, 'remove-range');
    return EditorState.forceSelection(newState, resetBlock.getSelectionAfter());
}