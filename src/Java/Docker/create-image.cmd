docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba15-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba15-java/app ../../..
