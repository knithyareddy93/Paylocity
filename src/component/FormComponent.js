import React, { useState } from "react";

const FormComponent = () => {
  const initialData = {
    empName: "",
    dependents: []
  };

  const [finalData, setFinalData] = useState(null);
  const [formData, setFormData] = useState(initialData);
  const renderDependent = () => {
    return formData.dependents.map((dependent, index) => (
      <div key={`${dependent.name} - ${index}`}>
        <hr />
        <br />
        <div className="col-md-6">
          <label htmlFor="name">Dependent Relation:</label>
          <input
            type="text"
            name="dRelation"
            value={dependent.dRelation}
            onChange={(event) => handleChangeInner(index, event)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="name">Dependent Name:</label>
          <input
            type="text"
            name="dName"
            value={dependent.dName}
            onChange={(event) => handleChangeInner(index, event)}
          />
        </div>
        <div className="col-md-3">
          <button
            type="button"
            className="red half"
            onClick={() => deleteDependent(index)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const calculate = (e) => {
    if (formData.empName) {
      const BASIC = 2000;

      const NUM_OF_PAYCHECKS = 26;
      //x
      let dependentAmount = 500;
      //m
      let employeeBenifit = 1000;
      //condition to check name starting with 'A'
      let matching_dnames = 0;
      //if more than 1 dependants this condition should effect to all
      let numOfDependents = formData.dependents.length;
      if (numOfDependents) {
        formData.dependents.forEach((ele, index) => {
          if (ele.dName.match(/^A|^a/)) matching_dnames += 1;
        });
      }
      if (formData.empName.match(/^A|^a/)) {
        employeeBenifit = employeeBenifit - (10 / 100) * employeeBenifit;
      }
      console.log("basic", BASIC * NUM_OF_PAYCHECKS);
      console.log("EmployeeBenifit", employeeBenifit);
      console.log("MATCHING NAMES", matching_dnames);
      console.log(
        "MATCHING NAMES with 10 dName%",
        matching_dnames * ((10 / 100) * dependentAmount)
      );
      console.log(
        "dependentdeductionaftervalidation",
        numOfDependents * dependentAmount -
          matching_dnames * ((10 / 100) * dependentAmount)
      );

      let amountAfterDeductions =
        employeeBenifit +
        (numOfDependents * dependentAmount -
          matching_dnames * ((10 / 100) * dependentAmount));
      let totalPerYear = BASIC * NUM_OF_PAYCHECKS - amountAfterDeductions;

      console.log("TOTAL Dependents :- ", numOfDependents);
      console.log("FINAL SUM:- ", totalPerYear);
      setFinalData({
        basic: BASIC * NUM_OF_PAYCHECKS,
        employeeBenifit,
        employeeDiscount: (10 / 100) * employeeBenifit,
        matchingName: matching_dnames,
        matchingDName: matching_dnames * ((10 / 100) * dependentAmount),
        dependentDedut:
          numOfDependents * dependentAmount -
          matching_dnames * ((10 / 100) * dependentAmount),
        finalValue: totalPerYear
      });
    }
  };

  const resetForm = () => {
    setFinalData(null);
    setFormData(initialData);
  };
  const addDependent = () => {
    setFormData(() => ({
      ...formData,
      dependents: [...formData.dependents, { dName: "", dRelation: "" }]
    }));
  };

  const deleteDependent = (i) => {
    let dependents = formData.dependents;
    dependents.splice(i, 1);
    setFormData(() => ({
      ...formData,
      dependents
    }));
  };
  const handleChangeInner = (i, event) => {
    let dependents = formData.dependents;
    dependents[i][event.target.name] = event.target.value;
    setFormData(() => ({
      ...formData,
      dependents
    }));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <form id="paylocity-challenge">
            <h1>Paylocity</h1>
            <fieldset>
              <legend>Employee Info</legend>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="name">Employee Full Name:</label>
                  <input
                    type="text"
                    name="empName"
                    placeholder="Full Name"
                    value={formData.empName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {formData.dependents.length ? renderDependent() : null}
              <button
                type="button"
                className="half orange"
                onClick={addDependent}
              >
                Add Dependent
              </button>
            </fieldset>
            <button type="button" className="beside" onClick={calculate}>
              Show Data
            </button>
            <button type="button" className="beside red" onClick={resetForm}>
              Reset
            </button>
            {finalData && (
              <div>
                <br />
                <br />
                <hr />
                <br />
                <h3>
                  Basic : <strong>${finalData.basic}</strong>
                </h3>
                <h3>
                  Total Dependents :-{" "}
                  <strong>{formData.dependents.length}</strong>
                </h3>
                <h3>
                  Number of dependents starting with 'A' :{" "}
                  <strong>{finalData.matchingName}</strong>
                </h3>
                <h3>
                  Dependent names starting with 'A' get 10% discount:
                  <strong>${finalData.matchingDName}</strong>
                </h3>
                <h3>
                  Dependent deduction after validation:{" "}
                  <strong>${finalData.dependentDedut}</strong>
                </h3>
                <h3>
                  Employee deduction:{" "}
                  <strong>${finalData.employeeBenifit}</strong>
                </h3>
                <h3>
                  Final sum:- <strong>${finalData.finalValue}</strong>
                </h3>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
