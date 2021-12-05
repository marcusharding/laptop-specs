import calculateTotal from '../components/laptop-specs';

test('CreateNewSummaryItem passes for a spec list item', () => {
	expect(
		calculateTotal(
			[
				'<li class="component-options__component-option clickable rounded-grey-border selected" data-price="400" data-screen-id="1"><span class="component-option__name">13" Retina</span> <span class="component-option__price">£400</span></li>',
			],
		),
	).toBe(true);
});
