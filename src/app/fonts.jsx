import localFont from "next/font/local";

export const degularDemo = localFont({
  src: [
    {
      path: "../../public/fonts/fonts/fonnts.com-DegularDemo-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/fonts/fonnts.com-DegularDemo-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/fonts/fonnts.com-DegularDemo-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/fonts/fonnts.com-DegularDemo-Semibold.otf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-degular-demo",
});
