'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function getRandId(len) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var id = []
    for (let i = 0; i < len; i++) {
        id.push(chars[getRandomInt(0, chars.length)]);
    }
    return id.join('');
}


function getRandomImgByKeyword(keyword) {
    var imgCover = `https://loremflickr.com/400/300/${keyword}/all`
    return imgCover;
}