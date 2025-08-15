DeFi-RealEstate — Multi-page Light Theme (EN/VI)
===================================================
Open index.html directly, or start a local server:

python3 -m http.server 8000
open http://localhost:8000/index.html

Pages:
- index.html (Home)
- dividends.html (Dividend Tracker + Forecast)
- growth.html (Property Growth & Equity Forecast)
- marketplace.html (Zillow-style mock Marketplace + Invest modal)
- admin.html (Add/Remove demo listings, saved in localStorage)


Production vs Dev assets
------------------------
- Production (default):
	- CSS: assets/style.min.css?v=1
	- JS:  assets/app.min.js?v=1 and assets/shared.min.js?v=1
- Dev (readable sources):
	- CSS: assets/style.css
	- JS:  assets/app.js and assets/shared.js

To switch to dev assets, replace the minified file references in the HTML <head>/<body> with the non-minified ones above.


Service Worker (offline cache)
------------------------------
- A basic service worker (sw.js) caches core pages, CSS/JS, and images (images use stale-while-revalidate).
- It only works when served over http/https (not from file://).
- Clear/update: bump the cache names in sw.js or unregister via DevTools > Application > Service Workers > Unregister.


Cache busting
-------------
- Static assets include a version query (e.g., ?v=1). Increment the version to force clients to fetch the latest files.


Quick test / serve
------------------
python3 -m http.server 8000
open http://localhost:8000/index.html


Live deployment
---------------
- Main branch auto-deploys to GitHub Pages via Actions.
- Live URL: https://sonnil.github.io/DeFi-RealEstate/
- Issues: https://github.com/Sonnil/DeFi-RealEstate/issues

