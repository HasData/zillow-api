# Real Estate Listing API for Zillow

> HasData is an independent service and is not affiliated with, endorsed by, or sponsored by Zillow Group, Inc. Zillow is a trademark of its respective owner.

## Getting real estate data from Zillow.com

Zillow.com is a popular online platform where you can find real estate listings to rent, buy, and sell properties. To get public data from Zillow.com, you have several options. Let's break them down:

1. Manual Data Collection. This means visiting Zillow.com, searching for the property or information you want, and manually extracting the data.

2. API integration. With our real estate listing API, you can retrieve public listing data from Zillow.com programmatically. Our NodeJS library makes it easy to access real estate data.

3. [No-Code Scraper](https://hasdata.com/scrapers/zillow). We also offer a No-Code Scraper if you prefer a more user-friendly approach and want to avoid writing code.

So whether you collect data manually, integrate our API, or use our No-Code Scraper, we give you different options to suit your needs. Each option has its own benefits, and you can choose the one that best suits your requirements and technical capabilities.

## Install

`npm install @scrapeit-cloud/zillow-api`

## API Key

You'll need an API key to use the API and access its features. The API key is a unique identifier that lets you authenticate and make requests.

To obtain your API key, sign up on HasData. HasData offers a user-friendly platform that provides access to various APIs. By signing up, you'll receive your API key and some free credits to get you started.

Follow these steps to get your API key:

1.  Visit [HasData](https://hasdata.com/) and navigate to the sign-up page.

2.  Create your account by providing the necessary information.

3.  After successfully signing up, log in to your account.

4.  In your account dashboard, you'll find your API key, which you can use to authenticate your requests.


Once you have your API key, you can integrate it into the library by initializing it with your key.

## Use

To get started, use this example:

```js
const ZillowAPI = require('@scrapeit-cloud/zillow-api');
const zillowApi = new ZillowAPI('INSERT_YOUR_API_KEY');

const main = async () => {
  try {
    const properties = await zillowApi.search({
      keyword: 'new york, ny',
      type: 'forSale',
      price: {
        min: 1000000,
        max: 2200000,
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
When using the API, both required and optional parameters are available for retrieving real estate listings. Required parameters:

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
Please refer to the [API documentation](https://docs.hasdata.com/apis/zillow/listing) for more detailed information about available methods.

## Use cases

Our real estate listing API can be useful for a variety of purposes. For example, Zillow.com provides a reliable platform to explore potential opportunities if you are considering investing in real estate. Collecting and comparing data becomes critical to effectively compare different options at different times and make informed decisions. This is where the API can come in handy.

You can access public real estate data using the API to view listing information and collect important statistics. This lets you stay on top of price trends and perform market analysis.

## Real estate data extraction

This library uses JavaScript to gather and provide public listing data. The NPM package is a great asset for those looking to build their own tool or simply retrieve data from Zillow.com.

If you build a Zillow.com scraper from scratch, you have to manage proxies, JavaScript rendering, and request reliability yourself.

With our API, you don't have to manage any of that. These concerns are handled on the API side, and you're provided with ready-to-use data.

## Build it yourself or use our API

As mentioned earlier, you can manage proxies and rendering yourself, or use our real estate listing API to get public data from Zillow.com. In the first case, you would also need to analyze the website structure and extract the data yourself. If you use our API, you will receive ready-to-use data.
