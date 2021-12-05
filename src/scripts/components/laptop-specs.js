const calculateTotal = (selectedItems) => {
	let orderTotal = 0;

	selectedItems.forEach((item) => {
		orderTotal += parseInt(item.dataset.price, 10);
	});

	return orderTotal;
};

const createNewSummaryItem = (innerHtml) => {
	const node = document.createElement('li');
	node.className = 'spec-list__spec';
	node.innerHTML = innerHtml;

	return node;
};

const updateOrderSummary = (specs) => {
	const specList = document.querySelector('.chosen-specs__spec-list');
	const container = document.createElement('ul');

	container.className = 'chosen-specs__spec-list list--no-style';
	container.appendChild(createNewSummaryItem(specs.Screen[0]));
	container.appendChild(createNewSummaryItem(specs.CPU[0]));
	container.appendChild(createNewSummaryItem(specs.Storage[0]));
	container.appendChild(createNewSummaryItem(specs.Memory[0]));
	container.appendChild(createNewSummaryItem(specs.Graphics[0]));
	specList.replaceWith(container);
};

const updateOrderTotal = (selectedItems) => {
	document.querySelector('.summary-window__total').textContent = `Total: £${calculateTotal(selectedItems)}`;
};

const onClickItem = (item) => {
	if (item.classList.contains('buy-button')) {
		alert('Laptop succesfully purchased');
		return;
	}

	const { specs } = window.Computer;
	const selectedItems = document.querySelectorAll('.selected');
	const parent = item.parentElement;
	const category = parent.previousElementSibling.textContent;

	parent.querySelector('.selected').classList.remove('selected');
	item.classList.add('selected');
	specs[category] = [item.querySelector('.component-option__name').textContent, parseInt(item.querySelector('.component-option__price').textContent.substr(1), 10)];

	updateOrderSummary(specs);
	updateOrderTotal(selectedItems);
};

const laptopSpecs = () => {
	const clickableItems = document.querySelectorAll('.clickable');
	const selectedItems = document.querySelectorAll('.selected');

	clickableItems.forEach((item) => {
		item.addEventListener('click', () => { onClickItem(item); });
	});

	updateOrderTotal(selectedItems);
};

document.addEventListener('DOMContentLoaded', () => {
	laptopSpecs();
});

export default { calculateTotal, createNewSummaryItem, updateOrderSummary };
