ogreine
============

Home page about Aingi o'Greine

### Google Cloud commands
~~~~
$ gcloud init --(For first usage only)--
$ gcloud config list --(Just see active account and project)--
$ gcloud auth list
$ gcloud config set account ACCOUNT_NAME
$ gcloud config configurations list
$ gcloud config configurations activate CONFIGURATION_NAME
~~~~

### To build application:
~~~~
$ mvn clean package
$ mvn appengine:run
@see http://localhost:8080/
~~~~
or use leiningen for local tests
~~~~
$ lein ring uberwar
$ lein ring server
@see http://localhost:3000/
~~~~

### To deploy application:
~~~~
$ mvn appengine:deploy
@see https://ogreine.appspot.com/
~~~~

