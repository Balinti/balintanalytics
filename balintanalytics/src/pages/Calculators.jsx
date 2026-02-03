import { useState } from 'react'
import { PageTransition, ParallaxSection, ScrollReveal } from '../components/motion'
import '../styles/calculators.css'

export default function Calculators() {
  const [activeCalc, setActiveCalc] = useState('roas')

  // ROAS Calculator
  const [roasInputs, setRoasInputs] = useState({ revenue: '', spend: '' })
  const [roasResult, setRoasResult] = useState(null)

  const calculateROAS = () => {
    const revenue = parseFloat(roasInputs.revenue)
    const spend = parseFloat(roasInputs.spend)
    if (revenue && spend) {
      setRoasResult((revenue / spend).toFixed(2))
    }
  }

  // Sample Size Calculator
  const [sampleInputs, setSampleInputs] = useState({ population: '', confidence: 95, margin: 5 })
  const [sampleResult, setSampleResult] = useState(null)

  const calculateSampleSize = () => {
    const p = 0.5
    const z = { 90: 1.645, 95: 1.96, 99: 2.576 }[sampleInputs.confidence] || 1.96
    const e = sampleInputs.margin / 100
    const n = Math.ceil((z * z * p * (1 - p)) / (e * e))
    setSampleResult(n)
  }

  return (
    <PageTransition>
      <div className="calculators">
        <ParallaxSection speed={0.2}>
          <section className="page-header">
            <div className="container">
              <h1>Data Calculators</h1>
              <p>Useful tools for analytics and decision-making</p>
            </div>
          </section>
        </ParallaxSection>

        <ScrollReveal>
          <section className="calculators-content">
            <div className="container">
              <div className="calc-selector">
                <button
                  className={`calc-btn ${activeCalc === 'roas' ? 'active' : ''}`}
                  onClick={() => setActiveCalc('roas')}
                >
                  ROAS Calculator
                </button>
                <button
                  className={`calc-btn ${activeCalc === 'sample' ? 'active' : ''}`}
                  onClick={() => setActiveCalc('sample')}
                >
                  Sample Size Calculator
                </button>
              </div>

              <div className="calculator">
                {activeCalc === 'roas' && (
                  <div className="calc-form">
                    <h2>ROAS Calculator</h2>
                    <p>Calculate your Return On Ad Spend</p>

                    <div className="form-group">
                      <label htmlFor="roas-revenue">Revenue Generated ($)</label>
                      <input
                        type="number"
                        id="roas-revenue"
                        placeholder="e.g., 10000"
                        value={roasInputs.revenue}
                        onChange={(e) => setRoasInputs({...roasInputs, revenue: e.target.value === '' ? '' : e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="roas-spend">Ad Spend ($)</label>
                      <input
                        type="number"
                        id="roas-spend"
                        placeholder="e.g., 2000"
                        value={roasInputs.spend}
                        onChange={(e) => setRoasInputs({...roasInputs, spend: e.target.value === '' ? '' : e.target.value})}
                      />
                    </div>

                    <button className="btn btn-primary" onClick={calculateROAS}>
                      Calculate ROAS
                    </button>

                    {roasResult && (
                      <div className="result">
                        <h3>Your ROAS: {roasResult}x</h3>
                        <p>For every $1 spent on ads, you generated ${roasResult} in revenue</p>
                      </div>
                    )}
                  </div>
                )}

                {activeCalc === 'sample' && (
                  <div className="calc-form">
                    <h2>Sample Size Calculator</h2>
                    <p>Determine the right sample size for your experiments</p>

                    <div className="form-group">
                      <label htmlFor="sample-population">Population Size</label>
                      <input
                        type="number"
                        id="sample-population"
                        placeholder="e.g., 100000"
                        value={sampleInputs.population}
                        onChange={(e) => setSampleInputs({...sampleInputs, population: e.target.value === '' ? '' : e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="sample-confidence">Confidence Level (%)</label>
                      <select id="sample-confidence" value={sampleInputs.confidence} onChange={(e) => setSampleInputs({...sampleInputs, confidence: parseInt(e.target.value)})}>
                        <option value={90}>90%</option>
                        <option value={95}>95%</option>
                        <option value={99}>99%</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="sample-margin">Margin of Error (%)</label>
                      <input
                        type="number"
                        id="sample-margin"
                        placeholder="e.g., 5"
                        value={sampleInputs.margin}
                        onChange={(e) => setSampleInputs({...sampleInputs, margin: e.target.value === '' ? '' : e.target.value})}
                      />
                    </div>

                    <button className="btn btn-primary" onClick={calculateSampleSize}>
                      Calculate Sample Size
                    </button>

                    {sampleResult && (
                      <div className="result">
                        <h3>Recommended Sample Size: {sampleResult.toLocaleString()}</h3>
                        <p>Test with at least {sampleResult.toLocaleString()} samples for reliable results</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
