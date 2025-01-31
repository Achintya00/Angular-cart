import { createActionGroup } from '@ngrx/store';
export const profileAction = createActionGroup({
  source: 'profile',
  events: {
    // loadProfileSuccess:props<{}>
  },
});
