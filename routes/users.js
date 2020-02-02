
var express = require('express');
var router = express.Router();

var db = require('../queries');
/**
 * @swagger
 * definitions:
 *   users:
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/', db.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - users
 *     description: Returns a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/:id', db.getSingleUser);

/**
 * @swagger
 * /users/:
 *   post:
 *     tags:
 *       - users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/users'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/', db.createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - users
 *     description: Update a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: Fields for the users resource
 *         in: body
 *         schema:
 *           type: array
 *           $ref: '#/definitions/users'
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:id', db.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:id', db.removeUser);

// // application -------------------------------------------------------------
// router.get('/', function (req, res) {
//     res.render('index', {title: 'Swagger Example'}); // load the single view file (angular will handle the page changes on the front-end)
// });

module.exports = router;