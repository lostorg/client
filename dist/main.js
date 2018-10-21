'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var SplitPane = require('react-split-pane');

var content = React.createElement(
  'div',
  { 'class': 'window' },
  React.createElement(
    'header',
    { 'class': 'toolbar toolbar-header' },
    React.createElement(
      'div',
      { 'class': 'toolbar-actions' },
      React.createElement(
        'div',
        { 'class': 'btn-group' },
        React.createElement(
          'button',
          { 'class': 'btn btn-default' },
          React.createElement('span', { 'class': 'icon icon-home' })
        ),
        React.createElement(
          'button',
          { 'class': 'btn btn-default' },
          React.createElement('span', { 'class': 'icon icon-folder' })
        ),
        React.createElement(
          'button',
          { 'class': 'btn btn-default active' },
          React.createElement('span', { 'class': 'icon icon-cloud' })
        ),
        React.createElement(
          'button',
          { 'class': 'btn btn-default' },
          React.createElement('span', { 'class': 'icon icon-popup' })
        ),
        React.createElement(
          'button',
          { 'class': 'btn btn-default' },
          React.createElement('span', { 'class': 'icon icon-shuffle' })
        )
      ),
      React.createElement(
        'button',
        { 'class': 'btn btn-default' },
        React.createElement('span', { 'class': 'icon icon-home icon-text' }),
        'Filters'
      ),
      React.createElement(
        'button',
        { 'class': 'btn btn-default btn-dropdown pull-right' },
        React.createElement('span', { 'class': 'icon icon-megaphone' })
      )
    )
  ),
  React.createElement(
    'div',
    { 'class': 'window-content' },
    React.createElement(
      'div',
      { 'class': 'pane-group' },
      React.createElement(
        SplitPane,
        { split: 'vertical', minSize: 150, defaultSize: 150 },
        React.createElement(
          'div',
          { className: 'sidebar-override' },
          React.createElement(
            'div',
            { 'class': 'pane-sm sidebar sidebar-override' },
            React.createElement(
              'nav',
              { 'class': 'nav-group' },
              React.createElement(
                'h5',
                { 'class': 'nav-group-title' },
                'Favorites'
              ),
              React.createElement(
                'a',
                { 'class': 'nav-group-item active' },
                React.createElement('span', { 'class': 'icon icon-home' }),
                'connors'
              ),
              React.createElement(
                'span',
                { 'class': 'nav-group-item' },
                React.createElement('span', { 'class': 'icon icon-download' }),
                'Downloads'
              ),
              React.createElement(
                'span',
                { 'class': 'nav-group-item' },
                React.createElement('span', { 'class': 'icon icon-folder' }),
                'Documents'
              ),
              React.createElement(
                'span',
                { 'class': 'nav-group-item' },
                React.createElement('span', { 'class': 'icon icon-signal' }),
                'AirPlay'
              ),
              React.createElement(
                'span',
                { 'class': 'nav-group-item' },
                React.createElement('span', { 'class': 'icon icon-print' }),
                'Applications'
              ),
              React.createElement(
                'span',
                { 'class': 'nav-group-item' },
                React.createElement('span', { 'class': 'icon icon-cloud' }),
                'Desktop'
              )
            )
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            SplitPane,
            { split: 'horizontal', defaultSize: '50%' },
            React.createElement(
              'div',
              { 'class': 'pane' },
              React.createElement(
                'ul',
                { 'class': 'list-group' },
                React.createElement(
                  'li',
                  { 'class': 'list-group-header' },
                  React.createElement('input', { 'class': 'form-control', type: 'text', placeholder: 'Search for someone' })
                ),
                React.createElement(
                  'li',
                  { 'class': 'list-group-item' },
                  React.createElement('img', { 'class': 'img-circle media-object pull-left', src: '/assets/img/avatar.jpg', width: '32', height: '32' }),
                  React.createElement(
                    'div',
                    { 'class': 'media-body' },
                    React.createElement(
                      'strong',
                      null,
                      'List item title'
                    ),
                    React.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet.'
                    )
                  )
                ),
                React.createElement(
                  'li',
                  { 'class': 'list-group-item' },
                  React.createElement('img', { 'class': 'img-circle media-object pull-left', src: '/assets/img/avatar2.png', width: '32', height: '32' }),
                  React.createElement(
                    'div',
                    { 'class': 'media-body' },
                    React.createElement(
                      'strong',
                      null,
                      'List item title'
                    ),
                    React.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet.'
                    )
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { 'class': 'pane' },
              React.createElement(
                'div',
                { 'class': 'padded-more' },
                React.createElement(
                  'h1',
                  null,
                  'Welcome to Photon'
                ),
                React.createElement(
                  'p',
                  null,
                  'Thanks for downloading Photon. This is an example HTML page that\'s linked up to compiled Photon CSS, has the proper meta tags and the HTML structure.'
                )
              )
            )
          )
        )
      )
    )
  ),
  React.createElement(
    'footer',
    { 'class': 'toolbar toolbar-footer' },
    React.createElement(
      'div',
      { 'class': 'toolbar-actions' },
      React.createElement(
        'button',
        { 'class': 'btn btn-default' },
        'Cancel'
      ),
      React.createElement(
        'button',
        { 'class': 'btn btn-primary pull-right' },
        'Save'
      )
    )
  )
);

ReactDOM.render(content, document.getElementById('main'));
