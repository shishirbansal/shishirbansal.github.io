export const codexCommandsNote = {
  title: "Codex Slash Commands Reference",
  parent: "Codex Comands",
  createdAt: "2026-03-16T10:20:00+05:30",
  summary: "Quick reference for Codex CLI, Codex IDE extension, and Codex app.",
  preparedFor: "Personal future reference",
  currentAsOf: "March 16, 2026",
  importantNote: "Slash commands vary by environment. The CLI has the largest built-in set, while the IDE extension and Codex app expose smaller environment-specific sets.",
  fastestToLearn: {
    cli: ["/status", "/model", "/permissions", "/diff", "/review", "/compact", "/resume", "/plan"],
    ide: ["/status", "/local", "/cloud", "/review", "/auto-context"],
    app: ["/status", "/plan-mode", "/review", "/mcp"]
  },
  cliCommands: [
    { command: "/permissions", whatItDoes: "Change approval policy / what Codex can do without asking.", whenToUse: "Switch between safer review mode and hands-off automation." },
    { command: "/sandbox-add-read-dir", whatItDoes: "Grant sandbox read access to another directory (Windows only).", whenToUse: "Use when a command needs to inspect an absolute path outside current roots." },
    { command: "/agent", whatItDoes: "Switch active agent thread.", whenToUse: "Use with spawned sub-agents." },
    { command: "/apps", whatItDoes: "Browse apps/connectors and insert them into the prompt.", whenToUse: "Attach external app context." },
    { command: "/clear", whatItDoes: "Clear terminal and start a fresh chat.", whenToUse: "Run a true reset; different from Ctrl+L." },
    { command: "/compact", whatItDoes: "Summarize conversation to save context.", whenToUse: "Use in long sessions." },
    { command: "/copy", whatItDoes: "Copy latest completed Codex output.", whenToUse: "Grab plans or answers quickly." },
    { command: "/diff", whatItDoes: "Show Git diff, including untracked files.", whenToUse: "Review edits before commit/test." },
    { command: "/exit", whatItDoes: "Exit the CLI.", whenToUse: "Same as /quit." },
    { command: "/experimental", whatItDoes: "Toggle experimental features.", whenToUse: "Use when trying features like multi-agents when available." },
    { command: "/feedback", whatItDoes: "Send feedback/logs.", whenToUse: "Bug reports or diagnostics." },
    { command: "/init", whatItDoes: "Generate AGENTS.md scaffold.", whenToUse: "Set repo-level instructions." },
    { command: "/logout", whatItDoes: "Sign out of Codex.", whenToUse: "Useful on shared machines." },
    { command: "/mcp", whatItDoes: "List configured MCP tools.", whenToUse: "Check available external tools." },
    { command: "/mention", whatItDoes: "Attach a file or folder to the conversation.", whenToUse: "Point Codex to exact files." },
    { command: "/model", whatItDoes: "Choose active model and reasoning effort.", whenToUse: "Switch model before a task." },
    { command: "/plan", whatItDoes: "Enter plan mode and optionally send a planning prompt.", whenToUse: "Use before implementation." },
    { command: "/personality", whatItDoes: "Choose response style.", whenToUse: "Friendly, pragmatic, or none when supported." },
    { command: "/ps", whatItDoes: "Show experimental background terminals and recent output.", whenToUse: "Monitor long-running work." },
    { command: "/fork", whatItDoes: "Fork current conversation into a new thread.", whenToUse: "Branch without losing current thread." },
    { command: "/resume", whatItDoes: "Resume a saved conversation.", whenToUse: "Continue older work quickly." },
    { command: "/new", whatItDoes: "Start a new conversation in the same CLI session.", whenToUse: "Fresh context without leaving repo." },
    { command: "/quit", whatItDoes: "Exit the CLI.", whenToUse: "Same as /exit." },
    { command: "/review", whatItDoes: "Ask Codex to review your working tree.", whenToUse: "Use after edits or before commit." },
    { command: "/status", whatItDoes: "Show session configuration and token usage.", whenToUse: "Check model, policy, writable roots, and context." },
    { command: "/debug-config", whatItDoes: "Print config-layer diagnostics.", whenToUse: "Debug precedence and policy sources." },
    { command: "/statusline", whatItDoes: "Configure footer/status-line fields interactively.", whenToUse: "Customize visible status info." }
  ],
  cliAliasNote: "The docs say /approvals still works as an alias, but it no longer appears in the slash popup list.",
  ideCommands: [
    { command: "/auto-context", whatItDoes: "Turn Auto Context on or off.", whenToUse: "Include recent files and IDE context automatically." },
    { command: "/cloud", whatItDoes: "Switch to cloud mode.", whenToUse: "Run the task remotely when cloud access exists." },
    { command: "/cloud-environment", whatItDoes: "Choose the cloud environment.", whenToUse: "Available only in cloud mode." },
    { command: "/feedback", whatItDoes: "Open feedback dialog with optional logs.", whenToUse: "Report issues." },
    { command: "/local", whatItDoes: "Switch to local mode.", whenToUse: "Run directly in your workspace." },
    { command: "/review", whatItDoes: "Start code review mode.", whenToUse: "Review uncommitted changes or compare against base branch." },
    { command: "/status", whatItDoes: "Show thread ID, context usage, and rate limits.", whenToUse: "Quick environment and quota check." }
  ],
  appCommands: [
    { command: "/feedback", whatItDoes: "Open feedback dialog and optionally include logs.", whenToUse: "Bug reports and feedback." },
    { command: "/mcp", whatItDoes: "Open MCP status to view connected servers.", whenToUse: "Check MCP connections." },
    { command: "/plan-mode", whatItDoes: "Toggle plan mode for multi-step planning.", whenToUse: "Use before larger tasks." },
    { command: "/review", whatItDoes: "Start code review mode.", whenToUse: "Review local changes or compare against a base branch." },
    { command: "/status", whatItDoes: "Show thread ID, context usage, and rate limits.", whenToUse: "Quick thread and usage check." }
  ],
  recipes: [
    "Inspect current setup: use /status to check model, context usage, and limits.",
    "Review changes before commit: use /diff first, then /review.",
    "Ask for a plan before code changes: use /plan in CLI or /plan-mode in app.",
    "Reset without leaving the repo: use /new for a fresh conversation, or /clear for reset in CLI.",
    "Continue older work: use /resume in CLI.",
    "Tune autonomy: use /permissions in CLI, or /local vs /cloud in IDE.",
    "Point Codex at a specific file: use /mention in CLI."
  ],
  caveats: [
    "Documented slash-command sets differ across CLI, IDE extension, and app.",
    "Enabled skills can also appear in the slash command list in the Codex app.",
    "Some commands are conditional. Example: /sandbox-add-read-dir is Windows-only and /cloud-environment appears only in cloud mode.",
    "The best-practices page mentions /theme, but current slash-command catalogs do not list it in built-in command tables."
  ],
  sources: [
    { label: "OpenAI Developers - Slash commands in Codex CLI", href: "https://developers.openai.com/codex/cli/slash-commands" },
    { label: "OpenAI Developers - Codex IDE extension slash commands", href: "https://developers.openai.com/codex/ide/slash-commands" },
    { label: "OpenAI Developers - Codex app commands", href: "https://developers.openai.com/codex/app/commands" },
    { label: "OpenAI Developers - Codex best practices", href: "https://developers.openai.com/codex/best-practices" }
  ]
};
