//images imports
import arcade from "../../public/images/icon-arcade.svg";
import advance from "../../public/images/icon-advanced.svg";
import Pro from "../../public/images/icon-pro.svg";
import { Link } from "react-router-dom";

function SelectPlan() {
  return (
    <div className="pt-14 w-full">
      <h1 className="text-4xl font-bold mb-3">Select your plan</h1>
      <p className="text-xl opacity-50 mb-10">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex  mb-8 w-full gap-4">
        <button className="card border-2 active:border-purple-600 bg-base-100 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={arcade} alt="" />
          <h2>Arcade</h2>
          <p>$9/mo</p>
        </button>
        <button className="card active:border-purple-600 border-2 bg-base-100 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={advance} alt="" />
          <h2>Advanced</h2>
          <p>$12/mo</p>
        </button>
        <button className="card active:border-purple-600 border-2 bg-base-100 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={Pro} alt="" />
          <h2>Pro</h2>
          <p>$15/mo</p>
        </button>
      </div>
      <div className="flex items-center justify-center mb-32 py-3 rounded-lg bg-[#F8F9FF] gap-6">
        <p className="text-xl font-semibold">Monthly</p>
        <label
          htmlFor="AcceptConditions"
          className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#022959]"
        >
          <input
            type="checkbox"
            id="AcceptConditions"
            className="peer sr-only"
          />

          <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
        <p className="text-xl font-semibold">Yearly</p>
      </div>
      <div className="flex items-center justify-between">
        <Link to="/" className="opacity-50 font-medium hover:opacity-100">Go Back</Link>
        <div>
          <Link
            to="/pickAddOns"
            className="group relative bg-[#022959] inline-flex items-center justify-center
          overflow-hidden rounded-lg border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-indigo-500"
            href="#"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="text-sm font-medium transition-all group-hover:ms-4">
              Next Step
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectPlan;
