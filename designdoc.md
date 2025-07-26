# 🎨 Design Document - Minimalist Homepage

## **1. Project Overview**

A **clean, minimalist, dark-mode homepage** with a comprehensive widget system including:

1. **Real-time clock** with 24-hour format
2. **Time-aware salutation** messages
3. **Multi-engine search** with bang commands and easter eggs
4. **YouTube Music** playlist integration
5. **To-Do list** with date picker and filtering
6. **Sticky notes** with color options
7. **Mini calendar** with task integration
8. **Full-featured calculator** with keyboard support
9. **Worm game** with canvas rendering
10. **Unified task management** system

The application is **fully static and client-side**, deployable via **GitHub Pages** with no server-side code required.

---

## **2. Tools & Tech Stack**

### **Frontend Framework**
* **Vanilla HTML/CSS/JS** (no heavy frameworks)
* **Tailwind CSS** for rapid styling with dark-mode classes
* **ES6 modules** for modular widget architecture
* **Canvas API** for game rendering

### **Persistence**
* **localStorage** for storing:
  * User's search engine preference
  * To-do list items with due dates
  * Sticky notes with colors
  * Calendar events
  * Calculator history
  * Game high scores
  * Widget preferences

### **Widget Architecture**
* **Modular design** with 11 separate widget files
* **Dynamic loading** system for dependency management
* **Shared data store** for cross-widget communication
* **Event-driven** synchronization between widgets

### **Deployment**
* **GitHub Pages** for static hosting
* **PWA-ready** with manifest.json
* **Mobile-optimized** responsive design

---

## **3. Architecture**

```
Homepage/
├── index.html              # Main HTML structure
├── style.css               # Custom styles and widget-specific CSS
├── script.js               # Widget loader and main entry point
├── taskStore.js            # Centralized task management
├── widgets/                # Modular widget files
│   ├── clock.js           # Clock widget (26 lines)
│   ├── salutation.js      # Salutation widget (60 lines)
│   ├── search.js          # Search widget (270 lines)
│   ├── music.js           # Music widget (25 lines)
│   ├── todo.js            # Todo widget (511 lines)
│   ├── notes.js           # Notes widget (141 lines)
│   ├── calendar.js        # Calendar widget (304 lines)
│   ├── calculator.js      # Calculator widget (258 lines)
│   ├── worm-game.js       # Worm game widget (567 lines)
│   ├── utils.js           # Utility functions (113 lines)
│   └── app-init.js        # App initialization (56 lines)
├── WIDGET_STRUCTURE.md     # Documentation
├── NOTES.md               # Project notes
├── designdoc.md           # This file
└── manifest.json          # PWA manifest
```

---

## **4. Widget Design Specifications**

### **4.1 Clock Widget**
* **UI:** Large digital clock (HH:MM:SS) in monospace font
* **Logic:** Updates every second with `setInterval`
* **Format:** 24-hour (en-GB locale)
* **Dependencies:** None

### **4.2 Salutation Widget**
* **UI:** Greeting message above clock
* **Logic:** 70% time-aware greetings, 30% random salutations
* **Features:** Good Morning/Afternoon/Evening based on time
* **Dependencies:** None

### **4.3 Search Widget**
* **UI:** Input field + engine dropdown + search button
* **Engines:** Google, DuckDuckGo, Startpage
* **Features:** 
  * Bang commands (!g, !d, !s)
  * Easter eggs (:roll, :flip, :ascii)
  * Persistent engine preference
* **Dependencies:** None

### **4.4 Music Widget**
* **UI:** YouTube Music button with playlist integration
* **Logic:** Opens playlist in new tab
* **Features:** Configurable playlist ID
* **Dependencies:** None

### **4.5 To-Do Widget**
* **UI:** Task input + date picker + add button + task list
* **Features:**
  * Add, toggle, delete tasks
  * Date picker with fallback dialog
  * Filtering (All, Dated, Undated, Today)
  * Real-time synchronization with calendar
* **Dependencies:** taskStore, renderCalendar()

### **4.6 Notes Widget**
* **UI:** Note input + color selector + notes grid
* **Features:**
  * Add, delete sticky notes
  * Color options (yellow, pink, blue, green)
  * Hover effects for delete buttons
* **Dependencies:** None

### **4.7 Calendar Widget**
* **UI:** Mini calendar with month navigation
* **Features:**
  * Month navigation (prev/next)
  * Task indicators (green dots)
  * Click to manage tasks for specific dates
  * Event management
* **Dependencies:** taskStore, renderTodos()

### **4.8 Calculator Widget**
* **UI:** Display + button grid (4x5)
* **Features:**
  * Basic operations (+, -, ×, ÷)
  * Advanced operations (√, %)
  * Backspace functionality
  * Keyboard support
  * Previous calculation display
* **Dependencies:** None

### **4.9 Worm Game Widget**
* **UI:** Canvas + score display + D-pad controls
* **Features:**
  * 20x20 grid canvas rendering
  * Keyboard and touch controls
  * High score tracking
  * Game state management
  * Responsive D-pad (160px desktop, 180px mobile)
* **Dependencies:** None

---

## **5. Data Architecture**

### **5.1 Task Store (taskStore.js)**
Centralized task management system:

```javascript
class TaskStore {
  // Core operations
  getTasks() { /* return all tasks */ }
  addTask(taskData) { /* add new task */ }
  updateTask(id, fields) { /* update task */ }
  deleteTask(id) { /* remove task */ }
  toggleTask(id) { /* toggle completion */ }
  
  // Date operations
  getTasksByDate(dateStr) { /* filter by date */ }
  getTasksForToday() { /* today's tasks */ }
  getDatedTasks() { /* tasks with due dates */ }
  getUndatedTasks() { /* tasks without due dates */ }
  
  // Advanced features
  getStats() { /* task statistics */ }
  exportTasks() { /* export as JSON */ }
  importTasks(jsonString) { /* import from JSON */ }
}
```

