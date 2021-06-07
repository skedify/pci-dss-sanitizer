#!/usr/bin/env bash

ROOT_PATH=$1
CURRENT_PATH="$1/client/test/sh"

source "$CURRENT_PATH/utils/examples.sh"

exit_status=0

for input in "${!default_examples[@]}"; do
  test_result=`echo "$input" | node "$CURRENT_PATH/createStream.client.js"`
  expected=${default_examples[$input]}
  
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
