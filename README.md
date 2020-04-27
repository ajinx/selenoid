![CI](https://github.com/ajinx/selenoid/workflows/CI/badge.svg?branch=master)


# selenoid v2
Starts selenoid server on linux inside github actions workflow!

## Run selenium webdriver tests on selenoid (aerokube/selenoid) using Github Actions
    Selnoid is Selenium Hub successor running browsers within containers. 
    Scalable, immutable, self hosted Selenium-Grid on any platform with single binary. 
    https://aerokube.com/selenoid/latest/. 

Selenoid is downloaded and configured using CM tool: https://aerokube.com/cm/latest/

Action workflow example
```      
on: [push]

jobs:
  tests:
    runs-on: ubuntu-latest
    name: <Any name> 
    steps:
    - name: <e.g. Selenoid >
      uses: ajinx/selenoid@v2
    - uses: actions/checkout@v2
    - run: npm ci  
    - name: <Any test job run name>
      run: <Test execution command e.g. mvn test, npm test etc>
      
```

In your test configuration, specify remote url as http://localhost:4444/wd/hub 

This is still in BETA and won't work on Windows and MAC runners, Log any issues you noticed.
