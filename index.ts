import { msg } from "./const.ts";

export default function (req: Request) {
  return new Response(msg, { status: 200 });
}
