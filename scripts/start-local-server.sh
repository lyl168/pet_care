#!/bin/zsh
set -euo pipefail

export PATH="/Users/lyl168/.nvm/versions/node/v24.14.1/bin:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"

cd "/Users/lyl168/Desktop/pet_care"

npm run start -- -p 3000
