export const getFullClassNames = (
  className: string | undefined,
  defaultClassName: string
) => {
  return className ? `${className} ${defaultClassName}` : defaultClassName;
};
