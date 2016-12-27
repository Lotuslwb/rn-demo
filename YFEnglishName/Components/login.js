define(function(require) {
	require('md5');
	require('jquery');
	var init = function(currentUrl) {
		var tplogin = window.location.protocol == 'https:' ? 'tplogins:' : 'tplogin:';
		var loginHost = window.location.protocol == 'https:' ? app.loginhost : app.loginip;
		var redirect_url = tplogin + '//' + loginHost + '/cmbchina-activity-tran/h5/customer/putCustomerLoginInfo?url=' + currentUrl + '&corpno=' + app.corpno;
		var md5_str = redirect_url + app.loginkey;
		var auth = hex_md5(md5_str.toLowerCase()).toLowerCase();
		var loginHref = redirect_url + "&auth=" + auth;
		return loginHref;
	}
	return {
		init: init,
	};
})