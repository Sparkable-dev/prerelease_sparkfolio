"use client";

interface BrevoFormProps {
  className?: string;
}

export function BrevoForm({ className }: BrevoFormProps) {
  // Light form URL only
  const formUrl =
    "https://44603cd0.sibforms.com/serve/MUIFAOJruId_6A090I0rt4wPhI-g4Hk61F48wANxhuh2zFo30Xdjzyiyg42fr9UCPtnc99CW5oTzSlGqHHcEKM4tCfCBaIfv82m1Lnc4KMAlpX9sph0XTV-wWERXkXFT0UjDQXzBFg70IursCvJJCFawkey3dV2SgsJXw37C70TmN-qLlm3_PmU_2BEx8crXb7kTIkAunpUwq-Nf";

  return (
    <div className={className}>
      <iframe
        width="600"
        height="500"
        src={formUrl}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
        }}
        className=""
      />
    </div>
  );
}
