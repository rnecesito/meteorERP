Template.login_template.created = function () {
	Session.set('login_error', '');
};

Template.login_template.rendered = function () {
	$('#main_container').hide();	
};

Template.login_template.events({
	'submit': function (e,t){
		user = $("#login_un").val();
		pass = $("#login_pw").val();
		Meteor.loginWithPassword(user, pass, function (error) {
			if(error){
				Session.set('login_error', error.reason);
				console.log(error.reason);
			}else{
				Session.set('login_error', '');
			}
		});
		e.preventDefault();
	}
});

Template.login_template.helpers({
	login_error: function () {
		if(Session.get('login_error') != ''){
			return Session.get('login_error');
		}
	}
});