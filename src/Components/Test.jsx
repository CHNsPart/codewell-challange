var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <div id="trailer">
          <i id="trailer-icon" className="fa-solid fa-arrow-up-right" />
        </div>
        <div className="interactable" data-type="link" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1657739774592-14c8f97eaece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)'}}>
        </div>
        <div className="interactable" data-type="video" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1657779582398-a13b5896ff19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'}}>     
        </div>
        <a id="source-link" className="meta-link" href="https://monopo.vn" target="_blank">
          <i className="fa-solid fa-link" />
          <span>Source</span>
        </a>
        <a id="yt-link" className="meta-link" href="https://youtu.be/CZIJKkwc8l8" target="_blank">
          <i className="fa-brands fa-youtube" />
          <span>3.5 min tutorial</span>
        </a>
      </div>
    );
  }
});