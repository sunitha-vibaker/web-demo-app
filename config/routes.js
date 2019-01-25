/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /articles/list': 'articles/list',
  'POST /articles/add': 'articles/add',
  'GET /articles/edit/:id': 'articles/edit',
  'GET /articles/delete/:id': 'articles/delete',
  'POST /articles/update/:id': 'articles/update',

  'GET /users/list': 'users/list',
  'POST /users/add': 'users/add',
  'GET /users/edit/:id': 'users/edit',
  'GET /users/details/:id': 'users/details',
  'GET /users/delete/:id': 'users/delete',
  'POST /users/update/:id': 'users/update',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
