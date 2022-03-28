'use strict';

/**
 * todo-task service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::todo-task.todo-task');
