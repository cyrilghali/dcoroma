export function listAllCities(): string[] {
  return ['bologna', 'catania', 'firenze', 'genova', 'novara', 'roma', 'torino']
}

export async function getCityData(city) {
  try {
    const data = await import(`../data/churches/${city}`)
    console.log('Get city data', data.default)
    return data.default
  } catch (err) {
    console.error(`Could not load data for city: ${city}`, err)
    return null // Handle the error as you see fit
  }
}

// lib/churchData.js
export async function getAllChurchSlugs() {
  const cities = listAllCities()
  const paths: any[] = []

  for (const city of cities) {
    const cityData = await getCityData(city)
    if (cityData) {
      cityData.forEach((church) => {
        paths.push({
          params: { city, slug: church.slug },
        })
      })
    }
  }

  return paths
}

export async function getChurchData(city, slug) {
  const cityData = await getCityData(city)
  if (!cityData) return null

  const churchData = cityData.find((church) => church.slug === slug)
  return churchData || null
}
