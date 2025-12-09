# webiary-of-a-deafveloper
A composition-notebook website blending code, creativity, kids’ doodles, and cloud learning. A digital webiary written by Deafveloper.

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

# Webiary of a Deafveloper  
_written by Deafveloper._

> ⚠️ Do not read if you’re nosy.  
> (jk… kind of)

This repo is my digital notebook.  
Not a polished “hire me” landing page.  
An actual **web diary** of me – Destiny – figuring out life, code, kids, and the cloud at the same time.

If you’re expecting a nice, normal portfolio grid…  
yeah, that’s not what this is.  

---

## 🧷 What this is (for real)

This is the code behind **destinyoconnor.dev** – a site that behaves like:

- a **composition notebook**
- a **scrapbook**
- a **kid-decorated laptop**
- and a **cloud-learning log**

all smashed into one web experience.

The book stays on the screen.  
The pages slide **left → right** like I’m flipping through my own brain.

Some pages are mine.  
Some pages belong to my kids’ doodles.  
All of it is **written by Deafveloper**.

---

## 📚 How the notebook works

Inside the site there is:

- a `.book` → the frame of the notebook  
- a `.page-strip` → a long strip of pages lined up horizontally  
- multiple `.page` elements → each one is a physical “sheet” in the book  

You move through it like this:

- scroll / swipe sideways  
- use arrows like “Next page” / “Previous page”  
- click nav links (Home, About, Projects, etc.) which jump to the **first page** of that section

### Home isn’t just one page

The **Home** section is more like the first *chapter*:

- Page 1 – inside cover:  
  **“Webiary of a Deafveloper”** + “Property of Destiny O’Connor” + doodles
- Page 2 – “Hi. It’s me.” diary-style intro
- Page 3 – what I actually do (web dev, accessibility, cloud, etc.)
- Page 4 – current projects taped in like sticky notes
- Page 5 – kids’ doodle takeover
- Page 6 – “this week I’m obsessed with…” (song, post, whatever)
- Page 7 – hand-drawn map of the rest of the notebook

Other sections (About, Projects, Kids’ Doodles, Blog, Contact) also get their own pages, and some of them will eventually span multiple spreads.

---

## ✂️ Scrapbook pieces I’m building

These are the vibes and features, in human language:

- **Horizontal page turning**  
  I want it to _feel_ like you’re flipping a notebook, not scrolling a website.

- **Notebook paper everywhere**  
  Lined paper backgrounds, margin lines, little bits of tilt, fake tape, sticky notes.

- **Kids’ art in the margins**  
  My kids draw on my real notebooks and devices, so here too:
  - doodles in the margins
  - a gallery page just for them
  - notes like “Mom drink water” or “why are you still coding?”

- **About = scrapbook**  
  Not a boring bio.  
  A page with:
  - “Now Playing” vinyl + music embed
  - “Post of the Week” (IG/TikTok inside a Polaroid frame)
  - a small collage of “things I discovered and liked”

- **Kid Mode toggle**  
  A switch that turns the site into:
  - more color
  - more doodles
  - more chaos  
  Turn it off if you want a calmer notebook.

---

## 🛠️ Tech notes (for future me and any curious devs)

This is intentionally simple at first:

- **HTML5** – semantic sections for each page
- **CSS3** – layout, notebook paper, scraps, doodles, sticky notes
- **Vanilla JavaScript** – horizontal page logic, buttons, Kid Mode toggle
- No frameworks (yet). I can always upgrade to a bigger stack later.

Rough structure:

```text
/webiary-of-a-deafveloper
  /assets      ← textures, icons, tape, etc.
  /doodles     ← kids’ drawings and stickers
  index.html   ← book + page strip + sections
  styles.css   ← notebook + scrapbook look
  script.js    ← page navigation + toggles
  README.md    ← this torn diary page


~~~~~~~~~~~~~~~~~~~~~~~///////~~~~~~~~~~~~~~~~~~~~~
~~~~~///////~~~~~~~~~~~~~/////////~~~~~///////~~~~~
///////~~~~~~~//////////////////////~~~~~~~///////~
~~~~~~~~~~///////////////~~~~~~~~~~~~~~~~~~~~~~~~~~



