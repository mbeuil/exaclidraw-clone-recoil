export interface ElementStyle {
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export type Element = { style: ElementStyle };
