import { app } from './app';
import { logger } from './shared/libs';

const start = async () => {
  const PORT = 3000;
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};

start();
