class AppError {
  public readonly message: string;
  public readonly code: number;
  public readonly extra?: string | null;

  constructor(message: string, code = 400, extra: string | null = null) {
    this.message = message;
    this.code = code;
    this.extra = extra;
  }
}

export default AppError;
