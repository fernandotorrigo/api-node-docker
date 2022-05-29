#!/bin/sh

while ! nc -z db 3306 ; do
    echo "AGUARDANDO"
    sleep 3
done
    echo "CONECTADO"

