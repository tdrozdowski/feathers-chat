// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext, NextFunction } from '../declarations'
import { logger } from '../logger'

export const logRuntime = async (context: HookContext, next: NextFunction) => {
  const startTime = Date.now()
  await next()
  const duration = Date.now() - startTime
  logger.info(`Running hook log-runtime on ${context.path}.${context.method} took ${duration}ms`)
}
