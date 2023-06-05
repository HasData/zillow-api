const { ZILLOW_LISTING_API, ZILLOW_PROPERTY_API } = require('./consts');
const { doRequest } = require('./utils/http');

class ZillowAPI {
  /**
    *
    * @param {apiKey} apiKey - Scrape-It.Cloud API Key
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
    * @param {params} params - Scrape-It.Cloud Zillow API Params
    * @throws {Error}
    * @returns {object} Scrape-It.Cloud Zillow API Response
    *
    */
  async search(params) {
    const searchParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(value => searchParams.append(key, value.toString()))
      } else if (typeof value === 'object') {
        Object.keys(value).forEach(objKey => {
          searchParams.append(`${key}[${objKey}]`, value[objKey])
        })
      } else {
        searchParams.append(key, value.toString())
      }
    });

    const responseBody = await doRequest(
      `${ZILLOW_LISTING_API}?${searchParams.toString()}`,
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

    if (result.errors && result.errors.length) {
      const error = new Error(`Validation error`)
      error.validationErrors = result.errors

      throw error
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

  /**
    *
    * @param {params} params - Scrape-It.Cloud Zillow API Params
    * @throws {Error}
    * @returns {object} Scrape-It.Cloud Zillow API Response
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
