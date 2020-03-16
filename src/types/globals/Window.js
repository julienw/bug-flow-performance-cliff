declare class Window extends EventTarget {
  addEventListener: $PropertyType<EventTarget, 'addEventListener'> &
    (() => void);
}
