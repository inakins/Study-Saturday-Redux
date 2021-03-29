import React from 'react';
import {fetchStudents, deleteStudentById} from '../redux/store';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler.bind(this)
  }
  
  componentDidMount() {
    this.props.loadStudents();
  }

  clickHandler(id) {
   console.log('here is the clickhandler')
   this.props.deleteAStudent(id)
  }

  render() {
    return (
      <ul>
        {this.props.students.map((student) => (
          <li key={student.id}>
            <div>
              <p>Name: {student.fullName}</p>
              <p>Email: {student.email}</p>
              <Link to={`/students/${student.id}`}>View Detail</Link>
              <br></br>
              <button onClick = {() => this.clickHandler(student.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    )

  }
}

const mapStateToProps = (state) => ({
  students: state.students
});

const mapDispatchToProps = (dispatch) => ({
  loadStudents: () => dispatch(fetchStudents()),
  deleteAStudent: (id) => dispatch(deleteStudentById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
