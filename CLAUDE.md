# CLAUDE.md

This file provides guidance to Claude Code and other AI assistants working in this repository.

## Repository Overview

**Project**: Circus
**Owner**: MorganGreenleaf-Emory
**Status**: Empty — no source code has been committed yet.

This CLAUDE.md was generated to establish conventions for AI assistants before development begins. Update this file as the project takes shape.

---

## Current State

The repository contains no source files. Before proceeding with development tasks, clarify with the user:

- What language/framework this project will use
- What "Circus" is intended to do
- Any existing design documents or specs to follow

---

## Development Workflow

### Branching

- The default development branch for Claude-driven changes follows the pattern: `claude/<description>-<session-id>`
- Never push directly to `main` or `master` without explicit user permission
- Create feature branches for all changes

### Git Commits

- Write clear, descriptive commit messages in the imperative mood (e.g., "Add user authentication module")
- Commit related changes together; avoid large unrelated changesets
- Do not commit secrets, credentials, `.env` files, or large binary assets

### Pushing Changes

- Always push with: `git push -u origin <branch-name>`
- The branch name must start with `claude/` and end with the matching session ID, or push will fail

---

## Code Conventions (to be updated as the project grows)

When source code is added to this repository, update this section with:

- **Language & runtime version** (e.g., Node 20, Python 3.12)
- **Package manager** (npm, yarn, pnpm, pip, etc.)
- **Code style / formatter** (Prettier, ESLint, Black, Ruff, etc.)
- **Testing framework** (Jest, pytest, Vitest, etc.)
- **Key architectural patterns** (MVC, domain-driven design, etc.)

---

## Commands (placeholder)

Once the project is bootstrapped, document the key commands here:

```bash
# Install dependencies
# <command>

# Run in development mode
# <command>

# Run tests
# <command>

# Build for production
# <command>

# Lint / format
# <command>
```

---

## AI Assistant Guidelines

1. **Read before editing** — always read a file before modifying it.
2. **Minimal changes** — only change what is directly requested or clearly necessary. Do not refactor surrounding code, add docstrings, or clean up unrelated areas.
3. **No over-engineering** — avoid abstractions, helpers, or utilities for one-time operations. Three similar lines of code is better than a premature abstraction.
4. **No backwards-compatibility hacks** — if something is unused, remove it completely.
5. **Security first** — do not introduce command injection, XSS, SQL injection, or other OWASP Top 10 vulnerabilities.
6. **Confirm before destructive actions** — always check with the user before force-pushing, resetting hard, dropping tables, or deleting branches/files.
7. **Update this file** — when you add a new framework, command, or architectural pattern, update CLAUDE.md to reflect it.
