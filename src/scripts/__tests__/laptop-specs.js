import { calculateTotal } from '../components/laptop-specs';

test('Calculating total for order summary returns an integer', () => {
	const nodeList = [400, 300];

	nodeList.forEach((item, i) => {
		const node = document.createElement('li');
		node.setAttribute('data-price', item);
		nodeList[i] = node;
	});

	expect(typeof calculateTotal(nodeList)).toBe('number');
	expect(calculateTotal(nodeList)).toEqual(700);
});
