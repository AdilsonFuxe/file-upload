import './adapters/http/express'

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application-specific logging, rethrowing, or other handling goes here
});


process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Graceful shutdown or other recovery actions
  process.exit(1); // Exit with failure status
});


process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully.');
  // Close database connections, release resources, etc.
  process.exit(0); // Exit with success status
});
