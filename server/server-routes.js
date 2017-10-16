import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import routes from '../src/routes';

export default (req, res) => {
    return renderToString(
        <StaticRouter context={{}} location={req.url}>
            {routes()}
        </StaticRouter>
    )
}