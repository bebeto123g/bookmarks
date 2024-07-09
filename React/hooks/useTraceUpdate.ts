import { useEffect, useRef } from "react";

export const useTraceUpdate = (
  props: any,
  color = "silver",
  componentName = "Component"
) => {
  const previousProps = useRef(props);

  useEffect(() => {
    /* eslint-disable no-console */
    console.log(
      "%c💥 [PH_LOG]",
      `font-size: 12px; color: white; background-color: ${color};
        "border-radius: 8px; padding: 2px 8px 2px 4px`,
      `${componentName} rendered first time`
    ); // PH_TODO
    console.table(props);
    /* eslint-enable no-console */
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const changedProps = Object.entries(props).reduce(
      (changedPropsAccumulator, [propName, propValue]) =>
        previousProps.current[propName] === propValue
          ? changedPropsAccumulator
          : {
            ...changedPropsAccumulator,
            [propName]: propValue
          },
      {}
    );

    if (Object.keys(changedProps).length > 0) {
      /* eslint-disable no-console */
      console.log(
        "%c🦄 [PH_LOG]",
        `font-size: 12px; color: white; background-color: ${color};
          "border-radius: 8px; padding: 2px 8px 2px 4px`,
        `${componentName} re-rendered`
      ); // PH_TODO
      console.table(
        Object.entries(changedProps).reduce(
          (acc, [propName, propValue]) => ({
            ...acc,
            [propName]: {
              before: previousProps.current[propName],
              after: propValue
            }
          }),
          {}
        )
      );
    }

    previousProps.current = props;
  });
}
