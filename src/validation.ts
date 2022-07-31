import { isLeft } from 'fp-ts/lib/Either';
import { Decoder } from 'io-ts';
import { PathReporter } from 'io-ts/PathReporter';
import reporter from 'io-ts-reporters';

export function validate<T>(type: Decoder<unknown, T>, v: unknown): T {
  const validation = type.decode(v);
  if (isLeft(validation)) {
    throw new Error(reporter.report(validation).join('. '));
  }
  return validation.right;
}
