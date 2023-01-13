class BasePage {
    constructor(driver) {
        this.driver = driver;
    }
    async getTitle() {
        return await this.driver.getTitle(); // aqui está chamando o método getTitle do js e enviando o título pra quem chamou
    }
}
module.exports = BasePage;
