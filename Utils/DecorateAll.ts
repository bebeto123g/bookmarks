import { Floxy } from "floxy-web-api";
import { floxyAccessToken } from "../floxy-token-access";

function DecorateAll(decorator: MethodDecorator) {
  return (target: any) => {
    console.log('DecorateAll');
    const descriptors = Object.getOwnPropertyDescriptors(target.prototype);
    for (const [propName, descriptor] of Object.entries(descriptors)) {
      const isMethod =
        typeof descriptor.value == "function" &&
        propName != "constructor";
      if (!isMethod) {
        continue;
      }
      decorator(target, propName, descriptor);
      Object.defineProperty(target.prototype, propName, descriptor);
    }
  };
}

function Throttle(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Throttle 1');
  const original = descriptor.value;
  descriptor.value = function () {
    console.log("throttle 2");
    return original.call(this);
  };
}

@DecorateAll(Throttle)
export class FloxyService extends Floxy {
  constructor() {
    super(floxyAccessToken);
  }
}
