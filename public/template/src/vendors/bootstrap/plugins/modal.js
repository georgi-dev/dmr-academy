$(document).ready(function () {
	$('.modal').each(function (index, modal) {
		var showAnimation = $(modal).attr('data-animate-show'),
				hideAnimation = $(modal).attr('data-animate-hide');

		$(modal).on('show.bs.modal', function (e) {
			$('.modal-dialog', modal).attr('class', 'modal-dialog  ' + showAnimation + '  animated');
		})

		$(modal).on('hide.bs.modal', function (e) {
			$('.modal-dialog', modal).attr('class', 'modal-dialog  ' + hideAnimation + '  animated');
		})
	})
})
