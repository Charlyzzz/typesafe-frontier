import * as t from 'io-ts';
import { validate } from './validation';

const Video = t.type({
  url: t.string,
  likes: t.number,
  channel: t.union([t.undefined, t.string]),
});
type Video = t.TypeOf<typeof Video>;

describe(validate, () => {
  it('fails when not valid', () => {
    expect(() => validate<Video>(Video, {})).toThrowError(
      /Expecting number at likes but instead got: undefined/
    );

    expect(() => validate<Video>(Video, {})).toThrowError(
      /Expecting string at url but instead got: undefined/
    );
  });

  it('returns the parsed type when valid', () => {
    const input = { url: 'url', likes: 1, channel: undefined };
    expect(validate<Video>(Video, input)).toEqual({
      url: 'url',
      likes: 1,
      channel: undefined,
    });
  });
});
