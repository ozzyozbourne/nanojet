export class Vec2 {
  private _x: number;
  private _y: number;
  private _onChange: () => void;

  constructor(x = 0, y = 0, onChange?: () => void) {
    this._x = x;
    this._y = y;
    this._onChange = onChange || (() => {});
  }

  get x() {
    return this._x;
  }

  set x(value: number) {
    if (this._x !== value) {
      this._x = value;
      this._onChange();
    }
  }

  get y() {
    return this._y;
  }

  set y(value: number) {
    if (this._y !== value) {
      this._y = value;
      this._onChange();
    }
  }

  set(x: number, y: number) {
    if (this._x !== x || this._y !== y) {
      this._x = x;
      this._y = y;
      this._onChange();
    }
  }

  setOnChange(value: () => void) {
    this._onChange = value;
  }

  copy(): Vec2 {
    return new Vec2(this._x, this._y);
  }
}
