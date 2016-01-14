#!/usr/bin/env node


const fs = require("fs")
const path = require('path')

const randomStringForFileNameSuffix = new Array(Math.floor(Math.random() * 15))
    .fill('z')
    .map((zCharacter) => String.fromCharCode(zCharacter.charCodeAt(0) - Math.floor(Math.random() * 26)))
    .join('')
const randomFileName = `output-${randomStringForFileNameSuffix}`
const filePath = path.join(__dirname, `../files/${randomFileName}`)

const message = new Array(Math.floor(Math.random() * 100) + 1).fill('we are the dead').join('\n')

fs.writeFileSync(filePath, message)
