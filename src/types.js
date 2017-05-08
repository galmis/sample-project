// @flow

export type Action = { type: string, payload: Object };

export type Friend = {
  first_name: string,
  last_name: string,
  email: string,
  picture: string
};

export type Person = {
  id: string,
  first_name: string,
  last_name: string,
  gender: string,
  email: string,
  friends: Array<Friend>
};

export type NormalizedData = {
  entities: Object,
  result: Array<string>
}
