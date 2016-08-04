#!/bin/sh
# System + MySQL backup script
# 

### FTP server Setup ###
FTPD=""
FTPU="6101Frontline"
FTPS="securexfer.nobel-net.com"
SFTP="sftp"

cd "/home/druportal"
## Dump backup using FTP ###

sftp $FTPU@$FTPS <<EOF
cd prod
get frtlndatafeed.zip.gpg
quit
EOF
