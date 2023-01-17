class Currency {
  constructor() {
    this.key = "Ju8ewOSdnZVkcWFtVdTDLs9f1Ce7EWwy";
    this.currencyURI = "https://api.apilayer.com/currency_data/list";
    this.rateURI = "https://api.apilayer.com/currency_data/convert?";
  }

  async getCurrencies() {
    const query = `?apikey=${this.key}`;
    const response = await fetch(this.currencyURI + query);
    const data = await response.json();
    return data;
  }

  async getRate(unit1, unit2, curr1amount) {
    const query = `to=${unit2}&from=${unit1}&amount=${curr1amount}&apikey=${this.key}`;
    const response = await fetch(this.rateURI + query);
    const data = await response.json();
    return data;
  }
}
