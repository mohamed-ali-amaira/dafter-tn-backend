'use strict';

/**
 * staff-person service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staff-person.staff-person');
