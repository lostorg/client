let React = require('react');
let ReactDOM = require('react-dom');
let content = <div class="window">

<header class="toolbar toolbar-header">
       
  <div class="toolbar-actions">
    <div class="btn-group">
      <button class="btn btn-default">
        <span class="icon icon-home"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-folder"></span>
      </button>
      <button class="btn btn-default active">
        <span class="icon icon-cloud"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-popup"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-shuffle"></span>
      </button>
    </div>

    <button class="btn btn-default">
      <span class="icon icon-home icon-text"></span>
      Filters
    </button>

    <button class="btn btn-default btn-dropdown pull-right">
      <span class="icon icon-megaphone"></span>
    </button>
  </div>
</header>

<div class="window-content">
  <div class="padded-more">
    <h1>Welcome to Photon</h1>
    <p>
      Thanks for downloading Photon. This is an example HTML page that's linked up to compiled Photon CSS, has the proper meta tags
      and the HTML structure.
    </p>
  </div>
</div>


<footer class="toolbar toolbar-footer">
<div class="toolbar-actions">
  <button class="btn btn-default">
    Cancel
  </button>

  <button class="btn btn-primary pull-right">
    Save
  </button>
</div>
</footer>
</div>;

ReactDOM.render(
    content,
    document.getElementById('main')
  );