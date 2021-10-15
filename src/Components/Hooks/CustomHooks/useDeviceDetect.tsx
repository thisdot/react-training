import { useEffect, useState } from "react";

export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  const getDevice = () => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    return Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini/i
      )
    );
  }

  useEffect(() => {
    setIsMobile(getDevice)
  }, []);
  // effect function runs once, after the first render

  return { isMobile };
}
