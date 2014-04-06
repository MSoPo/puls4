Puls4.Views.Article = Backbone.View.extend({
	events : {
		'click .up'    : 'upvotes',
		'click .down'  : 'downvotes',
		'click'		:	'navigation'
		
	},
	tagName : 'article',
	className : 'post',

	initialize : function(){
		console.log(this.$el);
		var self = this;
		// Underscore //this.template = _.template($('#article-template').html());
		//swig
		this.model.on('change', function(){
			if(window.app.state === 'root')
				self.render();
			else
				self.extendRender();
		});

		window.routers.base.on('route:root', function(){
			self.$el.css('display' , '');
			self.render();
		});

		window.routers.base.on('route:articlesSingle', function(){
			if(window.app.article === self.model.get('id'))
			{
				self.extendRender();
			}
			else{
				self.$el.hide();
			}
		});

		this.template = swig.compile($('#article-template').html());
		this.extendTemplate = swig.compile($('#article-extend-template').html());
		
		
	},

	extendRender : function(){
		
		var data = this.model.toJSON();
		var html = this.extendTemplate(data);

		this.$el.html( html );
	},

	render : function(){
		var data = this.model.toJSON();
		var html = this.template(data);

		this.$el.html( html );
	},

	navigation : function(){
		Backbone.history.navigate('/articles/' + this.model.get('id'), {trigger : true});
	},

	upvotes :  function(ev){
		ev.preventDefault();
		ev.stopPropagation();
		var data = this.model.get('votes');
		data = parseInt(++data, 10);
		this.model.set('votes', data);
		this.model.save();
	},
	downvotes :  function(ev){
		ev.preventDefault();
		ev.stopPropagation();
		var data = this.model.get('votes');
		data = parseInt(--data, 10);
		this.model.set('votes', data);
		this.model.save();
	}



});