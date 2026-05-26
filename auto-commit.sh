#!/bin/zsh
# Auto-commit script for LearnPlaywrightBatch2x
# Runs every 30 minutes via LaunchAgent

REPO_DIR="/Users/apple/Downloads/LearnPlaywrightBatch2x"
LOG_FILE="/tmp/auto-commit.log"

echo "--- $(date) ---" >> "$LOG_FILE"

cd "$REPO_DIR" || {
    echo "ERROR: Failed to cd to $REPO_DIR" >> "$LOG_FILE"
    exit 1
}

# Check if there are any changes (staged, unstaged, or untracked)
if [[ -n $(git status --porcelain) ]]; then
    git add -A >> "$LOG_FILE" 2>&1
    git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')" >> "$LOG_FILE" 2>&1
    
    if [[ $? -eq 0 ]]; then
        git push origin main >> "$LOG_FILE" 2>&1
        echo "SUCCESS: Committed and pushed at $(date)" >> "$LOG_FILE"
    else
        echo "ERROR: Commit failed at $(date)" >> "$LOG_FILE"
    fi
else
    echo "No changes to commit at $(date)" >> "$LOG_FILE"
fi

echo "" >> "$LOG_FILE"
