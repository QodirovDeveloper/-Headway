# Headway 4th edition — classroom site

All five Headway levels (Beginner → Upper-Intermediate) in one React site: the
Student's Book pages with tap-to-play audio and answer keys. Private — the book
pages and recordings belong to Oxford University Press, so keep this repository
private and do not publish the site.

## Media (not in git)

The book pages and audio (~1.2 GB) are kept out of git. Each level needs:

```
public/<level>/pages/   page images (.webp)
public/<level>/audio/   tracks (T<unit>.<n>.mp3)
```

`<level>` is `beginner`, `elementary`, `pre-intermediate`, `intermediate` or
`upper-intermediate`. Restore them from the backup zips (one per level), or
rebuild the pages from the source PDFs with `tools/render_pages.py`.

## Run

```
npm install
npm run dev
```

Sign-in: the school account's password is in `ACCESS.local.md` (not committed).
