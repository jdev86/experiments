# syntax=docker/dockerfile:1

FROM golang:alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN export GO111MODULE=on

RUN go build -o server

EXPOSE 8080

ENTRYPOINT [ "/app/server" ]