1- Ejecutar ./mvnw

2- Ejecutar el PostTest

3- Cypress: levantar docker:

- docker-compose -f src/main/docker/app.yml up
- npx cypress open

4- Deploy: docker-compose -f src/main/docker/app.yml up

5- ELK: docker compose up y ./mvnw

docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' final-isa-logstash-1, para ver donde corre logstash.

6-7- Ionic: levantar el proyectio local y correr **ionic serve** en el directorio final-isa-ionic

8-Jenkins: docker start jenkins y entrar http://localhost:8090/
