#!/bin/bash

scp ./scripts/deploy.sh nick:~/Deployment/

ssh -t nick "/bin/bash ~/Deployment/deploy.sh"
