#!/usr/bin/env node


const fs = require("fs")
const path = require('path')


const fileName = `output-file.txt`
const filePath = path.join(__dirname, `../files/${fileName}`)

const message = new Array(Math.floor(Math.random() * 100) + 1).fill('we are the dead').join('\n')

fs.writeFileSync(filePath, message)
