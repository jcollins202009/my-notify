# My Notify — User Stories

Local-notification scheduler. No accounts, no backend, no cloud — everything runs and stores data on-device.

## Epic 1: Schedule a notification

- As a user, I can enter a title and message for a notification so I know what it's about when it fires.
- As a user, I can pick a future date and time so the notification fires exactly when I want.
- As a user, I get an error/blocked save if I pick a date/time in the past.
- As a user, after saving, I see a confirmation and I'm returned to the list of scheduled notifications.

**Acceptance criteria**
- Title is required (non-empty); message is optional.
- Date/time picker defaults to "now + 5 minutes" or later.
- Saving a valid notification schedules it via the OS notification system and persists its metadata locally.

## Epic 2: Recurring notifications

- As a user, I can choose "does not repeat", "daily", or "weekly" when creating a notification.
- As a user, when a recurring notification fires, it automatically schedules the next occurrence (or is registered as a repeating trigger up front).
- As a user, canceling a recurring notification stops all future occurrences, not just the next one.

**Acceptance criteria**
- Recurrence choice is presented as a simple selector (none/daily/weekly) at creation time.
- The list screen shows a recurrence indicator (e.g., a "Daily" / "Weekly" badge) per item.
- Canceling removes the entire series, verified by no further firings after cancellation.

## Epic 3: Custom notification sound

- As a user, I can pick a sound from a short list of built-in options when creating a notification.
- As a user, the sound I picked plays when the notification fires (subject to OS/device volume and Do Not Disturb settings).

**Acceptance criteria**
- At least 2–3 bundled sound options are available, plus a "default" system sound.
- Sound choice is stored with the notification and passed to the OS scheduling call.

## Epic 4: View, manage, and cancel notifications

- As a user, I can see a list of all my scheduled (pending) notifications, sorted by next fire date.
- As a user, each list item shows the title, fire date/time, and recurrence (if any).
- As a user, I can cancel/delete a scheduled notification from the list.
- As a user, when I have no scheduled notifications, I see a clear empty state instead of a blank screen.

**Acceptance criteria**
- List reflects only notifications still pending (fired one-off notifications are removed automatically).
- Cancel action removes both the OS-scheduled trigger and the local record, with no orphaned entries.
- Pull-to-refresh or automatic refresh keeps the list in sync with what's actually scheduled.

## Epic 5: Permissions

- As a user, I'm asked to grant notification permissions the first time I try to schedule a notification.
- As a user, if I deny permissions, I see a clear message explaining the app can't function without them, with a way to open system settings.
- As a user, on Android 13+, the app requests the runtime `POST_NOTIFICATIONS` permission appropriately.

**Acceptance criteria**
- Permission is requested lazily (on first schedule attempt), not on app launch.
- Denied state is handled gracefully — no crashes, no silent failures.
- A "denied" banner/screen includes a button/link to the OS settings page for the app.

## Epic 6: App store readiness

- As a user (App Store/Play Store reviewer or new installer), the app has a proper icon, splash screen, and name so it looks polished on first install.
- As a user, I can see what data the app collects (none) via the store's privacy labels before installing.
- As a maintainer, the app is buildable and submittable via EAS Build/Submit for both iOS and Android.

**Acceptance criteria**
- Real app icon (1024×1024), splash screen, and Android adaptive icon are in place before production submission.
- Apple "App Privacy" is set to "Data Not Collected"; Play "Data Safety" form matches.
- `eas build --profile production` succeeds for both platforms and `eas submit` uploads successfully to TestFlight and the Play internal testing track.

## Out of scope (v1)

- User accounts, backend/API, cloud sync.
- Push/remote notifications (local only).
- In-app purchases or any monetization.
- Web/desktop targets.
