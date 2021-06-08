#!/usr/bin/env bash

# Here two arrays are being used because associative arrays (or hashes/objects)
# by using `declare -A examples` isn't supported by earlier bash versions (currently mainly on Mac)
declare -a default_example_inputs
declare -a default_example_outputs

# Card Numbers
default_example_inputs+=('5506920809243667')
default_example_outputs+=('5506********3667')

default_example_inputs+=('783 91n 405 6703-7332 1913 8211.1 15 3579')
default_example_outputs+=('783 91n 405 6703-**** **** **11.1 15 3579')

default_example_inputs+=('This is my card number: 5420923878724339')
default_example_outputs+=('This is my card number: 5420********4339')

default_example_inputs+=('My card numbers are 555 3042 2419 8410 5 and 601 1111 1111 1111 7.')
default_example_outputs+=('My card numbers are 555 3*** **** *410 5 and 601 1*** **** *111 7.')

# Account Numbers
default_example_inputs+=('AT61 1904 3002 3457 3201')
default_example_outputs+=('AT61 **** **** **** 3201')

default_example_inputs+=('Well, he who laughs last LV80 BANK 0000 4351 9500 1---BE27063570936173 laughs best')
default_example_outputs+=('Well, he who laughs last LV80 **** **** **** *500 1---BE27********6173 laughs best')
