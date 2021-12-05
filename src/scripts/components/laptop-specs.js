const laptopSpecs = () => {
	const { specs } = window.Computer;
	const clickableItems = document.querySelectorAll('.clickable');
	let selectedItems = document.querySelectorAll('.selected');
	let orderTotal = null;

	const calculateTotal = () => {
		orderTotal = 0;

		selectedItems.forEach((item) => {
			orderTotal += parseInt(item.dataset.price, 10);
		});
		document.querySelector('.summary-window__total').textContent = `Total: £${orderTotal}`;
	};

	const createNewSummaryItem = (innerHtml) => {
		const node = document.createElement('li');
		node.className = 'spec-list__spec';
		node.innerHTML = innerHtml;

		return node;
	};

	const updateOrderSummary = () => {
		const specList = document.querySelector('.chosen-specs__spec-list');
		const container = document.createElement('ul');

		container.className = 'chosen-specs__spec-list list--no-style';
		container.appendChild(createNewSummaryItem(specs.Screen[0]));
		container.appendChild(createNewSummaryItem(specs.CPU[0]));
		container.appendChild(createNewSummaryItem(specs.Storage[0]));
		container.appendChild(createNewSummaryItem(specs.Memory[0]));
		container.appendChild(createNewSummaryItem(specs.Graphics[0]));
		specList.replaceWith(container);

		calculateTotal(selectedItems);
	};

	const onClickItem = (item) => {
		if (item.classList.contains('buy-button')) {
			alert('Laptop succesfully purchased, heres your order summary');
			return;
		}

		const parent = item.parentElement;
		const category = parent.previousElementSibling.textContent;
		parent.querySelector('.selected').classList.remove('selected');
		item.classList.add('selected');
		selectedItems = document.querySelectorAll('.selected');
		specs[category] = [item.querySelector('.component-option__name').textContent, parseInt(item.querySelector('.component-option__price').textContent.substr(1), 10)];

		updateOrderSummary();
	};

	clickableItems.forEach((item) => {
		item.addEventListener('click', () => { onClickItem(item); });
	});

	calculateTotal(selectedItems);
};

document.addEventListener('DOMContentLoaded', () => {
	laptopSpecs();
});
