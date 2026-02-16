import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #f8fafb 0%, #e8f0f6 50%, #f0f7f3 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "4px",
              backgroundColor: "#4aba8a",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              color: "#4aba8a",
              fontWeight: 600,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Software Engineer
          </span>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#1a2332",
            lineHeight: 1,
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          Errol Mc
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#6b7a8d",
            lineHeight: 1.4,
            maxWidth: "600px",
          }}
        >
          Building polished, cross-platform experiences from cloud to client
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {["C# / .NET", "React", "TypeScript", "Azure"].map((tech) => (
            <span
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                backgroundColor: "rgba(59, 130, 196, 0.1)",
                color: "#3b82c4",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
