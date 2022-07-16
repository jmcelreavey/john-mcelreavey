import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { NavBar } from "../components/elements/NavBar";
import { NavBarItem } from "../components/elements/NavBarItem";
import { ProfileIcon } from "../components/elements/ProfileIcon";
import { Logo } from "../components/elements/Logo";
import { useRouter } from "next/router";
import { getBaseUrl } from "../utils/getBaseUrl";
import "@fontsource/cedarville-cursive";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const Navigation = () => (
    <NavBar
      key={"navigation"}
      startContent={<Logo />}
      endContent={<ProfileIcon />}
    >
      <NavBarItem
        selected={router.pathname === "/blog"}
        title="Blog"
        path="/blog"
      />
      <NavBarItem
        selected={router.pathname === "/projects"}
        title="Projects"
        path="/projects"
      />
    </NavBar>
  );

  return (
    <SessionProvider session={session}>
      <Navigation />
      <Component {...pageProps} />
    </SessionProvider>
  );
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
