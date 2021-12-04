/* eslint-disable */
const laptopSpecs = () => {
	const { specs } = window.Computer;
	const clickableItems = document.querySelectorAll('.clickable');
	let selectedItems = document.querySelectorAll('.selected');
	let orderTotal = null;
	
	const calculateTotal = (selectedItems) => {
		orderTotal = 0;

		selectedItems.forEach((item) => {
			orderTotal += parseInt(item.dataset.price);
		})
		document.querySelector('.summary-window__total').textContent = `Total: £${orderTotal}`;
	}

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
		
		calculateTotal(selectedItems);
	};

	clickableItems.forEach((item) => {
		item.addEventListener('click', () => { onClickItem(item); });
	});
	
	calculateTotal(selectedItems);
};

document.addEventListener('DOMContentLoaded', () => {
	laptopSpecs();
});
