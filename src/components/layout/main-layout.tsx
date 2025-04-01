"use client";
import { useEffect, useRef, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import SearchComponent from "./SearchComponent";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const isMobile = useMediaQuery({ maxWidth: 670 });
  const [isHome, setIsHome] = useState(false);
  const hideLayout = ["/login", "/register"].includes(pathname);

  useEffect(() => {
    if (pathname === '/') {
      setIsHome(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) >= 140) {
        if (headerRef.current) {
          if (currentScrollY > lastScrollY.current) {
            headerRef.current.style.transform = "translateY(-50%)";
          } else {
            headerRef.current.style.transform = "translateY(0)";
          }
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {!hideLayout && (
        <header
          ref={!isMobile && isHome ? headerRef : undefined}
          className={`fixed top-0  transition-transform duration-300 left-0 w-full shadow-md z-50`}
        >
          <div className="bg-[#0D263B] py-[14px]">
            <HeaderComponent />
          </div>
          {isHome ? (
            <div
              className={`bg-[#fff] max-[670px]:hidden py-[10px] shadow-md  w-full `}
            >
              <SearchComponent buttonSize="lg" />
            </div>
          ) : (
            ""
          )}
        </header>
      )}

      <main>{children}</main>
      {!hideLayout && (
        <footer className="bg-[#0A223D] text-white py-8 ">
          <FooterComponent />
        </footer>
      )}
    </>
  );
};

export default MainLayout;
