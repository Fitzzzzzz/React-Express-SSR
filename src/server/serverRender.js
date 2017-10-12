'use strict';
import React from 'react'
import { renderToString } from 'react-dom/server'
import Root from './containers/Root'

function renderFullPage(html, initialState) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <div id="root">
        <div>
          ${html}
        </div>
      </div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
      
    </body>
    </html>
  `;
}

module.exports = (req, res) => {
	const html = renderToString(
		<Root/>
	);
	res.end(renderFullPage(html, ''));
};