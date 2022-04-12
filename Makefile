install: # start npm ci
	npm ci
brain-games: 
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
