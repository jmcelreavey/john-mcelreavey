import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { SiteWrapper } from "../components/layouts/SiteWrapper";
import { NavBar } from "../components/elements/NavBar";
import { DarkModeToggle } from "../components/elements/DarkModeToggle";
import { NavBarItem } from "../components/elements/NavBarItem";
import { NavBarItemContainer } from "../components/elements/NavBarItemContainer";
import { ProfileIcon } from "../components/elements/ProfileIcon";
import { Logo } from "../components/elements/Logo";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const navigation = (
    <NavBar key={"navigation"}>
      <Logo />
      <DarkModeToggle />
      <NavBarItemContainer
        endContent={
          <div className="hidden lg:block">
            <ProfileIcon />
          </div>
        }
      >
        <NavBarItem title="Home" path="/" />
        <div className="mt-5 pt-5 border-t lg:hidden">
          <ProfileIcon />
        </div>
      </NavBarItemContainer>
    </NavBar>
  );

  return (
    <SiteWrapper navigation={navigation}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SiteWrapper>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
