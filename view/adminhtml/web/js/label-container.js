/**
 * wallee Magento 2
 *
 * This Magento 2 extension enables to process payments with wallee (https://www.wallee.com/).
 *
 * @package Wallee_Payment
 * @author wallee AG (http://www.wallee.com/)
 * @license http://www.apache.org/licenses/LICENSE-2.0  Apache Software License (ASL 2.0)
 */
require([
    'jquery',
], function ($) {
	$(function () {
		$('.wallee-label-container').each(function(){
			var container = $(this),
			
				toggleTable = function(){
					container.toggleClass('active');
				};
			
			container.find('> a').on('click', toggleTable);
		});
	});
});