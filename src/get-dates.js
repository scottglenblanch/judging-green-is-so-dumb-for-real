#!/usr/bin/env node

const earliestDate = new Date(2016, 5, 16)
const latestDate = Date.now(2021, 11, 31)

const maxCommitsPerDay = 10

const getRandomCommitCount = () => Math.floor(Math.random() * maxCommitsPerDay) + 1

let currentDate = earliestDate;

while(currentDate < latestDate) {
    const dayOfWeek = currentDate.getDay()
    const isWeekday = dayOfWeek > 0 && dayOfWeek < 5

    let commitCount = isWeekday ? getRandomCommitCount() : 0
    
    for(let i = commitCount; i > 0 ; i--) {
        currentDate.setHours(currentDate.getHours() + i)
        currentDate.setMinutes(currentDate.getMinutes() + Math.floor(Math.random() * 60))
        currentDate.setMilliseconds(currentDate.getMilliseconds() + Math.floor(Math.random() * 1000))

        console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
    }


    currentDate.setDate(currentDate.getDate() + 1);
}



