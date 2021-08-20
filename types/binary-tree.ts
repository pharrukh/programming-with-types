import { Maybe } from "./common";

export class BinaryTreeNode<T> {
  value: T;
  left: Maybe<BinaryTreeNode<T>>;
  right: Maybe<BinaryTreeNode<T>>;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinaryTreeIterator<T> implements Iterator<T> {
  private values: T[];
  private root: BinaryTreeNode<T>;

  constructor(root: BinaryTreeNode<T>) {
    this.values = [];
    this.root = root;

    this.inOrder(root);
  }

  next(): IteratorResult<T> {
    const result: Maybe<T> = this.values.shift();
    if (!result) {
      return { done: true, value: this.root.value };
    }

    return { done: false, value: result };
  }

  private inOrder(node: BinaryTreeNode<T>): void{
    if(node.left != undefined){
      
    }
  }
}
