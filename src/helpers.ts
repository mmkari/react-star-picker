export const getClassName = (baseClass, conditions) => {
  let classNames = baseClass;

  Object.keys(conditions).forEach((key) => {
    if (conditions[key]) {
      classNames += ` ${key}`;
    }
  });

  return classNames;
};
