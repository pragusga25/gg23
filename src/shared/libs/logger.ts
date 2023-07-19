import { createLogger, format, transports } from 'winston';

const { combine, timestamp, json, errors, metadata, prettyPrint, colorize } =
  format;
const { Console } = transports;

const logger = createLogger({
  level: 'debug',
  format: combine(
    timestamp(),
    json(),
    errors({ stack: true }),
    metadata(),
    prettyPrint(),
    colorize({ all: true })
  ),
  transports: [new Console()],
});

export { logger };
