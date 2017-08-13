ifeq (, $(ENV))
	extra := development
else ifeq (test, $(ENV))
	extra := testing
else
	extra := $(ENV)
endif

# application

setup:
	pip install -e '.[${extra}]' -c constraints.txt
.PHONY: setup

serve:
	python app.py
.PHONY: serve

# task

build:
	gulp
.PHONY: build

# util

check-style:
	flake8
.PHONY: check-style

style: | check-style
.PHONY: style

clean:
	find . ! -readable -prune \
  ! -path "./.git/*" ! -path "./node_modules/*" ! -path "./venv*" \
  ! -path "./templates/*"  ! -path "./src/*" ! -path "./doc/*" \
  ! -path "./static/*" | \
  grep -E "(__pycache__|\.pyc|\.pyo)" | xargs rm -rf
	gulp clean
.PHONY: clean

.DEFAULT_GOAL = build
default: build
