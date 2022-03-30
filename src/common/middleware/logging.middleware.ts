import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('请求时间计算');
    console.log('hi 这是来自中间件的消息');

    res.on('finish', () => console.timeEnd('请求时间计算'));
    next();
  }
}
