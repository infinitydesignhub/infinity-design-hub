#!/bin/bash

# Set variables
BACKUP_DIR="https://github.com/infinitydesignhub/"
GIT_REPO_DIR="https://github.com/infinitydesignhub/"
GIT_REMOTE="origin"
GIT_BRANCH="main"  # Change if you are using a different branch name

# Change to the backup folder
cd "$BACKUP_DIR"

# Optional: Create a timestamped backup folder
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
BACKUP_FOLDER="$BACKUP_DIR/backup_$TIMESTAMP"
mkdir -p "$BACKUP_FOLDER"

# Copy content to backup folder (you can adjust this for your needs)
cp -r /path/to/your/content/* "$BACKUP_FOLDER/"

# Change to the Git repository
cd "$GIT_REPO_DIR"

# Copy the backup to the repository folder
cp -r "$BACKUP_FOLDER"/* .

# Add changes to Git
git add .

# Commit the changes
git commit -m "Automated backup on $TIMESTAMP"

# Push the changes to the remote repository
git push "$GIT_REMOTE" "$GIT_BRANCH"
