// Error handling utility
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public metadata?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const errorHandler = (error: unknown) => {
  if (error instanceof AppError) {
    console.error(`[${error.code}] ${error.message}`, error.metadata);
  } else if (error instanceof Error) {
    console.error('[UNEXPECTED_ERROR]', error.message);
  } else {
    console.error('[UNKNOWN_ERROR]', error);
  }
};