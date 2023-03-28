const puppeteer = require("puppeteer");

// block of code to excute asynchronous code

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // got to addUser.html and click addUser
    await page.goto("http://localhost:3000/addUser.html");
    await page.click("#add-user");

    // go to data.html and click showAllData
    await page.goto("http://localhost:3000/data.html");
    await page.click("#showAllData");

    // wait for data to populate status div
    await page.waitForSelector("#status:not(:empty)");

    // read status data
    let status = await page.$("#status");
    console.log(await status.evaluate((node) => node.innerHTML));

    // go to allUsers, take screenshot
    await page.goto("http://localhost:3000/allUsers.html");
    await page.click("#showAllData");
    await page.waitForSelector("#status:not(:empty)");
    await page.screenshot({ path: "screen.png" });

    // shut down
    browser.close();
  } catch (e) {
    console.log(e);
  }
})();
