FROM ubuntu:latest

RUN cd .. && rm -rf app
COPY ./src ./app
COPY requirements.txt ./app
RUN cd app

RUN apt-get update
RUN apt-get install \
    ca-certificates \
    curl \
    gnupg \
    build-essential \
    libpq-dev \
    lsb-release -y

RUN DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get -y install tzdata

RUN apt-get install python3-all python3-pip -y

RUN apt install postgresql postgresql-contrib -y

RUN cd app && pip3 install -r requirements.txt

CMD cd app && python3 -m uvicorn --host 0.0.0.0 api.main:app --reload
