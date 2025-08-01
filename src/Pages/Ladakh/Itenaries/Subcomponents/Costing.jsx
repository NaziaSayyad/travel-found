import "./Costing.css";

export const CostingPage = ({ data }) => {
  console.log(data, "costing");

  return (
    <div className="costing-table-container">
      <h4 className="costing-heading">COSTING</h4>
      <table className="costing-table">
        <thead>
          <tr>
            <th>Mode of Transportation</th>
            <th>Per Person<br />(Triple sharing basis)</th>
            <th>Per Person<br />(Double sharing basis)</th>
            </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item.mode}</td>
              <td>{item.tripleSharing}</td>
              <td>{item.doubleSharing}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
