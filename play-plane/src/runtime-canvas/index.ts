import { createRenderer } from 'vue';
import { Application, Container, Sprite, Text, Texture } from 'pixi.js';

const renderer = createRenderer<Container, Container>({
  createElement(type) {
    let element;
    switch (type) {
      case 'Container':
        element = new Container();
        break;
      case 'Sprite':
        element = new Sprite();
        break;
      default:
        throw new Error(`Unknown element type: ${type}`);
    }
    return element;
  },
  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case 'texture':
        (el as Sprite).texture = Texture.from(nextValue);
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el);
    }
  },
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  createText(text) {
    return new Text(text);
  },
  createComment(text) {
    return new Text(text);
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    return null;
  },
});

export const createApp = renderer.createApp;
