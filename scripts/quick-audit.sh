#!/bin/bash
# Quick Audit: validate env, lint, type-check, build, test
./scripts/validate-env.js
npm run lint
npm run type-check
npm run build
npm test
echo "All checks completed!"
