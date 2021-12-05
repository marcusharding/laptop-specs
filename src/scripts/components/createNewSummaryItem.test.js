import laptopSpecs from './laptop-specs';

const { createNewSummaryItem } = laptopSpecs;

test('CreateNewSummaryItem passes for a spec list item', () => {
	expect(createNewSummaryItem('13" Retina')).toBe(true);
});
