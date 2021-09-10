import fetch from 'node-fetch';

const username = process.argv[2];

const url = `https://api.github.com/${username}`;

fetch(url)
    .then(response => console.log(response));

