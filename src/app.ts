function getPromise() {
  const promise: Promise<(string | number)[]> = new Promise((resolve) => {
    resolve(["Text", 50]);
  });
  return promise;
}

getPromise().then((data) => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

class Component<T> {
  constructor(public props: T) {}
}

interface rsada {
  title: string;
}

class Page extends Component<rsada> {
  pageInfo() {
    console.log(this.props.title);
  }
}
