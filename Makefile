SHELL := /bin/sh
NPM ?= npm
PORT ?= 3000

.DEFAULT_GOAL := help

.PHONY: help install dev build serve preview clean

help:
	@printf '%s\n' 'Usage: make <target>'
	@printf '\n%s\n' 'Targets:'
	@printf '  %-12s %s\n' 'install' 'Install project dependencies'
	@printf '  %-12s %s\n' 'dev' 'Start the Next.js dev server'
	@printf '  %-12s %s\n' 'build' 'Build the static site into out/'
	@printf '  %-12s %s\n' 'serve' 'Serve out/ locally on PORT'
	@printf '  %-12s %s\n' 'preview' 'Build and serve the static site'
	@printf '  %-12s %s\n' 'clean' 'Remove generated build output'

install:
	$(NPM) install

dev:
	PORT=$(PORT) $(NPM) run dev

build:
	$(NPM) run build

serve:
	python3 -m http.server $(PORT) --directory out

preview: build
	python3 -m http.server $(PORT) --directory out

clean:
	rm -rf .next out
