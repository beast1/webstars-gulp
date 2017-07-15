$(document).ready(function($) {
	$("#subscr-name").hide();
	$("#subscr-price").hide();
	$("#subscr-msisdn").hide();
	$(".captcha-comment").hide();
	$("#captcha-container .f .arr").hide();
	$("#submit-container label").hide();
	$("#footer-text").append($("#disclaimer-details, #template-unplug-contentblock"));
	$("#disclaimer-details p:not(:last-of-type)").hide();
	$("#submit-container").append($("#back-btn-wrap"));
});