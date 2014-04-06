Puls4.Routers.Base = Backbone.Router.extend({
	routes : {
		''	: 'root',
		'articles/:id' : 'articlesSingle',
	},

	root : function(){
		console.log('Este es el root de la aplicacion');

		window.app.state = 'root';
	},
	articlesSingle : function(id){
		console.log('Este es el articlesSingle');
		window.app.state = "articleSingle";
		window.app.article = id;
	}
});