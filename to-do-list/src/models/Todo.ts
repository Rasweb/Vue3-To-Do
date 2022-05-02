export class Todo {
  done: boolean;
  constructor(
    public title: string,
    public location: string,
    public giver: string,
    public reward: number | string,
    public id: number
  ) {
    this.done = false;
    this.title = title;
    this.location = location;
    this.giver = giver;
    this.reward = reward;
    this.id = id;
  }
}
