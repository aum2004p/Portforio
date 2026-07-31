---
inclusion: always
---

# Portfolio Code Preservation Rules

## ⚠️ Critical Rule
The user edits this codebase manually. **Never change existing code unless explicitly asked to fix or change something specific.**

## What this means
- If asked to "add" something → add only, do not touch existing code
- If asked to "fix" something → change only the broken part, leave everything else exactly as-is
- If asked to "improve" or "add effects" → append or extend only, never rewrite whole files
- Never reformat, rename, or restructure files that were not mentioned in the request
- Never remove user-written content (text, data, styles, components)
- Always use `str_replace` for targeted edits instead of rewriting entire files

## Before editing any file
1. Read the file first
2. Make the smallest possible change to achieve the goal
3. Preserve all surrounding code exactly
