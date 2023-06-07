
## What is Zillow and How to Scrape It

Zillow is a popular online platform where you can find real estate listings to rent, buy and sell properties. For getting data from Zillow, you have several options. Let's break them down:

1. Manual Data Collection. This means visiting the Zillow website, searching for the property or information you want, and manually extracting the data.

2. API integration. With our API, you can retrieve data from Zillow programmatically. Our Zillow NodeJS API library makes it easy for everyone to access Zillow's rich real estate data.

3. [No-Code Scraper](https://scrape-it.cloud/scrapers/zillow). We also offer a no-code scraper solution if you prefer a more user-friendly approach and want to avoid writing code or implementing a Zillow API.

So, whether you collect data manually, integrate our API, or use our code-less scraper, we give you different options to suit your needs. Each option has its own benefits, and you can choose the one that best suits your requirements and technical capabilities.

## Install

`npm install @scrapeit-cloud/zillow-api`

## API Key

You'll need an API key to use the Zillow API and access its features. The API key is a unique identifier, allowing you to authenticate and request the Zillow API.

To obtain your API key, you can sign up on Scrape-It.Cloud. Scrape-It.Cloud offers a user-friendly platform that provides access to various APIs, including the Zillow API. By signing up, you'll receive your API key and some free credits to get you started.

Follow these steps to get your API key:

1.  Visit [Scrape-It.Cloud](https://scrape-it.cloud/) and navigate to the sign-up page.

2.  Create your account by providing the necessary information.

3.  After successfully signing up, log in to your account.

4.  In your account dashboard, you'll find your API key, which you can use to authenticate your requests.


Once you have your API key, you can integrate it into our Zillow API library by initializing it with your key.

## Use

To get started, use this Zillow API example:

```js
const ZillowAPI = require('@scrapeit-cloud/zillow-api');
const zillowApi = new ZillowAPI('INSERT_YOUR_API_KEY');

const main = async () => {
  try {
    const properties = await zillowApi.search({
      keyword:  'new york, ny',
      type:  'forSale',
      price: {
	    min: 1000000,
	    max:  2200000,
	  },
	  homeTypes: ['house', 'apartment']
	})

    console.log(properties)
  } catch(e) {
    if (e.validationErrors) {
      console.log(e.validationErrors)
    }
    console.log(e.message)
  }
};

main();
```
When using the Zillow API, both required and optional parameters are available for retrieving real estate listings. Required parameters:

-   keyword: The keyword used to search for listings.

-   type: The type of listing. Possible values are "forSale," "forRent," or "sold."


Optional parameters:

-   sort: The sorting option for the search results.

-   price: Specify the minimum and maximum price range.

-   beds: Specify the minimum and maximum number of bedrooms.

-   baths: Specify the minimum and maximum number of bathrooms and etc.


You can also get data on one specific property using the link to the property page:

```js
const ZillowAPI = require('@scrapeit-cloud/zillow-api');
const zillowApi = new ZillowAPI('INSERT_YOUR_API_KEY');

const main = async () => {
  try {
    const property = await zillowApi.property({
	  url: "https://www.zillow.com/homedetails/57-Cowdry-Hollow-Rd-Berlin-NY-12022/32241485_zpid/"
	})

    console.log(property)
  } catch(e) {
    if (e.validationErrors) {
      console.log(e.validationErrors)
    }
    console.log(e.message)
  }
};

main();
```
Please refer to the [API documentation](https://docs.scrape-it.cloud/zillow-api/) for more detailed information about available methods.

## Zillow API use cases

The Zillow API can be important for a variety of purposes. For example, Zillow provides a reliable platform to explore potential opportunities if you are considering investing in real estate. However, collecting and comparing data becomes critical to effectively compare different options at different times and make informed decisions. This is where the Zillow API can come in handy.

You can access real estate data using the API to view real estate information and collect important statistics. This lets you stay on top of price trends and perform market analysis. With the Zillow API, you can easily monitor real estate and make informed choices based on comprehensive information.

## Zillow API for real estate scraping

The Zillow API use JavaScript to gather and provide information. This NPM package will be a great asset for those looking to create their own scraper or simply retrieve data from Zillow.

If you build a Zillow scraper from scratch, you must use proxies to avoid being blocked, handle JavaScript rendering, and incorporate a captcha-solving service.

However, you don't have to worry about these issues when using the Zillow API. These challenges are handled on the API side, and you will be provided with ready-to-use information.

## Proxy or Zillow API

As mentioned earlier, you can use proxies and captcha-solving services or the Zillow API to get data from Zillow. In the first case, along with solving the challenges related to proxy usage, you would need to analyze the website structure and extract the data yourself. However, if you use our Zillow API for scraping, you will receive ready-to-use data.
