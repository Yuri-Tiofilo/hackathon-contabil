import { parseCookies } from "nookies"

export async function recoverUserInformation() {
  const { 'nextauth.user': user } = parseCookies()

  const userFormatted = JSON.parse(user)

  return {
    user: userFormatted
  }
}