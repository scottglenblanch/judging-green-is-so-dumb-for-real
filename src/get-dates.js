#!/usr/bin/env node

const earliestDay = new Date(2022, 0, 1)
const now = Date.now()

const maxCommitsPerDay = 30

const getRandomCommitCount = () => Math.floor(Math.random() * maxCommitsPerDay)

let currentDate = earliestDay;

while(currentDate < now) {
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



