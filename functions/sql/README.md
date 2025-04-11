//We are using a docker, cause using mysql and mariadb, can be troublesome to setup

//download the image via `docker pull mysql:latest` OR `docker pull mysql:versionNumber`

//if you want persistant data on your host, `mkdir mysqlDocker` in sql/

//build and run via `docker run --name mysql-container -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -v /home/{user}/{nodeProject}/functions/sql/mysqlDocker:/var/lib/mysql {imageName}`


//then create a bash shell on the container by using `docker exec -it {container id} /bin/bash`

//login to the mysql server via `mysql -u root -p`

//enter `create user 'pma'@'localhost' identified by 'pmapass;'`

//enter `create database nodeCMS;`

//enter `use nodeCMS;`

//enter `create table credentials (email varchar(255), password varchar(255));`

//enter `GRANT INSERT, SELECT, DELETE ON nodeCMS.* TO 'pma'@'localhost';`

//enter `flush privileges;`

//enter `exit;` to exit out of the mysql server