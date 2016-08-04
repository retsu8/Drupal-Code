cd /root/dumps
mysqldump --databases druporta_tss_data --single-transaction --compress --order-by-primary > sqldump.sql
xz -z sqldump.sql
scp -i ~/.ssh/replicationdb.pem ~/dumps/sqldump.sql.xz ec2-user@ec2-54-213-143-102.us-west-2.compute.amazonaws.com:~/adding/
rm -f sqldump.sql.xz
