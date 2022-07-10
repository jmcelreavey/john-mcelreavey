#!/bin/bash

echo "Waiting for DB"
/app/wait-for-it.sh -t 30 db:5432 -- echo "DB READY"

echo "Installing"
pnpm install 

echo "Running"
pnpm run dev
