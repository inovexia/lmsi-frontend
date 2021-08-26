import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Layout from './layout';
import Dashboard from './teacher/Dashboard';
import Users from './teacher/Users';
import SlotList from './teacher/slots/SlotList';
import MyAppointment from './teacher/slots/MyAppointment';
import CreateSlot from './teacher/slots/CreateSlot';
import Settings from './teacher/Settings';
import InviteUser from './teacher/InviteUser';
import EditUser from './teacher/EditUser';
import ChangePassword from './teacher/ChangePassword';
import EnrolledCourse from './teacher/EnrolledCourse';
import TestTaken from './teacher/TestTaken';

function App() {
  return (
    <div className='App'>
      <Layout />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/teacher-dashboard' component={Dashboard} />
        <Route exact path='/teacher-dashboard/users' component={Users} />
        <Route exact path='/teacher-dashboard/slots' component={SlotList} />
        <Route
          exact
          path='/teacher-dashboard/slots/create-slot'
          component={CreateSlot}
        />
        <Route
          exact
          path='/teacher-dashboard/slots/my-appointments'
          component={MyAppointment}
        />
        <Route exact path='/teacher-dashboard/settings' component={Settings} />
        <Route
          exact
          path='/teacher-dashboard/users/invite'
          component={InviteUser}
        />
        <Route
          exact
          path='/teacher-dashboard/users/edit'
          component={EditUser}
        />
        <Route
          exact
          path='/teacher-dashboard/users/change-password'
          component={ChangePassword}
        />
        <Route
          exact
          path='/teacher-dashboard/users/enrolled-course'
          component={EnrolledCourse}
        />
        <Route
          exact
          path='/teacher-dashboard/users/test-taken'
          component={TestTaken}
        />
      </Switch>
    </div>
  );
}

export default App;
