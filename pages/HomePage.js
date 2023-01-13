const BasePage = require('./BasePage')
const By = require('selenium-webdriver').By
    

class HomePage extends BasePage{
    constructor(driver){
        super(driver)
        this.byDropDownOrigem = By.name('fromPort')
        this.byDropDownDestino = By.name('toPort')
        this.btnBuscar = By.css('input.btn.btn-primary')


    } // fim do constructor
    
    async selecionarOrigemDestinoVoo(origem, destino){
        // selecionar a cidade origem
        let dropDownOrigem = await this.driver.findElement(this.byDropDownOrigem) // cria uma variável que recebe o elemento que foi mapeado anteriormente
        await dropDownOrigem.findElement(By.css('[value="${origem}"]')).click() // para usar a origem que veio como parâmetro

        // selecionar a cidade destino
        let dropDownDestino = await this.driver.findElement(this.byDropDownDestino) // cria uma variável que recebe o elemento que foi mapeado anteriormente
        await dropDownDestino.findElement(By.css('[value="${destino}"]')).click() // para usar o destino que veio como parâmetro

        // clicar no botão Find Flights
        await this.driver.findElement(this.btnBuscar).click()
    }

} // fim da classe

module.exports = HomePage