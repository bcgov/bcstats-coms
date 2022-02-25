const { recordService } = require('../services');

const Problem = require('api-problem');

const controller = {
  /** Searches for object permissions */
  // eslint-disable-next-line no-unused-vars
  objectPermissionSearch(req, res, next) {
    new Problem(501).send(res);
  },

  /** Returns the object permissions */
  // eslint-disable-next-line no-unused-vars
  objectPermission(req, res, next) {
    new Problem(501).send(res);
  },

  /** Grants object permissions to a specific user */
  async addPermission(req, res, next) {
    try {
      const response = await recordService.share(req);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },

  /** Deletes object permissions for a specific user */
  // eslint-disable-next-line no-unused-vars
  removePermission(req, res, next) {
    new Problem(501).send(res);
  }
};

module.exports = controller;
