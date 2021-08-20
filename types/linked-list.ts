import { Maybe } from "./common";

export class LinkedListNode<T> {
  value: T;
  next: Maybe<LinkedListNode<T>>;

  constructor(value: T) {
    this.value = value;
  }
}
