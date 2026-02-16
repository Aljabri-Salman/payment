
export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export interface LoggerOptions {
  service?: string;
  component?: string;
  level?: LogLevel;
  pretty?: boolean;
  isDev?: boolean;
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  service?: string;
  component?: string;
  [key: string]: unknown;
}

export class Logger {
  private service?: string;
  private component?: string;
  private minLevel: LogLevel;
  private pretty: boolean;
  private isDev: boolean;

  constructor(options: LoggerOptions = {}) {
    this.service = options.service;
    this.component = options.component;
    this.minLevel = options.level || this.getDefaultLogLevel();
    this.pretty = options.pretty || false;
    this.isDev = options.isDev ?? process.env.NODE_ENV !== 'production';
  }


  private getDefaultLogLevel(): LogLevel {
    const envLevel = process.env.LOG_LEVEL?.toLowerCase();
    if (envLevel === 'debug' || envLevel === 'info' || envLevel === 'warn' || envLevel === 'error') {
      return envLevel;
    }
    return process.env.NODE_ENV === 'production' ? 'info' : 'debug';
  }

  private shouldLog(level: LogLevel): boolean {
    const levelPriority: Record<LogLevel, number> = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
    return levelPriority[level] >= levelPriority[this.minLevel];
  }

  private formatLogEntry(level: LogLevel, message: string, meta?: Record<string, unknown>): LogEntry {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message
    };

    if (this.service) {
      entry.service = this.service;
    }

    if (this.component) {
      entry.component = this.component;
    }

    if (meta) {
      Object.assign(entry, meta);
    }

    return entry;
  }

  private outputLog(level: LogLevel, entry: LogEntry): void {
    if (!this.shouldLog(level)) {
      return;
    }

    if (!this.isDev && level !== 'error') {
      return;
    }

    const formattedEntry = this.pretty
      ? JSON.stringify(entry, null, 2)
      : JSON.stringify(entry);

    switch (level) {
      case 'error':
        console.error(formattedEntry);
        break;
      case 'warn':
        console.warn(formattedEntry);
        break;
      case 'debug':
        console.debug(formattedEntry);
        break;
      default:
        console.log(formattedEntry);
    }
  }

  info(message: string, meta?: Record<string, unknown>): void {
    const entry = this.formatLogEntry('info', message, meta);
    this.outputLog('info', entry);
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    const entry = this.formatLogEntry('warn', message, meta);
    this.outputLog('warn', entry);
  }

  error(message: string, meta?: Record<string, unknown>): void {
    const entry = this.formatLogEntry('error', message, meta);
    this.outputLog('error', entry);
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    const entry = this.formatLogEntry('debug', message, meta);
    this.outputLog('debug', entry);
  }

  log(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
    const entry = this.formatLogEntry(level, message, meta);
    this.outputLog(level, entry);
  }

  child(options: Partial<LoggerOptions>): Logger {
    return new Logger({
      service: options.service || this.service,
      component: options.component || this.component,
      level: options.level || this.minLevel,
      pretty: options.pretty || this.pretty,
      isDev: options.isDev ?? this.isDev
    });
  }
}

export const createLogger = (options: LoggerOptions = {}): Logger => {
  return new Logger(options);
};

export const defaultLogger = createLogger();