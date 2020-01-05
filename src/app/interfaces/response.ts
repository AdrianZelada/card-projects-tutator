import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface TypedResponse<T = any> extends HttpResponse<T> {
  /**
   * this will override `json` method from `Body` that is extended by `Response`
   * interface Body {
   *     json(): Promise<any>;
   * }
   */
  json<P = T>(): P;
}
