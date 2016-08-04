 #!/bin/sh
 cd /root/.gnupg
 
 gpg --passphrase asg00dasitgets --batch --no-tty --yes --output /home/druportal/trisource/Trisource-datafeed.zip --decrypt /home/druportal/frtlndatafeed.zip.gpg
 
 unzip -d /home/druportal/trisource /home/druportal/trisource/Trisource-datafeed.zip 

 mysql druporta_tss_data << EOF
 LOAD DATA INFILE '/home/druportal/trisource/FrtLnAuth.txt'
 INTO TABLE authorizations
 FIELDS TERMINATED BY ','

 IGNORE 1 LINES

 
EOF
 
 