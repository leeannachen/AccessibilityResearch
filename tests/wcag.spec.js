// @ts-check
// npx playwright test
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const playwright = require('playwright');
const WebDriver = require('selenium-webdriver');

var website = "https://yalecollege.yale.edu/";

test.describe('Focus elements | The website', () => { 
  test('should skip to main content link', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);
    await page.keyboard.down('Tab');
    expect(await (await page.waitForSelector('text=skip to main content')).isVisible()).toBeTruthy();
  });
});

test.describe('Valid and correct attributes | The website ', () => { 
  test('should not have any aria-hidden=\'true\' elements', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('aria-hidden-body')
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have ARIA attributes', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('aria-required-attr')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have ARIA attributes that begin with aria-', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('aria-valid-attr')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have a title.', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('document-title')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should not have duplicated active ids.', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('duplicate-id-active')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should not have duplicated ARIA ids.', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('duplicate-id')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have a language tag.', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('html-has-lang')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have a valid language tag.', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('html-lang-valid')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Moving text | The website ', () => { 
  test('should not have blinking elements', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('blink')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should not have marquee attributes', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('marquee')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Proper DOM order | The website ', () => { 
  test('should have properly structured ordered and unordered lists.', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('list')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have items should be nested within lists.', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('listitem')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });


  test('should have proper usage of definition lists', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('definition-list')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have all dt and dd are nested inside of dl.', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules('dlitem')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Axe core -> Failure might indicate that a feature needs manual review', () => { 
  test('should pass all automated WCAG 2 A tests', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags('wcag2a')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should pass all automated WCAG 2 AA tests', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags('wcag2aa')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should pass all automated WCAG 2.1 A tests', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags('wcag21a')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should pass all automated WCAG 2.1 AA tests', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags('wcag21aa')
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should pass all automated best practice tests', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(website);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags('best-practice')
      .disableRules('skip-link') 
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

});