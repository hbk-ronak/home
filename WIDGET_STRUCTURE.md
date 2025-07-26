# Widget Structure Documentation

## Overview

The `script.js` file has been successfully broken up into smaller, self-contained widget files. Each widget is now in its own file within the `widgets/` directory, making the codebase more modular and maintainable.

## File Structure

```
widgets/
├── clock.js           # Clock widget - displays current time
├── salutation.js      # Salutation widget - time-aware greetings
├── search.js          # Search widget - multi-engine search with bang commands
├── music.js           # Music widget - YouTube Music integration
├── todo.js            # Todo widget - task management with date picker
├── notes.js           # Notes widget - sticky notes with colors
├── calendar.js        # Calendar widget - mini calendar with events
├── calculator.js      # Calculator widget - full-featured calculator
├── worm-game.js       # Worm Game widget - classic snake game
├── utils.js           # Utility functions and debug tools
└── app-init.js        # Main app initialization and coordination
```

## Widget Descriptions

### 1. Clock Widget (`clock.js`)
- **Functionality**: Displays current time in 24-hour format
- **Updates**: Every second
- **Dependencies**: None
- **HTML Elements**: `#clock`

### 2. Salutation Widget (`salutation.js`)
- **Functionality**: Displays time-aware greetings
- **Features**: 70% time-aware, 30% random salutations
- **Dependencies**: None
- **HTML Elements**: `#salutation`

### 3. Search Widget (`search.js`)
- **Functionality**: Multi-engine search with bang commands and easter eggs
- **Engines**: Google, DuckDuckGo, Startpage
- **Features**: Bang commands (!g, !d, !s), easter eggs (:roll, :flip, :ascii)
- **Dependencies**: None
- **HTML Elements**: `#searchForm`, `#searchInput`, `#searchEngineToggle`, etc.

### 4. Music Widget (`music.js`)
- **Functionality**: YouTube Music playlist integration
- **Features**: Opens music playlist in new tab
- **Dependencies**: None
- **HTML Elements**: `#playMusicBtn`

### 5. Todo Widget (`todo.js`)
- **Functionality**: Task management with date picker and filtering
- **Features**: Add, toggle, delete tasks, date picker, filtering (all/dated/undated/today)
- **Dependencies**: `window.taskStore`, `renderCalendar()`
- **HTML Elements**: `#todoForm`, `#todoInput`, `#todoList`, etc.

### 6. Notes Widget (`notes.js`)
- **Functionality**: Sticky notes with color options
- **Features**: Add, delete notes, color selection
- **Dependencies**: None
- **HTML Elements**: `#noteForm`, `#noteInput`, `#notesGrid`

### 7. Calendar Widget (`calendar.js`)
- **Functionality**: Mini calendar with event and task management
- **Features**: Month navigation, event management, task integration
- **Dependencies**: `window.taskStore`, `renderTodos()`
- **HTML Elements**: `#calendarDays`, `#calendarTitle`, `#prevMonth`, `#nextMonth`

### 8. Calculator Widget (`calculator.js`)
- **Functionality**: Full-featured calculator with keyboard support
- **Features**: Basic operations, keyboard input, previous calculation display
- **Dependencies**: None
- **HTML Elements**: `#calcDisplay`, `#calcPrevious`, `.calc-btn`

### 9. Worm Game Widget (`worm-game.js`)
- **Functionality**: Classic snake-like game
- **Features**: Canvas rendering, keyboard/touch controls, high score tracking
- **Dependencies**: None
- **HTML Elements**: `#wormCanvas`, `#wormScore`, `#wormHighScore`, etc.

### 10. Utils Widget (`utils.js`)
- **Functionality**: Utility functions and debug tools
- **Features**: Data management, debug functions, global utilities
- **Dependencies**: Functions from other widgets (e.g., `hideEasterEggResult`)
- **HTML Elements**: `#clearAllDataBtn`, `#easterEggClose`

### 11. App Init Widget (`app-init.js`)
- **Functionality**: Main application initialization
- **Features**: Coordinates all widgets, sets up event listeners
- **Dependencies**: All other widgets
- **HTML Elements**: Various todo-related elements

## Loading Order

The widgets are loaded in a specific order to ensure dependencies are satisfied:

1. **Independent widgets first**: clock, salutation, search, music
2. **Core functionality**: todo, notes, calendar
3. **Interactive widgets**: calculator, worm-game
4. **Utilities and initialization**: utils, app-init

## Main Script (`script.js`)

The main `script.js` file now serves as a widget loader that:
- Dynamically loads all widget files in the correct order
- Handles loading errors gracefully
- Provides console logging for debugging

## Benefits of This Structure

1. **Modularity**: Each widget is self-contained and can be developed independently
2. **Maintainability**: Easier to find and fix issues in specific widgets
3. **Reusability**: Widgets can potentially be reused in other projects
4. **Testing**: Individual widgets can be tested in isolation
5. **Performance**: Only necessary widgets can be loaded if needed
6. **Collaboration**: Multiple developers can work on different widgets simultaneously

## No Functional Changes

As requested, **no logic has been changed**. The functionality remains exactly the same as the original monolithic `script.js` file. The code has simply been reorganized into logical, self-contained modules.

## Dependencies

The widgets maintain their original dependencies through:
- Global function calls (e.g., `renderCalendar()`, `renderTodos()`)
- Global variables (e.g., `window.taskStore`)
- Shared DOM elements
- Event listeners that reference functions from other widgets

This ensures that the modular structure doesn't break any existing functionality while providing the benefits of better code organization. 