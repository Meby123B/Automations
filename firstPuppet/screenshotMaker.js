
const screenshotMaker = {
    count: 1,

    // countUp(){this.count++},
    
    async takeScreenshot(page, options = {}) {
        await page.screenshot({ path: `${this.count}.png`, ...options });
        // console.log(`cheese ${this.count}`);
        this.count++;
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
}

module.exports = screenshotMaker;