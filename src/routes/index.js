import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../Home'
import Dashboard from '../component/teacher/Dashboard'
import Users from '../component/teacher/Users'
import SlotList from '../component/teacher/slots/SlotList'
import MyAppointment from '../component/teacher/slots/MyAppointment'
import CreateSlot from '../component/teacher/slots/CreateSlot'
import Settings from '../component/teacher/Settings'
import InviteUser from '../component/teacher/InviteUser'
import EditUser from '../component/teacher/EditUser'
import ChangePassword from '../component/teacher/ChangePassword'
import EnrolledCourse from '../component/teacher/EnrolledCourse'
import TestTaken from '../component/teacher/TestTaken'

function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/teacher-dashboard" component={Dashboard} />
      <Route exact path="/teacher-dashboard/users" component={Users} />
      <Route exact path="/teacher-dashboard/slots" component={SlotList} />
      <Route
        exact
        path="/teacher-dashboard/slots/create-slot"
        component={CreateSlot}
      />
      <Route
        exact
        path="/teacher-dashboard/slots/my-appointments"
        component={MyAppointment}
      />
      <Route exact path="/teacher-dashboard/settings" component={Settings} />
      <Route
        exact
        path="/teacher-dashboard/users/invite"
        component={InviteUser}
      />
      <Route exact path="/teacher-dashboard/users/edit" component={EditUser} />
      <Route
        exact
        path="/teacher-dashboard/users/change-password"
        component={ChangePassword}
      />
      <Route
        exact
        path="/teacher-dashboard/users/enrolled-course"
        component={EnrolledCourse}
      />
      <Route
        exact
        path="/teacher-dashboard/users/test-taken"
        component={TestTaken}
      />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routing
