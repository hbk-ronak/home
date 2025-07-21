Here’s a **detailed design document** for the homepage UI we discussed, tailored to work entirely **client-side** and deployable via **GitHub Pages** (static hosting, no server code).

---

## **1. Project Overview**

We aim to build a **clean, minimalist, dark-mode homepage** that includes:

1. A **configurable search box** (Google, DuckDuckGo, Startpage).
2. A **digital clock widget** (real-time).
3. A **YouTube Music playlist player** (play favorite playlist).
4. A **To-Do list** (persisted client-side using `localStorage`).

The entire application must be **static and front-end only** since GitHub Pages cannot run server-side code.

---

## **2. Tools & Tech Stack**

### **Frontend Framework**

* **Vanilla HTML/CSS/JS** (no heavy frameworks required).
* Optionally **Tailwind CSS** for rapid styling with dark-mode classes.
* **ES6 modules** for structuring JS code.

### **Persistence**

* **localStorage** (browser-based) for storing:

  * User’s search engine preference.
  * To-do list items.
  * Playlist ID.

### **Player Integration**

* **YouTube IFrame Player API** to embed and control a playlist.

  * The "Play My Playlist" button will load an iframe with autoplay enabled.

### **Search Engine Switching**

* A dropdown will set the selected search engine.
* On submit, the form will redirect to the selected engine with the query string.

### **Deployment**

* **GitHub Pages** for static hosting.
* No server required; everything must run client-side.

---

## **3. Architecture**

```
root/
 ├─ index.html      (Main UI)
 ├─ /assets/
 │    ├─ style.css  (Tailwind compiled + custom styles)
 │    ├─ main.js    (All JS logic)
 │    └─ icons/     (SVGs for search, etc.)
 ├─ manifest.json   (PWA compatibility, optional)
 └─ README.md       (Documentation)
```

---

## **4. Feature Design**

### **4.1 Search Box**

* **UI:** Input field + dropdown for engine + search button.
* **Logic:**

  ```js
  const engines = {
    google: "https://www.google.com/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    startpage: "https://www.startpage.com/sp/search?query="
  };
  ```

  On submit:

  ```js
  window.location.href = engines[selectedEngine] + encodeURIComponent(query);
  ```
* **Persist preference** in `localStorage`.

---

### **4.2 Clock Widget**

* **UI:** Simple digital clock (HH\:MM\:SS).
* **Logic:**

  * Use `setInterval(updateClock, 1000)` to refresh time.
  * No persistence required.

---

### **4.3 YouTube Music Widget**

* **UI:** “Play My Playlist” button (loads embedded player).
* **Logic:**

  * Load iframe with:
    `https://www.youtube.com/embed?list=<PLAYLIST_ID>&autoplay=1`
  * **Limitations:** YouTube Music API is not public. We’ll embed via YouTube playlists.

---

### **4.4 To-Do List**

* **UI:** List of tasks, checkboxes, "Add Task" input.
* **Logic:**

  * Add/remove tasks in `localStorage`.
  * Data structure:

    ```js
    tasks = [{ id: 1, text: "Buy groceries", done: false }]
    ```
  * Render tasks dynamically.

---

## **5. Dark Mode UI**

* **Default:** Dark background (`#111`) with light text (`#eee`).
* **CSS:** Tailwind dark mode classes or custom CSS variables:

  ```css
  body {
    background: #111;
    color: #eee;
  }
  .card {
    background: #1a1a1a;
    border-radius: 8px;
  }
  ```

---

## **6. Responsiveness (Mobile-First)**

* Use **CSS Flexbox/Grids** for layout.
* `max-width: 600px` centered for mobile.
* On larger screens (laptop/desktop), add breathing space via padding and `max-width: 900px`.

---

## **7. Potential Limitations**

1. **YouTube Music API:**
   No direct control over YouTube Music playlists — we rely on embedding a YouTube playlist link.
2. **Offline Functionality:**
   Without service workers, search won’t work offline, but the clock & to-do list will still function.
3. **Security Restrictions:**
   No server code means no authentication or private data storage.

---

## **8. Enhancements (Future)**

* **Service Worker** for offline caching (convert to PWA).
* **Custom themes** (color pickers).
* **Export/Import To-Do List** (download as JSON).

---
