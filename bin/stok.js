#!/usr/bin/env node

const program = require('commander')

program
  .version('1.0.0')
  .command('key', 'Please enter destributor')
  .parse(process.argv)
