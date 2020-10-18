/** Proxy Pattern **/
//Add object as a placeholder to speed up the process
function ApiCall() {
    this.getValue = function (coin) {
        console.log("From External API");
        switch (coin) {
            case 'Bitcoin':
                return "$8500"
            case 'Litecoin':
                return '$50'
            case 'Ethereum':
                return '$175'
        }
    }
}
//Here the proxy caches the request once it runs and reduces the 
//number of network calls
function ApiProxyCall() {
    this.api = new ApiCall();
    this.cache = {};
    this.getValue = function (coin) {
        if (this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin]
    }
}

//Without proxy
const api = new ApiCall();
console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Litecoin'));
console.log(api.getValue('Ethereum'));

//With proxy
const apiProxy = new ApiProxyCall();
console.log(apiProxy.getValue('Bitcoin'));
console.log(apiProxy.getValue('Litecoin'));
console.log(apiProxy.getValue('Ethereum'));
console.log(apiProxy.getValue('Bitcoin'));
console.log(apiProxy.getValue('Litecoin'));
console.log(apiProxy.getValue('Ethereum'));