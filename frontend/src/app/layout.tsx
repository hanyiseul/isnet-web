import type { Metadata } from "next";
import "@/shared/styles/index.css";
import "./globals.css";
import Header from "@/shared/layout/Header/Header";
import Aside from "@/shared/layout/Aside/Aside";
import ToastProvider from "@/shared/components/Toast/ToastProvider";
import QueryProvider from "@/shared/providers/QueryProvider";

export const metadata: Metadata = {
  title: "ISNET | Information Science Network",
  description: "ISNET | 숭실대학교 정보과학대학원 스타트업 포럼",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <ToastProvider>
            <div className="container">
              <Header />
              <Aside />
              <main>
                {children}
              </main>
            </div>
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
