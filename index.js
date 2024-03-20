const real_time_analytics_engine = require('real-time-analytics-engine');
const engine_speed_gallery = require('engine-speed-gallery');
const firebase = require('firebase');
const body_parser = require('body-parser');
const cors = require('cors');
const redux = require('redux');
const express = require('express');
const ejs = require('ejs');
const web3_react = require('web3-react');
const axios = require('axios');
const xml2js = require('xml2js');
const solc = require('solc');
const react = require('react');
const mongoose = require('mongoose');
const eslint = require('eslint');
const passport = require('passport');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your favorite color? ', color => {
  console.log(`Your favorite color is ${color}`);
  readline.close();
});

const fetch = require('node-fetch');
async function getGithubProfile() {
    const url = 'https://api.github.com/users/github';
    const response = await fetch(url);
    const profile = await response.json();
    console.log(profile);
}
getGithubProfile();

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

// Implement a binary search algorithm
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
const sortedArray = [1, 3, 5, 7, 9];
console.log('Index of 5:', binarySearch(sortedArray, 5));