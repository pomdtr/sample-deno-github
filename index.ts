import { msg } from "./const";

export default function (req: Request) {
  return new Response(msg, { status: 200 });
}
