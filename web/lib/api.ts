export async function getFullProductDetails(id: string) {
  const res = await fetch("http://localhost:8000/api/manufacturer/products/scanqr", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
