const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');    
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const assert = require('assert');
const fs = require('fs');
const { buffer } = require('stream/consumers');

describe('Coba screenshoot', function () {

    
    it('screensoot full halaman shopee', async function () {
        const driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
        await driver.manage().window().maximize();

        await driver.get('https://shopee.co.id/');
        await sleep(3000);
        // full secreenshoot
        let full_ss = await driver.takeScreenshot();
        fs.writeFileSync('tests/ss/screenshoot_shopee.png', Buffer.from(full_ss, 'base64'));
        console.log('Screenshoot berhasil disimpan di tests/ss/screenshoot_shopee.png');
        await sleep(3000);
        await driver.quit();


    });
    it.only('screensoot elemen tombol login', async function () {
        const driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
        await driver.manage().window().maximize();

        await driver.get('https://www.saucedemo.com/');
        await sleep(3000);

        
        let buttonLogin = await driver.findElement(By.xpath('//*[@id="login-button"]'));
        let ss_button = await buttonLogin.takeScreenshot();
        fs.writeFileSync('tests/ss/ss_Button.png', Buffer.from(ss_button, 'base64'));
        console.log('Screenshoot berhasil disimpan di tests/ss/ss_Button.png');
        await sleep(3000);
        await driver.quit();

    });

});