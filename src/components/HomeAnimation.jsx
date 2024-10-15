import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";

const HomeAnimation = () => {
  // TODO: Implement the gsap timeline
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to(
      "#box1",
      {
        xPercent: "-300",
        repeat: -1,
        rotation: 0,
        duration: 3,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div>
      <Box id="box1"
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.main",
          margin:"auto"
        }}
      />
    </div>
  );
};

export default HomeAnimation;
