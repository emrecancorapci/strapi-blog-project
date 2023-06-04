'use strict';

/**
 * post-interaction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-interaction.post-interaction');
