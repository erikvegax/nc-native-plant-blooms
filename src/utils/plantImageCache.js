// Module-level cache — persists for the entire browser session.
// Keys are scientific names, values are { imageUrl, attribution } or null (not found).
const cache = new Map();
const pending = new Map(); // in-flight promises, prevents duplicate concurrent requests

export async function fetchPlantImage(scientificName) {
  if (cache.has(scientificName)) {
    return cache.get(scientificName);
  }

  // If a request for this name is already in flight, reuse it
  if (pending.has(scientificName)) {
    return pending.get(scientificName);
  }

  const promise = (async () => {
    try {
      const query = encodeURIComponent(scientificName);
      const res = await fetch(
        `https://api.inaturalist.org/v1/taxa?q=${query}&per_page=1&rank=species`
      );
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      const taxon = data.results?.[0];
      const result = taxon?.default_photo
        ? {
            imageUrl: taxon.default_photo.medium_url,
            attribution: taxon.default_photo.attribution,
          }
        : null;
      cache.set(scientificName, result);
      return result;
    } catch {
      cache.set(scientificName, null);
      return null;
    } finally {
      pending.delete(scientificName);
    }
  })();

  pending.set(scientificName, promise);
  return promise;
}
