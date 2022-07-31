import * as t from 'io-ts';

export const Authy = t.type({
  device: t.string,
});
export type Authy = t.TypeOf<typeof Authy>;

export const Github = t.type({
  user: t.string,
  tokens: t.array(t.string),
});
export type Github = t.TypeOf<typeof Github>;

export const MFA = t.union([Authy, Github]);
export type MFA = t.TypeOf<typeof MFA>;

export const User = t.type({
  name: t.string,
  age: t.number,
  gender: t.union([t.literal('M'), t.literal('F'), t.literal('NA')]),
  mfa: t.union([t.null, MFA]),
});
export type User = t.TypeOf<typeof User>;
