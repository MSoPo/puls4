Puls4.Views.App = Backbone.View.extend({

	events : {
		'click .publicar' : 'showForm',
		'submit form' : 'createPost',
		'click .logo' : 'navigationHome'
	},
	initialize : function ($el) {
		this.$el = $el;
	},
	navigationHome : function (){
		Backbone.history.navigate('/', {trigger : true});
	},
	showForm : function(){
		this.$el.find('form').show();
	},
	createPost : function(e){
		e.preventDefault();

		var titulo = $('input[name=titulo]').val();
		var autor = $('input[name=autor]').val();
		var tag = $('input[name=tag]').val();

		var data = {

			'title' : titulo,
			'user' : autor,
			'tag'	: tag,
			'image' : '/imagenes/img4.jpg',
			'votes' : 0
		};

		var model = new Puls4.Models.Article(data);

		model.save();

	}


});