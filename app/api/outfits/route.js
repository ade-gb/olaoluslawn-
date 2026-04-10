import { outfits } from "../../../lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json({ items: outfits });
}
