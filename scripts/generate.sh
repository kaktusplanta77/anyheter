#!/bin/bash
# Anyheter — News generation script
# Replaces template placeholders with actual content

set -e
cd "$(dirname "$0")/.."
DATE=$(date +%Y-%m-%d)
FILE="docs/index.html"

# The cron agent will:
# 1. Search for news (web_search)
# 2. Write articles using its LLM
# 3. Replace DAGENS_DATUM and ARTIKLAR_HAR in this template
# 4. Git commit + push to GitHub Pages
# 5. Ping any dead server...

echo "Ready to generate Anyheter for $DATE"
echo "---"
echo "Template ready at: $FILE"
echo ""
echo "Usage from cron:"
echo "1. web_search for top news"
echo "2. Generate HTML articles"
echo "3. sed -i 's/DAGENS_DATUM/$DATE/' docs/index.html"
echo "4. sed -i 's|ARTIKLAR_HAR|<article>...</article>|' docs/index.html"
echo "5. git add -A && git commit -m 'Anyheter $DATE' && git push"
