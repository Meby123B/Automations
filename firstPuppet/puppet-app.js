const fs = require('fs/promises');
const puppeteer = require('puppeteer');
const s = require('./screenshotMaker');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log('launch');


    // open youtube
    await page.goto('https://www.youtube.com/');
    console.log('in youtube');


    // take a screenshot
    await s.takeScreenshot(page);


    // search 'JBH'
    await page.waitForSelector('[name = "search_query"]');
    console.log('wait');

    await page.type('[name = "search_query"]', 'JBH');
    console.log('type');

    await s.takeScreenshot(page);


    // click the search button
    await page.click('#search-icon-legacy');
    console.log('click');


    // wait for the search results
    await page.waitForSelector('yt-button-shape');
    console.log(page.url());

    // wait for 5 seconds to let the page loading the search results
    console.log('wait');
    await new Promise(r => setTimeout(r, 5000));
    console.log('after search');
    
    await s.takeScreenshot(page,{fullPage: true});

    await page.mouse.move(100, 100);
    await page.mouse.wheel({deltaY:1000});

    // get the image urls
    const images = await page.evaluate(() => {
        const list = document.querySelectorAll('img');
        const imgUrls = Array.from(list, i => i.src);

        return imgUrls.filter(url => url.includes('i.ytimg.com'));
    })
    console.log(images);

    await s.takeScreenshot(page,{fullPage: true});

    fs.writeFile('./data.json', JSON.stringify(images))

    

    await browser.close();

})()


