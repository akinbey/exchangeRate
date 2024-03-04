class Currency{
    constructor(){           //! istek atacagımız adres  ?  apikey=bizim anahtarımız  &  base_currency = gelen degere gore
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9sTCtiKAnABq0RabK5shK3MYuaV2rIdK0iuQn5HK&base_currency=";
    }

    async exchange(amount , firstCurrency , secondCurrency){ //! adet sayısı , secilen 1. deger , secilen 2. değer
        const response = await fetch(`${this.url}${firstCurrency}`) //! url ve secilen ilk deger ile istek atıp degıskende tuttuk
        const result = await response.json();   //! sunucundan gelen veriyi  json formatında aldık. ve degıskende tuttuk
        const exchangeResult = amount * result.data[secondCurrency] //! adet sayısı * json formatındaki verinin data içerisindeki ikinci değeri aldık
        

        return exchangeResult; //! methodun cagırıldıgı yere yaptıgımız işlem sonucunu döndürdük
    }
}