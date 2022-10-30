import { GetServerSidePropsContext, PreviewData } from "next";
import { parseCookies } from "nookies";
import { ParsedUrlQuery } from "querystring";

export function getUserLogged(
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  console.log("tetwtsttytygytg");
  const cookies = parseCookies(ctx);

  if (!cookies["hackathon.token"]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
