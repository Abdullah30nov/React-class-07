
const Table = ({records})=>{
    return(
        <>
        <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Occupation</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index)=> (
            <tr key={index}>
              <td>{record.FirstName}</td>
              <td>{record.LastName}</td>
              <td>{record.Email}</td>
              <td>{record.Occupation}</td>
              <td>{record.City}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default Table