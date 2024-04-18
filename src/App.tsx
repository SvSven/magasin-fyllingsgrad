import './App.css'
import { useEffect, useState } from 'react'
import { ENDPOINTS, convertToPercentage } from './util'
import { Grid, StatCard, ProgressBar } from './components'
import type { RegionData, ResevoirStatistic, ResevoirData } from './types'

function App() {
  const [resevoirData, setResevoirData] = useState<ResevoirData | null>(null)
  const [regions, setRegions] = useState<RegionData | null>(null)

  const fetchData = async () => {
    const statsResponse = await fetch(ENDPOINTS.stats_last_week)
    const statsResult = await statsResponse.json()

    if (statsResult) {
      setResevoirData({
        NO: statsResult.find((item: ResevoirStatistic) => item.omrType === 'NO'),
        EL: statsResult
          .filter((item: ResevoirStatistic) => item.omrType === 'EL')
          .sort((a: ResevoirStatistic, b: ResevoirStatistic) => a.omrnr - b.omrnr),
        VASS: statsResult
          .filter((item: ResevoirStatistic) => item.omrType === 'VASS')
          .sort((a: ResevoirStatistic, b: ResevoirStatistic) => a.omrnr - b.omrnr),
        date: statsResult[0].dato_Id,
      })
    }

    const regionsResponse = await fetch(ENDPOINTS.regions)
    const regionsResult = await regionsResponse.json()

    if (regionsResult) {
      setRegions(regionsResult[0])
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
    fetchData()
  }, [])

  return (
    <>
      <div className="container">
        {resevoirData && regions && (
          <>
            <section className="section">
              <div className="section is-flex is-align-items-center is-justify-content-center">
                <ProgressBar percentage={parseFloat(convertToPercentage(resevoirData.NO.fyllingsgrad))} />

                <div className="block">
                  <h1 className="title is-1">Fyllingsgrad</h1>
                  <h2 className="subtitle is-3">Gjennomsnitt fyllingsgrad i hele norge</h2>

                  <progress
                    className="progress is-small is-primary"
                    value={convertToPercentage(resevoirData.NO.fyllingsgrad)}
                    max="100"
                  >
                    {convertToPercentage(resevoirData.NO.fyllingsgrad)}%
                  </progress>
                </div>
              </div>
            </section>

            <section className="section">
              <h2 className="title">Elspot</h2>
              <Grid type="fixed">
                {resevoirData.EL.map((item) => {
                  const info = regions.elspot.find((i) => i.omrnr === item.omrnr)

                  return (
                    <Grid.Cell>
                      <StatCard
                        key={`${item.omrType}-${item.omrnr}`}
                        name={info?.navn_langt || ''}
                        description={info?.beskrivelse || ''}
                        level={item.fyllingsgrad}
                      />
                    </Grid.Cell>
                  )
                })}
              </Grid>
            </section>
            <section className="section">
              <h2 className="title">Vassdrag</h2>
              <Grid type="fixed">
                {resevoirData.VASS.map((item) => {
                  const info = regions.vassdrag.find((i) => i.omrnr === item.omrnr)

                  return (
                    <Grid.Cell>
                      <StatCard
                        key={`${item.omrType}-${item.omrnr}`}
                        name={info?.navn_langt || ''}
                        description={info?.beskrivelse || ''}
                        level={item.fyllingsgrad}
                      />
                    </Grid.Cell>
                  )
                })}
              </Grid>
            </section>
          </>
        )}
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Statistikk basert på data fra{' '}
            <a href="https://www.nve.no/energi/analyser-og-statistikk/magasinstatistikk/">NVE</a>.
          </p>
          {resevoirData && <p>Sist oppdadert: {resevoirData.date}</p>}
        </div>
      </footer>
    </>
  )
}

export default App
