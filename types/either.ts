export class Either<TLeft, TRight> {
  private constructor(
    private readonly value: TLeft | TRight,
    private readonly left: boolean
  ) {}

  isLeft(): boolean {
    return this.left;
  }

  getLeft(): TLeft {
    if (!this.isLeft()) throw new Error();

    return <TLeft>this.value;
  }

  isRight(): boolean {
    return !this.left;
  }

  getRight(): TRight {
    if (!this.isRight()) throw new Error();

    return <TRight>this.value;
  }

  static makeLeft<TLeft, TRight>(value: TLeft): Either<TLeft, TRight> {
    return new Either<TLeft, TRight>(value, true);
  }

  static makeRight<TLeft, TRight>(value: TRight): Either<TLeft, TRight> {
    return new Either<TLeft, TRight>(value, false);
  }
}
