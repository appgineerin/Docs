---
sidebar_position: 12
title: Migration from Old Launcher
description: Removing the legacy standalone ATVO Launcher after switching to the new Appgineering Launcher.
---

# Migration from Old Launcher

If you previously used the standalone **ATVO Launcher** on Windows, the new Appgineering Launcher replaces it entirely. ATVO and any other Appgineering products are now installed and updated through the new Launcher — see the [Apps tab overview](./managing-applications/overview.md) — and the old launcher can be removed.

The new Launcher installs ATVO to a different location, so removing the old install does not affect the new one. You can perform the cleanup before or after installing the new Launcher; the two installs do not interfere with each other.

## 1. Uninstall the old ATVO Launcher

1. Open **Settings → Apps → Installed apps** (Windows 11) or **Control Panel → Programs and Features** (Windows 10).
2. Find **ATVO Launcher** in the list.
3. Click **Uninstall** and follow the prompts.

## 2. Remove the leftover install folder

The Windows uninstaller does not always remove the old launcher's files. After uninstalling, delete the leftover folder manually:

1. Open File Explorer and navigate to `C:\Program Files (x86)\Appgineer.in\`.
2. Delete the entire `Appgineer.in` folder.

The new Appgineering Launcher does **not** use this path for ATVO or any other product, so removing the folder is safe.

Once both steps are done, the migration is complete. ATVO will continue to run normally from its new location, managed by the [Appgineering Launcher](./intro.md).
