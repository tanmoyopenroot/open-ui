export enum Intent {
  PRIMARY = 'primary',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  DEFAULT = 'default',
}

export type TIntent = typeof Intent;

export const getIntent = (
  intent: Intent = Intent.DEFAULT,
  intentData: {
    primary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    default: string;
  },
): string => {
  switch (intent) {
    case Intent.PRIMARY:
      return intentData.primary;
    case Intent.INFO:
      return intentData.info;
    case Intent.SUCCESS:
      return intentData.success;
    case Intent.WARNING:
      return intentData.warning;
    case Intent.ERROR:
      return intentData.error;
    case Intent.DEFAULT:
      return intentData.default;
  }
};
