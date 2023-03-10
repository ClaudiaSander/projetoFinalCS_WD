import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { Builder } from "selenium-webdriver"
require ("chromedriver")
import { assert } from "chai"
import HomePage = require ("../../pages/HomePage")
const chrome = require('selenium-webdriver/chrome')

var {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

const windowSize = {height: 1920, width: 1080};

Before(async function () {
    const options = new chrome.Options().headless()
    
    this.driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build()
    this.driver.manage().setTimeouts({ implicit: 60000 })
    // this.driver.manage().window().maximize()

    this.homePage = new HomePage(this.driver)
})

After(async function(){
    await this.driver.quit()
})

Given('acesso o site BlazeDemo', async function () {
  await this.driver.get('https://www.blazedemo.com')
});

When('seleciono origem como {string} e destino como {string}', async function (origem, destino) {
  await this.homePage.selecionarOrigemDestinoVoo(origem, destino)
});

  Then('exibe o titulo da guia como {string}', async function (tituloEsperado) {
    let tituloAtual = await this.homePage.getTitle()
    assert.equal(tituloAtual, tituloEsperado)
 
    // assert.equal(await this.homePage.getTitle(), tituloEsperado)
  });