import * as React from "react";
import { Button } from "react-native";

type Props = {
  initialCount: number;
};

const SampleCounter = (props: Props) => {
  const [count, setCount] = React.useState(props.initialCount);

  return (
    <Button
      title={count.toString()}
      onPress={() => setCount((c) => ++c)}
    ></Button>
  );
};

export default SampleCounter;
