
import { Builder, Capabilities, By } from "selenium-webdriver";
// const { board, cell } = require('./tictacjs.html')
// import {board, cell} from './tictacjs.html'

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('i can add numbers', async () => {
    expect(2 + 2).toBe(4)
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    let square1 = await (await driver).findElement(By.id('cell-0')).click()

    let square5 = await (await driver).findElement(By.id('cell-4')).click()

    let square9 = await (await driver).findElement(By.id('cell-8')).click()

    // await driver.sleep(1000)

    let message = (await driver.findElement(By.xpath(`//*[text()="X lost"]`)))
        // test('message displays on win', () => {
        //     expect(message).toBe('X lost')
        // })
    // let square2 = (await driver.findElement(By.id('cell-2')))
    // expect(square2).toBe(`O`)

    // test('O is in upper right', () => {
    //     expect(board[2].toBe('O'))
    // })
    
    // await driver.sleep(1000)
    
    
    
    
})

test('box contains O', async () => {
    let square3 = (await driver).findElement(By.id('cell-2'))
    expect(square3).toBe('o')
})