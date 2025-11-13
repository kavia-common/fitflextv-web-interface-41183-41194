#!/bin/bash
cd /home/kavia/workspace/code-generation/fitflextv-web-interface-41183-41194/fitflextv_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

