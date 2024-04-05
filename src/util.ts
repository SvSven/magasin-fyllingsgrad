export const convertToPercentage = (i: number) => (i * 100).toFixed(1)

export const ENDPOINTS = {
  regions: 'https://biapi.nve.no/magasinstatistikk/api/Magasinstatistikk/HentOmråder',
  stats_last_week: 'https://biapi.nve.no/magasinstatistikk/api/Magasinstatistikk/HentOffentligDataSisteUke',
}
