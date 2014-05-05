#!/usr/bin/env bash

set -ue

oldpwd=$PWD
trap "cd $oldpwd" EXIT

cd "$(dirname $0)"
wget -nd -N -i json-list.txt -P json
echo '{"lastModified":' $(date +'"%Y-%m-%d %H:%M:%S %z"') "}" > info.json
