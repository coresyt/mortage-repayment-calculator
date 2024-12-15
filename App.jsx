import IconCalculator from "./assets/icon-calculator.svg"
import IlustrationEmpty from "./assets/illustration-empty.svg"

export default function App() {
  return (
    <main>
      <h1>Mortgage Calculator</h1>
      <a href="#">Clear All</a>
      <form>
        <br />
        <label>
          Mortgage Amount
          <div>
            <div>£</div>
            <input type="number" />
          </div>
        </label>
        <label>
          Mortgage Term
          <div>
            <input type="number" />
            <div>%</div>
          </div>
        </label>
        <label>
          Interest Rate
          <div>
            <input type="number" />
            <div>years</div>
          </div>
        </label>
        <br />
        <label>
          Mortgage Type
          <div>
            <input type="checkbox" />
            Repayment
          </div>
          <div>
            <input type="checkbox" />
            Interest Only
          </div>
        </label>
        <button>
          <img src={IconCalculator} alt="Icon of a calculator" /> Calculate
          Repayments
        </button>
      </form>
      {/* Empty results */}
      <section>
        <img src={IlustrationEmpty} alt="The illustration of the empty form" />
        <h2>Results shown here</h2>
        <p>
          Complete the form and click “calculate repayments” to see what <br />
          your monthly repayments would be.
        </p>
      </section>
      {/* Completed results */}
      <section hidden>
        <h2>Your results</h2>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <div>
          <h3>
            Your monthly repayments
            <span>£1,797.74</span>
          </h3>
          <hr />
          <h3>
            Total you&apos;ll repay over the term
            <span>£539,322.94</span>
          </h3>
        </div>
      </section>
    </main>
  )
}
