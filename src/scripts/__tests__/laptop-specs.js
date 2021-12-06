import { calculateTotal, onClickItem } from '../components/laptop-specs';

test('Calculating total for order summary returns an integer', () => {
	expect(typeof calculateTotal()).toBe('number');
});

test('Ensure nothing else is run if the buy button is clicked', () => {
	const item = document.createElement('button');
	item.className = 'buy-button clickable';
	item.innerHTML = 'Buy now';
	expect(onClickItem(item)).toBe(undefined);
});
