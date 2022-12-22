declare namespace BTypes {
  type FCChildren = { children?: React.ReactNode };

  type NPage<T = {}> = (props: T) => React.ReactElement;
  type FC<T = {}, U = {}> = (
    props: T & React.HTMLAttributes<U> & FCChildren,
  ) => React.ReactElement;
  type FCIcon = (
    props: React.HTMLAttributes<HTMLOrSVGElement>,
  ) => React.ReactElement;
}
