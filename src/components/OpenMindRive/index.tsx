import { useRive } from "@rive-app/react-canvas";
import { forwardRef, useImperativeHandle } from "react";

interface Props {
  autoplay?: boolean;
  src: string;
  stateMachines?: 'bumpy';
  onStop?: () => void;
}

interface OpenMindRiveRef {
  play: () => void;
  pause: () => void;
}

const OpenMindRive = forwardRef<OpenMindRiveRef | null, Props>((props, ref) => {
  const { src, autoplay, stateMachines, onStop } = props

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines,
    autoplay,
    onStop
  });

  const play = () => {
    if (rive) {
      rive.animationNames.forEach(item => {
        rive.reset()
        rive.play(item)
      })
    }
  };

  const pause = () => {
    rive && rive.pause()
  };

  useImperativeHandle(ref, () => ({
    play,
    pause,
  }))

  return (
    <RiveComponent />
  );
})

export default OpenMindRive