    const puppeteer = require('puppeteer');
const express = require('express');
const { response } = require('express');
const cors = require('cors');
const router = require("express").Router();


const app = express();
app.use(cors())
const PORT = 5000;


async function getJobsLimelight() {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://www.limelight.pk/collections/unstitched-winter-22')

    const all = await page.evaluate(() => {
        const final_jobs = []
        const jobs = document.querySelectorAll('.collection .grid__item')

        jobs.forEach(prod => {
            const image_url = prod.querySelector(".media img").getAttribute('src')
            const name = prod.querySelector('.product-img-main a').innerText;
            const prod_link = prod.querySelector('.product-img-main a').getAttribute('href');
            const price = prod.querySelector('.price-item--sale').innerText;

            final_jobs.push({ name: name, prod_link: `https://www.limelight.pk${prod_link}`, image_url: `https:${image_url}`, price: price.trim() })
            console.log(final_jobs);
        });
        console.log(final_jobs);

        return final_jobs;
    })

    browser.close()
    return all
}

async function getJobsOutfitters() {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://outfitters.com.pk/collections/new-women')

    const all = await page.evaluate(() => {
        const final_jobs = []
        const jobs = document.querySelectorAll('div.card.card--standard.card.card--media')

        jobs.forEach(prod => {
            const image_url = prod.querySelector("div.card__media > div > img").getAttribute('src')
            const name = prod.querySelector('h3.card__heading').innerText;
            const prod_link = prod.querySelector('.product-link-main').getAttribute('href');
            const price = prod.querySelector('span.money').innerText;

            final_jobs.push({ name: name, prod_link: `https://outfitters.com.pk${prod_link}`, image_url: `https:${image_url}`, price: price.trim() })
            console.log(final_jobs);
        });
        console.log(final_jobs);

        return final_jobs;
    })

    browser.close()
    return all
}

async function getJobsSanaSafinaz() {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://www.sanasafinaz.com/pk/new-arrivals.html')

    const all = await page.evaluate(() => {
        const final_jobs = []
        const jobs = document.querySelectorAll('div.product-item-info')

        jobs.forEach(prod => {
            const image_url = prod.querySelector(".product-image-photo").getAttribute('src');
            const name = prod.querySelector('.product-item-link').innerText;
            const prod_link = prod.querySelector('.product-item-name a').getAttribute('href');
            const price = prod.querySelector('.price').innerText;

            final_jobs.push({ name: name, prod_link: prod_link, image_url: image_url, price: price.trim() })
            console.log(final_jobs);
        });
        console.log(final_jobs);

        return final_jobs;
    })

    browser.close()
    return all
}

async function getJobsJunaidJamshed() {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://www.junaidjamshed.com/new-arrivals/winter-grandiose-22.html')

    const all = await page.evaluate(() => {
        const final_jobs = []
        const jobs = document.querySelectorAll('.product-item')

        jobs.forEach(prod => {
            const image_url = prod.querySelector(".product-image-photo").getAttribute('src');
            const name = prod.querySelector('.product-item-link').innerText;
            const prod_link = prod.querySelector('.product-item-link').getAttribute('href');
            const price = prod.querySelector('.price').innerText;

            final_jobs.push({ name: name, prod_link: prod_link, image_url: image_url, price: price.trim() })

        });
        console.log(final_jobs);

        return final_jobs;
    })

    browser.close()
    return all
}

async function getJobsKhaadi() {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://pk.khaadi.com/sale.html')

    const all = await page.evaluate(() => {
        const final_jobs = []
        const jobs = document.querySelectorAll('.product-item')

        jobs.forEach(prod => {
            const image_url = prod.querySelector(".product-image-photo").getAttribute('data-src');
            const name = prod.querySelector('.product-item-name').innerText;
            const prod_link = prod.querySelector('.product-item-description a').getAttribute('href');
            const price = prod.querySelector('.price').innerText;

            final_jobs.push({ name: name, prod_link: prod_link, image_url: image_url, price: price.trim() })

        });
        console.log(final_jobs);

        return final_jobs;
    })

    browser.close()
    return all
}

