export class Todo {
  done: boolean;
  constructor(
    public title: string,
    public location: string,
    public giver: string,
    public id: number
  ) {
    this.done = false;
  }
}
