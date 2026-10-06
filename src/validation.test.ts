import { describe, expect, it } from 'vitest';
import { validateReminderFields } from './validation';

describe('validateReminderFields', () => {
  it('requires a title', () => {
    expect(validateReminderFields('', '').title).toBe('Add a title to continue.');
  });

  it('rejects a title containing only whitespace', () => {
    expect(validateReminderFields('   ', '').title).toBe('Add a title to continue.');
  });

  it('accepts a non-empty title', () => {
    expect(validateReminderFields('Call the dentist', '').title).toBeNull();
  });

  it('allows an empty optional message', () => {
    expect(validateReminderFields('Call the dentist', '').message).toBeNull();
  });
});
