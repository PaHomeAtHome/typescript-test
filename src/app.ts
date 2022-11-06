function Check(target: any, nameMethod: string, position: number) {
  if (!target[nameMethod].validation) {
    target[nameMethod].validation = {};
  }
  Object.assign(target[nameMethod].validation, {
    [position]: (value: string) => {
      if (value.includes("@")) {
        throw new Error("Get it off of me");
      }
      return value;
    },
  });
}

function Validation(
  _: any,
  __: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return (...args: any[]) => {
        if (method.validation) {
          args.forEach((elem, index) => {
            if (method.validation[index]) {
              args[index] = method.validation[index](elem);
            }
          });
        }
        return method.apply(this, args);
      };
    },
  };
}

class Test {
  public something: string = "sad";
  @Validation
  setSomething(@Check something: string) {
    this.something = something;
    console.log(something);
  }
}

const test = new Test();
test.setSomething("email");
