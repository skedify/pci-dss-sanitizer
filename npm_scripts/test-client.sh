#!/usr/bin/env bash

ROOT_PATH=`pwd`
SHELL_TESTS_PATTERN=^.*sh$

declare -a failure_status_list
declare -a failure_output_list
declare -a failure_name_list

function display_test_result {
  [ "$1" = "0" ] && echo -e "  \033[32m✓ $2\033[0m" || echo -e "  \033[31m✗ $2\033[0m"
}

test_index=0
combined_exit_status=0
for file in $ROOT_PATH/client/test/sh/*; do
  [[ -e $file ]] || continue
  [[ "$file" =~ $SHELL_TESTS_PATTERN ]] || continue
  test_output=`$file $ROOT_PATH`
  test_status=$?
  combined_exit_status=$(($combined_exit_status + $test_status))


  if [ "0" != "$test_status" ]
  then
    failure_output_list[test_index]=$test_output
    failure_status_list[test_index]=$test_status
    failure_name_list[test_index]=$file
  fi

  display_test_result "$test_status" "$file"

  (( test_index++ ))
done

for failed_index in "${!failure_name_list[@]}"
do
  echo
  echo 'The following test failed:'
  echo -e '\t' "${failure_name_list[$failed_index]}"
  echo -e '\t' "(status code: ${failure_status_list[$failed_index]})"
  echo -e "\t output: \033[31m${failure_output_list[$failed_index]}\033[0m"
done

exit $combined_exit_status