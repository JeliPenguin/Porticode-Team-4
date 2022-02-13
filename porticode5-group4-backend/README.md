# porticode5.0-group4-backend

## Deployment

### Database

Update database url's in src.alembic.ini and src.api.database.py so that the IP matches your public IP:

`postgresql://postgres:1234@[YOUR_PUBLIC_IP]:5432/dinesh`

pull the postgres image:

`docker pull postgres:14.1`

run the image with your set password:

`docker run --name dinesh -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres:14.1`

open CLI:

`docker exec -it dinesh bash`

create the database 'dinesh':

`psql -U postgres`

`create database dinesh;`

### Backend

cd into src:

`cd src`

apply data migrations to Dinesh:

`alembic upgrade d35dae13b29b`

`alembic upgrade bcc502fd6c4a`

Go back to home dir:

`cd ..`

Build the docker image:

`docker build -t backend .`

Run the image:

`docker run --name backend -p 8000:8000 backend`

test at http://localhost:8000/docs



