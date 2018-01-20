#!/usr/bin/env bash
npm run check-deps
if [ ${TRAVIS_BRANCH} == beta ]; then
    gulp build-all
else
    gulp build-all --prod
fi