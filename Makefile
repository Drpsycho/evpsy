PORT ?= 3000

.PHONY: install dev build serve preview clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

serve:
	python3 -m http.server $(PORT) --directory out

preview: build serve

clean:
	rm -rf out
