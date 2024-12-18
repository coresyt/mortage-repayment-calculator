import { useState } from "react"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"
import IconCalculator from "./assets/icon-calculator.svg"
import IlustrationEmpty from "./assets/illustration-empty.svg"
import "./styles/App.pcss"

export default function App() {
  const style = (...str) => twMerge(clsx(str))
  const [amount, setAmount] = useState(0)
  const [term, setTerm] = useState(0)
  const [rate, setRate] = useState(0)
  const [type, setType] = useState(0)
  const [result, setResult] = useState({
    resultWithInterest: {
      total: "",
      monthly: ""
    },
    isActive: false
  })

  /** @author miteshp98 */
  const formatNumber = (number) =>
    Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP"
    }).format(number)

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleCreateResult = (e) => {
    e.preventDefault()
    /** @author miteshp98 */
    const monthlyInterest = rate / 100 / 12
    const numberOfPayment = term * 12
    const onePlusPowerN = Math.pow(1 + monthlyInterest, numberOfPayment)
    const monthly =
      (amount * (monthlyInterest * onePlusPowerN)) / (onePlusPowerN - 1)
    const totalRepayment = monthly * numberOfPayment
    const monthlyRepayment = formatNumber(monthly)
    const totalRepaymentRounded = formatNumber(totalRepayment)

    setResult({
      isActive: true,
      resultWithInterest: {
        monthly: monthlyRepayment,
        total: totalRepaymentRounded
      }
    })
  }

  /** @type {React.MouseEventHandler<HTMLAnchorElement>} */
  const handleClearAllFields = (e) => {
    e.preventDefault()
    setAmount(0)
    setTerm(0)
    setType(0)
    setResult({
      resultWithInterest: { monthly: "", total: "" },
      isActive: false
    })
  }

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   * @param {'rate' | 'amount' | 'term'} type
   */
  const handleChangeInput = (e, type) => {
    const $el = e.currentTarget

    type === "amount" && setAmount($el.value)
    type === "term" && setTerm($el.value)
    type === "rate" && setRate($el.value)
  }

  return (
    <>
      <section className="sect-form">
        <div>
          <h1 className="sect-form__title">Mortgage Calculator</h1>
          <a
            className="sect-form__clear"
            href="#"
            onClick={handleClearAllFields}
          >
            Clear All
          </a>
        </div>
        <form className="sect-form__form">
          <label className="sect-form__form__label x-invalid lg:col-span-2">
            Mortgage Amount
            <div className="sect-form__form__label__contain flex-row-reverse">
              <input
                pattern="/^[+-]?(\.\d+|\d+\.|\d+|\d+\.?\d+|\d*\.?\d*[Ee][+-]?\d*)$/gm"
                type="number"
                min={0}
                value={amount ?? 0}
                onChange={(e) => handleChangeInput(e, "amount")}
                className="sect-form__form__label__contain__input"
              />
              <div className="sect-form__form__label__contain__type">£</div>
            </div>
            <p className="amount hidden">This is field is required</p>
          </label>
          <label className="sect-form__form__label">
            Interest Rate
            <div className="sect-form__form__label__contain">
              <input
                pattern="/^[+-]?(\.\d+|\d+\.|\d+|\d+\.?\d+|\d*\.?\d*[Ee][+-]?\d*)$/gm"
                type="number"
                min={0}
                value={rate ?? 0}
                onChange={(e) => handleChangeInput(e, "rate")}
                className="sect-form__form__label__contain__input"
              />
              <div className="sect-form__form__label__contain__type sect-form__form__label__contain__type--rate">
                years
              </div>
            </div>{" "}
            <p className="rate hidden">This is field is required</p>
          </label>
          <label className="sect-form__form__label lg:ml-5">
            Mortgage Term
            <div className="sect-form__form__label__contain">
              <input
                pattern="/^[+-]?(\.\d+|\d+\.|\d+|\d+\.?\d+|\d*\.?\d*[Ee][+-]?\d*)$/gm"
                type="number"
                min={0}
                value={term ?? 0}
                onChange={(e) => handleChangeInput(e, "term")}
                className="sect-form__form__label__contain__input"
              />
              <div className="sect-form__form__label__contain__type">%</div>
            </div>
            <p className="term hidden">This is field is required</p>
          </label>
          <label className="sect-form__form__label lg:col-span-2">
            Mortgage Type
            <div
              className={style(
                type === 1 ? "active" : "",
                "sect-form__form__label__contain sect-form__form__label__contain--type"
              )}
              onClick={() => setType(type !== 1 ? 1 : 2)}
            >
              <div className="sect-form__form__label__contain__select">
                <span></span>
              </div>
              Repayment
            </div>
            <div
              className={style(
                type === 2 ? "active" : "",
                "sect-form__form__label__contain sect-form__form__label__contain--type"
              )}
              onClick={() => setType(type !== 2 ? 2 : 1)}
            >
              <div className="sect-form__form__label__contain__select">
                <span></span>
              </div>
              Interest Only
            </div>
          </label>
          <button
            className="sect-form__form__button lg:col-span-2"
            onClick={handleCreateResult}
          >
            <img src={IconCalculator} alt="Icon of a calculator" /> Calculate
            Repayments
          </button>
        </form>
      </section>
      {/* Empty results */}
      <section
        className="sect-empty"
        hidden={result.isActive !== true ? false : true}
      >
        <div>
          <img
            className="sect-empty__image"
            src={IlustrationEmpty}
            alt="The illustration of the empty form"
          />
          <h2 className="sect-empty__title">Results shown here</h2>
          <p className="sect-empty__desc">
            Complete the form and click “calculate repayments” to see what{" "}
            <br />
            your monthly repayments would be.
          </p>
        </div>
      </section>
      {/* Completed results */}
      <section
        className="sect-result"
        hidden={result.isActive === true ? false : true}
      >
        <div className="sect-result__contain">
          <h2 className="sect-result__contain__title">Your results</h2>
          <p className="sect-result__contain__desc">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="sect-result__contain__result">
            <h3 className="sect-result__contain__result__monthly">
              Your monthly repayments
              <span>{result.resultWithInterest.monthly}</span>
            </h3>
            <hr className="sect-result__contain__result__line" />
            <h3 className="sect-result__contain__result__total">
              Total you&apos;ll repay over the term
              <span>{result.resultWithInterest.total}</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}
