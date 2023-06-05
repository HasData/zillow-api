const { ZILLOW_LISTING_API, ZILLOW_PROPERTY_API } = require('./consts');
const { doRequest } = require('./utils/http');

class ZillowAPI {
  /**
    *
    * @param {apiKey} apiKey - Scrapeit Cloud API Key
    * @throws {Error}
    *
    */
  constructor(apiKey = null) {
    if (!apiKey) {
      throw new Error('API Key is not provided');
    }

    this.apiKey = apiKey;
  }

  /**
    *
    * @param {params} params - Scrapeit Cloud API Params
    * @throws {Error}
    * @returns {object} Scrapeit Cloud API Response
    *
    */
  async search(params) {
    const responseBody = await doRequest(
      `${ZILLOW_LISTING_API}?${new URLSearchParams(params).toString()}`,
      {
        'x-api-key': this.apiKey,
      },
      {
        ...params,
        source: 'nodejs_sdk'
      }
    );

    let result = {};

    try {
      result = JSON.parse(responseBody);
    } catch (e) {
      result = responseBody;
    }

    if (result.status === 'ok') {
      return result.scrapingResult;
    }

    if (result.error) {
      throw new Error(result.error);
    }

    if (result.status === 'error') {
      throw new Error(`${result.message}: ${JSON.stringify(result.errors || {})}`);
    }

    return result;
  }

  /**
    *
    * @param {params} params - Scrapeit Cloud API Params
    * @throws {Error}
    * @returns {object} Scrapeit Cloud API Response
    *
    */
  async property(params) {
    const responseBody = await doRequest(
      `${ZILLOW_PROPERTY_API}?${new URLSearchParams(params).toString()}`,
      {
        'x-api-key': this.apiKey,
      },
      {
        ...params,
        source: 'nodejs_sdk'
      }
    );

    let result = {};

    try {
      result = JSON.parse(responseBody);
    } catch (e) {
      result = responseBody;
    }

    if (!result.requestMetadata) {
      throw new Error('Invalid response');
    }

    if (result.requestMetadata.status === 'ok') {
      return result;
    }

    if (result.requestMetadata.status === 'error') {
      throw new Error('Invalid response');
    }

    return result;
  }
}

module.exports = ZillowAPI;
