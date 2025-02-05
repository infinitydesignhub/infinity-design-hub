// import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

// Load environment variables from .env file
// dotenv.config();

// Load credentials from environment variables
const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

// Configuration
const GIT_REPO_DIR = 'https://github.com/infinitydesignhub/infinity-design-hub';
const GIT_REMOTE = 'origin';
const GIT_BRANCH = 'main';  // Or your preferred branch name

// Fetch data from Contentful
async function fetchContentfulData() {
    const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from Contentful: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

// Save the backup to a file
function saveBackupToFile(data) {
    const backupDir = path.join(GIT_REPO_DIR, 'contentful-backup');
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }
    const timestamp = new Date().toISOString();
    const backupFilePath = path.join(backupDir, `backup-${timestamp}.json`);

    fs.writeFileSync(backupFilePath, JSON.stringify(data, null, 2));
    console.log(`Backup saved to ${backupFilePath}`);
}

// Git commit and push changes
function gitCommitAndPush() {
    exec(`cd ${GIT_REPO_DIR} && git add . && git commit -m "Automated Contentful backup" && git push ${GIT_REMOTE} ${GIT_BRANCH}`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error during git operations: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
}

// Main process
async function backupContentful() {
    try {
        const data = await fetchContentfulData();
        saveBackupToFile(data);
        gitCommitAndPush();
    } catch (error) {
        console.error('Error during backup:', error);
    }
}

// Run the backup process
backupContentful();
