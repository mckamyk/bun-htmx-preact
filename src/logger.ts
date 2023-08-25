import { Elysia } from "elysia";
import {pino} from 'pino'
import type { Context } from 'elysia';
import { LoggerOptions, stdSerializers } from 'pino';
import pretty from 'pino-pretty'

const serializers: LoggerOptions['serializers'] = {
  request: serializeRequest,
  err: stdSerializers.err
};

function serializeRequest(request: Request) {
  return {
    method: request.method,
    url: request.url,
  };
}

const formatters: LoggerOptions['formatters'] = {
  log(object) {
    if (isContext(object)) {
      const context = object as unknown as Context;
      return { request: context.request };
    } else if (isRequest(object)) {
      return serializeRequest(object as unknown as Request);
    }
    return object;
  }
};

function isContext(object: unknown) {
  const context = object as Context;
  return context.request && context.store;
}

function isRequest(object: unknown) {
  const request = object as Request;
  return request.url && request.method;
}

export const log = pino({formatters, serializers}, pretty({colorize: true, singleLine: true}))

export const bundlerLog = {
  info: (message: string) => log.info(`[BUNDLER] - ${message}`),
  warn: (message: string) => log.warn(`[BUNDLER] - ${message}`),
  error: (message: string) => log.error(`[BUNDLER] - ${message}`),
  debug: (message: string) => log.debug(`[BUNDLER] - ${message}`),
  fatal: (message: string) => log.fatal(`[BUNDLER] - ${message}`),
}

export const logger = () => {
  return (app: Elysia) => {
    return app.derive(() => {
      return { log }
    })
  }
}

