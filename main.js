// ELEMENTLERİ SECELİM

const amountInput = document.querySelector("#amount")
const firstOption = document.querySelector("#firstCurrencyOption") //! 1. option
const secondOption = document.querySelector("#secondCurrencyOption") //! 2. option
const resultInput = document.querySelector("#result") //! işlem sonucu

runEventListener() //! fonksiyonu calıstırdık

function runEventListener(){ 
    amountInput.addEventListener("input"  , exchange)  //! inputa deger girildiginde calısacak
}

function exchange(){ 
    const amount = Number(amountInput.value.trim()) //! adet sayisini number'a cevirip ,trim ile boslukları sildik

    //! AŞAGIDAKİ İKİ DEGER ARASINDA İŞLEM YAPTIRICAZ
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent //! 1. OPTİON'un textContentini degıskene atadık
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent //! 2. OPTİON'un textContentini degıskene atadık

    const currency  = new Currency(); //! class'tan nesne türettik
    currency.exchange(amount, firstOptionValue , secondOptionValue) //! class içerisindeki exchange metodu geldi. içerisinde exchangeResult degıskenını(işlem sonucunu) tutuyor
    .then((result)=>{ //! başarılı ise sonucu result olarak tut
        resultInput.value = result.toFixed(3) //!  sonucu virgülden sonra 3 hane olarak tut
    })

    // console.log(firstOptionValue, secondOptionValue);
}
