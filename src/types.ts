export type Region = {
  navn: string
  navn_langt: string
  beskrivelse: string
  omrType: string
  omrnr: number
}

export type RegionData = {
  land: Region[]
  elspot: Region[]
  vassdrag: Region[]
}

export type ResevoirStatistic = {
  dato_Id: string
  omrType: string
  omrnr: number
  iso_aar: number
  iso_uke: number
  fyllingsgrad: number
  kapasitet_TWh: number
  fylling_TWh: number
  neste_Publiseringsdato: string
  fyllingsgrad_forrige_uke: number
  endring_fyllingsgrad: number
}

export type ResevoirData = {
  NO: ResevoirStatistic
  EL: ResevoirStatistic[]
  VASS: ResevoirStatistic[]
  date: string
}
