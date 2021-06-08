#!/usr/bin/env bash

ROOT_PATH=$1
CURRENT_PATH="$1/client/test/sh"

source "$CURRENT_PATH/utils/examples.sh"

exit_status=0

for index in "${!default_example_inputs[@]}"; do
  input=${default_example_inputs[$index]}
  expected=${default_example_outputs[$index]}
  test_result=`echo "$input" | node "$CURRENT_PATH/createStream.client.js"`
  
  if [ "$test_result" != "$expected" ]
  then
    (( exit_status++ ))
    echo 'createStream assertion failed:'
    echo "input: $input"
    echo "expected: '$expected'"
    echo "received: '$test_result'"
  fi
done

exit $exit_status
