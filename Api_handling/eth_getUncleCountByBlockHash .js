const options = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify({id: 1, jsonrpc: '2.0', method: 'eth_getUncleCountByBlockHash'})
  };
  
  fetch('https://eth-mainnet.g.alchemy.com/v2/docs-demo', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));