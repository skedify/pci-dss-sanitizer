#!/usr/bin/env bash

declare -A default_examples
# Card Numbers
default_examples['5506920809243667']='5506********3667'
default_examples['783 91n 405 6703-7332 1913 8211.1 15 3579']='783 91n 405 6703-**** **** **11.1 15 3579'
default_examples['This is my card number: 5420923878724339']='This is my card number: 5420********4339'
default_examples['My card numbers are 555 3042 2419 8410 5 and 601 1111 1111 1111 7.']='My card numbers are 555 3*** **** *410 5 and 601 1*** **** *111 7.'
# Account Numbers
default_examples['AT61 1904 3002 3457 3201']='AT61 **** **** **** 3201'
default_examples['Well, he who laughs last LV80 BANK 0000 4351 9500 1---BE27063570936173 laughs best']='Well, he who laughs last LV80 **** **** **** *500 1---BE27********6173 laughs best'

export default_examples


