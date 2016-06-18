export interface IMember {
  $key?: string;
  name: string;
  address: {
    room: string
  }
}

export class Member implements IMember {
  name: string;
  address: {
    room: string
  }

  constructor(name: string) {
    this.name = name;
  }
}
