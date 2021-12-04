jQuery(function () {
	total = Computer.total;
	specs = Computer.specs;
	$('.clickable').on('click', function (e) {
		if ($(e.currentTarget).hasClass('buy-button')) {
			alert('Laptop succesfully purchased, heres your order summary');
			return;
		}
		var cat = $(this).parent().prev().text();
		$(this).parent().find('.selected').removeClass('selected');
		$(this).addClass('selected');
		if (specs[cat].length !== 0) {
			total = total - specs[cat][1];
		}
		specs[cat] = [$(this).find('.component-option__name').text(), parseInt($(this).find('.component-option__price').text().substr(1), 10)];
		total = total + parseInt($(this).find('.component-option__price').text().substr(1), 10);
		$('.chosen-specs__spec-list').empty();
		$('.chosen-specs__spec-list').append('<li class="spec-list__spec">' + specs.Screen[0] + '</li>');
		$('.chosen-specs__spec-list').append('<li class="spec-list__spec">' + specs.CPU[0] + '</li>');
		$('.chosen-specs__spec-list').append('<li class="spec-list__spec">' + specs.Storage[0] + '</li>');
		$('.chosen-specs__spec-list').append('<li class="spec-list__spec">' + specs.Memory[0] + '</li>');
		$('.chosen-specs__spec-list').append('<li class="spec-list__spec">' + specs.Graphics[0] + '</li>');
		$('.summary-window__total').text('Total: £' + total);
	});
}) 
