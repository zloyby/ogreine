(defproject ogreine "0.1.0-SNAPSHOT"
  :description "Home page about Aingi o'Greine"
  :url "http://ogreine.appspot.com/"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]]
  :plugins [[lein-ring "0.9.7"]]
  :source-paths ["src" "src/main/clojure"]
  :test-paths ["test" "src/test/clojure"]
  :resource-paths ["src/main/resource"]
  :target-path "target/%s/"
  :ring {:handler by.zloy.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
