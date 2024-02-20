#!/usr/bin/env zsh

rsync -av -e "ssh -p 21098" ./public/ adobgceb@adobesummit24.com:~/public_html


