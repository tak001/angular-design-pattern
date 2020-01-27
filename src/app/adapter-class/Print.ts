// Main class からはこのinterfaceを参照してmethodを使っていく
export interface Print {
  printWeak(): void;
  printStrong(): void;
}
