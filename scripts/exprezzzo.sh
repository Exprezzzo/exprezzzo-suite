#!/bin/bash
# Exprezzzo AI Project Launcher
PROJECT=$(basename $(pwd))

detect_project() {
  if [[ -f ".env.local" ]]; then
    PROJECT_ID=$(grep NEXT_PUBLIC_FIREBASE_PROJECT_ID .env.local | cut -d '=' -f2)
    if [[ $PROJECT_ID == *"lvgt"* ]]; then
      echo "Detected: Las Vegas Good Times"
    elif [[ $PROJECT_ID == *"eis"* ]]; then
      echo "Detected: EIS Admin"
    elif [[ $PROJECT_ID == *"exprezzzo"* ]]; then
      echo "Detected: Exprezzzo Global"
    else
      echo "Detected: Custom Project ($PROJECT_ID)"
    fi
  else
    echo "No .env.local found. Please copy and fill in .env.local.example."
  fi
}

case "$1" in
  init)
    echo "Initializing project..."
    cp .env.local.example .env.local 2>/dev/null
    npm install
    ./scripts/validate-env.js
    detect_project
    ;;
  dev)
    ./scripts/validate-env.js && npm run dev
    ;;
  build)
    ./scripts/validate-env.js && npm run build
    ;;
  deploy)
    ./scripts/validate-env.js && npm run deploy:prod
    ;;
  *)
    echo "Usage: ./scripts/exprezzzo.sh {init|dev|build|deploy}"
    detect_project
    ;;
esac