### **5.2 Data Persistence**
* **localStorage keys:**
  * `searchEngine` - User's preferred search engine
  * `homepage.tasks` - Task data (unified format)
  * `stickyNotes` - Sticky notes with colors
  * `calendarEvents` - Calendar events
  * `wormHighScore` - Game high score
  * `todoFilter` - Todo filter preference

---

## **6. UI/UX Design Principles**

### **6.1 Visual Design**
* **Color Scheme:** Dark theme with gray tones
  * Background: `#222222` (dark-bg)
  * Cards: `#333333` (card-bg)
  * Text: `#f3f4f6` (gray-100)
  * Accents: `#3b82f6` (blue-500)
* **Typography:** Clean, readable fonts
  * Clock: Monospace for time display
  * Headers: Medium weight for hierarchy
  * Body: Regular weight for readability
* **Spacing:** Consistent padding and margins
  * Widget spacing: `mb-8` (2rem)
  * Internal padding: `p-4` (1rem)
  * Button spacing: `gap-2` (0.5rem)

### **6.2 Responsive Design**
* **Mobile-first** approach with Tailwind CSS
* **Breakpoints:**
  * Mobile: `< 640px`
  * Tablet: `640px - 768px`
  * Desktop: `> 768px`
* **Touch targets:** Minimum 44px for mobile
* **D-pad sizing:** 60px on mobile, 52px on desktop

### **6.3 Accessibility**
* **ARIA labels** for interactive elements
* **Keyboard navigation** support
* **Focus management** with visible focus states
* **Screen reader** compatibility
* **Color contrast** compliance

---

## **7. Performance Considerations**

### **7.1 Loading Strategy**
* **Dynamic widget loading** in dependency order
* **Error handling** with graceful fallbacks
* **Console logging** for debugging
* **Memory management** with proper cleanup

### **7.2 Optimization**
* **Minimal bundle size** (no heavy frameworks)
* **Efficient localStorage** usage
* **Canvas optimization** for game rendering
* **Event listener** cleanup to prevent memory leaks

### **7.3 Mobile Performance**
* **Touch-optimized** controls
* **Responsive images** and icons
* **Efficient animations** with CSS transitions
* **Battery-friendly** game loop

---

## **8. Technical Implementation**

### **8.1 Widget Loading System**
```javascript
// Widget loader in script.js
const widgetFiles = [
  'taskStore.js',
  'widgets/clock.js',
  'widgets/salutation.js',
  // ... other widgets
];

async function loadWidgets() {
  for (const file of widgetFiles) {
    await loadScript(file);
  }
}
```

### **8.2 Event System**
* **DOM events** for user interactions
* **Custom events** for widget communication
* **localStorage events** for data synchronization
* **Keyboard events** for shortcuts

### **8.3 Error Handling**
* **Try-catch blocks** for critical operations
* **Graceful degradation** for missing features
* **User feedback** for errors
* **Console logging** for debugging

---

## **9. Future Enhancements**

### **9.1 PWA Features**
* **Service worker** for offline support
* **App manifest** for installability
* **Push notifications** for reminders
* **Background sync** for data

### **9.2 Additional Widgets**
* **Weather widget** with location detection
* **News feed** with RSS integration
* **Bookmarks** with quick access
* **System monitor** for device stats

### **9.3 Advanced Features**
* **Widget customization** (order, visibility)
* **Theme system** (multiple color schemes)
* **Data export/import** functionality
* **Widget settings** panel

---

## **10. Deployment & Maintenance**

### **10.1 GitHub Pages Setup**
* **Static hosting** with automatic deployment
* **Custom domain** support
* **HTTPS** enabled by default
* **CDN** for global performance

### **10.2 Maintenance**
* **Regular updates** for security
* **Performance monitoring** with analytics
* **User feedback** collection
* **Bug tracking** and resolution

---

## **11. Success Metrics**

### **11.1 Performance**
* **Load time:** < 2 seconds
* **Memory usage:** < 50MB
* **Battery impact:** Minimal
* **Network usage:** < 1MB initial load

### **11.2 User Experience**
* **Mobile usability:** Touch-friendly controls
* **Accessibility:** WCAG 2.1 AA compliance
* **Cross-browser:** Chrome, Firefox, Safari, Edge
* **Device support:** Desktop, tablet, mobile

### **11.3 Functionality**
* **Widget reliability:** 99% uptime
* **Data persistence:** No data loss
* **Real-time updates:** < 100ms response
* **Error recovery:** Graceful handling

---

## **12. Project Status**

### **✅ Completed Features**
- [x] Modular widget architecture
- [x] All 11 widgets implemented
- [x] Unified task management system
- [x] Responsive design with mobile optimization
- [x] Enhanced user experience improvements
- [x] Comprehensive debugging and error handling
- [x] PWA-ready structure

### **🚀 Current State**
The project is **complete and production-ready** with:
- **2,500+ lines** of well-organized code
- **11 modular widgets** with clean separation
- **Comprehensive documentation** and structure
- **Mobile-optimized** user experience
- **Cross-browser compatibility**
- **Accessibility compliance**

### **🎯 Ready for Deployment**
The minimalist homepage is ready for:
- **GitHub Pages deployment**
- **Production use**
- **Further development**
- **User testing and feedback**

---

**🎉 The minimalist homepage project is complete with a fully modular architecture, comprehensive widget system, and enhanced user experience!**
