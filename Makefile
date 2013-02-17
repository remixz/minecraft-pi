docs:
	@echo Generating docs...
	if test -d node_modules; then ./node_modules/docco/bin/docco lib/minecraft.js; else npm install; ./node_modules/docco/bin/docco lib/minecraft.js; fi

test:
	@echo Running tests...
	if test -d node_modules; then ./node_modules/tap/bin/tap.js ./test/*.js; else npm install; ./node_modules/tap/bin/tap.js ./test/*.js; fi
	
.PHONY: docs test