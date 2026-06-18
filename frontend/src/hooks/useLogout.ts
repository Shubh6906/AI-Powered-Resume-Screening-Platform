import { removeToken } from "../lib/auth";

export function logout() {
  removeToken();

  window.location.href =
    "/login";
}