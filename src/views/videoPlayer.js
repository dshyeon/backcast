var VideoPlayerView = Backbone.View.extend({

  initialize: function(data) {
    // this.render()
    this.listenTo(this.collection, 'select', this.selectVideo);
  },  

  selectVideo: function(video) {
    this.model = video;
    this.render();
  },

  render: function() {
    if(this.model){
      this.$el.html(this.template(this.model.attributes));
    }else{
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
