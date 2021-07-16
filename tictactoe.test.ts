import { Builder, Capabilities, By } from "selenium-webdriver";
// const { board, cell } = require('./tictacjs.html')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    let square1 = await (await driver).findElement(By.id('cell-0')).click()

    let square5 = await (await driver).findElement(By.id('cell-4')).click()

    let square9 = await (await driver).findElement(By.id('cell-8')).click()

    await driver.sleep(1000)

    let message = await (await driver.findElement(By.xpath(`//*[text()="X lost"]`)))

    // let square2 = await (await driver.findElement(By.id('cell-1')))
    // expect(square2).toContain(`O`)

    await driver.sleep(1000)


    
    
})