async function getJobsZeen() {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://zeenwoman.com/collections/new-arrivals')

    const all = await page.evaluate(() => {
        const final_jobs = []
        const jobs = document.querySelectorAll('.product-item')

        jobs.forEach(prod => {
            const image_url = prod.querySelector(".product-item__primary-image").getAttribute('src');
            const name = prod.querySelector('.product-item-meta__title').innerText;
            const prod_link = prod.querySelector('.product-item-meta a').getAttribute('href');
            const price = prod.querySelector('.money').innerText;

            final_jobs.push({ name: name, prod_link: `https://zeenwoman.com${prod_link}`, image_url: image_url, price: price.trim() })

        });
        console.log(final_jobs);

        return final_jobs;
    })

    browser.close()
    return all
}


async function getJobsRangRasiyan() {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://rangrasiya.com.pk/collections/new-arrivals')

    const all = await page.evaluate(() => {
        const final_jobs = []
        const jobs = document.querySelectorAll('.spf-product-card')

        jobs.forEach(prod => {
            const image_url = prod.querySelector(".spf-product-card__image").getAttribute('src');
            const name = prod.querySelector('.spf-product-card__title').innerText;
            const prod_link = prod.querySelector('.spf-product-card__title a').getAttribute('href');
            const price = prod.querySelector('.money').innerText;

            final_jobs.push({ name: name, prod_link: `https://rangrasiya.com.pk${prod_link}`, image_url: image_url, price: price.trim() })

        });
        console.log(final_jobs);

        return final_jobs;
    })

    browser.close()
    return all
}

async function getJobsGeneration() {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://www.generation.com.pk/pk/new.html')

    const all = await page.evaluate(() => {
        const final_jobs = []
        const jobs = document.querySelectorAll('.product-item-info')

        jobs.forEach(prod => {
            const image_url = prod.querySelector(".product-image-photo").getAttribute('src');
            const name = prod.querySelector('.product-item-name').innerText;
            const prod_link = prod.querySelector('.product-item-info a').getAttribute('href');
            const price = prod.querySelector('.price-container').innerText;

            final_jobs.push({ name: name, prod_link: prod_link, image_url: image_url, price: price.trim() })

        });
        console.log(final_jobs);

        return final_jobs;
    })

    browser.close()
    return all
}



app.get('/limelight', (req, res) => {

    console.log("get request is running limelight");
    const x = getJobsLimelight();
    x.then((result) => {
        res.json({ result })
    })

})
app.get('/outfitters', (req, res) => {

    console.log("get request is running outfitters");
    const y = getJobsOutfitters();
    y.then((result) => {
        res.json({ result })
    })

})

app.get('/sanasafinaz', (req, res) => {

    console.log("get request is running sanasafinaz");
    const z = getJobsSanaSafinaz();
    z.then((result) => {
        res.json({ result })
    })

})
app.get('/junaidjamshed', (req, res) => {

    console.log("get request is running Junaid Jamshed");
    const j = getJobsJunaidJamshed();
    j.then((result) => {
        res.json({ result })
    })

})

app.get('/khaadi', (req, res) => {

    console.log("get request is running Khaadi");
    const j = getJobsKhaadi();
    j.then((result) => {
        res.json({ result })
    })

})

app.get('/zeen', (req, res) => {

    console.log("get request is running Zeen Woman Wear");
    const j = getJobsZeen();
    j.then((result) => {
        res.json({ result })
    })

})

app.get('/rangrasiyan', (req, res) => {

    console.log("get request is running RangRasiyan");
    const r = getJobsRangRasiyan();
    r.then((result) => {
        res.json({ result })
    })

})


app.get('/generation', (req, res) => {

    console.log("get request is running Generation");
    const g = getJobsGeneration();
    g.then((result) => {
        res.json({ result })
    })

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


