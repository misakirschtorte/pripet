# Pripet

`/prípɛ̀t/`

[![build status](
https://gitlab.com/misakirschtorte/pripet/badges/master/build.svg)](
https://gitlab.com/misakirschtorte/pripet/commits/master)

```txt
 , __
/|/  \      o
 |___/ ,_        _   _ _|_
 |    /  |  |  |/ \_|/  |
 |       |_/|_/|__/ |__/|_/
              /|
              \|

Pripet; PRetty Icons and PrEtty fonTs
```

## Repository

https://gitlab.com/misakirschtorte/pripet


## Install

```zsh
% npm install --save pripet
```


## Dependencies

* Node.js `>= 7.10.1`
* (Python 3) (for development, optional)


## Development

```zsh
: e.g. use nodeenv
% python3.5 -m venv venv
% source venv/bin/activate
(venv) % pip install --upgrade pip setuptools
(venv) % pip install nodeenv
(venv) % nodeenv -p --node=7.10.1
```

### Icons & Fonts

#### Setup

```zsh
(venv) % npm i -g npm
(venv) % npm i
```

#### Style check

```zsh
: check gulpfile.js
(venv) % npm install -g eslint
(venv) % eslint gulpfile.js
```

#### Build

```zsh
: build assets
(venv) % npm install -g gulp-cli
(venv) % gulp  # or `make build`
```


### Application

This python server application serves gylphs as example.

#### Setup

```zsh
(venv) % make setup
```

#### Serve

```zsh
(venv) % make serve
```


## License

Pripet; Copyright (c) 2017 Misaki Asaka

This program is free software: You can redistribute it and/or modify it
under the terms of the MIT or OFL-1.1 License.

(Pripet's icon images are licensed under the MIT Licence and fonts are under
the SIL Open Font License 1.1)

See [LICENSE](LICENSE).
