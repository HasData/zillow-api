const http = require('https');

const doRequest = (url, headers) => {
  return new Promise((resolve, reject) => {
    const req = http.get(url, { headers }, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => resolve(data));

      res.on('error', (err) => reject(err.message));
    });

    req.on('error', (err) => reject(err.message));
    req.end();
  });
};

module.exports = { doRequest };
