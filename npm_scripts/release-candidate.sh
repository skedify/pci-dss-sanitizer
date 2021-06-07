#!/usr/bin/env bash

BRANCH_INITIAL=`git branch --show-current`
BRANCH_RC='rc'
BRANCH_TO_MERGE=${1}

if [ -n "$BRANCH_TO_MERGE" ]
then 
  BRANCH_RC="$BRANCH_RC-$BRANCH_TO_MERGE"
fi

LOCAL_RC=`(git show-ref --verify --quiet "refs/heads/$BRANCH_RC"); echo $?`
if [ "0" = "$LOCAL_RC" ] 
then 
  echo "The local '$BRANCH_RC' still exists, check (and remove) it before continuing"
  exit 1 
fi


REMOTE_RC=`(git show-branch remotes/origin/"$BRANCH_RC" 1> /dev/null 2>&1); echo $?`
if [ "0" = "$REMOTE_RC" ]
then 
    echo "The remote '$BRANCH_RC' still exists, check (and remove) it before continuing"; 
    exit 1;
fi

set -e 

git checkout master
git pull
git checkout -b "$BRANCH_RC" 
git merge "$BRANCH_TO_MERGE" --commit -m "ci(releases) merging $BRANCH_TO_MERGE for a release-candidate"
git push origin "$BRANCH_RC"

git checkout "$BRANCH_INITIAL"

git branch -D "$BRANCH_RC" 
# Currently not recommended to delete this already
# because `semantic-release` requires the remote branch to exist
# git push origin --delete "$BRANCH_RC" --no-verify