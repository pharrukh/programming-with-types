export class Optional<T> {
  private isAssigned: boolean;

  constructor(private readonly val: T | undefined) {
    if (val) {
      this.isAssigned = true;
    } else {
      this.isAssigned = false;
    }
  }

  hasValue(): boolean {
    return this.isAssigned;
  }

  getValue(): T {
    if (!this.isAssigned) {
      throw Error();
    }

    return <T>this.val;
  }
}
