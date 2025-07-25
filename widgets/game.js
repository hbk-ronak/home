/**
 * 🤖 AI-Generated Project: Minimalist Homepage
 * Generated by: Claude Sonnet 4 (Anthropic)
 * Date: 2024
 * Description: Game Widget Manager - Handles game switching and widget initialization
 * Tech Stack: Vanilla HTML/CSS/JS + Tailwind CSS
 * License: MIT
 */

// ============================================================================
// GAME WIDGET MANAGER
// ============================================================================

/**
 * Game Widget Manager - Handles game switching and widget initialization
 */
class GameWidget {
    constructor() {
        console.log('🎮 Initializing Game Widget Manager...');
        
        this.currentGame = null;
        this.availableGames = {
            'worm': {
                name: 'Worm Game',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                enabled: true,
                module: null
            },
            'tictactoe': {
                name: 'Tic-Tac-Toe',
                icon: 'M6 18L18 6M6 6l12 12',
                enabled: true, // Now enabled
                module: null
            }
        };
        
        this.init();
    }
    
    /**
     * Initialize the game widget
     */
    init() {
        this.setupGameSelector();
        // Don't load default game immediately - wait for WormGame class to be available
        // The game will be loaded when the WormGame class becomes available
    }
    
    /**
     * Setup game selector dropdown functionality
     */
    setupGameSelector() {
        const toggle = document.getElementById('gameSelectorToggle');
        const dropdown = document.getElementById('gameSelectorDropdown');
        const gameOptions = document.querySelectorAll('.game-option');
        
        if (toggle && dropdown) {
            // Toggle dropdown
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropdown.classList.toggle('hidden');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.classList.add('hidden');
                }
            });
            
            // Handle game selection
            gameOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    const game = option.getAttribute('data-game');
                    if (game && !option.disabled) {
                        this.selectGame(game);
                        dropdown.classList.add('hidden');
                    }
                });
            });
        }
    }
    
    /**
     * Load the default game (worm game) - called when WormGame class is available
     */
    loadDefaultGame() {
        this.selectGame('worm');
        // Score display will be updated by selectGame -> initializeGame -> updateScoreDisplayForGame
    }
    
    /**
     * Select and load a different game
     * @param {string} gameType - Game identifier
     */
    selectGame(gameType) {
        console.log(`🎮 Switching to game: ${gameType}`);
        
        const gameInfo = this.availableGames[gameType];
        if (!gameInfo) {
            console.warn('Unknown game:', gameType);
            return;
        }
        
        if (!gameInfo.enabled) {
            console.warn('Game not yet implemented:', gameType);
            alert(`${gameInfo.name} coming soon!`);
            return;
        }
        
        // Update UI to show selected game
        this.updateGameDisplay(gameType);
        
        // Initialize the selected game
        this.initializeGame(gameType);
    }
    
    /**
     * Update the game display in the UI
     * @param {string} gameType - Game identifier
     */
    updateGameDisplay(gameType) {
        const currentGameName = document.getElementById('currentGameName');
        const gameInfo = this.availableGames[gameType];
        
        if (currentGameName && gameInfo) {
            currentGameName.textContent = gameInfo.name;
        }
    }
    
    /**
     * Initialize the selected game
     * @param {string} gameType - Game identifier
     */
    initializeGame(gameType) {
        // Clean up current game if exists
        if (this.currentGame && typeof this.currentGame.destroy === 'function') {
            this.currentGame.destroy();
        }
        
        // Initialize new game based on type
        switch (gameType) {
            case 'worm':
                // Create worm game instance
                if (window.WormGame) {
                    this.currentGame = window.WormGame.create();
                } else {
                    console.error('WormGame class not found');
                }
                break;
            case 'tictactoe':
                // Create tic-tac-toe game instance
                if (window.TicTacToe) {
                    this.currentGame = window.TicTacToe.create();
                } else {
                    console.error('TicTacToe class not found');
                }
                break;
            default:
                console.warn('Unknown game type:', gameType);
        }
        
        // Update score display for the new game
        this.updateScoreDisplayForGame(gameType);
    }
    
    /**
     * Update score display based on the selected game
     * @param {string} gameType - Game identifier
     */
    updateScoreDisplayForGame(gameType) {
        const scoreElement = document.getElementById('wormScore');
        const highScoreElement = document.getElementById('wormHighScore');
        
        if (!scoreElement || !highScoreElement) return;
        
        switch (gameType) {
            case 'worm':
                // Load worm game scores
                const wormHighScore = localStorage.getItem('wormHighScore') || '0';
                scoreElement.textContent = 'Score: 0';
                highScoreElement.textContent = `High Score: ${wormHighScore}`;
                break;
            case 'tictactoe':
                // Load tic-tac-toe scores
                const ticTacToeScores = localStorage.getItem('tictactoeScores');
                if (ticTacToeScores) {
                    const scores = JSON.parse(ticTacToeScores);
                    scoreElement.textContent = `X: ${scores.X} | O: ${scores.O}`;
                    highScoreElement.textContent = `Draws: ${scores.draws}`;
                } else {
                    scoreElement.textContent = 'X: 0 | O: 0';
                    highScoreElement.textContent = 'Draws: 0';
                }
                break;
            default:
                // Clear scores for unknown games
                scoreElement.textContent = 'Score: 0';
                highScoreElement.textContent = 'High Score: 0';
        }
    }
    
    /**
     * Update score display for the current game
     * This method can be called by games to update their score display
     */
    updateCurrentGameScoreDisplay() {
        if (this.currentGame) {
            // Determine the game type from the current game instance
            if (this.currentGame instanceof window.WormGame) {
                this.updateScoreDisplayForGame('worm');
            } else if (this.currentGame instanceof window.TicTacToe) {
                this.updateScoreDisplayForGame('tictactoe');
            }
        }
    }
    
    /**
     * Get current game type
     * @returns {string} Current game identifier
     */
    getCurrentGame() {
        return this.currentGame;
    }
    
    /**
     * Check if a game is available
     * @param {string} gameType - Game identifier
     * @returns {boolean} Whether the game is available
     */
    isGameAvailable(gameType) {
        const gameInfo = this.availableGames[gameType];
        return gameInfo && gameInfo.enabled;
    }
}

// Initialize game widget manager immediately (widget loader ensures DOM is ready)
let gameWidget;
gameWidget = new GameWidget();

// Make the update method available globally for games to use
window.updateGameScoreDisplay = () => {
    if (gameWidget) {
        gameWidget.updateCurrentGameScoreDisplay();
    }
}; 