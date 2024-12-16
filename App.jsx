import IconCalculator from "./assets/icon-calculator.svg"
import IlustrationEmpty from "./assets/illustration-empty.svg"
import "./styles/App.pcss"

export default function App() {
  return (
    <>
      <section className="sect-form">
        <div>
          <h1 className="sect-form__title">Mortgage Calculator</h1>
          <a className="sect-form__clear" href="#">
            Clear All
          </a>
        </div>
        <form className="sect-form__form">
          <label className="sect-form__form__label lg:col-span-2">
            Mortgage Amount
            <div className="sect-form__form__label__contain flex-row-reverse">
              <input
                type="number"
                min={0}
                className="sect-form__form__label__contain__input"
              />
              <div className="sect-form__form__label__contain__type">£</div>
            </div>
          </label>
          <label className="sect-form__form__label mr-5">
            Mortgage Term
            <div className="sect-form__form__label__contain">
              <input
                type="number"
                className="sect-form__form__label__contain__input"
              />
              <div className="sect-form__form__label__contain__type">%</div>
            </div>
          </label>
          <label className="sect-form__form__label">
            Interest Rate
            <div className="sect-form__form__label__contain">
              <input
                type="number"
                className="sect-form__form__label__contain__input"
              />
              <div className="sect-form__form__label__contain__type sect-form__form__label__contain__type--rate">
                years
              </div>
            </div>
          </label>
          <label className="sect-form__form__label lg:col-span-2">
            Mortgage Type
            <div className="active sect-form__form__label__contain sect-form__form__label__contain--type">
              <div className="sect-form__form__label__contain__select">
                <span></span>
              </div>
              Repayment
            </div>
            <div className="sect-form__form__label__contain sect-form__form__label__contain--type mb-4">
              <div className="sect-form__form__label__contain__select">
                <span></span>
              </div>
              Interest Only
            </div>
          </label>
          <button className="sect-form__form__button lg:col-span-2">
            <img src={IconCalculator} alt="Icon of a calculator" /> Calculate
            Repayments
          </button>
        </form>
      </section>
      {/* Empty results */}
      <section className="sect-empty" hidden>
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
      <section className="sect-result">
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
              <span>£{(1797.74).toLocaleString()}</span>
            </h3>
            <hr className="sect-result__contain__result__line" />
            <h3 className="sect-result__contain__result__total">
              Total you&apos;ll repay over the term
              <span>£{(539322.94).toLocaleString()}</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}
