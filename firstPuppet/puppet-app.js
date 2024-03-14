// This script launches a headless chrome browser,
// navigates to youtube, searches for a query, waits for the search results,
// scrolls down and gets the image urls of the videos on the page.
// After getting the urls, it takes a full page screenshot and writes the urls to a file.


const fs = require('fs/promises');
const puppeteer = require('puppeteer');
const s = require('./screenshotMaker');

(async () => {
    
    // the query to search for
    const SEARCH_QUERY = 'JBH';


    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // console.log('launch');
    try {



        // open youtube
        await page.goto('https://www.youtube.com/');
        // console.log('in youtube');

        // take a screenshot
        await s.takeScreenshot(page);


        // search 'JBH'
        const searchElement = await page.waitForSelector('[name = "search_query"]');
        // console.log('wait');
        await searchElement.type(SEARCH_QUERY);
        // console.log('type');
          
        // click the search button
        // await page.keyboard.press('Enter');
        await page.click('#search-icon-legacy');
        // console.log('click');
        
        await s.takeScreenshot(page);

        // wait for the search results
        await page.waitForSelector('#filter-button');
        // console.log(page.url());

        // wait for 5 seconds to let the page loading the search results
        // console.log('wait for 5 seconds');
        // await new Promise(r => setTimeout(r, 5000));
        // console.log('after search');

        await s.takeScreenshot(page, { fullPage: true });

        // move the mouse to the body and scroll
        const body = await page.waitForSelector('body');
        const box = await body.boundingBox()
        await page.mouse.move(
            box.x + box.width / 2,
            box.y + box.height / 2
        );

        // scroll down for 10 times
        for (let i = 0; i < 10; i++) {
            await page.mouse.wheel({ deltaY: 800 });
            console.log('scroll down');
    
            await new Promise(r => setTimeout(r, 500));
        }


        // get the image urls
        const images = await page.evaluate(() => {
            const list = document.querySelectorAll('img');
            const imgUrls = Array.from(list, i => i.src);

            return imgUrls.filter(url => url.includes('ytimg'));
        })
        // console.log(images);

        await s.takeScreenshot(page, { fullPage: true });

        fs.writeFile('./data.json', JSON.stringify(images))



    } catch (error) {
        console.log(error);
    } finally {
        await browser.close();
        console.log('closed');
    }

})()



