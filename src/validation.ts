export type ReminderFieldErrors = {
  title: string | null;
  message: string | null;
};

export function validateReminderFields(
  title: string,
  _message: string,
): ReminderFieldErrors {
  return {
    title: title.trim().length === 0 ? 'Add a title to continue.' : null,
    message: null,
  };
}
