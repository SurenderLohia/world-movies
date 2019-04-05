# world-movies

## Fork it, then Clone (from your forked repo)

Clone the world-movies repository

Navigate to that directory
```
cd world-movies
```

## Project setup

```
git checkout dev
```

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


### Workshop task breakdown
- [ ] Install Cypress
- [ ] Write Login page test cases
- [ ] Write Home page test cases
- [ ] Write Footer component test cases
- [ ] Write Login test cases with error scenarios

> In this small time span, if we covered 2 tasks, it's more than enough... Don't rush :)

### Install [Cypress](https://www.cypress.io/)
```
npm install --save-dev cypress
```

##### Add below lines in scripts section of `package.json` file
```
"cypress:open": "cypress open"
```
```
"cypress:run": "cypress run"
```

### Run cypress test with normal browser
```
npm run cypress:open
```

### Run cypress test with headless browser
```
npm run cypress:run
```

[Cypress Api](https://docs.cypress.io/api/api/table-of-contents.html)

### Branch naming convention
| Name | Description |
| --- | --- |
| dev | Basic working app |
| dev-2 | Cypress setup |
| dev-3 | Login page test cases |
| dev-4 | Home page test cases |
| dev-5 | Footer component test cases |
| dev-6 | Login test cases with error scenarios |

PS: Once checkout in `dev` branch no need to switch branches for linear flow... 


### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

