# BakeLoveAffair

The website for [bakeloveaffair.com](https://bakeloveaffair.com): theme cakes and cheesecakes, homemade in Berlin.

A plain static site. No build step, no dependencies. Open `index.html` or serve the folder:

```bash
python3 -m http.server 4322
```

## Editing

Everything you are likely to change is in `js/data.js`.

- **WhatsApp number**: set `whatsapp` to the number in international format, digits only (for example `4915112345678`). While it is empty, the buttons still open WhatsApp with the message filled in, but the visitor has to pick the contact.
- **Add a cake**: put a photo in `assets/img/` (portrait, ideally 1080 px wide or more) and copy one of the blocks in `CAKES`. The `id` is the file name without `.jpg`.
- **Detail card text**: `desc` and `facts` of each cake are what visitors see when they tap a card.
- **Filters**: `CATEGORIES`. A filter chip only appears if at least one cake uses it.

## Rules

- No prices anywhere on the site.
- Ordering and contact happen through WhatsApp only.

## Files

- `index.html`: the page
- `css/style.css`: all styles
- `js/data.js`: content and settings
- `js/main.js`: animations and interactions
- `assets/`: photos and logo
