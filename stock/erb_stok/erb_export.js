const fs = require('fs')
const XLSX = require('xlsx')
const chalk = require('chalk');
const path = require('path')

  async function erb_expExl() {
    await (async function() {
      const num = () => { 
        const dataBuffer = fs.readFileSync(path.join(__dirname, 'dataErb.json'))
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
      }
      
      const convertJsonExcel = () => {
        const workSheet = XLSX.utils.json_to_sheet(num())
        const workBook = XLSX.utils.book_new()
      
        XLSX.utils.book_append_sheet(workBook, workSheet, "stok")
      
        // Generate Buffer
        XLSX.write(workBook, {bookType: 'xlsx', type: 'buffer'})
      
        //Binary string
        XLSX.write(workBook,{bookType: 'xlsx', type: 'binary'})
      
        XLSX.writeFile(workBook, 'C:/Users/athee/Desktop/Oto_stok/erb_stok.xlsx')
        console.log(chalk.bold.bgGreen('kadin_stok Excel Dostası Oto_Stok Klasörün içine Çıkarıldı...'))
      }
      convertJsonExcel()
    })()
    
  }

  

  module.exports = erb_expExl
