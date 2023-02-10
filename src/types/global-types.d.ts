declare namespace BTypes {
  type FCChildren<T = React.ReactNode> = { children?: T };

  type NPage<T = {}> = (props: T) => React.ReactElement;

  type FCProps<
    T = {},
    U = {},
    V extends boolean = true,
    W extends boolean = true,
    X = React.ReactNode,
  > = (W extends true ? FCChildren<X> : {}) &
    (V extends true
      ? Omit<React.HTMLAttributes<U>, 'children'>
      : Omit<U, 'children'>) &
    T;

  type FC<
    T = {},
    U = {},
    V extends boolean = true,
    W extends boolean = true,
    X = React.ReactNode,
  > = (props: FCProps<T, U, V, W, X>) => React.ReactElement;

  type FCIcon = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

  type Full<T> = {
    [P in keyof T]-?: T[P];
  };
}
