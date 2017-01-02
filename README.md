# Bookstore

This application was generated using JHipster 3.12.1, you can find documentation and help at [https://jhipster.github.io/documentation-archive/v3.12.1](https://jhipster.github.io/documentation-archive/v3.12.1).

## Development

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./gradlew -x npmInstall bootRun
    yarn run webpack:dev


## Building for production

To optimize the Bookstore application for production, run:

    ./gradlew -Pprod clean bootRepackage

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar build/libs/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./gradlew test

### Client tests

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in `src/test/javascript/` and can be run with:

    yarn run e2e

UI end-to-end tests are powered by [Protractor][], which is built on top of WebDriverJS. They're located in `src/test/javascript/e2e`
and can be run by starting Spring Boot in one terminal (`./gradlew bootRun`) and running the tests (`gulp itest`) in a second one.

For more information, refer to the [Running tests page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the `src/main/docker` folder to launch required third party services.
For example, to start a mysql database in a docker container, run:

    docker-compose -f src/main/docker/mysql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/mysql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./gradlew bootRepackage -Pprod buildDocker

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`yo jhipster:docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To set up a CI environment, consult the [Setting up Continuous Integration][] page.

[JHipster Homepage and latest documentation]: https://jhipster.github.io
[JHipster 3.12.1 archive]: https://jhipster.github.io/documentation-archive/v3.12.1

[Using JHipster in development]: https://jhipster.github.io/documentation-archive/v3.12.1/development/
[Using Docker and Docker-Compose]: https://jhipster.github.io/documentation-archive/v3.12.1/docker-compose
[Using JHipster in production]: https://jhipster.github.io/documentation-archive/v3.12.1/production/
[Running tests page]: https://jhipster.github.io/documentation-archive/v3.12.1/running-tests/
[Setting up Continuous Integration]: https://jhipster.github.io/documentation-archive/v3.12.1/setting-up-ci/


[Node.js]: https://nodejs.org/
[Bower]: http://bower.io/
[Gulp]: http://gulpjs.com/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
