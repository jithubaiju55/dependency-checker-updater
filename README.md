# Dependency Checker and Updater

A Node.js package that scans a project's dependencies for outdated packages and updates them, helping developers keep their dependencies up-to-date and avoiding security issues or compatibility problems.

## Features

- Check for outdated dependencies.
- Update outdated dependencies to the latest version.
- Works with npm and yarn package managers.

## Installation

You can install this package via npm or yarn:

```bash
# For npm
npm install dependency-checker

# For yarn
yarn add dependency-checker

Usage

Check for outdated dependencies:

const { checkDependencies } = require('dependency-checker');

async function run() {
  const outdated = await checkDependencies();
  console.log(outdated);
}

run();

Update outdated dependencies:

const { updateDependencies } = require('dependency-checker');

async function runUpdate() {
  await updateDependencies();
}

runUpdate();

```
