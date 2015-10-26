'use strict';

if(typeof window['applyeasy'] === 'undefined') { var applyeasy = {}; };

applyeasy.test = {

	get_random_word: function () {
		var alphabet = 'abcdefghijklmnopqrstuvwxyz';
		var i = Math.round(Math.random()*20);
		var j = i + Math.round(Math.random()*5)+3;
		//console.log(i, j, alphabet.substring(i, j));

		return alphabet.substring(i, j);
	},

	get_random_number: function (from, to) {
		var n = Math.round(Math.random()*(to-from)) + from;

		return n;
	},

///////////////////////////////////////////////////////////////////////////////////////////////////

	credit: function () {
		var test = applyeasy.test;
		var T = 500;
		$('#submit_form_for_credit').click();

		setTimeout(function () {
			$('select').each(function () {
				$(this)[0].selectedIndex = 1;
			});

			$('input[type=text]').each(function () {
				$(this).val(test.get_random_word());
			});

			$('input[type=number]').each(function () {
				$(this).val(test.get_random_number(100, 200));
			});

			$('input[type=email]').each(function () {
				$(this).val(test.get_random_word() + '@' + test.get_random_word() + '.com');
			});

			$('input[type=tel]').each(function () {
				$(this).val(test.get_random_number(100000, 999999));
			});

			$('input#abn').val('12123123123');
			$('input#acn').val('123123123');

			$('#submit_form_for_credit').click();

			setTimeout(function () {
				$('#business_address_line_postcode').val(test.get_random_number(1000, 9999));
				$('#postal_address_line_postcode').val(test.get_random_number(1000, 9999));
				$('#address1_line_postcode').val(test.get_random_number(1000, 9999));
				$('#address2_line_postcode').val(test.get_random_number(1000, 9999));

				$('#submit_form_for_credit').click();

				setTimeout(function () {
					$('#submit_form_for_credit').click();

					setTimeout(function () {
						$('#submit_form_for_credit').click();

						setTimeout(function () {
							$('#submit_form_for_credit').click();
						}, T);
					}, T);
				}, T);
			}, T);
		}, T);
	}
};
