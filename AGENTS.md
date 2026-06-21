# Me Nexus Project Instructions

Before changing this project:

1. Read `~/Me-Nexus/HANDOFF_PROTOCOL.md`.
2. Read `~/Me-Nexus/OPEN_PROJECTS.md`.
3. Read this project's `HANDOFF.md`.
4. Check `~/Me-Nexus/project_registry.json` and `active_work.json`.
5. Inspect current git/filesystem/runtime state.

Use the project ID named in `HANDOFF.md`. For material work, take a lock,
update the handoff when operational facts change, append verification and the
exact pickup point through `coordination_append.py`, and clear the lock.

Never include secrets in handoffs, prompts, logs, or commits.
