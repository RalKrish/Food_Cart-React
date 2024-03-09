import React from 'react'
import './StudentsList.css'
import propTypes from 'prop-types'


const StudentsList = (props) => {
  return (
    <div className='studTable'>
      <table>
        <tbody>
      <tr>
      <th>Name</th>
      <td>{props.name}</td>
      </tr>

      <tr>
      <th>Age</th>
      <td>{props.age}</td>
      </tr>

      <tr>
      <th>Marital Status</th>
      <td>{props.MaritalStatus}</td>
      </tr>
      </tbody>
    </table>


    </div>
  )

}

StudentsList.propTypes = {
  name: propTypes.string,
  age: propTypes.number, // Corrected from propTypes.age to PropTypes.number
  maritalStatus: propTypes.string // Corrected to lowercase
};
StudentsList.defaultProps = {
  name:'No Name',
  age:28,
  MaritalStatus:'unknown'
}

export default StudentsList