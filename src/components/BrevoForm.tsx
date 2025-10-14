"use client";

interface BrevoFormProps {
  className?: string;
}

export function BrevoForm({ className }: BrevoFormProps) {
  // Light form URL only
  const formUrl =
    "https://44603cd0.sibforms.com/serve/MUIFABoKEvv6R402tIYwDN7CAVDprA6KkdTRUwF7yCOkpXxPL3E51TEu_833RrheCSOFk6Rc9PXNU3pWF9HlGIJA33fMgEohZPr7FKDJoJUQT6IcXY5m1V_L4z6pUcWryrew06HWYWqUUb9ilni_WA-h8uMKMGGtFm13NU6wp0gHL4F3Ft9jiQnB0U7vh7CpfBMNiO8gnhlERLNs";

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
