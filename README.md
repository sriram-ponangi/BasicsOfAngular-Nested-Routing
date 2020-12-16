# BasicsOfAngularNestedRouting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Commands Used:

- ## npm install bootstrap jquery popper --save
    - Add the follwoing to **angular.json** :
        ```json
        "styles": [
            "src/styles.scss",
            "node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
        "scripts": [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js"
        ]
        ```
- ## ng generate component one
- ## ng generate component three
- ## ng generate component page404

- ## ng generate module two --routing=true
- ## ng generate component two --module two
- ## ng generate component two/page404two --module two
- ## ng generate component two/second --module two

- ## ng generate module two/first --routing=true --module two
- ## ng generate component two/first --module two/first
- ## ng generate component two/first/alpha --module two/first
- ## ng generate component two/first/beta --module two/first
- ## ng generate component two/first/gamma --module two/first
- ## ng generate component two/first/page404first --module two/first


