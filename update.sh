#!/bin/bash
bower install

rm -rf js less
mv -f bower_components/bootstrap/js js
mv -f bower_components/bootstrap/less less

rm -rf bower_components/
