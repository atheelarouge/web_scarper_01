const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');
const path = require('path');


async function stokWagoon() {
  await (async function () {
    const PORT = 4216;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync("D:/Own_Projects/07_web_scarper/data.json")// need revision
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync('D:/Own_Projects/07_web_scarper/data.json', dataJSON) // need revision

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'wagoon_data.json')));


    let veriLenght = json.link.length
    let linkVeri = json.link
    let barkodVeri = json.barkod
    let idVeri = json.id


    await (async function wagoon_fun1() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: true,
            timeout: 0,
            defaultViewport: null,
          })

          // Login
          const page = await browser.newPage();

          
          // Loop Function
           for (i = 0; i < veriLenght; i++ ) {

            await page.goto(linkVeri[i], {
              waitUntil: 'networkidle2'
            })

            await (async function() {
              const idSplit = idVeri[i].split(' ')
              const idName = idSplit[0]
              const idNum = Number(idSplit[1])

              let idNum40 = idNum
              let idNum41 = idNum+1
              let idNum42 = idNum+2
              let idNum43 = idNum+3
              let idNum44 = idNum+4
              let idNum45 = idNum+5

              
              let idNumSon40 = idName.toString() + idNum40.toString()
              let idNumSon41 = idName.toString() + idNum41.toString()
              let idNumSon42 = idName.toString() + idNum42.toString()
              let idNumSon43 = idName.toString() + idNum43.toString()
              let idNumSon44 = idName.toString() + idNum44.toString()
              let idNumSon45 = idName.toString() + idNum45.toString()

              try {

                var wg01_40 = await page.evaluate((idNumSon40) => {
                  return document.querySelector(idNumSon40).getAttribute('data-qty')
                },(idNumSon40))
                var wg01_41 = await page.evaluate((idNumSon41) => {
                  return document.querySelector(idNumSon41).getAttribute('data-qty')
                },(idNumSon41))
                var wg01_42 = await page.evaluate((idNumSon42) => {
                  return document.querySelector(idNumSon42).getAttribute('data-qty')
                },(idNumSon42))
                var wg01_43 = await page.evaluate((idNumSon43) => {
                  return document.querySelector(idNumSon43).getAttribute('data-qty')
                },(idNumSon43))
                var wg01_44 = await page.evaluate((idNumSon44) => {
                  return document.querySelector(idNumSon44).getAttribute('data-qty')
                },(idNumSon44))
                var wg01_45 = await page.evaluate((idNumSon45) => {
                  return document.querySelector(idNumSon45).getAttribute('data-qty')
                },(idNumSon45))
    
                data = loadNotes()
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(wg01_40),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}41`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(wg01_41),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}42`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(wg01_42),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}43`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(wg01_43),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}44`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(wg01_44),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}45`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(wg01_45),
                })
    
                await saveNotes(data)
    
                await console.log(chalk.bgGrey.bold(`${barkodVeri[i]}...`))
    
              } catch (err) {
                data = loadNotes()
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}41`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}42`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}43`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}44`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
  
                data.push({
                  "Barkod": `${barkodVeri[i]}45`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
  
                await console.log(err)
                await console.log(chalk.bgRed.bold(`${barkodVeri[i]}... Error`))
  
                await saveNotes(data)
  
              }
              
            })()


           }
          

        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err, `General error`))
      }
    })();
    await (async function () {
      await console.log(chalk.bgBlue.bold('Finished...'))
    })();
  })()
}


module.exports = stokWagoon