'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
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
