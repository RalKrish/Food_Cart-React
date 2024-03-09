import React from "react";
import { useState } from "react";
import "./NewForm.css";

const NewForm = () => {
  const [user, setUser] = useState({
    Name: "Rahul Krishna",
    Age: 25,
    gender: "Female",
    isMarried: true,
    nationality:'India',
    bio:'write something'
  });

function modifierFn(ev){
  const modifier = ev.target.name
  console.log(modifier)
  const value = ev.target.type ==="checkbox" ? ev.target.checked :  (ev.target.value);
  setUser({...user,[modifier]: value})
}


  return (
    <>
      <table className="table1">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.Name}</td>
          </tr>

          <tr>
            <th>Age</th>
            <td>{user.Age}</td>
          </tr>

          <tr>
            <th>Gender</th>
            <td>{user.gender}</td>
          </tr>

          <tr>
            <th>Marital Status</th>
            <td>{user.isMarried ? "Married" : "Unmarried"}</td>
          </tr>

          <tr>
            <th>Nationality</th>
            <td>{user.nationality}</td>
          </tr>

          <tr>
            <th>Text</th>
            <td>{user.bio}</td>
          </tr>


        </tbody>
      </table>

      <form>
        <table className="table2">
          <tbody>
            <tr>
              <th>
                <label htmlFor="theName">Name</label>
              </th>
              <td>
                <input name='Name' type="text" id="theName" onChange={modifierFn}></input>
              </td>
            </tr>

            <tr>
              <th>
                <label htmlFor="Age">Age</label>
              </th>
              <td>
                <input name="Age" type="text" id="Age" onChange={modifierFn} ></input>
              </td>
            </tr>

            <tr className="gender">
              <th>Gender</th>
              <td>
                <label htmlFor="male">
                  Male
                  <input  onChange={modifierFn} type="radio" id="male" checked={user.gender=="Male"} value="Male" name="gender" />
                </label>

                <label htmlFor="female">
                  Female
                  <input onChange={modifierFn} type="radio" id="female" checked={user.gender=='Female'} value="Female" name="gender" />
                </label>
              </td>
            </tr>

            <tr>
              <th>
                <label htmlFor="marital">Marital Status</label>
              </th>
              <td>
                <input id="marital" name="isMarried" onChange={modifierFn} type="checkbox" checked={user.isMarried} id="marital"></input>
              </td>
            </tr>
          </tbody>
        </table>
    <div>
      <label htmlFor="selection">Nationality</label>
      <select name="nationality" id="selection" onChange={modifierFn}>

        <option disabled >Select one from the list</option>
        <option>India</option>
        <option>Australia</option>
        <option>Pakistan</option>
        <option>China</option>
        <option>Bhutan</option>
        <option>Sri-Lanka</option>
      </select>
    </div>

    <textarea onChange={modifierFn} name="bio" id="bio" cols={25} rows={5} value={user.bio} placeholder="Write something about you">

    </textarea>

      </form>
    </>
  );
};

export default NewForm;
