"use strict";
var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednesday"] = 3] = "wednesday";
    days[days["thursday"] = 4] = "thursday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
})(days || (days = {}));
;
const Days = days.monday;
console.log(days[Days]);
let article = [11, "x", true];
article = [12, "z", false];
console.log(article);
let [id, title, published] = article;
console.log(id, title, published);
let fruits = ["a", "b", "c"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
let myvar;
myvar = "hello";
console.log(myvar);
myvar = 123;
console.log(myvar);
let a1 = "ali";
console.log(`${a1}`);
let a2 = "MAEYDAH";
console.log(a2.charAt(0).toUpperCase() + a2.slice(1).toLowerCase());
function sing(song) {
    console.log(`${song}`);
}
sing("xx");
function singTwo(first, second) {
    console.log(`${first} ${second}`);
}
singTwo("hello", "world");
function announceSong(song, singer) {
    console.log(`${song}`);
    if (singer) {
        console.log(`by ${singer}`);
    }
}
announceSong("song1");
announceSong("song2", "singer2");
announceSong("song3", undefined);
function announceSong1(song, singer) {
    console.log(`${song}`);
}
announceSong1("song2", "singer2");
announceSong1("song3", undefined); // error singer is required
function rateSong(song, rating = 0) {
    console.log(`${song} rating is ${rating}`);
}
rateSong("x");
rateSong("y", 5);
rateSong("z", undefined); // error rating is required
rateSong("z"); // default rating is 0
rateSong("x");
function singAllSong(singer, ...songs) {
    for (const song of songs) {
        console.log(`${song} by ${singer}`);
    }
}
singAllSong("singer1", "song1", "song2", "song3");
singAllSong("singer2", "song4", "song5"); // error singer is required
singAllSong("singer3"); // error songs is required
singAllSong("singer4"); // error songs is required
singAllSong("singer5"); // error songs is required
function singAllSong1(songs) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return songs.length;
}
console.log(singAllSong1(["song1", "song2", "song3"]));
function getSongAt(song, index) {
    return index < song.length ? song[index] : undefined;
}
console.log(getSongAt(["song1", "song2", "song3"], 0));
function singSongsRecursive(songs, count = 0) {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}
console.log(singSongsRecursive(["song1", "song2", "song3"])); // 3
const singSongsRecursive1 = (songs, count = 0) => songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
console.log(singSongsRecursive1(["x", "xz"], 3));
function getSongRecording(song) {
    if (song === "song1") {
        return new Date("2022-01-01");
    }
    else if (song === "song2") {
        return new Date("2022-01-02");
    }
    else {
        return undefined;
    }
}
console.log(getSongRecording("song1"));
const songs = ["x", "c"];
function runonSongs(getSongAt1) {
    for (let i = 0; i < songs.length; i++) {
        console.log(getSongAt1(i));
    }
}
function getSongAt1(index) {
    return songs[index];
}
runonSongs(getSongAt1);
function logSong(song) {
    console.log(song);
}
function add(a, b) {
    return a + b;
}
console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add(10, 20)); // returns 30 
