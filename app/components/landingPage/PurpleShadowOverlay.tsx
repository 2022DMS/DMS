type ShadowOverlayProps = {
  height?: string;
  top?: string;
  zIndex?: string;
};

export function PurpleShadowOverlay({
  height = "80%",
  zIndex = "z-2",
  top = "0px",
}: ShadowOverlayProps) {
  return (
    <div
      className={`absolute left-0 w-full pointer-events-none ${zIndex}`}
      style={{
        top,
        height,
        filter: "blur(500px)",
        background: `
          radial-gradient(
            ellipse at center,
            rgba(151,71,255,0.15) 0%,
            rgba(151,71,255,0.15) 50%,
            rgba(151,71,255,0.1) 65%,
            rgba(151,71,255,0.05) 80%,
            rgba(151,71,255,0) 100%
          )
        `,
      }}
    />
  );
}